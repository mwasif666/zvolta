import {
  Icon,
  PrimaryButton,
  Reveal,
  SmartLink,
  chargerOptionBenefits,
  chargerOptionCards,
} from "../../HostPage.shared.jsx";
export function ChargersSection({
  setShowInstallationOptions,
  showInstallationOptions,
}) {
  return (
    <section id="chargers" className="host-charger-options">
      <div className="host-container">
        <div className="host-charger-panel">
          <span className="host-charger-panel-glow" aria-hidden="true" />
          <img
            src="/img/Host/Hosting Banner.png"
            alt="Zvolta charger installed outside a host location"
            className="host-charger-bg"
          />

          <Reveal className="host-charger-header">
            <p className="host-charger-eyebrow">
              <span>
                <Icon name="bolt" className="h-5 w-5" />
              </span>
              Charger options
            </p>
            <h2 className="host-charger-title">
              Match charging power to how people use <span>your space.</span>
            </h2>
            <p className="host-charger-copy">
              Choose the right charger for your traffic, power supply, and
              business goals.
            </p>
          </Reveal>

          <div className="host-charger-grid">
            {chargerOptionCards.map((charger, index) => {
              return (
                <Reveal key={charger.title} delay={index * 0.08}>
                  <article
                    className={`host-charger-card ${charger.popular ? "is-popular" : ""}`}
                  >
                    <span className="host-charger-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {charger.popular ? (
                      <span className="host-charger-popular">Popular</span>
                    ) : null}
                    <div>
                      <h3>{charger.title}</h3>
                      <p>{charger.description}</p>
                    </div>
                    {charger.image ? (
                      <div className="host-charger-art">
                        <img
                          src={charger.image}
                          alt={`${charger.title} product`}
                          className={`host-charger-image ${charger.imageSize === "large" ? "is-large" : "is-small"}`}
                        />
                      </div>
                    ) : null}
                    <div className="host-charger-feature-list">
                      {charger.features.map((feature) => (
                        <div className="host-charger-feature" key={feature}>
                          <span className="host-charger-check">
                            <Icon name="check" className="h-3 w-3" />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="host-charger-specs">
                      <div className="host-charger-spec-row">
                        <span>Power</span>
                        <strong>{charger.power}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Best for</span>
                        <strong>{charger.bestFor}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Location</span>
                        <strong>{charger.location}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Price</span>
                        <strong>{charger.price}</strong>
                      </div>
                    </div>
                    <SmartLink
                      href={charger.href}
                      className={`host-charger-learn ${charger.popular ? "is-primary" : ""}`}
                    >
                      View details
                      <Icon name="arrow" className="h-4 w-4" />
                    </SmartLink>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="host-charger-support-strip">
            {chargerOptionBenefits.map((item) => (
              <div className="host-charger-support-item" key={item.title}>
                <span className="host-charger-support-icon">
                  <Icon name={item.icon} className="h-8 w-8" />
                </span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <div className="host-charger-quiz">
              <div className="host-charger-quiz-copy">
                <span className="host-charger-quiz-mark">?</span>
                <span>
                  Not sure which charger fits your space?
                  <small>
                    Take our quick quiz and we'll recommend the best option.
                  </small>
                </span>
              </div>
              <PrimaryButton
                href="/contact-us"
                className="host-charger-quiz-button"
              >
                Find the right charger
              </PrimaryButton>
            </div>
            {!showInstallationOptions ? (
              <div className="host-expand-actions host-installation-expand-actions">
                <button
                  type="button"
                  className="host-expand-button"
                  onClick={() => setShowInstallationOptions(true)}
                >
                  Show installation options
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
