import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RotatingText from "../RotatingText";
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

const chargerOptionCards = [
  {
    title: "3kW Charger",
    description: "Best for small spaces and low usage.",
    href: "/3kw-charger",
    features: [],
    image:
      "https://res.cloudinary.com/diywraupt/image/upload/v1780392810/7Watt22W_zdchgq.png",
    imageSize: "large",
    power: "Upto 3kW",
    bestFor: "Two-Wheelers & Four-Wheelers",
    location: "Homes, Shops & Small Offices",
    price: "PKR 74,999",
  },
  {
    title: "7kW Charger",
    description: "Perfect balance of speed and efficiency.",
    href: "/7kw-charger",
    features: [],
    image:
      "https://res.cloudinary.com/diywraupt/image/upload/v1780392810/3W_n39hdb.png",
    imageSize: "large",
    power: "Upto 7kW",
    bestFor: "Cars & Daily Charging",
    location: "Apartments, Workplaces & Commercial Spaces",
    price: "PKR 199,999",
    popular: true,
  },
  {
    title: "22kW Charger",
    description: "High power for high traffic locations.",
    href: "/22kw-charger",
    features: [],
    image:
      "https://res.cloudinary.com/diywraupt/image/upload/v1780392810/3W_n39hdb.png",
    imageSize: "large",
    power: "Upto 22kW",
    bestFor: "High Traffic Charging",
    location: "Commercial, Public & Fleet Use",
    price: "PKR 249,999",
  },
];

const chargerOptionBenefits = [
  {
    icon: "bolt",
    title: "Safe & reliable",
    copy: "Built with advanced protection",
  },
  {
    icon: "shield",
    title: "Smart & efficient",
    copy: "Optimize power & reduce costs",
  },
  {
    icon: "tools",
    title: "Easy installation",
    copy: "Wall or pedestal mount options",
  },
  {
    icon: "chart",
    title: "Scalable solutions",
    copy: "From small sites to high traffic areas",
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
    problems: {
      title: "Uncontrolled Charging Chaos",
      footer: "Unmanaged charging = Fire Risk + Disputes + Expense",
      footerIcon: "flame",
      items: [
        {
          icon: "tools",
          title: "High Cost",
          copy: "Residents pay PKR 25k-80k+ for individual wiring.",
        },
        {
          icon: "alert",
          title: "Fire Risk",
          copy: "Unmanaged wiring creates a serious safety hazard.",
        },
        {
          icon: "receipt",
          title: "Billing Disputes",
          copy: "Power theft from common areas raises the shared electricity bill.",
        },
        {
          icon: "no-account",
          title: "Zero Accountability",
          copy: "No tracking, no billing, and no cost recovery.",
        },
      ],
    },
    benefits: {
      title: "Managed EV Charging",
      footer: "No Cables. No Fights. Total Control.",
      footerIcon: "plug-check",
      items: [
        {
          icon: "plug-check",
          title: "No Rewiring",
          copy: "Residents charge via the central pod; zero unit-to-parking wiring needed.",
        },
        {
          icon: "meter",
          title: "Accurate Metering",
          copy: "Digital tracking ensures every kWh is billed to the correct user.",
        },
        {
          icon: "lock",
          title: "Guaranteed Safety",
          copy: "Built-in overload, surge, and fire protection.",
        },
        {
          icon: "stairs",
          title: "Modular & Scalable",
          copy: "Start small with one pod; expand capacity easily.",
        },
        {
          icon: "dollar",
          title: "Higher Building Value",
          copy: "EV-ready buildings attract premium tenants and sell faster.",
        },
      ],
    },
  },
  {
    title: "Offices",
    icon: "briefcase",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
    problems: {
      title: "Workplace Charging Gaps",
      footer: "No charging = Missed savings + Lower adoption + Weak ESG proof",
      footerIcon: "alert",
      items: [
        {
          icon: "users",
          title: "Employee Charging Gap",
          copy: "Employees want to switch to EVs but lack workplace charging access.",
        },
        {
          icon: "wallet",
          title: "Missed Cost Savings",
          copy: "Daily fuel costs remain high for teams and staff.",
        },
        {
          icon: "parking",
          title: "Parking Friction",
          copy: "Unmanaged charging creates confusion around access and usage.",
        },
        {
          icon: "chart",
          title: "No ESG Visibility",
          copy: "Companies can't track clean mobility impact properly.",
        },
      ],
    },
    benefits: {
      title: "EV-Ready Workplace",
      footer: "Better Commutes. Happier Teams. Measurable ESG.",
      footerIcon: "chart",
      items: [
        {
          icon: "users",
          title: "Employee EV Support",
          copy: "Give teams a practical charging benefit at work.",
        },
        {
          icon: "wallet",
          title: "Lower Commute Costs",
          copy: "Free or discounted charging can reduce daily fuel expense.",
        },
        {
          icon: "shield",
          title: "Smart Access Control",
          copy: "Decide who charges, when they charge, and how much they pay.",
        },
        {
          icon: "chart",
          title: "ESG Reporting",
          copy: "Track usage, energy, and clean mobility impact.",
        },
        {
          icon: "briefcase",
          title: "Stronger Employer Brand",
          copy: "Position the workplace as modern, responsible, and EV-ready.",
        },
      ],
    },
  },
  {
    title: "Restaurants",
    icon: "utensils",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    problems: {
      title: "Missed Footfall Opportunity",
      footer:
        "No charging = Less dwell time + Missed customers + Missed revenue",
      footerIcon: "alert",
      items: [
        {
          icon: "clock",
          title: "Short Dwell Time",
          copy: "Customers leave quickly when there's no reason to stay longer.",
        },
        {
          icon: "users",
          title: "Lost EV Customers",
          copy: "EV users choose places where they can charge while they eat.",
        },
        {
          icon: "wallet",
          title: "No Added Revenue",
          copy: "Parking space sits idle instead of becoming a paid service.",
        },
        {
          icon: "leaf",
          title: "Low Green Differentiation",
          copy: "The location misses a simple way to look modern and sustainable.",
        },
      ],
    },
    benefits: {
      title: "Charging That Grows Visits",
      footer: "Serve Food. Charge EVs. Grow Footfall.",
      footerIcon: "plug-check",
      items: [
        {
          icon: "clock",
          title: "Increase Dwell Time",
          copy: "Customers can charge while dining, encouraging longer visits.",
        },
        {
          icon: "pin",
          title: "Attract EV Users",
          copy: "Bring in riders and drivers actively looking for charging spots.",
        },
        {
          icon: "wallet",
          title: "Generate Revenue",
          copy: "Every charging session can create a new income stream.",
        },
        {
          icon: "star",
          title: "Branded Experience",
          copy: "Turn your location into a visible clean-energy destination.",
        },
        {
          icon: "map",
          title: "Compact Setup",
          copy: "Small charger footprint works well for tight commercial spaces.",
        },
      ],
    },
  },
  {
    title: "Universities",
    icon: "graduation",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    problems: {
      title: "Campus Charging Pressure",
      footer: "No charging = Missed adoption + Parking stress + Weak ESG proof",
      footerIcon: "alert",
      items: [
        {
          icon: "bolt",
          title: "Growing EV Demand",
          copy: "More students and faculty are switching to electric bikes and cars.",
        },
        {
          icon: "parking",
          title: "Campus Parking Chaos",
          copy: "Unstructured charging can create disorder in parking areas.",
        },
        {
          icon: "leaf",
          title: "Weak ESG Proof",
          copy: "Sustainability claims are hard to show without measurable action.",
        },
        {
          icon: "graduation",
          title: "Missed Campus Amenity",
          copy: "Students and staff lose access to a practical daily benefit.",
        },
      ],
    },
    benefits: {
      title: "Smart Campus Charging",
      footer: "Cleaner Campus. Smart Parking. Stronger Reputation.",
      footerIcon: "chart",
      items: [
        {
          icon: "users",
          title: "Student & Faculty Adoption",
          copy: "Support EV users with reliable on-campus charging.",
        },
        {
          icon: "parking",
          title: "Structured Parking Zones",
          copy: "Create organized EV charging areas inside the campus.",
        },
        {
          icon: "graduation",
          title: "Academic Reputation",
          copy: "Build a stronger sustainability story for rankings and PR.",
        },
        {
          icon: "chart",
          title: "Measurable Impact",
          copy: "Track energy usage and clean mobility data.",
        },
        {
          icon: "shield",
          title: "Future-Ready Campus",
          copy: "Position the university as a clean-energy leader.",
        },
      ],
    },
  },
  {
    title: "Hospitals",
    icon: "hospital",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    problems: {
      title: "Critical Parking Pressure",
      footer:
        "No charging = Staff inconvenience + Parking pressure + Missed trust",
      footerIcon: "alert",
      items: [
        {
          icon: "clock",
          title: "Long Staff Shifts",
          copy: "Doctors, nurses, and staff often need reliable charging during extended hours.",
        },
        {
          icon: "parking",
          title: "Parking Pressure",
          copy: "Hospital parking is already busy and difficult to manage.",
        },
        {
          icon: "plug",
          title: "No Charging Support",
          copy: "Staff and visitors have limited access to EV charging on-site.",
        },
        {
          icon: "leaf",
          title: "Weak Public ESG Action",
          copy: "Sustainability efforts need visible, practical proof.",
        },
      ],
    },
    benefits: {
      title: "Reliable Site Charging",
      footer: "Support Staff. Organize Parking. Build Trust.",
      footerIcon: "plug-check",
      items: [
        {
          icon: "hospital",
          title: "Support for Doctors & Staff",
          copy: "Provide critical charging support for long-shift workers.",
        },
        {
          icon: "parking",
          title: "Structured Parking",
          copy: "Designated EV zones improve order and movement inside the campus.",
        },
        {
          icon: "pin",
          title: "Visitor Convenience",
          copy: "Patients and visitors get a practical charging option.",
        },
        {
          icon: "shield",
          title: "Public Trust",
          copy: "Show visible commitment to clean energy and better infrastructure.",
        },
        {
          icon: "chart",
          title: "ESG & Healthcare Reputation",
          copy: "Strengthen the hospital's sustainability and innovation image.",
        },
      ],
    },
  },
  {
    title: "Parking Lots",
    icon: "parking",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
    problems: {
      title: "Idle Space, Missed Revenue",
      footer: "Empty infrastructure = Missed revenue + Low EV value",
      footerIcon: "alert",
      items: [
        {
          icon: "parking",
          title: "Idle Parking Space",
          copy: "Parking areas earn only from parking, not from added services.",
        },
        {
          icon: "pin",
          title: "Low Destination Value",
          copy: "Users don't choose the location if charging is unavailable.",
        },
        {
          icon: "wallet",
          title: "No Revenue Tracking",
          copy: "Charging cannot be monetized without proper metering.",
        },
        {
          icon: "alert",
          title: "Poor EV Readiness",
          copy: "The space feels outdated as EV adoption grows.",
        },
      ],
    },
    benefits: {
      title: "Smart Charging Hub",
      footer: "Same Space. New Revenue. Smart Parking.",
      footerIcon: "plug-check",
      items: [
        {
          icon: "plug-check",
          title: "Turn Parking Into Charging Hubs",
          copy: "Convert existing spaces into smart EV charging points.",
        },
        {
          icon: "wallet",
          title: "Generate New Revenue",
          copy: "Every session creates an additional income stream.",
        },
        {
          icon: "pin",
          title: "Attract EV Users",
          copy: "Bring in drivers and riders looking for reliable charging spots.",
        },
        {
          icon: "chart",
          title: "Real-Time Tracking",
          copy: "Monitor sessions, units consumed, and revenue.",
        },
        {
          icon: "parking",
          title: "Future-Ready Asset",
          copy: "Make the property more valuable and EV-friendly.",
        },
      ],
    },
  },
];

const hostWhoCards = [
  {
    title: "Business Owners",
    image: "/img/small-chai-business.jpg",
  },
  {
    title: "Property Owners",
    image: "/img/home-owners.jpg",
  },
  {
    title: "Facility Managers",
    image: "/img/Host/02.png",
  },
  {
    title: "Parking Operators",
    image: "/img/Host/locations.png",
  },
  {
    title: "Retail & Hospitality Spaces",
    image: "/img/Host/Host.png",
  },
  {
    title: "Commercial Building Owners",
    image: "/img/Host/03.jpg",
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

const hostRotatingWords = ["price.", "timings.", "access.", "earnings."];

const installationOptions = [
  {
    title: "Vertical wall",
    type: "vertical",
    icon: "phone",
    image:
      "https://res.cloudinary.com/diywraupt/image/upload/v1780395125/wall_zhtkzy.png",
    description:
      "Sleek wall-mounted installation for a clean, space-saving setup.",
    ideal: "Ideal for garages & indoor walls",
  },
  {
    title: "Standing",
    type: "standing",
    icon: "plug",
    image:
      "https://res.cloudinary.com/diywraupt/image/upload/v1780395124/stand_l17ao3.png",
    description: "Freestanding installation for flexible placement anywhere.",
    ideal: "Ideal for driveways & open areas",
  },
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
    price: "PKR 74,999",
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
  { icon: "flag", title: "100% Made in", description: "Pakistan" },
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

const roiHighlights = [
  {
    icon: "bolt",
    title: "Fast estimate",
    copy: "See your potential monthly earnings in seconds.",
  },
  {
    icon: "chart",
    title: "Simple monthly model",
    copy: "Based on price and typical usage per charger.",
  },
  {
    icon: "shield",
    title: "No commitment",
    copy: "Explore your opportunity with zero obligation.",
  },
];

const youtubeReels = [
  {
    id: "593J_FRoru4",
    title: "This is us. Not announcing anything yet",
  },
  {
    id: "avV8EaQIlsw",
    title: "We're now live at IBA main campus",
  },
  {
    id: "CJuGPOKuTpU",
    title: "How to sign up on ZVolta app",
  },
  {
    id: "O1g0jwy7oLY",
    title: "Low battery ko bhool jao, Zvolta is here",
  },
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

  if (name === "play") {
    return (
      <svg {...props} fill="currentColor" stroke="none">
        <path d="M9 7.2v9.6L17 12 9 7.2Z" />
      </svg>
    );
  }

  if (name === "flag") {
    return (
      <svg {...props}>
        <path d="M5 21V4" />
        <path d="M5 5.5c2.8-1.4 5.2-1.4 8 0 2.1 1 3.8.9 6-.3v9.1c-2.2 1.2-3.9 1.3-6 .3-2.8-1.4-5.2-1.4-8 0" />
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

  if (name === "plug-check") {
    return (
      <svg {...props}>
        <path d="M8 2v6" />
        <path d="M16 2v6" />
        <path d="M6 8h12v4a6 6 0 0 1-12 0V8Z" />
        <path d="M12 18v4" />
        <path d="m15.5 17.5 2 2 4-4" />
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

  if (name === "dollar") {
    return (
      <svg {...props}>
        <path d="M12 2v20" />
        <path d="M17 6.5c-1.1-.9-2.7-1.4-4.4-1.4-2.4 0-4.2 1.1-4.2 2.8 0 4.2 9.2 2 9.2 6.4 0 1.9-1.9 3.2-4.7 3.2-2 0-3.8-.6-5.1-1.7" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...props}>
        <path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
        <circle cx="9.5" cy="7.5" r="3.5" />
        <path d="M22 20v-1.6a4 4 0 0 0-3-3.9" />
        <path d="M16 4.4a3.5 3.5 0 0 1 0 6.8" />
      </svg>
    );
  }

  if (name === "alert") {
    return (
      <svg {...props}>
        <path d="M12 3 22 20H2L12 3Z" />
        <path d="M12 9v4.5" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (name === "receipt") {
    return (
      <svg {...props}>
        <path d="M6 3h12v18l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2L6 21V3Z" />
        <path d="M9 8h6" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </svg>
    );
  }

  if (name === "no-account") {
    return (
      <svg {...props}>
        <path d="M8.5 10a3.5 3.5 0 1 1 7 0" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        <path d="m8 8 8 8" />
        <path d="m16 8-8 8" />
      </svg>
    );
  }

  if (name === "meter") {
    return (
      <svg {...props}>
        <path d="M4 14a8 8 0 1 1 16 0" />
        <path d="M6.5 19h11" />
        <path d="m12 14 4-5" />
        <path d="M8 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...props}>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  if (name === "stairs") {
    return (
      <svg {...props}>
        <path d="M4 18h4v-4h4v-4h4V6h4" />
        <path d="M4 22h16" />
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

  if (name === "leaf") {
    return (
      <svg {...props}>
        <path d="M4 14c7-10 14-10 17-10-1 9-5 16-13 16a5 5 0 0 1-4-6Z" />
        <path d="M4 20c3-5 7-8 12-10" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...props}>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    );
  }

  if (name === "flame") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.7 2.4c.5 3.1-.9 4.9-2.6 6.8-1.5 1.7-3.2 3.6-3.2 6.2a5.1 5.1 0 0 0 5.2 5.2 5.5 5.5 0 0 0 5.7-5.7c0-3.4-1.9-6.1-5.1-12.5Zm-.5 15.7a2.5 2.5 0 0 1-2.6-2.5c0-1.2.8-2.1 1.7-3.1.7-.8 1.4-1.6 1.6-2.8 1.4 2.5 2 4 2 5.5a2.6 2.6 0 0 1-2.7 2.9Z" />
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

  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-8" />
        <path d="M22 19V3" />
        <path d="M2 19h22" />
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

function ShutterExpand({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`host-shutter-panel ${className}`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
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
        <p className="mb-4 text-xs font-semibold uppercase text-z-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
        {title}
      </h2>
      {copy ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-4 max-w-2xl text-base leading-7 text-zinc-400`}
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-z-green px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-z-green/45 ${className}`}
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-z-green/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
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
      <div className="absolute inset-x-3 top-0 h-full rounded-lg border border-white/10 bg-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto mt-4 h-3 w-10 rounded-sm bg-zinc-800" />
        <div className="mx-auto mt-4 h-12 w-10 rounded-md border border-white/10 bg-z-black" />
        <div className="absolute bottom-4 left-5 h-2 w-2 rounded-full bg-z-green" />
        <div className="absolute bottom-4 right-5 h-2 w-2 rounded-full bg-zinc-700" />
      </div>
      <div className="absolute bottom-8 right-0 h-12 w-10 rounded-br-full border-b border-r border-white/10" />
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
    <div className="grid h-40 place-items-center rounded-lg border border-white/10 bg-z-black">
      {type === "vertical" ? (
        <div className="h-28 w-16 rounded-md border border-white/10 bg-zinc-900 p-2">
          <div className="h-full w-5 rounded-sm bg-zinc-800" />
        </div>
      ) : null}
      {type === "horizontal" ? (
        <div className="h-16 w-28 rounded-md border border-white/10 bg-zinc-900 p-2">
          <div className="h-5 w-full rounded-sm bg-zinc-800" />
        </div>
      ) : null}
      {type === "square" ? (
        <div className="grid h-24 w-24 place-items-center rounded-md border border-white/10 bg-zinc-900">
          <div className="h-9 w-9 rounded-sm bg-zinc-800" />
        </div>
      ) : null}
      {type === "standing" ? (
        <div className="flex flex-col items-center">
          <ChargerIllustration size="small" />
          <div className="mt-2 h-1 w-20 rounded-full bg-white/10" />
        </div>
      ) : null}
      {type === "hanging" ? (
        <div className="relative h-28 w-28">
          <div className="absolute left-1/2 top-0 h-9 w-px bg-white/10" />
          <div className="absolute left-1/2 top-9 h-16 w-12 -translate-x-1/2 rounded-md border border-white/10 bg-zinc-900" />
          <div className="absolute bottom-0 left-[58px] h-9 w-9 rounded-full border border-l-transparent border-t-transparent border-white/10" />
        </div>
      ) : null}
    </div>
  );
}

function InstallationVisual({ type, image, title }) {
  return (
    <div
      className={`host-installation-visual host-installation-visual-${type}`}
    >
      <span className="host-installation-vignette" />
      <img
        src={image}
        alt={`${title} installation`}
        className="host-installation-image"
      />
    </div>
  );
}

function InstallationOptionsSection({ onCollapse }) {
  return (
    <section
      id="installation"
      className="host-section host-installation-section"
    >
      {onCollapse ? (
        <button
          type="button"
          className="host-collapse-button"
          aria-label="Collapse installation options"
          onClick={onCollapse}
        >
          <IoClose className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : null}
      <div className="host-container">
        <Reveal className="host-installation-intro">
          <p className="host-installation-eyebrow">Installation options</p>
          <h2 className="host-installation-title">
            Clean mounting options
            <br />
            for <span>different spaces.</span>
          </h2>
          <p className="host-installation-copy">
            Wall, standing, and hanging setups keep the install practical.
          </p>
        </Reveal>

        <div className="host-installation-grid">
          {installationOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.05}>
              <article className="host-installation-card">
                <InstallationVisual
                  type={option.type}
                  image={option.image}
                  title={option.title}
                />
                <div className="host-installation-content">
                  <span className="host-installation-icon">
                    <Icon name={option.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="host-installation-card-title">
                    {option.title}
                  </h3>
                  <p className="host-installation-card-copy">
                    {option.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="host-installation-cta">
          <div className="host-installation-cta-copy">
            <span className="host-installation-cta-icon">
              <Icon name="tools" className="h-8 w-8" />
            </span>
            <span>
              <h3>Installation is free for all chargers</h3>
              <p>
                Our experts handle everything, so you can power up with ease.
              </p>
            </span>
          </div>
          <PrimaryButton
            href="/contact-us"
            className="host-installation-button"
          >
            Book a site assessment
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}

function HostYoutubeReelsSection() {
  return (
    <section className="host-youtube-reels-section">
      <span
        className="host-reels-glow host-reels-glow-left"
        aria-hidden="true"
      />
      <span
        className="host-reels-glow host-reels-glow-right"
        aria-hidden="true"
      />
      <div className="host-container">
        <Reveal className="host-youtube-reels-intro">
          <h2>Zvolta reels from the road</h2>
          <p>
            Short videos from our YouTube channel showing app flows, live sites,
            and EV charging moments.
          </p>
        </Reveal>

        <Reveal className="host-youtube-reels-label" delay={0.06}>
          <span aria-hidden="true" />
          <strong>
            <span className="host-youtube-reels-icon">
              <Icon name="play" className="h-5 w-5" />
            </span>
            YouTube Reels
          </strong>
          <span aria-hidden="true" />
        </Reveal>

        <div className="host-youtube-reels-grid">
          {youtubeReels.map((reel, index) => (
            <Reveal
              as="article"
              className="host-youtube-reel-card"
              delay={0.08 + index * 0.04}
              key={reel.id}
            >
              <iframe
                src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1&playsinline=1`}
                title={reel.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="host-youtube-reels-action" delay={0.12}>
          <SmartLink
            href="https://www.youtube.com/@zvoltaPK"
            target="_blank"
            className="host-youtube-reels-button"
          >
            See more
            <Icon name="arrow" className="h-5 w-5" />
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}

export default function HostPage() {
  const [chargerCount, setChargerCount] = useState(2);
  const [unitPrice, setUnitPrice] = useState(120);
  const [usage, setUsage] = useState(8);
  const [showRoiCalculator, setShowRoiCalculator] = useState(false);
  const [showHostingSections, setShowHostingSections] = useState(false);
  const [showInstallationOptions, setShowInstallationOptions] = useState(false);
  const [activeWhereIndex, setActiveWhereIndex] = useState(0);
  const [wherePanelMode, setWherePanelMode] = useState("benefits");

  const monthlyEarnings = useMemo(
    () => Math.max(0, chargerCount * unitPrice * usage * 30),
    [chargerCount, unitPrice, usage],
  );
  const activeWhereLocation =
    hostWhereLocations[activeWhereIndex] ?? hostWhereLocations[0];
  const activeWherePanel = activeWhereLocation[wherePanelMode];

  return (
    <>
      <style data-page-style="host-page">{`
        .host-page {
          background: #0a0a0a;
          color: #FFFFFF;
          --host-desktop-frame-width: 1300px;
          --host-desktop-frame-height: 800px;
          --host-desktop-frame-pad-x: 24px;
          --host-desktop-frame-pad-y: 88px;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .host-page * {
          box-sizing: border-box;
        }

        .host-shutter-panel {
          overflow: hidden;
          transform-origin: top center;
          will-change: height, clip-path, opacity;
        }

        .host-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .host-section {
          padding: 120px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
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
          background: linear-gradient(to right, #0a0a0a, transparent);
        }

        .host-logo-strip::after {
          right: 0;
          background: linear-gradient(to left, #0a0a0a, transparent);
        }

        .host-partners-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #123327;
          padding: 128px 0 112px;
          background:
            radial-gradient(circle at 86% 32%, rgba(22, 163, 74, 0.2), transparent 24%),
            radial-gradient(circle at 58% 98%, rgba(22, 163, 74, 0.08), transparent 28%),
            linear-gradient(115deg, #030403 0%, #06100d 50%, #020403 100%);
          isolation: isolate;
        }

        .host-partners-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.12) 54%, rgba(0, 0, 0, 0.34)),
            repeating-radial-gradient(circle at 34% 18%, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 4px);
          opacity: 0.42;
        }

        .host-partners-section::after {
          content: '';
          position: absolute;
          inset: auto 0 0;
          z-index: -2;
          height: 42%;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.58), transparent);
          pointer-events: none;
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
          filter:
            drop-shadow(0 0 18px rgba(22, 163, 74, 0.75))
            drop-shadow(0 0 54px rgba(22, 163, 74, 0.35));
        }

        .host-partners-bolt::before,
        .host-partners-bolt::after {
          content: '';
          position: absolute;
          inset: 0;
          clip-path: polygon(58% 0, 96% 0, 70% 39%, 100% 39%, 32% 100%, 54% 52%, 22% 52%);
        }

        .host-partners-bolt::before {
          background: linear-gradient(160deg, rgba(22, 163, 74, 0.95), rgba(22, 163, 74, 0.12));
        }

        .host-partners-bolt::after {
          inset: 4px;
          background: linear-gradient(115deg, #030403 0%, #06100d 55%, #020403 100%);
          opacity: 0.92;
        }

        .host-partners-bolt-soft {
          position: absolute;
          right: 0;
          top: 0;
          z-index: -2;
          width: 48vw;
          height: 100%;
          background:
            radial-gradient(ellipse at 62% 50%, rgba(22, 163, 74, 0.22), transparent 46%),
            linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.08));
          pointer-events: none;
        }

        .host-partners-intro {
          max-width: 950px;
        }

        .host-partners-eyebrow {
          display: flex;
          align-items: center;
          gap: 24px;
          color: #16a34a;
          font-size: 14px;
          font-weight: 850;
          line-height: 1;
          text-transform: uppercase;
        }

        .host-partners-eyebrow::after {
          content: '';
          display: block;
          width: 116px;
          height: 1px;
          background: linear-gradient(90deg, #16a34a, transparent);
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.85);
        }

        .host-partners-title {
          margin-top: 44px;
          max-width: 930px;
          color: #FFFFFF;
          font-size: clamp(44px, 4.25vw, 72px);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: 0;
          text-shadow: 0 14px 38px rgba(0, 0, 0, 0.48);
        }

        .host-partners-title span {
          color: #16a34a;
        }

        .host-partners-copy {
          margin-top: 24px;
          max-width: 820px;
          color: #a1a1aa;
          font-size: clamp(18px, 1.45vw, 26px);
          line-height: 1.45;
        }

        .host-partner-logo-grid {
          position: relative;
          z-index: 1;
          margin-top: 76px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
        }

        .host-partner-logo-card {
          display: grid;
          height: 168px;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(22, 163, 74, 0.35);
          border-radius: 11px;
          background:
            radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.14), transparent 42%),
            rgba(3, 10, 9, 0.72);
          padding: 34px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 24px 72px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(16px);
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            background 0.25s ease;
        }

        .host-partner-logo-card:hover {
          border-color: rgba(22, 163, 74, 0.82);
          background:
            radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.2), transparent 48%),
            rgba(4, 14, 12, 0.82);
          transform: translateY(-2px);
        }

        .host-partner-logo-card img {
          max-height: 74px;
          max-width: 100%;
          object-fit: contain;
          opacity: 0.88;
          filter: none;
        }

        .host-partner-logo-card img.is-inverted {
          filter: grayscale(1) invert(1) brightness(1.75);
        }

        .host-partners-action {
          margin-top: 52px;
        }

        .host-partners-button {
          min-height: 74px;
          min-width: 290px;
          justify-content: space-between;
          border-color: rgba(22, 163, 74, 0.32);
          border-radius: 11px;
          background: rgba(3, 10, 9, 0.62);
          padding: 0 32px;
          color: #FFFFFF;
          font-size: 20px;
          backdrop-filter: blur(16px);
        }

        .host-partners-button:hover {
          border-color: rgba(22, 163, 74, 0.8);
          color: #16a34a;
        }

        .host-final-cta {
          position: relative;
          overflow: hidden;
          --cta-frame-top: 31%;
          --cta-frame-height: 45%;
          --cta-frame-edge: clamp(158px, calc(24vw - 92px), 268px);
          --cta-line-color: rgba(22, 163, 74, 0.45);
          padding: 96px 0 104px;
          background:
            radial-gradient(circle at 0% 46%, rgba(22, 163, 74, 0.18), transparent 25%),
            radial-gradient(circle at 100% 40%, rgba(22, 163, 74, 0.21), transparent 28%),
            linear-gradient(180deg, #050606 0%, #020303 100%);
          isolation: isolate;
        }

        .host-final-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            repeating-radial-gradient(circle at 35% 18%, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 5px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.24), transparent 50%, rgba(0, 0, 0, 0.22));
          opacity: 0.3;
        }

        .host-final-cta::after {
          content: '';
          position: absolute;
          inset: auto 0 0;
          z-index: -2;
          height: 28%;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.62), transparent);
          pointer-events: none;
        }

        .cta-line-left,
        .cta-line-right,
        .cta-bottom-line-left,
        .cta-bottom-line-right {
          position: absolute;
          z-index: 0;
          pointer-events: none;
        }

        .cta-line-left,
        .cta-line-right {
          top: var(--cta-frame-top);
          height: var(--cta-frame-height);
          width: clamp(250px, 24vw, 360px);
          border: 1.5px solid var(--cta-line-color);
          box-shadow:
            0 0 20px rgba(22, 163, 74, 0.16),
            inset 0 0 18px rgba(22, 163, 74, 0.08);
        }

        .cta-line-left {
          left: -92px;
          border-left: 0;
          border-radius: 0 92px 92px 0;
        }

        .cta-line-right {
          right: -92px;
          border-right: 0;
          border-radius: 92px 0 0 92px;
        }

        .cta-line-left::before,
        .cta-line-right::before {
          content: '';
          position: absolute;
          top: 50%;
          height: 14px;
          width: 14px;
          border-radius: 999px;
          background: #16a34a;
          box-shadow: 0 0 18px rgba(22, 163, 74, 0.95), 0 0 42px rgba(22, 163, 74, 0.45);
        }

        .cta-line-left::before {
          right: -8px;
        }

        .cta-line-right::before {
          left: -8px;
        }

        .cta-bottom-line-left,
        .cta-bottom-line-right {
          top: calc(var(--cta-frame-top) + var(--cta-frame-height));
          height: 1.5px;
          box-shadow: 0 0 18px rgba(22, 163, 74, 0.16);
        }

        .cta-bottom-line-left {
          left: var(--cta-frame-edge);
          right: calc(50% + 188px);
          background: linear-gradient(90deg, var(--cta-line-color), rgba(22, 163, 74, 0.26), transparent);
        }

        .cta-bottom-line-right {
          left: calc(50% + 188px);
          right: var(--cta-frame-edge);
          background: linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.26), var(--cta-line-color));
        }

        .host-final-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .host-final-eyebrow {
          display: grid;
          justify-items: center;
          gap: 16px;
          color: #16a34a;
          font-size: 16px;
          font-weight: 850;
          letter-spacing: 0.38em;
          line-height: 1;
          text-transform: uppercase;
        }

        .host-final-eyebrow span {
          display: grid;
          width: 245px;
          grid-template-columns: 1fr 32px 1fr;
          align-items: center;
          gap: 14px;
          color: #16a34a;
        }

        .host-final-eyebrow span::before,
        .host-final-eyebrow span::after {
          content: '';
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.95));
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.8);
        }

        .host-final-eyebrow span::after {
          background: linear-gradient(90deg, rgba(22, 163, 74, 0.95), transparent);
        }

        .host-final-title {
          margin-top: 30px;
          color: #FFFFFF;
          font-size: clamp(44px, 3.9vw, 68px);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: 0;
          text-shadow: 0 14px 38px rgba(0, 0, 0, 0.55);
        }

        .host-final-copy {
          margin: 26px auto 0;
          max-width: 640px;
          color: #a1a1aa;
          font-size: clamp(18px, 1.25vw, 23px);
          line-height: 1.42;
        }

        .host-final-button {
          min-height: 68px;
          min-width: 300px;
          margin-top: 40px;
          border-radius: 12px;
          background: #16a34a;
          color: #020303;
          font-size: 21px;
          box-shadow:
            0 20px 58px rgba(22, 163, 74, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.28);
        }

        .host-youtube-reels-section {
          position: relative;
          overflow: hidden;
          padding: 96px 0 104px;
          border-top: 1px solid rgba(22, 163, 74, 0.22);
          background:
            radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.2), transparent 34%),
            radial-gradient(circle at 8% 58%, rgba(22, 163, 74, 0.16), transparent 30%),
            radial-gradient(circle at 92% 54%, rgba(22, 163, 74, 0.15), transparent 30%),
            linear-gradient(180deg, #050606 0%, #020303 100%);
          isolation: isolate;
        }

        .host-youtube-reels-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.28), transparent 48%, rgba(0, 0, 0, 0.3)),
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 96px);
          opacity: 0.72;
        }

        .host-reels-glow {
          position: absolute;
          z-index: -1;
          top: 28%;
          height: 340px;
          width: 340px;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.15);
          filter: blur(72px);
          pointer-events: none;
        }

        .host-reels-glow-left {
          left: -120px;
        }

        .host-reels-glow-right {
          right: -120px;
        }

        .host-youtube-reels-intro {
          max-width: 940px;
          margin: 0 auto;
          text-align: center;
        }

        .host-youtube-reels-intro h2 {
          color: #FFFFFF;
          font-size: clamp(46px, 5vw, 86px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: 0;
          text-shadow: 0 16px 42px rgba(0, 0, 0, 0.55);
        }

        .host-youtube-reels-intro p {
          margin: 22px auto 0;
          max-width: 760px;
          color: #a1a1aa;
          font-size: clamp(18px, 1.45vw, 26px);
          line-height: 1.35;
        }

        .host-youtube-reels-label {
          display: grid;
          max-width: 560px;
          grid-template-columns: minmax(72px, 1fr) auto minmax(72px, 1fr);
          align-items: center;
          gap: 28px;
          margin: 66px auto 34px;
          color: #FFFFFF;
        }

        .host-youtube-reels-label > span {
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, #16a34a);
          box-shadow: 0 0 18px rgba(22, 163, 74, 0.82);
        }

        .host-youtube-reels-label > span:last-child {
          background: linear-gradient(90deg, #16a34a, transparent);
        }

        .host-youtube-reels-label strong {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 850;
          line-height: 1;
          white-space: nowrap;
        }

        .host-youtube-reels-icon {
          display: grid;
          height: 30px;
          width: 38px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.95);
          border-radius: 8px;
          color: #16a34a;
          box-shadow:
            0 0 16px rgba(22, 163, 74, 0.58),
            inset 0 0 12px rgba(22, 163, 74, 0.18);
        }

        .host-youtube-reels-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px;
        }

        .host-youtube-reel-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 9 / 16;
          border: 1.5px solid rgba(22, 163, 74, 0.72);
          border-radius: 20px;
          background: rgba(3, 10, 9, 0.72);
          box-shadow:
            0 0 0 1px rgba(22, 163, 74, 0.16),
            0 0 26px rgba(22, 163, 74, 0.24),
            0 24px 70px rgba(0, 0, 0, 0.48);
        }

        .host-youtube-reel-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 16%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.22), transparent 34%);
        }

        .host-youtube-reel-card iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .host-youtube-reels-action {
          display: flex;
          justify-content: center;
          margin-top: 46px;
        }

        .host-youtube-reels-button {
          display: inline-flex;
          min-height: 62px;
          min-width: 210px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(22, 163, 74, 0.52);
          border-radius: 10px;
          background: rgba(22, 163, 74, 0.1);
          padding: 0 28px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 850;
          box-shadow:
            0 18px 44px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition:
            background 0.24s ease,
            border-color 0.24s ease,
            color 0.24s ease,
            transform 0.24s ease;
        }

        .host-youtube-reels-button:hover {
          border-color: rgba(22, 163, 74, 0.88);
          background: rgba(22, 163, 74, 0.16);
          color: #16a34a;
          transform: translateY(-1px);
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          isolation: isolate;
        }

        .host-hero .host-container {
          max-width: 1300px;
          padding-left: 24px;
          padding-right: 24px;
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
          background: radial-gradient(circle at 22% 50%, rgba(22, 163, 74, 0.11), transparent 30%);
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
          color: #a1a1aa;
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
          color: #16a34a;
        }

        .host-hero-title .host-rotating-text {
          display: inline-flex !important;
          font-size: inherit;
          margin-top: 0.06em;
        }

        .host-hero-title .host-rotating-text span {
          display: inline !important;
        }

        .host-hero-title .host-rotating-text .text-rotate {
          display: inline-flex !important;
          flex-wrap: nowrap;
        }

        .host-hero-title .host-rotating-text .text-rotate-word {
          display: inline-flex !important;
        }

        .host-hero-title .host-rotating-text .text-rotate-element {
          display: inline-block !important;
        }

        .host-hero-title .host-rotating-text .text-rotate-sr-only {
          display: none !important;
        }

        .host-hero-copy {
          margin-top: 24px;
          max-width: 620px;
          color: #a1a1aa;
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
          background: #16a34a;
          box-shadow: 0 16px 40px rgba(22, 163, 74, 0.25);
        }

        .host-hero-earn {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width:fit-content;
          padding: 24px 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background:
            radial-gradient(120% 120% at 0% 100%, rgba(22, 163, 74, 0.22), transparent 60%),
            linear-gradient(180deg, rgba(28, 30, 30, 0.82), rgba(16, 18, 18, 0.82));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 22px 50px rgba(0, 0, 0, 0.38);
          backdrop-filter: blur(18px);
        }

        .host-hero-earn-text {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: nowrap;
          gap: 12px;
          color: #ffffff;
          font-size: clamp(24px, 2.2vw, 32px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .host-hero-earn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 999px;
          border: 1px solid rgba(22, 163, 74, 0.45);
          background: rgba(22, 163, 74, 0.12);
          color: #16a34a;
        }

        .host-hero-feature-strip {
          position: absolute;
          left: 50%;
          bottom: 42px;
          display: grid;
          width: min(1780px, calc(100vw - 128px));
          grid-template-columns: repeat(6, minmax(0, 1fr));
          transform: translateX(-50%);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(34, 34, 34, 0.82), rgba(18, 18, 18, 0.82));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 18px 55px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(16px);
        }

        .host-hero-feature {
          position: relative;
          display: flex;
          min-height: 84px;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
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
          border: 1px solid rgba(22, 163, 74, 0.38);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.12);
          color: #16a34a;
        }

        .host-hero-feature-text {
          min-width: 0;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.24;
          white-space: nowrap;
        }

        .host-hero-feature-text span {
          display: block;
          white-space: nowrap;
        }

        .host-hero-feature-text span:first-child {
          color: #a1a1aa;
          font-size: 14px;
          font-weight: 650;
        }

        @media (max-width: 1500px) {
          .host-hero-feature-strip {
            width: calc(100vw - 64px);
          }

          .host-hero-feature {
            gap: 10px;
            padding: 16px 12px;
          }

          .host-hero-icon {
            height: 40px;
            width: 40px;
          }

          .host-hero-feature-icon svg,
          .host-hero-icon svg {
            height: 21px;
            width: 21px;
          }

          .host-hero-feature-text {
            font-size: 14px;
            line-height: 1.18;
          }

          .host-hero-feature-text span:first-child {
            font-size: 13px;
          }
        }

        .host-payments-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
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
          background: radial-gradient(circle at 25% 80%, rgba(22, 163, 74, 0.1), transparent 28%);
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
          color: #16a34a;
        }

        .host-payments-copy {
          margin-top: 26px;
          max-width: 520px;
          color: #a1a1aa;
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
          border: 1px solid rgba(22, 163, 74, 0.26);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.06);
          color: #16a34a;
          box-shadow: inset 0 0 30px rgba(22, 163, 74, 0.05);
        }

        .host-payment-number {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
        }

        .host-payment-line {
          height: 1px;
          width: 48px;
          background: linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.7));
        }

        .host-payment-dot {
          height: 5px;
          width: 5px;
          border-radius: 999px;
          background: #16a34a;
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
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.55;
        }

        .host-payments-button {
          margin-top: 48px;
          min-height: 70px;
          min-width: 220px;
          border-color: rgba(22, 163, 74, 0.55);
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.56);
          box-shadow:
            inset 0 0 26px rgba(22, 163, 74, 0.08),
            0 0 30px rgba(22, 163, 74, 0.14);
          backdrop-filter: blur(12px);
        }

        .host-how-section {
          position: relative;
          overflow: hidden;
          min-height: var(--host-desktop-frame-height);
          border-block: 1px solid rgba(255, 255, 255, 0.10);
          background:
            radial-gradient(circle at 66% 62%, rgba(22, 163, 74, 0.12), transparent 26%),
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
            radial-gradient(circle at 87% 82%, rgba(22, 163, 74, 0.13), transparent 24%);
        }

        .host-how-section .host-container,
        .host-where-section .host-container {
          width: min(var(--host-desktop-frame-width), 100vw);
          max-width: none;
          padding-inline: var(--host-desktop-frame-pad-x);
        }

        .host-how-inner {
          position: relative;
          display: grid;
          height: var(--host-desktop-frame-height);
          min-height: var(--host-desktop-frame-height);
          grid-template-columns: minmax(280px, 0.36fr) minmax(0, 0.64fr);
          gap: 34px;
          align-items: center;
          padding-block: var(--host-desktop-frame-pad-y);
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
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-how-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.82);
          border-radius: 6px;
          background: rgba(22, 163, 74, 0.08);
          box-shadow: inset 0 0 20px rgba(22, 163, 74, 0.08);
        }

        .host-how-title {
          margin-top: 36px;
          max-width: 430px;
          color: #FFFFFF;
          font-size: 58px;
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: 0;
        }

        .host-how-title span {
          color: #16a34a;
        }

        .host-how-description {
          margin-top: 18px;
          max-width: 330px;
          color: #a1a1aa;
          font-size: 21px;
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
          color: #16a34a;
          box-shadow: inset 0 0 24px rgba(22, 163, 74, 0.05);
        }

        .host-how-card h3 {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.1;
        }

        .host-how-card p {
          margin-top: 5px;
          color: #a1a1aa;
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
          bottom: var(--host-desktop-frame-pad-y);
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
          color: #16a34a;
        }

        .host-how-payment-cards {
          position: relative;
          z-index: 3;
          padding-bottom: 72px;
        }

        .host-how-payment-cards .host-payment-cards {
          margin-top: 0;
          max-width: none;
          gap: 20px;
        }

        .host-how-payment-cards .host-payment-card {
          min-height: 260px;
          background:
            linear-gradient(115deg, rgba(24, 24, 24, 0.82), rgba(12, 12, 12, 0.86)),
            radial-gradient(circle at 88% 12%, rgba(22, 163, 74, 0.16), transparent 28%);
          padding: 24px;
        }

        .host-how-payment-cards .host-payment-icon {
          height: 58px;
          width: 58px;
        }

        .host-how-payment-cards .host-payment-number {
          font-size: 17px;
        }

        .host-how-payment-cards .host-payment-line {
          width: 36px;
        }

        .host-how-payment-cards .host-payment-card h3 {
          font-size: 25px;
        }

        .host-how-payment-cards .host-payment-card p {
          margin-top: 16px;
          font-size: 16px;
          line-height: 1.45;
        }

        .host-where-section {
          position: relative;
          overflow: hidden;
          min-height: var(--host-desktop-frame-height);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          background:
            radial-gradient(circle at 72% 46%, rgba(22, 163, 74, 0.12), transparent 26%),
            radial-gradient(circle at 36% 50%, rgba(22, 163, 74, 0.06), transparent 24%),
            #050505;
        }

        .host-where-inner {
          display: grid;
          height: var(--host-desktop-frame-height);
          min-height: var(--host-desktop-frame-height);
          grid-template-columns: minmax(0, 760px) 450px;
          grid-template-rows: auto auto;
          gap: 26px 42px;
          align-items: start;
          align-content: center;
          justify-content: space-between;
          padding-block: var(--host-desktop-frame-pad-y);
        }

        .host-where-copy {
          display: flex;
          grid-column: 1;
          grid-row: 1;
          min-width: 0;
          flex-direction: column;
          justify-content: flex-start;
          align-self: start;
        }

        .host-where-eyebrow {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 14px;
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-where-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.82);
          border-radius: 6px;
          background: rgba(22, 163, 74, 0.08);
          box-shadow: inset 0 0 20px rgba(22, 163, 74, 0.08);
        }

        .host-where-title {
          margin-top: 28px;
          max-width: 720px;
          color: #FFFFFF;
          font-size: 44px;
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: 0;
        }

        .host-where-copy-text {
          margin-top: 20px;
          max-width: 520px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.38;
        }

        .host-where-button {
          margin-top: 28px;
          width: max-content;
          min-height: 52px;
          border-radius: 7px;
          padding-inline: 24px;
          font-size: 15px;
        }

        .host-where-grid {
          display: grid;
          grid-column: 1;
          grid-row: 2;
          min-width: 0;
          max-width: 760px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: repeat(2, 136px);
          align-self: start;
          align-content: center;
          gap: 12px;
        }

        .host-where-grid > * {
          height: 100%;
          min-height: 0;
        }

        .host-where-card {
          appearance: none;
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 0;
          width: 100%;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: #18181b;
          color: inherit;
          cursor: pointer;
          isolation: isolate;
          text-align: inherit;
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
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

        .host-where-card:hover,
        .host-where-card:focus-visible {
          border-color: rgba(48, 230, 93, 0.7);
          outline: 0;
          transform: translateY(-2px);
        }

        .host-where-card:hover img,
        .host-where-card:focus-visible img {
          transform: scale(1.06);
        }

        .host-where-card.is-active {
          border-color: #30e65d;
          box-shadow:
            0 0 0 1px rgba(48, 230, 93, 0.42),
            0 0 32px rgba(48, 230, 93, 0.36),
            inset 0 0 40px rgba(48, 230, 93, 0.11);
        }

        .host-where-card.is-active::after {
          background:
            linear-gradient(180deg, rgba(30, 210, 77, 0.38), rgba(8, 63, 27, 0.72)),
            linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.82));
        }

        .host-where-active-check {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          display: grid;
          height: 28px;
          width: 28px;
          place-items: center;
          border-radius: 999px;
          background: #34ee55;
          color: #FFFFFF;
          opacity: 0;
          transform: scale(0.8);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
          box-shadow: 0 0 24px rgba(52, 238, 85, 0.52);
        }

        .host-where-card.is-active .host-where-active-check {
          opacity: 1;
          transform: scale(1);
        }

        .host-where-card-content {
          display: flex;
          height: 100%;
          min-height: 0;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          padding: 16px 10px 14px;
          text-align: center;
        }

        .host-where-card-icon {
          display: grid;
          color: #FFFFFF;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
        }

        .host-where-card-title {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.12;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .host-where-panel {
          position: relative;
          grid-column: 2;
          grid-row: 1 / span 2;
          min-width: 0;
          width: 450px;
          overflow: hidden;
          align-self: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
          background:
            linear-gradient(145deg, rgba(24, 24, 27, 0.92), rgba(7, 7, 9, 0.96)),
            #080808;
          padding: 20px;
          box-shadow:
            0 22px 58px rgba(0, 0, 0, 0.46),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .host-where-panel::before {
          content: '';
          position: absolute;
          inset: -40% -15% auto 34%;
          height: 300px;
          background: radial-gradient(circle, rgba(22, 163, 74, 0.16), transparent 66%);
          pointer-events: none;
        }

        .host-where-panel-content {
          position: relative;
          z-index: 1;
        }

        .host-where-panel-location {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 850;
          line-height: 1;
        }

        .host-where-panel-location-icon {
          display: grid;
          color: #16a34a;
        }

        .host-where-tabs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          background: rgba(5, 5, 5, 0.72);
        }

        .host-where-tab {
          display: inline-flex;
          min-width: 0;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.66);
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .host-where-tab + .host-where-tab {
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .host-where-tab:hover,
        .host-where-tab:focus-visible {
          color: #FFFFFF;
          outline: 0;
        }

        .host-where-tab.is-active {
          background: linear-gradient(180deg, rgba(48, 230, 93, 0.48), rgba(22, 163, 74, 0.5));
          color: #FFFFFF;
          box-shadow: inset 0 0 0 1px rgba(48, 230, 93, 0.5);
        }

        .host-where-panel-title {
          margin-top: 22px;
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 850;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .host-where-panel-list {
          margin-top: 12px;
        }

        .host-where-panel-item {
          display: grid;
          min-width: 0;
          grid-template-columns: 44px 1fr;
          gap: 12px;
          align-items: center;
          padding: 9px 0;
        }

        .host-where-panel-item + .host-where-panel-item {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .host-where-panel-item-icon {
          display: grid;
          height: 38px;
          width: 38px;
          place-items: center;
          border-radius: 7px;
        }

        .host-where-panel.is-problems .host-where-panel-item-icon {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(6, 6, 8, 0.74);
          color: #ff3b30;
        }

        .host-where-panel.is-benefits .host-where-panel-item-icon {
          background: transparent;
          color: #39ff38;
        }

        .host-where-panel-item h4 {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 850;
          line-height: 1.12;
        }

        .host-where-panel-item p {
          margin-top: 3px;
          color: #c4c4cc;
          font-size: 12px;
          line-height: 1.28;
        }

        .host-where-panel-footer {
          display: flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
          border: 1px solid;
          border-radius: 7px;
          padding: 10px 14px;
          text-align: center;
          font-size: 13px;
          font-weight: 900;
          line-height: 1.2;
        }

        .host-where-panel.is-problems .host-where-panel-footer {
          border-color: rgba(255, 59, 48, 0.86);
          background: rgba(255, 59, 48, 0.03);
          color: #ff3b30;
        }

        .host-where-panel.is-benefits .host-where-panel-footer {
          border-color: rgba(22, 163, 74, 0.86);
          background: rgba(22, 163, 74, 0.04);
          color: #16a34a;
        }

        .host-where-panel-footer svg {
          height: 22px;
          flex: 0 0 auto;
          width: 22px;
        }

        .host-where-panel-location-icon svg,
        .host-where-panel-item-icon svg {
          height: 22px;
          width: 22px;
        }

        .host-where-tab svg {
          height: 16px;
          width: 16px;
        }

        .host-who-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          background:
            radial-gradient(circle at 34% 90%, rgba(22, 163, 74, 0.08), transparent 24%),
            #050505;
        }

        .host-who-inner {
          padding: 88px 0 74px;
        }

        .host-who-top {
          display: grid;
          grid-template-columns: minmax(400px, 0.42fr) minmax(0, 0.58fr);
          gap: 30px;
          align-items: center;
        }

        .host-who-copy {
          min-width: 0;
          max-width: 500px;
        }

        .host-who-eyebrow {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 14px;
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-who-number {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.82);
          border-radius: 6px;
          background: rgba(22, 163, 74, 0.08);
          box-shadow: inset 0 0 20px rgba(22, 163, 74, 0.08);
        }

        .host-who-title {
          margin-top: 28px;
          color: #FFFFFF;
          font-size: clamp(42px, 3.55vw, 58px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .host-who-title span {
          color: #16a34a;
        }

        .host-who-copy-text {
          margin-top: 22px;
          max-width: 390px;
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.5;
        }

        .host-who-cards {
          position: relative;
          min-width: 0;
          padding: 0 48px 48px;
        }

        .host-who-slider {
          width: 620px;
          max-width: 100%;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 10px;
        }

        .host-who-slider .swiper-wrapper {
          align-items: stretch;
        }

        .host-who-slider .swiper-slide {
          width: 300px;
          height: auto;
        }

        .host-who-slider .swiper-pagination {
          bottom: 2px;
        }

        .host-who-slider .swiper-pagination-bullet {
          height: 12px;
          width: 12px;
          margin: 0 7px !important;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
        }

        .host-who-slider .swiper-pagination-bullet-active {
          background: #16a34a;
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.48);
        }

        .host-who-nav {
          position: absolute;
          top: calc(50% - 24px);
          z-index: 5;
          display: grid;
          height: 54px;
          width: 54px;
          place-items: center;
          border: 0;
          border-radius: 999px;
          background: rgba(27, 30, 30, 0.9);
          color: #16a34a;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.34);
          cursor: pointer;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .host-who-nav:hover {
          background: rgba(38, 42, 42, 0.96);
          transform: translateY(-1px);
        }

        .host-who-nav-prev {
          left: 0;
        }

        .host-who-nav-next {
          right: 0;
        }

        .host-who-nav-prev svg {
          transform: rotate(180deg);
        }

        .host-who-card {
          position: relative;
          overflow: hidden;
          width: 300px;
          height: 360px;
          min-height: 360px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: #18181b;
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
            radial-gradient(circle at 50% 85%, rgba(22, 163, 74, 0.12), transparent 42%);
        }

        .host-who-card:hover img {
          transform: scale(1.05);
        }

        .host-who-card-content {
          display: flex;
          height: 100%;
          min-height: 360px;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 22px 18px 40px;
          text-align: center;
        }

        .host-who-card-title {
          max-width: 170px;
          color: #FFFFFF;
          font-size: 23px;
          font-weight: 800;
          line-height: 1.12;
          text-shadow: 0 2px 9px rgba(0, 0, 0, 0.75);
        }

        .host-who-card-line {
          margin-top: 13px;
          height: 2px;
          width: 40px;
          border-radius: 999px;
          background: #16a34a;
          box-shadow: 0 0 12px rgba(22, 163, 74, 0.55);
        }

        .host-who-strip {
          margin-top: 24px;
          display: grid;
          grid-template-columns: minmax(260px, 0.92fr) 1px repeat(3, minmax(120px, 0.58fr)) minmax(160px, 0.72fr);
          align-items: center;
          gap: 26px;
          overflow: hidden;
          min-height: 150px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
            rgba(17, 17, 17, 0.76);
          box-shadow: inset 0 0 36px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          padding: 22px 22px 22px 38px;
        }

        .host-who-charger {
          display: grid;
          height: 150px;
          place-items: center;
          align-self: stretch;
          background: radial-gradient(circle at 42% 62%, rgba(22, 163, 74, 0.12), transparent 48%);
        }

        .host-who-charger .host-product-visual {
          transform: scale(1.25);
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
        .host-rotating-text .text-rotate-word {
          flex-wrap: nowrap;
        }

        .host-rotating-text .text-rotate-element {
          color: #FFFFFF;
        }

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

        .host-who-benefit h4 {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.1;
        }

        .host-who-benefit p {
          color: #a1a1aa;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.25;
        }

        .host-who-actions {
          display: grid;
          gap: 12px;
          justify-items: stretch;
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
          color: #16a34a;
          font-size: 14px;
          font-weight: 800;
        }

        .host-charger-options {
          padding: 86px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          background:
            radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.09), transparent 34%),
            #050706;
        }

        .host-charger-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(22, 163, 74, 0.24);
          border-radius: 26px;
          padding: 34px 26px 16px;
          box-shadow:
            inset 0 0 45px rgba(22, 163, 74, 0.05),
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
          background: radial-gradient(circle at 38% 60%, rgba(22, 163, 74, 0.08), transparent 30%);
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
          color: #16a34a;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-charger-eyebrow span {
          display: grid;
          height: 26px;
          width: 26px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.38);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.08);
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
          color: #16a34a;
        }

        .host-charger-copy {
          margin-top: 16px;
          max-width: 360px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.35;
        }

        .host-charger-grid {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .host-charger-grid > * {
          height: 100%;
        }

        .host-charger-card {
          position: relative;
          display: grid;
          height: 100%;
          min-height: 252px;
          grid-template-columns: 0.72fr 1fr;
          gap: 16px;
          border: 1px solid rgba(22, 163, 74, 0.25);
          border-radius: 12px;
          background: rgba(3, 14, 13, 0.76);
          padding: 20px 18px 18px;
          box-shadow: inset 0 0 34px rgba(22, 163, 74, 0.05);
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
          border: 1px solid rgba(22, 163, 74, 0.28);
          border-radius: 8px;
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          font-size: 13px;
          font-weight: 800;
        }

        .host-charger-art {
          display: flex;
          min-height: 154px;
          align-items: center;
          justify-content: center;
          padding-top: 18px;
          
        }

        .host-charger-image {
          display: block;
          width: min(118px, 78%);
          height: 138px;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 20px 34px rgba(22, 163, 74, 0.2));
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
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.38;
        }

        .host-charger-divider {
          margin: 12px 0 11px;
          height: 1px;
          background: linear-gradient(90deg, rgba(22, 163, 74, 0.36), transparent);
        }

        .host-charger-meta {
          display: grid;
          gap: 9px;
        }

        .host-charger-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.35;
        }

        .host-charger-meta-row strong,
        .host-charger-meta-row em {
          color: #16a34a;
          font-style: normal;
          font-weight: 800;
        }

        .host-charger-meta-icon {
          display: grid;
          height: 18px;
          width: 18px;
          flex: 0 0 auto;
          place-items: center;
          color: #16a34a;
        }

        .host-charger-learn {
          display: flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 14px;
          border: 1px solid rgba(22, 163, 74, 0.38);
          border-radius: 9px;
          background: rgba(22, 163, 74, 0.04);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 800;
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .host-charger-learn:hover {
          border-color: rgba(22, 163, 74, 0.78);
          color: #16a34a;
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
          background: rgba(22, 163, 74, 0.25);
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
          background: #16a34a;
          box-shadow: 0 0 14px rgba(22, 163, 74, 0.8);
        }

        .host-product-ring {
          position: absolute;
          bottom: 34px;
          display: flex;
          height: 19px;
          width: 19px;
          border: 3px solid #16a34a;
          border-radius: 999px;
          box-shadow: 0 0 15px rgba(22, 163, 74, 0.65);
        }

        .host-product-dot {
          position: absolute;
          bottom: 18px;
          height: 4px;
          width: 4px;
          border-radius: 999px;
          background: #16a34a;
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
          border: 2px solid #16a34a;
          border-radius: 999px;
          color: #16a34a;
          font-size: 30px;
        }

        .host-charger-quiz-button {
          min-height: 46px;
          min-width: 220px;
          border-color: #16a34a;
          background: rgba(22, 163, 74, 0.05);
          color: #16a34a;
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
          color: #16a34a;
        }

        .host-charger-finance-text {
          display: block;
          min-width: 0;
          max-width: 190px;
        }

        .host-charger-options {
          padding: 74px 0 86px;
          background: #050706;
        }

        .host-charger-options .host-container {
          padding-top: 0;
          padding-bottom: 0;
        }

        .host-charger-panel {
          border-color: transparent;
          border-radius: 0;
          padding: 68px 0 52px;
          box-shadow: none;
          overflow: visible;
        }

        .host-charger-bg {
          top: 0;
          right: 0;
          height: 610px;
          width: 100%;
          clip-path: none;
          object-position: center;
          opacity: 0.58;
        }

        .host-charger-panel::before {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.9) 42%, rgba(0, 0, 0, 0.5) 74%, rgba(0, 0, 0, 0.62) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.4) 42%, rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 1) 100%);
        }

        .host-charger-panel-glow {
          background:
            radial-gradient(circle at 53% 52%, rgba(22, 163, 74, 0.14), transparent 24%),
            radial-gradient(circle at 15% 12%, rgba(255, 255, 255, 0.06), transparent 20%);
        }

        .host-charger-header {
          min-height: 360px;
          height: auto;
          max-width: 820px;
          padding: 0;
          justify-content: flex-start;
        }

        .host-charger-eyebrow {
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(9, 12, 12, 0.58);
          padding: 8px 14px;
          color: #FFFFFF;
          backdrop-filter: blur(14px);
        }

        .host-charger-eyebrow span {
          height: 22px;
          width: 22px;
        }

        .host-charger-title {
          margin-top: 24px;
          max-width: 790px;
          font-size: clamp(46px, 4.35vw, 70px);
          line-height: 1.04;
        }

        .host-charger-copy {
          margin-top: 28px;
          max-width: 620px;
          color: #a1a1aa;
          font-size: 20px;
          line-height: 1.45;
        }

        .host-charger-grid {
          margin-top: 38px;
          gap: 22px;
        }

        .host-charger-grid > * {
          height: 100%;
        }

        .host-charger-card {
          display: flex;
          height: 100%;
          min-height: 742px;
          flex-direction: column;
          gap: 0;
          border-color: rgba(255, 255, 255, 0.16);
          border-radius: 10px;
          background:
            radial-gradient(circle at 50% 40%, rgba(22, 163, 74, 0.12), transparent 27%),
            linear-gradient(145deg, rgba(18, 21, 21, 0.96), rgba(7, 8, 8, 0.98));
          padding: 74px 24px 26px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 24px 58px rgba(0, 0, 0, 0.24);
        }

        .host-charger-card.is-popular {
          border-color: rgba(22, 163, 74, 0.78);
          box-shadow:
            0 0 36px rgba(22, 163, 74, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .host-charger-index {
          left: 24px;
          top: 22px;
          min-width: 36px;
          height: 34px;
          border-color: rgba(22, 163, 74, 0.52);
          border-radius: 7px;
          font-size: 16px;
        }

        .host-charger-popular {
          position: absolute;
          right: 24px;
          top: 22px;
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          border: 1px solid rgba(22, 163, 74, 0.32);
          border-radius: 8px;
          background: rgba(22, 163, 74, 0.1);
          padding: 0 13px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-charger-card h3 {
          margin: 0;
          color: #FFFFFF;
          font-size: 30px;
          font-weight: 800;
          line-height: 1.08;
        }

        .host-charger-card > div:first-of-type {
          min-height: 118px;
        }

        .host-charger-card p {
          margin-top: 14px;
          max-width: 250px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.45;
        }

        .host-charger-art {
          height: 216px;
          min-height: 216px;
          align-items: end;
          border-right: 0;
   
          padding: 14px 0 0;
        }

        .host-charger-image {
          display: block;
          width: 168px;
          height: 188px;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 22px 38px rgba(22, 163, 74, 0.22));
        }

        .host-charger-image.is-small {
          width: 148px;
          height: 178px;
        }

        .host-charger-image.is-large {
          width: 198px;
          height: 198px;
        }

        .host-charger-art .host-product-visual {
          transform: scale(1.26);
          transform-origin: bottom center;
        }

        .host-charger-card.is-popular .host-charger-art .host-product-visual {
          transform: scale(1.42);
        }

        .host-charger-feature-list {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .host-charger-feature-list:empty {
          display: none;
        }

        .host-charger-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #d4d4d8;
          font-size: 16px;
          line-height: 1.35;
        }

        .host-charger-check {
          display: grid;
          height: 20px;
          width: 20px;
          flex: 0 0 auto;
          place-items: center;
          border: 2px solid #16a34a;
          border-radius: 999px;
          color: #16a34a;
        }

        .host-charger-specs {
          display: grid;
          gap: 12px;
          min-height: 186px;
          align-content: center;
          margin-top: auto;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          background: rgba(8, 9, 9, 0.72);
          padding: 14px 16px;
        }

        .host-charger-spec-row {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          color: #FFFFFF;
          font-size: 16px;
          line-height: 1.3;
        }

        .host-charger-spec-row span:first-child {
          color: #a1a1aa;
        }

        .host-charger-spec-row strong {
          max-width: 260px;
          font-weight: 800;
          text-align: right;
        }

        .host-charger-learn {
          min-height: 46px;
          margin-top: 16px;
          border-color: rgba(22, 163, 74, 0.62);
          color: #16a34a;
          font-size: 15px;
        }

        .host-charger-learn.is-primary {
          border-color: #16a34a;
          background: #16a34a;
          color: #050706;
        }

        .host-charger-support-strip {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(13, 15, 15, 0.8);
          backdrop-filter: blur(16px);
        }

        .host-charger-support-item {
          display: grid;
          min-height: 112px;
          grid-template-columns: 60px 1fr;
          align-items: center;
          gap: 18px;
          padding: 20px 26px;
        }

        .host-charger-support-item + .host-charger-support-item {
          border-left: 1px solid rgba(255, 255, 255, 0.12);
        }

        .host-charger-support-icon {
          display: grid;
          height: 58px;
          width: 58px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          background: rgba(5, 6, 6, 0.6);
          color: #16a34a;
        }

        .host-charger-support-item h3 {
          color: #FFFFFF;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.2;
        }

        .host-charger-support-item p {
          margin-top: 5px;
          color: #a1a1aa;
          font-size: 15px;
          line-height: 1.3;
        }

        .host-charger-quiz {
          margin-top: 24px;
          min-height: 116px;
          border-radius: 10px;
          padding: 24px 30px;
          background: rgba(10, 12, 12, 0.82);
        }

        .host-charger-quiz-copy {
          gap: 24px;
          font-size: 24px;
          font-weight: 800;
        }

        .host-charger-quiz-copy small {
          display: block;
          margin-top: 7px;
          color: #a1a1aa;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.35;
        }

        .host-charger-quiz-mark {
          height: 68px;
          width: 68px;
          font-size: 36px;
        }

        .host-charger-quiz-button {
          min-height: 54px;
          min-width: 290px;
          border-color: #16a34a;
          background: #16a34a;
          color: #050706;
          font-size: 16px;
        }

        .host-why-section {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          background:
            radial-gradient(circle at 18% 78%, rgba(22, 163, 74, 0.08), transparent 26%),
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
          color: #16a34a;
          font-size: 20px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-why-index {
          display: grid;
          height: 42px;
          min-width: 42px;
          place-items: center;
          border: 2px solid rgba(22, 163, 74, 0.5);
          border-radius: 8px;
          background: rgba(22, 163, 74, 0.08);
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
          color: #16a34a;
        }

        .host-why-copy {
          margin-top: 26px;
          max-width: 540px;
          color: #a1a1aa;
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
          color: #16a34a;
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
          color: #16a34a;
        }

        .host-expand-actions {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .host-expand-button {
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
          transition:
            background 0.24s ease,
            border-color 0.24s ease,
            transform 0.24s ease;
        }

        .host-expand-button:hover {
          border-color: rgba(22, 163, 74, 0.85);
          background: rgba(22, 163, 74, 0.14);
          transform: translateY(-1px);
        }

        .host-collapse-button {
          position: absolute;
          right: 24px;
          top: 24px;
          z-index: 6;
          display: grid;
          height: 48px;
          width: 48px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.5);
          border-radius: 999px;
          background: rgba(10, 12, 12, 0.74);
          color: #16a34a;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(12px);
          transition:
            background 0.24s ease,
            transform 0.24s ease;
        }

        .host-collapse-button:hover {
          background: rgba(22, 163, 74, 0.12);
          transform: translateY(-1px);
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
          background: #0a0a0a;
          box-shadow:
            inset 0 0 60px rgba(22, 163, 74, 0.06),
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

        .host-installation-section {
          position: relative;
          overflow: hidden;
          padding: 84px 0 70px;
          background:
            radial-gradient(circle at 13% 20%, rgba(22, 163, 74, 0.08), transparent 25%),
            radial-gradient(circle at 88% 82%, rgba(22, 163, 74, 0.05), transparent 27%),
            #080909;
        }

        .host-installation-intro {
          max-width: 900px;
        }

        .host-installation-eyebrow {
          margin-bottom: 20px;
          color: #16a34a;
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          text-transform: uppercase;
        }

        .host-installation-title {
          color: #FFFFFF;
          font-size: clamp(40px, 3.6vw, 56px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: 0;
        }

        .host-installation-title span {
          color: #16a34a;
        }

        .host-installation-copy {
          margin-top: 24px;
          max-width: 680px;
          color: #a1a1aa;
          font-size: clamp(18px, 1.45vw, 24px);
          line-height: 1.45;
        }

        .host-installation-grid {
          margin-top: 58px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .host-installation-card {
          display: grid;
          min-height: 360px;
          grid-template-columns: 1.04fr 0.98fr;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 10px;
          background: linear-gradient(145deg, rgba(15, 17, 17, 0.98), rgba(5, 6, 6, 0.96));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 28px 70px rgba(0, 0, 0, 0.26);
        }

        .host-installation-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 360px;
          overflow: hidden;
          isolation: isolate;
          padding: 34px;
        }

        .host-installation-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -3;
        }

        .host-installation-visual-vertical::before {
          background:
            radial-gradient(circle at 7% 78%, rgba(22, 163, 74, 0.24), transparent 21%),
            linear-gradient(90deg, rgba(19, 24, 25, 0.92), rgba(38, 43, 44, 0.9)),
            repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 5px);
        }

        .host-installation-visual-standing::before {
          background:
            radial-gradient(circle at 54% 86%, rgba(22, 163, 74, 0.34), transparent 28%),
            linear-gradient(180deg, #151b1b 0%, #0A0B0B 58%, #151817 100%);
        }

        .host-installation-vignette {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.28)),
            radial-gradient(circle at 50% 43%, transparent 0 28%, rgba(0, 0, 0, 0.34) 66%);
          pointer-events: none;
        }

        .host-installation-image {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          max-width: 340px;
          height: 310px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 26px 48px rgba(0, 0, 0, 0.5));
        }

        .host-installation-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 34px 34px 34px 42px;
        }

        .host-installation-icon {
          display: grid;
          height: 58px;
          width: 58px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.2);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.11);
          color: #16a34a;
          box-shadow: 0 0 35px rgba(22, 163, 74, 0.11);
        }

        .host-installation-card-title {
          margin-top: 30px;
          color: #FFFFFF;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.08;
        }

        .host-installation-card-copy {
          margin-top: 24px;
          max-width: 260px;
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.45;
        }

        .host-installation-rule {
          margin: 24px 0 22px;
          height: 1px;
          width: 100%;
          background: rgba(255, 255, 255, 0.11);
        }

        .host-installation-badge {
          display: inline-flex;
          min-height: 72px;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(22, 163, 74, 0.14);
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.18), rgba(22, 80, 38, 0.26));
          color: #16a34a;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.35;
          text-align: center;
        }

        .host-installation-badge svg {
          flex: 0 0 auto;
        }

        .host-installation-wall-charger {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 82px;
          height: 182px;
          transform: translate(-50%, -43%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 9px;
          background:
            linear-gradient(150deg, rgba(255, 255, 255, 0.2), transparent 22%),
            linear-gradient(180deg, #555D5D 0%, #171B1B 100%);
          box-shadow:
            0 24px 52px rgba(0, 0, 0, 0.58),
            inset 9px 0 20px rgba(255, 255, 255, 0.05);
        }

        .host-installation-wall-light {
          position: absolute;
          left: 50%;
          top: 38px;
          width: 2px;
          height: 82px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #16a34a;
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.78);
        }

        .host-installation-wall-mark {
          position: absolute;
          left: 50%;
          bottom: 22px;
          display: grid;
          height: 18px;
          width: 18px;
          place-items: center;
          transform: translateX(-50%);
          color: #d4d4d8;
        }

        .host-installation-wall-cable {
          position: absolute;
          left: calc(50% - 1px);
          top: 100%;
          width: 2px;
          height: 92px;
          background: linear-gradient(#0a0a0a, #050505);
          box-shadow: 0 0 18px rgba(0, 0, 0, 0.6);
        }

        .host-installation-plant {
          position: absolute;
          left: -12px;
          bottom: -14px;
          width: 142px;
          height: 172px;
          opacity: 0.55;
          background:
            radial-gradient(ellipse at 20% 75%, rgba(22, 163, 74, 0.9) 0 9%, transparent 10%),
            radial-gradient(ellipse at 38% 60%, rgba(22, 163, 74, 0.88) 0 10%, transparent 11%),
            radial-gradient(ellipse at 56% 78%, rgba(22, 163, 74, 0.85) 0 8%, transparent 9%),
            radial-gradient(ellipse at 28% 43%, rgba(22, 163, 74, 0.76) 0 9%, transparent 10%);
          filter: blur(0.2px);
        }

        .host-installation-stand-charger {
          position: absolute;
          left: 50%;
          top: 52px;
          width: 76px;
          height: 142px;
          transform: translateX(-50%);
          border: 2px solid rgba(149, 166, 180, 0.55);
          border-radius: 15px;
          background: linear-gradient(180deg, #293037, #070808 70%);
          box-shadow:
            0 16px 46px rgba(0, 0, 0, 0.62),
            inset 0 0 20px rgba(255, 255, 255, 0.04);
        }

        .host-installation-stand-top {
          position: absolute;
          left: 0;
          right: 0;
          top: 36px;
          height: 18px;
          background: rgba(255, 255, 255, 0.1);
        }

        .host-installation-stand-screen {
          position: absolute;
          left: 0;
          right: 0;
          top: 54px;
          display: grid;
          height: 36px;
          place-items: center;
          color: #FFFFFF;
          background: rgba(0, 0, 0, 0.22);
        }

        .host-installation-stand-dot {
          position: absolute;
          bottom: 26px;
          height: 12px;
          width: 12px;
          border-radius: 999px;
        }

        .host-installation-stand-dot.muted {
          left: 25px;
          background: #222A2A;
        }

        .host-installation-stand-dot.active {
          right: 22px;
          background: #16a34a;
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.65);
        }

        .host-installation-stand-cable {
          position: absolute;
          left: 100%;
          top: 30px;
          width: 28px;
          height: 108px;
          border-right: 3px solid #050606;
          border-bottom: 3px solid #050606;
          border-radius: 0 0 22px 0;
          transform: translateX(14px);
        }

        .host-installation-pole {
          position: absolute;
          left: 50%;
          top: 190px;
          width: 26px;
          height: 118px;
          transform: translateX(-50%);
          border-radius: 14px 14px 4px 4px;
          background: linear-gradient(90deg, #050606, #1D2222 48%, #060707);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.62);
        }

        .host-installation-base {
          position: absolute;
          left: 50%;
          bottom: 58px;
          width: 104px;
          height: 16px;
          transform: translateX(-50%);
          border-radius: 50% 50% 8px 8px;
          background: linear-gradient(180deg, #252D2D, #050606);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.62);
        }

        .host-installation-floor-glow {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 88px;
          height: 12px;
          background: linear-gradient(90deg, transparent, rgba(22, 163, 74, 0.82), transparent);
          filter: blur(2px);
        }

        .host-installation-pot {
          position: absolute;
          right: 14px;
          bottom: 93px;
          width: 46px;
          height: 78px;
          opacity: 0.36;
          background:
            radial-gradient(ellipse at 55% 10%, #112718 0 24%, transparent 25%),
            linear-gradient(86deg, transparent 0 22%, #07100A 22% 67%, transparent 67%);
          filter: blur(0.4px);
        }

        .host-installation-cta {
          margin-top: 28px;
          display: flex;
          min-height: 132px;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          background:
            linear-gradient(135deg, rgba(18, 22, 22, 0.96), rgba(7, 8, 8, 0.96)),
            radial-gradient(circle at 10% 50%, rgba(22, 163, 74, 0.09), transparent 18%);
          padding: 32px;
        }

        .host-installation-cta-copy {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 26px;
        }

        .host-installation-cta-icon {
          display: grid;
          height: 62px;
          width: 62px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.12);
          color: #16a34a;
        }

        .host-installation-cta h3 {
          color: #FFFFFF;
          font-size: 24px;
          font-weight: 800;
          line-height: 1.15;
        }

        .host-installation-cta p {
          margin-top: 6px;
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.45;
        }

        .host-installation-button {
          min-height: 58px;
          min-width: 280px;
          border-radius: 8px;
          background: #16a34a;
          font-size: 17px;
        }

        .host-roi-section {
          position: relative;
          overflow: hidden;
          padding: 110px 0 112px;
          background:
            radial-gradient(circle at 8% 88%, rgba(22, 163, 74, 0.16), transparent 26%),
            radial-gradient(circle at 79% 24%, rgba(255, 255, 255, 0.055), transparent 28%),
            linear-gradient(180deg, #060707 0%, #090A0A 100%);
          isolation: isolate;
        }

        .host-roi-section::before {
          content: '';
          position: absolute;
          left: -120px;
          bottom: -330px;
          width: 560px;
          height: 560px;
          border: 2px solid rgba(22, 163, 74, 0.7);
          border-radius: 999px;
          box-shadow:
            0 0 42px rgba(22, 163, 74, 0.32),
            inset 0 0 34px rgba(22, 163, 74, 0.12);
          pointer-events: none;
        }

        .host-roi-section::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.16), transparent 30%, rgba(0, 0, 0, 0.18)),
            repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 6px);
          opacity: 0.5;
          pointer-events: none;
        }

        .host-roi-section .host-container {
          position: relative;
          z-index: 1;
        }

        .host-roi-layout {
          display: grid;
          grid-template-columns: minmax(540px, 0.88fr) minmax(620px, 1.12fr);
          gap: 66px;
          align-items: center;
        }

        .host-roi-copy {
          max-width: 560px;
        }

        .host-roi-eyebrow {
          color: #16a34a;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .host-roi-title {
          margin-top: 28px;
          color: #FFFFFF;
          font-size: clamp(46px, 3.9vw, 64px);
          font-weight: 800;
          line-height: 1.13;
          letter-spacing: 0;
        }

        .host-roi-description {
          margin-top: 24px;
          max-width: 500px;
          color: #a1a1aa;
          font-size: 22px;
          line-height: 1.55;
        }

        .host-roi-highlights {
          margin-top: 44px;
          display: grid;
          gap: 12px;
        }

        .host-roi-highlight {
          display: grid;
          min-height: 92px;
          grid-template-columns: 64px 1fr;
          align-items: center;
          gap: 22px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background:
            linear-gradient(115deg, rgba(24, 28, 28, 0.82), rgba(9, 10, 10, 0.72)),
            radial-gradient(circle at 12% 50%, rgba(22, 163, 74, 0.09), transparent 24%);
          padding: 18px 24px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(16px);
        }

        .host-roi-highlight-icon {
          display: grid;
          height: 56px;
          width: 56px;
          place-items: center;
          border-radius: 12px;
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          box-shadow: inset 0 0 24px rgba(22, 163, 74, 0.04);
        }

        .host-roi-highlight h3 {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .host-roi-highlight p {
          margin-top: 6px;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.4;
        }

        .host-roi-calculator {
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 18px;
          background:
            radial-gradient(circle at 75% 8%, rgba(255, 255, 255, 0.075), transparent 25%),
            linear-gradient(145deg, rgba(22, 24, 24, 0.92), rgba(9, 10, 10, 0.96));
          padding: 46px 52px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 26px 80px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(18px);
        }

        .host-roi-fields {
          display: grid;
          gap: 30px;
        }

        .host-roi-field {
          display: grid;
          gap: 14px;
        }

        .host-roi-field span {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .host-roi-input {
          height: 58px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 9px;
          background: rgba(4, 5, 5, 0.78);
          padding: 0 22px;
          color: #FFFFFF;
          font-size: 22px;
          font-weight: 650;
          outline: none;
          -webkit-appearance: none;
          -moz-appearance: textfield;
          appearance: textfield;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .host-roi-input::-webkit-outer-spin-button,
        .host-roi-input::-webkit-inner-spin-button {
          display: none;
          margin: 0;
          -webkit-appearance: none;
          appearance: none;
        }

        .host-roi-input[type='number'] {
          -webkit-appearance: none;
          appearance: textfield;
          -moz-appearance: textfield;
        }

        .host-roi-input:focus {
          border-color: rgba(22, 163, 74, 0.75);
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);
        }

        .host-roi-result {
          position: relative;
          overflow: hidden;
          margin-top: 34px;
          border: 1px solid rgba(22, 163, 74, 0.75);
          border-radius: 9px;
          background:
            radial-gradient(circle at 100% 12%, rgba(22, 163, 74, 0.26), transparent 24%),
            linear-gradient(135deg, rgba(11, 16, 16, 0.96), rgba(24, 27, 27, 0.9));
          padding: 30px 36px;
          box-shadow:
            0 0 38px rgba(22, 163, 74, 0.1),
            inset 0 0 42px rgba(22, 163, 74, 0.05);
        }

        .host-roi-result::after {
          content: '';
          position: absolute;
          right: 16px;
          top: 18px;
          width: 46px;
          height: 1px;
          transform: rotate(-45deg);
          background: #16a34a;
          box-shadow: 0 0 16px rgba(22, 163, 74, 0.85);
        }

        .host-roi-result-label {
          color: #16a34a;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .host-roi-result-value {
          margin-top: 18px;
          color: #FFFFFF;
          font-size: clamp(52px, 5vw, 76px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0;
          text-shadow: 0 7px 22px rgba(0, 0, 0, 0.42);
        }

        .host-roi-button {
          display: inline-flex;
          min-height: 64px;
          min-width: 250px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 24px;
          padding: 0 24px 0 32px;
          border: 1px solid #16a34a;
          border-radius: 9px;
          background: rgba(22, 163, 74, 0.03);
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 800;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .host-roi-button:hover {
          background: rgba(22, 163, 74, 0.12);
          color: #16a34a;
          transform: translateY(-1px);
        }

        .host-roi-button svg {
          margin-left: auto;
          flex: 0 0 auto;
        }

        @media (max-width: 1180px) {
          .host-hero-feature-strip {
            width: min(900px, calc(100vw - 48px));
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .host-hero-feature:nth-child(4)::before {
            display: none;
          }

          .host-hero-feature:nth-child(n + 4) {
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .host-where-section {
            min-height: auto;
          }

          .host-how-section .host-container,
          .host-where-section .host-container {
            width: auto;
            max-width: 1300px;
            padding-inline: 24px;
          }

          .host-where-inner {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 28px;
            height: auto;
            min-height: auto;
          }

          .host-where-copy,
          .host-where-grid,
          .host-where-panel {
            grid-column: auto;
            grid-row: auto;
          }

          .host-where-panel {
            width: 100%;
            max-width: 760px;
            justify-self: center;
          }

          .host-youtube-reels-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .host-how-section,
          .host-where-section {
            min-height: auto;
          }

          .host-container {
            padding: 0 18px;
          }

          .host-section {
            padding: 84px 0;
          }

          .host-installation-title {
            font-size: 38px;
          }

          .host-installation-section {
            padding: 72px 0 62px;
          }

          .host-installation-copy {
            font-size: 17px;
          }

          .host-installation-grid {
            margin-top: 38px;
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .host-installation-card {
            min-height: 0;
            grid-template-columns: 1fr;
          }

          .host-installation-visual {
            min-height: 260px;
          }

          .host-installation-content {
            padding: 28px 22px 24px;
          }

          .host-installation-card-title {
            margin-top: 22px;
            font-size: 25px;
          }

          .host-installation-card-copy {
            max-width: none;
            font-size: 16px;
          }

          .host-installation-badge {
            min-height: 64px;
            padding: 12px 14px;
            font-size: 15px;
          }

          .host-installation-wall-charger {
            height: 158px;
            width: 72px;
            transform: translate(-50%, -47%);
          }

          .host-installation-wall-light {
            height: 68px;
          }

          .host-installation-stand-charger {
            top: 34px;
          }

          .host-installation-pole {
            top: 172px;
            height: 86px;
          }

          .host-installation-base {
            bottom: 30px;
          }

          .host-installation-floor-glow {
            bottom: 60px;
          }

          .host-installation-cta {
            min-height: 0;
            flex-direction: column;
            align-items: stretch;
            padding: 24px 20px;
          }

          .host-installation-cta-copy {
            align-items: flex-start;
            gap: 16px;
          }

          .host-installation-cta-icon {
            height: 52px;
            width: 52px;
          }

          .host-installation-cta h3 {
            font-size: 21px;
          }

          .host-installation-cta p {
            font-size: 15px;
          }

          .host-installation-button {
            min-width: 0;
            width: 100%;
          }

          .host-roi-section {
            padding: 76px 0;
          }

          .host-roi-section::before {
            left: -170px;
            bottom: -260px;
            width: 390px;
            height: 390px;
          }

          .host-roi-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .host-roi-title {
            margin-top: 22px;
            font-size: 39px;
          }

          .host-roi-description {
            font-size: 17px;
          }

          .host-roi-highlights {
            margin-top: 30px;
          }

          .host-roi-highlight {
            min-height: 82px;
            grid-template-columns: 54px 1fr;
            gap: 16px;
            padding: 16px;
          }

          .host-roi-highlight-icon {
            height: 50px;
            width: 50px;
          }

          .host-roi-highlight h3 {
            font-size: 16px;
          }

          .host-roi-highlight p {
            font-size: 14px;
          }

          .host-roi-calculator {
            padding: 24px 18px;
            border-radius: 12px;
          }

          .host-roi-fields {
            gap: 22px;
          }

          .host-roi-field span {
            font-size: 16px;
          }

          .host-roi-input {
            height: 54px;
            font-size: 19px;
          }

          .host-roi-result {
            margin-top: 26px;
            padding: 26px 20px;
          }

          .host-roi-result-value {
            font-size: 42px;
          }

          .host-roi-button {
            width: 100%;
            min-width: 0;
          }

          .host-logo-set {
            gap: 14px;
            padding-right: 14px;
          }

          .host-partners-section {
            padding: 86px 0 76px;
          }

          .host-partners-bolt {
            right: -170px;
            top: 20px;
            width: 330px;
            height: 540px;
            opacity: 0.42;
          }

          .host-partners-bolt-soft {
            width: 80vw;
            opacity: 0.82;
          }

          .host-partners-eyebrow {
            gap: 16px;
            font-size: 12px;
          }

          .host-partners-eyebrow::after {
            width: 72px;
          }

          .host-partners-title {
            margin-top: 32px;
            font-size: 38px;
            line-height: 1.08;
          }

          .host-partners-copy {
            font-size: 17px;
          }

          .host-partner-logo-grid {
            margin-top: 42px;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .host-partner-logo-card {
            height: 132px;
            padding: 28px;
          }

          .host-partner-logo-card img {
            max-height: 62px;
          }

          .host-partners-action {
            margin-top: 28px;
          }

          .host-partners-button {
            min-height: 62px;
            min-width: 0;
            width: 100%;
            padding: 0 22px;
            font-size: 17px;
          }

          .host-final-cta {
            --cta-frame-top: 35%;
            --cta-frame-height: 34%;
            padding: 74px 0 82px;
          }

          .cta-line-left,
          .cta-line-right {
            width: 118px;
            opacity: 0.66;
          }

          .cta-line-left {
            left: -82px;
            border-radius: 0 46px 46px 0;
          }

          .cta-line-right {
            right: -82px;
            border-radius: 46px 0 0 46px;
          }

          .cta-bottom-line-left,
          .cta-bottom-line-right {
            display: none;
          }

          .host-final-content {
            max-width: 100%;
          }

          .host-final-eyebrow {
            font-size: 12px;
            letter-spacing: 0.28em;
          }

          .host-final-eyebrow span {
            width: 160px;
            grid-template-columns: 1fr 24px 1fr;
            gap: 10px;
          }

          .host-final-title {
            margin-top: 26px;
            font-size: 34px;
          }

          .host-final-copy {
            margin-top: 20px;
            font-size: 17px;
          }

          .host-final-button {
            min-height: 58px;
            min-width: 0;
            width: min(100%, 280px);
            margin-top: 28px;
            font-size: 18px;
          }

          .host-youtube-reels-section {
            padding: 72px 0 80px;
          }

          .host-youtube-reels-intro h2 {
            font-size: 38px;
          }

          .host-youtube-reels-intro p {
            font-size: 17px;
          }

          .host-youtube-reels-label {
            grid-template-columns: minmax(32px, 1fr) auto minmax(32px, 1fr);
            gap: 14px;
            margin: 42px auto 26px;
          }

          .host-youtube-reels-label strong {
            gap: 10px;
            font-size: 18px;
          }

          .host-youtube-reels-icon {
            height: 28px;
            width: 34px;
          }

          .host-youtube-reels-grid {
            display: flex;
            gap: 18px;
            overflow-x: auto;
            padding: 2px 2px 18px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .host-youtube-reels-grid::-webkit-scrollbar {
            display: none;
          }

          .host-youtube-reel-card {
            width: min(76vw, 320px);
            flex: 0 0 auto;
            scroll-snap-align: center;
          }

          .host-youtube-reels-action {
            margin-top: 30px;
          }

          .host-youtube-reels-button {
            min-height: 56px;
            min-width: 0;
            width: min(100%, 260px);
            font-size: 17px;
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

          .host-hero-feature:nth-child(n + 4) {
            border-top: 0;
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

          .host-hero-feature:last-child::after {
            display: none;
          }

          .host-hero-icon {
            height: 40px;
            width: 40px;
          }

          .host-hero-feature-text {
            font-size: 13px;
            line-height: 1.2;
          }

          .host-hero-feature-text span:first-child {
            font-size: 12px;
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

          .host-how-payment-cards {
            padding-bottom: 42px;
          }

          .host-how-payment-cards .host-payment-cards {
            margin-top: 0;
          }

          .host-how-payment-cards .host-payment-card {
            min-height: 220px;
          }

          .host-payments-button {
            min-height: 58px;
            min-width: 190px;
          }

          .host-how-inner {
            display: block;
            height: auto;
            min-height: auto;
            padding-block: 64px;
          }

          .host-how-copy {
            max-width: 100%;
          }

          .host-how-eyebrow {
            font-size: 16px;
          }

          .host-how-title {
            margin-top: 28px;
            font-size: 39px;
          }

          .host-how-description {
            max-width: 320px;
            font-size: 17px;
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

          .host-how-section .host-container,
          .host-where-section .host-container {
            width: auto;
            max-width: 1300px;
            padding-inline: 18px;
          }

          .host-where-inner {
            grid-template-columns: 1fr;
            gap: 22px;
            height: auto;
            min-height: auto;
            padding-block: 64px;
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

          .host-where-panel {
            grid-column: auto;
            max-width: none;
            width: 100%;
            padding: 20px 16px;
            border-radius: 12px;
          }

          .host-where-tabs {
            margin-top: 20px;
          }

          .host-where-panel-title {
            margin-top: 24px;
            font-size: 25px;
          }

          .host-where-panel-item {
            grid-template-columns: 48px 1fr;
            gap: 12px;
            padding: 12px 0;
          }

          .host-where-panel-item-icon {
            height: 42px;
            width: 42px;
          }

          .host-where-panel-item h4 {
            font-size: 15px;
          }

          .host-where-panel-item p {
            font-size: 14px;
          }

          .host-where-panel-footer {
            min-height: 50px;
            font-size: 14px;
          }

          .host-who-inner {
            padding: 66px 0;
          }

          .host-who-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .host-who-copy {
            max-width: 100%;
          }

          .host-who-title {
            font-size: 40px;
          }

          .host-who-copy-text {
            max-width: 340px;
            font-size: 17px;
          }

          .host-who-cards {
            padding: 0 0 44px;
          }

          .host-who-nav {
            display: none;
          }

          .host-who-slider .swiper-slide {
            width: min(300px, calc(100vw - 40px));
          }

          .host-who-card,
          .host-who-card-content {
            width: min(300px, calc(100vw - 40px));
            height: 330px;
            min-height: 330px;
          }

          .host-who-card-title {
            font-size: 22px;
          }

          .host-who-strip {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 20px;
          }

          .host-who-divider {
            height: 1px;
            width: 100%;
          }

          .host-charger-options {
            padding: 56px 0;
          }

          .host-charger-panel {
            border-radius: 18px;
            padding: 32px 0 22px;
          }

          .host-charger-bg {
            height: 500px;
            object-position: 60% center;
          }

          .host-charger-header {
            height: 400px;
            padding: 0;
          }

          .host-charger-title {
            font-size: 38px;
          }

          .host-charger-copy {
            font-size: 17px;
          }

          .host-charger-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .host-charger-card {
            min-height: 0;
            grid-template-columns: 1fr;
            padding: 66px 20px 22px;
          }

          .host-charger-art {
            min-height: 210px;
          }

          .host-charger-specs {
            min-height: 0;
          }

          .host-charger-card h3 {
            font-size: 26px;
          }

          .host-charger-card p,
          .host-charger-feature,
          .host-charger-spec-row {
            font-size: 14px;
          }

          .host-charger-support-strip {
            grid-template-columns: 1fr;
          }

          .host-charger-support-item {
            min-height: 88px;
            padding: 18px;
          }

          .host-charger-support-item + .host-charger-support-item {
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }

          .host-charger-quiz {
            padding: 20px;
          }

          .host-charger-quiz {
            align-items: stretch;
            flex-direction: column;
          }

          .host-charger-quiz-copy {
            gap: 14px;
            font-size: 17px;
          }

          .host-charger-quiz-copy small {
            font-size: 14px;
          }

          .host-charger-quiz-mark {
            height: 54px;
            width: 54px;
            font-size: 28px;
          }

          .host-charger-quiz-button {
            min-width: 0;
            width: 100%;
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
                <Icon name="bolt" className="h-4 w-4 text-z-green" />
                Host partner program
              </span>
              <h1 className="host-hero-title">
                Host a <span>charger</span>
              </h1>
              <p className="host-hero-copy">
                For small businesses, earn more from your space. For large
                organizations, support ESG goals with real action.
              </p>

              <div className="host-hero-earn">
                <div className="host-hero-earn-text">
                  <span>You set the</span>
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
                </div>
              </div>
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
                <span className="host-hero-feature-text">
                  <span>{item.title}</span>
                  <span>{item.description}</span>
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
                  Match charging power to how people use{" "}
                  <span>your space.</span>
                </h2>
                <p className="host-charger-copy">
                  Choose the right charger for your traffic, power supply, and
                  business goals.
                </p>
              </Reveal>

              <div className="host-charger-grid">
                {chargerOptionCards.map((charger, index) => {
                  return (
                    <Reveal key={charger.title} delay={index * 0.08}>
                      <article
                        className={`host-charger-card ${
                          charger.popular ? "is-popular" : ""
                        }`}
                      >
                        <span className="host-charger-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {charger.popular ? (
                          <span className="host-charger-popular">Popular</span>
                        ) : null}
                        <div>
                          <h3>{charger.title}</h3>
                          <p>{charger.description}</p>
                        </div>
                        {charger.image ? (
                          <div className="host-charger-art">
                            <img
                              src={charger.image}
                              alt={`${charger.title} product`}
                              className={`host-charger-image ${
                                charger.imageSize === "large"
                                  ? "is-large"
                                  : "is-small"
                              }`}
                            />
                          </div>
                        ) : null}
                        <div className="host-charger-feature-list">
                          {charger.features.map((feature) => (
                            <div className="host-charger-feature" key={feature}>
                              <span className="host-charger-check">
                                <Icon name="check" className="h-3 w-3" />
                              </span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="host-charger-specs">
                          <div className="host-charger-spec-row">
                            <span>Power</span>
                            <strong>{charger.power}</strong>
                          </div>
                          <div className="host-charger-spec-row">
                            <span>Best for</span>
                            <strong>{charger.bestFor}</strong>
                          </div>
                          <div className="host-charger-spec-row">
                            <span>Location</span>
                            <strong>{charger.location}</strong>
                          </div>
                          <div className="host-charger-spec-row">
                            <span>Price</span>
                            <strong>{charger.price}</strong>
                          </div>
                        </div>
                        <SmartLink
                          href={charger.href}
                          className={`host-charger-learn ${
                            charger.popular ? "is-primary" : ""
                          }`}
                        >
                          View details
                          <Icon name="arrow" className="h-4 w-4" />
                        </SmartLink>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal className="host-charger-support-strip">
                {chargerOptionBenefits.map((item) => (
                  <div className="host-charger-support-item" key={item.title}>
                    <span className="host-charger-support-icon">
                      <Icon name={item.icon} className="h-8 w-8" />
                    </span>
                    <span>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </span>
                  </div>
                ))}
              </Reveal>

              <Reveal>
                <div className="host-charger-quiz">
                  <div className="host-charger-quiz-copy">
                    <span className="host-charger-quiz-mark">?</span>
                    <span>
                      Not sure which charger fits your space?
                      <small>
                        Take our quick quiz and we'll recommend the best option.
                      </small>
                    </span>
                  </div>
                  <PrimaryButton
                    href="/contact-us"
                    className="host-charger-quiz-button"
                  >
                    Find the right charger
                  </PrimaryButton>
                </div>
                {!showInstallationOptions ? (
                  <div className="host-expand-actions host-installation-expand-actions">
                    <button
                      type="button"
                      className="host-expand-button"
                      onClick={() => setShowInstallationOptions(true)}
                    >
                      Show installation options
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                ) : null}
              </Reveal>
            </div>
          </div>
        </section>

        <AnimatePresence initial={false}>
          {showInstallationOptions ? (
            <ShutterExpand key="installation-options">
              <InstallationOptionsSection
                onCollapse={() => setShowInstallationOptions(false)}
              />
            </ShutterExpand>
          ) : null}
        </AnimatePresence>

        <section id="why" className="host-why-section">
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

              {!showRoiCalculator ? (
                <div className="host-expand-actions">
                  <button
                    type="button"
                    className="host-expand-button"
                    onClick={() => setShowRoiCalculator(true)}
                  >
                    Show ROI calculator
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </Reveal>

            <Reveal delay={0.08} className="host-why-visual">
              <div className="host-why-image-wrap">
                <img
                  src="https://res.cloudinary.com/diywraupt/image/upload/v1780393382/web_1_cwxatn.jpg"
                  alt="Zvolta host charging location"
                  className="host-why-image"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <AnimatePresence initial={false}>
          {showRoiCalculator ? (
            <ShutterExpand key="roi-calculator">
              <section id="roi" className="host-section host-roi-section">
                <button
                  type="button"
                  className="host-collapse-button"
                  aria-label="Collapse ROI calculator"
                  onClick={() => setShowRoiCalculator(false)}
                >
                  <IoClose className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="host-container">
                  <div className="host-roi-layout">
                    <Reveal className="host-roi-copy">
                      <p className="host-roi-eyebrow">Estimate your earnings</p>
                      <h2 className="host-roi-title">
                        See how much
                        <br />
                        your site can earn.
                      </h2>
                      <p className="host-roi-description">
                        Adjust charger count, price, and usage to model a simple
                        monthly estimate.
                      </p>

                      <div className="host-roi-highlights">
                        {roiHighlights.map((item) => (
                          <div className="host-roi-highlight" key={item.title}>
                            <span className="host-roi-highlight-icon">
                              <Icon name={item.icon} className="h-8 w-8" />
                            </span>
                            <span>
                              <h3>{item.title}</h3>
                              <p>{item.copy}</p>
                            </span>
                          </div>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal delay={0.08} className="host-roi-calculator">
                      <div className="host-roi-fields">
                        <label className="host-roi-field">
                          <span>Number of chargers</span>
                          <input
                            type="number"
                            min="1"
                            value={chargerCount}
                            onChange={(event) =>
                              setChargerCount(Number(event.target.value))
                            }
                            className="host-roi-input"
                          />
                        </label>
                        <label className="host-roi-field">
                          <span>Price per unit</span>
                          <input
                            type="number"
                            min="0"
                            value={unitPrice}
                            onChange={(event) =>
                              setUnitPrice(Number(event.target.value))
                            }
                            className="host-roi-input"
                          />
                        </label>
                        <label className="host-roi-field">
                          <span>Usage</span>
                          <input
                            type="number"
                            min="0"
                            value={usage}
                            onChange={(event) =>
                              setUsage(Number(event.target.value))
                            }
                            className="host-roi-input"
                          />
                        </label>
                      </div>

                      <div className="host-roi-result">
                        <p className="host-roi-result-label">
                          Monthly earnings
                        </p>
                        <p className="host-roi-result-value">
                          PKR {monthlyEarnings.toLocaleString("en-PK")}
                        </p>
                      </div>

                      <SmartLink
                        href="/charging-partners#roi-calculator"
                        className="host-roi-button"
                      >
                        Try ROI calculator
                        <Icon name="arrow" className="h-5 w-5" />
                      </SmartLink>
                    </Reveal>
                  </div>
                </div>
              </section>
            </ShutterExpand>
          ) : null}
        </AnimatePresence>

        <section id="how" className="host-how-section">
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

          {/* <div className="host-container host-how-payment-cards">
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
          </div> */}
        </section>

        <section id="requirements" className="host-where-section">
          <div className="host-container host-where-inner">
            <Reveal className="host-where-copy">
              <p className="host-where-eyebrow">
                <span className="host-where-number">03</span>
                Where
              </p>
              <h2 className="host-where-title">
                Built for places where people already stop.
              </h2>
              {/* <p className="host-where-copy-text">
                High dwell time. Clear access. Everyday footfall.
              </p> */}
              {/* <PrimaryButton href="/charge" className="host-where-button">
                See charger map
              </PrimaryButton> */}
            </Reveal>

            <div className="host-where-grid">
              {hostWhereLocations.map((location, index) => (
                <Reveal key={location.title} delay={index * 0.035}>
                  <button
                    type="button"
                    className={`host-where-card ${
                      activeWhereIndex === index ? "is-active" : ""
                    }`}
                    aria-pressed={activeWhereIndex === index}
                    onClick={() => setActiveWhereIndex(index)}
                  >
                    <img src={location.image} alt={location.title} />
                    <span
                      className="host-where-active-check"
                      aria-hidden="true"
                    >
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    <div className="host-where-card-content">
                      <span className="host-where-card-icon">
                        <Icon name={location.icon} className="h-9 w-9" />
                      </span>
                      <h3 className="host-where-card-title">
                        {location.title}
                      </h3>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={0.12}
              className={`host-where-panel is-${wherePanelMode}`}
            >
              <div className="host-where-panel-content">
                <div className="host-where-panel-location">
                  <span className="host-where-panel-location-icon">
                    <Icon name={activeWhereLocation.icon} className="h-7 w-7" />
                  </span>
                  <h3>{activeWhereLocation.title}</h3>
                </div>

                <div className="host-where-tabs" role="tablist">
                  {["problems", "benefits"].map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      role="tab"
                      aria-selected={wherePanelMode === mode}
                      className={`host-where-tab ${
                        wherePanelMode === mode ? "is-active" : ""
                      }`}
                      onClick={() => setWherePanelMode(mode)}
                    >
                      <Icon
                        name={mode === "problems" ? "alert" : "chart"}
                        className="h-4 w-4"
                      />
                      <span>
                        {mode === "problems" ? "Problems" : "Solutions"}
                      </span>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${activeWhereLocation.title}-${wherePanelMode}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <h3 className="host-where-panel-title">
                      {activeWherePanel.title}
                    </h3>
                    <div className="host-where-panel-list">
                      {activeWherePanel.items.map((item) => (
                        <div className="host-where-panel-item" key={item.title}>
                          <span className="host-where-panel-item-icon">
                            <Icon name={item.icon} className="h-7 w-7" />
                          </span>
                          <span>
                            <h4>{item.title}</h4>
                            <p>{item.copy}</p>
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="host-where-panel-footer">
                      <Icon
                        name={activeWherePanel.footerIcon}
                        className="h-7 w-7"
                      />
                      <span>{activeWherePanel.footer}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="who" className="host-who-section">
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

              <Reveal className="host-who-cards" delay={0.08}>
                <button
                  type="button"
                  className="host-who-nav host-who-nav-prev"
                  aria-label="Previous category"
                >
                  <Icon name="arrow" className="h-6 w-6" />
                </button>
                <Swiper
                  modules={[Navigation, Pagination]}
                  className="host-who-slider"
                  slidesPerView="auto"
                  spaceBetween={18}
                  navigation={{
                    prevEl: ".host-who-nav-prev",
                    nextEl: ".host-who-nav-next",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: {
                      slidesPerView: "auto",
                      spaceBetween: 18,
                    },
                    1024: {
                      slidesPerView: "auto",
                      spaceBetween: 20,
                    },
                  }}
                >
                  {hostWhoCards.map((item) => (
                    <SwiperSlide key={item.title}>
                      <article className="host-who-card">
                        <img src={item.image} alt={item.title} />
                        <div className="host-who-card-content">
                          <h3 className="host-who-card-title">{item.title}</h3>
                          <span className="host-who-card-line" />
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  className="host-who-nav host-who-nav-next"
                  aria-label="Next category"
                >
                  <Icon name="arrow" className="h-6 w-6" />
                </button>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="host-who-strip">
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
                    onClick={() => setShowHostingSections(true)}
                  >
                    View host stories
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>

        <AnimatePresence initial={false}>
          {showHostingSections ? (
            <ShutterExpand key="hosting-sections">
              <section className="host-partners-section">
                <button
                  type="button"
                  className="host-collapse-button"
                  aria-label="Collapse host stories"
                  onClick={() => setShowHostingSections(false)}
                >
                  <IoClose className="h-6 w-6" aria-hidden="true" />
                </button>
                <span className="host-partners-bolt" aria-hidden="true" />
                <span className="host-partners-bolt-soft" aria-hidden="true" />
                <div className="host-container">
                  <Reveal className="host-partners-intro">
                    <p className="host-partners-eyebrow">Already hosting</p>
                    <h2 className="host-partners-title">
                      Businesses use Zvolta chargers to earn and support
                      sustainability<span>.</span>
                    </h2>
                    <p className="host-partners-copy">
                      Partner sites get app visibility, cleaner customer
                      service, and a practical ESG action.
                    </p>
                  </Reveal>

                  <Reveal className="host-partner-logo-grid" delay={0.08}>
                    {partnerLogos.map((logo) => (
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
                    <SecondaryButton
                      href="/partners"
                      className="host-partners-button"
                    >
                      Explore partners
                    </SecondaryButton>
                  </Reveal>
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
                      <article className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[390px]">
                        <img
                          src={story.image}
                          alt=""
                          className="h-56 w-full object-cover"
                        />
                        <div className="p-6">
                          <p className="text-xs font-semibold uppercase text-z-green">
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
            </ShutterExpand>
          ) : null}
        </AnimatePresence>

        {/* <PageSection>
          <SectionIntro
            eyebrow="Safety and reliability"
            title="Built for everyday charging in local conditions."
            copy="Protection, compatibility, and support are part of the system."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((item, index) => (
              <Reveal key={item.feature} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-white/10 bg-zinc-900 p-6">
                  <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-z-black text-z-green">
                    <Icon name="bolt" className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.feature}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <SecondaryButton href="/charge" className="mt-10">
            View full specs
          </SecondaryButton>
        </PageSection> */}

        {/* <section className="border-b border-white/10 bg-zinc-900 py-[120px] md:py-[132px]">
          <div className="host-container grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-z-green">
                Marketing and visibility
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
                Get free marketing for your site
              </h2>
              <div className="mt-8 grid gap-4">
                {marketingPoints.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-z-black text-z-green">
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
              <div className="rounded-lg border border-white/10 bg-z-black p-8">
                <div className="flex items-center justify-between gap-6">
                  <img
                    src="/img/full_logowhite.png"
                    alt="Zvolta"
                    className="h-9 w-auto"
                  />
                  <span className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold uppercase text-z-green">
                    Partner badge
                  </span>
                </div>
                <div className="my-12 h-px bg-white/10" />
                <p className="max-w-md text-[34px] font-semibold leading-[1.08] text-white md:text-[44px]">
                  Zvolta Clean Energy Partner
                </p>
                <p className="mt-6 max-w-sm text-base leading-7 text-zinc-400">
                  Show visitors that your space supports clean energy and EV
                  adoption.
                </p>
              </div>
            </Reveal>
          </div>
        </section> */}

        {/* <PageSection>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-z-green">
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
              <div className="rounded-lg border border-white/10 bg-zinc-900 p-8">
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <ChargerIllustration />
                    <p className="text-sm font-semibold text-zinc-400">
                      1 charger
                    </p>
                  </div>
                  <Icon name="arrow" className="h-8 w-8 text-zinc-400" />
                  <div className="flex items-end gap-4">
                    <ChargerIllustration size="small" />
                    <ChargerIllustration />
                    <ChargerIllustration size="small" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </PageSection> */}

        {/* <PageSection id="pricing">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple charger options with flexible payments."
            copy="3kW starts from 74,999 PKR. 7kW and 22kW are available after site review."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-lg border border-white/10 bg-zinc-900 p-8">
                  <h3 className="text-[36px] font-semibold leading-none text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-6 text-xl font-semibold text-white">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-base leading-7 text-zinc-400">
                    {plan.detail}
                  </p>
                  <SmartLink
                    href={plan.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white transition-colors group-hover:text-z-green"
                  >
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-zinc-900 p-6 sm:grid-cols-2">
            <p className="text-xl font-semibold text-white">0% interest</p>
            <p className="text-right text-xl font-semibold text-white">
              12 month installment plans available
            </p>
          </Reveal>
          <SecondaryButton href="#pricing" className="mt-8">
            View pricing
          </SecondaryButton>
        </PageSection> */}

        {/* <PageSection>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <SectionIntro
              eyebrow="Need help"
              title="Tell us about your space and we will guide you."
              copy="Share your location type, expected traffic, and the power details you already know."
            />
            <Reveal>
              <form
                className="grid gap-5 rounded-lg border border-white/10 bg-zinc-900 p-6 md:p-8"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Name</span>
                  <input
                    type="text"
                    className="h-12 rounded-lg border border-white/10 bg-z-black px-4 text-white outline-none transition focus:border-z-green"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    Email
                  </span>
                  <input
                    type="email"
                    className="h-12 rounded-lg border border-white/10 bg-z-black px-4 text-white outline-none transition focus:border-z-green"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Type</span>
                  <select className="h-12 rounded-lg border border-white/10 bg-z-black px-4 text-white outline-none transition focus:border-z-green">
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
                    className="rounded-lg border border-white/10 bg-z-black px-4 py-3 text-white outline-none transition focus:border-z-green"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-z-green px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
                >
                  Get a free consultation
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </PageSection> */}

        <section id="start-hosting" className="host-final-cta">
          <span className="cta-line-left" aria-hidden="true" />
          <span className="cta-line-right" aria-hidden="true" />
          {/* <span className="cta-bottom-line-left" aria-hidden="true" /> */}
          {/* <span className="cta-bottom-line-right" aria-hidden="true" /> */}
          <div className="host-container">
            <Reveal className="host-final-content">
              <p className="host-final-eyebrow">
                Ready to start
                <span>
                  <Icon name="bolt" className="h-6 w-6" />
                </span>
              </p>
              <h2 className="host-final-title">
                Bring EV charging
                <br />
                to your space
              </h2>
              <p className="host-final-copy">
                Get set up with the right charger, installation support, and
                hosting guidance.
              </p>
              <PrimaryButton href="/contact-us" className="host-final-button">
                Start hosting
              </PrimaryButton>
            </Reveal>
          </div>
        </section>

        <HostYoutubeReelsSection />
      </div>
    </>
  );
}
