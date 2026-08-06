import { ArrowIcon, SmartLink } from "../../StoriesPage.shared.jsx";
export function LatestStoriesSection({
  activeCategory,
  categories,
  setActiveCategory,
  visiblePosts,
}) {
  return (
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
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? "border-emerald-400 bg-emerald-400 text-[#04120c]" : "border-white/12 bg-white/[0.04] text-white/70 hover:border-emerald-400/40 hover:text-white"}`}
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
  );
}
