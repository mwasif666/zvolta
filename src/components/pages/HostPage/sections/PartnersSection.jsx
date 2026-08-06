import {
  IoClose,
  Reveal,
  SecondaryButton,
  partnerLogos,
} from "../../HostPage.shared.jsx";
export function PartnersSection({ setShowHostingSections }) {
  return (
    <section className="host-partners-section">
      <button
        type="button"
        className="host-collapse-button"
        aria-label="Collapse host stories"
        onClick={() => setShowHostingSections(false)}
      >
        <IoClose className="h-6 w-6" aria-hidden="true" />
      </button>
      <span className="host-partners-bolt" aria-hidden="true" />
      <span className="host-partners-bolt-soft" aria-hidden="true" />
      <div className="host-container">
        <Reveal className="host-partners-intro">
          <p className="host-partners-eyebrow">Already hosting</p>
          <h2 className="host-partners-title">
            Businesses use Zvolta chargers to earn and support sustainability
            <span>.</span>
          </h2>
          <p className="host-partners-copy">
            Partner sites get app visibility, cleaner customer service, and a
            practical ESG action.
          </p>
        </Reveal>

        <Reveal className="host-partner-logo-grid" delay={0.08}>
          {partnerLogos.map((logo) => (
            <div className="host-partner-logo-card" key={logo.alt}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.invert ? "is-inverted" : ""}
              />
            </div>
          ))}
        </Reveal>

        <Reveal className="host-partners-action">
          <SecondaryButton href="/partners" className="host-partners-button">
            Explore partners
          </SecondaryButton>
        </Reveal>
      </div>
    </section>
  );
}
