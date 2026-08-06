import { featureCards } from "../../AboutUsPage.shared.jsx";
export function ConnectedMobilitySection() {
  return (
    <section className="relative border-b border-[#E5E5E5] bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
            Why ZVolta works this way
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.05em] text-zinc-900 sm:text-5xl">
            Electric mobility gets easier when every layer makes sense together.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-500">
            We do not treat chargers, programs, software, and support as
            separate stories. The network becomes credible when those layers
            reinforce each other.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-[#E5E5E5] bg-[#F5F5F5] p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-600">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-zinc-900">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
