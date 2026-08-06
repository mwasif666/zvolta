import {
  APP_LINK,
  HeroDownloadButton,
  HowItWorksVisual,
  Icon,
  howItWorksSteps,
} from "../../ChargePage.shared.jsx";

export function HowItWorksSection() {
  return (
    <section className="hiw-section" data-no-reveal>
      <div className="charge-container">
        <div className="charge-reveal mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#16a34a]/10 px-4 py-2 text-sm font-semibold text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Simple EV charging
          </p>
          <h2 className="mt-6 text-[44px] font-extrabold leading-[1.05] tracking-tight text-zinc-900 md:text-[64px]">
            How It Works
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-500">
            From finding a charger to paying digitally, everything happens in a
            few simple steps.
          </p>
        </div>

        <div className="charge-stagger hiw-grid mt-14">
          {howItWorksSteps.map((step) => (
            <article key={step.title} className="hiw-card">
              <span className="hiw-num">{step.n}</span>
              <HowItWorksVisual visual={step.visual} />
              <div className="hiw-text">
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-copy">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="charge-reveal mt-14 flex justify-center">
          <HeroDownloadButton href={APP_LINK}>Download App</HeroDownloadButton>
        </div>
      </div>
    </section>
  );
}
