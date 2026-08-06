import {
  Icon,
  IoClose,
  Reveal,
  SmartLink,
  roiHighlights,
} from "../../HostPage.shared.jsx";
export function RoiSection({
  chargerCount,
  monthlyEarnings,
  setChargerCount,
  setShowRoiCalculator,
  setUnitPrice,
  setUsage,
  unitPrice,
  usage,
}) {
  return (
    <section id="roi" className="host-section host-roi-section">
      <button
        type="button"
        className="host-collapse-button"
        aria-label="Collapse ROI calculator"
        onClick={() => setShowRoiCalculator(false)}
      >
        <IoClose className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="host-container">
        <div className="host-roi-layout">
          <Reveal className="host-roi-copy">
            <p className="host-roi-eyebrow">Estimate your earnings</p>
            <h2 className="host-roi-title">
              See how much
              <br />
              your site can earn.
            </h2>
            <p className="host-roi-description">
              Adjust charger count, price, and usage to model a simple monthly
              estimate.
            </p>

            <div className="host-roi-highlights">
              {roiHighlights.map((item) => (
                <div className="host-roi-highlight" key={item.title}>
                  <span className="host-roi-highlight-icon">
                    <Icon name={item.icon} className="h-8 w-8" />
                  </span>
                  <span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="host-roi-calculator">
            <div className="host-roi-fields">
              <label className="host-roi-field">
                <span>Number of chargers</span>
                <input
                  type="number"
                  min="1"
                  value={chargerCount}
                  onChange={(event) =>
                    setChargerCount(Number(event.target.value))
                  }
                  className="host-roi-input"
                />
              </label>
              <label className="host-roi-field">
                <span>Price per unit</span>
                <input
                  type="number"
                  min="0"
                  value={unitPrice}
                  onChange={(event) => setUnitPrice(Number(event.target.value))}
                  className="host-roi-input"
                />
              </label>
              <label className="host-roi-field">
                <span>Usage</span>
                <input
                  type="number"
                  min="0"
                  value={usage}
                  onChange={(event) => setUsage(Number(event.target.value))}
                  className="host-roi-input"
                />
              </label>
            </div>

            <div className="host-roi-result">
              <p className="host-roi-result-label">Monthly earnings</p>
              <p className="host-roi-result-value">
                PKR {monthlyEarnings.toLocaleString("en-PK")}
              </p>
            </div>

            <SmartLink href="/roi-calculator" className="host-roi-button">
              Try ROI calculator
              <Icon name="arrow" className="h-5 w-5" />
            </SmartLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
