import { useMemo, useState } from "react";
import { SmartLink } from "../components/SmartLink";

const aivoraAssetBase = "/img/aivora-career";

const galleryImages = [
  {
    src: "/img/zvolta-1.jpg",
    alt: "ZVolta electric rickshaw in the field",
  },
  {
    src: "/img/zvolta-2.jpg",
    alt: "ZVolta electric rickshaw side view",
  },
  {
    src: "/img/zvolta-maidan.jpg",
    alt: "ZVolta charging station setup",
  },
  {
    src: "/img/charging%20station.png",
    alt: "EV charging station interface",
  },
  {
    src: "/img/zvolta-3.jpg",
    alt: "ZVolta electric vehicle close view",
  },
];

const filters = [
  { label: "View all", value: "*" },
  { label: "Operations", value: "operations" },
  { label: "Engineering", value: "engineering" },
  { label: "Growth", value: "growth" },
  { label: "Field Teams", value: "field" },
];

const jobs = [
  {
    id: 1,
    title: "Charging Network Operations Associate",
    category: ["operations", "field"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 2,
    title: "EV Fleet Maintenance Technician",
    category: ["engineering", "field"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 3,
    title: "Site Acquisition and Partnerships Lead",
    category: ["growth", "operations"],
    location: "Hybrid",
    type: "Full time",
  },
  {
    id: 4,
    title: "Customer Success Specialist",
    category: ["growth"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 5,
    title: "Charging Software Support Engineer",
    category: ["engineering", "operations"],
    location: "Remote / Karachi",
    type: "Full time",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "_Send your CV",
    content:
      "Share your resume, portfolio, or LinkedIn profile so we can understand your experience and the role you are targeting.",
  },
  {
    number: "02",
    title: "_Initial screening",
    content:
      "Our team reviews your application, checks role fit, and schedules a short introductory conversation.",
  },
  {
    number: "03",
    title: "_Job interview",
    content:
      "You meet the hiring team to discuss your skills, working style, and the problems you will help ZVolta solve.",
  },
  {
    number: "04",
    title: "_Test task",
    content:
      "For selected roles, we may ask for a focused practical task that reflects the real work of the position.",
  },
  {
    number: "05",
    title: "_You're hired!",
    content:
      "Once both sides are aligned, we finalize the offer and help you get ready for your first day.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="career-page__arrow">
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CareerButton({ children, href, className = "" }) {
  return (
    <SmartLink href={href} className={`career-page__button ${className}`}>
      <span>{children}</span>
      <span className="career-page__button-icon">
        <ArrowIcon />
      </span>
    </SmartLink>
  );
}

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [activeStep, setActiveStep] = useState(0);

  const visibleJobs = useMemo(() => {
    if (activeFilter === "*") {
      return jobs;
    }

    return jobs.filter((job) => job.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <style data-page-style="careers:1">{`
        .career-page {
          --career-bg: #05070d;
          --career-panel: rgba(255, 255, 255, 0.055);
          --career-border: rgba(255, 255, 255, 0.18);
          --career-muted: rgba(255, 255, 255, 0.68);
          --career-primary: #10f08a;
          --career-primary-soft: rgba(16, 240, 138, 0.16);
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 18% 12%, rgba(16, 240, 138, 0.18), transparent 28rem),
            radial-gradient(circle at 82% 38%, rgba(31, 98, 255, 0.16), transparent 32rem),
            var(--career-bg);
          color: #ffffff;
        }

        .career-page * {
          box-sizing: border-box;
        }

        .career-page__container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .career-page__hero {
          position: relative;
          isolation: isolate;
          min-height: 700px;
          display: flex;
          align-items: flex-end;
          padding: 150px 0 86px;
          background-image:
            linear-gradient(180deg, rgba(3, 5, 10, 0.35), rgba(3, 5, 10, 0.96)),
            url("/img/aivora-career/bootcamp-bg.png");
          background-size: cover;
          background-position: center;
        }

        .career-page__hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          z-index: -1;
        }

        .career-page__crumbs {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--career-muted);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .career-page__crumbs a {
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .career-page__crumbs a:hover {
          color: var(--career-primary);
        }

        .career-page__crumbs span::before {
          content: "/";
          margin-right: 10px;
          color: rgba(255, 255, 255, 0.36);
        }

        .career-page__eyebrow,
        .career-page__subtitle {
          color: var(--career-primary);
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .career-page__hero-title {
          max-width: 850px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(64px, 10vw, 138px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: 0;
        }

        .career-page__hero-copy {
          max-width: 690px;
          margin: 26px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.55;
        }

        .career-page__stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          max-width: 760px;
          margin-top: 42px;
        }

        .career-page__stat {
          min-height: 112px;
          padding: 22px;
          border: 1px solid var(--career-border);
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035));
          backdrop-filter: blur(22px);
        }

        .career-page__stat strong {
          display: block;
          font-size: 34px;
          line-height: 1;
        }

        .career-page__stat span {
          display: block;
          margin-top: 10px;
          color: var(--career-muted);
          font-size: 14px;
          line-height: 1.4;
        }

        .career-page__gallery-section {
          padding: 88px 0 118px;
        }

        .career-page__gallery-container {
          width: min(1570px, calc(100% - 48px));
        }

        .career-page__gallery {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(24px, 1.7vw, 26px);
          min-height: 410px;
        }

        .career-page__image-item {
          width: clamp(178px, 12.95vw, 242px);
          flex: 0 0 clamp(178px, 12.95vw, 242px);
        }

        .career-page__image-item:nth-child(1),
        .career-page__image-item:nth-child(5) {
          --gallery-card-aspect: 242 / 410;
        }

        .career-page__image-item:nth-child(2),
        .career-page__image-item:nth-child(4) {
          --gallery-card-aspect: 242 / 322;
        }

        .career-page__image-item:nth-child(3) {
          --gallery-card-aspect: 242 / 213;
        }

        .career-page__image-stack {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: var(--gallery-card-aspect);
          overflow: hidden;
          border-radius: 10px;
          background: #10131c;
        }

        .career-page__image-stack::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.18));
          opacity: 0.55;
          transition: opacity 0.35s ease;
        }

        .career-page__image-stack img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease;
        }

        .career-page__image-stack:hover::before {
          opacity: 0.35;
        }

        .career-page__image-stack:hover img {
          transform: scale(1.08);
          filter: saturate(1.1);
        }

        .career-page__gallery-cta {
        
          text-align: center;
        }

        .career-page__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 54px;
          padding: 6px 7px 6px 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          background: #ffffff;
          color: #05070d;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
          transition:
            transform 0.25s ease,
            background-color 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .career-page__button:hover {
          transform: translateY(-2px);
          border-color: rgba(16, 240, 138, 0.65);
          background: var(--career-primary);
          color: #06110c;
        }

        .career-page__button-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: #05070d;
          color: #ffffff;
          overflow: hidden;
        }

        .career-page__button:hover .career-page__button-icon {
          background: #06110c;
        }

        .career-page__arrow {
          width: 22px;
          height: 22px;
          transition: transform 0.25s ease;
        }

        .career-page__button:hover .career-page__arrow {
          transform: translateX(3px);
        }

        .career-page__button--gallery {
          border-color: var(--career-primary);
          background: var(--career-primary);
          color: #06110c;
          box-shadow: 0 22px 55px rgba(16, 240, 138, 0.18);
        }

        .career-page__button--gallery:hover {
          border-color: #ffffff;
          background: #ffffff;
        }

        .career-page__hiring {
          padding: 118px 0 124px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .career-page__hiring-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
          gap: 72px;
          align-items: center;
        }

        .career-page__section-title {
          margin: 14px 0 0;
          color: #ffffff;
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 750;
          line-height: 1.04;
          letter-spacing: 0;
        }

        .career-page__accordion {
          margin: 36px 0 0;
          padding: 0;
          list-style: none;
        }

        .career-page__accordion-item {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(18px);
        }

        .career-page__accordion-item + .career-page__accordion-item {
          margin-top: 12px;
        }

        .career-page__accordion-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 28px;
          border: 0;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          text-align: left;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0;
        }

        .career-page__accordion-button .number {
          color: var(--career-primary);
        }

        .career-page__accordion-icon {
          position: relative;
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(16, 240, 138, 0.12);
        }

        .career-page__accordion-icon::before,
        .career-page__accordion-icon::after {
          content: "";
          position: absolute;
          left: 6px;
          right: 6px;
          top: 10px;
          height: 2px;
          border-radius: 2px;
          background: var(--career-primary);
          transition: transform 0.22s ease;
        }

        .career-page__accordion-icon::after {
          transform: rotate(90deg);
        }

        .career-page__accordion-button[aria-expanded="true"] .career-page__accordion-icon::after {
          transform: rotate(0deg);
        }

        .career-page__accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.28s ease;
        }

        .career-page__accordion-body.is-open {
          grid-template-rows: 1fr;
        }

        .career-page__accordion-content {
          min-height: 0;
          overflow: hidden;
        }

        .career-page__accordion-content p {
          margin: 0;
          padding: 0 28px 28px;
          color: var(--career-muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .career-page__process-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.04);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.34);
        }

        .career-page__process-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 22% 18%, rgba(16, 240, 138, 0.22), transparent 22rem);
        }

        .career-page__process-card img {
          position: relative;
          z-index: 1;
          width: 100%;
          display: block;
          padding: 28px;
        }

        .career-page__jobs {
          padding: 102px 0 118px;
          background-image:
            linear-gradient(180deg, rgba(5, 7, 13, 0.85), rgba(5, 7, 13, 0.96)),
            url("/img/aivora-career/job-bg.png");
          background-size: cover;
          background-position: center;
        }

        .career-page__jobs-heading {
          text-align: center;
        }

        .career-page__job-title {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 14px 0 0;
          color: #ffffff;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 750;
          line-height: 1.18;
        }

        .career-page__job-title img {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          object-fit: cover;
        }

        .career-page__filters {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px;
          margin: 40px auto 54px;
          padding: 7px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(40px);
        }

        .career-page__filters button {
          min-height: 46px;
          padding: 0 24px;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          font-size: 15px;
          font-weight: 800;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .career-page__filters button:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .career-page__filters button.is-active {
          background: var(--career-primary);
          color: #06110c;
        }

        .career-page__job-list {
          display: grid;
          gap: 20px;
        }

        .career-page__job-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-height: 154px;
          padding: 40px 44px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: linear-gradient(209deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035));
          box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(40px);
        }

        .career-page__job-card::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 0;
          background: rgba(16, 240, 138, 0.08);
          transition: width 0.3s ease;
        }

        .career-page__job-card:hover::before {
          width: 100%;
        }

        .career-page__job-content,
        .career-page__job-actions {
          position: relative;
          z-index: 1;
        }

        .career-page__job-card h3 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 760;
          line-height: 1.25;
        }

        .career-page__job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 24px 72px;
          margin: 0;
          padding: 0;
          list-style: none;
          color: #ffffff;
        }

        .career-page__job-meta li {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          line-height: 1.4;
        }

        .career-page__job-meta img {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
        }

        .career-page__job-empty {
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--career-muted);
          text-align: center;
        }

        .career-page__video-section {
          padding: 102px 0 120px;
          background: #05070d;
        }

        .career-page__video {
          position: relative;
          height: min(600px, 62vw);
          min-height: 340px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: #10131c;
        }

        .career-page__video img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05) contrast(1.04);
        }

        .career-page__video::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.58));
        }

        .career-page__video-copy {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 32px;
          z-index: 1;
          max-width: 620px;
        }

        .career-page__video-copy h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.05;
          font-weight: 790;
        }

        .career-page__video-copy p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 17px;
          line-height: 1.65;
        }

        @media (max-width: 1023px) {
          .career-page__hero {
            min-height: 520px;
            padding-top: 132px;
          }

          .career-page__gallery {
            justify-content: flex-start;
            overflow-x: auto;
            padding: 0 4px 14px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .career-page__gallery::-webkit-scrollbar {
            display: none;
          }

          .career-page__image-item {
            width: 220px;
            flex-basis: 220px;
            scroll-snap-align: center;
          }

          .career-page__hiring-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .career-page__job-card {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 767px) {
          .career-page__container {
            width: min(1180px, calc(100% - 24px));
          }

          .career-page__hero {
            min-height: 540px;
            padding: 130px 0 62px;
          }

          .career-page__hero-title {
            font-size: clamp(54px, 18vw, 88px);
          }

          .career-page__hero-copy {
            font-size: 17px;
            max-width: 340px;
          }

          .career-page__stats {
            grid-template-columns: 1fr;
          }

          .career-page__gallery-section,
          .career-page__hiring,
          .career-page__jobs,
          .career-page__video-section {
            padding-top: 78px;
            padding-bottom: 84px;
          }

          .career-page__gallery {
            gap: 18px;
          }

          .career-page__image-item {
            width: 190px;
            flex-basis: 190px;
          }

          .career-page__accordion-button {
            padding: 21px 20px;
            font-size: 18px;
          }

          .career-page__accordion-content p {
            padding: 0 20px 24px;
          }

          .career-page__process-card img {
            padding: 16px;
          }

          .career-page__job-title {
            display: flex;
            flex-wrap: wrap;
          }

          .career-page__filters {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .career-page__filters button {
            padding: 0 12px;
            font-size: 13px;
          }

          .career-page__job-card {
            padding: 30px 22px;
          }

          .career-page__job-meta {
            gap: 14px;
            flex-direction: column;
          }

          .career-page__button {
            width: 100%;
            justify-content: space-between;
            padding-left: 20px;
          }

          .career-page__gallery-cta .career-page__button {
            width: auto;
            min-width: 300px;
          }

          .career-page__video {
            min-height: 430px;
          }

          .career-page__video-copy {
            left: 20px;
            right: 20px;
            bottom: 22px;
          }
        }
      `}</style>

      <div className="career-page">
        <section className="career-page__hero">
          <div className="career-page__container">
            {/* <nav className="career-page__crumbs" aria-label="Breadcrumb">
              <SmartLink href="/">Home</SmartLink>
              <span>Careers</span>
            </nav> */}
            <p className="career-page__eyebrow">Join ZVolta</p>
            <h1 className="career-page__hero-title">Careers</h1>
            <p className="career-page__hero-copy">
              Help build Pakistan's electric mobility network across charging,
              vehicles, software, operations, and customer experience.
            </p>

            <div className="career-page__stats" aria-label="Career highlights">
              <div className="career-page__stat">
                <strong>EV</strong>
                <span>Infrastructure roles across charging and mobility.</span>
              </div>
              <div className="career-page__stat">
                <strong>5</strong>
                <span>Open role tracks for the next growth phase.</span>
              </div>
              <div className="career-page__stat">
                <strong>PK</strong>
                <span>
                  Work on clean transport built for local communities.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="career-page__gallery-section"
          aria-label="Life at ZVolta"
        >
          <div className="career-page__container career-page__gallery-container">
            <div className="career-page__gallery">
              {galleryImages.map((image) => (
                <div className="career-page__image-item" key={image.src}>
                  <SmartLink
                    href="/contact-us"
                    className="career-page__image-stack"
                  >
                    <img src={image.src} alt={image.alt} />
                  </SmartLink>
                </div>
              ))}
            </div>

            <div className="career-page__gallery-cta">
              <CareerButton
                href="/contact-us"
                className="career-page__button--gallery"
              >
                Begin today with us
              </CareerButton>
            </div>
          </div>
        </section>

        <section className="career-page__hiring">
          <div className="career-page__container">
            <div className="career-page__hiring-grid">
              <div>
                <span className="career-page__subtitle">Hiring Process</span>
                <h2 className="career-page__section-title">
                  Our hiring process
                </h2>

                <ul className="career-page__accordion">
                  {hiringSteps.map((step, index) => {
                    const isOpen = activeStep === index;

                    return (
                      <li
                        className="career-page__accordion-item"
                        key={step.number}
                      >
                        <button
                          type="button"
                          className="career-page__accordion-button"
                          aria-expanded={isOpen}
                          aria-controls={`career-step-${step.number}`}
                          onClick={() => setActiveStep(isOpen ? -1 : index)}
                        >
                          <span>
                            <span className="number">{step.number}</span>{" "}
                            {step.title}
                          </span>
                          <span className="career-page__accordion-icon" />
                        </button>
                        <div
                          id={`career-step-${step.number}`}
                          className={`career-page__accordion-body ${
                            isOpen ? "is-open" : ""
                          }`}
                        >
                          <div className="career-page__accordion-content">
                            <p>{step.content}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="career-page__process-card">
                <img
                  src={`${aivoraAssetBase}/process-img.png`}
                  alt="Illustration of the ZVolta hiring process"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="career-page__jobs">
          <div className="career-page__container">
            <div className="career-page__jobs-heading">
              <p className="career-page__subtitle">Open Positions</p>
              <h2 className="career-page__job-title">
                Be part of
                <img
                  src={`${aivoraAssetBase}/diamond-icon02.gif`}
                  alt=""
                  aria-hidden="true"
                />
                the team
              </h2>
              <div
                className="career-page__filters"
                role="list"
                aria-label="Filter jobs"
              >
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={activeFilter === filter.value ? "is-active" : ""}
                    aria-pressed={activeFilter === filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="career-page__job-list">
              {visibleJobs.length > 0 ? (
                visibleJobs.map((job) => (
                  <article className="career-page__job-card" key={job.id}>
                    <div className="career-page__job-content">
                      <h3>{job.title}</h3>
                      <ul className="career-page__job-meta">
                        <li>
                          <img
                            src={`${aivoraAssetBase}/location-icon02.svg`}
                            alt=""
                            aria-hidden="true"
                          />
                          {job.location}
                        </li>
                        <li>
                          <img
                            src={`${aivoraAssetBase}/clock-icon.svg`}
                            alt=""
                            aria-hidden="true"
                          />
                          {job.type}
                        </li>
                      </ul>
                    </div>

                    <div className="career-page__job-actions">
                      <CareerButton href="/contact-us">View job</CareerButton>
                    </div>
                  </article>
                ))
              ) : (
                <div className="career-page__job-empty">
                  No open roles match this filter right now.
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          className="career-page__video-section"
          aria-label="ZVolta work culture"
        >
          <div className="career-page__container">
            <div className="career-page__video">
              <img
                src="/img/zvolta-maidan.jpg"
                alt="ZVolta charging station and electric vehicle"
              />
              <div className="career-page__video-copy">
                <h2>Build practical clean mobility.</h2>
                <p>
                  Work with a team focused on charging access, electric fleets,
                  and tools that make EV adoption easier for drivers and hosts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
