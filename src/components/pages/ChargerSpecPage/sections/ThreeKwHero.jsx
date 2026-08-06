import {
  Icon,
  PrimaryButton,
  SecondaryButton,
  chargerHeroImages,
  getChargerHeroBenefits,
} from "../../ChargerSpecPage.shared.jsx";

export function ThreeKwHero({ spec }) {
  const heroBenefits = getChargerHeroBenefits(spec);
  const heroImage = chargerHeroImages[spec.power] ?? chargerHeroImages["3kW"];
  return (
    <section className="three-hero">
      <div className="three-container three-hero-grid">
        <div className="three-hero-copy">
          <p className="three-pill">
            <Icon name="bolt" className="h-4 w-4" />
            {spec.power} Power. Smart Charger.
          </p>
          <h1>{spec.power} Smart EV Charger</h1>
          <p className="three-hero-text">{spec.heroBody}</p>
          <div className="three-hero-made">
            <span className="three-hero-made-chip">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <span className="three-hero-made-text">
              <strong>100% Made in Pakistan</strong>
              <span>Engineered &amp; built locally</span>
            </span>
          </div>
          <div className="three-hero-actions">
            <PrimaryButton className="three-primary">
              <Icon name="calendar" className="h-5 w-5" />
              Book Free Installation
            </PrimaryButton>
            <SecondaryButton className="three-secondary">
              <Icon name="chat" className="h-5 w-5" />
              Talk to an Expert
            </SecondaryButton>
          </div>
        </div>
        <div className="three-product-card">
          <img src={heroImage} alt={`${spec.power} smart EV charger`} />
        </div>
      </div>
      <div className="three-container three-hero-features">
        <div className="three-hero-benefits">
          {heroBenefits.map(([icon, title, copy]) => (
            <div className="three-hero-benefit" key={title}>
              <Icon name={icon} className="h-6 w-6" />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
