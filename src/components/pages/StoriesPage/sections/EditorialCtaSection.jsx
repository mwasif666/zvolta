import { ArrowIcon, SmartLink } from "../../StoriesPage.shared.jsx";
export function EditorialCtaSection() {
  return (
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
  );
}
