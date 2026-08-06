import { SmartLink } from "../SmartLink";
import { useFormSubmission } from "../../hooks/useFormSubmission";
const CONTACT_LINK = "/contact-us";
const STORIES_LINK = "/stories";
const partnerLogos = [
  {
    src: "/img/Easypaisa.webp",
    alt: "Easypaisa",
  },
  {
    src: "/img/biomas_energy.png",
    alt: "Biomas Energy",
  },
  {
    src: "/img/blitz.png",
    alt: "Blitz",
  },
  {
    src: "/img/Black-logo.webp",
    alt: "Zvolta partner",
  },
  {
    label: "Host Partner",
  },
  {
    label: "Clean Energy Partner",
  },
];
const heroCards = [
  "Hosts",
  "Businesses",
  "Operators",
  "Communities",
  "Clean energy partners",
];
const partnershipCards = [
  {
    title: "Host chargers",
    copy: "Add Zvolta chargers to your location and earn from charging sessions.",
  },
  {
    title: "Use software",
    copy: "Run chargers with Zvolta's app, dashboard, payments, and controls.",
  },
  {
    title: "Grow the network",
    copy: "Work with Zvolta to bring charging to more people and places.",
  },
];
const benefits = [
  {
    title: "More people at your location",
    copy: "Bring EV users to your space and give them a reason to stay.",
  },
  {
    title: "Cleaner brand presence",
    copy: "Show real action toward ESG and sustainability goals.",
  },
  {
    title: "Simple charging operations",
    copy: "Use Zvolta's app, software, payments, support, and dashboard to manage everything with less effort.",
  },
  {
    title: "Support from a local team",
    copy: "Work with a team that understands Pakistan's roads, power, and EV users.",
  },
];
const stories = [
  {
    tag: "Host",
    title: "How a coworking space added EV charging as a new reason to visit.",
    image: "/img/host An EV charging.jpg",
  },
  {
    tag: "Place",
    title: "How a restaurant increased customer time with a charger outside.",
    image: "/img/charging-post.jpg",
  },
  {
    tag: "Impact",
    title: "How a business used charging income to support monthly costs.",
    image: "/img/Host/Host.png",
  },
  {
    tag: "Sustainability",
    title: "How a company supported its ESG goals by adding Zvolta chargers.",
    image: "/img/clean-volta.jpg",
  },
];
const testimonials = [
  [
    "Zvolta helped us add charging without making the process complicated.",
    "Restaurant owner",
  ],
  [
    "People now have another reason to stop at our location.",
    "Coworking space manager",
  ],
  [
    "The dashboard makes it easy to see usage, earnings, and charger activity.",
    "Apartment representative",
  ],
  [
    "We wanted something useful for our customers and better for the environment.",
    "Business partner",
  ],
];
const partnerTypes = [
  "Apartment buildings",
  "Restaurants and cafes",
  "Universities and schools",
  "Hospitals",
  "Offices and coworking spaces",
  "Parking spaces",
  "Malls and outlets",
  "Public spaces",
  "Charger companies",
  "Fleet operators",
  "Enterprises",
  "Brands working toward ESG goals",
];
const trustPoints = [
  "Local team",
  "Smart chargers",
  "App and dashboard",
  "Support for hosts and operators",
];
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
  return (
    <svg {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
function PrimaryButton({ href = CONTACT_LINK, children, className = "" }) {
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
function SecondaryButton({ href = CONTACT_LINK, children, className = "" }) {
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
function Section({ children, className = "" }) {
  return (
    <section className={`partners-section ${className}`}>
      <div className="partners-container">{children}</div>
    </section>
  );
}
function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div
      className={`partners-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
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
    </div>
  );
}
export {
  CONTACT_LINK,
  Icon,
  PrimaryButton,
  STORIES_LINK,
  SecondaryButton,
  Section,
  SectionIntro,
  SmartLink,
  benefits,
  heroCards,
  partnerLogos,
  partnerTypes,
  partnershipCards,
  stories,
  testimonials,
  trustPoints,
  useFormSubmission,
};
