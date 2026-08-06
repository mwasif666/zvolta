import {
  Icon,
  Reveal,
  hostControlCards,
  whyHostCards,
} from "../../HostPage.shared.jsx";
export function WhySection({ setShowRoiCalculator, showRoiCalculator }) {
  return (
    <section id="why" className="host-why-section">
      <div className="host-container host-why-layout">
        <Reveal className="host-why-content">
          <p className="host-why-eyebrow">
            <span className="host-why-index">01</span>
            Why
          </p>
          <h2 className="host-why-title">
            Turn waiting time into <span>site value.</span>
          </h2>
          <p className="host-why-copy">
            Add a useful service and turn waiting time into site value. Bring
            more visitors, increase dwell time, earn from every session, and
            support ESG goals.
          </p>

          <div className="host-why-grid">
            {whyHostCards.map((item) => (
              <div className="host-why-card" key={item.copy}>
                <span className="host-why-icon">
                  <Icon name={item.icon} className="h-9 w-9" />
                </span>
                <span>{item.copy}</span>
              </div>
            ))}
          </div>

          <div className="host-why-control">
            {hostControlCards.map((item) => (
              <div className="host-why-control-item" key={item.copy}>
                <span className="host-why-control-icon">
                  <Icon name={item.icon} className="h-8 w-8" />
                </span>
                <span>{item.copy}</span>
              </div>
            ))}
          </div>

          {!showRoiCalculator ? (
            <div className="host-expand-actions">
              <button
                type="button"
                className="host-expand-button"
                onClick={() => setShowRoiCalculator(true)}
              >
                Show ROI calculator
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.08} className="host-why-visual">
          <div className="host-why-image-wrap">
            <img
              src="https://res.cloudinary.com/diywraupt/image/upload/v1780393382/web_1_cwxatn.jpg"
              alt="Zvolta host charging location"
              className="host-why-image"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
