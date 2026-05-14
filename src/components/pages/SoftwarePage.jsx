import { useEffect, useRef, useState } from "react";
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

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div
      className={`software-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
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
        className={`absolute inset-x-4 top-0 h-full rounded-lg border bg-[#141414] ${active ? "border-[#00E5A8]/55" : "border-[#2A2A2A]"}`}
      >
        <div className="mx-auto mt-4 h-3 w-10 rounded-sm bg-[#232323]" />
        <div className="mx-auto mt-4 h-12 w-10 rounded-md border border-[#2A2A2A] bg-[#0B0B0B]" />
        <div
          className={`absolute bottom-4 left-5 h-2 w-2 rounded-full ${active ? "bg-[#00E5A8]" : "bg-[#303030]"}`}
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
        <div className="software-phone-screen">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-zinc-400">Zvolta app</p>
              <p className="text-base font-bold text-zinc-950">
                Nearby chargers
              </p>
            </div>
            <span className="h-9 w-9 rounded-full bg-[#00E5A8]" />
          </div>
          <div
            className="mt-3 flex-1 rounded-2xl bg-[#E2EBDF] p-3"
            style={{ minHeight: 0 }}
          >
            <div className="relative h-full rounded-xl bg-[#D3E1D0]">
              <span className="absolute left-8 top-8 h-9 w-9 rounded-full bg-[#00E5A8]" />
              <span className="absolute bottom-6 right-8 h-7 w-7 rounded-full bg-[#00E5A8] opacity-60" />
              <span className="absolute right-12 top-16 h-5 w-5 rounded-full bg-[#00E5A8] opacity-40" />
            </div>
          </div>
          <div className="mt-3 rounded-2xl bg-[#06130F] p-4 text-white">
            <p className="text-[10px] text-white/50">Active session</p>
            <p className="mt-1 text-2xl font-semibold">4.8 kWh</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-[#00E5A8]" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-zinc-100 p-3">
              <p className="text-[10px] text-zinc-500">Pay</p>
              <p className="text-sm font-bold text-zinc-950">App</p>
            </div>
            <div className="rounded-xl bg-zinc-100 p-3">
              <p className="text-[10px] text-zinc-500">QR</p>
              <p className="text-sm font-bold text-zinc-950">Scan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ variant = "operator", compact = false }) {
  const status = [
    ["Available", "28", "#00E5A8"],
    ["In use", "12", "#FFFFFF"],
    ["Offline", "03", "#A1A1A1"],
  ];

  return (
    <div
      className={`software-dashboard rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 shadow-2xl ${compact ? "" : "md:p-6"}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#1F1F1F] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase text-[#00E5A8]">
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
          <span className="h-3 w-3 rounded-full bg-[#00E5A8]" />
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
                  <span className="rounded-full bg-[#00E5A8]/12 px-3 py-1 text-xs font-semibold text-[#00E5A8]">
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
                className={`flex-1 rounded-t-md ${index === 5 ? "bg-[#00E5A8]" : "bg-white/16"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductNetworkVisual() {
  return (
    <div className="software-network relative rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
      <div className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-start">
        <div className="flex flex-col items-center justify-start rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-6">
          <ChargerMini active />
          <p className="mt-5 text-center text-sm font-semibold text-white">
            Smart charger
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg border border-[#00E5A8]/35 bg-[#00E5A8]/10 p-5">
            <p className="text-xs font-semibold uppercase text-[#00E5A8]">
              Zvolta software layer
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              App, payments, live status, dashboards
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["QR session", "Payment", "Dashboard"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-4"
              >
                <Icon name="node" className="h-5 w-5 text-[#00E5A8]" />
                <p className="mt-4 text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="software-line absolute left-[30%] top-[34%] hidden h-px w-[12%] bg-[#00E5A8]/60 md:block" />
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
              className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#00E5A8] md:block"
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
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${positive ? "bg-[#00E5A8] text-black" : "bg-[#0B0B0B] text-[#A1A1A1]"}`}
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
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="software-container relative grid min-h-[calc(100vh-80px)] gap-16 pb-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="software-hero-copy max-w-3xl">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                Software for operators
              </p>
              <h1 className="mt-5 text-[42px] font-semibold leading-[1.03] text-white md:text-[62px]">
                Turn your EV chargers into a smart charging network.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                Zvolta software helps charger companies, operators, and
                enterprises manage charging, users, payments, pricing, and live
                charger status from one system.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
                <SecondaryButton href={CONTACT_LINK}>
                  Talk to sales
                </SecondaryButton>
              </div>
              <p className="mt-6 text-sm leading-6 text-[#A1A1A1]">
                Built for OCPP-ready chargers, public networks, hosts, and
                enterprise teams.
              </p>
            </div>

            <div className="software-hero-visual">
              <ProductNetworkVisual />
            </div>
          </div>
        </section>

        <PageSection>
          <SectionIntro
            eyebrow="Who this is for"
            title="Built for teams launching or managing EV charging."
            copy="Use Zvolta software if you want to run smart chargers without building your own platform from scratch."
          />
          <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/45"
              >
                <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
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
                <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                  <Icon
                    name={index === 0 ? "bolt" : "check"}
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="text-[24px] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
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
              eyebrow="Make any charger smarter"
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
                    <p className="text-xs font-semibold text-[#00E5A8]">
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
                      <ChargerMini active={smartState.state !== "Power only"} />
                      <p className="mt-5 text-center text-sm font-semibold text-white">
                        {smartState.state}
                      </p>
                    </div>
                    <div>
                      <div className="rounded-lg border border-[#00E5A8]/35 bg-[#00E5A8]/10 p-5">
                        <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                          Active software state
                        </p>
                        <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                          {smartState.title}
                        </p>
                        <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                          {smartState.copy}
                        </p>
                        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#00E5A8]/20 pt-4">
                          {[["28", "Available"], ["12", "In use"], ["03", "Offline"]].map(([val, label]) => (
                            <div key={label} className="rounded-lg bg-[#06130F] p-3 text-center">
                              <p className="text-xl font-semibold text-white">{val}</p>
                              <p className="mt-1 text-[10px] text-[#A1A1A1]">{label}</p>
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
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                Zvolta powered
              </p>
              <h3 className="mt-5 text-[32px] font-semibold text-white">
                Use Zvolta app, dashboard, and brand support.
              </h3>
            </article>
            <article className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
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
                <div className="rounded-lg border border-[#00E5A8]/35 bg-[#00E5A8]/10 px-6 py-4 text-center text-lg font-semibold text-white">
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
                <p className="text-sm font-semibold text-[#00E5A8]">
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
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
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
                <p className="text-xs font-semibold uppercase text-[#00E5A8]">
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
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="software-container relative">
            <div className="software-reveal mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                Build your charging network without building the software from
                zero.
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
      <div className="mb-8 grid h-9 w-9 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
        <Icon name="check" className="h-4 w-4" />
      </div>
      <p className="text-base font-semibold text-white">{title}</p>
    </div>
  );
}
