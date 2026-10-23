import { useState } from "react";
import { SmartLink } from "../../IndexPage.shared.jsx";
import styles from "./HorizontalScrollSection.module.css";

const services = [
  {
    id: "host",
    title: "Host A Charger",
    description:
      "Place a fully automated charger at your site and earn steady revenue without human intervention. Whether you are a small business looking to earn extra revenue or a large organization taking visible climate action, Zvolta helps turn your location into a smart charging point.",
    href: "/host",
    action: "Start Hosting",
    images: [
      "Host/03.jpg",
      "Host/02.png",
      "Host/03.png",
      "Host/04.png",
      "Host/05.png",
      "Host/Host.png",
    ],
  },
  {
    id: "charge",
    title: "Charge your vehicle",
    description:
      "Fast and simple charging for cars, bikes, and everything electric.",
    href: "/charge",
    action: "Find a station",
    images: [
      "Charge/01.png",
      "Charge/02.png",
      "Charge/03.png",
      "Charge/04.png",
      "Charge/05.png",
      "Charge/06.png",
    ],
  },
  {
    id: "software",
    title: "Software for operators",
    description:
      "Have full control of your charging station with complete visibility. Set your own pricing, manage timings, and track every session from one clean dashboard.",
    href: "/software",
    action: "Book A Demo",
    images: [
      "Operate/01.png",
      "Operate/02.png",
      "Operate/03.png",
      "Operate/04.png",
      "Operate/05.png",
      "Operate/Operate.png",
    ],
  },
];

export function HorizontalScrollSection() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section
      id="horizontal-scroll-section"
      className="py-12 px-4 md:px-8 bg-transparent border-t border-white/10 md:min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto w-full">
        <div id="cards-wrapper" className={styles.grid}>
          {services.map((service) => (
            <article
              key={service.id}
              className={`card-hover-trigger group ${styles.card}`}
              data-expanded={expandedCard === service.id}
              aria-labelledby={`service-title-${service.id}`}
            >
              <div
                className={`card-slideshow ${styles.slideshow}`}
                aria-hidden="true"
              >
                {service.images.map((image, index) => (
                  <img
                    key={image}
                    src={`img/${image}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                    alt=""
                    loading="lazy"
                  />
                ))}
              </div>
              <div className={styles.shade} />
              <div className={styles.content}>
                <div>
                  <h3
                    id={`service-title-${service.id}`}
                    className={styles.title}
                  >
                    <button
                      type="button"
                      className={styles.titleToggle}
                      aria-expanded={expandedCard === service.id}
                      aria-controls={`service-description-${service.id}`}
                      onClick={() =>
                        setExpandedCard((current) =>
                          current === service.id ? null : service.id,
                        )
                      }
                    >
                      {service.title}
                    </button>
                  </h3>
                  <p
                    id={`service-description-${service.id}`}
                    className={styles.description}
                  >
                    {service.description}
                  </p>
                </div>
                <SmartLink href={service.href} className={styles.action}>
                  {service.action}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </SmartLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
