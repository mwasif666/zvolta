import {
  Icon,
  getChargerQuickDetails,
  threeKwHowFeatures,
  threeKwHowStrip,
} from "../../ChargerSpecPage.shared.jsx";

export function ThreeKwQuickSection({ spec }) {
  const quickDetails = getChargerQuickDetails(spec);
  return (
    <section className="three-section">
      <div className="three-container">
        <p className="three-eyebrow">Quick Details</p>
        <h2 className="three-section-title">Everything you need to know</h2>
        <div className="three-quick-grid">
          {quickDetails.map(([icon, label, value]) => (
            <article className="three-info-card" key={label}>
              <span className="three-card-icon">
                <Icon name={icon} className="h-8 w-8" />
              </span>
              <h3>{label}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>

        <div className="three-how-panel">
          <div className="three-how-copy">
            {/* <div className="three-how-kicker">
              <span>02</span>
              <strong>How</strong>
             </div> */}
            <h2>
              Run everything from your <span>device.</span>
            </h2>
            <p>Manage, monitor and earn without being on-site.</p>

            <div className="three-how-feature-grid">
              {threeKwHowFeatures.map(([icon, title, copy]) => (
                <article className="three-how-feature" key={title}>
                  <span>
                    <Icon name={icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="three-how-visual" aria-hidden="true">
            <img
              className="three-how-phone"
              src="/img/Host/mobile.png"
              alt=""
            />
            <img
              className="three-how-laptop"
              src="/img/Host/laptop.png"
              alt=""
            />
            <img
              className="three-how-payment"
              src="/img/Host/payment.png"
              alt=""
            />
          </div>

          <div className="three-how-strip">
            {threeKwHowStrip.map(([icon, label]) => (
              <div key={label}>
                <Icon name={icon} className="h-7 w-7" />
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
