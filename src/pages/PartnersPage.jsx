import { SmartLink } from "../components/SmartLink";
import logo01 from "../../aivora/src/images/brand/logo01.png";
import logo02 from "../../aivora/src/images/brand/logo02.png";
import logo03 from "../../aivora/src/images/brand/logo03.png";
import logo04 from "../../aivora/src/images/brand/logo04.png";
import logo05 from "../../aivora/src/images/brand/logo05.png";
import logo06 from "../../aivora/src/images/brand/logo06.png";

const logos = [logo01, logo02, logo03, logo04, logo05, logo06];

const partnerTypes = [
  {
    title: "Host locations",
    copy:
      "Parking, frontage, and real estate that can become useful charging stops when access and uptime are planned properly.",
  },
  {
    title: "Fleet and mobility operators",
    copy:
      "Programs that need charging behavior, route logic, and vehicle usage to work in one connected system.",
  },
  {
    title: "Rollout collaborators",
    copy:
      "The people who help installation, site readiness, maintenance expectations, and operational follow-through line up early.",
  },
];

const process = [
  "We start with site fit, not assumptions.",
  "Then we map rollout and operational expectations.",
  "After launch, we keep partner visibility simple.",
  "The live network keeps teaching us what to improve next.",
];

export default function PartnersPage() {
  return (
    <div className="overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-80 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <div>
            <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
              <SmartLink href="/" className="transition-colors hover:text-emerald-400">
                Home
              </SmartLink>
              <span>/</span>
              <span className="text-white">Partners</span>
            </nav>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Built with the right sites and operators
            </span>
            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Partnerships that make the
              <span className="text-emerald-400"> network more useful</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Some pages in Aivora used clean editorial grids and logo sections.
              This one takes that direction, then rewrites it around ZVolta's
              real partnership story: host locations, fleet movement, rollout,
              and long-term operational fit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <SmartLink
                href="/charging-partners"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
              >
                Become a partner
              </SmartLink>
              <SmartLink
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
              >
                Talk to ZVolta
              </SmartLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d] p-4">
              <img
                src="/img/host%20An%20EV%20charging.jpg"
                alt="Host location"
                className="h-72 w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d] p-4">
                <img
                  src="/img/zvolta-maidan.jpg"
                  alt="ZVolta rollout"
                  className="h-36 w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#07110d] p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Partnership lens
                </span>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Good partners do more than expand coverage. They make the
                  charging experience easier to trust for the next driver who
                  arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06100b] py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-10 px-4 sm:px-6 lg:px-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-16 w-32 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 grayscale transition duration-300 hover:grayscale-0"
            >
              <img src={logo} alt="Aivora inspired brand mark" className="max-h-9" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              Who we build with
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Different partner types, one shared standard.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {partnerTypes.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/12 text-sm font-bold text-emerald-300">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-[#07110d] p-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              What we look for
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              A useful site always has a reason for drivers to stop there.
            </h2>
            <ul className="mt-8 space-y-5 text-sm leading-7 text-white/72">
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Clear entry, parking, and access behavior.
              </li>
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Enough repeat movement to justify active operations.
              </li>
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Commercial logic that works for both the host and the network.
              </li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src="/img/charging-post.jpg"
                alt="Charging post"
                className="h-full min-h-[220px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src="/img/ev-charging-station-blue.png"
                alt="EV charger"
                className="h-full min-h-[220px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 sm:col-span-2">
              <img
                src="/img/zvolta-2.jpg"
                alt="ZVolta vehicle"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06100b] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              Partnership flow
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              The working process stays simple on purpose.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  Step 0{index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.4rem] border border-white/10 bg-gradient-to-r from-[#07110d] via-[#0b1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Ready to explore fit?
                </span>
                <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                  Bring your location, fleet plan, or rollout question.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  We can start with a practical conversation about usage, site
                  behavior, and whether the opportunity makes sense for both
                  sides.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <SmartLink
                    href="/charging-partners"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                  >
                    Start partnership
                  </SmartLink>
                  <SmartLink
                    href="/support"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                  >
                    Understand support
                  </SmartLink>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Best-fit themes
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Retail plazas",
                    "Office parking",
                    "Apartment blocks",
                    "Campus sites",
                    "Fleet depots",
                    "Transport corridors",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
