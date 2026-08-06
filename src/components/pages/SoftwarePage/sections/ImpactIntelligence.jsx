import {
  Fragment,
  Icon,
  ImpactLaptop,
  impactBottomCards,
  impactFlow,
} from "../../SoftwarePage.shared.jsx";

export function ImpactIntelligence() {
  return (
    <>
      {/* Dark hero block */}
      <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-28">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[560px] w-[560px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#16a34a]/10 blur-[120px]" />
        <div className="software-container relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="software-reveal">
              <span className="inline-flex items-center gap-3 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
                <span className="text-[#16a34a]">05</span>
                <span className="h-3 w-px bg-[#2A2A2A]" />
                Impact Intelligence
              </span>
              <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[56px]">
                Measure More
                <br />
                <span className="text-[#16a34a]">Than Revenue</span>
              </h2>
              <p className="mt-6 max-w-md text-lg font-medium leading-7 text-white">
                Track the environmental and operational impact of every charging
                session.
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-[#A1A1A1]">
                Zvolta helps businesses understand the real impact of their EV
                charging network through clear reports that show energy
                delivered, fuel displaced, carbon emissions avoided, and EV
                adoption trends.
              </p>
            </div>

            <div className="software-hero-visual">
              <ImpactLaptop />
            </div>
          </div>
        </div>
      </section>

      {/* Light block */}
      <section className="border-b border-[#E5E7EB] bg-white py-16 md:py-20">
        <div className="software-container">
          {/* Flow card */}
          <div className="software-stagger grid items-start gap-y-10 rounded-2xl border border-[#E5E7EB] p-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:p-10">
            {impactFlow.map(([icon, label, copy], i) => (
              <Fragment key={label}>
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#16a34a]/12 text-[#16a34a]">
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-base font-semibold text-[#0B0B0B]">
                    {label}
                  </p>
                  <p className="mt-1 max-w-[180px] text-sm leading-5 text-[#6B7280]">
                    {copy}
                  </p>
                </div>
                {i < impactFlow.length - 1 ? (
                  <Icon
                    name="arrow"
                    className="mx-auto hidden h-5 w-5 self-center text-[#9CA3AF] sm:block"
                  />
                ) : null}
              </Fragment>
            ))}
          </div>

          {/* Bottom cards */}
          <div className="software-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactBottomCards.map(([icon, title, copy]) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-[#E5E7EB] p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#16a34a]/12 text-[#16a34a]">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0B]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#6B7280]">
                  {copy}
                </p>
                <span className="mt-6 h-1 w-14 rounded-full bg-[#16a34a]" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
