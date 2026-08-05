import { useMemo, useState } from "react";
import { SmartLink } from "../SmartLink";
import { blogPosts } from "../../data/pages/blogs/blogPosts";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function StoriesPage() {
  const [featured, ...restPosts] = blogPosts;

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ["All stories", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All stories");

  const visiblePosts = useMemo(() => {
    if (activeCategory === "All stories") return restPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory, restPosts]);

  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[42rem] h-[24rem] w-[24rem] rounded-full bg-lime-400/10 blur-[120px]" />

      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#050806]/88 to-[#040605]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-3 text-sm font-semibold text-white/60">
            <SmartLink href="/" className="transition-colors hover:text-emerald-400">
              Home
            </SmartLink>
            <span className="text-white/30">/</span>
            <span className="text-white">Stories</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                ZVolta Pulse — Field Stories
              </span>
              <h1 className="mt-6 font-display text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem]">
                Where the network
                <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  becomes real
                </span>
                .
              </h1>
            </div>

            <div className="lg:pb-3">
              <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Real stories from the field — hosts, drivers, operators, and the
                small decisions that turn EV charging from an idea into an
                everyday habit across Pakistan.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <div className="font-display text-3xl font-semibold text-emerald-400">
                    {blogPosts.length}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Stories
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-emerald-400">
                    {categories.length - 1}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Topics
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-emerald-400">
                    2026
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    On the ground
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Featured story
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
          </div>

          <SmartLink
            href={`/blogs/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07110d] shadow-[0_30px_90px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-emerald-400/40 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[440px]">
              <img
                src={featured.cardImage}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent lg:hidden" />
              <span className="absolute left-6 top-6 inline-flex rounded-full border border-emerald-400/30 bg-[#04120c]/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300 shadow-md backdrop-blur-md">
                {featured.category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                <span>{featured.date}</span>
                <span className="text-emerald-400/60">•</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-[2.75rem]">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="mt-9 flex items-center gap-4">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-all duration-300 group-hover:gap-4">
                  Read the full story
                  <ArrowIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-white/50">
                  By {featured.author}
                </span>
              </div>
            </div>
          </SmartLink>
        </div>
      </section>

      {/* ================= FILTER + GRID ================= */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Latest stories
              </h2>
              <p className="mt-2 text-sm text-white/55">
                {visiblePosts.length} article
                {visiblePosts.length === 1 ? "" : "s"}
                {activeCategory === "All stories" ? "" : ` in ${activeCategory}`}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-emerald-400 bg-emerald-400 text-[#04120c]"
                        : "border-white/12 bg-white/[0.04] text-white/70 hover:border-emerald-400/40 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <SmartLink
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07110d] transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cardImage}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07110d] to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full border border-emerald-400/30 bg-[#04120c]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 shadow-md backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    <span>{post.date}</span>
                    <span className="text-emerald-400/50">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-[-0.03em] transition-colors duration-300 group-hover:text-emerald-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-xs font-semibold text-white/45">
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-300">
                      Read
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </SmartLink>
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <p className="mt-16 text-center text-white/50">
              No stories in this topic yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0b1711] to-black p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:p-12">
            <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-emerald-500/15 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Editorial note
                </span>
                <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                  The useful story is usually between the pages.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/65">
                  A charger alone is not the full story. Neither is a driver, a
                  host, or an app screen. The value appears in the connection
                  between them — and that is what these stories try to show.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <SmartLink
                  href="/blogs"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore full archive
                  <ArrowIcon className="h-4 w-4" />
                </SmartLink>
                <SmartLink
                  href="/partners"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-emerald-400/40"
                >
                  Partner model
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
