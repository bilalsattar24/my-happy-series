import { SiteFooter, SiteHeader } from "../site-chrome";
import { authorParagraphs } from "../site-content";

export default function AuthorPage() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#17324d]">
      <SiteHeader />

      <section className="happy-author-bg relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10">
        <div className="storybook-author-graphics" aria-hidden="true">
          <span className="storybook-heart heart-red author-heart" />
          <span className="storybook-star star-yellow author-star" />
          <span className="storybook-dash dash-purple author-dash-one" />
          <span className="storybook-dash dash-green author-dash-two" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-md border border-[#eed8b8] bg-white/92 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase text-[#8f4f2e]">
              From the author
            </p>
            <h1 className="mt-4 text-4xl font-black text-[#17324d] sm:text-5xl">
              I&apos;m Umaymah Muhammad.
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5a4b3d]">
              {authorParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-black text-[#17324d]">
                With love,
                <br />
                Umaymah Muhammad
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
