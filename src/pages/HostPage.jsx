import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SmartLink } from "../components/SmartLink";

const chargerCards = [
  {
    title: "3kW Charger",
    description: "Small spaces, low usage, EV bikes",
    cta: "Explore 3kW",
  },
  {
    title: "7kW Charger",
    description: "Offices, apartments, daily use",
    cta: "Explore 7kW",
  },
  {
    title: "22kW Charger",
    description: "High traffic, commercial spaces",
    cta: "Explore 22kW",
  },
];

const hostReasons = [
  "Bring more visitors",
  "Increase dwell time",
  "Earn from every session",
  "Support ESG and sustainability goals",
];

const audience = [
  "Apartments",
  "Offices",
  "Restaurants",
  "Universities",
  "Hospitals",
  "Public spaces",
];

const bestLocations = [
  {
    title: "Visible parking",
    description: "Drivers can find the charger without staff support.",
    icon: "pin",
  },
  {
    title: "Repeat visits",
    description: "Daily traffic turns charging into a habit.",
    icon: "repeat",
  },
  {
    title: "Safe access",
    description: "Clear entry, lighting, and space for the cable.",
    icon: "shield",
  },
  {
    title: "Useful waiting time",
    description: "People can shop, work, eat, or study while charging.",
    icon: "clock",
  },
];

const installationOptions = [
  { title: "Vertical wall", shape: "vertical" },
  { title: "Horizontal wall", shape: "horizontal" },
  { title: "Square", shape: "square" },
  { title: "Standing", shape: "standing" },
  { title: "Hanging", shape: "hanging" },
];

const safetyFeatures = [
  {
    feature: "2 year warranty",
    description: "Hardware coverage for every deployed charger.",
  },
  {
    feature: "RCBO protection",
    description: "No current leakage protection built into the system.",
  },
  {
    feature: "Surge protection",
    description: "Electrical protection for unstable supply conditions.",
  },
  {
    feature: "Single phase support up to 7kW",
    description: "Works with common site power for smaller installs.",
  },
  {
    feature: "CCS Type 2 connector",
    description: "Connector support for compatible EV charging needs.",
  },
];

const remoteFeatures = [
  "Track usage",
  "Set pricing",
  "Control timings",
  "No staff needed",
];

const paymentSteps = [
  {
    title: "Find",
    description: "Drivers see your charger on the app.",
    icon: "map",
  },
  {
    title: "Plug",
    description: "They connect and start the session.",
    icon: "plug",
  },
  {
    title: "Pay",
    description: "Payment is handled before they leave.",
    icon: "wallet",
  },
];

const pricingPlans = [
  {
    title: "3kW",
    bestFor: "EV bikes and light use",
    details: ["Compact install", "Low energy demand", "Entry-level hosting"],
  },
  {
    title: "7kW",
    bestFor: "Daily office and apartment use",
    details: [
      "Single phase support",
      "Balanced charging speed",
      "Most common fit",
    ],
  },
  {
    title: "22kW",
    bestFor: "Commercial traffic",
    details: ["High-traffic locations", "Faster turnaround", "Expansion-ready"],
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
    title: "How apartments turn parking into a service",
    meta: "Host guide",
    image: "/img/Host/03.png",
  },
  {
    title: "Why restaurants benefit from charging dwell time",
    meta: "Site strategy",
    image: "/img/Host/Host.png",
  },
  {
    title: "Choosing the right charger for daily visitors",
    meta: "Charging basics",
    image: "/img/Host/02.png",
  },
];

function Reveal({ as = "div", children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}

function LoadReveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
          <path d="M9 21v-5h3v5" />
          <path d="M8 7h1" />
          <path d="M12 7h1" />
          <path d="M8 11h1" />
          <path d="M12 11h1" />
          <path d="M17 9h2a1 1 0 0 1 1 1v11" />
          <path d="M3 21h18" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
          <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        </svg>
      );
    case "repeat":
      return (
        <svg {...common}>
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11V9a3 3 0 0 1 3-3h15" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v2a3 3 0 0 1-3 3H3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M8 2v6" />
          <path d="M16 2v6" />
          <path d="M6 8h12v4a6 6 0 0 1-12 0V8Z" />
          <path d="M12 18v4" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M4 7h16v12H4a2 2 0 0 1-2-2V5a2 2 0 0 0 2 2Z" />
          <path d="M18 11h4v4h-4a2 2 0 0 1 0-4Z" />
          <path d="M4 7l12-4v4" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10 18h4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
        </svg>
      );
  }
}

function PrimaryButton({ href = "/contact-us", children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E5A8]/50 ${className}`}
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/45 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
  light = false,
}) {
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[32px] font-semibold leading-[1.12] sm:text-[36px] ${light ? "text-zinc-900" : "text-white"}`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-4 max-w-2xl text-base leading-7 ${light ? "text-zinc-500" : "text-[#A1A1A1]"}`}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

function ChargerMiniature({ size = "large" }) {
  const dimensions =
    size === "small"
      ? "h-16 w-8"
      : size === "medium"
        ? "h-24 w-12"
        : "h-32 w-16";

  return (
    <div
      className={`${dimensions} relative rounded-md border border-[#242424] bg-[#141414] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]`}
    >
      <div className="absolute left-2 right-2 top-3 h-3 rounded-sm bg-[#232323]" />
      <div className="absolute left-2 right-2 top-8 h-7 rounded-sm border border-[#2B2B2B] bg-[#0B0B0B]" />
      <div className="absolute bottom-3 left-2 h-1.5 w-1.5 rounded-full bg-[#00E5A8]" />
      <div className="absolute bottom-3 left-5 h-1.5 w-1.5 rounded-full bg-[#2B2B2B]" />
      <div className="absolute bottom-3 right-2 h-1.5 w-1.5 rounded-full bg-[#2B2B2B]" />
    </div>
  );
}

function InstallShape({ shape }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F5F5F5]">
      {shape === "vertical" ? (
        <div className="h-24 w-16 rounded-md border border-[#D0D0D0] bg-white p-2">
          <div className="h-full w-5 rounded-sm bg-[#E0E0E0]" />
        </div>
      ) : null}
      {shape === "horizontal" ? (
        <div className="h-16 w-24 rounded-md border border-[#D0D0D0] bg-white p-2">
          <div className="h-5 w-full rounded-sm bg-[#E0E0E0]" />
        </div>
      ) : null}
      {shape === "square" ? (
        <div className="grid h-20 w-20 place-items-center rounded-md border border-[#D0D0D0] bg-white">
          <div className="h-8 w-8 rounded-sm bg-[#E0E0E0]" />
        </div>
      ) : null}
      {shape === "standing" ? (
        <div className="flex flex-col items-center">
          <ChargerMiniature size="medium" />
          <div className="mt-2 h-1 w-16 rounded-full bg-[#D0D0D0]" />
        </div>
      ) : null}
      {shape === "hanging" ? (
        <div className="relative h-24 w-24">
          <div className="absolute left-1/2 top-0 h-8 w-px bg-[#D0D0D0]" />
          <div className="absolute left-1/2 top-8 h-14 w-10 -translate-x-1/2 rounded-md border border-[#D0D0D0] bg-white" />
          <div className="absolute bottom-0 left-[52px] h-8 w-8 rounded-full border border-[#D0D0D0] border-l-transparent border-t-transparent" />
        </div>
      ) : null}
    </div>
  );
}

export default function HostPage() {
  const [chargers, setChargers] = useState(2);
  const [price, setPrice] = useState(120);
  const [usage, setUsage] = useState(8);
  const shouldReduceMotion = useReducedMotion();

  const monthlyEarnings = useMemo(
    () => Math.max(0, chargers * price * usage * 30),
    [chargers, price, usage],
  );

  return (
    <>
      <style data-page-style="host:2">{`
        .host-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .host-page h1,
        .host-page h2,
        .host-page h3,
        .host-page p {
          overflow-wrap: break-word;
        }

        .host-section {
          padding: 120px 0;
        }

        .host-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .host-logo-track {
          animation: host-logo-scroll 28s linear infinite;
          width: max-content;
        }

        .host-stories {
          scrollbar-width: none;
        }

        .host-stories::-webkit-scrollbar {
          display: none;
        }

        @keyframes host-logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 767px) {
          .host-section {
            padding: 84px 0;
          }

          .host-container {
            padding: 0 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .host-logo-track {
            animation: none;
          }
        }
      `}</style>

      <div className="host-page overflow-hidden font-sans">
        <section className="relative border-b border-[#1F1F1F] pt-32 md:pt-36">
          <div className="host-container grid gap-14 pb-24 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <LoadReveal className="w-full min-w-0 max-w-[calc(100vw-36px)] sm:max-w-[690px]">
              <p className="mb-5 text-xs font-semibold uppercase text-[#00E5A8]">
                Host a Charger
              </p>
              <h1 className="max-w-full text-[22px] font-semibold leading-[1.1] text-white sm:text-[32px] md:text-[40px] lg:text-[46px] sm:leading-[1.08]">
                Turn your space into a revenue stream.
              </h1>
              <p className="mt-6 max-w-[320px] text-base leading-7 text-[#A1A1A1] sm:max-w-xl">
                Install a Zvolta EV charger at your location and start earning
                passive income from day one. Attract EV drivers, increase dwell
                time, and strengthen your ESG and sustainability credentials —
                all without any upfront costs. We handle installation,
                maintenance, and support so you can focus on what matters most.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact-us" className="w-full sm:w-auto">
                  Start hosting
                </PrimaryButton>
                <SecondaryButton
                  href="/contact-us"
                  className="w-full sm:w-auto"
                >
                  Get a free consultation
                </SecondaryButton>
              </div>
            </LoadReveal>

            <LoadReveal
              delay={0.12}
              className="w-full min-w-0 max-w-[calc(100vw-36px)] sm:max-w-none"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111]">
                  <img
                    src="/img/Host/Host.png"
                    alt="Zvolta charger installed outside a commercial location"
                    className="h-[420px] w-full object-cover object-center sm:h-[560px] lg:h-[650px]"
                  />
                </div>
                <div className="absolute bottom-5 left-5 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3">
                  <p className="text-xs text-[#A1A1A1]">Hosted site</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Free installation
                  </p>
                </div>
              </div>
            </LoadReveal>
          </div>
        </section>

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container">
            <SectionHeading
              eyebrow="Charger fit"
              title="Choose the charger that matches your space."
              copy="Every location has different traffic, dwell time, and power needs."
              light
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {chargerCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.08}>
                  <motion.article
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.02 }
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group flex min-h-[280px] flex-col rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] p-8"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <ChargerMiniature
                        size={index === 2 ? "large" : "medium"}
                      />
                      <span className="text-xs font-semibold text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-[24px] font-semibold leading-tight text-zinc-900">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-zinc-500">
                      {card.description}
                    </p>
                    <SmartLink
                      href="/contact-us"
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-[#00E5A8]"
                    >
                      {card.cta}
                      <Icon name="arrow" className="h-4 w-4" />
                    </SmartLink>
                  </motion.article>
                </Reveal>
              ))}
            </div>

            <Reveal
              className="mt-10 flex flex-col items-start justify-between gap-5 rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] p-6 sm:flex-row sm:items-center"
              delay={0.12}
            >
              <p className="text-lg font-semibold text-zinc-900">
                Not sure which one fits your space
              </p>
              <SecondaryButton href="/contact-us" className="w-full sm:w-auto">
                Take the quiz
              </SecondaryButton>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Why host
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white sm:text-[36px]">
                Turn unused parking into a cleaner commercial asset.
              </h2>
              <div className="mt-8 grid gap-4">
                {hostReasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#1F1F1F] bg-[#111111] text-[#00E5A8]">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <p className="text-base font-medium text-white">{reason}</p>
                  </div>
                ))}
              </div>
              <PrimaryButton href="/contact-us" className="mt-9">
                Start hosting
              </PrimaryButton>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111]">
                  <img
                    src="/img/Host/02.png"
                    alt="Zvolta charger outside an office building"
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-7">
                    <p className="text-4xl font-semibold text-white">100%</p>
                    <p className="mt-2 text-base leading-7 text-[#A1A1A1]">
                      Your earnings stay with you.
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-7">
                    <p className="text-4xl font-semibold text-white">Free</p>
                    <p className="mt-2 text-base leading-7 text-[#A1A1A1]">
                      Installation for all chargers.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container">
            <SectionHeading
              title="If people already come and stay at your location, this works."
              copy="Zvolta is designed for spaces where charging naturally fits into the visit."
              light
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] px-6 py-5">
                    <p className="text-lg font-semibold text-zinc-900">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container">
            <SectionHeading
              eyebrow="Site fit"
              title="Where it works best."
              copy="The best charger sites are easy to reach, easy to see, and useful while drivers wait."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {bestLocations.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="min-h-[260px] rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
                    <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] text-[#00E5A8]">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-12 text-[24px] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#A1A1A1]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container">
            <SectionHeading
              eyebrow="Installation"
              title="Install the charger in the orientation your site needs."
              copy="The setup is planned around wall space, parking flow, and cable reach."
              light
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {installationOptions.map((option, index) => (
                <Reveal key={option.title} delay={index * 0.05}>
                  <InstallShape shape={option.shape} />
                  <p className="mt-4 text-sm font-semibold text-zinc-900">
                    {option.title}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] p-6 text-center">
              <p className="text-xl font-semibold text-zinc-900">
                Installation is free for all chargers
              </p>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container">
            <SectionHeading
              eyebrow="Safety and reliability"
              title="Built for daily use, protected for real sites."
              copy="The safety layer is structured into the installation and hardware."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {safetyFeatures.map((item, index) => (
                <Reveal
                  key={item.feature}
                  delay={index * 0.06}
                  className="flex flex-col gap-4 rounded-xl border border-[#1F1F1F] bg-[#111111] p-6 transition-shadow hover:shadow-lg hover:shadow-black/30"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#00E5A8]/10 text-[#00E5A8]">
                    <Icon name="shield" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {item.feature}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-[#A1A1A1]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container">
            <SectionHeading
              eyebrow="Payments"
              title="Find. Plug. Pay."
              copy="The driver flow is clear, fast, and familiar."
              light
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {paymentSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="relative rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] p-8 transition-shadow hover:shadow-md">
                    <div className="mb-12 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#E0E0E0] bg-white text-[#00E5A8]">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </span>
                      {index < paymentSteps.length - 1 ? (
                        <Icon
                          name="arrow"
                          className="hidden h-5 w-5 text-zinc-400 lg:block"
                        />
                      ) : null}
                    </div>
                    <h3 className="text-[24px] font-semibold text-zinc-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container">
            <SectionHeading
              centered
              eyebrow="Remote management"
              title="Control every charger without adding staff."
              copy="A simple app layer keeps usage, pricing, timing, and access visible."
            />
            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px_1fr] lg:items-center">
              <div className="grid gap-5">
                {remoteFeatures.slice(0, 2).map((feature, index) => (
                  <Reveal key={feature} delay={index * 0.05}>
                    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
                      <p className="text-xl font-semibold text-white">
                        {feature}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="mx-auto">
                <div className="rounded-[32px] border border-[#1F1F1F] bg-[#111111] p-3">
                  <div className="overflow-hidden rounded-[24px] border border-[#1F1F1F] bg-black">
                    <img
                      src="https://res.cloudinary.com/diywraupt/image/upload/v1778334300/app-2_ojsdxo.png"
                      alt="Zvolta app usage and charging controls"
                      className="h-[620px] w-[300px] object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5">
                {remoteFeatures.slice(2).map((feature, index) => (
                  <Reveal key={feature} delay={index * 0.05}>
                    <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
                      <p className="text-xl font-semibold text-white">
                        {feature}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="border-b border-[#1F1F1F] bg-[#111111] py-24 md:py-32">
          <div className="host-container">
            <Reveal className="max-w-5xl">
              <div className="grid gap-4 text-[40px] font-semibold leading-[1.05] text-white sm:text-[56px]">
                <p>You set the price</p>
                <p>You set the timings</p>
                <p>You control access</p>
              </div>
              <p className="mt-8 max-w-xl text-base leading-7 text-[#A1A1A1]">
                Keep 100% of your earnings. No revenue sharing.
              </p>
            </Reveal>
          </div>
        </section> */}

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Expansion
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-zinc-900 sm:text-[36px]">
                Start small, expand when the site proves demand.
              </h2>
              <div className="mt-8 grid gap-4">
                <p className="text-xl font-semibold text-zinc-900">
                  Add more anytime
                </p>
                <p className="text-xl font-semibold text-zinc-900">
                  Modules cost 50% of charger
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] p-8">
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <ChargerMiniature size="large" />
                    <p className="text-sm font-semibold text-zinc-400">
                      1 charger
                    </p>
                  </div>
                  <Icon name="arrow" className="h-8 w-8 text-zinc-400" />
                  <div className="flex items-end gap-4">
                    <ChargerMiniature size="medium" />
                    <ChargerMiniature size="large" />
                    <ChargerMiniature size="medium" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F] bg-[#111111]">
          <div className="host-container grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Marketing
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white sm:text-[36px]">
                Get free marketing for your site
              </h2>
              <div className="mt-8 grid gap-4">
                {[
                  "Listed on Zvolta app",
                  "Featured on social media",
                  "Bring new users without ads",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] text-[#00E5A8]">
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
                <img
                  src="/img/full_logowhite.png"
                  alt="Zvolta"
                  className="h-9 w-auto"
                />
                <div className="my-12 h-px bg-[#1F1F1F]" />
                <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                  Badge
                </p>
                <p className="mt-5 text-[36px] font-semibold leading-[1.08] text-white">
                  Zvolta Clean Energy Partner
                </p>
                <p className="mt-5 max-w-sm text-base leading-7 text-[#A1A1A1]">
                  A clean signal for visitors, residents, and teams.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#E5E5E5] bg-white">
          <div className="host-container">
            <SectionHeading
              eyebrow="ROI calculator"
              title="Estimate monthly earnings before you commit."
              copy="A clean planning view for the first conversation."
              light
            />
            <Reveal className="mt-12 grid gap-8 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] p-6 md:p-8 lg:grid-cols-[1fr_0.8fr]">
              <div className="grid gap-5">
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-zinc-700">
                    Number of chargers
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={chargers}
                    onChange={(event) =>
                      setChargers(Number(event.target.value))
                    }
                    className="h-12 rounded-lg border border-[#E0E0E0] bg-white px-4 text-zinc-900 outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-zinc-700">
                    Price per unit
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(event) => setPrice(Number(event.target.value))}
                    className="h-12 rounded-lg border border-[#E0E0E0] bg-white px-4 text-zinc-900 outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-zinc-700">
                    Usage
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={usage}
                    onChange={(event) => setUsage(Number(event.target.value))}
                    className="h-12 rounded-lg border border-[#E0E0E0] bg-white px-4 text-zinc-900 outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
              </div>
              <div className="flex flex-col justify-between rounded-xl border border-[#E0E0E0] bg-white p-8">
                <p className="text-sm font-semibold text-zinc-400">
                  Monthly earnings
                </p>
                <p className="mt-6 text-[42px] font-semibold leading-none text-zinc-900">
                  PKR {monthlyEarnings.toLocaleString("en-PK")}
                </p>
                <p className="mt-8 text-sm leading-6 text-zinc-400">
                  Estimate only. Final returns depend on live usage.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container">
            <SectionHeading
              eyebrow="Pricing"
              title="Three charger plans, one simple payment path."
              copy="Choose the setup after Zvolta reviews your site."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Reveal key={plan.title} delay={index * 0.08}>
                  <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                    <p className="text-[36px] font-semibold text-white">
                      {plan.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#A1A1A1]">
                      {plan.bestFor}
                    </p>
                    <div className="my-8 h-px bg-[#1F1F1F]" />
                    <ul className="grid gap-4">
                      {plan.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <Icon
                            name="check"
                            className="h-4 w-4 text-[#00E5A8]"
                          />
                          <span className="text-sm text-white">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-2">
              <p className="text-xl font-semibold text-white">0% interest</p>
              <p className="text-xl font-semibold text-white">
                12 month installment
              </p>
            </Reveal>
          </div>
        </section>

        <section className="overflow-hidden border-b border-[#E5E5E5] bg-white py-16">
          <div className="host-container mb-8">
            <SectionHeading
              eyebrow="Partners"
              title="Built with businesses that move Pakistan forward."
              light
            />
          </div>
          <div className="host-logo-track flex gap-5">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] px-6 grayscale"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-full object-contain opacity-60"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container">
            <SectionHeading
              eyebrow="Stories"
              title="Practical notes for host locations."
              copy="Short reads for teams comparing charger fit, customer flow, and site value."
            />
            <div className="host-stories mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
              {stories.map((story, index) => (
                <Reveal key={story.title} delay={index * 0.06}>
                  <article className="w-[340px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] sm:w-[390px]">
                    <img
                      src={story.image}
                      alt=""
                      className="h-56 w-full object-cover"
                    />
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                        {story.meta}
                      </p>
                      <h3 className="mt-4 text-[24px] font-semibold leading-tight text-white">
                        {story.title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="host-section border-b border-[#1F1F1F]">
          <div className="host-container grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about your space."
              copy="Share the location type, expected traffic, and any power details you already know."
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
                    <option>Apartment</option>
                    <option>Office</option>
                    <option>Restaurant</option>
                    <option>University</option>
                    <option>Hospital</option>
                    <option>Public space</option>
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
                  Submit request
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="host-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-[40px] font-semibold leading-[1.08] text-white sm:text-[56px]">
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
