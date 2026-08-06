import {
  ConnectedHub,
  ConnectedNodeCard,
  connectedNodes,
} from "../../SoftwarePage.shared.jsx";

export function EverythingConnected() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#F7F8F8] py-24 md:py-32">
      <div className="software-container">
        <div className="software-reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-sm font-semibold text-[#111111]">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
              Everything Connected
            </span>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-[#0B0B0B] md:text-[52px]">
              Everything Connected
              <br />
              Through <span className="text-[#16a34a]">One Platform</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#4B5563] md:text-lg">
              Zvolta connects EV drivers, site hosts, charging stations, and
              operators through a single cloud-based system.
            </p>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6B7280] lg:border-l lg:border-[#E5E7EB] lg:pl-8 lg:pt-2">
            From charger access and QR-based charging to payments, reporting,
            and host revenue tracking, the platform brings every part of the
            charging journey into one connected ecosystem.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="relative mt-16 hidden aspect-[1200/720] w-full lg:block">
          <svg
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* top row into hub top */}
              <path d="M300 205 V250 H540 V285" />
              <path d="M600 205 V285" />
              <path d="M900 205 V250 H660 V285" />
              {/* sides into hub */}
              <path d="M348 360 H450" />
              <path d="M852 360 H750" />
              {/* bottom row into hub bottom */}
              <path d="M384 513 V470 H540 V435" />
              <path d="M816 513 V470 H660 V435" />
            </g>
            <g fill="#16a34a">
              <circle cx="300" cy="205" r="5" />
              <circle cx="600" cy="205" r="5" />
              <circle cx="900" cy="205" r="5" />
              <circle cx="348" cy="360" r="5" />
              <circle cx="852" cy="360" r="5" />
              <circle cx="384" cy="513" r="5" />
              <circle cx="816" cy="513" r="5" />
            </g>
          </svg>

          {connectedNodes.map((node) => (
            <div
              key={node.title}
              className={`absolute w-[260px] -translate-x-1/2 -translate-y-1/2 ${node.pos}`}
            >
              <ConnectedNodeCard {...node} />
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2">
            <ConnectedHub />
          </div>
        </div>

        {/* Mobile / tablet stacked */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          <div className="sm:col-span-2">
            <ConnectedHub />
          </div>
          {connectedNodes.map((node) => (
            <ConnectedNodeCard key={node.title} {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}
