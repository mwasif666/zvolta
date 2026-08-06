import {
  Icon,
  PrimaryButton,
  STORIES_LINK,
  SecondaryButton,
  heroCards,
} from "../../PartnersPage.shared.jsx";
export function PartnersHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
      <div className="partners-container relative grid min-h-[calc(100vh-120px)] gap-14 pb-24 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
        <div className="partners-reveal max-w-3xl">
          <p className="text-xs font-semibold uppercase text-[#00E5A8]">
            Zvolta partners
          </p>
          <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] text-white md:text-[62px]">
            Our partners are helping more people move electric.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
            From public places to private businesses, Zvolta works with people
            who want to bring charging closer to everyday life.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Become a partner</PrimaryButton>
            <SecondaryButton href={STORIES_LINK}>
              See partner stories
            </SecondaryButton>
          </div>
        </div>

        <div className="partners-reveal grid gap-4 sm:grid-cols-2">
          {heroCards.map((card, index) => (
            <div
              key={card}
              className={`rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 ${index === 4 ? "sm:col-span-2" : ""}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-8 text-xl font-semibold text-white">{card}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
