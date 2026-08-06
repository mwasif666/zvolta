import {
  ALTERNATIVE_LINK,
  GooglePlayMark,
  Icon,
  PLAY_STORE_LINK,
  SmartLink,
  appHighlights,
} from "../../AppstorePage.shared.jsx";
export function AppLaunchHeroSection() {
  return (
    <section className="appstore-container appstore-hero">
      <div>
        <p className="appstore-eyebrow">
          <span />
          Arriving 2026
        </p>
        <h1 className="appstore-title">
          The Zvolta App
          <br />
          <span>Is Almost Here.</span>
        </h1>
        <p className="appstore-copy">
          Smart charging. Seamless experience. Everything you need, in one
          powerful app.
        </p>

        <div className="appstore-actions">
          <SmartLink
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noreferrer"
            className="appstore-play"
          >
            <GooglePlayMark />
            <span>
              <small>Get it on</small>
              <strong>Google Play</strong>
            </span>
          </SmartLink>

          <SmartLink
            href={ALTERNATIVE_LINK}
            target="_blank"
            rel="noreferrer"
            className="appstore-alt"
          >
            <span className="appstore-alt-icon">
              <Icon name="bag" size={22} />
            </span>
            <span>
              <small>More Ways to Get It</small>
              <strong>Explore Alternatives</strong>
            </span>
            <Icon name="arrow" className="appstore-alt-arrow" size={18} />
          </SmartLink>
        </div>

        <div className="appstore-highlights">
          {appHighlights.map(([icon, title, copy]) => (
            <article className="appstore-highlight" key={title}>
              <span className="appstore-highlight-icon">
                <Icon name={icon} size={28} />
              </span>
              <span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="appstore-phone-stage" aria-hidden="true">
        <div className="appstore-phone-frame">
          <img src="/img/mobile1.png" alt="" />
        </div>
      </div>
    </section>
  );
}
