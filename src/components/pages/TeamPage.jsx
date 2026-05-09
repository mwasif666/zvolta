import { SmartLink } from "../SmartLink";
import bgLarge from "../../../aivora/src/images/team/noice-bg02.png";
import bgSmall from "../../../aivora/src/images/team/noice-bg.png";
import teamBg from "../../../aivora/src/images/bg/team-bg.png";

const leaders = [
  {
    name: "Nashit Iqbal",
    role: "Founder",
    note: "Keeps ZVolta focused on practical EV adoption, rollout quality, and a product story that feels intentional in the real world.",
    image: "/img/Team/ZV%20-%20Nashit.png",
  },
  {
    name: "Anusha Shahid",
    role: "Founder",
    note: "Shapes how the company feels across communication, product expression, and the small details that build trust over time.",
    image: "/img/Team/ZV%20-%20Anusha.png",
  },
];

const teamPods = [
  {
    title: "Anila",
    role: "Core team",
    image: "/img/Team/ZV%20-%20Anila.png",
    tone: "Brings consistency to execution and keeps the moving pieces aligned.",
  },
  {
    title: "Field Operations",
    role: "On-ground network care",
    image: "/img/zvolta-maidan.jpg",
    tone: "The people solving live issues, understanding site behavior, and keeping uptime honest.",
  },
  {
    title: "Site Partnerships",
    role: "Growth and rollout",
    image: "/img/host%20An%20EV%20charging.jpg",
    tone: "Works with locations and partner programs so expansion stays commercially useful.",
  },
  {
    title: "Support Systems",
    role: "Drivers and operators",
    image: "/img/charging-post.jpg",
    tone: "Helps drivers, hosts, and teams understand what to do next when something needs attention.",
  },
  {
    title: "Product Layer",
    role: "Software and visibility",
    image: "/img/app-1.png",
    tone: "Turns sessions, payments, and site signals into a cleaner operating picture.",
  },
  {
    title: "Network Thinking",
    role: "Shared mindset",
    image: "/img/clean-volta.jpg",
    tone: "Every part of the company is building toward a system that is easier to trust.",
  },
];

const teamPrinciples = [
  "Stay close to the field.",
  "Keep decisions practical.",
  "Design with care.",
  "Move as one system.",
];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/2 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
            <SmartLink href="/" className="transition-colors hover:text-emerald-400">
              Home
            </SmartLink>
            <span>/</span>
            <span className="text-white">Team</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Aivora team page inspired
              </span>
              <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                The people shaping how
                <span className="text-emerald-400"> ZVolta feels </span>
                and how it runs.
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              This page follows the spirit of the Aivora team layout: big
              profile moments up front, then a broader look at the groups that
              keep the company moving across rollout, support, partnerships, and
              product.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(4,6,5,0.92), rgba(4,6,5,0.98)), url(${teamBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#07110d] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-8"
              >
                <img
                  src={bgLarge}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="relative z-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full min-h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                      {leader.role}
                    </span>
                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                      {leader.name}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/72">
                      {leader.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
                Wider team picture
              </span>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Not just titles. Operating lanes.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/68">
              The Aivora version used a mix of big and small team cards. Here we
              keep that staggered rhythm, but the cards reflect how ZVolta is
              actually organized today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamPods.map((pod, index) => (
              <article
                key={pod.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07100c] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${
                  index < 2 ? "xl:col-span-1" : ""
                }`}
              >
                <img
                  src={bgSmall}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
                />
                <div className="relative z-10">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                    <img
                      src={pod.image}
                      alt={pod.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                      {pod.role}
                    </span>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                      {pod.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {pod.tone}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06100b] py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {teamPrinciples.map((item, index) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/12 text-sm font-bold text-emerald-300">
                0{index + 1}
              </span>
              <p className="mt-4 text-lg font-medium tracking-[-0.03em] text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.4rem] border border-white/10 bg-gradient-to-r from-[#07110d] via-[#0b1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Work with us
                </span>
                <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                  If the mission fits, the next step is easy.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  ZVolta is still growing, but the bar is already clear: build
                  practical systems, communicate cleanly, and care about how the
                  work lands in the field.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <SmartLink
                    href="/careers"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                  >
                    Explore careers
                  </SmartLink>
                  <SmartLink
                    href="/about-us"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                  >
                    Company story
                  </SmartLink>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                  <img
                    src="/img/Team/ZV%20-%20Anila.png"
                    alt="Anila"
                    className="h-full min-h-[220px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                  <img
                    src="/img/zvolta-1.jpg"
                    alt="ZVolta vehicle"
                    className="h-full min-h-[220px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
