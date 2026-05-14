import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SmartLink } from "../SmartLink";

const chargers = [
  {
    title: "3kW Charger",
    description: "Small spaces, low usage, EV bikes",
    href: "/3kw-charger",
  },
  {
    title: "7kW Charger",
    description: "Offices, apartments, daily use",
    href: "/7kw-charger",
  },
  {
    title: "22kW Charger",
    description: "High traffic, commercial spaces",
    href: "/22kw-charger",
  },
];

const hostBenefits = [
  "Bring more visitors",
  "Increase dwell time",
  "Earn from every session",
  "Support ESG and sustainability goals",
];

const audiences = [
  "Apartments",
  "Offices",
  "Restaurants",
  "Universities",
  "Hospitals",
  "Public spaces",
];

const bestFitLocations = [
  "Apartment buildings",
  "Universities and colleges",
  "Hospitals and parks",
  "Offices and coworking spaces",
  "Showrooms",
  "Malls and outlets",
  "Cafes and restaurants",
  "Masjids, temples, and churches",
  "Residential and commercial properties",
];

const installationOptions = [
  { title: "Vertical wall", type: "vertical" },
  { title: "Horizontal wall", type: "horizontal" },
  { title: "Square", type: "square" },
  { title: "Standing", type: "standing" },
  { title: "Hanging", type: "hanging" },
];

const safetyFeatures = [
  {
    feature: "2 year warranty",
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

const remoteControls = [
  "Track usage",
  "Set pricing",
  "Control timings",
  "No staff needed",
];

const paymentSteps = [
  { title: "Find", description: "Users find your charger in the Zvolta app." },
  { title: "Plug", description: "They start the session at your location." },
  { title: "Pay", description: "Payment is handled directly in the app." },
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
        }

      `}</style>

      <div className="host-page font-sans">
        <section className="border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="host-container grid min-h-[calc(100vh-80px)] gap-16 pb-24 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <Reveal>
              <h1 className="mb-5 max-w-4xl text-[40px] font-semibold leading-[1.04] tracking-normal text-white md:text-[56px]">
                Host a charger
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[#A1A1A1]">
                Earn steady income, bring more people in, and support your ESG
                and sustainability goals from the space you already have.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact-us">Start hosting</PrimaryButton>
                <SecondaryButton href="/contact-us">
                  Get a free consultation
                </SecondaryButton>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111]">
                <img
                  src="/img/Host/Host.png"
                  alt="Zvolta charger installed at a host location"
                  className="h-[320px] w-full object-cover object-center md:h-[420px]"
                />
                <div className="absolute bottom-5 left-5 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3">
                  <p className="text-xs text-[#A1A1A1]">Host setup</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Free installation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <PageSection id="chargers">
          <SectionIntro
            eyebrow="Choose your charger"
            title="Match charging power to how people use your space."
            copy="Start with the charger that fits your traffic and power supply."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {chargers.map((charger, index) => (
              <Reveal key={charger.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group flex min-h-[310px] flex-col rounded-lg border border-[#1F1F1F] bg-[#111111] p-8"
                >
                  <div className="mb-10 flex h-36 items-start justify-between">
                    <ChargerIllustration size="large" />
                    <span className="text-xs font-semibold text-[#A1A1A1]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-semibold leading-tight text-white">
                    {charger.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#A1A1A1]">
                    {charger.description}
                  </p>
                  <SmartLink
                    href={charger.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white transition-colors group-hover:text-[#00E5A8]"
                  >
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:flex-row sm:items-center">
            <p className="text-lg font-semibold text-white">
              Not sure which one fits your space
            </p>
            <SecondaryButton href="/contact-us">Take the quiz</SecondaryButton>
          </Reveal>
        </PageSection>

        <PageSection>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
                Why host a charger
              </p>
              <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
                Add a useful service and turn waiting time into site value.
              </h2>
              <div className="mt-8 grid gap-4">
                {hostBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#1F1F1F] bg-[#111111] text-[#00E5A8]">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <p className="text-base font-medium text-white">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              <PrimaryButton href="/contact-us" className="mt-9">
                Start hosting
              </PrimaryButton>
            </Reveal>

            <Reveal delay={0.1}>
              <img
                src="/img/host An EV charging.jpg"
                alt="EV charging host location"
                className="h-[460px] w-full rounded-lg object-cover"
              />
            </Reveal>
          </div>
        </PageSection>

        <PageSection>
          <SectionIntro
            eyebrow="Who should host"
            title="If people already come and stay at your location, this works."
            copy="Charging fits sites where visitors, residents, staff, or customers spend time."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-6 py-5 text-lg font-semibold text-white">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <PrimaryButton href="/contact-us" className="mt-10">
            Get a free consultation
          </PrimaryButton>
        </PageSection>

        <PageSection>
          <SectionIntro
            eyebrow="Where it works best"
            title="High dwell time. Clear access. Everyday footfall."
            copy="The best sites are easy to find, safe to use, and already part of someone's routine."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestFitLocations.map((location, index) => (
              <Reveal key={location} delay={index * 0.035}>
                <div className="group flex min-h-28 items-center gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-5 transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/40">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                    <Icon name="map" className="h-5 w-5" />
                  </span>
                  <p className="text-base font-semibold leading-6 text-white">
                    {location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <SecondaryButton href="/contact-us" className="mt-10">
            Check your site
          </SecondaryButton>
        </PageSection>

        <PageSection>
          <SectionIntro
            eyebrow="Installation options"
            title="Clean mounting options for different spaces."
            copy="Wall, standing, and hanging setups keep the install practical."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-5">
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

        <PageSection>
          <SectionIntro
            centered
            eyebrow="Remote management"
            title="Run everything from your phone."
            copy="Track sessions, pricing, timings, and charger status without staff on site."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px_1fr] lg:items-center">
            <div className="grid gap-5">
              {remoteControls.slice(0, 2).map((control, index) => (
                <Reveal key={control} delay={index * 0.06}>
                  <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 text-xl font-semibold text-white">
                    {control}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mx-auto">
              <div className="rounded-[32px] border border-[#1F1F1F] bg-[#111111] p-3">
                <div className="overflow-hidden rounded-[24px] border border-[#1F1F1F] bg-black">
                  <img
                    src="/img/app-2.png"
                    alt="Zvolta app dashboard"
                    className="h-[610px] w-[296px] object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {remoteControls.slice(2).map((control, index) => (
                <Reveal key={control} delay={index * 0.06}>
                  <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 text-xl font-semibold text-white">
                    {control}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <SecondaryButton href="/software">See how it works</SecondaryButton>
          </div>
        </PageSection>

        <PageSection>
          <SectionIntro
            eyebrow="Payments made simple"
            title="Users find your charger, start charging, and pay directly."
            copy="No cash handling. No manual work. The app handles the user flow."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {paymentSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="relative min-h-64 rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] text-[#00E5A8]">
                      <Icon
                        name={
                          index === 0 ? "map" : index === 1 ? "plug" : "wallet"
                        }
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="text-sm font-semibold text-[#A1A1A1]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#A1A1A1]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>

        <section className="border-b border-[#1F1F1F] bg-[#111111] py-24 md:py-32">
          <div className="host-container">
            <Reveal className="mx-auto max-w-5xl text-center">
              <div className="grid gap-4 text-[40px] font-semibold leading-[1.05] text-white md:text-[56px]">
                <p>You set the price</p>
                <p>You set the timings</p>
                <p>You control access</p>
              </div>
              <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#A1A1A1]">
                Keep 100% of your earnings. No revenue sharing.
              </p>
              <PrimaryButton href="/contact-us" className="mt-9">
                Start hosting
              </PrimaryButton>
            </Reveal>
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
              <SecondaryButton href="/roi-calculator" className="mt-6">
                Try ROI calculator
              </SecondaryButton>
            </Reveal>
          </div>
        </PageSection>

        <PageSection id="pricing">
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
        </PageSection>

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
