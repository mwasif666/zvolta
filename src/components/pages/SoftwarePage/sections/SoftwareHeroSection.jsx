import {
  CONTACT_LINK,
  DEMO_LINK,
  Icon,
  PrimaryButton,
  SecondaryButton,
} from "../../SoftwarePage.shared.jsx";
export function SoftwareHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 pb-28 md:pt-40 md:pb-40">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
      <div className="software-container relative grid gap-12 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="software-hero-copy max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
            Zvolta Software
          </span>
          <h1 className="mt-6 text-[42px] font-semibold leading-[1.03] text-white md:text-[62px]">
            EV Charging Software Built for{" "}
            <span className="text-[#16a34a]">Real Operations</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
            Manage chargers, users, bookings, payments, revenue, and energy
            insights from one unified platform.
          </p>
          <div className="mt-9 mb-14 flex flex-col gap-3 sm:mb-16 sm:flex-row lg:mb-20">
            <PrimaryButton href={DEMO_LINK}>Book a Demo</PrimaryButton>
            <SecondaryButton href={CONTACT_LINK}>
              Explore Platform
            </SecondaryButton>
          </div>
        </div>

        <div className="software-hero-visual">
          <img
            src="/img/Host/laptop.png"
            alt="Zvolta EV charging software dashboard on a laptop"
            className="w-full max-w-2xl drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="software-container relative mt-20 md:mt-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["node", "Real-time charger monitoring"],
            ["wallet", "Wallet and payment management"],
            ["bolt", "Dynamic pricing control"],
            ["chart", "Network-wide reporting"],
          ].map(([icon, label]) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-4"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#0B0B0B] text-[#16a34a]">
                <Icon name={icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold leading-snug text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
