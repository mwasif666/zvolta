import { Icon, WhyIcon, whyChooseFeatures } from "../../ChargePage.shared.jsx";

export function WhyChooseSection() {
  return (
    <section className="wcz-section" data-no-reveal>
      <div className="charge-container">
        <div className="charge-reveal mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#16a34a]/10 px-4 py-2 text-sm font-semibold text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Built for Everyday Convenience
          </p>
          <h2 className="mt-7 text-[44px] font-extrabold leading-[1.05] tracking-tight text-zinc-900 md:text-[60px]">
            Why Users Choose Zvolta
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-500">
            Smart charging that fits your lifestyle with reliability,
            transparency, and peace of mind.
          </p>
        </div>

        <div className="charge-stagger wcz-grid mt-14">
          {whyChooseFeatures.map((feature) => (
            <article key={feature.title} className="wcz-card">
              <span className="wcz-icon">
                <WhyIcon name={feature.icon} />
              </span>
              <h3 className="wcz-title">{feature.title}</h3>
              <span className="wcz-rule" />
              <p className="wcz-copy">{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
