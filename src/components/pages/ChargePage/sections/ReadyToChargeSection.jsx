import {
  APP_LINK,
  HeroDownloadButton,
  Icon,
  SkeletonImage,
} from "../../ChargePage.shared.jsx";

export function ReadyToChargeSection() {
  return (
    <section className="rcs-section" data-no-reveal>
      <div className="charge-container grid items-center gap-12 lg:grid-cols-2">
        <div className="charge-reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Charge Anywhere
          </p>
          <h2 className="mt-8 text-[44px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[58px] md:text-[64px]">
            Ready to
            <br />
            Charge Smarter?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#A1A1A1]">
            Download the Zvolta app and access charging across our growing
            network.
          </p>
          <div className="mt-10">
            <HeroDownloadButton href={APP_LINK}>
              Download App
            </HeroDownloadButton>
          </div>
          <div className="rcs-badges">
            <span>
              <Icon name="shield" className="h-5 w-5 text-[#16a34a]" />
              Secure.
            </span>
            <span>
              <Icon name="bolt" className="h-5 w-5 text-[#16a34a]" />
              Convenient.
            </span>
            <span>
              <Icon name="check-circle" className="h-5 w-5 text-[#16a34a]" />
              Reliable.
            </span>
          </div>
        </div>

        <div className="charge-reveal rcs-visual">
          <div className="rcs-rings" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <SkeletonImage
            src="https://res.cloudinary.com/diywraupt/image/upload/v1780395124/stand_l17ao3.png"
            alt="Zvolta EV wall charger"
            className="rcs-img"
            skeletonTone="dark"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
