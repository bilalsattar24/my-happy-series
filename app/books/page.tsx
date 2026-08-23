import { BookImageSlider } from "../book-image-slider";
import { books } from "../books";
import { SiteFooter, SiteHeader } from "../site-chrome";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#17324d]">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            Shop the series
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight">
            Choose the story your child will reach for next.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5a4b3d]">
            Each My Happy book supports your child&apos;s growth through warm
            stories about salah, self-love, positive thinking, and becoming
            their happiest self.
          </p>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.slug}
                className="flex h-full flex-col overflow-hidden rounded-md border border-[#eed8b8] bg-white shadow-sm"
              >
                <BookImageSlider
                  className="bg-[#fff8ec]"
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  slides={
                    book.slideImages ?? [
                      {
                        src: book.listingImage,
                        alt: `${book.title}: ${book.subtitle} listing image`,
                      },
                    ]
                  }
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <p className="text-sm font-black uppercase" style={{ color: book.accent }}>
                      {book.age}
                    </p>
                    <p className="text-xl font-black">{book.price}</p>
                  </div>
                  <h3 className="mt-3 text-2xl font-black">{book.theme}</h3>
                  <p className="mt-4 text-base leading-7 text-[#5a4b3d]">
                    {book.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <a
                      href={book.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#17324d] px-5 text-base font-black text-white transition hover:bg-[#0d2238]"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
