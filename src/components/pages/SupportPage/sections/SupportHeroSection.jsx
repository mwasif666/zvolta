import { SmartLink } from "../../SupportPage.shared.jsx";
export function SupportHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
      style={{
        backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
          <SmartLink
            href="/"
            className="transition-colors hover:text-emerald-400"
          >
            Home
          </SmartLink>
          <span>/</span>
          <span className="text-white">Support</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Support page with contact-style pattern
            </span>
            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Help that keeps people
              <span className="text-emerald-400"> moving forward</span>.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            This page leans into the ZVolta contact/support rhythm instead of
            the same template shell. The goal is simple: drivers, hosts, and
            operators should know where to go and what kind of help they can
            expect.
          </p>
        </div>
      </div>
    </section>
  );
}
