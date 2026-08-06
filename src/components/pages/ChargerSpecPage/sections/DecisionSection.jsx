import {
  Fragment,
  Icon,
  PrimaryButton,
  decisionComparisonRows,
  decisionPricingItems,
  decisionSetupSteps,
  decisionSpecs,
} from "../../ChargerSpecPage.shared.jsx";

export function DecisionSection({ spec }) {
  const decisionSpecRows = spec.technicalSpecs ?? decisionSpecs;
  const specsMiddle = Math.ceil(decisionSpecRows.length / 2);
  const specColumns = [
    decisionSpecRows.slice(0, specsMiddle),
    decisionSpecRows.slice(specsMiddle),
  ];
  const priceRow = spec.pricing?.[0];
  const priceValue = priceRow?.[1] ?? "Contact Zvolta";
  const pricingItems = (spec.pricing ?? []).slice(1, 5).map(([item]) => item);
  return (
    <section className="three-section three-decision-section">
      <div className="three-container">
        <p className="three-eyebrow">Compare, Plan, and Start</p>
        <h2 className="three-large-title">
          Everything you need before you decide
        </h2>
        <p className="three-section-copy">
          Compare the value, review the specs, understand the setup, and see how
          the {spec.power} charger fits your space.
        </p>

        <div className="three-decision-grid">
          <article className="three-panel three-compare-panel">
            <h3>Comparison with imported chargers</h3>
            <div className="three-compare-table">
              <div />
              <strong>This {spec.power} charger</strong>
              <strong>Typical imported chargers</strong>
              {decisionComparisonRows.map(
                ([icon, label, current, imported]) => (
                  <Fragment key={label}>
                    <div className="three-compare-label">
                      <Icon name={icon} className="h-8 w-8" />
                      <span>{label}</span>
                    </div>
                    <p className="is-green">{current}</p>
                    <p>{imported}</p>
                  </Fragment>
                ),
              )}
            </div>
          </article>

          <article className="three-panel three-pricing-panel">
            <h3>Pricing</h3>
            <div className="three-price">
              {priceValue.startsWith("PKR") ? <span>PKR</span> : null}
              <strong>{priceValue.replace(/^PKR\s*/i, "")}</strong>
            </div>
            <p>
              Includes charger hardware, smart software, and standard
              installation support.
            </p>
            <div className="three-check-list">
              {(pricingItems.length ? pricingItems : decisionPricingItems).map(
                (item) => (
                  <div key={item}>
                    <Icon name="check" className="h-5 w-5" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            <PrimaryButton className="three-primary three-full-button">
              Request a Quote
            </PrimaryButton>
          </article>

          <article className="three-panel three-spec-panel">
            <div className="three-panel-title-row three-spec-title-row">
              <Icon name="file" className="h-9 w-9" />
              <h3>Technical Specs</h3>
            </div>

            <div className="three-spec-columns">
              {specColumns.map((column, columnIndex) => (
                <div
                  className="three-spec-list"
                  key={`spec-column-${columnIndex}`}
                >
                  {column.map(([label, value], index) => (
                    <div
                      key={label}
                      className={
                        columnIndex === 0 && index === 0 ? "is-highlight" : ""
                      }
                    >
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>

          <article className="three-panel three-setup-panel">
            <div className="three-panel-title-row three-setup-title-row">
              <span />
              <Icon name="gear" className="h-9 w-9" />
              <h3>How Setup Works</h3>
              <span />
            </div>
            <div className="three-setup-list">
              {decisionSetupSteps.map(([icon, title, copy], index) => (
                <div className="three-setup-step" key={title}>
                  <span className="three-step-number">{index + 1}</span>
                  <span className="three-setup-icon">
                    <Icon name={icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="three-setup-tagline">
              <span>From intent to earning in just 7 days.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
