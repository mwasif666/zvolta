import { SmartLink } from "../../StoriesPage.shared.jsx";
export function StoriesHeroSection({ categories, storyCount }) {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
      style={{
        backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')",
      }}
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
          <SmartLink
            href="/"
            className="transition-colors hover:text-emerald-400"
          >
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
                  {storyCount}
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
  );
}
