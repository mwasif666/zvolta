import { CityScene, Icon, chargingModels } from "../../SoftwarePage.shared.jsx";

export function EveryChargingModel() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#F7F8F8] py-24 md:py-28">
      <div className="software-container">
        <div className="software-reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-sm font-semibold text-[#16a34a]">
            Built for Every Model
          </span>
          <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[56px]">
            Designed for{" "}
            <span className="text-[#16a34a]">Every Charging Model</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#4B5563] md:text-lg">
            Whether you are managing one charger or building a wider network,
            Zvolta software adapts to your charging setup.
          </p>
        </div>

        <div className="software-stagger mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chargingModels.map(([icon, title, copy]) => (
            <article
              key={title}
              className="flex items-start gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-7 transition duration-300 hover:border-[#16a34a]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
                <Icon name={icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0B0B]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{copy}</p>
                <span className="mt-4 block h-1 w-12 rounded-full bg-[#16a34a]" />
              </div>
            </article>
          ))}
        </div>

        {/* Retail / public infra banner */}
        <div className="software-reveal mt-5 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
          <div className="grid items-center gap-6 md:grid-cols-[1.1fr_1fr]">
            <div className="flex items-start gap-5 p-7 md:p-8">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0B0B]">
                  Retail Locations &amp; Public Infrastructure
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#6B7280]">
                  Attract EV users while tracking charger revenue and
                  utilization with centralized software control.
                </p>
              </div>
            </div>
            <CityScene className="h-32 w-full px-6 pb-2 md:pr-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
