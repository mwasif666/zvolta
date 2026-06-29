import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { SmartLink } from "../SmartLink";
import { chargerSpecCommon } from "../../data/chargerSpecs";
import RotatingText from "../RotatingText";

const CONTACT_LINK = "/contact-us";

function Icon({ name = "check", className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
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

  if (name === "bolt") {
    return (
      <svg {...props}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  }

  if (name === "droplet") {
    return (
      <svg {...props}>
        <path d="M12 2.5 6.5 9a7 7 0 1 0 11 0L12 2.5Z" />
        <path d="M8.5 14.5a3.5 3.5 0 0 0 3 3" />
      </svg>
    );
  }

  if (name === "phase") {
    return (
      <svg {...props}>
        <path d="M2 12c2.5 0 2.5-6 5-6s2.5 12 5 12 2.5-6 5-6 2.5 6 3 6" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...props}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...props}>
        <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M16 9h2a2 2 0 0 1 2 2v10" />
        <path d="M8 7h4" />
        <path d="M8 11h4" />
        <path d="M8 15h4" />
        <path d="M3 21h18" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...props}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
        <path d="M10 18h4" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...props}>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
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

  if (name === "wrench") {
    return (
      <svg {...props}>
        <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.8 2.8-3-3 2.8-2.8Z" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    );
  }

  if (name === "chevron") {
    return (
      <svg {...props}>
        <path d="m6 9 6 6 6-6" />
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
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg {...props}>
        <path d="M21 11.5a8 8 0 0 1-8 8H7l-4 2 1.4-4A8 8 0 1 1 21 11.5Z" />
        <path d="M8 12h.01" />
        <path d="M12 12h.01" />
        <path d="M16 12h.01" />
      </svg>
    );
  }

  if (name === "wifi") {
    return (
      <svg {...props}>
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M12 20h.01" />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg {...props}>
        <path d="M4 14c7-10 14-10 17-10-1 9-5 16-13 16a5 5 0 0 1-4-6Z" />
        <path d="M4 20c3-5 7-8 12-10" />
      </svg>
    );
  }

  if (name === "dollar") {
    return (
      <svg {...props}>
        <path d="M12 2v20" />
        <path d="M17 6.5c-1.1-.9-2.7-1.4-4.4-1.4-2.4 0-4.2 1.1-4.2 2.8 0 4.2 9.2 2 9.2 6.4 0 1.9-1.9 3.2-4.7 3.2-2 0-3.8-.6-5.1-1.7" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg {...props}>
        <path d="M19 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7" />
        <path d="M16 14h.01" />
      </svg>
    );
  }

  if (name === "access") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...props}>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg {...props}>
        <path d="M7 3h7l4 4v14H7V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9.5 13h5" />
        <path d="M9.5 17h5" />
      </svg>
    );
  }

  if (name === "gear") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6v.2h-4v-.2a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H2.8v-4H3a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1 2.8-2.8.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6v-.2h4v.2a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1 2.8 2.8-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1h.2v4H21a1.8 1.8 0 0 0-1.6 1Z" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (name === "headset") {
    return (
      <svg {...props}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />
        <path d="M16 19c0 1.1-1.8 2-4 2" />
      </svg>
    );
  }

  if (name === "trend") {
    return (
      <svg {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
        <path d="M15 7h4v4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

const environmentTabs = [
  {
    id: "private",
    label: "Private",
    icon: "home",
    intro:
      "Perfect for homes, villas, personal parking bays, and low-demand everyday charging.",
    cardTitle: "Best for homes and personal parking",
    points: ["Compact footprint", "Easy user flow", "Smart monitoring"],
    accordions: [
      [
        "Smart Software Included",
        "Track usage, monitor charging sessions, and manage access from one simple dashboard or app.",
        "phone",
      ],
      [
        "Simple for EV Users",
        "Plug in, charge easily, and keep the experience straightforward for daily use.",
        "user",
      ],
      [
        "Built-in Safety",
        "Designed with essential charging protections for reliable everyday operation.",
        "shield",
      ],
      [
        "Free Installation",
        "Standard installation support makes getting started easier and more cost-effective.",
        "wrench",
      ],
      [
        "Add More Chargers Later",
        "Start with one charger today and expand your setup later as your needs grow.",
        "plus",
      ],
    ],
  },
  {
    id: "shared",
    label: "Shared",
    icon: "building",
    intro:
      "A practical option for apartments, offices, and controlled shared parking areas where multiple users need simple charging access.",
    cardTitle: "Best for shared parking spaces",
    points: ["Controlled access", "Session visibility", "Easy expansion"],
    accordions: [
      [
        "Automated Payment via Zvolta App",
        "Users pay cashlessly through the Zvolta app. No cash handling required.",
        "wallet",
      ],
      [
        "Smart Software Included",
        "Monitor charging activity, track usage, and manage multiple users from one connected system.",
        "phone",
      ],
      [
        "Simple for EV Users",
        "Users can charge without a complicated process, making it easier for residents, staff, or regular users.",
        "user",
      ],
      [
        "Built-in Safety",
        "Built-in protections help support safe charging in shared environments with regular daily use.",
        "shield",
      ],
      [
        "Free Installation",
        "Our team helps review the location and set up the charger in the most practical parking spot.",
        "wrench",
      ],
      [
        "Add More Chargers Later",
        "Begin with one charger and add more units as more users or parking bays require charging.",
        "plus",
      ],
    ],
  },
  {
    id: "public",
    label: "Public",
    icon: "globe",
    intro:
      "Suitable for low-demand public-facing spaces such as visitor parking, retail locations, small offices, and controlled access areas.",
    cardTitle: "Best for visitor and light public use",
    points: ["Simple access", "Monitored usage", "Supported setup"],
    accordions: [
      [
        "Automated Payment via Zvolta App",
        "Users pay cashlessly through the Zvolta app. No cash handling required.",
        "wallet",
      ],
      [
        "Smart Software Included",
        "Keep visibility on charging sessions, usage patterns, and charger activity without needing a complex system.",
        "phone",
      ],
      [
        "Simple for EV Users",
        "A clean and easy charging experience for visitors, customers, or staff who need quick everyday charging.",
        "user",
      ],
      [
        "Built-in Safety",
        "Essential protections are included to support reliable use in public-facing locations.",
        "shield",
      ],
      [
        "Free Installation",
        "Standard installation support helps make the setup process simple from site review to final installation.",
        "wrench",
      ],
      [
        "Add More Chargers Later",
        "Scale the setup over time by adding more chargers as demand increases.",
        "plus",
      ],
    ],
  },
];

const hostRotatingWords = ["price.", "timings.", "access.", "earnings."];

const hostWhoBenefits = [
  { icon: "shield", title: "More value", copy: "for your visitors" },
  { icon: "briefcase", title: "Extra income", copy: "for your business" },
  { icon: "shield", title: "Future ready", copy: "service" },
];

const chargerPartnerLogos = [
  {
    src: "https://res.cloudinary.com/diywraupt/image/upload/v1780396433/9561e733-b02e-44dd-a261-d235b7198edf_removalai_preview_kzxmhz.png",
    alt: "Revoo",
  },
  {
    src: "https://res.cloudinary.com/diywraupt/image/upload/v1780396432/b59ddd95-b377-4010-98d7-cf3759aae7cc_removalai_preview_caazbg.png",
    alt: "Vlektra",
  },
  {
    src: "https://workhall.co/_next/image?url=%2Fimages%2Fwh.png&w=128&q=100",
    alt: "Workhall",
  },
  {
    src: "https://res.cloudinary.com/diywraupt/image/upload/v1780396432/Ecodost-01_mg0utk.svg",
    alt: "Ecodost",
  },
  { src: "/img/Black-logo.webp", alt: "Sazgar", invert: true },
];

const chargerStories = [
  {
    title: "Coworking spaces using chargers as a USP",
    category: "Workspace",
    image: "/img/Host/03.png",
  },
  {
    title: "Restaurants increasing customer time",
    category: "Hospitality",
    image: "/img/Host/Host.png",
  },
  {
    title: "Businesses earning passive income",
    category: "Revenue",
    image: "/img/Host/02.png",
  },
  {
    title: "Brands working toward sustainability goals",
    category: "ESG",
    image: "/img/clean-volta.jpg",
  },
];

function PrimaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#16a34a]/45 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function SecondaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`charger-section ${className}`}>
      <div className="charger-container">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#16a34a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
        {title}
      </h2>
      {copy ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-4 max-w-2xl text-base leading-7 text-[#A1A1A1]`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function DataTable({ rows, headers = ["Detail", "Value"] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111]">
      <div
        className="grid border-b border-[#1F1F1F] bg-[#0B0B0B] text-xs font-semibold uppercase text-[#A1A1A1]"
        style={{
          gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
        }}
      >
        {headers.map((header) => (
          <div key={header} className="p-4">
            {header}
          </div>
        ))}
      </div>
      <div>
        {rows.map((row) => (
          <div
            key={row.join(":")}
            className="grid border-b border-[#1F1F1F] last:border-b-0"
            style={{
              gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
            }}
          >
            {row.map((cell, index) => (
              <div
                key={`${row[0]}-${index}`}
                className={`p-4 text-sm leading-6 ${index === 0 ? "font-semibold text-white" : "text-[#A1A1A1]"}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChargerVisual({ power }) {
  return (
    <div className="relative rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
      <div className="mx-auto h-56 w-36 rounded-xl border border-[#2A2A2A] bg-[#141414] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto h-4 w-20 rounded-sm bg-[#242424]" />
        <div className="mx-auto mt-7 grid h-20 w-16 place-items-center rounded-lg border border-[#2A2A2A] bg-[#0B0B0B]">
          <Icon name="bolt" className="h-8 w-8 text-[#16a34a]" />
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#303030]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#303030]" />
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5 text-center">
        <p className="text-xs font-semibold uppercase text-[#16a34a]">
          Smart AC charger
        </p>
        <p className="mt-2 text-[40px] font-semibold leading-none text-white">
          {power}
        </p>
        <p className="mt-3 text-sm text-[#A1A1A1]">
          App, dashboard, payments, and safety included
        </p>
      </div>
    </div>
  );
}

function EnvironmentSection({ spec }) {
  const [activeTabId, setActiveTabId] = useState(environmentTabs[0].id);
  const [openIndex, setOpenIndex] = useState(0);
  const [activeExpandPanel, setActiveExpandPanel] = useState(null);
  const activeTab =
    environmentTabs.find((tab) => tab.id === activeTabId) ?? environmentTabs[0];
  const audienceCards = getChargerAudienceCards(spec);
  const showAudienceCards = activeExpandPanel === "audience";
  const showUseCases = activeExpandPanel === "use-cases";

  return (
    <Section className="charger-environments-section">
      <div className="charger-environments-intro">
        <p className="charger-eyebrow">Built for every environment</p>
        <h2>One charger. Multiple environments.</h2>
        <p>
          Whether you are charging at home, in a shared parking area, or in a
          public-facing space, the {spec.power} charger stays simple, safe, and ready to
          grow with you.
        </p>
      </div>

      <div className="charger-env-tabs" role="tablist" aria-label="Use types">
        {environmentTabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            role="tab"
            aria-selected={activeTab.id === tab.id}
            className={`charger-env-tab ${
              activeTab.id === tab.id ? "is-active" : ""
            }`}
            onClick={() => {
              setActiveTabId(tab.id);
              setOpenIndex(0);
            }}
          >
            <Icon name={tab.icon} className="h-6 w-6" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="charger-env-panel">
        <div className="charger-env-left">
          <p className="charger-env-copy">{activeTab.intro}</p>

          <div className="charger-env-accordion">
            {activeTab.accordions.map(([title, copy, icon], index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={`${activeTab.id}-${title}`}
                  className={`charger-env-accordion-item ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="charger-env-accordion-button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="charger-env-accordion-icon">
                      <Icon name={icon} className="h-6 w-6" />
                    </span>
                    <span>{title}</span>
                    <Icon name="chevron" className="h-5 w-5" />
                  </button>
                  <div className="charger-env-accordion-body">
                    <p>{copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="charger-env-card">
          <span className="charger-env-card-icon">
            <Icon name={activeTab.icon} className="h-7 w-7" />
          </span>
          <h3>{activeTab.cardTitle}</h3>
          <span className="charger-env-card-line" />
          <div className="charger-env-point-list">
            {activeTab.points.map((point) => (
              <div className="charger-env-point" key={point}>
                <Icon name="check" className="h-4 w-4" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="charger-expand-actions">
        <button
          type="button"
          className={`charger-expand-button ${
            showAudienceCards ? "is-active" : ""
          }`}
          aria-expanded={showAudienceCards}
          onClick={() =>
            setActiveExpandPanel((prev) =>
              prev === "audience" ? null : "audience"
            )
          }
        >
          Who should use this charger?
          <Icon name="arrow" className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={`charger-expand-button ${showUseCases ? "is-active" : ""}`}
          aria-expanded={showUseCases}
          onClick={() =>
            setActiveExpandPanel((prev) =>
              prev === "use-cases" ? null : "use-cases"
            )
          }
        >
          View use cases
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showAudienceCards ? (
          <ShutterExpand key="charger-audience">
            <div className="charger-expand-section">
              <p className="three-eyebrow">Who should use this charger?</p>
              <h2 className="three-section-title">
                Perfect for everyday charging needs
              </h2>
              <div className="three-audience-grid">
                {audienceCards.map(([icon, title, copy]) => (
                  <article
                    className="three-info-card three-audience-card"
                    key={title}
                  >
                    <span className="three-card-icon">
                      <Icon name={icon} className="h-9 w-9" />
                    </span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {showUseCases ? (
          <ShutterExpand key="charger-use-cases">
            <div className="charger-expand-section charger-env-use-cases">
              <div className="charger-host-stories-panel">
                <p className="mb-2 text-xs font-semibold uppercase text-[#16a34a]">
                  Real stories
                </p>
                <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[36px]">
                  How hosts use charging to create site value.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
                  Practical examples from workspaces, restaurants, and
                  sustainability-led businesses.
                </p>
                <div className="host-stories mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
                  {chargerStories.map((story, index) => (
                    <Reveal key={story.title} delay={index * 0.05}>
                      <article className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[390px]">
                        <img
                          src={story.image}
                          alt=""
                          className="h-56 w-full object-cover"
                        />
                        <div className="p-6">
                          <p className="text-xs font-semibold uppercase text-[#16a34a]">
                            {story.category}
                          </p>
                          <h3 className="mt-4 text-[24px] font-semibold leading-tight text-white">
                            {story.title}
                          </h3>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
                <SmartLink
                  href="/stories"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                >
                  Explore stories
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </div>
            </div>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

const threeKwQuickDetails = [
  ["bolt", "Charging Power", "3kW"],
  ["home", "Best For", "Homes, EV bikes, and smaller EVs"],
  ["wrench", "Installation", "Compact wall-mounted setup"],
  ["wifi", "Connectivity", "Smart software included"],
];

const threeKwHowFeatures = [
  ["bolt", "Track usage", "Real-time charging and session history"],
  ["wrench", "Set pricing", "Update your price anytime"],
  ["access", "Open / close access", "Control availability remotely"],
  ["map", "No staff needed", "Everything runs automatically"],
];

const threeKwHowStrip = [
  ["wallet", "Payments made simple"],
  ["wallet", "Cashless"],
  ["bolt", "Automatic"],
];

const threeKwAudienceCards = [
  ["home", "Homeowners", "Ideal for overnight daily charging at home."],
  [
    "building",
    "Apartment / Shared Parking Users",
    "Great for low-footfall shared spaces.",
  ],
  [
    "briefcase",
    "Small Businesses",
    "Works well for staff, visitors, or light commercial use.",
  ],
];

const chargerHeroImages = {
  "3kW":
    "https://res.cloudinary.com/diywraupt/image/upload/v1781277709/3KW_f8dgww.png",
  "7kW":
    "https://res.cloudinary.com/diywraupt/image/upload/v1781277794/7KW_22KW_net99f.png",
  "22kW":
    "https://res.cloudinary.com/diywraupt/image/upload/v1781277794/7KW_22KW_net99f.png",
};

const chargerAudienceIcons = ["home", "building", "briefcase"];

function getSpecDetail(spec, label) {
  return spec.quickDetails.find(([key]) => key === label)?.[1];
}

function getChargerHeroBenefits(spec) {
  const bestFor = getSpecDetail(spec, "Best for") ?? spec.bestFor?.[0];
  const powerSupport =
    getSpecDetail(spec, "Power support") ??
    (spec.power === "22kW" ? "Site assessment required" : "Single phase");

  return [
    ["shield", "Built-in Safety", "Protection included as standard"],
    ["wallet", "Automated Payments", "Cashless payments via Zvolta platform"],
    ["wifi", "Smart Software", "App and dashboard included"],
    ["bolt", `${spec.power} Charging`, "Smart AC charging for daily use"],
    ["droplet", "Protected Hardware", "Built for local site conditions"],
    ["phase", powerSupport, bestFor],
  ];
}

function getChargerQuickDetails(spec) {
  return [
    ["bolt", "Charging Power", spec.power],
    ["home", "Best For", getSpecDetail(spec, "Best for") ?? spec.bestFor[0]],
    [
      "wrench",
      "Installation",
      getSpecDetail(spec, "Installation") ?? "Free standard installation",
    ],
    [
      "wifi",
      "Connectivity",
      getSpecDetail(spec, "Software") ?? "Smart software included",
    ],
  ];
}

function getChargerAudienceCards(spec) {
  if (spec.power === "3kW") {
    return threeKwAudienceCards;
  }

  return spec.goodFor.slice(0, 3).map(([title, copy], index) => [
    chargerAudienceIcons[index] ?? "check",
    title,
    copy,
  ]);
}

const decisionComparisonRows = [
  [
    "wrench",
    "Installation",
    "Local support included",
    "Often handled separately",
  ],
  ["wifi", "Software", "Smart software included", "Varies by supplier"],
  [
    "wallet",
    "Payment Platform",
    "Included with Zvolta Platform",
    "Not Included",
  ],
  [
    "headset",
    "Support",
    "Local guidance and follow-up",
    "Limited after-sales clarity",
  ],
  [
    "shield",
    "Safety",
    "Built for reliable everyday use",
    "Depends on source and setup",
  ],
  ["trend", "Expansion", "Can grow later", "May be harder to scale"],
];

const decisionPricingItems = [
  "Charger hardware",
  "Smart software",
  "Installation support",
  "Setup guidance",
];

const decisionSpecs = [
  ["Capacity - Input voltage", "1 Phase, 230V AC"],
  ["Capacity - Frequency", "50 Hz"],
  ["Capacity - Rated Output Power/current", "3.3KVA/16A"],
  ["Output - AC output voltage", "1 phase, 230V AC"],
  ["Output - Frequency", "50 Hz"],
  ["Output - Socket", "UNIV (A,B,C,D,F,G)"],
  ["Product Dimensions - Length", "380mm"],
  ["Product Dimensions - Height", "260mm"],
  ["Product Dimensions - Depth", "130mm"],
  ["Protection & Security - Ingress Protection", "IP54"],
  ["Protection & Security - Tempered Detection", "Yes"],
  ["Protection & Security - Vandalism Protection", "Yes"],
  ["Protection & Security - Overload Protection", "Yes"],
  ["Protection & Security - RCD (30 A) AC", "Yes"],
  ["Protection & Security - Over voltage Protection", "Yes"],
  ["Connectivity - Wifi", "Yes"],
  ["Connectivity - GSM", "Yes"],
  ["Connectivity - LED Indication", "Yes"],
  ["Connectivity - LCD Display", "Yes"],
  ["Other - Schedulable and auto cut off", "Yes"],
  ["Other - Material", "MS"],
  ["Other - Authentication method", "Application"],
  ["Environmental Specifications - Operating temperature", "10°C to +60°C"],
  ["Environmental Specifications - Humidity", "upto 95%"],
  ["Power Connection - Red", "Live"],
  ["Power Connection - Blue", "Neutral"],
  ["Power Connection - Yellow/Green", "Earth/Ground"],
];

const decisionSetupSteps = [
  [
    "file",
    "Share Your Requirement",
    "Tell us your needs and charging preferences.",
  ],
  [
    "shield",
    "Site Review & Recommendation",
    "We analyze your site and provide the best solution for you.",
  ],
  [
    "wrench",
    "Installation & Setup",
    "Our team installs and configures everything on-site.",
  ],
  [
    "bolt",
    "Start Charging",
    "Your charger is ready to use. Plug in and power up!",
  ],
];

const threeKwFaqs = [
  [
    "Who is this charger best for?",
    "It is best for homes, EV bikes, smaller EVs, and low-demand everyday charging needs.",
  ],
  [
    "Is smart software included?",
    "Yes. Smart monitoring, session visibility, and app or dashboard access are included.",
  ],
  [
    "Can I install more chargers later?",
    "Yes. You can start with one charger and add more units as demand grows.",
  ],
  [
    "Is installation included?",
    "Standard installation support is included. Extra site work such as earthing applies only if required.",
  ],
];

const threeHeroBenefits = [
  ["shield", "Built-in Safety", "Overload & short circuit protection"],
  ["wallet", "Automated Payments", "Cashless payments via Zvolta platform"],
  ["leaf", "Energy Efficient", "Optimized for low power consumption"],
  [
    "bolt",
    "Universal Charging Point",
    "Charge two-wheeler, three-wheeler and four-wheeler",
  ],
  [
    "droplet",
    "IP54 Water and Splash Proof",
    "Protected against water & splashes",
  ],
  ["phase", "Single Phase", "Standard single-phase power supply"],
];

function ThreeKwHero({ spec }) {
  const heroBenefits = getChargerHeroBenefits(spec);
  const heroImage = chargerHeroImages[spec.power] ?? chargerHeroImages["3kW"];

  return (
    <section className="three-hero">
      <div className="three-container three-hero-grid">
        <div className="three-hero-copy">
          <p className="three-pill">
            <Icon name="bolt" className="h-4 w-4" />
            {spec.power} Power. Smart Charger.
          </p>
          <h1>{spec.power} Smart EV Charger</h1>
          <p className="three-hero-text">{spec.heroBody}</p>
          <div className="three-hero-made">
            <span className="three-hero-made-chip">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <span className="three-hero-made-text">
              <strong>100% Made in Pakistan</strong>
              <span>Engineered &amp; built locally</span>
            </span>
          </div>
          <div className="three-hero-actions">
            <PrimaryButton className="three-primary">
              <Icon name="calendar" className="h-5 w-5" />
              Book Free Installation
            </PrimaryButton>
            <SecondaryButton className="three-secondary">
              <Icon name="chat" className="h-5 w-5" />
              Talk to an Expert
            </SecondaryButton>
          </div>
        </div>
        <div className="three-product-card">
          <img
            src={heroImage}
            alt={`${spec.power} smart EV charger`}
          />
        </div>
      </div>
      <div className="three-container three-hero-features">
        <div className="three-hero-benefits">
          {heroBenefits.map(([icon, title, copy]) => (
            <div className="three-hero-benefit" key={title}>
              <Icon name={icon} className="h-6 w-6" />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreeKwQuickSection({ spec }) {
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

function DecisionSection({ spec }) {
  const decisionSpecRows = spec.technicalSpecs ?? decisionSpecs;
  const specsMiddle = Math.ceil(decisionSpecRows.length / 2);
  const specColumns = [
    decisionSpecRows.slice(0, specsMiddle),
    decisionSpecRows.slice(specsMiddle),
  ];
  const priceRow = spec.pricing?.[0];
  const priceValue = priceRow?.[1] ?? "Contact Zvolta";
  const pricingItems = (spec.pricing ?? [])
    .slice(1, 5)
    .map(([item]) => item);

  return (
    <section className="three-section three-decision-section">
      <div className="three-container">
        <p className="three-eyebrow">Compare, Plan, and Start</p>
        <h2 className="three-large-title">
          Everything you need before you decide
        </h2>
        <p className="three-section-copy">
          Compare the value, review the specs, understand the setup, and see how
          the {spec.power} charger fits your space.
        </p>

        <div className="three-decision-grid">
          <article className="three-panel three-compare-panel">
            <h3>Comparison with imported chargers</h3>
            <div className="three-compare-table">
              <div />
              <strong>This {spec.power} charger</strong>
              <strong>Typical imported chargers</strong>
              {decisionComparisonRows.map(
                ([icon, label, current, imported]) => (
                  <Fragment key={label}>
                    <div className="three-compare-label">
                      <Icon name={icon} className="h-8 w-8" />
                      <span>{label}</span>
                    </div>
                    <p className="is-green">{current}</p>
                    <p>{imported}</p>
                  </Fragment>
                ),
              )}
            </div>
          </article>

          <article className="three-panel three-pricing-panel">
            <h3>Pricing</h3>
            <div className="three-price">
              {priceValue.startsWith("PKR") ? <span>PKR</span> : null}
              <strong>{priceValue.replace(/^PKR\s*/i, "")}</strong>
            </div>
            <p>
              Includes charger hardware, smart software, and standard
              installation support.
            </p>
            <div className="three-check-list">
              {(pricingItems.length ? pricingItems : decisionPricingItems).map((item) => (
                <div key={item}>
                  <Icon name="check" className="h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <PrimaryButton className="three-primary three-full-button">
              Request a Quote
            </PrimaryButton>
          </article>

          <article className="three-panel three-spec-panel">
            <div className="three-panel-title-row three-spec-title-row">
              <Icon name="file" className="h-9 w-9" />
              <h3>Technical Specs</h3>
            </div>

            <div className="three-spec-columns">
              {specColumns.map((column, columnIndex) => (
                <div
                  className="three-spec-list"
                  key={`spec-column-${columnIndex}`}
                >
                  {column.map(([label, value], index) => (
                    <div
                      key={label}
                      className={
                        columnIndex === 0 && index === 0 ? "is-highlight" : ""
                      }
                    >
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>

          <article className="three-panel three-setup-panel">
            <div className="three-panel-title-row three-setup-title-row">
              <span />
              <Icon name="gear" className="h-9 w-9" />
              <h3>How Setup Works</h3>
              <span />
            </div>
            <div className="three-setup-list">
              {decisionSetupSteps.map(([icon, title, copy], index) => (
                <div className="three-setup-step" key={title}>
                  <span className="three-step-number">{index + 1}</span>
                  <span className="three-setup-icon">
                    <Icon name={icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="three-setup-tagline">
              <span>From intent to earning in just 7 days.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function UseCasesRecommendationFaq({ spec }) {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = spec.faqs?.length ? spec.faqs.slice(0, 8) : threeKwFaqs;

  return (
    <>
      <section className="three-section">
        <div className="three-container">
          <p className="three-eyebrow">FAQs</p>
          <h2 className="three-section-title">Frequently asked questions</h2>
          <div className="three-faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className={`three-faq-item ${isOpen ? "is-open" : ""}`}
                  key={question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>
                      {isOpen ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </span>
                    <strong>{question}</strong>
                    <Icon name="chevron" className="h-5 w-5" />
                  </button>
                  <div>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* <div className="three-final-cta">
            <img
              src="https://res.cloudinary.com/diywraupt/image/upload/v1780392810/7Watt22W_zdchgq.png"
              alt="3kW smart charger"
            />
            <div>
              <h2>Start with a 3kW smart charger.</h2>
              <p>Simple to install. Easy to manage. Ready when you are.</p>
              <div className="three-hero-actions">
                <PrimaryButton className="three-primary">
                  <Icon name="calendar" className="h-5 w-5" />
                  Get Started
                </PrimaryButton>
                <SecondaryButton className="three-secondary">
                  <Icon name="chat" className="h-5 w-5" />
                  Request a Callback
                </SecondaryButton>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ShutterExpand({ children }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      style={{ overflow: "hidden", transformOrigin: "top center" }}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        height: {
          duration: reduceMotion ? 0.01 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: { duration: reduceMotion ? 0.01 : 0.18 },
      }}
    >
      <motion.div
        initial={{ y: reduceMotion ? 0 : -18 }}
        animate={{ y: 0 }}
        exit={{ y: reduceMotion ? 0 : -12 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ThreeKwHostWhoBlock({
  showHostingSections,
  onShowHostingSections,
  onHideHostingSections,
}) {
  return (
    <>
      <div className="host-who-section-wrap">
        <Reveal className="host-who-strip">
          <h3 className="host-who-strip-title">
            You set the
            <br />
            <RotatingText
              texts={hostRotatingWords}
              mainClassName="host-rotating-text"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="host-rotating-text-split"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </h3>
          <span className="host-who-divider" />
          {hostWhoBenefits.map((item) => (
            <div className="host-who-benefit" key={item.title}>
              <span className="host-who-benefit-icon">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </span>
            </div>
          ))}
          <div className="host-who-actions">
            <PrimaryButton href="/contact-us" className="host-who-primary">
              Get started
            </PrimaryButton>
            {!showHostingSections ? (
              <button
                type="button"
                className="host-expand-button"
                onClick={onShowHostingSections}
              >
                View host stories
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </Reveal>
      </div>

      <AnimatePresence initial={false}>
        {showHostingSections ? (
          <ShutterExpand key="hosting-sections">
            <section className="host-partners-section">
              <button
                type="button"
                className="host-collapse-button"
                aria-label="Collapse host stories"
                onClick={onHideHostingSections}
              >
                <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
              <span className="host-partners-bolt" aria-hidden="true" />
              <span className="host-partners-bolt-soft" aria-hidden="true" />
              <div className="host-stories-container">
                <Reveal>
                  <p className="host-partners-eyebrow">Already hosting</p>
                  <h2 className="host-partners-title">
                    Businesses use Zvolta chargers to earn and support
                    sustainability<span>.</span>
                  </h2>
                  <p className="host-partners-copy">
                    Partner sites get app visibility, cleaner customer service,
                    and a practical ESG action.
                  </p>
                </Reveal>
                <Reveal className="host-partner-logo-grid" delay={0.08}>
                  {chargerPartnerLogos.map((logo) => (
                    <div className="host-partner-logo-card" key={logo.alt}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={logo.invert ? "is-inverted" : ""}
                      />
                    </div>
                  ))}
                </Reveal>
                <Reveal className="host-partners-action">
                  <SmartLink
                    href="/host"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                  >
                    Explore hosting
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </Reveal>
              </div>
            </section>

            <section className="host-stories-section">
              <div className="host-stories-container">
                <p className="mb-2 text-xs font-semibold uppercase text-[#16a34a]">
                  Real stories
                </p>
                <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[36px]">
                  How hosts use charging to create site value.
                </h2>
                <div className="host-stories mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
                  {chargerStories.map((story, index) => (
                    <Reveal key={story.title} delay={index * 0.05}>
                      <article className="w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[370px]">
                        <img
                          src={story.image}
                          alt=""
                          className="h-52 w-full object-cover"
                        />
                        <div className="p-6">
                          <p className="text-xs font-semibold uppercase text-[#16a34a]">
                            {story.category}
                          </p>
                          <h3 className="mt-3 text-[22px] font-semibold leading-tight text-white">
                            {story.title}
                          </h3>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
                <SmartLink
                  href="/host"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                >
                  Explore stories
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </div>
            </section>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ThreeKwChargerPage({ spec }) {
  const [showHostingSections, setShowHostingSections] = useState(false);
  return (
    <>
      <style data-page-style={`charger-spec:${spec.pageId}-redesign`}>{`
        .three-page {
          background: #050606;
          color: #FFFFFF;
          max-width: 100vw;
          overflow-x: hidden;
          letter-spacing: 0;
        }

        .three-container,
        .charger-environments-section .charger-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .three-page .charger-section {
          padding: 116px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .three-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          background:
            radial-gradient(circle at 68% 36%, rgba(22, 163, 74, 0.12), transparent 28%),
            linear-gradient(180deg, #020303, #070808 78%);
          padding: 118px 0 46px;
        }

        .three-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
          align-items: center;
          gap: 72px;
        }

        .three-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(7, 8, 9, 0.7);
          padding: 9px 13px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .three-hero h1 {
          margin-top: 42px;
          max-width: 560px;
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.02;
        }

        .three-hero-text,
        .three-section-copy {
          max-width: 620px;
          color: #C7C7C7;
          font-size: 22px;
          line-height: 1.45;
        }

        .three-hero-text {
          margin-top: 28px;
        }

        .three-hero-made {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 26px;
          padding: 10px 20px 10px 12px;
          border: 1px solid rgba(22, 163, 74, 0.35);
          border-radius: 999px;
          background:
            radial-gradient(circle at 0% 50%, rgba(22, 163, 74, 0.18), transparent 60%),
            rgba(7, 10, 9, 0.7);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 12px 34px rgba(22, 163, 74, 0.12);
        }

        .three-hero-made-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          width: 38px;
          flex-shrink: 0;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.16);
          color: #16a34a;
          filter: drop-shadow(0 0 12px rgba(22, 163, 74, 0.4));
        }

        .three-hero-made-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .three-hero-made-text strong {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.01em;
        }

        .three-hero-made-text > span {
          color: #16a34a;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .three-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 42px;
        }

        .three-primary,
        .three-secondary {
          min-height: 44px;
          border-radius: 10px;
          padding-inline: 18px;
          font-size: 14px;
        }

        .three-primary svg:first-child,
        .three-secondary svg:first-child {
          order: -1;
        }

        .three-hero-features {
          margin-top: 64px;
        }

        .three-hero-benefits {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .three-hero-benefit {
          display: grid;
          min-height: 112px;
          grid-template-columns: 58px minmax(0, 1fr);
          align-items: center;
          gap: 14px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          background:
            radial-gradient(circle at 15% 50%, rgba(22, 163, 74, 0.12), transparent 28%),
            linear-gradient(145deg, rgba(13, 17, 17, 0.94), rgba(5, 6, 6, 0.96));
          padding: 18px;
          color: #16a34a;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 18px 54px rgba(0, 0, 0, 0.24);
        }

        .three-hero-benefit > svg {
          height: 54px;
          width: 54px;
          border: 1px solid rgba(22, 163, 74, 0.28);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.06);
          padding: 15px;
          color: #16a34a;
          filter: drop-shadow(0 0 16px rgba(22, 163, 74, 0.28));
        }

        .three-hero-benefit h3 {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.12;
        }

        .three-hero-benefit p {
          margin-top: 8px;
          color: #C7C7C7;
          font-size: 14px;
          line-height: 1.35;
        }

        .three-product-card {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .three-product-card img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .three-section {
          padding: 74px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background:
            radial-gradient(circle at 82% 18%, rgba(22, 163, 74, 0.04), transparent 24%),
            #070808;
        }

        .three-eyebrow {
          color: #16a34a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .three-section-title {
          margin-top: 18px;
          color: #FFFFFF;
          font-size: clamp(30px, 4vw, 38px);
          font-weight: 900;
          line-height: 1.12;
        }

        .three-large-title {
          margin-top: 18px;
          max-width: 930px;
          font-size: clamp(42px, 5vw, 58px);
          font-weight: 900;
          line-height: 1.08;
        }

        .three-section-copy {
          margin-top: 18px;
          font-size: 21px;
        }

        .three-quick-grid {
          display: grid;
          margin-top: 32px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .three-audience-grid {
          display: grid;
          margin-top: 30px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .three-info-card,
        .three-panel,
        .three-recommendation-card,
        .three-final-cta {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(20, 22, 23, 0.92), rgba(7, 8, 9, 0.96));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .three-info-card {
          min-height: 268px;
          padding: 32px;
        }

        .three-info-card::after {
          content: '';
          position: absolute;
          left: 32px;
          bottom: 0;
          height: 3px;
          width: 86px;
          background: #16a34a;
        }

        .three-card-icon {
          display: grid;
          height: 70px;
          width: 70px;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          color: #16a34a;
        }

        .three-info-card h3 {
          margin-top: 32px;
          font-size: 16px;
          font-weight: 800;
        }

        .three-info-card p {
          margin-top: 14px;
          color: #D6D6D6;
          font-size: 25px;
          line-height: 1.28;
        }

        .three-info-card:first-child p {
          color: #16a34a;
          font-size: 36px;
          font-weight: 900;
        }

        .three-subsection {
          margin-top: 44px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .three-audience-card p,
        .three-audience-card:first-child p {
          color: #D6D6D6;
          font-size: 23px;
          font-weight: 500;
        }

        .three-how-panel {
          position: relative;
          display: grid;
          height: 800px;
          min-height: 800px;
          margin-top: 46px;
          grid-template-columns: minmax(280px, 0.36fr) minmax(0, 0.64fr);
          gap: 34px;
          align-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          background:
            radial-gradient(circle at 66% 62%, rgba(22, 163, 74, 0.12), transparent 26%),
            linear-gradient(90deg, #050505 0%, #050505 38%, #080A09 100%);
          padding: 88px 24px;
          isolation: isolate;
        }

        .three-how-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.92) 31%, rgba(0, 0, 0, 0.34) 72%, rgba(0, 0, 0, 0.72) 100%),
            radial-gradient(circle at 87% 82%, rgba(22, 163, 74, 0.13), transparent 24%);
        }

        .three-how-copy {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 430px;
          min-width: 0;
        }

        .three-how-kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .three-how-kicker span {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.82);
          border-radius: 6px;
          background: rgba(22, 163, 74, 0.08);
          box-shadow: inset 0 0 20px rgba(22, 163, 74, 0.08);
        }

        .three-how-kicker strong {
          font: inherit;
          letter-spacing: 0;
        }

        .three-how-copy h2 {
          margin-top: 36px;
          max-width: 430px;
          color: #FFFFFF;
          font-size: 58px;
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: 0;
        }

        .three-how-copy h2 span {
          color: #16a34a;
        }

        .three-how-copy > p {
          margin-top: 18px;
          max-width: 330px;
          color: #a1a1aa;
          font-size: 21px;
          line-height: 1.42;
        }

        .three-how-feature-grid {
          display: grid;
          max-width: 430px;
          margin-top: 36px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px 22px;
        }

        .three-how-feature {
          display: grid;
          min-width: 0;
          grid-template-columns: 50px 1fr;
          align-items: center;
          gap: 12px;
        }

        .three-how-feature > span {
          display: grid;
          height: 50px;
          width: 50px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 5px;
          background: rgba(18, 18, 18, 0.8);
          color: #16a34a;
          box-shadow: inset 0 0 24px rgba(22, 163, 74, 0.05);
        }

        .three-how-feature h3 {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.1;
        }

        .three-how-feature p {
          margin-top: 5px;
          color: #a1a1aa;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.25;
        }

        .three-how-visual {
          position: relative;
          z-index: 2;
          min-height: 450px;
        }

        .three-how-visual img {
          position: absolute;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 22px 38px rgba(0, 0, 0, 0.45));
          user-select: none;
          pointer-events: none;
        }

        .three-how-phone {
          left: 2%;
          bottom: 56px;
          z-index: 2;
          width: 24%;
          max-height: 390px;
          object-position: center bottom;
        }

        .three-how-laptop {
          left: 18%;
          top: 7%;
          z-index: 1;
          width: 68%;
          max-height: 320px;
          object-position: center;
        }

        .three-how-payment {
          right: 4%;
          bottom: 46px;
          z-index: 3;
          width: 18%;
          max-height: 390px;
          object-position: center bottom;
        }

        .three-how-strip {
          position: absolute;
          left: 35%;
          right: 2.5%;
          bottom: 88px;
          z-index: 4;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(18, 18, 18, 0.76);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(16px);
        }

        .three-how-strip div {
          position: relative;
          display: flex;
          min-height: 62px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 13px 18px;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
        }

        .three-how-strip svg {
          color: #16a34a;
        }

        .three-how-divider {
          display: none;
        }

        .three-how-strip div + div::before {
          content: '';
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .charger-eyebrow {
          margin-bottom: 18px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .charger-environments-section {
          position: relative;
          overflow: hidden;
          background: #050606;
        }

        .charger-environments-intro {
          max-width: 760px;
        }

        .charger-environments-intro h2 {
          color: #FFFFFF;
          font-size: clamp(32px, 3.5vw, 42px);
          font-weight: 900;
          line-height: 1.08;
        }

        .charger-environments-intro p:not(.charger-eyebrow) {
          margin-top: 26px;
          color: #C7C7C7;
          font-size: 21px;
          line-height: 1.45;
        }

        .charger-env-use-cases {
          margin-top: 64px;
        }

        .charger-expand-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 40px;
        }

        .charger-expand-button {
          display: inline-flex;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(22, 163, 74, 0.55);
          border-radius: 8px;
          background: rgba(22, 163, 74, 0.08);
          padding: 0 24px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition:
            background 0.24s ease,
            border-color 0.24s ease,
            transform 0.24s ease;
        }

        .charger-expand-button:hover {
          border-color: rgba(22, 163, 74, 0.85);
          background: rgba(22, 163, 74, 0.14);
          transform: translateY(-1px);
        }

        .charger-expand-button.is-active {
          border-color: rgba(22, 163, 74, 0.95);
          background: rgba(22, 163, 74, 0.2);
          color: #16a34a;
          box-shadow:
            0 0 0 1px rgba(22, 163, 74, 0.16),
            0 18px 42px rgba(22, 163, 74, 0.14);
        }

        .charger-expand-button.is-active svg {
          transform: rotate(90deg);
        }

        .charger-expand-section {
          position: relative;
          margin-top: 30px;
          padding-top: 12px;
        }

        .charger-expand-section.charger-env-use-cases {
          margin-top: 30px;
        }

        .charger-expand-section .three-section-title {
          max-width: 780px;
        }

        .charger-expand-section .three-audience-grid {
          margin-top: 34px;
        }

        .charger-collapse-button {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 6;
          display: grid;
          height: 46px;
          width: 46px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.5);
          border-radius: 999px;
          background: rgba(10, 12, 12, 0.74);
          color: #16a34a;
          cursor: pointer;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(12px);
          transition:
            background 0.24s ease,
            transform 0.24s ease;
        }

        .charger-collapse-button:hover {
          background: rgba(22, 163, 74, 0.12);
          transform: translateY(-1px);
        }

        .charger-env-tabs {
          display: grid;
          margin-top: 58px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .charger-env-tab {
          display: inline-flex;
          min-height: 96px;
          align-items: center;
          justify-content: center;
          gap: 16px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(13, 14, 15, 0.84);
          color: #FFFFFF;
          font-size: 22px;
          font-weight: 900;
        }

        .charger-env-tab:first-child {
          border-top-left-radius: 14px;
        }

        .charger-env-tab:last-child {
          border-top-right-radius: 14px;
        }

        .charger-env-tab.is-active {
          border-color: rgba(22, 163, 74, 0.85);
          color: #16a34a;
          box-shadow: inset 0 -3px 0 #16a34a;
        }

        .charger-env-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
          gap: 48px;
          border: 1px solid rgba(22, 163, 74, 0.55);
          border-radius: 0 0 14px 14px;
          background: linear-gradient(135deg, rgba(8, 20, 17, 0.88), rgba(4, 5, 6, 0.96));
          padding: 48px;
        }

        .charger-env-copy {
          color: #FFFFFF;
          font-size: 23px;
          line-height: 1.35;
        }

        .charger-env-accordion {
          display: grid;
          margin-top: 34px;
          gap: 12px;
        }

        .charger-env-accordion-item {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: linear-gradient(145deg, rgba(18, 23, 24, 0.94), rgba(7, 8, 9, 0.96));
        }

        .charger-env-accordion-button {
          display: grid;
          width: 100%;
          grid-template-columns: 58px 1fr 24px;
          align-items: center;
          gap: 18px;
          padding: 18px 24px;
          color: #FFFFFF;
          text-align: left;
          font-size: 21px;
          font-weight: 900;
        }

        .charger-env-accordion-icon,
        .charger-env-card-icon {
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.05);
          color: #16a34a;
        }

        .charger-env-accordion-icon {
          height: 52px;
          width: 52px;
          border-radius: 999px;
        }

        .charger-env-accordion-button > svg {
          color: #16a34a;
          transition: transform 0.2s ease;
        }

        .charger-env-accordion-button[aria-expanded="true"] > svg {
          transform: rotate(180deg);
        }

        .charger-env-accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.22s ease;
        }

        .charger-env-accordion-item.is-open .charger-env-accordion-body {
          grid-template-rows: 1fr;
        }

        .charger-env-accordion-body p {
          min-height: 0;
          overflow: hidden;
          padding: 0 28px 0 100px;
          color: #C7C7C7;
          font-size: 19px;
          line-height: 1.55;
        }

        .charger-env-accordion-item.is-open .charger-env-accordion-body p {
          padding-bottom: 28px;
        }

        .charger-env-card {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          border: 1px solid rgba(22, 163, 74, 0.7);
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(10, 22, 19, 0.9), rgba(6, 7, 8, 0.94));
          padding: 38px;
        }

        .charger-env-card-icon {
          height: 64px;
          width: 64px;
          border-radius: 12px;
        }

        .charger-env-card h3 {
          margin-top: 28px;
          max-width: 370px;
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 900;
          line-height: 1.08;
        }

        .charger-env-card-line {
          display: block;
          margin-top: 28px;
          width: 48px;
          height: 3px;
          background: #16a34a;
        }

        .charger-env-point-list {
          display: grid;
          margin-top: 28px;
          gap: 18px;
        }

        .charger-env-point {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 17px;
        }

        .charger-env-point svg {
          height: 22px;
          width: 22px;
          border: 1px solid #16a34a;
          border-radius: 999px;
          padding: 3px;
          color: #16a34a;
        }

        .charger-env-card-visual {
          position: absolute;
          left: 50%;
          bottom: -8px;
          width: 56%;
          transform: translateX(-50%);
        }

        .charger-env-card-visual::before {
          content: '';
          display: block;
          aspect-ratio: 0.74;
          background: url('https://res.cloudinary.com/diywraupt/image/upload/v1780392810/7Watt22W_zdchgq.png') center / cover;
          border-radius: 20px;
        }

        .charger-env-mini-charger {
          display: none;
        }

        .three-decision-grid {
          display: grid;
          margin-top: 34px;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: 30px;
        }

        .three-panel {
          padding: 30px;
        }

        .three-panel h3 {
          font-size: 29px;
          font-weight: 900;
        }

        .three-spec-panel,
        .three-setup-panel {
          grid-column: 1 / -1;
        }

        .three-spec-panel {
          border-color: rgba(22, 163, 74, 0.78);
          background:
            radial-gradient(circle at 48% 12%, rgba(255, 255, 255, 0.04), transparent 24%),
            linear-gradient(145deg, rgba(15, 18, 19, 0.92), rgba(4, 5, 6, 0.96));
          padding: 46px 42px 34px;
        }

        .three-compare-panel {
          min-height: 640px;
        }

        .three-compare-table {
          display: grid;
          margin-top: 24px;
          grid-template-columns: 0.7fr 1fr 1fr;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
        }

        .three-compare-table > * {
          min-height: 86px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
          padding: 18px;
          color: #D6D6D6;
          font-size: 16px;
          line-height: 1.35;
        }

        .three-compare-table strong,
        .three-compare-table .is-green {
          color: #16a34a;
        }

        .three-compare-label {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #FFFFFF;
        }

        .three-compare-label svg,
        .three-panel-title-row svg {
          color: #16a34a;
        }

        .three-pricing-panel p {
          margin-top: 18px;
          color: #C7C7C7;
          font-size: 20px;
          line-height: 1.45;
        }

        .three-price {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: 22px;
          color: #FFFFFF;
        }

        .three-price span {
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0;
        }

        .three-price strong {
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0;
        }

        .three-check-list {
          display: grid;
          margin-top: 28px;
          gap: 18px;
        }

        .three-check-list div,
        .three-recommendation-card div {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #FFFFFF;
          font-size: 18px;
        }

        .three-check-list svg,
        .three-recommendation-card svg {
          height: 28px;
          width: 28px;
          border: 1px solid #16a34a;
          border-radius: 999px;
          padding: 5px;
          color: #16a34a;
        }

        .three-full-button {
          margin-top: 34px;
          width: 100%;
        }

        .three-panel-title-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .three-spec-title-row {
          align-items: flex-start;
        }

        .three-spec-title-row svg {
          height: 52px;
          width: 52px;
        }

        .three-spec-title-row h3 {
          position: relative;
          padding-bottom: 22px;
        }

        .three-spec-title-row h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 56px;
          background: #16a34a;
        }

        .three-spec-columns {
          display: grid;
          margin-top: 30px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 42px;
        }

        .three-spec-list {
          display: grid;
        }

        .three-spec-list div {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(140px, 0.85fr);
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
          color: #E8E8E8;
          font-size: 15px;
        }

        .three-spec-list span,
        .three-spec-list strong {
          min-height: 32px;
          padding: 7px 0;
        }

        .three-spec-list span {
          position: relative;
          padding-left: 22px;
        }

        .three-spec-list span::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 50%;
          height: 6px;
          width: 6px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: #16a34a;
        }

        .three-spec-list strong {
          border-left: 1px solid rgba(255, 255, 255, 0.13);
          padding-left: 30px;
          color: #FFFFFF;
          font-weight: 800;
        }

        .three-spec-list div.is-highlight strong {
          color: #16a34a;
          font-weight: 900;
        }

        .three-setup-panel {
          padding: 30px 38px 24px;
          background:
            radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.04), transparent 26%),
            linear-gradient(145deg, rgba(15, 18, 19, 0.9), rgba(5, 6, 7, 0.96));
        }

        .three-setup-title-row {
          justify-content: center;
          gap: 24px;
        }

        .three-setup-title-row > span {
          height: 2px;
          width: 42px;
          background: #16a34a;
        }

        .three-setup-title-row svg {
          height: 42px;
          width: 42px;
        }

        .three-setup-list {
          position: relative;
          display: grid;
          margin-top: 36px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 34px;
        }

        .three-setup-list::before {
          content: '';
          position: absolute;
          left: 24px;
          right: 8%;
          top: 38px;
          border-top: 2px dashed rgba(22, 163, 74, 0.85);
        }

        .three-setup-step {
          position: relative;
          display: grid;
          justify-items: center;
          padding-top: 54px;
          text-align: center;
        }

        .three-step-number {
          position: absolute;
          top: 18px;
          left: 0;
          z-index: 2;
          display: grid;
          height: 40px;
          width: 40px;
          place-items: center;
          border: 2px solid #16a34a;
          border-radius: 999px;
          background: #07120d;
          color: #16a34a;
          font-size: 18px;
          font-weight: 900;
        }

        .three-setup-icon {
          position: absolute;
          top: -2px;
          left: 50%;
          z-index: 2;
          display: grid;
          height: 86px;
          width: 86px;
          transform: translateX(-50%);
          place-items: center;
          border: 2px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(18, 18, 18, 0.92);
          color: #16a34a;
        }

        .three-setup-step > div {
          width: 100%;
          min-height: 146px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 12px;
          padding: 50px 28px 22px;
          background: rgba(10, 12, 13, 0.72);
        }

        .three-setup-step svg {
          color: #16a34a;
        }

        .three-setup-step h4 {
          color: #FFFFFF;
          font-size: 17px;
          font-weight: 900;
          line-height: 1.2;
        }

        .three-setup-tagline {
          margin-top: 28px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          color: #16a34a;
          letter-spacing: 0.01em;
        }

        .three-setup-tagline span {
          background: linear-gradient(90deg, #16a34a, #30e65d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .three-setup-tagline-asterisk {
          font-size: 13px;
          vertical-align: super;
          -webkit-text-fill-color: #16a34a;
          color: #16a34a;
        }

        .three-setup-step p {
          margin-top: 12px;
          color: #D6D6D6;
          font-size: 15px;
          line-height: 1.45;
        }

        .three-recommendation-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.95fr);
          align-items: center;
          gap: 76px;
        }

        .three-recommendation-card {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          padding: 28px 36px;
          background:
            radial-gradient(circle at 18% 20%, rgba(22, 163, 74, 0.18), transparent 34%),
            linear-gradient(145deg, rgba(18, 23, 22, 0.94), rgba(7, 8, 9, 0.96));
        }

        .three-recommendation-card div {
          min-height: 82px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          padding-right: 20px;
        }

        .three-recommendation-card div:nth-child(odd) {
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }

        .three-recommendation-card div:nth-child(even) {
          padding-left: 20px;
          padding-right: 0;
        }

        .three-recommendation-card div:nth-child(n + 3) {
          border-bottom: 0;
        }

        .three-faq-list {
          display: grid;
          margin-top: 26px;
          gap: 10px;
        }

        .three-faq-item {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(15, 16, 17, 0.82);
        }

        .three-faq-item.is-open {
          border-color: #16a34a;
        }

        .three-faq-item button {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 22px 24px;
          color: #FFFFFF;
          text-align: left;
          font-size: 18px;
        }

        .three-faq-item button span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          height: 30px;
          width: 30px;
          border: 1px solid #16a34a;
          border-radius: 999px;
          color: #16a34a;
        }

        .three-faq-item.is-open button span {
          background: #16a34a;
          color: #ffffff;
        }

        .three-faq-item button strong {
          flex: 1;
          min-width: 0;
        }

        .three-faq-item button > svg {
          flex-shrink: 0;
          margin-left: auto;
          color: #16a34a;
        }

        .three-faq-item > div {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.22s ease;
        }

        .three-faq-item.is-open > div {
          grid-template-rows: 1fr;
        }

        .three-faq-item p {
          min-height: 0;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          padding: 0 24px;
          color: #C7C7C7;
          line-height: 1.6;
        }

        .three-faq-item.is-open p {
          padding-block: 20px;
        }

        .three-final-cta {
          display: grid;
          margin-top: 42px;
          grid-template-columns: 330px minmax(0, 1fr);
          align-items: center;
          gap: 50px;
          padding: 18px 58px;
          background:
            radial-gradient(circle at 18% 50%, rgba(22, 163, 74, 0.18), transparent 28%),
            linear-gradient(145deg, rgba(18, 23, 22, 0.94), rgba(7, 8, 9, 0.96));
        }

        .three-final-cta img {
          width: 260px;
          height: 260px;
          object-fit: cover;
          object-position: center;
        }

        .three-final-cta h2 {
          font-size: clamp(34px, 4vw, 46px);
          font-weight: 900;
        }

        .three-final-cta p {
          margin-top: 18px;
          color: #C7C7C7;
          font-size: 20px;
        }

        .host-who-section-wrap {
          padding: 0 24px 80px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .host-who-strip {
          margin-top: 0;
          display: grid;
          grid-template-columns: minmax(260px, 0.92fr) 1px repeat(3, minmax(120px, 0.58fr)) minmax(160px, 0.72fr);
          align-items: center;
          gap: 26px;
          overflow: hidden;
          min-height: 150px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)), rgba(17, 17, 17, 0.76);
          box-shadow: inset 0 0 36px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          padding: 22px 22px 22px 38px;
        }

        .host-who-strip-title {
          align-self: center;
          color: #FFFFFF;
          font-size: clamp(26px, 2.1vw, 38px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: 0;
        }

        .host-rotating-text {
          display: inline-flex;
          width: max-content;
          min-width: 5.2ch;
          align-items: center;
          flex-wrap: nowrap;
          overflow: hidden;
          background: #16a34a;
          color: #FFFFFF;
          border-radius: 8px;
          padding: 0.05em 0.22em 0.1em;
          line-height: 1;
          white-space: nowrap;
          vertical-align: bottom;
        }

        .host-rotating-text .text-rotate,
        .host-rotating-text .text-rotate-word { flex-wrap: nowrap; }

        .host-rotating-text .text-rotate-element { color: #FFFFFF; }

        .host-rotating-text-split {
          overflow: hidden;
          padding-bottom: 0.04em;
        }

        .host-who-divider {
          height: 78px;
          width: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .host-who-benefit {
          display: grid;
          justify-items: center;
          gap: 10px;
          text-align: center;
        }

        .host-who-benefit-icon {
          display: grid;
          height: 54px;
          width: 54px;
          place-items: center;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
        }

        .host-who-benefit h4 { color: #FFFFFF; font-size: 14px; font-weight: 800; line-height: 1.1; }
        .host-who-benefit p { color: #a1a1aa; font-size: 12px; font-weight: 600; line-height: 1.25; }

        .host-who-actions { display: grid; gap: 12px; justify-items: stretch; }

        .host-who-primary { min-height: 56px; border-radius: 7px; font-size: 16px; }

        .host-expand-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          background: transparent;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          padding: 0 16px;
        }

        .host-expand-button:hover { border-color: #16a34a; color: #16a34a; }

        .host-collapse-button {
          position: absolute;
          top: 20px;
          right: 20px;
          display: grid;
          height: 36px;
          width: 36px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(20, 20, 20, 0.72);
          color: #FFFFFF;
          cursor: pointer;
          z-index: 10;
          transition: border-color 0.2s;
        }

        .host-collapse-button:hover { border-color: #16a34a; }

        .host-partners-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid #123327;
          padding: 96px 0 80px;
          background: radial-gradient(circle at 86% 32%, rgba(22, 163, 74, 0.2), transparent 24%), linear-gradient(115deg, #030403 0%, #06100d 50%, #020403 100%);
        }

        .host-partners-bolt {
          position: absolute;
          z-index: -1;
          right: -80px;
          top: -72px;
          width: 520px;
          height: 760px;
          opacity: 0.56;
          pointer-events: none;
          filter: drop-shadow(0 0 18px rgba(22, 163, 74, 0.75)) drop-shadow(0 0 54px rgba(22, 163, 74, 0.35));
        }

        .host-partners-bolt::before, .host-partners-bolt::after {
          content: '';
          position: absolute;
          inset: 0;
          clip-path: polygon(58% 0, 96% 0, 70% 39%, 100% 39%, 32% 100%, 54% 52%, 22% 52%);
        }

        .host-partners-bolt::before { background: linear-gradient(160deg, rgba(22, 163, 74, 0.95), rgba(22, 163, 74, 0.12)); }
        .host-partners-bolt::after { inset: 4px; background: linear-gradient(115deg, #030403 0%, #06100d 55%, #020403 100%); opacity: 0.92; }

        .host-partners-bolt-soft {
          position: absolute;
          right: 0;
          top: 0;
          z-index: -2;
          width: 48vw;
          height: 100%;
          background: radial-gradient(ellipse at 62% 50%, rgba(22, 163, 74, 0.22), transparent 46%), linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.08));
          pointer-events: none;
        }

        .host-partners-eyebrow {
          color: #16a34a;
          font-size: 14px;
          font-weight: 850;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .host-partners-title {
          color: #FFFFFF;
          font-size: clamp(36px, 3.5vw, 58px);
          font-weight: 850;
          line-height: 1.08;
        }

        .host-partners-title span { color: #16a34a; }

        .host-partners-copy {
          margin-top: 20px;
          color: #a1a1aa;
          font-size: clamp(17px, 1.35vw, 22px);
          line-height: 1.45;
        }

        .host-partner-logo-grid {
          margin-top: 56px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .host-partner-logo-card {
          display: grid;
          height: 140px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.35);
          border-radius: 11px;
          background: radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.14), transparent 42%), rgba(3, 10, 9, 0.72);
          padding: 28px;
          transition: border-color 0.25s, transform 0.25s;
        }

        .host-partner-logo-card:hover { border-color: rgba(22, 163, 74, 0.82); transform: translateY(-2px); }

        .host-partner-logo-card img { max-height: 60px; max-width: 100%; object-fit: contain; opacity: 0.88; }
        .host-partner-logo-card img.is-inverted { filter: grayscale(1) invert(1) brightness(1.75); }

        .host-partners-action { margin-top: 40px; }

        .host-stories-section {
          padding: 80px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          background: #050606;
        }

        .host-stories-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .host-stories { scrollbar-width: none; }
        .host-stories::-webkit-scrollbar { display: none; }

        @media (max-width: 980px) {
          .three-hero-grid,
          .three-decision-grid,
          .three-recommendation-grid,
          .charger-env-panel,
          .three-final-cta {
            grid-template-columns: 1fr;
          }

          .three-quick-grid,
          .three-audience-grid,
          .three-hero-benefits {
            grid-template-columns: 1fr 1fr;
          }

          .three-hero-features {
            margin-top: 48px;
          }

          .three-product-card {
            max-width: 520px;
            margin: 0 auto;
          }
        }

        @media (max-width: 767px) {
          .three-container,
          .charger-environments-section .charger-container {
            padding: 0 18px;
          }

          .three-hero {
            padding-top: 94px;
          }

          .three-hero-grid {
            min-height: auto;
            gap: 40px;
          }

          .three-hero h1 {
            font-size: 32px;
          }

          .three-hero-text,
          .three-section-copy,
          .charger-environments-intro p:not(.charger-eyebrow) {
            font-size: 17px;
          }

          .three-hero-benefits,
          .three-quick-grid,
          .three-audience-grid,
          .three-how-feature-grid,
          .charger-env-tabs,
          .three-recommendation-card {
            grid-template-columns: 1fr;
          }

          .three-hero-benefit {
            min-height: auto;
            grid-template-columns: 54px minmax(0, 1fr);
            gap: 14px;
            padding: 18px;
          }

          .three-hero-benefit > svg {
            height: 50px;
            width: 50px;
            padding: 14px;
          }

          .three-hero-benefit h3 {
            font-size: 18px;
          }

          .three-hero-benefit p {
            margin-top: 8px;
            font-size: 14px;
          }

          .three-info-card {
            min-height: 220px;
          }

          .charger-expand-actions {
            display: grid;
            gap: 12px;
          }

          .charger-expand-button {
            width: 100%;
            min-height: 52px;
            padding: 0 18px;
          }

          .charger-expand-section {
            padding-top: 8px;
          }

          .charger-collapse-button {
            right: 0;
            top: -2px;
            height: 40px;
            width: 40px;
          }

          .three-how-panel {
            display: block;
            height: auto;
            min-height: auto;
            margin-top: 34px;
            border-radius: 14px;
            padding: 64px 18px;
          }

          .three-how-copy {
            max-width: 100%;
          }

          .three-how-kicker {
            font-size: 16px;
          }

          .three-how-kicker span {
            height: 38px;
            min-width: 38px;
            font-size: 16px;
          }

          .three-how-copy h2 {
            margin-top: 28px;
            font-size: 39px;
          }

          .three-how-copy > p {
            max-width: 320px;
            font-size: 17px;
          }

          .three-how-feature-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .three-how-feature {
            grid-template-columns: 48px minmax(0, 1fr);
          }

          .three-how-feature > span {
            height: 46px;
            width: 46px;
          }

          .three-how-visual {
            margin-top: 42px;
            min-height: 360px;
          }

          .three-how-phone {
            left: -10px;
            bottom: 42px;
            width: 32%;
            max-height: 260px;
          }

          .three-how-laptop {
            left: 16%;
            top: 20px;
            width: 82%;
            max-height: 210px;
          }

          .three-how-payment {
            right: 4px;
            bottom: 44px;
            width: 26%;
            max-height: 250px;
          }

          .three-how-strip {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            margin-top: 16px;
            grid-template-columns: 1fr;
          }

          .three-how-strip div {
            min-height: 56px;
            justify-content: flex-start;
          }

          .three-how-strip div + div::before {
            inset: 0 auto auto 18px;
            width: calc(100% - 36px);
            height: 1px;
          }

          .charger-env-tab {
            min-height: 64px;
            border-radius: 10px;
          }

          .charger-env-panel {
            padding: 22px 16px;
          }

          .charger-env-accordion-button {
            grid-template-columns: 44px 1fr 22px;
            padding: 15px;
            font-size: 17px;
          }

          .charger-env-accordion-icon {
            height: 42px;
            width: 42px;
          }

          .charger-env-accordion-body p {
            padding-inline: 15px;
            font-size: 15px;
          }

          .charger-env-card {
            min-height: 520px;
            padding: 24px;
          }

          .three-compare-table {
            grid-template-columns: 1fr;
          }

          .three-compare-table > div:first-child {
            display: none;
          }

          .three-spec-panel,
          .three-setup-panel {
            padding: 24px;
          }

          .three-spec-columns {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .three-spec-list div {
            grid-template-columns: 1fr;
          }

          .three-spec-list strong {
            border-left: 0;
            padding-left: 22px;
            padding-top: 0;
          }

          .three-setup-title-row {
            gap: 14px;
          }

          .three-setup-title-row > span {
            width: 28px;
          }

          .three-setup-list {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .three-setup-list::before {
            display: none;
          }

          .three-setup-step {
            padding-top: 44px;
          }

          .three-step-number {
            left: 0;
            top: 10px;
          }

          .three-setup-icon {
            left: 50%;
            height: 72px;
            width: 72px;
          }

          .three-setup-step > div {
            min-height: auto;
            padding: 48px 20px 22px;
          }

          .three-final-cta {
            padding: 24px;
          }

          .host-who-strip {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 20px;
          }

          .host-who-divider { display: none; }

          .host-who-strip-title {
            font-size: 28px;
          }

          .host-partner-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>

      <div className="three-page font-sans">
        <ThreeKwHero spec={spec} />
        <ThreeKwQuickSection spec={spec} />
        <EnvironmentSection spec={spec} />
        <DecisionSection spec={spec} />
        <UseCasesRecommendationFaq spec={spec} />
        <ThreeKwHostWhoBlock
          showHostingSections={showHostingSections}
          onShowHostingSections={() => setShowHostingSections(true)}
          onHideHostingSections={() => setShowHostingSections(false)}
        />
      </div>
    </>
  );
}

function LeadForm({ spec }) {
  return (
    <form
      className="grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {["Name", "Phone number", "Email", "City"].map((field) => (
          <label key={field} className="grid gap-3">
            <span className="text-sm font-semibold text-white">{field}</span>
            <input
              type={field === "Email" ? "email" : "text"}
              className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#16a34a]"
            />
          </label>
        ))}
      </div>
      <label className="grid gap-3">
        <span className="text-sm font-semibold text-white">Site type</span>
        <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#16a34a]">
          {spec.leadSiteTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-3">
          <span className="text-sm font-semibold text-white">
            How do you want to use the charger
          </span>
          <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#16a34a]">
            <option>Private use</option>
            <option>Public charging</option>
            <option>Both</option>
          </select>
        </label>
        <label className="grid gap-3">
          <span className="text-sm font-semibold text-white">
            Do you have solar installed
          </span>
          <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#16a34a]">
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label className="grid gap-3">
        <span className="text-sm font-semibold text-white">Message</span>
        <textarea
          rows="5"
          className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-white outline-none transition focus:border-[#16a34a]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
      >
        Get a free recommendation
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function ChargerSpecPage({ spec }) {
  const common = chargerSpecCommon;

  if (["3kW", "7kW", "22kW"].includes(spec.power)) {
    return <ThreeKwChargerPage spec={spec} />;
  }

  return (
    <>
      <style data-page-style={`charger-spec:${spec.power}`}>{`
        .charger-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .charger-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .charger-section {
          padding: 120px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        .charger-eyebrow {
          margin-bottom: 18px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .charger-environments-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 88% 26%, rgba(22, 163, 74, 0.08), transparent 32%),
            linear-gradient(180deg, #050606 0%, #080909 100%);
        }

        .charger-environments-section::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.34), transparent 45%),
            radial-gradient(circle at 12% 72%, rgba(22, 163, 74, 0.06), transparent 28%);
        }

        .charger-environments-section .charger-container {
          position: relative;
          z-index: 1;
        }

        .charger-environments-intro {
          max-width: 740px;
        }

        .charger-environments-intro h2 {
          max-width: 700px;
          color: #FFFFFF;
          font-size: clamp(32px, 3.5vw, 42px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0;
        }

        .charger-environments-intro p:not(.charger-eyebrow) {
          margin-top: 26px;
          max-width: 680px;
          color: #C7C7C7;
          font-size: 21px;
          line-height: 1.45;
        }

        .charger-env-tabs {
          display: grid;
          margin-top: 72px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .charger-env-tab {
          display: inline-flex;
          min-height: 76px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom-color: rgba(22, 163, 74, 0.42);
          background: rgba(18, 19, 20, 0.78);
          color: #FFFFFF;
          font-size: 22px;
          font-weight: 800;
          transition:
            border-color 0.22s ease,
            background 0.22s ease,
            color 0.22s ease;
        }

        .charger-env-tab:first-child {
          border-top-left-radius: 14px;
        }

        .charger-env-tab:last-child {
          border-top-right-radius: 14px;
        }

        .charger-env-tab svg {
          color: currentColor;
        }

        .charger-env-tab.is-active {
          border-color: rgba(22, 163, 74, 0.86);
          border-bottom-color: #16a34a;
          background: linear-gradient(180deg, rgba(22, 163, 74, 0.11), rgba(9, 17, 15, 0.9));
          color: #16a34a;
          box-shadow: inset 0 -2px 0 #16a34a;
        }

        .charger-env-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
          gap: 44px;
          overflow: hidden;
          border: 1px solid rgba(22, 163, 74, 0.5);
          border-top: 0;
          border-radius: 0 0 14px 14px;
          background:
            linear-gradient(135deg, rgba(8, 20, 17, 0.92), rgba(5, 6, 7, 0.96) 52%),
            radial-gradient(circle at 82% 58%, rgba(22, 163, 74, 0.08), transparent 30%);
          padding: 44px 54px 52px;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
        }

        .charger-env-copy {
          max-width: 680px;
          color: #F3F3F3;
          font-size: 23px;
          line-height: 1.35;
        }

        .charger-env-accordion {
          margin-top: 34px;
          display: grid;
          gap: 12px;
        }

        .charger-env-accordion-item {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          background:
            linear-gradient(135deg, rgba(19, 22, 23, 0.92), rgba(8, 9, 10, 0.95));
          transition:
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .charger-env-accordion-item.is-open {
          border-color: rgba(22, 163, 74, 0.34);
          background:
            linear-gradient(135deg, rgba(16, 28, 25, 0.96), rgba(9, 10, 11, 0.98));
        }

        .charger-env-accordion-button {
          display: grid;
          width: 100%;
          grid-template-columns: 58px minmax(0, 1fr) 24px;
          align-items: center;
          gap: 18px;
          padding: 18px 24px;
          color: #FFFFFF;
          text-align: left;
          font-size: 22px;
          font-weight: 800;
        }

        .charger-env-accordion-button > svg {
          color: #16a34a;
          transition: transform 0.22s ease;
        }

        .charger-env-accordion-button[aria-expanded="true"] > svg {
          transform: rotate(180deg);
        }

        .charger-env-accordion-icon {
          display: grid;
          height: 50px;
          width: 50px;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          color: #16a34a;
        }

        .charger-env-accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.24s ease;
        }

        .charger-env-accordion-item.is-open .charger-env-accordion-body {
          grid-template-rows: 1fr;
        }

        .charger-env-accordion-body p {
          min-height: 0;
          overflow: hidden;
          padding: 0 28px 0 96px;
          color: #C7C7C7;
          font-size: 19px;
          line-height: 1.55;
        }

        .charger-env-accordion-item.is-open .charger-env-accordion-body p {
          padding-bottom: 26px;
        }

        .charger-env-card {
          position: relative;
          overflow: hidden;
          min-height: 560px;
          border: 1px solid rgba(22, 163, 74, 0.58);
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(8, 25, 21, 0.92), rgba(10, 10, 10, 0.86)),
            url('/img/Host/Hosting Banner.png');
          background-size: cover;
          background-position: center;
          padding: 38px;
        }

        .charger-env-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(3, 5, 5, 0.72), rgba(3, 5, 5, 0.4) 58%, rgba(3, 5, 5, 0.86)),
            radial-gradient(circle at 18% 26%, rgba(22, 163, 74, 0.18), transparent 30%);
        }

        .charger-env-card > * {
          position: relative;
          z-index: 1;
        }

        .charger-env-card-icon {
          display: grid;
          height: 58px;
          width: 58px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.18);
          border-radius: 12px;
          background: rgba(22, 163, 74, 0.08);
          color: #16a34a;
        }

        .charger-env-card h3 {
          margin-top: 28px;
          max-width: 360px;
          color: #FFFFFF;
          font-size: clamp(31px, 3vw, 42px);
          font-weight: 800;
          line-height: 1.08;
        }

        .charger-env-card-line {
          display: block;
          margin-top: 28px;
          height: 3px;
          width: 48px;
          background: #16a34a;
        }

        .charger-env-point-list {
          margin-top: 28px;
          display: grid;
          gap: 18px;
        }

        .charger-env-point {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #FFFFFF;
          font-size: 17px;
          font-weight: 650;
        }

        .charger-env-point svg {
          display: grid;
          height: 22px;
          width: 22px;
          flex: 0 0 auto;
          border: 1px solid #16a34a;
          border-radius: 999px;
          padding: 3px;
          color: #16a34a;
        }

        .charger-env-card-visual {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: min(240px, 58%);
          height: 260px;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .charger-env-mini-charger {
          position: relative;
          display: grid;
          height: 230px;
          width: 150px;
          justify-items: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 18px;
          background: linear-gradient(145deg, #202424, #080909 68%);
          padding: 34px 18px 24px;
          box-shadow:
            0 28px 60px rgba(0, 0, 0, 0.5),
            0 0 42px rgba(22, 163, 74, 0.18);
        }

        .charger-env-mini-charger svg {
          color: #16a34a;
        }

        .charger-env-mini-charger span {
          margin-top: 20px;
          color: #FFFFFF;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .charger-env-mini-charger strong {
          margin-top: 4px;
          color: #16a34a;
          font-size: 12px;
        }

        .charger-env-mini-charger i {
          margin-top: auto;
          display: block;
          height: 58px;
          width: 58px;
          border: 4px solid rgba(22, 163, 74, 0.8);
          border-radius: 999px;
          background: #050505;
          box-shadow: inset 0 0 0 10px #0b0b0b;
        }

        @media (max-width: 767px) {
          .charger-container {
            padding: 0 18px;
          }

          .charger-section {
            padding: 84px 0;
          }

          .charger-page [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          .charger-environments-intro h2 {
            font-size: 28px;
          }

          .charger-environments-intro p:not(.charger-eyebrow) {
            font-size: 17px;
          }

          .charger-env-tabs,
          .charger-env-panel {
            margin-top: 36px;
            grid-template-columns: 1fr;
          }

          .charger-env-tab {
            min-height: 64px;
            border-radius: 10px;
            font-size: 18px;
          }

          .charger-env-panel {
            gap: 28px;
            border-top: 1px solid rgba(22, 163, 74, 0.5);
            padding: 24px 16px;
          }

          .charger-env-copy {
            font-size: 18px;
          }

          .charger-env-accordion-button {
            grid-template-columns: 44px minmax(0, 1fr) 22px;
            gap: 12px;
            padding: 15px;
            font-size: 17px;
          }

          .charger-env-accordion-icon {
            height: 42px;
            width: 42px;
          }

          .charger-env-accordion-body p {
            padding-inline: 15px;
            font-size: 15px;
          }

          .charger-env-card {
            min-height: 520px;
            padding: 24px;
          }
        }
      `}</style>

      <div className="charger-page font-sans">
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
          <div className="charger-container relative grid min-h-[calc(100vh-80px)] gap-16 pb-24 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-[#16a34a]">
                Zvolta {spec.power} charger
              </p>
              <h1 className="mt-5 text-[40px] font-semibold leading-[1.04] text-white md:text-[58px]">
                {spec.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                {spec.heroBody}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                {spec.heroSupport}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {spec.heroBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Get this charger</PrimaryButton>
                <SecondaryButton>Talk to our team</SecondaryButton>
              </div>
            </div>
            <ChargerVisual power={spec.power} />
          </div>
        </section>

        <Section>
          <SectionIntro
            eyebrow="Quick details"
            title={`${spec.power} charger at a glance.`}
          />
          <div className="mt-12">
            <DataTable
              rows={spec.quickDetails}
              headers={["Detail", `Zvolta ${spec.power} charger`]}
            />
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <SectionIntro
              eyebrow="Who should choose this charger"
              title={spec.whoTitle}
              copy={spec.whoBody}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {spec.bestFor.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <PrimaryButton className="mt-10">
            {spec.recommendationCta}
          </PrimaryButton>
        </Section>

        {spec.balanceTitle ? (
          <Section>
            <SectionIntro
              eyebrow="Charger fit"
              title={spec.balanceTitle}
              copy={spec.balanceBody}
            />
            <PrimaryButton className="mt-9">Get setup advice</PrimaryButton>
          </Section>
        ) : null}

        {spec.power === "3kW" ? (
          <EnvironmentSection />
        ) : (
          <Section>
            <SectionIntro
              eyebrow="Private, shared, or public"
              title="Use it privately or earn from it."
              copy={`You can use the same charger in different ways. ${spec.useSupport}`}
            />
            <div className="mt-12">
              <DataTable
                rows={spec.useTypes}
                headers={["Use type", "What it means"]}
              />
            </div>
            <div className="mt-8 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "You set the price.",
                "You set the timing.",
                "You choose who can use it.",
                "You keep 100% of your earnings.",
              ].map((item) => (
                <p key={item} className="text-base font-semibold text-white">
                  {item}
                </p>
              ))}
            </div>
            <PrimaryButton className="mt-9">
              Start earning from your charger
            </PrimaryButton>
          </Section>
        )}

        <Section>
          <SectionIntro
            eyebrow="Smart software is included"
            title="This is not just a basic charger."
            copy={spec.softwareIntro}
          />
          <div className="mt-12">
            <DataTable
              rows={common.softwareFeatures}
              headers={["Feature", "What it does"]}
            />
          </div>
          <div className="mt-8 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-3">
            {["No staff needed.", "No cash handling.", "No manual work."].map(
              (item) => (
                <p key={item} className="text-lg font-semibold text-white">
                  {item}
                </p>
              ),
            )}
          </div>
          <SecondaryButton href="/software" className="mt-9">
            Learn about Zvolta software
          </SecondaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Simple for EV users"
            title="Easy charging through the Zvolta app."
            copy="EV users can find your charger on the Zvolta app if you make it public. They can check the location, see the price, scan the QR code, start charging, and pay from the app."
          />
          <SecondaryButton href="/charge" className="mt-9">
            Download the app
          </SecondaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Built-in safety features"
            title="Safety should not be an extra upgrade."
            copy="Zvolta includes important safety features in the charger price."
          />
          <div className="mt-12">
            <DataTable
              rows={spec.safetyFeatures ?? common.safetyFeatures}
              headers={["Safety feature", "What it means"]}
            />
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#A1A1A1]">
            These features are included for free. Some basic imported chargers
            charge extra for these safety add ons. These add ons can cost around
            PKR 50,000 to PKR 80,000. Zvolta includes them because safety should
            be standard.
          </p>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Comparison"
            title={`Zvolta ${spec.power} vs basic imported chargers.`}
          />
          <div className="mt-12">
            <DataTable
              rows={
                spec.importedComparisonRows ?? common.importedComparisonRows
              }
              headers={[
                "Feature",
                `Zvolta ${spec.power} smart charger`,
                "Basic imported chargers",
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Installation"
            title="Free standard installation."
            copy={`Zvolta provides free standard installation with the ${spec.power} charger. Our team installs the charger, connects it with the app, and helps you get started. If your site needs earthing, only the earthing cost will apply.`}
          />
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#A1A1A1]">
            Earthing means a safe connection to the ground. It helps protect
            people and equipment from extra current.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <DataTable
              rows={common.installationItems}
              headers={["Installation item", "Cost"]}
            />
            <DataTable
              rows={spec.installationOptions}
              headers={["Installation style", "Good for"]}
            />
          </div>
          <PrimaryButton className="mt-9">Book a site check</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Technical specs"
            title={`${spec.power} technical specs.`}
          />
          <div className="mt-12">
            <DataTable
              rows={spec.technicalSpecs}
              headers={["Spec", "Detail"]}
            />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Pricing"
            title={`${spec.power} charger pricing.`}
          />
          <div className="mt-12">
            <DataTable rows={spec.pricing} headers={["Item", "Price"]} />
          </div>
          <PrimaryButton className="mt-9">Get this charger</PrimaryButton>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionIntro
                eyebrow="Add more chargers later"
                title={`Start with one ${spec.power} charger and add more later.`}
                copy="Zvolta add on modules let you connect two or more chargers together. Each add on module costs 50% of the charger price."
              />
              <SecondaryButton className="mt-9">
                Ask about add on modules
              </SecondaryButton>
            </div>
            <div>
              <SectionIntro
                eyebrow="How setup works"
                title="From site check to go live."
              />
              <div className="mt-8">
                <DataTable
                  rows={common.setupSteps}
                  headers={["Step", "What happens"]}
                />
              </div>
              <PrimaryButton className="mt-9">Start setup</PrimaryButton>
            </div>
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Use cases"
            title={`Where the ${spec.power} charger works well.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {spec.goodFor.map(([title, copy, cta]) => (
              <article
                key={title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
                <SmartLink
                  href={CONTACT_LINK}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a]"
                >
                  {cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Compare options"
            title="Compare Zvolta charger options."
          />
          <div className="mt-12">
            <DataTable
              rows={common.compareChargers}
              headers={["Charger", "Best for", "Power"]}
            />
          </div>
          <p className="mt-8 text-lg font-semibold text-white">
            Not sure which one you need?
          </p>
          <PrimaryButton className="mt-5">
            Get a free recommendation
          </PrimaryButton>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <SectionIntro
              eyebrow="Recommendation"
              title={spec.leadTitle}
              copy="Tell us about your space and our team will guide you."
            />
            <LeadForm spec={spec} />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="FAQs"
            title={`Questions about the ${spec.power} charger.`}
          />
          <div className="mt-12 grid gap-4">
            {spec.faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {question}
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
          <div className="charger-container relative">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                {spec.finalTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                {spec.finalBody}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <PrimaryButton>Get this charger</PrimaryButton>
                <SecondaryButton href="/host">
                  Compare all Zvolta chargers
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
