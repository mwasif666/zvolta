import {
  Icon,
  InstallationVisual,
  IoClose,
  PrimaryButton,
  Reveal,
  installationOptions,
} from "../../HostPage.shared.jsx";

export function InstallationOptionsSection({ onCollapse }) {
  return (
    <section
      id="installation"
      className="host-section host-installation-section"
    >
      {onCollapse ? (
        <button
          type="button"
          className="host-collapse-button"
          aria-label="Collapse installation options"
          onClick={onCollapse}
        >
          <IoClose className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : null}
      <div className="host-container">
        <Reveal className="host-installation-intro">
          <p className="host-installation-eyebrow">Installation options</p>
          <h2 className="host-installation-title">
            Clean mounting options
            <br />
            for <span>different spaces.</span>
          </h2>
          <p className="host-installation-copy">
            Wall, standing, and hanging setups keep the install practical.
          </p>
        </Reveal>

        <div className="host-installation-grid">
          {installationOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.05}>
              <article className="host-installation-card">
                <InstallationVisual
                  type={option.type}
                  image={option.image}
                  title={option.title}
                />
                <div className="host-installation-content">
                  <span className="host-installation-icon">
                    <Icon name={option.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="host-installation-card-title">
                    {option.title}
                  </h3>
                  <p className="host-installation-card-copy">
                    {option.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="host-installation-cta">
          <div className="host-installation-cta-copy">
            <span className="host-installation-cta-icon">
              <Icon name="tools" className="h-8 w-8" />
            </span>
            <span>
              <h3>Installation is free for all chargers</h3>
              <p>
                Our experts handle everything, so you can power up with ease.
              </p>
            </span>
          </div>
          <PrimaryButton
            href="/contact-us"
            className="host-installation-button"
          >
            Book a site assessment
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
