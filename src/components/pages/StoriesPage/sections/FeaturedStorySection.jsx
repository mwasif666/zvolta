import { ArrowIcon, SmartLink } from "../../StoriesPage.shared.jsx";
export function FeaturedStorySection({ featured }) {
  return (
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
  );
}
