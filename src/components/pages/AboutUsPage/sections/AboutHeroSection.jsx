import { SmartLink } from "../../AboutUsPage.shared.jsx";
export function AboutHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
      style={{
        backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#030504]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
            <SmartLink
              href="/"
              className="transition-colors hover:text-emerald-400"
            >
              Home
            </SmartLink>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <span className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            ZVolta pattern, ZVolta purpose
          </span>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Building the practical
            <span className="text-emerald-400"> electric layer </span>
            for Pakistan.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            ZVolta is focused on what makes electric mobility actually work on
            the ground: reliable charging, clear operating software, vehicle
            access, and support that respects how people move every day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <SmartLink
              href="/charging-partners"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore hosting
            </SmartLink>
            <SmartLink
              href="/support"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
            >
              See support model
            </SmartLink>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110c]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/img/zvolta-maidan.jpg"
                  alt="ZVolta charging site"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                    What we connect
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Charging sites, drivers, hosts, operators, and the software
                    that keeps the whole system readable.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/img/app-1.png"
                    alt="ZVolta software layer"
                    className="h-44 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-[1.5rem] border border-white/10 bg-black/70 px-5 py-4 text-sm text-white/70 shadow-2xl backdrop-blur md:block">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Operating lens
            </span>
            <span className="mt-2 block max-w-[14rem]">
              Every site should feel useful, visible, and easier to trust.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
