import {
  Icon,
  PrimaryButton,
  RotatingText,
  heroHighlights,
  hostRotatingWords,
} from "../../HostPage.shared.jsx";
export function HeroSection() {
  return (
    <section className="host-hero">
      <img
        src="/img/Host/Hosting Banner.png"
        alt="Zvolta charger installed outside a home with an EV parked nearby"
        className="host-hero-bg"
      />
      <div className="host-container host-hero-content">
        <div>
          <span className="host-hero-kicker">
            <Icon name="bolt" className="h-4 w-4 text-z-green" />
            Host partner program
          </span>
          <h1 className="host-hero-title">
            Host a <span>charger</span>
          </h1>
          <p className="host-hero-copy">
            For small businesses, earn more from your space. For large
            organizations, support ESG goals with real action.
          </p>

          <div className="host-hero-earn">
            <div className="host-hero-earn-text">
              <span>You set the</span>
              <RotatingText
                texts={hostRotatingWords}
                mainClassName="host-rotating-text"
                staggerFrom="last"
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: "-120%",
                }}
                staggerDuration={0.025}
                splitLevelClassName="host-rotating-text-split"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact-us" className="host-hero-cta">
              Start hosting
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="host-hero-feature-strip">
        {heroHighlights.map((item) => (
          <div className="host-hero-feature" key={item.description}>
            <span className="host-hero-icon">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <span className="host-hero-feature-text">
              <span>{item.title}</span>
              <span>{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
