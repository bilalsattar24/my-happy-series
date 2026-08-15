#!/usr/bin/env python3
"""Convert the Canva PDF for My Happy Self into an illustrated EPUB."""

from __future__ import annotations

import argparse
import html
import mimetypes
import shutil
import subprocess
import tempfile
import uuid
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image
from pypdf import PdfReader


def split_page_text(raw_text: str, page_number: int) -> list[str]:
    lines = [line.strip() for line in raw_text.splitlines()]
    lines = [line for line in lines if line]
    if lines and lines[0] == str(page_number):
        lines = lines[1:]
    return lines


def page_title(lines: list[str], page_number: int) -> str:
    if not lines:
        return f"Page {page_number}"
    if page_number == 1:
        return "This Book Belongs To"
    if page_number == 2:
        return "A Note For The Reader"
    if page_number == 27:
        return "Remember"
    if page_number == 28:
        return "Leave A Review"
    return " ".join(lines)


def paragraph_html(lines: list[str], page_number: int) -> str:
    if not lines:
        return ""

    if page_number == 1:
        return '<p class="belongs">this book belongs to:</p><p class="write-line">&#160;</p>'

    if page_number == 2:
        paragraphs = []
        current: list[str] = []
        for line in lines:
            current.append(line)
            if line.endswith("."):
                paragraphs.append(" ".join(current))
                current = []
        if current:
            paragraphs.append(" ".join(current))
        return "\n".join(f"<p>{html.escape(p)}</p>" for p in paragraphs)

    body = "<br/>\n".join(html.escape(line) for line in lines)
    return f'<p class="affirmation">{body}</p>'


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def render_cover(cover_pdf: Path, output_image: Path, pdftoppm: str) -> None:
    output_image.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        prefix = Path(tmp) / "cover"
        subprocess.run(
            [pdftoppm, "-jpeg", "-singlefile", "-r", "180", str(cover_pdf), str(prefix)],
            check=True,
        )
        shutil.copyfile(prefix.with_suffix(".jpg"), output_image)


def image_media_type(path: Path) -> str:
    if path.suffix.lower() == ".png":
        return "image/png"
    return "image/jpeg"


def extract_illustrations(interior_pdf: Path, output_dir: Path) -> list[Path | None]:
    reader = PdfReader(str(interior_pdf))
    output_dir.mkdir(parents=True, exist_ok=True)
    page_images: list[Path | None] = []
    for page_number, page in enumerate(reader.pages, start=1):
        candidates = []
        seen = set()
        for image_file in page.images:
            image = image_file.image
            if image is None or image.mode == "L":
                continue
            key = (image.size, len(image_file.data), image_file.name)
            if key in seen:
                continue
            seen.add(key)
            candidates.append((image.width * image.height, len(image_file.data), image))

        if not candidates:
            page_images.append(None)
            continue

        candidates.sort(reverse=True, key=lambda item: (item[0], item[1]))
        image = candidates[0][2]
        target = output_dir / f"illustration-{page_number:02d}.jpg"
        if image.mode == "RGBA":
            background = Image.new("RGB", image.size, "white")
            background.paste(image, mask=image.getchannel("A"))
            background.save(target, quality=90, optimize=True)
        else:
            image.convert("RGB").save(target, quality=90, optimize=True)
        page_images.append(target)
    return page_images


def keep_illustration(page_number: int, image_path: Path | None) -> bool:
    if image_path is None:
        return False
    # The extractable image for this page is only a background wash.
    return page_number != 27


def build_epub(
    interior_pdf: Path,
    cover_pdf: Path,
    output_epub: Path,
    pdftoppm: str,
    title: str,
    author: str,
) -> None:
    reader = PdfReader(str(interior_pdf))
    book_id = f"urn:uuid:{uuid.uuid4()}"

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "epub"
        oebps = root / "OEBPS"
        text_dir = oebps / "text"
        styles_dir = oebps / "styles"
        images_dir = oebps / "images"
        meta_inf = root / "META-INF"

        write_text(root / "mimetype", "application/epub+zip")
        write_text(
            meta_inf / "container.xml",
            """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/package.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
""",
        )

        render_cover(cover_pdf, images_dir / "cover.jpg", pdftoppm)
        page_images = extract_illustrations(interior_pdf, images_dir)

        write_text(
            styles_dir / "book.css",
            """body {
  font-family: serif;
  line-height: 1.45;
  margin: 0;
  padding: 0;
}

.chapter {
  break-after: page;
  break-inside: avoid;
  display: block;
  margin: 0 auto;
  max-width: 34em;
  page-break-after: always;
  page-break-inside: avoid;
  padding: 1.1em 1em;
}

.chapter-long {
  break-inside: auto;
  page-break-inside: auto;
}

h1 {
  font-size: 1.35em;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 1em;
  text-align: center;
}

p {
  font-size: 1em;
  margin: 0 0 0.75em;
}

.cover {
  margin: 0;
  padding: 0;
  text-align: center;
}

.cover img {
  height: auto;
  max-width: 100%;
}

.illustration {
  display: block;
  height: auto;
  margin: 0 auto 0.85em;
  max-height: 48vh;
  max-width: 100%;
  object-fit: contain;
}

.chapter-long .illustration {
  max-height: 32vh;
}

.affirmation {
  font-size: 1.3em;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  text-align: center;
}

.belongs {
  font-size: 1.1em;
  text-align: center;
}

.write-line {
  border-bottom: 0.08em solid currentColor;
  margin: 2.5em auto 0;
  max-width: 16em;
}
""",
        )

        write_text(
            text_dir / "cover.xhtml",
            f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <title>{escape(title)}</title>
  <link rel="stylesheet" type="text/css" href="../styles/book.css"/>
</head>
<body>
  <section class="cover" epub:type="cover" xmlns:epub="http://www.idpf.org/2007/ops">
    <img src="../images/cover.jpg" alt="{escape(title)} cover"/>
  </section>
</body>
</html>
""",
        )

        chapters: list[tuple[str, str]] = [("cover.xhtml", "Cover")]
        for index, page in enumerate(reader.pages, start=1):
            lines = split_page_text(page.extract_text() or "", index)
            title_text = page_title(lines, index)
            body = paragraph_html(lines, index)
            filename = f"page-{index:02d}.xhtml"
            chapters.append((filename, title_text))
            illustration = page_images[index - 1]
            image_html = ""
            if keep_illustration(index, illustration):
                image_html = (
                    f'<img class="illustration" src="../images/{illustration.name}" '
                    f'alt="Illustration for {escape(title_text)}"/>'
                )
            heading = "" if index not in (2, 27, 28) else f"<h1>{html.escape(title_text)}</h1>"
            section_class = "chapter chapter-long" if index in (2, 28) else "chapter"
            write_text(
                text_dir / filename,
                f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <title>{escape(title_text)}</title>
  <link rel="stylesheet" type="text/css" href="../styles/book.css"/>
</head>
<body>
  <section class="{section_class}">
    {image_html}
    {heading}
    {body}
  </section>
</body>
</html>
""",
            )

        nav_items = "\n".join(
            f'      <li><a href="text/{escape(filename)}">{escape(label)}</a></li>'
            for filename, label in chapters
        )
        write_text(
            oebps / "nav.xhtml",
            f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en">
<head>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="styles/book.css"/>
</head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>Table of Contents</h1>
    <ol>
{nav_items}
    </ol>
  </nav>
</body>
</html>
""",
        )

        manifest_items = [
            '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
            '<item id="css" href="styles/book.css" media-type="text/css"/>',
            '<item id="cover-image" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>',
        ]
        for page_number, image_path in enumerate(page_images, start=1):
            if not keep_illustration(page_number, image_path):
                continue
            image_id = image_path.stem.replace("-", "_")
            manifest_items.append(
                f'<item id="{image_id}_image" href="images/{image_path.name}" media-type="{image_media_type(image_path)}"/>'
            )
        spine_items = ['<itemref idref="cover"/>']
        for filename, _label in chapters:
            item_id = filename.removesuffix(".xhtml").replace("-", "_")
            manifest_items.append(
                f'<item id="{item_id}" href="text/{filename}" media-type="application/xhtml+xml"/>'
            )
            if filename != "cover.xhtml":
                spine_items.append(f'<itemref idref="{item_id}"/>')

        write_text(
            oebps / "package.opf",
            f"""<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="book-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="book-id">{escape(book_id)}</dc:identifier>
    <dc:title>{escape(title)}</dc:title>
    <dc:creator>{escape(author)}</dc:creator>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">2026-07-24T00:00:00Z</meta>
  </metadata>
  <manifest>
    {chr(10).join(manifest_items)}
  </manifest>
  <spine>
    {chr(10).join(spine_items)}
  </spine>
</package>
""",
        )

        output_epub.parent.mkdir(parents=True, exist_ok=True)
        if output_epub.exists():
            output_epub.unlink()
        with zipfile.ZipFile(output_epub, "w") as epub:
            epub.write(root / "mimetype", "mimetype", compress_type=zipfile.ZIP_STORED)
            for path in sorted(root.rglob("*")):
                if path.is_file() and path.name != "mimetype":
                    epub.write(
                        path,
                        path.relative_to(root).as_posix(),
                        compress_type=zipfile.ZIP_DEFLATED,
                    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--interior-pdf", required=True, type=Path)
    parser.add_argument("--cover-pdf", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--pdftoppm", required=True)
    parser.add_argument("--title", default="My Happy Self")
    parser.add_argument("--author", default="Maymah")
    args = parser.parse_args()

    mimetypes.add_type("application/xhtml+xml", ".xhtml")
    build_epub(
        args.interior_pdf,
        args.cover_pdf,
        args.output,
        args.pdftoppm,
        args.title,
        args.author,
    )


if __name__ == "__main__":
    main()
