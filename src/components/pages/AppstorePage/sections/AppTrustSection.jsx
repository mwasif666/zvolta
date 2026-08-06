import { Icon } from "../../AppstorePage.shared.jsx";
export function AppTrustSection() {
  return (
    <section className="appstore-container appstore-info-strip">
      <article className="appstore-info-item">
        <span className="appstore-info-icon">
          <Icon name="shield" size={32} />
        </span>
        <span>
          <h3>Your data is secure with us.</h3>
          <p>We use top-tier security to protect your information.</p>
        </span>
      </article>
      <span className="appstore-info-divider" />
      <article className="appstore-info-item">
        <span className="appstore-info-icon">
          <Icon name="calendar" size={32} />
        </span>
        <span>
          <h3>Coming in 2026</h3>
          <p>Get ready for the future of EV charging.</p>
        </span>
      </article>
    </section>
  );
}
