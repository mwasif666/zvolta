import { SmartLink, contactCards } from "../../ContactUsPage.shared.jsx";
export function ContactPageInfoSection() {
  return (
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
              {card.description ? (
                <p className="contact-page__info-description">
                  {card.description}
                </p>
              ) : null}
              {card.phone ? (
                <SmartLink
                  href={`tel:${card.phone.replace(/\s+/g, "")}`}
                  className="contact-page__info-link"
                >
                  {card.phone}
                </SmartLink>
              ) : null}
              {card.email ? (
                <SmartLink
                  href={`mailto:${card.email}`}
                  className="contact-page__info-link"
                >
                  {card.email}
                </SmartLink>
              ) : null}
              <SmartLink
                href={card.ctaHref ?? "#contact-form"}
                className="contact-page__mini-button"
              >
                {card.ctaLabel ?? "View location"}
              </SmartLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
