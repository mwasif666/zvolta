import { SmartLink } from "../../LegalPage.shared.jsx";
export function LegalContactSection() {
  return (
    <section className="border-t border-white/10 bg-[#06100b] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            When to contact us
          </span>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Privacy or data-use concerns.
            </li>
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Clarification on responsibilities inside a program or partner
              setup.
            </li>
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Payment, refund, or policy interpretation questions.
            </li>
          </ul>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-gradient-to-r from-[#07110d] via-[#0b1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-10">
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            Need the right context?
          </span>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
            Start with the clearest route.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
            If the issue is about terms, privacy, or accountability, reach out
            through the main contact flow. If the issue is live and operational,
            support is usually the better first stop.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SmartLink
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
            >
              Contact ZVolta
            </SmartLink>
            <SmartLink
              href="/support"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
            >
              Go to support
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
