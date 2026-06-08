import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SmartLink } from "../SmartLink";

const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=app.zvolta.android";
const ALTERNATIVE_LINK = "https://evrental-app.orkofleet.com/login";

const appHighlights = [
  ["bolt", "Smart Charging", "Optimized for you"],
  ["calendar", "Easy Booking", "In just a few taps"],
  ["chart", "Real-time Insights", "Track every session"],
];

const carouselSlides = [
  {
    image: "/img/mobile3.png",
    alt: "Zvolta wallet and charging payments",
  },
  {
    image: "/img/mobile4.png",
    alt: "Zvolta seamless charging ecosystem",
  },
  {
    image: "/img/mobile1.png",
    alt: "Zvolta intelligent charging experience",
  },
  {
    image: "/img/mobile2.png",
    alt: "Zvolta booking details",
  },
  {
    image: "/img/mobile5.png",
    alt: "Zvolta nearby charging stations",
  },
];

function Icon({ name, size = 24, className = "" }) {
  const props = {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-4" />
        <path d="M12 16V8" />
        <path d="M16 16v-7" />
      </svg>
    );
  }

  if (name === "bag") {
    return (
      <svg {...props}>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 40 44" className="appstore-play-icon" aria-hidden="true">
      <path
        fill="#34A853"
        d="M2.3 1.5 24 22 2.3 42.5A4 4 0 0 1 0 38.9V5.1a4 4 0 0 1 2.3-3.6Z"
      />
      <path
        fill="#FBBC04"
        d="m24 22 6.2-5.9 7.5 4.3a2 2 0 0 1 0 3.2l-7.5 4.3L24 22Z"
      />
      <path fill="#4285F4" d="M2.3 1.5 30.2 16.1 24 22 2.3 1.5Z" />
      <path fill="#EA4335" d="M2.3 42.5 24 22l6.2 5.9L2.3 42.5Z" />
    </svg>
  );
}

export default function AppstorePage() {
  return (
    <>
      <style data-page-style="appstore-redesign">{`
        html,
        body {
          overflow-x: hidden;
          overflow-y: auto;
          background: #03130c;
        }

        .appstore-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 82% 16%, rgba(33, 202, 88, 0.2), transparent 28%),
            radial-gradient(circle at 10% 4%, rgba(22, 163, 74, 0.2), transparent 24%),
            linear-gradient(180deg, #03130c 0%, #04110c 52%, #071009 100%);
          color: #FFFFFF;
          font-family: inherit;
        }

        .appstore-container {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
        }

        .appstore-hero {
          position: relative;
          display: grid;
          min-height: 650px;
          grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.72fr);
          gap: 48px;
          align-items: center;
          padding: 78px 0 34px;
        }

        .appstore-hero::before {
          content: '';
          position: absolute;
          right: 6%;
          top: 20%;
          width: 430px;
          height: 430px;
          border-radius: 999px;
          border: 1px solid rgba(97, 255, 90, 0.32);
          box-shadow:
            inset 0 0 0 36px rgba(97, 255, 90, 0.04),
            inset 0 0 0 72px rgba(97, 255, 90, 0.035),
            0 0 100px rgba(33, 202, 88, 0.28);
          pointer-events: none;
        }

        .appstore-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(22, 220, 90, 0.86);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.09);
          padding: 10px 18px;
          color: #20e878;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .appstore-eyebrow span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #20e878;
          box-shadow: 0 0 20px rgba(32, 232, 120, 0.88);
        }

        .appstore-title {
          margin-top: 34px;
          max-width: 640px;
          color: #FFFFFF;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .appstore-title span {
          display: inline-block;
          background: linear-gradient(90deg, #d9fff0, #23dc73 72%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .appstore-copy {
          margin-top: 24px;
          max-width: 560px;
          color: #BFC8C2;
          font-size: clamp(17px, 1.6vw, 22px);
          line-height: 1.5;
        }

        .appstore-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 42px;
        }

        .appstore-play,
        .appstore-alt {
          display: inline-flex;
          min-height: 84px;
          align-items: center;
          gap: 18px;
          border-radius: 12px;
          padding: 16px 24px;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .appstore-play {
          min-width: 260px;
          background: #FFFFFF;
          color: #0B0B0B;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
        }

        .appstore-play:hover,
        .appstore-alt:hover {
          transform: translateY(-2px);
        }

        .appstore-play-icon {
          width: 42px;
          height: 46px;
          flex: 0 0 auto;
        }

        .appstore-play small,
        .appstore-alt small {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .appstore-play strong,
        .appstore-alt strong {
          display: block;
          margin-top: 2px;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
        }

        .appstore-alt {
          min-width: 300px;
          border: 1px solid rgba(255, 255, 255, 0.74);
          background: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
        }

        .appstore-alt:hover {
          border-color: #20e878;
          background: rgba(22, 163, 74, 0.12);
        }

        .appstore-alt-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          color: #20e878;
        }

        .appstore-alt-arrow {
          margin-left: auto;
          color: #BFC8C2;
        }

        .appstore-highlights {
          display: grid;
          margin-top: 58px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .appstore-highlight {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
        }

        .appstore-highlight-icon,
        .appstore-info-icon {
          display: grid;
          place-items: center;
          border: 1px solid rgba(32, 232, 120, 0.38);
          border-radius: 10px;
          background: rgba(22, 163, 74, 0.12);
          color: #20e878;
          box-shadow: inset 0 0 22px rgba(32, 232, 120, 0.08);
        }

        .appstore-highlight-icon {
          width: 52px;
          height: 52px;
        }

        .appstore-highlight h3 {
          color: #B7FFD0;
          font-size: 17px;
          font-weight: 900;
        }

        .appstore-highlight p {
          margin-top: 5px;
          color: #BFC8C2;
          font-size: 15px;
        }

        .appstore-phone-stage {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: center;
          align-self: center;
          padding-top: 20px;
        }

        .appstore-phone-stage::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 8px;
          width: 390px;
          height: 88px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(91, 255, 55, 0.42), rgba(22, 163, 74, 0.12) 52%, transparent 72%);
          filter: blur(2px);
          z-index: -1;
        }

        .appstore-phone-frame {
          position: relative;
          width: min(370px, 82vw);
          aspect-ratio: 9 / 16;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          background: rgba(6, 21, 12, 0.82);
          box-shadow:
            0 36px 90px rgba(0, 0, 0, 0.66),
            0 0 0 1px rgba(255, 255, 255, 0.22);
        }

        .appstore-phone-frame::before {
          content: none;
        }

        .appstore-phone-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .appstore-carousel-section {
          position: relative;
          padding: 22px 76px 42px;
        }

        .appstore-swiper {
          position: relative;
          overflow: hidden;
          padding: 0 0 54px;
        }

        .appstore-slide-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 9 / 16;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          background: rgba(6, 21, 12, 0.82);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
        }

        .appstore-slide-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .appstore-carousel-button {
          position: absolute;
          top: calc(50% - 18px);
          z-index: 10;
          display: grid;
          width: 52px;
          height: 52px;
          transform: translateY(-50%);
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          background: rgba(4, 16, 10, 0.82);
          color: #FFFFFF;
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.34);
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .appstore-carousel-button:hover {
          border-color: rgba(32, 232, 120, 0.7);
          background: rgba(22, 163, 74, 0.28);
          transform: translateY(-50%) scale(1.04);
        }

        .appstore-carousel-button svg {
          width: 26px;
          height: 26px;
          stroke-width: 2.4;
        }

        .appstore-carousel-prev {
          left: 8px;
        }

        .appstore-carousel-prev svg {
          transform: rotate(180deg);
        }

        .appstore-carousel-next {
          right: 8px;
        }

        .appstore-carousel-button.swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }

        .appstore-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .appstore-swiper .swiper-pagination-bullet-active {
          background: #20e878;
        }

        .appstore-info-strip {
          display: grid;
          margin: 28px auto 74px;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          gap: 38px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025)),
            rgba(20, 54, 35, 0.42);
          padding: 32px 42px;
          box-shadow: inset 0 0 48px rgba(32, 232, 120, 0.05);
        }

        .appstore-info-divider {
          width: 1px;
          height: 70px;
          background: rgba(255, 255, 255, 0.16);
        }

        .appstore-info-item {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr);
          align-items: center;
          gap: 20px;
        }

        .appstore-info-icon {
          width: 64px;
          height: 64px;
        }

        .appstore-info-item h3 {
          color: #D8FFE7;
          font-size: 20px;
          font-weight: 900;
        }

        .appstore-info-item p {
          margin-top: 7px;
          color: #BFC8C2;
          font-size: 16px;
        }

        @media (max-width: 980px) {
          .appstore-hero {
            grid-template-columns: 1fr;
            padding-top: 68px;
          }

          .appstore-phone-stage {
            align-self: center;
          }

          .appstore-highlights {
            grid-template-columns: 1fr;
          }

          .appstore-info-strip {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .appstore-info-divider {
            width: 100%;
            height: 1px;
          }
        }

        @media (max-width: 640px) {
          .appstore-container {
            width: min(100% - 28px, 1220px);
          }

          .appstore-hero {
            min-height: auto;
            gap: 30px;
            padding: 46px 0 24px;
          }

          .appstore-title {
            font-size: 43px;
          }

          .appstore-actions {
            gap: 14px;
          }

          .appstore-play,
          .appstore-alt {
            width: 100%;
            min-width: 0;
          }

          .appstore-swiper {
            padding-inline: 0;
          }

          .appstore-carousel-section {
            padding-inline: 0;
          }

          .appstore-carousel-button {
            display: none;
          }

          .appstore-info-strip {
            margin-bottom: 42px;
            padding: 22px;
          }

          .appstore-info-item {
            grid-template-columns: 54px minmax(0, 1fr);
          }

          .appstore-info-icon {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>

      <main className="appstore-page">
        <section className="appstore-container appstore-hero">
          <div>
            <p className="appstore-eyebrow">
              <span />
              Arriving 2026
            </p>
            <h1 className="appstore-title">
              The ZVolta App
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
                  <Icon name="bag" size={36} />
                </span>
                <span>
                  <small>More Ways to Get It</small>
                  <strong>Explore Alternatives</strong>
                </span>
                <Icon name="arrow" className="appstore-alt-arrow" size={20} />
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

        <section className="appstore-container appstore-carousel-section">
          <button
            type="button"
            className="appstore-carousel-button appstore-carousel-prev"
            aria-label="Previous screenshot"
          >
            <Icon name="arrow" />
          </button>
          <button
            type="button"
            className="appstore-carousel-button appstore-carousel-next"
            aria-label="Next screenshot"
          >
            <Icon name="arrow" />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".appstore-carousel-prev",
              nextEl: ".appstore-carousel-next",
            }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={24}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 22 },
              980: { slidesPerView: 3, spaceBetween: 26 },
            }}
            className="appstore-swiper"
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.image}>
                <article className="appstore-slide-card">
                  <img src={slide.image} alt={slide.alt} />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

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
      </main>
    </>
  );
}
