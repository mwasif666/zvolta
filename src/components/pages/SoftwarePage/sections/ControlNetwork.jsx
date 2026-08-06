import { Icon, controlFeatures } from "../../SoftwarePage.shared.jsx";

export function ControlNetwork() {
  return (
    <section className="border-b border-[#1F1F1F] bg-[#0B0B0B] py-24 md:py-32">
      <div className="software-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="software-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#111111] px-4 py-1.5 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
              Section 04
            </span>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[52px]">
              Control Your Entire
              <br />
              <span className="text-[#16a34a]">Charging Network</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#A1A1A1] md:text-lg">
              Monitor charger status, charging sessions, revenue, users, and
              energy usage from one operational dashboard.
            </p>

            <div className="software-stagger mt-9 grid gap-4">
              {controlFeatures.map(([icon, title, copy]) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#1F1F1F] bg-[#111111] p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1A1]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#1F1F1F] bg-[#111111] p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Secure. Scalable. Built for Real Operations.
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#A1A1A1]">
                  Enterprise-grade reliability for networks of any size.
                </p>
              </div>
            </div>
          </div>

          <div className="software-reveal relative lg:sticky lg:top-24">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[#16a34a]/10 blur-[80px]" />
            <div className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#0E0E0E] shadow-2xl">
              <img
                src="https://res.cloudinary.com/diywraupt/image/upload/v1782466538/ChatGPT_Image_Jun_26_2026_02_35_28_PM_rybuuk.png"
                alt="Zvolta operational dashboard showing chargers, sessions, revenue, and analytics"
                className="block w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
