import { SmartLink } from "../components/SmartLink";
import { blogPosts } from "../data/blogPosts";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-8">
          <div>
            <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
              <SmartLink href="/" className="transition-colors hover:text-emerald-400">
                Home
              </SmartLink>
              <span>/</span>
              <span className="text-white">Stories</span>
            </nav>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Editorial pattern, ZVolta narrative
            </span>
            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Stories that show how the
              <span className="text-emerald-400"> network becomes real</span>.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            This page is closer to Aivora's editorial and blog feel than the
            other company pages. It sits between product and field narrative,
            showing how hosts, drivers, sites, and operators all shape the
            ZVolta story together.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
          <article className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07110d] shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden">
                <img
                  src={featured.cardImage}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                  style={{ display: "block" }}
                />
              </div>
              <div className="p-8 sm:p-10">
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
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                >
                  Read the full story
                </SmartLink>
              </div>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-white/10 bg-[#07110d] p-6 h-fit">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Story themes
            </span>
            <div className="mt-6 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/70">
              Stories are where the network becomes easier to picture. They show
              what the product pages only describe.
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.68fr_0.32fr] lg:px-8">
          <div className="space-y-6">
            {restPosts.map((post, index) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="overflow-hidden">
                    <img
                      src={post.cardImage}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                      Story 0{index + 2}
                    </span>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <SmartLink
                      href={`/blogs/${post.slug}`}
                      className="mt-7 inline-flex items-center text-sm font-bold text-emerald-300 hover:text-emerald-200"
                    >
                      Continue reading
                    </SmartLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#07110d] p-6">
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

            <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0b1711] to-black p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
                Editorial note
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">
                The useful story is usually between the pages.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
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
        </div>
      </section>
    </div>
  );
}
