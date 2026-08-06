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
  {
    icon: "shield",
    title: "More value",
    copy: "for your visitors",
  },
  {
    icon: "briefcase",
    title: "Extra income",
    copy: "for your business",
  },
  {
    icon: "shield",
    title: "Future ready",
    copy: "service",
  },
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
  {
    src: "/img/Black-logo.webp",
    alt: "Sazgar",
    invert: true,
  },
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
  return spec.goodFor
    .slice(0, 3)
    .map(([title, copy], index) => [
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

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.22,
      }}
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
      style={{
        overflow: "hidden",
        transformOrigin: "top center",
      }}
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      transition={{
        height: {
          duration: reduceMotion ? 0.01 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: reduceMotion ? 0.01 : 0.18,
        },
      }}
    >
      <motion.div
        initial={{
          y: reduceMotion ? 0 : -18,
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: reduceMotion ? 0 : -12,
        }}
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
export {
  AnimatePresence,
  CONTACT_LINK,
  ChargerVisual,
  DataTable,
  Fragment,
  Icon,
  IoClose,
  LeadForm,
  PrimaryButton,
  Reveal,
  RotatingText,
  SecondaryButton,
  Section,
  SectionIntro,
  ShutterExpand,
  SmartLink,
  chargerAudienceIcons,
  chargerHeroImages,
  chargerPartnerLogos,
  chargerSpecCommon,
  chargerStories,
  decisionComparisonRows,
  decisionPricingItems,
  decisionSetupSteps,
  decisionSpecs,
  environmentTabs,
  getChargerAudienceCards,
  getChargerHeroBenefits,
  getChargerQuickDetails,
  getSpecDetail,
  hostRotatingWords,
  hostWhoBenefits,
  motion,
  threeHeroBenefits,
  threeKwAudienceCards,
  threeKwFaqs,
  threeKwHowFeatures,
  threeKwHowStrip,
  threeKwQuickDetails,
  useReducedMotion,
  useState,
};
