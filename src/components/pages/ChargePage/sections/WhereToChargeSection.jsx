import {
  Icon,
  WhereIcon,
  whereToChargePlaces,
} from "../../ChargePage.shared.jsx";

export function WhereToChargeSection() {
  return (
    <section className="wtc-section" data-no-reveal>
      <div className="wtc-glow wtc-glow--left" aria-hidden="true" />
      <div className="wtc-glow wtc-glow--right" aria-hidden="true" />
      <div className="charge-container relative">
        <div className="charge-reveal mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-2 text-sm font-semibold text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Where You Can Charge
          </p>
          <h2 className="mt-7 text-[40px] font-extrabold leading-[1.06] tracking-tight text-white md:text-[56px]">
            Charge Where You Park
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#A1A1A1]">
            Designed to fit your lifestyle.
          </p>
        </div>

        <div className="charge-stagger wtc-grid mt-14">
          {whereToChargePlaces.map((place) => (
            <article key={place.title} className="wtc-card">
              <span className="wtc-icon">
                <WhereIcon name={place.icon} />
              </span>
              <h3 className="wtc-title">{place.title}</h3>
              <span className="wtc-rule" />
              <p className="wtc-copy">{place.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
