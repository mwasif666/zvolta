import { legalCards } from "../../LegalPage.shared.jsx";
export function LegalTopicsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {legalCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/12 text-sm font-bold text-emerald-300">
                0{index + 1}
              </span>
              <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {card.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
