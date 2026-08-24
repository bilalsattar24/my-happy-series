import { SiteFooter, SiteHeader } from "../site-chrome";
import { authorAffirmations, authorMoments } from "../site-content";

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
              About the Author
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5a4b3d]">
              <p>
                Umaymah Muhammad is a mother, author, and the creator of My
                Happy Series, a collection of children&apos;s books built
                around one powerful belief: the words children hear, and the
                words they learn to say to themselves, matter. My Happy Self
                began with something Umaymah wanted for her own children; to
                give them positive, empowering words they could eventually
                make their own.
              </p>
              <p>And then she watched it happen.</p>
              <p>
                After reading My Happy Self just once, Umaymah began hearing
                her own child use affirmations from the book naturally in
                everyday life.
              </p>
              <div className="space-y-4 rounded-md bg-[#fff8ec] p-5 ring-1 ring-[#eed8b8]">
                {authorMoments.map((moment) => (
                  <p key={moment.when}>
                    {moment.when}
                    <br />
                    <span className="font-black text-[#17324d]">
                      &ldquo;{moment.quote}&rdquo;
                    </span>
                  </p>
                ))}
              </div>
              <p>
                These weren&apos;t words being repeated while reading the book.
                They were showing up later, in real moments, when they actually
                mattered. For Umaymah, that was the most powerful confirmation
                of why My Happy Self needed to exist.
              </p>
              <p>
                Children are constantly developing the voice they use to speak
                to themselves. My Happy Self gives them simple, memorable
                language for confidence, resilience, self-worth, gratitude, and
                self-love, language they can begin reaching for when they
                encounter challenges in their own lives.
              </p>
              <p>Sometimes, all it takes is giving a child the right words.</p>
              <p>
                Read the affirmations together. Say them aloud. Repeat them
                during everyday moments. You may be surprised by how quickly
                your child begins remembering them, and eventually, using them
                without being prompted.
              </p>
              <p>
                Umaymah created My Happy Self to be more than a book children
                read. She created it to give children words they can carry with
                them.
              </p>
              <div>
                <p>Words like:</p>
                <ul className="mt-3 space-y-2 font-black text-[#17324d]">
                  {authorAffirmations.map((affirmation) => (
                    <li key={affirmation}>{affirmation}</li>
                  ))}
                </ul>
              </div>
              <p>
                Because one day, your voice won&apos;t be there for every
                difficult moment. But the voice you&apos;ve helped your child
                build will be.
              </p>
              <p className="font-black text-[#17324d]">
                With love,
                <br />
                Umaymah Muhammad
                <br />
                Author &amp; Illustrator of My Happy Self
                <br />
                Creator of My Happy Series
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
