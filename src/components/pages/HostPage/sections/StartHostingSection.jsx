import { Icon, PrimaryButton, Reveal } from "../../HostPage.shared.jsx";
export function StartHostingSection() {
  return (
    <section id="start-hosting" className="host-final-cta">
      <span className="cta-line-left" aria-hidden="true" />
      <span className="cta-line-right" aria-hidden="true" />
      {/* <span className="cta-bottom-line-left" aria-hidden="true" /> */}
      {/* <span className="cta-bottom-line-right" aria-hidden="true" /> */}
      <div className="host-container">
        <Reveal className="host-final-content">
          <p className="host-final-eyebrow">
            Ready to start
            <span>
              <Icon name="bolt" className="h-6 w-6" />
            </span>
          </p>
          <h2 className="host-final-title">
            Bring EV charging
            <br />
            to your space
          </h2>
          <p className="host-final-copy">
            Get set up with the right charger, installation support, and hosting
            guidance.
          </p>
          <PrimaryButton href="/contact-us" className="host-final-button">
            Start hosting
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
