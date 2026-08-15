import Image from "next/image";
import Link from "next/link";
import { books } from "../books";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { futureBooksCopy } from "../site-content";

export default function ExploreSeriesPage() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#17324d]">
      <SiteHeader />

      <section className="happy-explore-bg relative overflow-hidden px-5 py-16 text-[#17324d] sm:px-8 lg:px-10">
        <div className="storybook-explore-graphics" aria-hidden="true">
          <span className="storybook-bookmark explore-bookmark" />
          <span className="storybook-star star-yellow explore-star-one" />
          <span className="storybook-star star-green explore-star-two" />
          <span className="storybook-heart heart-red explore-heart" />
          <span className="storybook-dash dash-blue explore-dash-one" />
          <span className="storybook-dash dash-purple explore-dash-two" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#8f4f2e]">
                Explore the series
              </p>
              <h1 className="mt-4 text-4xl font-black sm:text-5xl">
                Start or grow your collection.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5a4b3d]">
                Each book is made to support young hearts with faith,
                confidence, prayer, and positive self-talk.
              </p>
            </div>
            <Link
              href="/books"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#f05c5c] px-6 text-base font-black text-white shadow-[0_12px_24px_rgba(240,92,92,0.2)] transition hover:bg-[#d94848]"
            >
              Buy the Books
            </Link>
          </div>

          <div className="mt-10 grid gap-6">
            {books.map((book) => (
              <article
                key={book.slug}
                className="grid overflow-hidden rounded-md bg-[#fff8ec] text-[#17324d] shadow-xl md:grid-cols-[420px_minmax(0,1fr)]"
              >
                <div className="relative aspect-[3/2] w-full bg-white md:h-[280px] md:w-[420px] md:self-center">
                  <Image
                    src={book.listingImage}
                    alt={`${book.title}: ${book.subtitle} listing image`}
                    fill
                    sizes="(min-width: 768px) 420px, 92vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-sm font-black uppercase" style={{ color: book.accent }}>
                    {book.age}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{book.title}</h2>
                  <p className="mt-1 font-bold text-[#5a4b3d]">{book.subtitle}</p>
                  <p className="mt-4 text-base leading-7 text-[#5a4b3d]">
                    {book.detailedDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {book.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md bg-white px-3 py-2 text-xs font-black text-[#17324d] ring-1 ring-[#ecd7b7]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="happy-author-bg px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-md border border-[#edc582] bg-[#f6dcae] p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            More books are coming soon
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#17324d]">
            A series built to keep growing with your child.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#5a4b3d]">
            {futureBooksCopy}
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
