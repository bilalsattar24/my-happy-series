import type { Metadata } from "next";
import Link from "next/link";
import { BookImageSlider } from "../book-image-slider";
import { wholesaleBook, wholesaleSlides } from "../books";
import { CopyEmailButton } from "../copy-email-button";
import { SiteFooter, SiteHeader } from "../site-chrome";
import {
  wholesaleAudiences,
  wholesaleEmail,
  wholesaleRequestFields,
} from "../site-content";

export const metadata: Metadata = {
  title: "Wholesale | My Happy Self",
  description:
    "Wholesale copies of My Happy Self for children's hospitals, pediatric practices, therapy clinics, child-life programs, and nonprofit children's organizations.",
};

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#17324d]">
      <SiteHeader />

      <section className="happy-wholesale-bg relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10">
        <div className="storybook-wholesale-graphics" aria-hidden="true">
          <span className="storybook-star star-yellow wholesale-star-one" />
          <span className="storybook-star star-green wholesale-star-two" />
          <span className="storybook-heart heart-purple wholesale-heart" />
          <span className="storybook-dash dash-blue wholesale-dash-one" />
          <span className="storybook-dash dash-red wholesale-dash-two" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            Wholesale
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Bulk copies for hospitals, clinics, and the teams who care for children.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5a4b3d]">
            My Happy Self is available for children&apos;s hospitals, pediatric
            practices, therapy clinics, child-life programs, and nonprofit
            organizations that want to place an encouraging book in the hands of
            young patients and families.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#f05c5c] px-6 text-base font-black text-white shadow-[0_12px_24px_rgba(240,92,92,0.2)] transition hover:bg-[#d94848]"
            >
              Request Wholesale Pricing
            </a>
            <Link
              href="/books"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-[#17324d] px-6 text-base font-black text-[#17324d] transition hover:bg-white/60"
            >
              Shop Individual Copies
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            Who we serve
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black">
            Made for the places children already feel safe.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {wholesaleAudiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-md border border-[#eed8b8] bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black">{audience.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5a4b3d]">
                  {audience.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {audience.places.map((place) => (
                    <li
                      key={place}
                      className="rounded-md bg-[#fff8ec] px-3 py-2 text-sm font-black text-[#17324d] ring-1 ring-[#ecd7b7]"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="happy-explore-bg px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            Available for wholesale
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Wholesale is for My Happy Self.
          </h2>
          <article className="mt-10 grid overflow-hidden rounded-md border border-[#eed8b8] bg-white shadow-sm md:grid-cols-[420px_minmax(0,1fr)]">
            <BookImageSlider slides={wholesaleSlides} />
            <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8">
              <p
                className="text-sm font-black uppercase"
                style={{ color: wholesaleBook.accent }}
              >
                {wholesaleBook.age}
              </p>
              <h3 className="mt-2 text-3xl font-black">{wholesaleBook.title}</h3>
              <p className="mt-1 font-bold text-[#5a4b3d]">
                {wholesaleBook.subtitle}
              </p>
              <p className="mt-4 text-base leading-7 text-[#5a4b3d]">
                {wholesaleBook.detailedDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {wholesaleBook.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md bg-[#fff8ec] px-3 py-2 text-xs font-black text-[#17324d] ring-1 ring-[#ecd7b7]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10" id="order">
        <div className="mx-auto max-w-3xl rounded-md border border-[#edc582] bg-[#f6dcae] p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase text-[#8f4f2e]">
            How to order
          </p>
          <h2 className="mt-4 text-4xl font-black">Wholesale request</h2>
          <div className="mt-8 overflow-hidden rounded-md border border-[#eed8b8] bg-white">
            <div className="border-b border-[#eed8b8] px-5 py-4">
              <p className="text-xs font-black uppercase tracking-wide text-[#8f4f2e]">
                To
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${wholesaleEmail}?subject=${encodeURIComponent("Wholesale request — My Happy Self")}`}
                  className="break-all font-black text-[#17324d] underline decoration-[#edc582] underline-offset-4 hover:text-[#0d2238]"
                >
                  {wholesaleEmail}
                </a>
                <CopyEmailButton email={wholesaleEmail} />
              </div>
            </div>
            <div className="border-b border-[#eed8b8] px-5 py-4">
              <p className="text-xs font-black uppercase tracking-wide text-[#8f4f2e]">
                Subject
              </p>
              <p className="mt-1 font-black text-[#17324d]">
                Wholesale request — My Happy Self
              </p>
            </div>
            <dl>
              {wholesaleRequestFields.map((field) => (
                <div
                  key={field.label}
                  className="grid gap-1 border-b border-[#eed8b8] px-5 py-4 last:border-b-0 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-baseline"
                >
                  <dt className="text-sm font-black text-[#17324d]">
                    {field.label}
                  </dt>
                  <dd className="text-base text-[#5a4b3d]">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
