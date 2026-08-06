import { faqs } from "../../SupportPage.shared.jsx";
export function SupportFaqSection({ openIndex, setOpenIndex }) {
  return (
    <section className="border-t border-white/10 bg-[#06100b] py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            Common questions
          </span>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
            A small FAQ, kept plain on purpose.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-medium tracking-[-0.03em]">
                    {item.question}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-emerald-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-sm leading-7 text-white/70">
                    {item.answer}
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
