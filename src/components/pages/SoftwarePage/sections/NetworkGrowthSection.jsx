import { Icon } from "../../SoftwarePage.shared.jsx";
export function NetworkGrowthSection() {
  return (
    <section className="border-b border-[#E5E7EB] bg-white py-24 md:py-32">
      <div className="software-container">
        <div className="software-reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-sm font-semibold text-[#111111]">
            <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
            Trusted by EV operators
          </span>
          <h2 className="mt-7 text-[44px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[56px]">
            Built for Growing
            <br />
            <span className="text-[#16a34a]">Charging Networks</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#4B5563] md:text-lg">
            Zvolta helps businesses launch and manage EV charging operations
            with software that keeps every charger, user, and transaction
            connected.
          </p>
        </div>

        <div className="software-stagger mt-14 grid divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {[
            ["station", "13+", "Chargers Installed"],
            ["plug", "1,500+", "Charging Sessions"],
            ["user", "200+", "Active Users"],
            ["pin", "12+", "Locations Connected"],
          ].map(([icon, value, label]) => (
            <div
              key={label}
              className="flex flex-col items-center px-6 py-12 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#16a34a]/12 text-[#16a34a]">
                <Icon name={icon} className="h-7 w-7" />
              </span>
              <p className="mt-6 text-[44px] font-bold leading-none tracking-tight text-[#0B0B0B]">
                {value}
              </p>
              <p className="mt-3 text-base font-medium text-[#4B5563]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
