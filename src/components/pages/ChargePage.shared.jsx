import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmartLink } from "../SmartLink";
import { SkeletonImage } from "../SkeletonImage";
const APP_LINK = "/appstore";
const MAP_LINK = "/charge";
const HERO_APP_IMAGE = "/img/app-2.png";
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
const networkStations = [
  {
    name: "Workhall",
    top: "26%",
    left: "9%",
    side: "right",
  },
  {
    name: "IBA University",
    top: "29%",
    left: "45%",
    side: "right",
  },
  {
    name: "Byco Gulshan",
    top: "27%",
    left: "66%",
    side: "left",
  },
  {
    name: "Ignite Sports Pavilion",
    top: "44%",
    left: "61%",
    side: "left",
  },
  {
    name: "Vlektra",
    top: "69%",
    left: "44%",
    side: "right",
  },
  {
    name: "Revoo",
    top: "87%",
    left: "70%",
    side: "left",
  },
];
const networkStats = [
  {
    icon: "bolt",
    value: "13+",
    label: "Installed Chargers",
  },
  {
    icon: "chart",
    value: "1,500+",
    label: "Charging Sessions",
  },
  {
    icon: "user",
    value: "200+",
    label: "Organic Signups",
  },
];
const howItWorksSteps = [
  {
    n: 1,
    visual: "map",
    title: "Find Charger",
    copy: "Find nearby Zvolta chargers on the map.",
  },
  {
    n: 2,
    visual: "wallet",
    title: "TopUp Wallet",
    copy: "Add money to your Zvolta wallet before charging.",
  },
  {
    n: 3,
    visual: "book",
    title: "Book Slot",
    copy: "Check availability and reserve your preferred slot.",
  },
  {
    n: 4,
    visual: "qr",
    title: "Scan QR",
    copy: "Scan the QR code at the charger using the app.",
  },
  {
    n: 5,
    visual: "charge",
    title: "Start Charging",
    copy: "Plug in your vehicle and start the charging session.",
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
  if (name === "download") {
    return (
      <svg {...props}>
        <path d="M12 3v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M4 21h16" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg {...props} fill="currentColor" stroke="none">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  }
  if (name === "bell") {
    return (
      <svg {...props}>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    );
  }
  if (name === "menu") {
    return (
      <svg {...props}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    );
  }
  if (name === "search") {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }
  if (name === "sliders") {
    return (
      <svg {...props}>
        <path d="M4 6h10" />
        <path d="M18 6h2" />
        <path d="M4 12h4" />
        <path d="M12 12h8" />
        <path d="M4 18h12" />
        <path d="M20 18h0" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="10" cy="12" r="2" />
        <circle cx="18" cy="18" r="2" />
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
  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M6 20V10" />
        <path d="M12 20V4" />
        <path d="M18 20v-6" />
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
  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (name === "check-circle") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </svg>
    );
  }
  if (name === "activity") {
    return (
      <svg {...props}>
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...props}>
        <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
        <path d="M16 2.5v4M8 2.5v4M3 9.5h18" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    );
  }
  if (name === "chevron") {
    return (
      <svg {...props}>
        <path d="m9 6 6 6-6 6" />
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
    <section id={id} className={`charge-section ${className}`} data-no-reveal>
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
            {Array.from({
              length: 25,
            }).map((_, index) => (
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
function HeroDownloadButton({ href = APP_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(22,163,74,0.28)] transition duration-300 hover:scale-[1.02] hover:bg-[#15893f] focus:outline-none focus:ring-2 focus:ring-[#16a34a]/40 ${className}`}
    >
      <Icon name="download" className="h-5 w-5" />
      {children}
    </SmartLink>
  );
}
function HeroFindButton({ href = MAP_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#16a34a]/60 bg-white px-6 py-3.5 text-base font-semibold text-[#16a34a] transition duration-300 hover:scale-[1.02] hover:bg-[#16a34a]/5 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 ${className}`}
    >
      <Icon name="pin" className="h-5 w-5" />
      {children}
    </SmartLink>
  );
}
function HeroAppPhone() {
  return (
    <div className="chl-phone">
      <span className="chl-phone-notch" aria-hidden="true" />
      <div className="chl-screen chl-screen--image">
        <SkeletonImage src={HERO_APP_IMAGE} alt="Zvolta app home screen" />
      </div>
    </div>
  );
}
function HeroVisual() {
  return (
    <div className="chl-visual">
      <HeroAppPhone />

      <div className="chl-card chl-card--session">
        <span className="chl-card-bolt">
          <Icon name="bolt" className="h-4 w-4" />
        </span>
        <p className="chl-card-title">Session Active</p>
        <p className="chl-card-label">Charging</p>
        <p className="chl-card-value">32%</p>
        <span className="chl-progress">
          <span className="chl-progress-fill" />
        </span>
      </div>

      <div className="chl-card chl-card--wallet">
        <div className="chl-wallet-head">
          <span className="chl-card-bolt">
            <Icon name="wallet" className="h-4 w-4" />
          </span>
          <p className="chl-card-title">Wallet Connected</p>
        </div>
        <p className="chl-card-label">Balance</p>
        <p className="chl-card-value">Rs 1,250.00</p>
      </div>

      <div className="chl-card chl-card--nearby">
        <p className="chl-card-title">Nearby Chargers</p>
        {[
          ["ZVolta Headoffice - Workhall", "2/4 available • AC"],
          ["Ignite Sports Pavilion", "3/4 available • AC"],
        ].map(([name, meta]) => (
          <div className="chl-nearby-row" key={name}>
            <span className="chl-nearby-bolt">
              <Icon name="bolt" className="h-3.5 w-3.5" />
            </span>
            <span className="chl-nearby-text">
              <strong>{name}</strong>
              <span>{meta}</span>
            </span>
          </div>
        ))}
        <SmartLink href={MAP_LINK} className="chl-nearby-link">
          View all chargers
          <Icon name="arrow" className="h-4 w-4" />
        </SmartLink>
      </div>
    </div>
  );
}
function HowItWorksVisual({ visual }) {
  if (visual === "map") {
    return (
      <div className="hiw-visual">
        <div className="hiw-map">
          {[
            "left-[16%] top-[20%]",
            "right-[16%] top-[20%]",
            "left-[16%] bottom-[18%]",
            "right-[16%] bottom-[18%]",
          ].map((position) => (
            <span key={position} className={`hiw-map-pin ${position}`}>
              <Icon name="bolt" className="h-3 w-3" />
            </span>
          ))}
          <span className="hiw-map-dot" />
        </div>
      </div>
    );
  }
  if (visual === "book") {
    return (
      <div className="hiw-visual">
        <div className="hiw-book">
          <div className="hiw-book-head">
            <span className="hiw-book-name">Zvolta Workhall</span>
            <span className="hiw-book-avail">Available</span>
          </div>
          <div className="hiw-book-row">
            <span className="hiw-book-fast">
              <Icon name="bolt" className="h-3.5 w-3.5" />
              AC Charger
            </span>
            <span className="hiw-book-kw">
              7 kW
              <small>Max power</small>
            </span>
          </div>
          <span className="hiw-book-btn">Book Slot</span>
        </div>
      </div>
    );
  }
  if (visual === "qr") {
    return (
      <div className="hiw-visual">
        <div className="hiw-qr-card">
          <span className="hiw-qr-brand">
            <Icon name="bolt" className="h-3.5 w-3.5" />
            zvolta
          </span>
          <span className="hiw-qr">
            {Array.from({
              length: 25,
            }).map((_, index) => (
              <span
                key={index}
                className={
                  [
                    0, 1, 3, 5, 6, 9, 11, 12, 13, 15, 18, 19, 21, 23, 24,
                  ].includes(index)
                    ? "is-on"
                    : ""
                }
              />
            ))}
          </span>
        </div>
      </div>
    );
  }
  if (visual === "charge") {
    return (
      <div className="hiw-visual">
        <div className="hiw-charge">
          <span className="hiw-charge-brand">
            <Icon name="bolt" className="h-3.5 w-3.5" />
            Charging
          </span>
          <div className="hiw-charge-ring">
            <span className="hiw-charge-pct">65%</span>
          </div>
          <div className="hiw-charge-meta">
            <span className="hiw-charge-kwh">32.4 kWh</span>
            <span className="hiw-charge-time">18 min left</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="hiw-visual">
      <div className="hiw-wallet">
        <div className="hiw-wallet-head">
          <span className="hiw-wallet-icon">
            <Icon name="wallet" className="h-4 w-4" />
          </span>
          <span className="hiw-wallet-title">Wallet</span>
        </div>
        <p className="hiw-wallet-label">Balance</p>
        <div className="hiw-wallet-row">
          <span className="hiw-wallet-value">Rs 1,250.00</span>
          <Icon name="arrow" className="h-4 w-4 text-[#16a34a]" />
        </div>
      </div>
    </div>
  );
}

const whyChooseFeatures = [
  {
    icon: "pin",
    title: "Nearby Locations",
    copy: "Find Zvolta chargers near you in seconds. More locations, more convenience.",
  },
  {
    icon: "receipt",
    title: "Transparent Pricing",
    copy: "Know what you pay, always. Clear pricing with no hidden fees or surprises.",
  },
  {
    icon: "shield",
    title: "Safe Charging",
    copy: "Advanced safety features and real-time monitoring for total peace of mind.",
  },
  {
    icon: "vehicles",
    title: "Built for Bikes & Cars",
    copy: "Whether you ride a bike or drive a car, Zvolta has you covered.",
  },
];
function WhyIcon({ name }) {
  const stroke = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-9 w-9",
    "aria-hidden": "true",
  };
  if (name === "pin") {
    return (
      <svg {...stroke}>
        <path d="M12 21s6-5.4 6-11A6 6 0 1 0 6 10c0 5.6 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }
  if (name === "receipt") {
    return (
      <svg {...stroke}>
        <path d="M6 3h12v18l-2.2-1.4-2 1.4-2-1.4-2 1.4L6 21V3Z" />
        <path d="M13.3 9c-.3-.7-1-1-1.7-1-.9 0-1.6.6-1.6 1.3 0 .8.7 1.2 1.6 1.2s1.6.5 1.6 1.3-.7 1.3-1.6 1.3c-.8 0-1.4-.3-1.7-1" />
        <path d="M12 6.8V8M12 13.6v1.2" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#16a34a"
          d="M12 2.4l7.3 3v5.3c0 4.8-3.1 8.5-7.3 10.4-4.2-1.9-7.3-5.6-7.3-10.4V5.4l7.3-3Z"
        />
        <path
          fill="#ffffff"
          d="M12.8 7 8.6 13h2.7l-.7 3.7 4.2-5.8h-2.7l.7-3.9Z"
        />
      </svg>
    );
  }
  return (
    <svg {...stroke}>
      <path d="M2.5 14l1.1-2.9A1.8 1.8 0 0 1 5.3 10h3.4a1.8 1.8 0 0 1 1.5.8L11.6 13" />
      <path d="M2.5 14v1.3h.9" />
      <path d="M6.6 15.3h1.7" />
      <circle cx="5" cy="15.4" r="1.5" />
      <circle cx="9.6" cy="15.4" r="1.5" />
      <circle cx="16.4" cy="15.2" r="2.3" />
      <circle cx="21" cy="15.2" r="2.3" />
      <path d="M14.6 15.2l1.8-3h2.3l1.3 3" />
      <path d="M16.4 12.2h2.3" />
    </svg>
  );
}

const whereToChargePlaces = [
  {
    icon: "briefcase",
    title: "Offices",
    copy: "Charge while you work and stay productive.",
  },
  {
    icon: "cap",
    title: "Universities",
    copy: "Power your education and your drive.",
  },
  {
    icon: "fuel",
    title: "Petrol Pumps",
    copy: "Top up your charge while you fill up.",
  },
  {
    icon: "coffee",
    title: "Cafés",
    copy: "Enjoy your coffee while your car charges.",
  },
  {
    icon: "building",
    title: "Apartments",
    copy: "Reliable charging right at your doorstep.",
  },
  {
    icon: "dumbbell",
    title: "Sports Facilities",
    copy: "Stay active while your EV powers up.",
  },
  {
    icon: "bag",
    title: "Retail & Parking",
    copy: "Shop, park, and charge—all in one stop.",
  },
  {
    icon: "group",
    title: "Community Spaces",
    copy: "Accessible charging for everyone, every day.",
  },
];
function WhereIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-6 w-6",
    "aria-hidden": "true",
  };
  if (name === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }
  if (name === "cap") {
    return (
      <svg {...props}>
        <path d="M12 4 2 9l10 5 10-5-10-5Z" />
        <path d="M6 11v4c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4" />
        <path d="M22 9v5" />
      </svg>
    );
  }
  if (name === "fuel") {
    return (
      <svg {...props}>
        <path d="M4 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16" />
        <path d="M3 21h11" />
        <rect x="6" y="6" width="5" height="4" rx="1" />
        <path d="M13 8h3l2.5 2.5V16a1.5 1.5 0 0 0 3 0V11" />
      </svg>
    );
  }
  if (name === "coffee") {
    return (
      <svg {...props}>
        <path d="M5 8h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Z" />
        <path d="M17 9h2a2.5 2.5 0 0 1 0 5h-2" />
        <path d="M8 2.5c0 1-1 1.5-1 2.5M11.5 2.5c0 1-1 1.5-1 2.5" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg {...props}>
        <path d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15" />
        <path d="M12 21V10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11" />
        <path d="M7 8.5h2M7 12.5h2M7 16.5h2M15 13h2M15 17h2" />
        <path d="M3 21h18" />
      </svg>
    );
  }
  if (name === "dumbbell") {
    return (
      <svg {...props}>
        <path d="M4 9.5v5M7 7.5v9M17 7.5v9M20 9.5v5" />
        <path d="M7 12h10" />
      </svg>
    );
  }
  if (name === "bag") {
    return (
      <svg {...props}>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5" />
      <path d="M17.5 13.5a5.5 5.5 0 0 1 3 5" />
    </svg>
  );
}
const appExperienceFeatures = [
  {
    icon: "bolt",
    title: "Live Availability",
    copy: "See real-time charger status around you.",
  },
  {
    icon: "wallet",
    title: "Wallet Payments",
    copy: "Secure, fast and hassle-free payments.",
  },
  {
    icon: "activity",
    title: "Session Tracking",
    copy: "Monitor your charging in real time.",
  },
  {
    icon: "calendar",
    title: "Slot Booking",
    copy: "Reserve your charger in advance.",
  },
  {
    icon: "clock",
    title: "Charging History",
    copy: "View past sessions and energy usage.",
  },
];
const appExperienceSlides = [
  "https://res.cloudinary.com/diywraupt/image/upload/v1778335134/Gray_and_Black_Modern_Handphone_Mockup_Instagram_Story_5_iti1ef.png",
  "https://res.cloudinary.com/diywraupt/image/upload/v1778335192/Gray_and_Black_Modern_Handphone_Mockup_Instagram_Story_6_dw7l4e.png",
];

export {
  APP_LINK,
  AppNav,
  AppScreen,
  AppTop,
  ChargingWorksSection,
  HERO_APP_IMAGE,
  HeroAppPhone,
  HeroDownloadButton,
  HeroFindButton,
  HeroVisual,
  HowItWorksVisual,
  Icon,
  MAP_LINK,
  NAV_ICONS,
  PageSection,
  PhoneMockup,
  PrimaryButton,
  ScrollTrigger,
  SecondaryButton,
  SectionIntro,
  SkeletonImage,
  SmartLink,
  WhereIcon,
  WhyIcon,
  appExperienceFeatures,
  appExperienceSlides,
  chargingSteps,
  gsap,
  howItWorksSteps,
  networkStations,
  networkStats,
  supportCards,
  useEffect,
  useRef,
  useState,
  vehicleTypes,
  whereToChargePlaces,
  whyChooseFeatures,
};
