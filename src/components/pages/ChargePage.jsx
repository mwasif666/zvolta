import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmartLink } from "../SmartLink";

const APP_LINK = "/appstore";
const MAP_LINK = "/charge";

const vehicleTypes = [
  "EV bikes",
  "Electric scooters",
  "Electric rickshaws",
  "Electric cars",
  "Fleet vehicles",
  "Delivery vehicles",
];

const chargingSteps = [
  {
    title: "Find a station",
    copy: "Open Zvolta and pick an available charger near you.",
    screen: "map",
  },
  {
    title: "Scan the charger",
    copy: "Scan the QR code and start your session.",
    screen: "scan",
  },
  {
    title: "Charge and pay",
    copy: "Track the session and pay in the app.",
    screen: "session",
  },
];

const supportCards = [
  "Charging session help",
  "Payment support",
  "Booking support",
  "Station issue reporting",
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

  if (name === "scan") {
    return (
      <svg {...props}>
        <path d="M4 7V5a1 1 0 0 1 1-1h2" />
        <path d="M17 4h2a1 1 0 0 1 1 1v2" />
        <path d="M20 17v2a1 1 0 0 1-1 1h-2" />
        <path d="M7 20H5a1 1 0 0 1-1-1v-2" />
        <path d="M8 8h8v8H8z" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s6-5.4 6-11A6 6 0 1 0 6 10c0 5.6 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.3" />
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

function PrimaryButton({ href = APP_LINK, children, className = "" }) {
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

function SecondaryButton({ href = MAP_LINK, children, className = "" }) {
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
      className={`charge-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
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
    <section id={id} className={`charge-section ${className}`}>
      <div className="charge-container">{children}</div>
    </section>
  );
}

function ChargingWorksSection({ activeScreen, setActiveScreen }) {
  return (
    <PageSection className="charge-stack-panel charge-stack-panel--works">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="How it works"
            title="Three simple steps."
            copy="Find a station, scan the charger, and pay in the app."
          />
          <div className="charge-stagger mt-12 grid gap-5 md:grid-cols-3">
            {chargingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
                data-screen={step.screen}
                onMouseEnter={() => setActiveScreen(step.screen)}
                onFocus={() => setActiveScreen(step.screen)}
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
          </div>
          <PrimaryButton href={APP_LINK} className="mt-10">
            Start charging
          </PrimaryButton>
        </div>
        <div className="charge-reveal">
          <PhoneMockup screen={activeScreen} />
        </div>
      </div>
    </PageSection>
  );
}

function AppScreen({ screen = "home" }) {
  if (screen === "map" || screen === "station") {
    return (
      <div className="app-screen bg-[#F5F7F2]">
        <AppTop title="Nearby stations" />
        <div className="relative mt-4 h-56 overflow-hidden rounded-[26px] bg-[#DDE8D9]">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="absolute left-6 top-10 h-24 w-1 rounded-full bg-white/80" />
          <div className="absolute left-6 top-10 h-1 w-32 rounded-full bg-white/80" />
          <div className="absolute right-8 top-14 h-28 w-1 rotate-45 rounded-full bg-white/80" />
          {[
            ["left-[42%] top-[28%]", "7kW"],
            ["left-[18%] top-[62%]", "3kW"],
            ["right-[18%] top-[50%]", "22kW"],
          ].map(([position, label]) => (
            <div
              key={label}
              className={`map-marker absolute ${position} grid h-11 w-11 place-items-center rounded-full bg-[#16a34a] text-[11px] font-bold text-black shadow-lg`}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[22px] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-zinc-950">Gulberg Station</p>
              <p className="mt-1 text-xs text-zinc-500">2 chargers available</p>
            </div>
            <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#16a34a]">
              Open
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-zinc-500">
            <span className="rounded-xl bg-zinc-100 py-2">Type 2</span>
            <span className="rounded-xl bg-zinc-100 py-2">PKR 120</span>
            <span className="rounded-xl bg-zinc-100 py-2">7kW</span>
          </div>
        </div>
        <AppNav active="map" />
      </div>
    );
  }

  if (screen === "scan") {
    return (
      <div className="app-screen bg-[#06130F] text-white">
        <AppTop title="Scan charger" dark />
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white p-5">
          <div className="grid aspect-square grid-cols-5 gap-2 rounded-[20px] bg-white p-4">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className={`rounded-sm ${[0, 1, 3, 5, 6, 9, 11, 12, 13, 15, 18, 19, 21, 23, 24].includes(index) ? "bg-zinc-950" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/70">
          Scan the QR code on the charger to start.
        </p>
        <button className="mt-8 h-12 rounded-2xl bg-[#16a34a] text-sm font-bold text-black">
          Start session
        </button>
        <AppNav active="scan" dark />
      </div>
    );
  }

  if (screen === "session") {
    return (
      <div className="app-screen bg-white">
        <AppTop title="Active session" />
        <div className="mt-6 rounded-[28px] bg-[#06130F] p-5 text-white">
          <p className="text-xs text-white/50">Charging now</p>
          <p className="mt-2 text-3xl font-semibold">4.8 kWh</p>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-[#16a34a]" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-white/45">Time</p>
              <p className="mt-1 font-bold">28 min</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-white/45">Cost</p>
              <p className="mt-1 font-bold">PKR 576</p>
            </div>
          </div>
        </div>
        <button className="mt-6 h-12 rounded-2xl bg-[#16a34a] text-sm font-bold text-black">
          Pay in app
        </button>
        <AppNav active="charge" />
      </div>
    );
  }

  if (screen === "wallet") {
    return (
      <div className="app-screen bg-[#F7F7F5]">
        <AppTop title="Wallet" />
        <div className="mt-5 rounded-[28px] bg-[#06130F] p-5 text-white">
          <p className="text-sm text-white/55">Wallet balance</p>
          <p className="mt-3 text-4xl font-semibold">PKR 2,400</p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full bg-[#16a34a] px-4 py-2 text-xs font-bold text-black">
              Top up
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
              History
            </span>
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          {["Gulberg Station", "University Road", "Mall Road"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl bg-white p-4"
            >
              <div>
                <p className="text-sm font-bold text-zinc-950">{item}</p>
                <p className="text-xs text-zinc-500">Charging payment</p>
              </div>
              <p className="text-sm font-bold text-zinc-950">PKR 520</p>
            </div>
          ))}
        </div>
        <AppNav active="wallet" />
      </div>
    );
  }

  if (screen === "history") {
    return (
      <div className="app-screen bg-white">
        <AppTop title="History" />
        <div className="mt-5 grid gap-3">
          {[
            ["Active session", "4.8 kWh", "Now"],
            ["Home route", "3.1 kWh", "Yesterday"],
            ["Campus stop", "2.4 kWh", "Mon"],
            ["Saved charger", "Gulberg", "Often"],
          ].map(([title, value, meta]) => (
            <div
              key={title}
              className="rounded-[22px] border border-zinc-100 bg-[#FAFAF8] p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-zinc-950">{title}</p>
                <span className="text-xs text-zinc-500">{meta}</span>
              </div>
              <p className="mt-2 text-2xl font-semibold text-zinc-950">
                {value}
              </p>
            </div>
          ))}
        </div>
        <AppNav active="history" />
      </div>
    );
  }

  if (screen === "support") {
    return (
      <div className="app-screen bg-[#F7F7F5]">
        <AppTop title="Support" />
        <div className="mt-6 rounded-[28px] bg-white p-5">
          <p className="text-xl font-semibold text-zinc-950">
            Need help with a session?
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Report charger, payment, or booking issues from the app.
          </p>
          <div className="mt-5 grid gap-3">
            {supportCards.map((card) => (
              <span
                key={card}
                className="rounded-2xl bg-[#F0F4EF] px-4 py-3 text-sm font-bold text-zinc-900"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
        <AppNav active="support" />
      </div>
    );
  }

  return (
    <div className="app-screen bg-white">
      <AppTop title="Zvolta" />
      <div className="mt-5 rounded-[28px] bg-[#06130F] p-5 text-white">
        <p className="text-xs uppercase text-[#16a34a]">Ready to charge</p>
        <p className="mt-4 text-3xl font-semibold leading-tight">
          Find nearby Zvolta stations.
        </p>
        <div className="mt-8 rounded-2xl bg-white/10 p-4">
          <p className="text-sm text-white/60">Nearest charger</p>
          <p className="mt-1 font-bold">1.2 km away</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-[#F2F4F1] p-4">
          <p className="text-xs text-zinc-500">Available</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-950">12</p>
        </div>
        <div className="rounded-2xl bg-[#F2F4F1] p-4">
          <p className="text-xs text-zinc-500">Wallet</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-950">PKR</p>
        </div>
      </div>
      <AppNav active="home" />
    </div>
  );
}

function AppTop({ title, dark = false }) {
  return (
    <div
      className={`flex items-center justify-between ${dark ? "text-white" : "text-zinc-950"}`}
    >
      <div>
        <p className="text-xs opacity-50">Zvolta app</p>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div
        className={`h-10 w-10 rounded-full ${dark ? "bg-white/10" : "bg-[#16a34a]"}`}
      />
    </div>
  );
}

const NAV_ICONS = {
  home: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M3 12L12 3l9 9" />
      <path d="M9 21V12h6v9" />
      <path d="M5 10v11h14V10" />
    </svg>
  ),
  map: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M12 21C12 21 5 14.5 5 9a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  charge: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  wallet: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M16 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
      <path d="M2 10h20" />
    </svg>
  ),
};

function AppNav({ active, dark = false }) {
  const items = ["home", "map", "charge", "wallet"];

  return (
    <div
      className={`absolute inset-x-5 bottom-5 grid grid-cols-4 rounded-2xl p-2 ${dark ? "bg-white/10" : "bg-zinc-950"}`}
    >
      {items.map((item) => (
        <span
          key={item}
          className={`flex h-8 items-center justify-center rounded-xl ${active === item ? "bg-[#16a34a] text-black" : "text-white/40"}`}
        >
          {NAV_ICONS[item]}
        </span>
      ))}
    </div>
  );
}

function PhoneMockup({ screen = "home", className = "" }) {
  return (
    <div className={`charge-phone ${className}`}>
      <div className="charge-phone-frame">
        <div className="charge-phone-speaker" />
        <AppScreen screen={screen} />
      </div>
    </div>
  );
}

export default function ChargePage() {
  const pageRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState("home");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !pageRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".charge-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".charge-phone-hero", {
        opacity: 0,
        y: 32,
        scale: 0.96,
        duration: 0.9,
        delay: 0.16,
        ease: "power3.out",
      });

      gsap.utils.toArray(".charge-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 24,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray(".charge-stagger").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 18,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style data-page-style="charge-page">{`
        .charge-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: clip;
        }

        .charge-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .charge-section {
          padding: 120px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        .charge-stack {
          position: relative;
          isolation: isolate;
        }

        .charge-stack-panel {
          position: relative;
          min-height: 100vh;
          background: #0B0B0B;
          z-index: var(--charge-stack-index, 1);
        }

        .charge-stack-panel--hero {
          --charge-stack-index: 1;
        }

        .charge-stack-panel--works {
          --charge-stack-index: 2;
        }

        .charge-phone {
          width: min(330px, 82vw);
          margin-left: auto;
        }

        .charge-phone-frame {
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

        .charge-phone-speaker {
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

        .app-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 32px;
          padding: 46px 20px 74px;
        }

        @media (max-width: 767px) {
          .charge-container {
            padding: 0 18px;
          }

          .charge-section {
            padding: 84px 0;
          }

          .charge-phone {
            width: min(300px, 88vw);
          }
        }

        @media (min-width: 1024px) {
          .charge-stack-panel {
            position: sticky;
            top: 0;
            overflow: hidden;
          }
        }
      `}</style>

      <div ref={pageRef} className="charge-page font-sans">
        <div className="charge-stack">
          <section className="charge-stack-panel charge-stack-panel--hero relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
            <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
            <div className="charge-container relative grid min-h-[calc(100vh-80px)] gap-16 pb-24 lg:grid-cols-[1fr_0.78fr] lg:items-center">
              <div className="charge-hero-copy max-w-3xl">
                <p className="text-xs font-semibold uppercase text-[#16a34a]">
                  Zvolta charging
                </p>
                <h1 className="mt-5 text-[44px] font-semibold leading-[1.03] text-white md:text-[64px]">
                  Charge your EV.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                  Find a nearby Zvolta station, scan the charger, and pay in the
                  app.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href={APP_LINK}>
                    Download the app
                  </PrimaryButton>
                  <SecondaryButton href={MAP_LINK}>
                    Find a station
                  </SecondaryButton>
                </div>
                <p className="mt-6 text-sm leading-6 text-[#A1A1A1]">
                  Built for EV bikes, scooters, rickshaws, and cars in Pakistan.
                </p>
              </div>

              <div className="charge-phone-hero flex justify-end">
                <PhoneMockup screen="home" />
              </div>
            </div>
          </section>

          <ChargingWorksSection
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
          />
        </div>

        <PageSection>
          <SectionIntro
            eyebrow="Works for daily EVs"
            title="For bikes, rickshaws, scooters, cars, and fleets."
            copy="Use Zvolta when your EV needs a quick, simple charge."
          />
          <div className="charge-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle}
                className="group rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/45"
              >
                <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                  <Icon name="check" className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold text-white">{vehicle}</h3>
              </div>
            ))}
          </div>
          <PrimaryButton href={APP_LINK} className="mt-10">
            Download the app
          </PrimaryButton>
        </PageSection>

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
          <div className="charge-container relative grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div className="charge-reveal max-w-3xl">
              <h2 className="text-[44px] font-semibold leading-[1.04] text-white md:text-[64px]">
                Find. Scan. Charge.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#A1A1A1]">
                Download the Zvolta app and charge your EV with ease.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={APP_LINK}>Download the app</PrimaryButton>
                <SecondaryButton href={MAP_LINK}>
                  Find a station
                </SecondaryButton>
              </div>
            </div>
            <div className="charge-reveal hidden lg:block">
              <PhoneMockup screen="home" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
