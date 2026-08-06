import { SmartLink, sections } from "../../LegalPage.shared.jsx";
export function LegalAccordionSection({ openIndex, setOpenIndex }) {
  return (
    <section className="pb-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
        <aside className="h-fit rounded-[2rem] border border-white/10 bg-[#07110d] p-6 lg:sticky lg:top-28">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            Quick map
          </span>
          <ul className="mt-6 space-y-4 text-sm text-white/74">
            {sections.map((section, index) => (
              <li key={section.title}>
                <button
                  type="button"
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition-colors ${openIndex === index ? "border-emerald-400/40 bg-emerald-500/10 text-white" : "border-white/10 bg-white/[0.03] hover:border-white/20"}`}
                  onClick={() => setOpenIndex(index)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/70">
            If your question is active and operational, the{" "}
            <SmartLink
              href="/support"
              className="text-emerald-300 hover:text-emerald-200"
            >
              support page
            </SmartLink>{" "}
            may get you to the right lane faster.
          </div>
        </aside>

        <div className="space-y-4">
          {sections.map((section, index) => {
            const isOpen = index === openIndex;
            return (
              <article
                key={section.title}
                className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#07110d]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-xl font-medium tracking-[-0.03em]">
                    {section.title}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-emerald-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-sm leading-8 text-white/72">
                    {section.body}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
