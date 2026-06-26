import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmartLink } from "../SmartLink";

const DEMO_LINK = "/contact-us";
const CONTACT_LINK = "/contact-us";

const audienceCards = [
  {
    title: "Charger manufacturers",
    copy: "Make your hardware smart with app, QR, payments, and dashboard support.",
  },
  {
    title: "Charge point operators",
    copy: "Manage chargers, sites, users, sessions, pricing, and reports from one place.",
  },
  {
    title: "Enterprises",
    copy: "Deploy chargers across teams, offices, locations, or public sites.",
  },
  {
    title: "Fleets",
    copy: "Track charging usage, access, cost, and performance across vehicles.",
  },
  {
    title: "Property groups",
    copy: "Offer managed EV charging across apartments, offices, malls, and parking sites.",
  },
  {
    title: "White label partners",
    copy: "Launch the charging experience under your own brand.",
  },
];

const platformFeatures = [
  ["Charger control", "Manage chargers remotely and see live status."],
  ["User app", "Let EV users find, scan, charge, pay, and track sessions."],
  ["Host dashboard", "Give site owners usage, earnings, and charger controls."],
  ["Enterprise dashboard", "Manage many chargers, sites, users, and teams."],
  ["Payments", "Handle session payments and records."],
  ["Pricing rules", "Set rates, access, timings, and availability."],
  ["Live status", "See online, offline, available, and in-use chargers."],
  ["Reports", "Track energy, sessions, revenue, uptime, and impact."],
];

const smartSteps = [
  {
    title: "Normal charger",
    copy: "The charger gives power, but the operation is still manual.",
    state: "Power only",
  },
  {
    title: "Zvolta software layer connects",
    copy: "The charger connects to the EV charging platform and starts sending live data.",
    state: "Connected",
  },
  {
    title: "QR scan starts the session",
    copy: "Users scan the charger and start from the app without staff support.",
    state: "QR active",
  },
  {
    title: "Payment is handled in the app",
    copy: "Charging payments, records, and session history are created automatically.",
    state: "Paid",
  },
  {
    title: "Dashboard receives reports",
    copy: "Operators see status, sessions, revenue, kWh, and impact in one place.",
    state: "Reporting",
  },
];

const smartChips = [
  "QR start",
  "Live status",
  "App payments",
  "Remote control",
  "Session tracking",
  "Usage reports",
];

const userPoints = [
  "Find chargers",
  "Check availability",
  "Scan QR",
  "Start session",
  "Pay in app",
  "View history",
];

const hostPoints = [
  "Track earnings",
  "Set pricing",
  "Control timings",
  "View sessions",
  "Monitor charger status",
  "Manage access",
];

const enterprisePoints = [
  "Multi-site view",
  "Team access",
  "Location management",
  "Charger health",
  "Revenue reports",
  "Usage analytics",
];

const pricingRules = [
  "Price per unit",
  "Operating hours",
  "Public or private access",
  "User roles",
  "Location rules",
  "Charger availability",
];

const securityCards = [
  "Secure user access",
  "User roles and permissions",
  "Protected payment records",
  "Reliable charger data",
  "System monitoring",
  "Stable charging flow",
];

const setupSteps = [
  [
    "Share your hardware details",
    "We understand your chargers, locations, and business needs.",
  ],
  [
    "Check compatibility",
    "We review how your chargers can connect with the software.",
  ],
  [
    "Set up your dashboard",
    "We configure users, locations, pricing, and access.",
  ],
  ["Test charging flow", "We test scan, charge, payment, and reporting."],
  ["Go live", "Your chargers become ready for users and operators."],
];

const useCases = [
  [
    "Charger manufacturers",
    "Make your hardware smart without building software from zero.",
  ],
  [
    "Charging operators",
    "Run public or private charging networks from one dashboard.",
  ],
  ["Enterprises", "Manage chargers across offices, locations, and teams."],
  ["Fleets", "Track charging usage, cost, and access for vehicles."],
  [
    "Property groups",
    "Offer charging across apartments, offices, malls, and parking sites.",
  ],
  ["White label networks", "Launch charging under your own brand."],
];

const stories = [
  "How a charger company launched faster with Zvolta software.",
  "How an operator managed multiple locations from one dashboard.",
  "How a property group gave tenants app-based EV charging.",
  "How a fleet used charging data to manage daily operations.",
];

const formatPKR = (value) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);

function Icon({ name, className = "h-5 w-5" }) {
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

  if (name === "check") {
    return (
      <svg {...props}>
        <path d="m5 12 4 4L19 6" />
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

  if (name === "node") {
    return (
      <svg {...props}>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="m8.6 10.6 6.8-3.2" />
        <path d="m8.6 13.4 6.8 3.2" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg {...props}>
        <path d="M4 7h14a2 2 0 0 1 2 2v9H6a2 2 0 0 1-2-2V7Z" />
        <path d="M4 7V6a2 2 0 0 1 2-2h11v3" />
        <path d="M16 13h.01" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg {...props}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    );
  }

  if (name === "station") {
    return (
      <svg {...props}>
        <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M4 21h12" />
        <path d="M15 9h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0v-7l-3-3" />
        <path d="m10 7-2 4h3l-2 4" />
      </svg>
    );
  }

  if (name === "plug") {
    return (
      <svg {...props}>
        <path d="M9 2v5" />
        <path d="M15 2v5" />
        <path d="M6 7h12v3a6 6 0 0 1-12 0V7Z" />
        <path d="M12 16v6" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...props}>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    );
  }

  if (name === "store") {
    return (
      <svg {...props}>
        <path d="M4 9h16l-1-5H5L4 9Z" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
        <circle cx="12" cy="10" r="2" />
        <path d="M8.5 15.5a4 4 0 0 1 7 0" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...props}>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 10h16" />
      </svg>
    );
  }

  if (name === "bars") {
    return (
      <svg {...props}>
        <path d="M4 20V4" />
        <path d="M4 20h16" />
        <rect x="7" y="12" width="3" height="5" />
        <rect x="12" y="8" width="3" height="9" />
        <rect x="17" y="5" width="3" height="12" />
      </svg>
    );
  }

  if (name === "doc") {
    return (
      <svg {...props}>
        <path d="M7 3h7l5 5v13H7V3Z" />
        <path d="M14 3v5h5" />
        <path d="M10 13h6" />
        <path d="M10 17h6" />
      </svg>
    );
  }

  if (name === "tag") {
    return (
      <svg {...props}>
        <path d="M3 12V4h8l9 9-8 8-9-9Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
    );
  }

  if (name === "pie") {
    return (
      <svg {...props}>
        <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" />
        <path d="M14 3.5A7 7 0 0 1 20.5 10H14V3.5Z" />
      </svg>
    );
  }

  if (name === "sliders") {
    return (
      <svg {...props}>
        <path d="M4 8h10" />
        <path d="M18 8h2" />
        <circle cx="16" cy="8" r="2" />
        <path d="M4 16h2" />
        <path d="M10 16h10" />
        <circle cx="8" cy="16" r="2" />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg {...props}>
        <path d="M4 20c0-8 6-14 16-14 0 10-6 14-14 14H4Z" />
        <path d="M4 20c4-6 8-8 12-9" />
      </svg>
    );
  }

  if (name === "gear") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg {...props}>
        <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    );
  }

  if (name === "fuel") {
    return (
      <svg {...props}>
        <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M3 21h12" />
        <path d="M7 8h4" />
        <path d="M14 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0v-8l-3-3" />
      </svg>
    );
  }

  if (name === "users2") {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 6.2a3 3 0 0 1 0 5.6" />
        <path d="M17 14.5a5.2 5.2 0 0 1 3.5 5" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...props}>
        <path d="M5 21V6l7-3 7 3v15" />
        <path d="M3 21h18" />
        <path d="M9 9h0M12 9h0M15 9h0M9 13h0M12 13h0M15 13h0" />
        <path d="M10 21v-4h4v4" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (name === "cap") {
    return (
      <svg {...props}>
        <path d="M12 4 2 9l10 5 10-5-10-5Z" />
        <path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" />
      </svg>
    );
  }

  if (name === "apartment") {
    return (
      <svg {...props}>
        <rect x="6" y="3" width="12" height="18" rx="1" />
        <path d="M3 21h18" />
        <path d="M9 7h0M12 7h0M15 7h0M9 11h0M12 11h0M15 11h0M9 15h0M15 15h0" />
        <path d="M11 21v-4h2v4" />
      </svg>
    );
  }

  if (name === "truck") {
    return (
      <svg {...props}>
        <path d="M2 6h11v9H2z" />
        <path d="M13 9h4l3 3v3h-7z" />
        <circle cx="6.5" cy="17.5" r="1.8" />
        <circle cx="17" cy="17.5" r="1.8" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </svg>
  );
}

function PrimaryButton({ href = DEMO_LINK, children, className = "" }) {
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

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div
      className={`software-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
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

function PageSection({ children, className = "", id }) {
  return (
    <section id={id} className={`software-section ${className}`}>
      <div className="software-container">{children}</div>
    </section>
  );
}

function ChargerMini({ active = false }) {
  return (
    <div className="relative mx-auto h-36 w-24">
      <div
        className={`absolute inset-x-4 top-0 h-full rounded-lg border bg-[#141414] ${active ? "border-[#16a34a]/55" : "border-[#2A2A2A]"}`}
      >
        <div className="mx-auto mt-4 h-3 w-10 rounded-sm bg-[#232323]" />
        <div className="mx-auto mt-4 h-12 w-10 rounded-md border border-[#2A2A2A] bg-[#0B0B0B]" />
        <div
          className={`absolute bottom-4 left-5 h-2 w-2 rounded-full ${active ? "bg-[#16a34a]" : "bg-[#303030]"}`}
        />
        <div className="absolute bottom-4 right-5 h-2 w-2 rounded-full bg-[#303030]" />
      </div>
      <div className="absolute bottom-8 right-0 h-12 w-10 rounded-br-full border-b border-r border-[#2A2A2A]" />
    </div>
  );
}

function PhoneMini() {
  return (
    <div className="software-phone">
      <div className="software-phone-frame">
        <div className="software-phone-speaker" />
        <div
          style={{
            position: "relative",
            height: "100%",
            overflow: "hidden",
            borderRadius: "32px",
          }}
        >
          <img
            src="https://res.cloudinary.com/diywraupt/image/upload/v1778762258/d60c7cfe-e7c3-40f4-a386-3082cbd21bbf.png"
            alt="Zvolta app screen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ variant = "operator", compact = false }) {
  const status = [
    ["Available", "28", "#16a34a"],
    ["In use", "12", "#FFFFFF"],
    ["Offline", "03", "#A1A1A1"],
  ];

  return (
    <div
      className={`software-dashboard rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 shadow-2xl ${compact ? "" : "md:p-6"}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#1F1F1F] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase text-[#16a34a]">
            {variant === "host"
              ? "Host dashboard"
              : variant === "enterprise"
                ? "Enterprise dashboard"
                : "Operator dashboard"}
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            Live charging network
          </p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="h-3 w-3 rounded-full bg-[#16a34a]" />
          <span className="h-3 w-3 rounded-full bg-white/35" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {status.map(([label, value, color]) => (
          <div
            key={label}
            className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-4"
          >
            <p className="text-xs text-[#A1A1A1]">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            <span
              className="mt-3 block h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Locations</p>
            <p className="text-xs text-[#A1A1A1]">Live</p>
          </div>
          <div className="mt-4 grid gap-3">
            {["Gulberg Station", "Mall Road", "University Site"].map(
              (site, index) => (
                <div
                  key={site}
                  className="flex items-center justify-between rounded-md bg-[#111111] p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{site}</p>
                    <p className="text-xs text-[#A1A1A1]">
                      {index + 2} chargers online
                    </p>
                  </div>
                  <span className="rounded-full bg-[#16a34a]/12 px-3 py-1 text-xs font-semibold text-[#16a34a]">
                    OK
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-4">
          <p className="text-sm font-semibold text-white">
            {variant === "host" ? "Earnings" : "Reports"}
          </p>
          <p className="mt-4 text-3xl font-semibold text-white">
            {variant === "host" ? "PKR 82k" : "18.4 MWh"}
          </p>
          <p className="mt-2 text-xs text-[#A1A1A1]">
            Sessions, energy, revenue, and impact records.
          </p>
          <div className="mt-5 flex h-28 items-end gap-2">
            {[42, 68, 52, 88, 76, 94].map((height, index) => (
              <span
                key={height}
                className={`flex-1 rounded-t-md ${index === 5 ? "bg-[#16a34a]" : "bg-white/16"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Diagram({ nodes }) {
  return (
    <div className="software-diagram software-stagger grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:grid-cols-4">
      {nodes.map((node, index) => (
        <div
          key={node}
          className="relative rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5"
        >
          <p className="text-sm font-semibold text-white">{node}</p>
          {index < nodes.length - 1 ? (
            <Icon
              name="arrow"
              className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#16a34a] md:block"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ComparisonColumn({ title, items, positive = false }) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8">
      <h3 className="text-[24px] font-semibold text-white">{title}</h3>
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${positive ? "bg-[#16a34a] text-black" : "bg-[#0B0B0B] text-[#A1A1A1]"}`}
            >
              <Icon name="check" className="h-4 w-4" />
            </span>
            <p className="text-sm font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  accent = "green",
  suffix,
}) {
  return (
    <label className="block">
      <span className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold text-white">
        <span>{label}</span>
        <span
          className={accent === "blue" ? "text-[#16a34a]" : "text-[#16a34a]"}
        >
          {suffix || value}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className={
          accent === "blue"
            ? "software-roi-range software-roi-range-blue"
            : "software-roi-range"
        }
      />
    </label>
  );
}

function ProjectionChart({ data, formatValue }) {
  const width = 640;
  const height = 260;
  const padding = { top: 18, right: 18, bottom: 32, left: 52 };
  const values = data.map((point) => point.cashFlow);
  const minValue = Math.min(0, ...values);
  const maxValue = Math.max(0, ...values);
  const span = maxValue - minValue || 1;

  const xFor = (index) =>
    padding.left +
    (index / (data.length - 1)) * (width - padding.left - padding.right);
  const yFor = (value) =>
    padding.top +
    ((maxValue - value) / span) * (height - padding.top - padding.bottom);

  const linePath = data
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(point.cashFlow)}`,
    )
    .join(" ");
  const areaPath = `${linePath} L ${xFor(data.length - 1)} ${yFor(0)} L ${xFor(0)} ${yFor(0)} Z`;
  const zeroY = yFor(0);
  const ticks = [0, 2, 4, 6, 8, 10];

  return (
    <div className="overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[280px] w-full"
        role="img"
        aria-label="10 year cumulative cash flow chart"
      >
        <defs>
          <linearGradient
            id="softwareRoiCashGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((ratio) => {
          const y =
            padding.top + ratio * (height - padding.top - padding.bottom);
          return (
            <line
              key={ratio}
              x1={padding.left}
              x2={width - padding.right}
              y1={y}
              y2={y}
              stroke="#1F1F1F"
            />
          );
        })}
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={zeroY}
          y2={zeroY}
          stroke="#65706C"
          strokeWidth="1.5"
        />
        <path d={areaPath} fill="url(#softwareRoiCashGradient)" />
        <path
          d={linePath}
          fill="none"
          stroke="#16a34a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {data.map((point, index) => (
          <circle
            key={point.year}
            cx={xFor(index)}
            cy={yFor(point.cashFlow)}
            r={index % 2 === 0 ? 4 : 0}
            fill="#16a34a"
          />
        ))}
        {ticks.map((tick) => (
          <text
            key={tick}
            x={xFor(tick)}
            y={height - 8}
            textAnchor="middle"
            fill="#A1A1A1"
            fontSize="12"
          >
            Y{tick}
          </text>
        ))}
        <text x="8" y={yFor(maxValue) + 4} fill="#A1A1A1" fontSize="11">
          {formatValue(maxValue)}
        </text>
        <text x="8" y={zeroY + 4} fill="#A1A1A1" fontSize="11">
          0
        </text>
      </svg>
    </div>
  );
}

function ModularRoiCalculator() {
  const [baseChargerCost, setBaseChargerCost] = useState(75000);
  const [marginPerUnit, setMarginPerUnit] = useState(15);
  const [primaryUsage, setPrimaryUsage] = useState(8);
  const [additionalChargers, setAdditionalChargers] = useState(0);
  const [usageAddon1, setUsageAddon1] = useState(4);
  const [usageAddon2, setUsageAddon2] = useState(2);

  const kwhPerHour = 1;
  const daysPerYear = 365;
  const costPerPair = 75000;

  const results = useMemo(() => {
    const totalCapEx = baseChargerCost + (additionalChargers / 2) * costPerPair;
    const primaryAnnualRevenue =
      primaryUsage * marginPerUnit * kwhPerHour * daysPerYear;
    const expansionARevenue =
      additionalChargers >= 2
        ? 2 * usageAddon1 * marginPerUnit * kwhPerHour * daysPerYear
        : 0;
    const expansionBRevenue =
      additionalChargers >= 4
        ? 2 * usageAddon2 * marginPerUnit * kwhPerHour * daysPerYear
        : 0;
    const totalAnnualRevenue =
      primaryAnnualRevenue + expansionARevenue + expansionBRevenue;
    const paybackYears =
      totalAnnualRevenue > 0 ? totalCapEx / totalAnnualRevenue : 0;
    const annualROI =
      totalCapEx > 0 ? (totalAnnualRevenue / totalCapEx) * 100 : 0;
    const chartData = Array.from({ length: 11 }, (_, year) => ({
      year,
      cashFlow: Math.round(-totalCapEx + totalAnnualRevenue * year),
    }));

    return {
      totalCapEx,
      primaryAnnualRevenue,
      expansionARevenue,
      expansionBRevenue,
      totalAnnualRevenue,
      monthlyRevenue: totalAnnualRevenue / 12,
      paybackYears,
      annualROI,
      chartData,
    };
  }, [
    additionalChargers,
    baseChargerCost,
    marginPerUnit,
    primaryUsage,
    usageAddon1,
    usageAddon2,
  ]);

  const compactPKR = (value) => `Rs.${Math.round(value / 1000)}k`;

  return (
    <section id="roi-calculator" className="software-section">
      <div className="software-container">
        <div className="grid gap-10">
          <div className="software-reveal mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase text-[#16a34a]">
              Estimate your earnings
            </p>
            <h2 className="text-[38px] font-semibold leading-[1.08] text-white md:text-[48px] lg:whitespace-nowrap">
              See how much your charging site can earn.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#A1A1A1]">
              Adjust charger cost, margin, and daily usage to model investment,
              annual revenue, payback time, and expansion returns.
            </p>
          </div>

          <div className="software-stagger grid gap-4 md:grid-cols-3">
            {[
              [
                "Annual revenue",
                formatPKR(results.totalAnnualRevenue),
                "chart",
              ],
              [
                "Payback time",
                `${results.paybackYears.toFixed(1)} years`,
                "clock",
              ],
              ["Annual ROI", `${results.annualROI.toFixed(1)}%`, "wallet"],
            ].map(([label, value, icon]) => (
              <div
                key={label}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                  <Icon name={icon} className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase text-[#A1A1A1]">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="software-reveal w-full rounded-lg border border-[#1F1F1F] bg-[#111111] p-5 md:p-8">
            <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
              <div className="grid gap-5">
                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5">
                  <div className="mb-5 flex items-center gap-3 border-b border-[#1F1F1F] pb-4">
                    <Icon name="chart" className="h-5 w-5 text-[#16a34a]" />
                    <h3 className="text-lg font-semibold text-white">
                      Base setup
                    </h3>
                  </div>
                  <div className="grid gap-6">
                    <RangeField
                      label="Primary charger cost"
                      min={30000}
                      max={150000}
                      step={5000}
                      value={baseChargerCost}
                      onChange={setBaseChargerCost}
                      suffix={formatPKR(baseChargerCost)}
                    />
                    <RangeField
                      label="Margin per unit"
                      min={5}
                      max={100}
                      step={1}
                      value={marginPerUnit}
                      onChange={setMarginPerUnit}
                      suffix={`Rs. ${marginPerUnit}`}
                    />
                    <RangeField
                      label="Primary usage"
                      min={1}
                      max={24}
                      step={1}
                      value={primaryUsage}
                      onChange={setPrimaryUsage}
                      suffix={`${primaryUsage} hrs/day`}
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5">
                  <div className="mb-5 flex items-center gap-3 border-b border-[#1F1F1F] pb-4">
                    <Icon name="layers" className="h-5 w-5 text-[#16a34a]" />
                    <h3 className="text-lg font-semibold text-white">
                      Modular expansion
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 2, 4].map((value) => (
                      <button
                        type="button"
                        key={value}
                        onClick={() => setAdditionalChargers(value)}
                        className={`min-h-11 rounded-lg border px-3 text-sm font-semibold transition duration-300 ${
                          additionalChargers === value
                            ? "border-[#16a34a] bg-[#16a34a] text-black"
                            : "border-[#1F1F1F] bg-[#111111] text-white hover:border-[#16a34a]/70"
                        }`}
                      >
                        {value === 0 ? "None" : `${value} units`}
                      </button>
                    ))}
                  </div>
                  {additionalChargers >= 2 ? (
                    <div className="mt-6 rounded-lg border border-[#1F1F1F] bg-[#111111] p-4">
                      <RangeField
                        label="Usage chargers 2-3"
                        min={0}
                        max={24}
                        step={0.5}
                        value={usageAddon1}
                        onChange={setUsageAddon1}
                        accent="blue"
                        suffix={`${usageAddon1} hrs/day`}
                      />
                    </div>
                  ) : null}
                  {additionalChargers >= 4 ? (
                    <div className="mt-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-4">
                      <RangeField
                        label="Usage chargers 4-5"
                        min={0}
                        max={24}
                        step={0.5}
                        value={usageAddon2}
                        onChange={setUsageAddon2}
                        accent="blue"
                        suffix={`${usageAddon2} hrs/day`}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="rounded-lg border border-[#16a34a]/30 bg-[#06130F] p-5">
                  <p className="text-xs font-semibold uppercase text-[#16a34a]">
                    Total investment
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {formatPKR(results.totalCapEx)}
                  </p>
                  <div className="mt-4 grid gap-2 border-t border-[#16a34a]/15 pt-4 text-xs">
                    <div className="flex justify-between gap-4 text-[#A1A1A1]">
                      <span>Base unit</span>
                      <span className="text-white">
                        {formatPKR(baseChargerCost)}
                      </span>
                    </div>
                    {additionalChargers > 0 ? (
                      <div className="flex justify-between gap-4 text-[#A1A1A1]">
                        <span>{additionalChargers} add-ons</span>
                        <span className="text-[#16a34a]">
                          +{formatPKR((additionalChargers / 2) * costPerPair)}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5">
                  <p className="text-sm font-semibold text-[#A1A1A1]">
                    Monthly earnings
                  </p>
                  <p className="mt-4 text-[42px] font-semibold leading-none text-white md:text-[56px]">
                    {formatPKR(results.monthlyRevenue)}
                  </p>
                </div>

                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5">
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-white">
                      Breakeven projection
                    </h3>
                    <p className="mt-1 text-sm text-[#A1A1A1]">
                      Cumulative cash flow over 10 years
                    </p>
                  </div>
                  <ProjectionChart
                    data={results.chartData}
                    formatValue={compactPKR}
                  />
                </div>

                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5">
                  <h3 className="text-xs font-semibold uppercase text-[#A1A1A1]">
                    Revenue breakdown
                  </h3>
                  <div className="mt-5 grid gap-4 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#A1A1A1]">Primary charger</span>
                      <span className="font-semibold text-white">
                        {formatPKR(results.primaryAnnualRevenue)} / yr
                      </span>
                    </div>
                    {additionalChargers >= 2 ? (
                      <div className="flex items-center justify-between gap-4 border-t border-[#1F1F1F] pt-4">
                        <span className="text-[#A1A1A1]">Expansion set A</span>
                        <span className="font-semibold text-[#16a34a]">
                          {formatPKR(results.expansionARevenue)} / yr
                        </span>
                      </div>
                    ) : null}
                    {additionalChargers >= 4 ? (
                      <div className="flex items-center justify-between gap-4 border-t border-[#1F1F1F] pt-4">
                        <span className="text-[#A1A1A1]">Expansion set B</span>
                        <span className="font-semibold text-[#16a34a]">
                          {formatPKR(results.expansionBRevenue)} / yr
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* 
                <SecondaryButton href="/roi-calculator" className="w-fit">
                  Open full ROI calculator
                </SecondaryButton> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const connectedNodes = [
  {
    icon: "phone",
    title: "Driver App",
    copy: "Find stations, start charging, and pay.",
    pos: "left-[25%] top-[19%]",
  },
  {
    icon: "store",
    title: "Host Portal",
    copy: "Manage locations, chargers & revenue.",
    pos: "left-1/2 top-[19%]",
  },
  {
    icon: "shield",
    title: "Admin Dashboard",
    copy: "Monitor operations, users & performance.",
    pos: "left-[75%] top-[19%]",
  },
  {
    icon: "station",
    title: "EV Chargers",
    copy: "Connected, monitored & always ready.",
    pos: "left-[16%] top-1/2",
  },
  {
    icon: "wallet",
    title: "Wallet System",
    copy: "Secure payments, payouts & settlements.",
    pos: "left-[84%] top-1/2",
  },
  {
    icon: "calendar",
    title: "Booking Engine",
    copy: "Reserve slots, manage schedules.",
    pos: "left-[32%] top-[80%]",
  },
  {
    icon: "bars",
    title: "Analytics Dashboard",
    copy: "Real-time insights, reports & trends.",
    pos: "left-[68%] top-[80%]",
  },
];

function ConnectedNodeCard({ icon, title, copy }) {
  return (
    <div className="flex w-full items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#16a34a]/12 text-[#16a34a]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-base font-semibold text-[#0B0B0B]">{title}</p>
        <p className="mt-1 text-sm leading-5 text-[#6B7280]">{copy}</p>
      </div>
    </div>
  );
}

function ConnectedHub() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0B0B] px-10 py-8 text-center shadow-2xl">
      <img
        src="/img/symbol logo.png"
        alt="Zvolta"
        className="h-12 w-auto object-contain"
        loading="lazy"
      />
      <p className="mt-2 text-xl font-semibold text-white">Zvolta Software</p>
      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-xs font-semibold text-white">
        <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
        Cloud Platform
      </span>
    </div>
  );
}

function EverythingConnected() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#F7F8F8] py-24 md:py-32">
      <div className="software-container">
        <div className="software-reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-sm font-semibold text-[#111111]">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
              Everything Connected
            </span>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[52px]">
              Everything Connected
              <br />
              Through <span className="text-[#16a34a]">One Platform</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#4B5563] md:text-lg">
              Zvolta connects EV drivers, site hosts, charging stations, and
              operators through a single cloud-based system.
            </p>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6B7280] lg:border-l lg:border-[#E5E7EB] lg:pl-8 lg:pt-2">
            From charger access and QR-based charging to payments, reporting,
            and host revenue tracking, the platform brings every part of the
            charging journey into one connected ecosystem.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="relative mt-16 hidden aspect-[1200/720] w-full lg:block">
          <svg
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* top row into hub top */}
              <path d="M300 205 V250 H540 V285" />
              <path d="M600 205 V285" />
              <path d="M900 205 V250 H660 V285" />
              {/* sides into hub */}
              <path d="M348 360 H450" />
              <path d="M852 360 H750" />
              {/* bottom row into hub bottom */}
              <path d="M384 513 V470 H540 V435" />
              <path d="M816 513 V470 H660 V435" />
            </g>
            <g fill="#16a34a">
              <circle cx="300" cy="205" r="5" />
              <circle cx="600" cy="205" r="5" />
              <circle cx="900" cy="205" r="5" />
              <circle cx="348" cy="360" r="5" />
              <circle cx="852" cy="360" r="5" />
              <circle cx="384" cy="513" r="5" />
              <circle cx="816" cy="513" r="5" />
            </g>
          </svg>

          {connectedNodes.map((node) => (
            <div
              key={node.title}
              className={`absolute w-[260px] -translate-x-1/2 -translate-y-1/2 ${node.pos}`}
            >
              <ConnectedNodeCard {...node} />
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2">
            <ConnectedHub />
          </div>
        </div>

        {/* Mobile / tablet stacked */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          <div className="sm:col-span-2">
            <ConnectedHub />
          </div>
          {connectedNodes.map((node) => (
            <ConnectedNodeCard key={node.title} {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}

const controlFeatures = [
  [
    "chart",
    "Real-Time Charger Monitoring",
    "Track charger and switch status across all connected locations.",
  ],
  [
    "doc",
    "Session Management",
    "View active and completed charging sessions with user, station, switch, and energy details.",
  ],
  [
    "wallet",
    "Wallet & Payments",
    "Manage user payments, wallet balances, revenue flow, and transaction history.",
  ],
  [
    "tag",
    "Dynamic Pricing",
    "Set and manage charging prices across stations, hosts, or charger types.",
  ],
  [
    "bars",
    "Revenue Tracking",
    "Monitor daily, monthly, and station-wise revenue from one dashboard.",
  ],
  [
    "pie",
    "Utilization Analytics",
    "Understand how often chargers are being used and where demand is growing.",
  ],
  [
    "sliders",
    "Remote Station Control",
    "Manage station availability and switch-level activity without manual supervision.",
  ],
  [
    "leaf",
    "Impact Analytics",
    "Track energy delivered, estimated fuel offset, and CO₂ savings.",
  ],
];

function ControlNetwork() {
  return (
    <section className="border-b border-[#1F1F1F] bg-[#0B0B0B] py-24 md:py-32">
      <div className="software-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="software-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
              Section 04
            </span>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[52px]">
              Control Your Entire
              <br />
              <span className="text-[#16a34a]">Charging Network</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#A1A1A1] md:text-lg">
              Monitor charger status, charging sessions, revenue, users, and
              energy usage from one operational dashboard.
            </p>

            <div className="software-stagger mt-9 grid gap-4">
              {controlFeatures.map(([icon, title, copy]) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#1F1F1F] bg-[#111111] p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1A1]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#1F1F1F] bg-[#111111] p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Secure. Scalable. Built for Real Operations.
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#A1A1A1]">
                  Enterprise-grade reliability for networks of any size.
                </p>
              </div>
            </div>
          </div>

          <div className="software-reveal relative lg:sticky lg:top-24">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[#16a34a]/10 blur-[80px]" />
            <div className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#0E0E0E] shadow-2xl">
              <img
                src="https://res.cloudinary.com/diywraupt/image/upload/v1782466538/ChatGPT_Image_Jun_26_2026_02_35_28_PM_rybuuk.png"
                alt="Zvolta operational dashboard showing chargers, sessions, revenue, and analytics"
                className="block w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactLineChart() {
  const pts = [
    [0, 70],
    [20, 58],
    [40, 44],
    [60, 50],
    [80, 30],
    [100, 14],
  ];
  const path = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 80"
      preserveAspectRatio="none"
      className="h-24 w-full"
    >
      <defs>
        <linearGradient id="impactLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 80 L 0 80 Z`} fill="url(#impactLine)" />
      <path
        d={path}
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {pts.map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="1.6"
          fill="#16a34a"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function ImpactBarChart() {
  const bars = [52, 86, 60, 70, 96];
  return (
    <div className="flex h-24 items-end gap-3">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t bg-[#16a34a]"
          style={{ height: `${h}%`, opacity: 0.55 + i * 0.09 }}
        />
      ))}
    </div>
  );
}

const impactChartLabels = ["Apr 19", "Apr 26", "May 03", "May 10", "May 17"];

const impactBigCards = [
  {
    icon: "bolt",
    title: "Energy Delivered",
    value: "1,245,680",
    unit: "kWh",
    delta: "+18.6%",
    chart: "line",
    footLabel: "Total This Month",
    footValue: "1.25 MWh",
  },
  {
    icon: "fuel",
    title: "Fuel Offset",
    value: "142,680",
    unit: "L",
    delta: "+16.2%",
    chart: "bar",
    footLabel: "Petrol Equivalent",
    footValue: "142.68 KL",
  },
  {
    icon: "leaf",
    title: "CO₂ Avoided",
    value: "385,420",
    unit: "kg",
    delta: "+20.4%",
    chart: "line",
    footLabel: "Total This Month",
    footValue: "385.42 t",
  },
];

const impactFlow = [
  ["bolt", "kWh Delivered", "Total energy delivered across your network."],
  ["fuel", "Fuel Offset", "Estimated fuel savings achieved."],
  ["leaf", "CO₂ Avoided", "Carbon emissions successfully avoided."],
  ["doc", "Impact Report", "Share insights with your team or stakeholders."],
];

const impactBottomCards = [
  [
    "bolt",
    "Energy Delivered",
    "Track total kWh consumed across chargers and locations in real time.",
  ],
  [
    "fuel",
    "Fuel Offset",
    "Estimate how much petrol or diesel was displaced by EV charging.",
  ],
  [
    "leaf",
    "CO₂ Avoided",
    "Measure the carbon impact of EV charging adoption with accurate calculations.",
  ],
  [
    "users2",
    "Employees and Fleet Reporting",
    "Support internal reporting for offices, corporate fleets, and employee programs.",
  ],
];

const impactNav = [
  ["layers", "Overview"],
  ["station", "Chargers"],
  ["clock", "Sessions"],
  ["user", "Users"],
  ["wallet", "Finance"],
  ["bars", "Reports"],
  ["leaf", "Impact"],
  ["gear", "Settings"],
];

function ImpactDashboard() {
  return (
    <div className="grid grid-cols-[112px_1fr] bg-white text-[#0B0B0B]">
      {/* Sidebar */}
      <aside className="flex flex-col border-r border-[#ECECEC] p-3">
        <img
          src="/img/symbol logo.png"
          alt="Zvolta"
          className="mb-4 h-6 w-fit object-contain"
          loading="lazy"
        />
        <nav className="grid gap-0.5">
          {impactNav.map(([icon, label]) => (
            <span
              key={label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium ${
                label === "Impact"
                  ? "bg-[#16a34a]/12 text-[#16a34a]"
                  : "text-[#6B7280]"
              }`}
            >
              <Icon name={icon} className="h-3 w-3" />
              {label}
            </span>
          ))}
        </nav>
        <span className="mt-auto flex items-center gap-2 px-2 pt-3 text-[10px] font-medium text-[#9CA3AF]">
          <Icon name="arrow" className="h-3 w-3 rotate-180" />
          Log out
        </span>
      </aside>

      {/* Main */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-bold text-[#0B0B0B]">Impact Overview</p>
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-[#ECECEC] px-2 py-1 text-[9px] text-[#6B7280]">
              Apr 19 – May 17
            </span>
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#16a34a] to-[#0B0B0B]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {impactBigCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] p-2.5"
            >
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded bg-[#16a34a]/12 text-[#16a34a]">
                  <Icon name={card.icon} className="h-3 w-3" />
                </span>
                <p className="text-[10px] font-semibold text-[#0B0B0B]">
                  {card.title}
                </p>
              </div>
              <p className="mt-2 text-[15px] font-bold leading-none text-[#0B0B0B]">
                {card.value}
                <span className="ml-0.5 text-[9px] font-medium text-[#9CA3AF]">
                  {card.unit}
                </span>
              </p>
              <p className="mt-1 text-[8px] text-[#16a34a]">
                {card.delta}{" "}
                <span className="text-[#9CA3AF]">vs last month</span>
              </p>
              <div className="mt-2">
                {card.chart === "line" ? (
                  <ImpactLineChart />
                ) : (
                  <ImpactBarChart />
                )}
                <div className="mt-1 flex justify-between text-[6px] text-[#9CA3AF]">
                  {impactChartLabels.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
              </div>
              <div className="mt-2 border-t border-[#EFEFEF] pt-1.5">
                <p className="text-[8px] text-[#9CA3AF]">{card.footLabel}</p>
                <p className="text-[11px] font-bold text-[#0B0B0B]">
                  {card.footValue}
                </p>
              </div>
            </div>
          ))}

          {/* Impact Report */}
          <div className="flex flex-col rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] p-2.5">
            <div className="flex items-center gap-1.5">
              <span className="grid h-5 w-5 place-items-center rounded bg-[#16a34a]/12 text-[#16a34a]">
                <Icon name="doc" className="h-3 w-3" />
              </span>
              <p className="text-[10px] font-semibold text-[#0B0B0B]">
                Impact Report
              </p>
            </div>
            <p className="mt-2 text-[9px] leading-4 text-[#6B7280]">
              Generate and download impact insights and share with your team or
              stakeholders.
            </p>
            <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-md border border-[#ECECEC] px-2 py-1 text-[9px] font-semibold text-[#0B0B0B]">
              View Report
              <Icon name="arrow" className="h-2.5 w-2.5 text-[#16a34a]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactLaptop() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#16a34a]/12 blur-[90px]" />
      {/* Screen */}
      <div className="overflow-hidden rounded-t-xl border-[8px] border-b-0 border-[#1A1A1A] bg-white shadow-2xl">
        <ImpactDashboard />
      </div>
      {/* Hinge / base */}
      <div className="relative h-3 rounded-b-md bg-[#1A1A1A]">
        <span className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-md bg-[#0E0E0E]" />
      </div>
      <div className="mx-auto h-1.5 w-[112%] -translate-x-[5.3%] rounded-b-xl bg-gradient-to-b from-[#2A2A2A] to-[#151515]" />
    </div>
  );
}

function ImpactIntelligence() {
  return (
    <>
      {/* Dark hero block */}
      <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-28">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[560px] w-[560px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#16a34a]/10 blur-[120px]" />
        <div className="software-container relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="software-reveal">
              <span className="inline-flex items-center gap-3 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
                <span className="text-[#16a34a]">05</span>
                <span className="h-3 w-px bg-[#2A2A2A]" />
                Impact Intelligence
              </span>
              <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[56px]">
                Measure More
                <br />
                <span className="text-[#16a34a]">Than Revenue</span>
              </h2>
              <p className="mt-6 max-w-md text-lg font-medium leading-7 text-white">
                Track the environmental and operational impact of every charging
                session.
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-[#A1A1A1]">
                Zvolta helps businesses understand the real impact of their EV
                charging network through clear reports that show energy
                delivered, fuel displaced, carbon emissions avoided, and EV
                adoption trends.
              </p>
            </div>

            <div className="software-hero-visual">
              <ImpactLaptop />
            </div>
          </div>
        </div>
      </section>

      {/* Light block */}
      <section className="border-b border-[#E5E7EB] bg-white py-16 md:py-20">
        <div className="software-container">
          {/* Flow card */}
          <div className="software-stagger grid items-start gap-y-10 rounded-2xl border border-[#E5E7EB] p-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:p-10">
            {impactFlow.map(([icon, label, copy], i) => (
              <Fragment key={label}>
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#16a34a]/12 text-[#16a34a]">
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-base font-semibold text-[#0B0B0B]">
                    {label}
                  </p>
                  <p className="mt-1 max-w-[180px] text-sm leading-5 text-[#6B7280]">
                    {copy}
                  </p>
                </div>
                {i < impactFlow.length - 1 ? (
                  <Icon
                    name="arrow"
                    className="mx-auto hidden h-5 w-5 self-center text-[#9CA3AF] sm:block"
                  />
                ) : null}
              </Fragment>
            ))}
          </div>

          {/* Bottom cards */}
          <div className="software-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactBottomCards.map(([icon, title, copy]) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-[#E5E7EB] p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#16a34a]/12 text-[#16a34a]">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0B]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#6B7280]">
                  {copy}
                </p>
                <span className="mt-6 h-1 w-14 rounded-full bg-[#16a34a]" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const chargingModels = [
  [
    "building",
    "Commercial Buildings",
    "Offer managed charging access for tenants, visitors, and employees.",
  ],
  [
    "briefcase",
    "Corporate Offices",
    "Support workplace EV charging with usage and reporting visibility.",
  ],
  ["cap", "Universities", "Manage charging access across campus locations."],
  [
    "apartment",
    "Apartment Buildings",
    "Enable residents to charge conveniently with controlled access and payments.",
  ],
  [
    "fuel",
    "Petrol Pumps",
    "Add EV charging as a new revenue stream at existing fuel stations.",
  ],
  [
    "truck",
    "Fleet Operators",
    "Track fleet charging activity, consumption, and usage patterns.",
  ],
];

function CityScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 130"
      fill="none"
      stroke="#16a34a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* ground */}
      <path d="M8 120h404" stroke="#16a34a" strokeOpacity="0.5" />
      {/* charger */}
      <rect x="18" y="78" width="22" height="42" rx="3" strokeOpacity="0.85" />
      <path d="M27 90l-4 8h6l-4 8" strokeOpacity="0.85" />
      <path d="M40 92h10v14a6 6 0 0 1-12 0" strokeOpacity="0.7" />
      {/* car */}
      <path d="M70 120v-8c0-2 1-3 3-4l8-9c2-2 4-3 7-3h20c3 0 5 1 7 3l9 9c2 1 3 2 3 5v7" />
      <path d="M70 112h87" strokeOpacity="0.5" />
      <circle cx="90" cy="120" r="8" />
      <circle cx="140" cy="120" r="8" />
      {/* skyline */}
      <path d="M190 120V70h26v50" strokeOpacity="0.7" />
      <path d="M222 120V52h30v68" strokeOpacity="0.85" />
      <path d="M258 120V84h24v36" strokeOpacity="0.6" />
      <path d="M288 120V44h28v76" strokeOpacity="0.9" />
      <path d="M322 120V72h22v48" strokeOpacity="0.7" />
      <path d="M350 120V60h26v60" strokeOpacity="0.8" />
      {/* windows */}
      <path
        d="M229 64h0M239 64h0M229 76h0M239 76h0M229 88h0M239 88h0M296 58h0M306 58h0M296 72h0M306 72h0M296 86h0M306 86h0M358 74h0M368 74h0M358 88h0M368 88h0"
        strokeOpacity="0.6"
      />
      {/* tree */}
      <path d="M392 120v-16" strokeOpacity="0.7" />
      <circle cx="392" cy="98" r="9" strokeOpacity="0.7" />
    </svg>
  );
}

function EveryChargingModel() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#F7F8F8] py-24 md:py-28">
      <div className="software-container">
        <div className="software-reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-sm font-semibold text-[#16a34a]">
            Built for Every Model
          </span>
          <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[56px]">
            Designed for{" "}
            <span className="text-[#16a34a]">Every Charging Model</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#4B5563] md:text-lg">
            Whether you are managing one charger or building a wider network,
            Zvolta software adapts to your charging setup.
          </p>
        </div>

        <div className="software-stagger mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chargingModels.map(([icon, title, copy]) => (
            <article
              key={title}
              className="flex items-start gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-7 transition duration-300 hover:border-[#16a34a]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
                <Icon name={icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0B0B]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{copy}</p>
                <span className="mt-4 block h-1 w-12 rounded-full bg-[#16a34a]" />
              </div>
            </article>
          ))}
        </div>

        {/* Retail / public infra banner */}
        <div className="software-reveal mt-5 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
          <div className="grid items-center gap-6 md:grid-cols-[1.1fr_1fr]">
            <div className="flex items-start gap-5 p-7 md:p-8">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0B0B]">
                  Retail Locations &amp; Public Infrastructure
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#6B7280]">
                  Attract EV users while tracking charger revenue and
                  utilization with centralized software control.
                </p>
              </div>
            </div>
            <CityScene className="h-32 w-full px-6 pb-2 md:pr-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SoftwarePage() {
  const pageRef = useRef(null);
  const [smartState, setSmartState] = useState(smartSteps[0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !pageRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".software-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".software-hero-visual", {
        opacity: 0,
        y: 32,
        scale: 0.97,
        duration: 0.9,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.from(".software-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        delay: 0.55,
        ease: "power2.out",
      });

      gsap.utils.toArray(".software-reveal").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 84%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.72,
                ease: "power3.out",
                clearProps: "opacity,transform",
              },
            );
          },
        });
      });

      gsap.utils.toArray(".software-stagger").forEach((group) => {
        ScrollTrigger.create({
          trigger: group,
          start: "top 84%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              group.children,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.07,
                ease: "power3.out",
                clearProps: "opacity,transform",
              },
            );
          },
        });
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.utils.toArray(".software-smart-step").forEach((step) => {
            ScrollTrigger.create({
              trigger: step,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                const index = Number(step.dataset.index || 0);
                setSmartState(smartSteps[index] || smartSteps[0]);
              },
              onEnterBack: () => {
                const index = Number(step.dataset.index || 0);
                setSmartState(smartSteps[index] || smartSteps[0]);
              },
            });
          });
        },
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style data-page-style="software-page">{`
        .software-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: clip;
        }

        .software-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .software-section {
          position: relative;
          z-index: 1;
          padding: 120px 0;
          border-bottom: 1px solid #1F1F1F;
          background: #0B0B0B;
        }

        .software-smart-section {
          position: relative;
          z-index: 1;
          overflow: clip;
          background: #0B0B0B;
        }

        .software-smart-visual {
          position: relative;
          z-index: 1;
        }

        .software-story-scroll {
          scrollbar-width: none;
        }

        .software-story-scroll::-webkit-scrollbar {
          display: none;
        }

        .software-roi-range {
          width: 100%;
          height: 8px;
          appearance: none;
          border-radius: 999px;
          background: #1F1F1F;
          cursor: pointer;
          accent-color: #16a34a;
        }

        .software-roi-range::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          appearance: none;
          border-radius: 999px;
          border: 3px solid #0B0B0B;
          background: #16a34a;
          box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.45);
        }

        .software-roi-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border: 3px solid #0B0B0B;
          border-radius: 999px;
          background: #16a34a;
          box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.45);
        }

        .software-roi-range-blue {
          accent-color: #16a34a;
        }

        .software-roi-range-blue::-webkit-slider-thumb {
          background: #16a34a;
          box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.45);
        }

        .software-roi-range-blue::-moz-range-thumb {
          background: #16a34a;
          box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.45);
        }

        .software-phone {
          width: min(300px, 82vw);
          margin: 0 auto;
        }

        .software-phone-frame {
          position: relative;
          aspect-ratio: 10 / 19;
          border-radius: 42px;
          border: 1px solid #2A2A2A;
          background: #050505;
          padding: 12px;
          box-shadow:
            inset 0 0 0 2px rgba(255,255,255,0.04),
            0 28px 80px rgba(0,0,0,0.42);
        }

        .software-phone-speaker {
          position: absolute;
          top: 21px;
          left: 50%;
          z-index: 4;
          width: 78px;
          height: 21px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #050505;
        }

        .software-phone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 32px;
          background: white;
          padding: 46px 16px 20px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 767px) {
          .software-container {
            padding: 0 18px;
          }

          .software-section {
            padding: 84px 0;
          }
        }

        @media (min-width: 1024px) {
          .software-smart-visual {
            position: sticky;
            top: 112px;
            align-self: start;
            max-height: calc(100vh - 136px);
            overflow: hidden;
          }
        }
      `}</style>

      <div ref={pageRef} className="software-page font-sans">
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 pb-28 md:pt-40 md:pb-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
          <div className="software-container relative grid gap-12 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="software-hero-copy max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                Zvolta Software
              </span>
              <h1 className="mt-6 text-[42px] font-semibold leading-[1.03] text-white md:text-[62px]">
                EV Charging Software Built for{" "}
                <span className="text-[#16a34a]">Real Operations</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                Manage chargers, users, bookings, payments, revenue, and energy
                insights from one unified platform.
              </p>
              <div className="mt-9 mb-14 flex flex-col gap-3 sm:mb-16 sm:flex-row lg:mb-20">
                <PrimaryButton href={DEMO_LINK}>Book a Demo</PrimaryButton>
                <SecondaryButton href={CONTACT_LINK}>
                  Explore Platform
                </SecondaryButton>
              </div>
            </div>

            <div className="software-hero-visual">
              <img
                src="/img/Host/laptop.png"
                alt="Zvolta EV charging software dashboard on a laptop"
                className="w-full max-w-2xl drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="software-container relative mt-20 md:mt-24">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["node", "Real-time charger monitoring"],
                ["wallet", "Wallet and payment management"],
                ["bolt", "Dynamic pricing control"],
                ["chart", "Network-wide reporting"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex flex-col gap-3 rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#0B0B0B] text-[#16a34a]">
                    <Icon name={icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#E5E7EB] bg-white py-24 md:py-32">
          <div className="software-container">
            <div className="software-reveal max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-sm font-semibold text-[#111111]">
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                Trusted by EV operators
              </span>
              <h2 className="mt-7 text-[44px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[56px]">
                Built for Growing
                <br />
                <span className="text-[#16a34a]">Charging Networks</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#4B5563] md:text-lg">
                Zvolta helps businesses launch and manage EV charging operations
                with software that keeps every charger, user, and transaction
                connected.
              </p>
            </div>

            <div className="software-stagger mt-14 grid divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {[
                ["station", "13+", "Chargers Installed"],
                ["plug", "1,500+", "Charging Sessions"],
                ["user", "200+", "Active Users"],
                ["pin", "12+", "Locations Connected"],
              ].map(([icon, value, label]) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-6 py-12 text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#16a34a]/12 text-[#16a34a]">
                    <Icon name={icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-6 text-[44px] font-bold leading-none tracking-tight text-[#0B0B0B]">
                    {value}
                  </p>
                  <p className="mt-3 text-base font-medium text-[#4B5563]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EverythingConnected />

        <ControlNetwork />

        <ImpactIntelligence />

        <EveryChargingModel />

        {/* Sections below "Built for Every Model" are hidden per request */}
        {false && (
          <>
            <PageSection>
              <SectionIntro
                eyebrow="Who this is for"
                title="Built for teams launching or managing EV charging."
                copy="For companies that want to manage EV chargers without building their own software from scratch."
              />
              <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {audienceCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/45"
                  >
                    <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                      <Icon name="node" className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Book a consultation
              </PrimaryButton>
            </PageSection>

            <PageSection id="features">
              <SectionIntro
                eyebrow="What the software does"
                title="One system for the full charging journey."
                copy="The platform connects the charger, app, payments, users, and dashboard, so the full experience works smoothly. It gives operators EV charging software, an EV charger dashboard, charging payments, and charging network management in one place."
              />
              <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {platformFeatures.map(([title, copy], index) => (
                  <article
                    key={title}
                    className={`rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 ${index < 2 ? "lg:col-span-2" : ""}`}
                  >
                    <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                      <Icon
                        name={index === 0 ? "bolt" : "check"}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="text-[24px] font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
              <SecondaryButton href="#features" className="mt-10">
                See platform features
              </SecondaryButton>
            </PageSection>

            <section className="software-smart-section border-b border-[#1F1F1F] py-[120px]">
              <div className="software-container">
                <SectionIntro
                  eyebrow="Make any charger Smart"
                  title="A normal charger only gives power."
                  copy="With Zvolta software, it can connect to the app, start sessions with QR, handle payments, show live status, and send data to a dashboard. This is smart EV charger software for real charging operations."
                />
                <div className="software-smart-grid mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div className="software-smart-steps grid gap-6">
                    {smartSteps.map((step, index) => (
                      <article
                        key={step.title}
                        data-index={index}
                        onMouseEnter={() => setSmartState(step)}
                        className="software-smart-step rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 lg:min-h-[220px]"
                      >
                        <p className="text-xs font-semibold text-[#16a34a]">
                          0{index + 1}
                        </p>
                        <h3 className="mt-5 text-[24px] font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                          {step.copy}
                        </p>
                      </article>
                    ))}
                    <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
                  </div>

                  <div className="software-smart-visual top-28">
                    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
                      <div className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-center">
                        <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-6">
                          <ChargerMini
                            active={smartState.state !== "Power only"}
                          />
                          <p className="mt-5 text-center text-sm font-semibold text-white">
                            {smartState.state}
                          </p>
                        </div>
                        <div>
                          <div className="rounded-lg border border-[#16a34a]/35 bg-[#16a34a]/10 p-5">
                            <p className="text-xs font-semibold uppercase text-[#16a34a]">
                              Active software state
                            </p>
                            <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                              {smartState.title}
                            </p>
                            <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                              {smartState.copy}
                            </p>
                            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#16a34a]/20 pt-4">
                              {[
                                ["28", "Available"],
                                ["12", "In use"],
                                ["03", "Offline"],
                              ].map(([val, label]) => (
                                <div
                                  key={label}
                                  className="rounded-lg bg-[#06130F] p-3 text-center"
                                >
                                  <p className="text-xl font-semibold text-white">
                                    {val}
                                  </p>
                                  <p className="mt-1 text-[10px] text-[#A1A1A1]">
                                    {label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="software-stagger mt-5 grid gap-3 sm:grid-cols-2">
                            {smartChips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-sm font-semibold text-white"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <PageSection>
              <SectionIntro
                eyebrow="Built on OCPP"
                title="Built for OCPP-ready charging."
                copy="OCPP means Open Charge Point Protocol. It is the common language that helps chargers connect with charging software, so Zvolta can work as OCPP charging software for compatible hardware."
              />
              <p className="software-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                This helps operators connect hardware, manage chargers, and grow
                their network without being locked into one setup.
              </p>
              <div className="mt-12">
                <Diagram
                  nodes={[
                    "Charger",
                    "OCPP",
                    "Zvolta Platform",
                    "App, Dashboard, Payments",
                  ]}
                />
              </div>
              <SecondaryButton href="#features" className="mt-10">
                Check OCPP compatibility
              </SecondaryButton>
            </PageSection>

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <div>
                  <SectionIntro
                    eyebrow="For EV users"
                    title="A simple app experience for EV users."
                    copy="Users can find nearby chargers, check availability, view pricing, scan the QR code, start charging, pay, and see their session history without manual help."
                  />
                  <div className="software-stagger mt-8 grid gap-3 sm:grid-cols-2">
                    {userPoints.map((point) => (
                      <FeaturePill key={point}>{point}</FeaturePill>
                    ))}
                  </div>
                  <SecondaryButton href="/charge" className="mt-9">
                    View app experience
                  </SecondaryButton>
                </div>
                <div className="software-reveal">
                  <PhoneMini />
                </div>
              </div>
            </PageSection>

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div>
                  <SectionIntro
                    eyebrow="For hosts"
                    title="A clear dashboard for site hosts."
                    copy="Hosts can track sessions, earnings, usage, availability, pricing, and charger status from one place. They do not need staff at the charger."
                  />
                  <div className="software-stagger mt-8 grid gap-3 sm:grid-cols-2">
                    {hostPoints.map((point) => (
                      <FeaturePill key={point}>{point}</FeaturePill>
                    ))}
                  </div>
                  <SecondaryButton href="/host" className="mt-9">
                    See host dashboard
                  </SecondaryButton>
                </div>
                <DashboardMockup variant="host" />
              </div>
            </PageSection>

            <ModularRoiCalculator />

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div>
                  <SectionIntro
                    eyebrow="For enterprises"
                    title="Manage many chargers from one place."
                    copy="Operators can monitor performance, control access, review revenue, manage pricing, and see reports across their whole network. The app and dashboard work together as an EV charging app for operators."
                  />
                  <div className="software-stagger mt-8 grid gap-3 sm:grid-cols-2">
                    {enterprisePoints.map((point) => (
                      <FeaturePill key={point}>{point}</FeaturePill>
                    ))}
                  </div>
                  <PrimaryButton href={DEMO_LINK} className="mt-9">
                    Book enterprise demo
                  </PrimaryButton>
                </div>
                <DashboardMockup variant="enterprise" />
              </div>
            </PageSection>

            <PageSection>
              <SectionIntro
                eyebrow="Payments built in"
                title="Payments are built into the flow."
                copy="Users pay through the app. Operators and hosts get clear records of usage, payments, and session history."
              />
              <p className="software-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                No cash handling. No manual coordination. No unclear billing.
              </p>
              <div className="mt-12">
                <Diagram
                  nodes={[
                    "User starts session",
                    "App payment",
                    "Payment record",
                    "Dashboard update",
                  ]}
                />
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Talk to sales
              </PrimaryButton>
            </PageSection>

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <div>
                  <SectionIntro
                    eyebrow="Pricing and rules"
                    title="Set how your network works."
                    copy="Control pricing, access, timings, charger availability, user roles, and location settings from the dashboard."
                  />
                  <p className="software-reveal mt-5 text-base leading-7 text-[#A1A1A1]">
                    Everything can be managed remotely.
                  </p>
                  <SecondaryButton href="#features" className="mt-9">
                    See dashboard features
                  </SecondaryButton>
                </div>
                <div className="software-stagger grid gap-4 sm:grid-cols-2">
                  {pricingRules.map((rule) => (
                    <FeatureCard key={rule} title={rule} />
                  ))}
                </div>
              </div>
            </PageSection>

            <PageSection>
              <SectionIntro
                centered
                eyebrow="White label or Zvolta powered"
                title="Launch with Zvolta branding or your own."
                copy="White label means the app, dashboard, and charging flow can carry your brand instead of ours, including a white label EV charging app experience."
              />
              <div className="software-stagger mt-12 grid gap-8 lg:grid-cols-2">
                <article className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <p className="text-xs font-semibold uppercase text-[#16a34a]">
                    Zvolta powered
                  </p>
                  <h3 className="mt-5 text-[32px] font-semibold text-white">
                    Use Zvolta app, dashboard, and brand support.
                  </h3>
                </article>
                <article className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <p className="text-xs font-semibold uppercase text-[#16a34a]">
                    Your own brand
                  </p>
                  <h3 className="mt-5 text-[32px] font-semibold text-white">
                    Use the platform with your own app and brand experience.
                  </h3>
                </article>
              </div>
              <div className="mt-10 text-center">
                <PrimaryButton href={DEMO_LINK}>
                  Explore white label options
                </PrimaryButton>
              </div>
            </PageSection>

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <SectionIntro
                  eyebrow="Integrations and API support"
                  title="Connect with the systems you already use."
                  copy="The platform can connect with charger hardware, payment systems, dashboards, reports, apps, and other business tools. An API is a secure way for two systems to connect and share data."
                />
                <div className="software-reveal rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <div className="grid place-items-center gap-4">
                    <div className="rounded-lg border border-[#16a34a]/35 bg-[#16a34a]/10 px-6 py-4 text-center text-lg font-semibold text-white">
                      Zvolta
                    </div>
                    <div className="software-stagger grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        "Chargers",
                        "Payments",
                        "App",
                        "Dashboard",
                        "Reports",
                        "Business tools",
                        "APIs",
                      ].map((node) => (
                        <FeatureCard key={node} title={node} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Discuss integrations
              </PrimaryButton>
            </PageSection>

            <PageSection>
              <SectionIntro
                eyebrow="Security and reliability"
                title="Built for secure charging operations."
                copy="Charging software needs to be safe, stable, and trusted. Zvolta software is built with secure access, user roles, protected payments, reliable data handling, and strong system controls."
              />
              <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {securityCards.map((card) => (
                  <FeatureCard key={card} title={card} />
                ))}
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Talk to our team
              </PrimaryButton>
            </PageSection>

            <PageSection>
              <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <SectionIntro
                  eyebrow="Built on open infrastructure"
                  title="Open and flexible by design."
                  copy="Zvolta uses open and flexible infrastructure so your network can grow without unnecessary limits."
                />
                <div className="software-stagger grid gap-4">
                  {[
                    "Hardware",
                    "OCPP",
                    "Zvolta platform",
                    "Apps and dashboards",
                    "Reports and integrations",
                  ].map((layer) => (
                    <div
                      key={layer}
                      className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-5 text-lg font-semibold text-white"
                    >
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
              <SecondaryButton href="#features" className="mt-10">
                Learn more about the platform
              </SecondaryButton>
            </PageSection>

            <PageSection>
              <SectionIntro
                centered
                eyebrow="Why license instead of building from zero"
                title="Launch faster without building from zero."
                copy="Building charging software takes time, cost, and technical effort. Zvolta gives you the core platform already built."
              />
              <div className="software-stagger mt-12 grid gap-8 lg:grid-cols-2">
                <ComparisonColumn
                  title="Build from scratch"
                  items={[
                    "Long development time",
                    "Payment setup needed",
                    "App development needed",
                    "Dashboard development needed",
                    "OCPP work needed",
                    "Testing and support needed",
                  ]}
                />
                <ComparisonColumn
                  title="License Zvolta"
                  positive
                  items={[
                    "Faster launch",
                    "App already available",
                    "Dashboard included",
                    "Payments supported",
                    "OCPP-ready",
                    "Support from Zvolta team",
                  ]}
                />
              </div>
              <div className="mt-10 text-center">
                <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
              </div>
            </PageSection>

            <PageSection>
              <SectionIntro
                eyebrow="How setup works"
                title="A clear path from hardware details to go live."
              />
              <div className="software-stagger mt-12 grid gap-5">
                {setupSteps.map(([title, copy], index) => (
                  <article
                    key={title}
                    className="grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:grid-cols-[110px_1fr]"
                  >
                    <p className="text-sm font-semibold text-[#16a34a]">
                      Step {index + 1}
                    </p>
                    <div>
                      <h3 className="text-[24px] font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#A1A1A1]">
                        {copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Start software setup
              </PrimaryButton>
            </PageSection>

            <PageSection>
              <SectionIntro
                eyebrow="Use cases"
                title="Use it for different charging models."
              />
              <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map(([title, copy]) => (
                  <article
                    key={title}
                    className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
              <PrimaryButton href={CONTACT_LINK} className="mt-10">
                Find your use case
              </PrimaryButton>
            </PageSection>

            <PageSection>
              <SectionIntro
                eyebrow="Real stories"
                title="Real stories from growing charging networks."
              />
              <div className="software-story-scroll mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
                {stories.map((story, index) => (
                  <article
                    key={story}
                    className="software-reveal w-[320px] shrink-0 snap-start rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:w-[390px]"
                  >
                    <p className="text-xs font-semibold uppercase text-[#16a34a]">
                      Story 0{index + 1}
                    </p>
                    <h3 className="mt-5 text-[24px] font-semibold leading-tight text-white">
                      {story}
                    </h3>
                  </article>
                ))}
              </div>
              <SecondaryButton href="/stories" className="mt-8">
                Explore stories
              </SecondaryButton>
            </PageSection>

            <PageSection>
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <SectionIntro
                  eyebrow="Need help deciding"
                  title="Not sure if it fits your chargers?"
                  copy="Tell us about your hardware, your business, and how you want to launch. Our team will help you understand if Zvolta software is the right fit."
                />
                <div className="software-reveal rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <p className="text-[32px] font-semibold leading-tight text-white">
                    Share your chargers, locations, and launch plan.
                  </p>
                  <PrimaryButton href={CONTACT_LINK} className="mt-8">
                    Get a free consultation
                  </PrimaryButton>
                </div>
              </div>
            </PageSection>

            <section className="relative overflow-hidden py-24 md:py-32">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
              <div className="software-container relative">
                <div className="software-reveal mx-auto max-w-4xl text-center">
                  <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                    Build your charging network without building the software
                    from zero.
                  </h2>
                  <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                    <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
                    <SecondaryButton href={CONTACT_LINK}>
                      Talk to sales
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

function FeaturePill({ children }) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm font-semibold text-white">
      {children}
    </div>
  );
}

function FeatureCard({ title }) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-5">
      <div className="mb-8 grid h-9 w-9 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
        <Icon name="check" className="h-4 w-4" />
      </div>
      <p className="text-base font-semibold text-white">{title}</p>
    </div>
  );
}
