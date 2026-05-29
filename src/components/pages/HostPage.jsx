import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SmartLink } from "../SmartLink";

const chargers = [
  {
    title: "3kW Charger",
    description:
      "Best for small spaces and low usage. Works well for bikes and residential areas.",
    href: "/3kw-charger",
  },
  {
    title: "7kW Charger",
    description:
      "Good for longer dwell times, apartments, for EV cars. Works on single phase power.",
    href: "/7kw-charger",
  },
  {
    title: "22kW Charger",
    description:
      "Built for locations with shorter dwell times like malls, parking areas, and petrol stations.",
    href: "/22kw-charger",
  },
];

const hostBenefits = [
  "Bring more visitors",
  "Increase dwell time",
  "Earn from every session",
  "Support ESG and sustainability goals",
];

const hostWhereLocations = [
  {
    title: "Apartments",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Offices",
    icon: "briefcase",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Restaurants",
    icon: "utensils",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Universities",
    icon: "graduation",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hospitals",
    icon: "hospital",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Parking Lots",
    icon: "parking",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
  },
];

const hostWhoCards = [
  {
    title: "Business Owners",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Property Owners",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Facility Managers",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Parking Operators",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Retail & Hospitality Spaces",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Commercial Building Owners",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
];

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

const installationOptions = [
  { title: "Vertical wall", type: "vertical" },
  { title: "Standing", type: "standing" },
];

const safetyFeatures = [
  {
    feature: "1 year warranty",
    description: "Local hardware support for every charger.",
  },
  {
    feature: "RCBO protection",
    description: "Prevents current leakage, even in rain.",
  },
  {
    feature: "Surge protection",
    description: "Built for voltage spikes and site variation.",
  },
  {
    feature: "Single phase support",
    description: "Works on single phase power up to 7kW.",
  },
  {
    feature: "CCS Type 2 connector",
    description: "Compatible with most EV charging needs.",
  },
  {
    feature: "Daily reliability",
    description: "Designed for repeated public use.",
  },
];

const paymentSteps = [
  { title: "Find", description: "Users find your charger in the app." },
  { title: "App", description: "Through the Zvolta app." },
  { title: "Cashless", description: "No cash handling." },
  { title: "Automatic", description: "No manual work." },
];

const marketingPoints = [
  "Listed on Zvolta app",
  "Featured on social media",
  "Bring new users without ads",
];

const pricingPlans = [
  {
    title: "3kW",
    price: "Starts from 75k",
    detail: "Small sites and EV bikes",
    href: "/3kw-charger",
  },
  {
    title: "7kW",
    price: "Available",
    detail: "Offices and apartments",
    href: "/7kw-charger",
  },
  {
    title: "22kW",
    price: "Available",
    detail: "Commercial traffic",
    href: "/22kw-charger",
  },
];

const partnerLogos = [
  { src: "/img/Easypaisa.webp", alt: "Easypaisa" },
  { src: "/img/biomas_energy.png", alt: "Biomas Energy" },
  { src: "/img/blitz.png", alt: "Blitz" },
  { src: "/img/Black-logo.webp", alt: "Zvolta partner" },
  { src: "/img/full_Logoblack.png", alt: "Zvolta" },
];

const stories = [
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

const heroHighlights = [
  { icon: "tools", title: "Host setup", description: "Free installation" },
  { icon: "wallet", title: "Keep", description: "100% earnings" },
  { icon: "phone", title: "App and", description: "dashboard" },
  { icon: "bolt", title: "Set price", description: "and timings" },
  { icon: "shield", title: "Local", description: "support" },
];

const whyHostCards = [
  { icon: "wallet", copy: "Earn from every charging session" },
  { icon: "map", copy: "Bring more visitors to your location" },
  { icon: "bolt", copy: "Add a modern service without changing your business" },
  { icon: "phone", copy: "Increase dwell time and repeat visits" },
];

const hostControlCards = [
  { icon: "wallet", copy: "You set the price" },
  { icon: "phone", copy: "You set the timings" },
];

const hostHowCards = [
  {
    icon: "bolt",
    title: "Track usage",
    copy: "Real-time charging and session history",
  },
  {
    icon: "tools",
    title: "Set pricing",
    copy: "Update your price anytime",
  },
  {
    icon: "shield",
    title: "Open / close access",
    copy: "Control availability remotely",
  },
  {
    icon: "map",
    title: "No staff needed",
    copy: "Everything runs automatically",
  },
];

const hostHowFooter = [
  { icon: "wallet", copy: "Payments made simple" },
  { icon: "wallet", copy: "Cashless" },
  { icon: "bolt", copy: "Automatic" },
];

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

  if (name === "phone") {
    return (
      <svg {...props}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
        <path d="M10 18h4" />
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

  if (name === "plug") {
    return (
      <svg {...props}>
        <path d="M8 2v6" />
        <path d="M16 2v6" />
        <path d="M6 8h12v4a6 6 0 0 1-12 0V8Z" />
        <path d="M12 18v4" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg {...props}>
        <path d="M4 7h16v12H4a2 2 0 0 1-2-2V5a2 2 0 0 0 2 2Z" />
        <path d="M18 11h4v4h-4a2 2 0 0 1 0-4Z" />
        <path d="M4 7l12-4v4" />
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

  if (name === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (name === "utensils") {
    return (
      <svg {...props}>
        <path d="M7 2v20" />
        <path d="M4 2v6a3 3 0 0 0 6 0V2" />
        <path d="M17 2v20" />
        <path d="M17 2c2.2 1.8 3 4.2 3 7h-3" />
      </svg>
    );
  }

  if (name === "graduation") {
    return (
      <svg {...props}>
        <path d="m3 8 9-5 9 5-9 5-9-5Z" />
        <path d="M7 10v5c3 2 7 2 10 0v-5" />
        <path d="M21 8v6" />
      </svg>
    );
  }

  if (name === "hospital") {
    return (
      <svg {...props}>
        <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
        <path d="M9 21v-5h6v5" />
        <path d="M12 7v6" />
        <path d="M9 10h6" />
        <path d="M3 21h18" />
      </svg>
    );
  }

  if (name === "shopping") {
    return (
      <svg {...props}>
        <path d="M6 8h12l-1 13H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </svg>
    );
  }

  if (name === "parking") {
    return (
      <svg {...props}>
        <path d="M7 21V3h7a5 5 0 0 1 0 10H7" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    );
  }

  if (name === "tools") {
    return (
      <svg {...props}>
        <path d="m14.7 6.3 3-3a4 4 0 0 1-5.1 5.1l-7.3 7.3a2.1 2.1 0 0 0 3 3l7.3-7.3a4 4 0 0 1 5.1 5.1l-3 3" />
        <path d="M8 8 3.5 3.5" />
        <path d="m5 3-2 2 4 4" />
      </svg>
    );
  }

  if (name === "headphones") {
    return (
      <svg {...props}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1Z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1Z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-5" />
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

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
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
    </Component>
  );
}

function PageSection({ children, className = "", id }) {
  return (
    <section id={id} className={`host-section ${className}`}>
      <div className="host-container">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
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
    </Reveal>
  );
}

function PrimaryButton({ href = "/contact-us", children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E5A8]/45 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function SecondaryButton({ href = "/contact-us", children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function ChargerIllustration({ size = "large" }) {
  const sizeClass = size === "small" ? "h-24 w-16" : "h-36 w-24";

  return (
    <div className={`${sizeClass} relative`}>
      <div className="absolute inset-x-3 top-0 h-full rounded-lg border border-[#2A2A2A] bg-[#141414] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto mt-4 h-3 w-10 rounded-sm bg-[#232323]" />
        <div className="mx-auto mt-4 h-12 w-10 rounded-md border border-[#2A2A2A] bg-[#0B0B0B]" />
        <div className="absolute bottom-4 left-5 h-2 w-2 rounded-full bg-[#00E5A8]" />
        <div className="absolute bottom-4 right-5 h-2 w-2 rounded-full bg-[#303030]" />
      </div>
      <div className="absolute bottom-8 right-0 h-12 w-10 rounded-br-full border-b border-r border-[#2A2A2A]" />
    </div>
  );
}

function ChargerProductVisual({ variant = 0 }) {
  return (
    <div className={`host-product-visual host-product-visual-${variant}`}>
      <div className="host-product-glow" />
      <div className="host-product-body">
        <span className="host-product-line" />
        <span className="host-product-ring" />
        <span className="host-product-dot" />
      </div>
    </div>
  );
}

function InstallationDiagram({ type }) {
  return (
    <div className="grid h-40 place-items-center rounded-lg border border-[#1F1F1F] bg-[#0B0B0B]">
      {type === "vertical" ? (
        <div className="h-28 w-16 rounded-md border border-[#2A2A2A] bg-[#151515] p-2">
          <div className="h-full w-5 rounded-sm bg-[#242424]" />
        </div>
      ) : null}
      {type === "horizontal" ? (
        <div className="h-16 w-28 rounded-md border border-[#2A2A2A] bg-[#151515] p-2">
          <div className="h-5 w-full rounded-sm bg-[#242424]" />
        </div>
      ) : null}
      {type === "square" ? (
        <div className="grid h-24 w-24 place-items-center rounded-md border border-[#2A2A2A] bg-[#151515]">
          <div className="h-9 w-9 rounded-sm bg-[#242424]" />
        </div>
      ) : null}
      {type === "standing" ? (
        <div className="flex flex-col items-center">
          <ChargerIllustration size="small" />
          <div className="mt-2 h-1 w-20 rounded-full bg-[#2A2A2A]" />
        </div>
      ) : null}
      {type === "hanging" ? (
        <div className="relative h-28 w-28">
          <div className="absolute left-1/2 top-0 h-9 w-px bg-[#2A2A2A]" />
          <div className="absolute left-1/2 top-9 h-16 w-12 -translate-x-1/2 rounded-md border border-[#2A2A2A] bg-[#151515]" />
          <div className="absolute bottom-0 left-[58px] h-9 w-9 rounded-full border border-l-transparent border-t-transparent border-[#2A2A2A]" />
        </div>
      ) : null}
    </div>
  );
}

export default function HostPage() {
  const [chargerCount, setChargerCount] = useState(2);
  const [unitPrice, setUnitPrice] = useState(120);
  const [usage, setUsage] = useState(8);

  const monthlyEarnings = useMemo(
    () => Math.max(0, chargerCount * unitPrice * usage * 30),
    [chargerCount, unitPrice, usage],
  );

  return (
    <>
      <style data-page-style="host-page">{`
        .host-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .host-page * {
          box-sizing: border-box;
        }

        .host-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .host-section {
          padding: 120px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        .host-logo-track {
          width: max-content;
          display: flex;
          will-change: transform;
        }

        .host-logo-set {
          display: flex;
          flex-shrink: 0;
          gap: 24px;
          padding-right: 24px;
        }

        .host-logo-strip {
          overflow: hidden;
          position: relative;
          border-radius: 12px;
        }

        .host-logo-strip::before,
        .host-logo-strip::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .host-logo-strip::before {
          left: 0;
          background: linear-gradient(to right, #0B0B0B, transparent);
        }

        .host-logo-strip::after {
          right: 0;
          background: linear-gradient(to left, #0B0B0B, transparent);
        }

        .host-stories {
          scrollbar-width: none;
        }

        .host-stories::-webkit-scrollbar {
          display: none;
        }

        .host-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          border-bottom: 1px solid #1F1F1F;
          isolation: isolate;
        }

        .host-hero .host-container {
          max-width: none;
          padding-left: clamp(18px, 4.5vw, 80px);
          padding-right: clamp(18px, 4.5vw, 80px);
        }

        .host-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -3;
        }

        .host-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.84) 24%, rgba(0, 0, 0, 0.38) 55%, rgba(0, 0, 0, 0.14) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.08) 48%, rgba(0, 0, 0, 0.78) 100%);
        }

        .host-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at 22% 50%, rgba(0, 229, 168, 0.11), transparent 30%);
          opacity: 0.7;
        }

        .host-hero-content {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 112px;
          padding-bottom: 210px;
        }

        .host-hero-kicker {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(17, 17, 17, 0.7);
          padding: 8px 13px;
          color: #BDBDBD;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(16px);
        }

        .host-hero-title {
          margin-top: 24px;
          max-width: 500px;
          font-size: clamp(46px, 5.6vw, 88px);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: 0;
          color: #FFFFFF;
        }

        .host-hero-title span {
          display: block;
          color: #21D85A;
        }

        .host-hero-copy {
          margin-top: 24px;
          max-width: 620px;
          color: #C7C7C7;
          font-size: clamp(17px, 1.25vw, 21px);
          line-height: 1.45;
          font-weight: 500;
        }

        .host-hero-cta {
          min-height: 56px;
          width: max-content;
          border-radius: 10px;
          padding: 15px 28px;
          font-size: 18px;
          background: #21D85A;
          box-shadow: 0 16px 40px rgba(33, 216, 90, 0.25);
        }

        .host-hero-feature-strip {
          position: absolute;
          left: 50%;
          bottom: 30px;
          display: grid;
          width: min(960px, calc(100vw - 48px));
          grid-template-columns: repeat(5, minmax(0, 1fr));
          transform: translateX(-50%);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(24, 24, 24, 0.76);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(18px);
        }

        .host-hero-feature {
          position: relative;
          display: flex;
          min-height: 82px;
          align-items: center;
          gap: 14px;
          padding: 17px 22px;
        }

        .host-hero-feature + .host-hero-feature::before {
          content: '';
          position: absolute;
          left: 0;
          top: 18px;
          bottom: 18px;
          width: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .host-hero-icon {
          display: grid;
          height: 48px;
          width: 48px;
          flex: 0 0 auto;
          place-items: center;
          border: 1px solid rgba(33, 216, 90, 0.42);
          border-radius: 999px;
          background: rgba(33, 216, 90, 0.08);
          color: #21D85A;
        }

        .host-payments-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #1F1F1F;
          min-height: 780px;
          padding: 128px 0 118px;
          isolation: isolate;
        }

        .host-payments-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -3;
        }

        .host-payments-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.82) 33%, rgba(0, 0, 0, 0.34) 62%, rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.14) 55%, rgba(0, 0, 0, 0.76) 100%);
        }

        .host-payments-section::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at 25% 80%, rgba(0, 229, 168, 0.1), transparent 28%);
        }

        .host-payments-content {
          max-width: 980px;
        }

        .host-payments-title {
          max-width: 720px;
          font-size: clamp(38px, 4.3vw, 64px);
          line-height: 1.03;
          font-weight: 800;
          letter-spacing: 0;
          color: #FFFFFF;
        }

        .host-payments-title span {
          color: #00E5A8;
        }

        .host-payments-copy {
          margin-top: 26px;
          max-width: 520px;
          color: #C7C7C7;
          font-size: clamp(18px, 1.45vw, 24px);
          line-height: 1.55;
        }

        .host-payment-cards {
          margin-top: 58px;
          display: grid;
          max-width: 980px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
          gap: 16px;
        }

        .host-payment-cards > * {
          height: 100%;
          min-width: 0;
        }

        .host-payment-card {
          display: flex;
          height: 100%;
          min-height: 355px;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 10px;
          background: rgba(12, 12, 12, 0.54);
          padding: 30px;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(16px);
        }

        .host-payment-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .host-payment-icon {
          display: grid;
          height: 72px;
          width: 72px;
          flex: 0 0 auto;
          place-items: center;
          border: 1px solid rgba(0, 229, 168, 0.26);
          border-radius: 999px;
          background: rgba(0, 229, 168, 0.06);
          color: #00E5A8;
          box-shadow: inset 0 0 30px rgba(0, 229, 168, 0.05);
        }

        .host-payment-number {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #00E5A8;
          font-size: 18px;
          font-weight: 800;
        }

        .host-payment-line {
          height: 1px;
          width: 48px;
          background: linear-gradient(90deg, transparent, rgba(0, 229, 168, 0.7));
        }

        .host-payment-dot {
          height: 5px;
          width: 5px;
          border-radius: 999px;
          background: #00E5A8;
        }

        .host-payment-card h3 {
          margin-top: auto;
          color: #FFFFFF;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.05;
        }

        .host-payment-card p {
          margin-top: 22px;
          color: #C7C7C7;
          font-size: 18px;
          line-height: 1.55;
        }

        .host-payments-button {
          margin-top: 48px;
          min-height: 70px;
          min-width: 220px;
          border-color: rgba(0, 229, 168, 0.55);
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.56);
          box-shadow:
            inset 0 0 26px rgba(0, 229, 168, 0.08),
            0 0 30px rgba(0, 229, 168, 0.14);
          backdrop-filter: blur(12px);
        }

        .host-how-section {
          position: relative;
          overflow: hidden;
          border-block: 1px solid #1F1F1F;
          background:
            radial-gradient(circle at 66% 62%, rgba(0, 229, 168, 0.12), transparent 26%),
            linear-gradient(90deg, #050505 0%, #050505 38%, #080A09 100%);
          isolation: isolate;
        }

        .host-how-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.92) 31%, rgba(0, 0, 0, 0.34) 72%, rgba(0, 0, 0, 0.72) 100%),
            radial-gradient(circle at 87% 82%, rgba(0, 229, 168, 0.13), transparent 24%);
        }

        .host-how-inner {
          position: relative;
          display: grid;
          min-height: 520px;
          grid-template-columns: minmax(280px, 0.36fr) minmax(0, 0.64fr);
          gap: 34px;
          align-items: center;
          padding-block: 44px 34px;
        }

        .host-how-copy {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 430px;
          min-width: 0;
        }

        .host-how-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #21D85A;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-how-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(33, 216, 90, 0.82);
          border-radius: 6px;
          background: rgba(33, 216, 90, 0.08);
          box-shadow: inset 0 0 20px rgba(33, 216, 90, 0.08);
        }

        .host-how-title {
          margin-top: 36px;
          max-width: 430px;
          color: #FFFFFF;
          font-size: clamp(34px, 3.2vw, 58px);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: 0;
        }

        .host-how-title span {
          color: #21D85A;
        }

        .host-how-description {
          margin-top: 18px;
          max-width: 330px;
          color: #BDBDBD;
          font-size: clamp(16px, 1.16vw, 21px);
          line-height: 1.42;
        }

        .host-how-card-grid {
          margin-top: 36px;
          display: grid;
          max-width: 430px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px 22px;
        }

        .host-how-card {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 12px;
          align-items: center;
          min-width: 0;
        }

        .host-how-icon {
          display: grid;
          height: 50px;
          width: 50px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 5px;
          background: rgba(18, 18, 18, 0.8);
          color: #21D85A;
          box-shadow: inset 0 0 24px rgba(33, 216, 90, 0.05);
        }

        .host-how-card h3 {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.1;
        }

        .host-how-card p {
          margin-top: 5px;
          color: #BDBDBD;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.25;
        }

        .host-how-visual {
          position: relative;
          z-index: 2;
          min-height: 450px;
        }

        .host-how-device {
          position: absolute;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 22px 38px rgba(0, 0, 0, 0.45));
          user-select: none;
          pointer-events: none;
        }

        .host-how-laptop {
          left: 18%;
          top: 7%;
          z-index: 1;
          width: 68%;
          max-height: 320px;
          object-position: center;
        }

        .host-how-mobile {
          left: 2%;
          bottom: 56px;
          z-index: 2;
          width: 24%;
          max-height: 390px;
          object-position: center bottom;
        }

        .host-how-payment {
          right: 4%;
          bottom: 46px;
          z-index: 3;
          width: 18%;
          max-height: 390px;
          object-position: center bottom;
        }

        .host-how-footer {
          position: absolute;
          left: 35%;
          right: 2.5%;
          bottom: 24px;
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

        .host-how-footer-item {
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

        .host-how-footer-item + .host-how-footer-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .host-how-footer-icon {
          color: #21D85A;
        }

        .host-where-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #1F1F1F;
          background:
            radial-gradient(circle at 76% 48%, rgba(0, 229, 168, 0.1), transparent 28%),
            #050505;
        }

        .host-where-inner {
          display: grid;
          grid-template-columns: minmax(240px, 0.28fr) minmax(430px, 0.46fr) minmax(250px, 0.26fr);
          gap: 24px;
          align-items: center;
          padding: 76px 0;
        }

        .host-where-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          justify-content: center;
        }

        .host-where-eyebrow {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 14px;
          color: #21D85A;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-where-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(33, 216, 90, 0.82);
          border-radius: 6px;
          background: rgba(33, 216, 90, 0.08);
          box-shadow: inset 0 0 20px rgba(33, 216, 90, 0.08);
        }

        .host-where-title {
          margin-top: 34px;
          max-width: 360px;
          color: #FFFFFF;
          font-size: clamp(34px, 2.8vw, 52px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0;
        }

        .host-where-copy-text {
          margin-top: 24px;
          max-width: 340px;
          color: #BDBDBD;
          font-size: 18px;
          line-height: 1.38;
        }

        .host-where-button {
          margin-top: 34px;
          width: max-content;
          min-height: 58px;
          border-radius: 7px;
          padding-inline: 24px;
          font-size: 16px;
        }

        .host-where-grid {
          display: grid;
          min-width: 0;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: repeat(2, 170px);
          align-self: center;
          align-content: center;
          gap: 12px;
        }

        .host-where-grid > * {
          height: 100%;
          min-height: 0;
        }

        .host-where-card {
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: #111111;
          isolation: isolate;
        }

        .host-where-card img {
          position: absolute;
          inset: 0;
          z-index: -2;
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 450ms ease;
        }

        .host-where-card::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.82)),
            radial-gradient(circle at 50% 78%, rgba(0, 0, 0, 0.28), transparent 42%);
        }

        .host-where-card:hover img {
          transform: scale(1.06);
        }

        .host-where-card-content {
          display: flex;
          height: 100%;
          min-height: 0;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          padding: 18px 12px 16px;
          text-align: center;
        }

        .host-where-card-icon {
          display: grid;
          color: #FFFFFF;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
        }

        .host-where-card-title {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.12;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .host-where-map {
          position: relative;
          align-self: start;
          min-width: 0;
          overflow: hidden;
          height: 352px;
          min-height: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: #0B0B0B;
        }

        .host-where-map img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .host-who-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #1F1F1F;
          background:
            radial-gradient(circle at 34% 90%, rgba(0, 229, 168, 0.08), transparent 24%),
            #050505;
        }

        .host-who-inner {
          padding: 74px 0;
        }

        .host-who-top {
          display: grid;
          grid-template-columns: minmax(220px, 0.22fr) minmax(0, 0.78fr);
          gap: 36px;
          align-items: start;
        }

        .host-who-copy {
          min-width: 0;
        }

        .host-who-eyebrow {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 14px;
          color: #21D85A;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-who-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(33, 216, 90, 0.82);
          border-radius: 6px;
          background: rgba(33, 216, 90, 0.08);
          box-shadow: inset 0 0 20px rgba(33, 216, 90, 0.08);
        }

        .host-who-title {
          margin-top: 28px;
          color: #FFFFFF;
          font-size: clamp(30px, 2.4vw, 44px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .host-who-title span {
          color: #21D85A;
        }

        .host-who-copy-text {
          margin-top: 22px;
          max-width: 300px;
          color: #BDBDBD;
          font-size: 16px;
          line-height: 1.5;
        }

        .host-who-cards {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }

        .host-who-card {
          position: relative;
          overflow: hidden;
          min-height: 250px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: #111111;
          isolation: isolate;
        }

        .host-who-card img {
          position: absolute;
          inset: 0;
          z-index: -2;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 450ms ease;
        }

        .host-who-card::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.1) 38%, rgba(0, 0, 0, 0.88) 100%),
            radial-gradient(circle at 50% 85%, rgba(0, 229, 168, 0.12), transparent 42%);
        }

        .host-who-card:hover img {
          transform: scale(1.05);
        }

        .host-who-card-content {
          display: flex;
          min-height: 250px;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 18px 12px 20px;
          text-align: center;
        }

        .host-who-card-title {
          max-width: 150px;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.2;
          text-shadow: 0 2px 9px rgba(0, 0, 0, 0.75);
        }

        .host-who-card-line {
          margin-top: 13px;
          height: 2px;
          width: 40px;
          border-radius: 999px;
          background: #21D85A;
          box-shadow: 0 0 12px rgba(33, 216, 90, 0.55);
        }

        .host-who-strip {
          margin-top: 26px;
          display: grid;
          grid-template-columns: 170px minmax(220px, 1fr) 1px repeat(3, minmax(120px, 0.62fr)) minmax(150px, 0.75fr);
          align-items: center;
          gap: 22px;
          overflow: hidden;
          min-height: 150px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
            rgba(17, 17, 17, 0.76);
          box-shadow: inset 0 0 36px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
        }

        .host-who-charger {
          display: grid;
          height: 150px;
          place-items: center;
          align-self: stretch;
          background: radial-gradient(circle at 42% 62%, rgba(0, 229, 168, 0.12), transparent 48%);
        }

        .host-who-charger .host-product-visual {
          transform: scale(1.25);
        }

        .host-who-strip-title {
          color: #FFFFFF;
          font-size: clamp(26px, 2.1vw, 38px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: 0;
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
          background: rgba(33, 216, 90, 0.1);
          color: #21D85A;
        }

        .host-who-benefit h4 {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.1;
        }

        .host-who-benefit p {
          color: #BDBDBD;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.25;
        }

        .host-who-actions {
          display: grid;
          gap: 12px;
          justify-items: stretch;
          padding-right: 16px;
        }

        .host-who-primary {
          min-height: 56px;
          border-radius: 7px;
          font-size: 16px;
        }

        .host-who-learn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #21D85A;
          font-size: 14px;
          font-weight: 800;
        }

        .host-charger-options {
          padding: 86px 0;
          border-bottom: 1px solid #1F1F1F;
          background:
            radial-gradient(circle at 50% 0%, rgba(0, 229, 168, 0.09), transparent 34%),
            #050706;
        }

        .host-charger-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 229, 168, 0.24);
          border-radius: 26px;
          padding: 34px 26px 16px;
          box-shadow:
            inset 0 0 45px rgba(0, 229, 168, 0.05),
            0 24px 80px rgba(0, 0, 0, 0.38);
          isolation: isolate;
        }

        .host-charger-bg {
          position: absolute;
          top: 0;
          right: 0;
          height: 500px;
          width: 58%;
          clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
          object-fit: cover;
          object-position: center 52%;
          z-index: -3;
        }

        .host-charger-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.92) 38%, rgba(0, 0, 0, 0.48) 74%, rgba(0, 0, 0, 0.26) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.48) 38%, rgba(0, 0, 0, 0.94) 58%, rgba(0, 0, 0, 0.98) 100%);
        }

        .host-charger-panel-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(circle at 38% 60%, rgba(0, 229, 168, 0.08), transparent 30%);
        }

        .host-charger-header {
          display: flex;
          height: 400px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          padding: 0 22px;
          text-align: left;
        }

        .host-charger-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #00E5A8;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-charger-eyebrow span {
          display: grid;
          height: 26px;
          width: 26px;
          place-items: center;
          border: 1px solid rgba(0, 229, 168, 0.38);
          border-radius: 999px;
          background: rgba(0, 229, 168, 0.08);
        }

        .host-charger-title {
          margin-top: 18px;
          max-width: 600px;
          color: #FFFFFF;
          font-size: clamp(34px, 2.5vw, 52px);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: 0;
        }

        .host-charger-title span {
          color: #00E5A8;
        }

        .host-charger-copy {
          margin-top: 16px;
          max-width: 360px;
          color: #C7C7C7;
          font-size: 16px;
          line-height: 1.35;
        }

        .host-charger-grid {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .host-charger-card {
          position: relative;
          display: grid;
          min-height: 252px;
          grid-template-columns: 0.72fr 1fr;
          gap: 16px;
          border: 1px solid rgba(0, 229, 168, 0.25);
          border-radius: 12px;
          background: rgba(3, 14, 13, 0.76);
          padding: 20px 18px 18px;
          box-shadow: inset 0 0 34px rgba(0, 229, 168, 0.05);
          backdrop-filter: blur(16px);
        }

        .host-charger-index {
          position: absolute;
          left: 16px;
          top: 14px;
          display: grid;
          min-width: 30px;
          height: 24px;
          place-items: center;
          border: 1px solid rgba(0, 229, 168, 0.28);
          border-radius: 8px;
          background: rgba(0, 229, 168, 0.1);
          color: #00E5A8;
          font-size: 13px;
          font-weight: 800;
        }

        .host-charger-art {
          display: flex;
          min-height: 154px;
          align-items: center;
          justify-content: center;
          padding-top: 18px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .host-charger-card h3 {
          margin-top: 12px;
          color: #FFFFFF;
          font-size: 24px;
          font-weight: 800;
          line-height: 1.1;
        }

        .host-charger-card p {
          margin-top: 10px;
          color: #D0D0D0;
          font-size: 13px;
          line-height: 1.38;
        }

        .host-charger-divider {
          margin: 12px 0 11px;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 229, 168, 0.36), transparent);
        }

        .host-charger-meta {
          display: grid;
          gap: 9px;
        }

        .host-charger-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #D8D8D8;
          font-size: 13px;
          line-height: 1.35;
        }

        .host-charger-meta-row strong,
        .host-charger-meta-row em {
          color: #00E5A8;
          font-style: normal;
          font-weight: 800;
        }

        .host-charger-meta-icon {
          display: grid;
          height: 18px;
          width: 18px;
          flex: 0 0 auto;
          place-items: center;
          color: #00E5A8;
        }

        .host-charger-learn {
          display: flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 14px;
          border: 1px solid rgba(0, 229, 168, 0.38);
          border-radius: 9px;
          background: rgba(0, 229, 168, 0.04);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .host-charger-learn:hover {
          border-color: rgba(0, 229, 168, 0.78);
          color: #00E5A8;
          transform: translateY(-1px);
        }

        .host-product-visual {
          position: relative;
          display: grid;
          height: 138px;
          width: 82px;
          place-items: center;
        }

        .host-product-glow {
          position: absolute;
          inset: 28px 8px 6px;
          border-radius: 999px;
          background: rgba(0, 229, 168, 0.25);
          filter: blur(18px);
        }

        .host-product-body {
          position: relative;
          display: grid;
          height: 124px;
          width: 62px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(145deg, #343434, #0a0b0b 68%);
          box-shadow: inset 14px 0 26px rgba(255, 255, 255, 0.06), 0 18px 28px rgba(0, 0, 0, 0.45);
        }

        .host-product-visual-0 .host-product-body {
          border-radius: 34px;
        }

        .host-product-visual-1 .host-product-body {
          width: 58px;
          border-radius: 26px;
        }

        .host-product-visual-2 .host-product-body {
          width: 66px;
          border-radius: 18px 18px 36px 36px;
          clip-path: polygon(8% 0, 92% 0, 78% 100%, 22% 100%);
        }

        .host-product-line {
          position: absolute;
          top: 34px;
          height: 42px;
          width: 2px;
          border-radius: 999px;
          background: #00E5A8;
          box-shadow: 0 0 14px rgba(0, 229, 168, 0.8);
        }

        .host-product-ring {
          position: absolute;
          bottom: 34px;
          display: flex;
          height: 19px;
          width: 19px;
          border: 3px solid #00E5A8;
          border-radius: 999px;
          box-shadow: 0 0 15px rgba(0, 229, 168, 0.65);
        }

        .host-product-dot {
          position: absolute;
          bottom: 18px;
          height: 4px;
          width: 4px;
          border-radius: 999px;
          background: #00E5A8;
        }

        .host-charger-quiz,
        .host-charger-finance,
        .host-charger-benefits {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          background: rgba(6, 16, 16, 0.72);
          backdrop-filter: blur(16px);
        }

        .host-charger-action-row {
          margin-top: 12px;
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 0;
        }

        .host-charger-action-row .host-charger-quiz {
          border-radius: 10px 0 0 10px;
        }

        .host-charger-action-row .host-charger-finance {
          border-left: 0;
          border-radius: 0 10px 10px 0;
        }

        .host-charger-quiz {
          display: flex;
          min-height: 74px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 12px 20px;
        }

        .host-charger-quiz-copy {
          display: flex;
          align-items: center;
          gap: 24px;
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 700;
        }

        .host-charger-quiz-mark {
          display: grid;
          height: 54px;
          width: 54px;
          place-items: center;
          border: 2px solid #00E5A8;
          border-radius: 999px;
          color: #00E5A8;
          font-size: 30px;
        }

        .host-charger-quiz-button {
          min-height: 46px;
          min-width: 220px;
          border-color: #00E5A8;
          background: rgba(0, 229, 168, 0.05);
          color: #00E5A8;
        }

        .host-charger-finance {
          display: grid;
          min-height: 74px;
          grid-template-columns: 0.82fr 1.18fr;
          align-items: center;
          gap: 0;
          padding: 0 18px;
        }

        .host-charger-finance-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.25;
          min-width: 0;
          padding: 0 12px;
          text-align: left;
        }

        .host-charger-finance-item + .host-charger-finance-item {
          border-left: 1px solid rgba(255, 255, 255, 0.22);
        }

        .host-charger-benefits {
          margin-top: 12px;
          display: grid;
          min-height: 72px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          padding: 0 32px;
        }

        .host-charger-benefit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #FFFFFF;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.25;
        }

        .host-charger-benefit + .host-charger-benefit {
          border-left: 1px solid rgba(255, 255, 255, 0.22);
        }

        .host-charger-large-icon {
          display: grid;
          height: 40px;
          width: 40px;
          flex: 0 0 auto;
          place-items: center;
          color: #00E5A8;
        }

        .host-charger-finance-text {
          display: block;
          min-width: 0;
          max-width: 190px;
        }

        .host-why-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #1F1F1F;
          background:
            radial-gradient(circle at 18% 78%, rgba(0, 229, 168, 0.08), transparent 26%),
            #050706;
          isolation: isolate;
        }

        .host-why-layout {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          align-items: center;
          padding: 92px 0;
        }

        .host-why-content {
          min-width: 0;
          max-width: 100%;
        }

        .host-why-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #21D85A;
          font-size: 20px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-why-index {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 2px solid rgba(33, 216, 90, 0.5);
          border-radius: 8px;
          background: rgba(33, 216, 90, 0.08);
          font-size: 18px;
        }

        .host-why-title {
          margin-top: 32px;
          max-width: 560px;
          color: #FFFFFF;
          font-size: clamp(42px, 4.25vw, 66px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0;
        }

        .host-why-title span {
          color: #21D85A;
        }

        .host-why-copy {
          margin-top: 26px;
          max-width: 540px;
          color: #C7C7C7;
          font-size: 20px;
          line-height: 1.55;
        }

        .host-why-grid {
          margin-top: 38px;
          display: grid;
          max-width: 100%;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .host-why-card {
          display: grid;
          grid-template-columns: 82px 1fr;
          align-items: center;
          gap: 18px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.35;
        }

        .host-why-icon {
          display: grid;
          height: 82px;
          width: 82px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(17, 17, 17, 0.72);
          color: #21D85A;
          box-shadow: inset 0 0 26px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
        }

        .host-why-control {
          margin-top: 46px;
          display: grid;
          max-width: 100%;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(17, 17, 17, 0.72);
          backdrop-filter: blur(14px);
        }

        .host-why-control-item {
          display: flex;
          min-height: 78px;
          align-items: center;
          gap: 20px;
          padding: 16px 28px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
        }

        .host-why-control-item + .host-why-control-item {
          border-left: 1px solid rgba(255, 255, 255, 0.16);
        }

        .host-why-control-icon {
          display: grid;
          height: 42px;
          width: 42px;
          flex: 0 0 auto;
          place-items: center;
          color: #21D85A;
        }

        .host-why-visual {
          min-width: 0;
        }

        .host-why-image-wrap {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          background: #0B0B0B;
          box-shadow:
            inset 0 0 60px rgba(0, 229, 168, 0.06),
            0 26px 80px rgba(0, 0, 0, 0.34);
        }

        .host-why-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.34), transparent 38%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.48));
          pointer-events: none;
        }

        .host-why-image {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 620px;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 767px) {
          .host-container {
            padding: 0 18px;
          }

          .host-section {
            padding: 84px 0;
          }

          .host-logo-set {
            gap: 14px;
            padding-right: 14px;
          }

          .host-hero {
            min-height: 760px;
          }

          .host-hero-bg {
            object-position: 62% center;
          }

          .host-hero::before {
            background:
              linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.74) 54%, rgba(0, 0, 0, 0.28) 100%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.22) 40%, rgba(0, 0, 0, 0.9) 100%);
          }

          .host-hero-content {
            min-height: 760px;
            justify-content: flex-start;
            padding-top: 124px;
            padding-bottom: 320px;
          }

          .host-hero-copy {
            max-width: 330px;
          }

          .host-hero-cta {
            min-height: 56px;
            width: min(100%, 330px);
            padding: 15px 22px;
            font-size: 16px;
          }

          .host-hero-feature-strip {
            bottom: 18px;
            width: calc(100vw - 36px);
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .host-hero-feature {
            min-height: 72px;
            gap: 9px;
            padding: 12px;
          }

          .host-hero-feature + .host-hero-feature::before {
            display: none;
          }

          .host-hero-feature:nth-child(odd)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 14px;
            bottom: 14px;
            width: 1px;
            background: rgba(255, 255, 255, 0.16);
          }

          .host-hero-feature:nth-child(n + 3) {
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .host-hero-feature:last-child {
            grid-column: span 2;
            justify-content: center;
          }

          .host-hero-feature:last-child::after {
            display: none;
          }

          .host-hero-icon {
            height: 40px;
            width: 40px;
          }

          .host-hero-feature .min-w-0 {
            font-size: 14px;
            line-height: 1.22;
          }

          .host-payments-section {
            min-height: auto;
            padding: 86px 0;
          }

          .host-payments-bg {
            object-position: 58% center;
          }

          .host-payments-copy {
            max-width: 340px;
          }

          .host-payment-cards {
            margin-top: 42px;
            grid-template-columns: 1fr;
          }

          .host-payment-card {
            min-height: 250px;
            padding: 24px;
          }

          .host-payment-icon {
            height: 58px;
            width: 58px;
          }

          .host-payment-card h3 {
            font-size: 25px;
          }

          .host-payment-card p {
            font-size: 16px;
          }

          .host-payments-button {
            min-height: 58px;
            min-width: 190px;
          }

          .host-how-inner {
            display: block;
            min-height: auto;
            padding-block: 66px 34px;
          }

          .host-how-copy {
            max-width: 100%;
          }

          .host-how-eyebrow {
            font-size: 16px;
          }

          .host-how-title {
            margin-top: 28px;
          }

          .host-how-description {
            max-width: 320px;
          }

          .host-how-card-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .host-how-visual {
            margin-top: 42px;
            min-height: 360px;
          }

          .host-how-laptop {
            left: 16%;
            top: 20px;
            width: 82%;
            max-height: 210px;
          }

          .host-how-mobile {
            left: -10px;
            bottom: 42px;
            width: 32%;
            max-height: 260px;
          }

          .host-how-payment {
            right: 4px;
            bottom: 44px;
            width: 26%;
            max-height: 250px;
          }

          .host-how-footer {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            margin-top: 16px;
            grid-template-columns: 1fr;
          }

          .host-how-footer-item {
            justify-content: flex-start;
            min-height: 56px;
          }

          .host-how-footer-item + .host-how-footer-item::before {
            inset: 0 auto auto 18px;
            width: calc(100% - 36px);
            height: 1px;
          }

          .host-where-inner {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 66px 0;
          }

          .host-where-title,
          .host-where-copy-text {
            max-width: 340px;
          }

          .host-where-button {
            width: 100%;
            justify-content: center;
          }

          .host-where-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(3, 150px);
          }

          .host-where-card,
          .host-where-card-content {
            min-height: 0;
          }

          .host-where-map {
            height: 300px;
            min-height: 0;
          }

          .host-who-inner {
            padding: 66px 0;
          }

          .host-who-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .host-who-copy-text {
            max-width: 340px;
          }

          .host-who-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .host-who-card,
          .host-who-card-content {
            min-height: 220px;
          }

          .host-who-strip {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 20px;
          }

          .host-who-charger {
            height: 124px;
          }

          .host-who-divider {
            height: 1px;
            width: 100%;
          }

          .host-who-actions {
            padding-right: 0;
          }

          .host-charger-options {
            padding: 56px 0;
          }

          .host-charger-panel {
            border-radius: 18px;
            padding: 30px 16px 14px;
          }

          .host-charger-bg {
            height: 500px;
            object-position: 60% center;
          }

          .host-charger-header {
            height: 400px;
            padding: 0;
          }

          .host-charger-grid {
            grid-template-columns: 1fr;
          }

          .host-charger-card {
            min-height: 0;
            grid-template-columns: 0.62fr 1fr;
            gap: 14px;
            padding: 18px;
          }

          .host-charger-art {
            min-height: 170px;
          }

          .host-charger-card h3 {
            margin-top: 32px;
            font-size: 22px;
          }

          .host-charger-card p,
          .host-charger-meta-row {
            font-size: 14px;
          }

          .host-charger-quiz,
          .host-charger-finance,
          .host-charger-benefits {
            padding: 16px;
          }

          .host-charger-action-row {
            grid-template-columns: 1fr;
          }

          .host-charger-action-row .host-charger-quiz,
          .host-charger-action-row .host-charger-finance {
            border-radius: 10px;
          }

          .host-charger-action-row .host-charger-finance {
            border-left: 1px solid rgba(255, 255, 255, 0.12);
            border-top: 0;
          }

          .host-charger-quiz {
            align-items: stretch;
            flex-direction: column;
          }

          .host-charger-quiz-copy {
            gap: 14px;
            font-size: 17px;
          }

          .host-charger-quiz-button {
            width: 100%;
          }

          .host-charger-finance,
          .host-charger-benefits {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .host-charger-finance-item,
          .host-charger-benefit {
            justify-content: flex-start;
            border-left: 0 !important;
          }

          .host-why-section {
            min-height: auto;
          }

          .host-why-layout {
            grid-template-columns: 1fr;
            gap: 34px;
            padding: 66px 0;
          }

          .host-why-content {
            padding: 0;
          }

          .host-why-copy {
            font-size: 17px;
          }

          .host-why-grid,
          .host-why-control {
            grid-template-columns: 1fr;
          }

          .host-why-card {
            grid-template-columns: 64px 1fr;
          }

          .host-why-icon {
            height: 64px;
            width: 64px;
          }

          .host-why-control-item + .host-why-control-item {
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.16);
          }

          .host-why-image-wrap,
          .host-why-image {
            min-height: 360px;
          }
        }

      `}</style>

      <div className="host-page font-sans">
        <section className="host-hero">
          <img
            src="/img/Host/Hosting Banner.png"
            alt="Zvolta charger installed outside a home with an EV parked nearby"
            className="host-hero-bg"
          />
          <div className="host-container host-hero-content">
            <div>
              <span className="host-hero-kicker">
                <Icon name="bolt" className="h-4 w-4 text-[#21D85A]" />
                Host partner program
              </span>
              <h1 className="host-hero-title">
                Host a <span>charger</span>
              </h1>
              <p className="host-hero-copy">
                For small businesses, earn more from your space. For large
                organizations, support ESG goals with real action.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact-us" className="host-hero-cta">
                  Start hosting
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="host-hero-feature-strip">
            {heroHighlights.map((item) => (
              <div className="host-hero-feature" key={item.description}>
                <span className="host-hero-icon">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="min-w-0 text-[15px] font-semibold leading-5 text-white">
                  <span className="block text-[#BDBDBD]">{item.title}</span>
                  <span className="block">{item.description}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="chargers" className="host-charger-options">
          <div className="host-container">
            <div className="host-charger-panel">
              <span className="host-charger-panel-glow" aria-hidden="true" />
              <img
                src="/img/Host/Hosting Banner.png"
                alt="Zvolta charger installed outside a host location"
                className="host-charger-bg"
              />

              <Reveal className="host-charger-header">
                <p className="host-charger-eyebrow">
                  <span>
                    <Icon name="bolt" className="h-5 w-5" />
                  </span>
                  Charger options
                </p>
                <h2 className="host-charger-title">
                  Match charging power to how people use your space
                  <span>.</span>
                </h2>
                <p className="host-charger-copy">
                  Start with the charger that fits your traffic and power
                  supply.
                </p>
              </Reveal>

              <div className="host-charger-grid">
                {chargers.map((charger, index) => {
                  const plan = pricingPlans[index];
                  return (
                    <Reveal key={charger.title} delay={index * 0.08}>
                      <article className="host-charger-card">
                        <span className="host-charger-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="host-charger-art">
                          <ChargerProductVisual variant={index} />
                        </div>
                        <div>
                          <h3>{charger.title}</h3>
                          <p>{charger.description}</p>
                          <div className="host-charger-divider" />
                          <div className="host-charger-meta">
                            <div className="host-charger-meta-row">
                              <span className="host-charger-meta-icon">
                                <Icon
                                  name={index === 0 ? "wallet" : "check"}
                                  className="h-5 w-5"
                                />
                              </span>
                              {index === 0 ? (
                                <span>
                                  Starts from <strong>75k</strong>
                                </span>
                              ) : (
                                <strong>Available</strong>
                              )}
                            </div>
                            <div className="host-charger-meta-row">
                              <span className="host-charger-meta-icon">
                                <Icon
                                  name={index === 2 ? "map" : "shield"}
                                  className="h-5 w-5"
                                />
                              </span>
                              <span>{plan.detail}</span>
                            </div>
                          </div>
                          <SmartLink
                            href={charger.href}
                            className="host-charger-learn"
                          >
                            Learn more
                            <Icon name="arrow" className="h-4 w-4" />
                          </SmartLink>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal className="host-charger-action-row">
                <div className="host-charger-quiz">
                  <div className="host-charger-quiz-copy">
                    <span className="host-charger-quiz-mark">?</span>
                    <span>Not sure which one fits your space?</span>
                  </div>
                  <SecondaryButton
                    href="/contact-us"
                    className="host-charger-quiz-button"
                  >
                    Take the quiz
                  </SecondaryButton>
                </div>

                <div className="host-charger-finance">
                  <div className="host-charger-finance-item">
                    <span className="host-charger-large-icon">
                      <Icon name="plus" className="h-8 w-8" />
                    </span>
                    <span className="host-charger-finance-text">
                      0% interest
                    </span>
                  </div>
                  <div className="host-charger-finance-item">
                    <span className="host-charger-large-icon">
                      <Icon name="wallet" className="h-8 w-8" />
                    </span>
                    <span className="host-charger-finance-text">
                      <span className="text-[#00E5A8]">12 month</span>{" "}
                      installment plans available
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="host-why-section">
          <div className="host-container host-why-layout">
            <Reveal className="host-why-content">
              <p className="host-why-eyebrow">
                <span className="host-why-index">01</span>
                Why
              </p>
              <h2 className="host-why-title">
                Turn waiting time into <span>site value.</span>
              </h2>
              <p className="host-why-copy">
                Add a useful service and turn waiting time into site value.
                Bring more visitors, increase dwell time, earn from every
                session, and support ESG goals.
              </p>

              <div className="host-why-grid">
                {whyHostCards.map((item) => (
                  <div className="host-why-card" key={item.copy}>
                    <span className="host-why-icon">
                      <Icon name={item.icon} className="h-9 w-9" />
                    </span>
                    <span>{item.copy}</span>
                  </div>
                ))}
              </div>

              <div className="host-why-control">
                {hostControlCards.map((item) => (
                  <div className="host-why-control-item" key={item.copy}>
                    <span className="host-why-control-icon">
                      <Icon name={item.icon} className="h-8 w-8" />
                    </span>
                    <span>{item.copy}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="host-why-visual">
              <div className="host-why-image-wrap">
                <img
                  src="/img/Host/03.png"
                  alt="Zvolta host charging location"
                  className="host-why-image"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="host-how-section">
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
                  <Icon
                    name={item.icon}
                    className="host-how-footer-icon h-6 w-6"
                  />
                  <span>{item.copy}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="host-where-section">
          <div className="host-container host-where-inner">
            <Reveal className="host-where-copy">
              <p className="host-where-eyebrow">
                <span className="host-where-number">03</span>
                Where
              </p>
              <h2 className="host-where-title">
                Built for places where people already stop.
              </h2>
              <p className="host-where-copy-text">
                High dwell time. Clear access. Everyday footfall.
              </p>
              <PrimaryButton href="/charge" className="host-where-button">
                See charger map
              </PrimaryButton>
            </Reveal>

            <div className="host-where-grid">
              {hostWhereLocations.map((location, index) => (
                <Reveal key={location.title} delay={index * 0.035}>
                  <article className="host-where-card">
                    <img src={location.image} alt={location.title} />
                    <div className="host-where-card-content">
                      <span className="host-where-card-icon">
                        <Icon name={location.icon} className="h-9 w-9" />
                      </span>
                      <h3 className="host-where-card-title">
                        {location.title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="host-where-map">
              <img
                src="/img/Host/locations.png"
                alt="Zvolta charging locations map"
              />
            </Reveal>
          </div>
        </section>

        <section className="host-who-section">
          <div className="host-container host-who-inner">
            <div className="host-who-top">
              <Reveal className="host-who-copy">
                <p className="host-who-eyebrow">
                  <span className="host-who-number">04</span>
                  Who
                </p>
                <h2 className="host-who-title">
                  For location owners who want to <span>host chargers.</span>
                </h2>
                <p className="host-who-copy-text">
                  Whether you manage one location or many, it's easy to get
                  started.
                </p>
              </Reveal>

              <div className="host-who-cards">
                {hostWhoCards.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.035}>
                    <article className="host-who-card">
                      <img src={item.image} alt={item.title} />
                      <div className="host-who-card-content">
                        <h3 className="host-who-card-title">{item.title}</h3>
                        <span className="host-who-card-line" />
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.12} className="host-who-strip">
              <div className="host-who-charger">
                <ChargerProductVisual variant={2} />
              </div>
              <h3 className="host-who-strip-title">
                You set the price.
                <br />
                You set the timings.
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
                <SmartLink href="/host" className="host-who-learn">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </div>
            </Reveal>
          </div>
        </section>

        <PageSection>
          <SectionIntro
            eyebrow="Installation options"
            title="Clean mounting options for different spaces."
            copy="Wall, standing, and hanging setups keep the install practical."
          />
          <div className="mt-12 grid max-w-2xl gap-6 md:grid-cols-2">
            {installationOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 0.05}>
                <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-4">
                  <InstallationDiagram type={option.type} />
                  <p className="mt-4 text-sm font-semibold text-white">
                    {option.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:flex-row sm:items-center">
            <p className="text-lg font-semibold text-white">
              Installation is free for all chargers
            </p>
            <PrimaryButton href="/contact-us">
              Book a site assessment
            </PrimaryButton>
          </Reveal>
        </PageSection>

        <PageSection>
          <SectionIntro
            eyebrow="Safety and reliability"
            title="Built for everyday charging in local conditions."
            copy="Protection, compatibility, and support are part of the system."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((item, index) => (
              <Reveal key={item.feature} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
                  <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                    <Icon name="bolt" className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.feature}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <SecondaryButton href="/charge" className="mt-10">
            View full specs
          </SecondaryButton>
        </PageSection>

        <section className="host-payments-section">
          <img
            src="/img/Host/Pricing Section.png"
            alt="Zvolta charger payment flow at a host location"
            className="host-payments-bg"
          />
          <div className="host-container">
            <Reveal className="host-payments-content">
              <p className="mb-6 text-sm font-bold uppercase text-[#00E5A8]">
                Payments made simple
              </p>
              <h2 className="host-payments-title">
                Payments made simple<span>.</span>
              </h2>
              <p className="host-payments-copy">
                Users find your charger in the app and complete the flow through
                Zvolta.
              </p>
            </Reveal>

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

            <SecondaryButton href="/host" className="host-payments-button">
              Learn more
            </SecondaryButton>
          </div>
        </section>

        <section className="border-b border-[#1F1F1F] bg-[#111111] py-[120px] md:py-[132px]">
          <div className="host-container grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Marketing and visibility
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
                Get free marketing for your site
              </h2>
              <div className="mt-8 grid gap-4">
                {marketingPoints.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] text-[#00E5A8]">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <p className="text-base font-medium text-white">{point}</p>
                  </div>
                ))}
              </div>
              <PrimaryButton href="/contact-us" className="mt-9">
                Get free marketing for your site
              </PrimaryButton>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-8">
                <div className="flex items-center justify-between gap-6">
                  <img
                    src="/img/full_logowhite.png"
                    alt="Zvolta"
                    className="h-9 w-auto"
                  />
                  <span className="rounded-lg border border-[#1F1F1F] px-3 py-2 text-xs font-semibold uppercase text-[#00E5A8]">
                    Partner badge
                  </span>
                </div>
                <div className="my-12 h-px bg-[#1F1F1F]" />
                <p className="max-w-md text-[34px] font-semibold leading-[1.08] text-white md:text-[44px]">
                  Zvolta Clean Energy Partner
                </p>
                <p className="mt-6 max-w-sm text-base leading-7 text-[#A1A1A1]">
                  Show visitors that your space supports clean energy and EV
                  adoption.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <PageSection>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Add more as you grow
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
                Start with one charger. Add more anytime.
              </h2>
              <div className="mt-8 grid gap-4 text-xl font-semibold text-white">
                <p>Connect chargers using add-on modules</p>
                <p>Each module costs 50% of the charger price</p>
              </div>
              <SecondaryButton href="/charge" className="mt-9">
                Explore add-ons
              </SecondaryButton>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <ChargerIllustration />
                    <p className="text-sm font-semibold text-[#A1A1A1]">
                      1 charger
                    </p>
                  </div>
                  <Icon name="arrow" className="h-8 w-8 text-[#A1A1A1]" />
                  <div className="flex items-end gap-4">
                    <ChargerIllustration size="small" />
                    <ChargerIllustration />
                    <ChargerIllustration size="small" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <PageSection id="roi">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <SectionIntro
              eyebrow="Estimate your earnings"
              title="See how much your site can earn."
              copy="Adjust charger count, price, and usage to model a simple monthly estimate."
            />
            <Reveal className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8">
              <div className="grid gap-5">
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Number of chargers
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={chargerCount}
                    onChange={(event) =>
                      setChargerCount(Number(event.target.value))
                    }
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Price per unit
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={unitPrice}
                    onChange={(event) =>
                      setUnitPrice(Number(event.target.value))
                    }
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Usage
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={usage}
                    onChange={(event) => setUsage(Number(event.target.value))}
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
              </div>
              <div className="mt-8 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-6">
                <p className="text-sm font-semibold text-[#A1A1A1]">
                  Monthly earnings
                </p>
                <p className="mt-4 text-[40px] font-semibold leading-none text-white md:text-[52px]">
                  PKR {monthlyEarnings.toLocaleString("en-PK")}
                </p>
              </div>
              <SecondaryButton
                href="/charging-partners#roi-calculator"
                className="mt-6"
              >
                Try ROI calculator
              </SecondaryButton>
            </Reveal>
          </div>
        </PageSection>

        {/* <PageSection id="pricing">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple charger options with flexible payments."
            copy="3kW starts from 75k. 7kW and 22kW are available after site review."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <h3 className="text-[36px] font-semibold leading-none text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-6 text-xl font-semibold text-white">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#A1A1A1]">
                    {plan.detail}
                  </p>
                  <SmartLink
                    href={plan.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white transition-colors group-hover:text-[#00E5A8]"
                  >
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-2">
            <p className="text-xl font-semibold text-white">0% interest</p>
            <p className="text-right text-xl font-semibold text-white">
              12 month installment plans available
            </p>
          </Reveal>
          <SecondaryButton href="#pricing" className="mt-8">
            View pricing
          </SecondaryButton>
        </PageSection> */}

        <section className="border-b border-[#1F1F1F] py-24 md:py-28">
          <div className="host-container">
            <SectionIntro
              eyebrow="Already hosting"
              title="Businesses use Zvolta chargers to earn and support sustainability."
              copy="Partner sites get app visibility, cleaner customer service, and a practical ESG action."
            />

            <div className="host-logo-strip mt-12">
              <motion.div
                className="host-logo-track"
                aria-label="Zvolta partner logos"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {[0, 1].map((setIndex) => (
                  <div
                    key={setIndex}
                    className="host-logo-set"
                    aria-hidden={setIndex === 1 ? "true" : undefined}
                  >
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                      <div
                        key={`${logo.alt}-${setIndex}-${index}`}
                        className="flex h-24 w-[220px] shrink-0 items-center justify-center rounded-lg border border-[#1F1F1F] bg-[#111111] px-8 grayscale transition duration-300 hover:border-[#00E5A8]/35 hover:grayscale-0 sm:w-[240px]"
                      >
                        <img
                          src={logo.src}
                          alt={setIndex === 0 ? logo.alt : ""}
                          className="max-h-11 max-w-full object-contain opacity-65 invert"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10">
              <SecondaryButton href="/partners">
                Explore partners
              </SecondaryButton>
            </div>
          </div>
        </section>

        <PageSection>
          <SectionIntro
            eyebrow="Real stories"
            title="How hosts use charging to create site value."
            copy="Practical examples from workspaces, restaurants, and sustainability-led businesses."
          />
          <div className="host-stories mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.05}>
                <article className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] sm:w-[390px]">
                  <img
                    src={story.image}
                    alt=""
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase text-[#00E5A8]">
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
          <SecondaryButton href="/stories" className="mt-8">
            Explore stories
          </SecondaryButton>
        </PageSection>

        <PageSection>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <SectionIntro
              eyebrow="Need help"
              title="Tell us about your space and we will guide you."
              copy="Share your location type, expected traffic, and the power details you already know."
            />
            <Reveal>
              <form
                className="grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Name</span>
                  <input
                    type="text"
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Email
                  </span>
                  <input
                    type="email"
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Type</span>
                  <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]">
                    <option>Apartment building</option>
                    <option>Office or coworking</option>
                    <option>Restaurant or cafe</option>
                    <option>University or hospital</option>
                    <option>Parking or public space</option>
                    <option>Commercial property</option>
                  </select>
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Message
                  </span>
                  <textarea
                    rows="5"
                    className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
                >
                  Get a free consultation
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </PageSection>

        <section className="py-24 md:py-32">
          <div className="host-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-[40px] font-semibold leading-[1.08] text-white md:text-[56px]">
                Bring EV charging to your space
              </p>
              <PrimaryButton href="/contact-us" className="mt-8">
                Start hosting
              </PrimaryButton>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
