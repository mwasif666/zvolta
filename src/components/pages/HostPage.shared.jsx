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
import YoutubeReelsSection from "./YoutubeReelsSection";
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
  {
    title: "Find",
    description: "Users find your charger in the app.",
  },
  {
    title: "App",
    description: "Through the Zvolta app.",
  },
  {
    title: "Cashless",
    description: "No cash handling.",
  },
  {
    title: "Automatic",
    description: "No manual work.",
  },
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
  {
    icon: "tools",
    title: "Host setup",
    description: "Free installation",
  },
  {
    icon: "wallet",
    title: "Keep",
    description: "100% earnings",
  },
  {
    icon: "phone",
    title: "App and",
    description: "dashboard",
  },
  {
    icon: "bolt",
    title: "Set price",
    description: "and timings",
  },
  {
    icon: "shield",
    title: "Local",
    description: "support",
  },
  {
    icon: "flag",
    title: "100% Made in",
    description: "Pakistan",
  },
];
const whyHostCards = [
  {
    icon: "wallet",
    copy: "Earn from every charging session",
  },
  {
    icon: "map",
    copy: "Bring more visitors to your location",
  },
  {
    icon: "bolt",
    copy: "Add a modern service without changing your business",
  },
  {
    icon: "phone",
    copy: "Increase dwell time and repeat visits",
  },
];
const hostControlCards = [
  {
    icon: "wallet",
    copy: "You set the price",
  },
  {
    icon: "phone",
    copy: "You set the timings",
  },
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
  {
    icon: "wallet",
    copy: "Payments made simple",
  },
  {
    icon: "wallet",
    copy: "Cashless",
  },
  {
    icon: "bolt",
    copy: "Automatic",
  },
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
  if (name === "cart") {
    return (
      <svg {...props}>
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
        <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />
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
    </Component>
  );
}
function ShutterExpand({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`host-shutter-panel ${className}`}
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

export {
  AnimatePresence,
  ChargerIllustration,
  ChargerProductVisual,
  Icon,
  InstallationDiagram,
  InstallationVisual,
  IoClose,
  Navigation,
  PageSection,
  Pagination,
  PrimaryButton,
  Reveal,
  RotatingText,
  SecondaryButton,
  SectionIntro,
  ShutterExpand,
  SmartLink,
  Swiper,
  SwiperSlide,
  YoutubeReelsSection,
  chargerOptionBenefits,
  chargerOptionCards,
  chargers,
  heroHighlights,
  hostBenefits,
  hostControlCards,
  hostHowCards,
  hostHowFooter,
  hostRotatingWords,
  hostWhereLocations,
  hostWhoBenefits,
  hostWhoCards,
  installationOptions,
  marketingPoints,
  motion,
  partnerLogos,
  paymentSteps,
  pricingPlans,
  roiHighlights,
  safetyFeatures,
  stories,
  useMemo,
  useReducedMotion,
  useState,
  whyHostCards,
};
