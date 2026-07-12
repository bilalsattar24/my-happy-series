import Image from "next/image";
import Link from "next/link";
import { benefits, books } from "./books";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#17324d]">
      <SiteHeader />

      <section className="happy-hero-bg relative overflow-hidden">
        <div className="storybook-sprinkles" aria-hidden="true">
          <span className="storybook-heart heart-red hero-heart-one" />
          <span className="storybook-heart heart-purple hero-heart-two" />
          <span className="storybook-star star-yellow hero-star-one" />
          <span className="storybook-star star-green hero-star-two" />
          <span className="storybook-bookmark hero-bookmark" />
          <span className="storybook-dash dash-blue hero-dash-one" />
          <span className="storybook-dash dash-red hero-dash-two" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-[#8f4f2e]">
              Faith, confidence, and joy for little hearts
            </p>
            <h1 className="mt-4 whitespace-nowrap text-5xl font-black leading-[1.02] text-[#17324d] sm:text-6xl lg:text-7xl">
              My Happy Series
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[#5a4b3d]">
              A growing children&apos;s book collection by Umaymah Muhammad,
              created to help Muslim families nurture salah, self-love, and
              positive daily habits through joyful stories.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/books"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#f05c5c] px-6 text-base font-black text-white shadow-[0_12px_24px_rgba(240,92,92,0.25)] transition hover:bg-[#d94848]"
              >
                Buy the Books
              </a>
              <Link
                href="/explore-series"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-[#17324d] px-6 text-base font-black text-[#17324d] transition hover:bg-white/60"
              >
                Explore the Series
              </Link>
            </div>
            <div className="mt-9 max-w-xs text-center">
              <div className="rounded-md border border-[#eccf9f] bg-white/58 px-5 py-4 font-black text-[#17324d]">
                Recommended ages 2-10
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-8">
            <div className="absolute inset-x-8 bottom-4 h-24 rounded-[50%] bg-[#d7a856]/25 blur-2xl" />
            {books.map((book, index) => (
              <div
                key={book.slug}
                className={`relative aspect-[1791/1925] w-[34%] min-w-24 overflow-hidden rounded-md bg-white shadow-2xl ring-4 ring-white ${
                  index === 0
                    ? "z-20 translate-x-10 rotate-[-8deg]"
                    : index === 1
                      ? "z-30 -translate-y-8"
                      : "z-10 -translate-x-10 rotate-[8deg]"
                }`}
              >
                <Image
                  src={book.coverImage}
                  alt={`${book.title}: ${book.subtitle} cover`}
                  fill
                  priority={index === 1}
                  sizes="(min-width: 1024px) 220px, 32vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="happy-why-bg relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10" id="why">
        <div className="storybook-side-notes" aria-hidden="true">
          <span className="storybook-pencil-line note-line-one" />
          <span className="storybook-pencil-line note-line-two" />
          <span className="storybook-star star-purple note-star" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#8f4f2e]">
              Why families choose it
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#17324d] sm:text-5xl">
              Books that feel playful, purposeful, and easy to love.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-md border border-[#d8e9c8] bg-white/90 p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffd85c] text-lg font-black text-[#17324d]">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-[#5a4b3d]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
