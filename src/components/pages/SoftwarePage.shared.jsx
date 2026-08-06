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
              style={{
                backgroundColor: color,
              }}
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
                style={{
                  height: `${height}%`,
                }}
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
  const padding = {
    top: 18,
    right: 18,
    bottom: 32,
    left: 52,
  };
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
    const chartData = Array.from(
      {
        length: 11,
      },
      (_, year) => ({
        year,
        cashFlow: Math.round(-totalCapEx + totalAnnualRevenue * year),
      }),
    );
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
                        className={`min-h-11 rounded-lg border px-3 text-sm font-semibold transition duration-300 ${additionalChargers === value ? "border-[#16a34a] bg-[#16a34a] text-black" : "border-[#1F1F1F] bg-[#111111] text-white hover:border-[#16a34a]/70"}`}
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
          style={{
            height: `${h}%`,
            opacity: 0.55 + i * 0.09,
          }}
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
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium ${label === "Impact" ? "bg-[#16a34a]/12 text-[#16a34a]" : "text-[#6B7280]"}`}
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
export {
  CONTACT_LINK,
  ChargerMini,
  CityScene,
  ComparisonColumn,
  ConnectedHub,
  ConnectedNodeCard,
  DEMO_LINK,
  DashboardMockup,
  Diagram,
  FeatureCard,
  FeaturePill,
  Fragment,
  Icon,
  ImpactBarChart,
  ImpactDashboard,
  ImpactLaptop,
  ImpactLineChart,
  ModularRoiCalculator,
  PageSection,
  PhoneMini,
  PrimaryButton,
  ProjectionChart,
  RangeField,
  ScrollTrigger,
  SecondaryButton,
  SectionIntro,
  SmartLink,
  audienceCards,
  chargingModels,
  connectedNodes,
  controlFeatures,
  enterprisePoints,
  formatPKR,
  gsap,
  hostPoints,
  impactBigCards,
  impactBottomCards,
  impactChartLabels,
  impactFlow,
  impactNav,
  platformFeatures,
  pricingRules,
  securityCards,
  setupSteps,
  smartChips,
  smartSteps,
  stories,
  useCases,
  useEffect,
  useMemo,
  useRef,
  useState,
  userPoints,
};
