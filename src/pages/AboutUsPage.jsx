import { SmartLink } from "../components/SmartLink";
import aboutImg05 from "../../aivora/src/images/about/img05.jpg";
import aboutImg06 from "../../aivora/src/images/about/img06.jpg";
import aboutImg07 from "../../aivora/src/images/about/img07.jpg";
import aboutImg08 from "../../aivora/src/images/about/img08.jpg";
import aboutBg from "../../aivora/src/images/bg/about-bg02.png";

const imageColumns = [
  aboutImg05,
  aboutImg06,
  aboutImg07,
  aboutImg08,
];

const featureCards = [
  {
    title: "Charging with real-world logic",
    copy:
      "We plan around access, dwell time, uptime, and driver behavior so chargers become useful infrastructure, not decorative hardware.",
  },
  {
    title: "Vehicle programs that stay grounded",
    copy:
      "ZVolta connects EV access with onboarding, charging guidance, and support so adoption works beyond the first handover.",
  },
  {
    title: "Software that keeps operators aligned",
    copy:
      "Sessions, payments, field issues, and site visibility all need one rhythm. Our software layer helps teams stay coordinated.",
  },
];

const stats = [
  { value: "Charging", label: "Built around practical site usage" },
  { value: "Drivers", label: "Supported through onboarding and field realities" },
  { value: "Hosts", label: "Connected to a cleaner revenue model" },
  { value: "Operators", label: "Given better visibility across the network" },
];

const partnerPills = [
  "Host locations",
  "Driver programs",
  "Fleet movement",
  "Site operations",
  "Charging software",
  "Support systems",
  "Field maintenance",
  "Local rollout",
];

function AboutColumn({ image, reverse = false }) {
  const images = [image, image, image];

  return (
    <div
      className={`hidden h-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 lg:block ${
        reverse ? "about-page__column--reverse" : ""
      }`}
    >
      <div className="about-page__column-track flex flex-col gap-4 p-4">
        {[...images, ...images].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img
              src={item}
              alt="Aivora inspired about visual"
              className="h-40 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <style data-page-style="about-us:3">{`
        .about-page__column-track {
          animation: about-column-up 28s linear infinite;
        }

        .about-page__column--reverse .about-page__column-track {
          animation-name: about-column-down;
        }

        .about-page__pill-row {
          animation: about-pill-slide 20s linear infinite;
          width: max-content;
        }

        @keyframes about-column-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 0.5rem)); }
        }

        @keyframes about-column-down {
          0% { transform: translateY(calc(-50% - 0.5rem)); }
          100% { transform: translateY(0); }
        }

        @keyframes about-pill-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative overflow-hidden bg-[#030504] text-white">
        <img
          src={aboutBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 w-[1200px] max-w-none -translate-x-1/2 opacity-30"
        />
        <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <section
          className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
          style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#030504]" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
                <SmartLink href="/" className="transition-colors hover:text-emerald-400">
                  Home
                </SmartLink>
                <span>/</span>
                <span className="text-white">About Us</span>
              </nav>
              <span className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Aivora pattern, ZVolta purpose
              </span>
              <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Building the practical
                <span className="text-emerald-400"> electric layer </span>
                for Pakistan.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                ZVolta is focused on what makes electric mobility actually work
                on the ground: reliable charging, clear operating software,
                vehicle access, and support that respects how people move every
                day.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <SmartLink
                  href="/charging-partners"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore hosting
                </SmartLink>
                <SmartLink
                  href="/support"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                >
                  See support model
                </SmartLink>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110c]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/img/zvolta-maidan.jpg"
                      alt="ZVolta charging site"
                      className="h-full min-h-[320px] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                        What we connect
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/72">
                        Charging sites, drivers, hosts, operators, and the
                        software that keeps the whole system readable.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img
                        src="https://res.cloudinary.com/diywraupt/image/upload/v1778334294/app-1_lbtjn5.png"
                        alt="ZVolta software layer"
                        className="h-44 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-[1.5rem] border border-white/10 bg-black/70 px-5 py-4 text-sm text-white/70 shadow-2xl backdrop-blur md:block">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Operating lens
                </span>
                <span className="mt-2 block max-w-[14rem]">
                  Every site should feel useful, visible, and easier to trust.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10 py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src="/img/clean-volta.jpg"
                  alt="ZVolta electric mobility"
                  className="h-[280px] w-full object-cover sm:h-[380px]"
                />
              </div>
              <div>
                <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Who we are
                </span>
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  We grow the network by staying close to the field.
                </h2>
                <p className="mt-4 text-base leading-8 text-white/70">
                  The Aivora about page had a strong image-led rhythm. Here we
                  keep that spirit, but the story is fully ZVolta: access,
                  uptime, clarity, and support working together so electric
                  mobility feels more practical every month.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#E5E5E5] bg-white py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
                Why ZVolta works this way
              </span>
              <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.05em] text-zinc-900 sm:text-5xl">
                Electric mobility gets easier when every layer makes sense
                together.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-500">
                We do not treat chargers, programs, software, and support as
                separate stories. The network becomes credible when those layers
                reinforce each other.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {featureCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-[#E5E5E5] bg-[#F5F5F5] p-7"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-600">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#E5E5E5] bg-white py-8">
          <div className="about-page__pill-row flex gap-4">
            {[...partnerPills, ...partnerPills].map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className="inline-flex shrink-0 items-center rounded-full border border-[#E0E0E0] bg-[#F5F5F5] px-5 py-3 text-sm font-semibold text-zinc-700"
              >
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[2.25rem] border border-white/10 bg-[#08120d] p-8">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Working principles
              </span>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                We expand carefully, operate visibly, and learn quickly.
              </h2>
              <ul className="mt-8 space-y-5 text-sm leading-7 text-white/72">
                <li className="border-l-2 border-emerald-400/40 pl-4">
                  Sites should be easy to explain to a host and easy to use for
                  a driver.
                </li>
                <li className="border-l-2 border-emerald-400/40 pl-4">
                  Support feedback should improve the next product or operating
                  decision.
                </li>
                <li className="border-l-2 border-emerald-400/40 pl-4">
                  Growth should make the network stronger, not noisier.
                </li>
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-2xl font-medium tracking-[-0.04em] text-emerald-300">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0a1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
                    Next stop
                  </span>
                  <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                    Meet the people and partner model behind the rollout.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                    If you want the fuller picture, the next useful pages are
                    `Team`, `Partners`, and `Stories`. Together they explain how
                    ZVolta thinks, who it builds with, and how the work looks in
                    motion.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <SmartLink
                      href="/team"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                    >
                      Meet the team
                    </SmartLink>
                    <SmartLink
                      href="/partners"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                    >
                      See partner model
                    </SmartLink>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                    <img
                      src="/img/Team/ZV%20-%20Nashit.png"
                      alt="Nashit Iqbal"
                      className="h-full min-h-[250px] w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                    <img
                      src="/img/Team/ZV%20-%20Anusha.png"
                      alt="Anusha Shahid"
                      className="h-full min-h-[250px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
