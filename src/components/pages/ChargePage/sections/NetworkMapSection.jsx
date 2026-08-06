import {
  Icon,
  PageSection,
  SkeletonImage,
  networkStations,
  networkStats,
} from "../../ChargePage.shared.jsx";

export function NetworkMapSection() {
  return (
    <PageSection id="network-map">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="charge-reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Network Map
          </p>
          <h2 className="mt-7 text-[40px] font-semibold leading-[1.08] text-white md:text-[52px]">
            Growing EV
            <br />
            Charging Network
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#A1A1A1]">
            Zvolta&rsquo;s network is expanding across Karachi, making clean
            mobility more accessible every day.
          </p>
        </div>

        <div className="charge-reveal charge-map-card">
          <SkeletonImage
            src="/img/Host/locations.png"
            alt="Map of Zvolta charging stations across Karachi"
            className="charge-map-img"
            skeletonTone="dark"
            loading="lazy"
          />
          <div className="charge-map-overlay" />
          {networkStations.map((station) => (
            <div
              key={station.name}
              className={`charge-map-pin charge-map-pin--${station.side}`}
              style={{
                top: station.top,
                left: station.left,
              }}
            >
              <span className="charge-map-marker">
                <Icon name="bolt" className="h-3.5 w-3.5" />
              </span>
              <span className="charge-map-label">{station.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="charge-stagger mt-12 grid gap-5 sm:grid-cols-3">
        {networkStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6"
          >
            <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-[#16a34a]/10 text-[#16a34a]">
              <Icon name={stat.icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[34px] font-bold leading-none text-[#16a34a]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#A1A1A1]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
