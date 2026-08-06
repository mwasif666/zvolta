import { SmartLink } from "../../LegalPage.shared.jsx";
export function LegalHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
      style={{
        backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end lg:px-8">
        <div>
          <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
            <SmartLink
              href="/"
              className="transition-colors hover:text-emerald-400"
            >
              Home
            </SmartLink>
            <span>/</span>
            <span className="text-white">Legal</span>
          </nav>
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            Policy clarity without the wall of text
          </span>
          <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Legal information in a
            <span className="text-emerald-400"> cleaner format</span>.
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          Instead of putting everything into one giant policy block, this page
          uses a clearer editorial structure. It is still ZVolta legal
          information, just easier to scan and understand before you need deeper
          detail.
        </p>
      </div>
    </section>
  );
}
