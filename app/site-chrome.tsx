import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f1ddbd] bg-[#fff8ec]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 whitespace-nowrap font-black text-xl text-[#17324d]"
        >
          <span className="brand-smiley" aria-hidden="true" />
          <span>My Happy Series</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm font-bold text-[#5a4b3d] sm:flex">
          <Link href="/books">Books</Link>
          <Link href="/explore-series">Explore Series</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/author">Author</Link>
        </div>
        <Link
          href="/books"
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#17324d] px-4 text-sm font-black text-white shadow-[0_8px_18px_rgba(23,50,77,0.18)] transition hover:bg-[#0d2238]"
        >
          Buy Books
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#17324d] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="whitespace-nowrap text-xl font-black">My Happy Series</p>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/80">
            <Link href="/books">Books</Link>
            <Link href="/explore-series">Explore Series</Link>
            <Link href="/wholesale">Wholesale</Link>
            <Link href="/author">Author</Link>
          </div>
          <p className="text-sm text-white/72">
            Children&apos;s books for faith, confidence, and happy little hearts.
          </p>
        </div>
      </div>
    </footer>
  );
}
