import {
  Icon,
  Reveal,
  hostHowCards,
  hostHowFooter,
} from "../../HostPage.shared.jsx";
export function HowSection() {
  return (
    <section id="how" className="host-how-section">
      <div className="host-container host-how-inner">
        <Reveal className="host-how-copy">
          <p className="host-how-eyebrow">
            <span className="host-how-number">02</span>
            How
          </p>
          <h2 className="host-how-title">
            Run everything from your <span>device.</span>
          </h2>
          <p className="host-how-description">
            Manage, monitor and earn without being on-site.
          </p>

          <div className="host-how-card-grid">
            {hostHowCards.map((item) => (
              <div className="host-how-card" key={item.title}>
                <span className="host-how-icon">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="host-how-visual">
          <img
            src="/img/Host/mobile.png"
            alt="Zvolta mobile wallet and profile controls"
            className="host-how-device host-how-mobile"
          />
          <img
            src="/img/Host/laptop.png"
            alt="Zvolta host dashboard on laptop"
            className="host-how-device host-how-laptop"
          />
          <img
            src="/img/Host/payment.png"
            alt="Zvolta payment confirmation on mobile"
            className="host-how-device host-how-payment"
          />
        </Reveal>

        <div className="host-how-footer">
          {hostHowFooter.map((item) => (
            <div className="host-how-footer-item" key={item.copy}>
              <Icon name={item.icon} className="host-how-footer-icon h-6 w-6" />
              <span>{item.copy}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="host-container host-how-payment-cards">
            <div className="host-payment-cards">
              {paymentSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <article className="host-payment-card">
                    <div className="host-payment-card-top">
                      <span className="host-payment-icon">
                        <Icon
                          name={
                            index === 0
                              ? "map"
                              : index === 1
                                ? "plug"
                                : index === 2
                                  ? "wallet"
                                  : "bolt"
                          }
                          className="h-8 w-8"
                        />
                      </span>
                      <span className="host-payment-number">
                        <span className="host-payment-line" />
                        <span className="host-payment-dot" />
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
           </div> */}
    </section>
  );
}
