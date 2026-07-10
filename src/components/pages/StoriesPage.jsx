import { SmartLink } from "../SmartLink";
import { blogPosts } from "../../data/pages/blogs/blogPosts";

const topics = [
  "Host locations",
  "Driver journeys",
  "Charging operations",
  "Software visibility",
  "Field support",
  "Fleet behavior",
  "Urban movement",
  "Clean mobility",
];

function StoryCard({ post, index }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-emerald-400/40">
      <SmartLink
        href={`/blogs/${post.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden"
      >
        <img
          src={post.cardImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur">
          {post.category}
        </span>
      </SmartLink>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <span>{post.date}</span>
          {post.readTime && <span>{post.readTime}</span>}
        </div>
        <h3 className="mt-4 text-xl font-medium leading-tight tracking-[-0.03em] text-white">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-white/68">
          {post.excerpt}
        </p>
        <SmartLink
          href={`/blogs/${post.slug}`}
          className="mt-6 inline-flex items-center text-sm font-bold text-emerald-300 transition-colors hover:text-emerald-200"
        >
          Continue reading
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
          >
            <path
              d="M5 12h12m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SmartLink>
      </div>
    </article>
  );
}

export default function StoriesPage() {
  const [featured, ...restPosts] = blogPosts;

  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-10rem] top-32 h-96 w-96 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-80 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#050806]/80 to-[#040605]" />
        <div className="pointer-events-none absolute right-[-8rem] top-0 h-[26rem] w-[26rem] rounded-full bg-emerald-500/14 blur-[120px]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
              <SmartLink
                href="/"
                className="transition-colors hover:text-emerald-400"
              >
                Home
              </SmartLink>
              <span>/</span>
              <span className="text-white">Stories</span>
            </nav>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Editorial pattern, ZVolta narrative
            </span>
            <h1 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Stories that show how the
              <span className="text-emerald-400"> network becomes real</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              This page is closer to ZVolta's editorial and blog feel than the
              other company pages. It sits between product and field
              narrative, showing how hosts, drivers, sites, and operators all
              shape the ZVolta story together.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              <span>{blogPosts.length}+ field stories</span>
              <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
              <span>{topics.length} story themes</span>
              <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
              <span>Updated regularly</span>
            </div>
          </div>

          <SmartLink
            href={`/blogs/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d]/85 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={featured.cardImage}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex rounded-full bg-emerald-400 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#04120c]">
                Latest story
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-white">
                {featured.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition-colors group-hover:text-emerald-200">
                Read the story
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                >
                  <path
                    d="M5 12h12m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </SmartLink>
        </div>
      </section>

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
            Story themes
          </span>
        </div>
        <div className="group relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max flex-nowrap gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {[...topics, ...topics].map((topic, index) => (
              <span
                key={`${topic}-${index}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition-colors hover:border-emerald-400/40 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07110d] shadow-[0_24px_80px_rgba(0,0,0,0.34)] lg:grid-cols-[1.08fr_0.92fr]">
            <SmartLink
              href={`/blogs/${featured.slug}`}
              className="block aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full"
            >
              <img
                src={featured.cardImage}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
            </SmartLink>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                Featured story
              </span>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                <span>{featured.category}</span>
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <SmartLink
                href={`/blogs/${featured.slug}`}
                className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
              >
                Read the full story
              </SmartLink>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post, index) => (
              <StoryCard post={post} index={index} key={post.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#07110d] p-6 sm:p-7">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Related paths
            </span>
            <div className="mt-6 space-y-3">
              <SmartLink
                href="/blogs"
                className="block rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/78 transition-colors hover:border-emerald-400/40"
              >
                Explore the full blog archive
              </SmartLink>
              <SmartLink
                href="/partners"
                className="block rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/78 transition-colors hover:border-emerald-400/40"
              >
                See the partner model behind many of these stories
              </SmartLink>
              <SmartLink
                href="/team"
                className="block rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/78 transition-colors hover:border-emerald-400/40"
              >
                Meet the people shaping the network
              </SmartLink>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0b1711] to-black p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-9">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Editorial note
            </span>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              The useful story is usually between the pages.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              A charger alone is not the full story. Neither is a driver, a
              host, or an app screen. The value appears in the connection
              between them.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <SmartLink
                href="/about-us"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-[#04120c]"
              >
                About ZVolta
              </SmartLink>
              <SmartLink
                href="/support"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white"
              >
                Support page
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
