import { useState } from "react";
import { SmartLink } from "../components/SmartLink";

const assetBase = "/img/aivora-contact";

const contactCards = [
  {
    title: "Karachi, Pakistan",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/zvolta-1.jpg",
  },
  {
    title: "Partnership Desk",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/zvolta-2.jpg",
  },
  {
    title: "Customer Support",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/charging-post.jpg",
  },
];

function FieldIcon({ src, alt }) {
  return <img src={src} alt={alt} aria-hidden="true" />;
}

function ArrowIcon() {
  return (
    <span className="contact-page__button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

export default function ContactUsPage() {
  const [submitState, setSubmitState] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
    }
  };

  const resetFormState = () => setSubmitState("idle");

  return (
    <>
      <style data-page-style="contact-us:1">{`
        .contact-page {
          --contact-bg: #000504;
          --contact-primary: #10b981;
          --contact-primary-bright: #00f08a;
          --contact-secondary: #020403;
          --contact-muted: #b2b3b7;
          --contact-panel: rgba(255, 255, 255, 0.05);
          --contact-border: rgba(16, 185, 129, 0.28);
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 14%, rgba(16, 185, 129, 0.2), transparent 30rem),
            radial-gradient(circle at 86% 42%, rgba(255, 255, 255, 0.08), transparent 30rem),
            var(--contact-bg);
          color: #ffffff;
          font-family: "DM Sans", "Questrial", system-ui, sans-serif;
        }

        .contact-page * {
          box-sizing: border-box;
        }

        .contact-page__container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .contact-page__hero {
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 150px 0 100px;
          background-image:
            radial-gradient(circle at 50% 42%, rgba(0, 255, 151, 0.16), transparent 32rem),
            linear-gradient(180deg, rgba(0, 5, 4, 0.58), rgba(0, 5, 4, 0.94)),
            url("/img/zvolta-3.jpg");
          background-position: center, center, center 46%;
          background-size: cover;
          text-align: center;
        }

        .contact-page__breadcrumbs {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          margin: 0;
          padding: 0;
          list-style: none;
          color: #ffffff;
          text-transform: capitalize;
        }

        .contact-page__breadcrumbs::before,
        .contact-page__breadcrumbs::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--contact-primary);
          transform: translateY(-50%);
        }

        .contact-page__breadcrumbs::before {
          left: -18px;
        }

        .contact-page__breadcrumbs::after {
          right: -18px;
        }

        .contact-page__breadcrumbs a,
        .contact-page__breadcrumbs span {
          color: inherit;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-page__breadcrumbs span::before {
          content: "/";
          margin-right: 10px;
          color: rgba(255, 255, 255, 0.75);
        }

        .contact-page__hero-title {
          margin: 24px 0 0;
          color: #ffffff;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.06em;
        }

        .contact-page__info {
          padding: 105px 0 130px;
        }

        .contact-page__info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }

        .contact-page__info-card {
          position: relative;
          isolation: isolate;
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(16, 185, 129, 0.06)),
            #070a0b;
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(40px);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-page__info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
        }

        .contact-page__info-card::after,
        .contact-page__contact-wrap::after,
        .contact-page__form-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(146deg, rgba(16, 185, 129, 0.72), rgba(255, 255, 255, 0.16) 22%, rgba(255, 255, 255, 0.06) 62%, rgba(16, 185, 129, 0.42));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .contact-page__image-stack {
          position: relative;
          display: block;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 555 / 391;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
        }

        .contact-page__image-stack span {
          display: block;
          width: 100%;
          height: 100%;
        }

        .contact-page__image-stack img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1), filter 0.3s ease;
        }

        .contact-page__info-card:hover .contact-page__image-stack img {
          transform: scale(1.1);
          filter: saturate(1.1) contrast(1.02);
        }

        .contact-page__info-title {
          display: block;
          margin: 30px 0 22px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .contact-page__info-link {
          display: block;
          color: #ffffff;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .contact-page__info-link + .contact-page__info-link {
          margin-top: 14px;
        }

        .contact-page__mini-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 44px;
          min-height: 42px;
          padding: 8px 34px;
          border: 1px solid #4c4e57;
          border-radius: 999px;
          background: rgba(0, 2, 15, 0.1);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .contact-page__mini-button:hover {
          background: var(--contact-primary);
          color: var(--contact-secondary);
        }

        .contact-page__form-section {
          padding: 0 0 130px;
        }

        .contact-page__contact-wrap {
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          overflow: hidden;
          padding: 20px;
          border-radius: 10px;
          background-image:
            linear-gradient(135deg, rgba(0, 5, 4, 0.94), rgba(2, 38, 25, 0.9) 52%, rgba(16, 185, 129, 0.72)),
            url("${assetBase}/contact-bg02.png");
          background-position: center;
          background-size: cover;
        }

        .contact-page__form-card {
          position: relative;
          z-index: 1;
          padding: 50px 30px;
          border-radius: 10px 0 0 10px;
          background:
            linear-gradient(145deg, rgba(0, 0, 0, 0.62), rgba(11, 45, 31, 0.45)),
            url("${assetBase}/noise.png");
          background-size: cover;
          box-shadow: 0 4px 24px -1px rgba(28, 9, 61, 0.2);
        }

        .contact-page__form-heading {
          margin-bottom: 30px;
          text-align: center;
        }

        .contact-page__form-heading h2 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .contact-page__form-heading p {
          margin: 0;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.55;
        }

        .contact-page__form {
          padding: 0 10px;
        }

        .contact-page__form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .contact-page__field {
          position: relative;
        }

        .contact-page__field--full {
          grid-column: 1 / -1;
        }

        .contact-page__field input,
        .contact-page__field textarea {
          width: 100%;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          outline: none;
          background: rgba(0, 0, 0, 0.36);
          color: #ffffff;
          padding: 10px 20px 10px 48px;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: -0.02em;
          transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-page__field textarea {
          height: 120px;
          resize: vertical;
          padding-top: 16px;
        }

        .contact-page__field input:focus,
        .contact-page__field textarea:focus {
          border-color: rgba(0, 255, 151, 0.85);
          background: rgba(0, 0, 0, 0.48);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.16);
        }

        .contact-page__field label {
          position: absolute;
          left: 48px;
          top: 50%;
          display: inline-block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 15px;
          font-weight: 400;
          letter-spacing: -0.02em;
          pointer-events: none;
          text-transform: capitalize;
          transform: translateY(-50%);
          transition: opacity 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
        }

        .contact-page__field--message label {
          top: 30px;
        }

        .contact-page__field input:focus + label,
        .contact-page__field input:not(:placeholder-shown) + label,
        .contact-page__field textarea:focus + label,
        .contact-page__field textarea:not(:placeholder-shown) + label {
          opacity: 0;
          transform: translate(15px, -50%);
        }

        .contact-page__field img {
          position: absolute;
          left: 20px;
          top: 50%;
          width: 18px;
          height: 18px;
          object-fit: contain;
          filter: brightness(100);
          transform: translateY(-50%);
        }

        .contact-page__field--message img {
          top: 30px;
        }

        .contact-page__checkbox {
          grid-column: 1 / -1;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-page__checkbox input {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          accent-color: var(--contact-primary);
        }

        .contact-page__status {
          grid-column: 1 / -1;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-page__status--success {
          border: 1px solid rgba(0, 255, 151, 0.35);
          background: rgba(0, 255, 151, 0.12);
          color: #dfffee;
        }

        .contact-page__status--error {
          border: 1px solid rgba(248, 113, 113, 0.38);
          background: rgba(248, 113, 113, 0.12);
          color: #ffe2e2;
        }

        .contact-page__submit {
          grid-column: 1 / -1;
        }

        .contact-page__button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: min(100%, 460px);
          min-height: 60px;
          margin: 6px auto 0;
          overflow: hidden;
          border: 0;
          border-radius: 999px;
          background: var(--contact-primary-bright);
          color: var(--contact-secondary);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.1;
          text-transform: uppercase;
          transition: background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease;
        }

        .contact-page__button:hover {
          background: #ffffff;
          color: var(--contact-secondary);
        }

        .contact-page__button:disabled {
          cursor: not-allowed;
          opacity: 0.72;
        }

        .contact-page__button-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          overflow: hidden;
          border-radius: 999px;
          background: var(--contact-secondary);
          color: var(--contact-primary-bright);
        }

        .contact-page__button-icon svg {
          position: absolute;
          inset: 6px;
          width: 18px;
          height: 18px;
          transition: transform 0.25s ease;
        }

        .contact-page__button-icon svg:nth-child(2) {
          transform: translate(-30px, 30px);
        }

        .contact-page__button:hover .contact-page__button-icon svg:nth-child(1) {
          transform: translate(30px, -30px);
        }

        .contact-page__button:hover .contact-page__button-icon svg:nth-child(2) {
          transform: translate(0, 0);
          transition-delay: 0.08s;
        }

        .contact-page__map {
          min-height: 660px;
          overflow: hidden;
          border-radius: 0 10px 10px 0;
          background:
            radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.16), transparent 24rem),
            #020403;
        }

        .contact-page__map iframe {
          width: 100%;
          height: 100%;
          min-height: 660px;
          border: 0;
          display: block;
          filter: saturate(0.75) contrast(1.05);
        }

        @media (max-width: 991px) {
          .contact-page__info-grid,
          .contact-page__contact-wrap {
            grid-template-columns: 1fr;
          }

          .contact-page__form-card {
            border-radius: 10px 10px 0 0;
          }

          .contact-page__map {
            min-height: 440px;
            border-radius: 0 0 10px 10px;
          }

          .contact-page__map iframe {
            min-height: 440px;
          }
        }

        @media (max-width: 767px) {
          .contact-page__hero {
            min-height: 360px;
            padding: 130px 0 76px;
          }

          .contact-page__info {
            padding: 70px 0 90px;
          }

          .contact-page__form-section {
            padding-bottom: 90px;
          }

          .contact-page__form-card {
            padding: 42px 18px;
          }

          .contact-page__form {
            padding: 0;
          }

          .contact-page__form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-page">
        <section className="contact-page__hero">
          <div className="contact-page__container">
            <ul className="contact-page__breadcrumbs">
              <li>
                <SmartLink href="/">Home</SmartLink>
              </li>
              <li>
                <span>Contact us</span>
              </li>
            </ul>
            <h1 className="contact-page__hero-title">Contact us</h1>
          </div>
        </section>

        <section className="contact-page__info" aria-label="Contact details">
          <div className="contact-page__container">
            <div className="contact-page__info-grid">
              {contactCards.map((card) => (
                <article className="contact-page__info-card" key={card.title}>
                  {/* <div className="contact-page__image-stack">
                    <span>
                      <img src={card.image} alt={card.title} />
                    </span>
                  </div> */}
                  <span className="contact-page__info-title">{card.title}</span>
                  <SmartLink
                    href={`tel:${card.phone.replace(/\s+/g, "")}`}
                    className="contact-page__info-link"
                  >
                    {card.phone}
                  </SmartLink>
                  <SmartLink
                    href={`mailto:${card.email}`}
                    className="contact-page__info-link"
                  >
                    {card.email}
                  </SmartLink>
                  <SmartLink
                    href="#contact-form"
                    className="contact-page__mini-button"
                  >
                    View location
                  </SmartLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-page__form-section">
          <div className="contact-page__container">
            <div className="contact-page__contact-wrap">
              <div className="contact-page__form-card">
                <div className="contact-page__form-heading">
                  <h2>Ready to collaborate with us?</h2>
                  <p>Who knows where a single message might lead you.</p>
                </div>

                <form
                  id="contact-form"
                  action="https://formspree.io/f/mvgrykro"
                  method="POST"
                  onSubmit={handleSubmit}
                  onChange={() => {
                    if (submitState === "success" || submitState === "error") {
                      resetFormState();
                    }
                  }}
                  className="contact-page__form"
                >
                  <div className="contact-page__form-grid">
                    <div className="contact-page__field">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        autoComplete="given-name"
                        placeholder=" "
                      />
                      <label htmlFor="first-name">First Name*</label>
                      <FieldIcon src={`${assetBase}/user-icon.svg`} alt="" />
                    </div>

                    <div className="contact-page__field">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        autoComplete="family-name"
                        placeholder=" "
                      />
                      <label htmlFor="last-name">Last Name*</label>
                      <FieldIcon src={`${assetBase}/user-icon.svg`} alt="" />
                    </div>

                    <div className="contact-page__field">
                      <input
                        type="email"
                        name="business-email"
                        id="business-email"
                        required
                        autoComplete="email"
                        placeholder=" "
                      />
                      <label htmlFor="business-email">Business Email*</label>
                      <FieldIcon src={`${assetBase}/email-icon.svg`} alt="" />
                    </div>

                    <div className="contact-page__field">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        required
                        autoComplete="tel"
                        placeholder=" "
                      />
                      <label htmlFor="phone-number">Phone Number*</label>
                      <FieldIcon src={`${assetBase}/phone-icon.svg`} alt="" />
                    </div>

                    <div className="contact-page__field contact-page__field--full">
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        autoComplete="organization"
                        placeholder=" "
                      />
                      <label htmlFor="company-name">Company Name</label>
                      <FieldIcon src={`${assetBase}/company-icon.svg`} alt="" />
                    </div>

                    <div className="contact-page__field contact-page__field--full contact-page__field--message">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        rows={5}
                        required
                        placeholder=" "
                        defaultValue=""
                      />
                      <label htmlFor="how-can-we-help">How can we help?*</label>
                      <FieldIcon src={`${assetBase}/message-icon.svg`} alt="" />
                    </div>

                    <label className="contact-page__checkbox" htmlFor="offers">
                      <input id="offers" name="offers" type="checkbox" />
                      <span>
                        Yes, I'd like to receive occasional news and tips.
                      </span>
                    </label>

                    {submitState === "success" && (
                      <div className="contact-page__status contact-page__status--success">
                        Message sent. We'll get back to you shortly.
                      </div>
                    )}

                    {submitState === "error" && (
                      <div className="contact-page__status contact-page__status--error">
                        Submission failed. Please try again.
                      </div>
                    )}

                    <div className="contact-page__submit">
                      <button
                        type="submit"
                        disabled={submitState === "loading"}
                        className="contact-page__button"
                      >
                        {submitState === "loading"
                          ? "Sending..."
                          : "Submit Inquiry"}
                        <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="contact-page__map">
                <iframe
                  title="ZVolta Karachi office map"
                  src="https://www.google.com/maps?q=36F%2C%20Street%2036%2C%20Block%206%2C%20P.E.C.H.S%2C%20Karachi%2C%20Pakistan&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
