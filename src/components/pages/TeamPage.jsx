import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmartLink } from "../SmartLink";

const CAREERS_LINK = "/careers";
const PARTNERS_LINK = "/partners";

const teamMembers = [
  {
    name: "Nashit Iqbal",
    role: "Co-founder",
    line: "I help turn big charging problems into simple steps.",
    image: "/img/Team/ZV%20-%20Nashit.png",
  },
  {
    name: "Anusha Shahid",
    role: "Co-founder",
    line: "Making the app simple for people using EVs every day.",
    image: "/img/Team/ZV%20-%20Anusha.png",
  },
  {
    name: "Anila",
    role: "Core team",
    line: "Connecting people, places, and power.",
    image: "/img/Team/ZV%20-%20Anila.png",
  },
  {
    name: "Team Member 04",
    role: "Software",
    line: "Building the system behind every scan, charge, and payment.",
  },
  {
    name: "Team Member 05",
    role: "Operations",
    line: "Helping more places become part of the charging network.",
  },
  {
    name: "Team Member 06",
    role: "Hardware",
    line: "Building hardware for real roads, real weather, and real use.",
  },
  {
    name: "Team Member 07",
    role: "Sales",
    line: "Helping businesses earn from the space they already have.",
  },
  {
    name: "Team Member 08",
    role: "Support",
    line: "Keeping support human when someone needs help.",
  },
  {
    name: "Team Member 09",
    role: "Design",
    line: "Making clean energy feel like a daily habit.",
  },
  {
    name: "Team Member 10",
    role: "Partnerships",
    line: "Connecting people, places, and power.",
  },
  {
    name: "Team Member 11",
    role: "Installation",
    line: "Making sure every setup is safe and ready.",
  },
  {
    name: "Team Member 12",
    role: "QA",
    line: "Testing the small things before users ever see them.",
  },
  {
    name: "Team Member 13",
    role: "Marketing",
    line: "Telling the story without making it complicated.",
  },
  {
    name: "Team Member 14",
    role: "Finance",
    line: "Keeping the numbers clear and the work moving.",
  },
  {
    name: "Team Member 15",
    role: "Operations",
    line: "Solving whatever the day brings.",
  },
];

const workSteps = [
  "Build what is useful.",
  "Test it in real places.",
  "Fix what feels confusing.",
  "Keep it simple for the people using it.",
];

const behindWork = [
  { title: "Site visits", image: "/img/zvolta-maidan.jpg" },
  { title: "Charger testing", image: "/img/charging-post.jpg" },
  { title: "App testing", image: "/img/app-1.png" },
  { title: "Installations", image: "/img/Host/04.png" },
  { title: "Office moments", image: "/img/Team/ZV%20-%20Anila.png" },
  { title: "Team clips" },
  { title: "Support calls" },
  { title: "Partner visits", image: "/img/host An EV charging.jpg" },
];

function Icon({ name = "arrow", className = "h-5 w-5" }) {
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

  if (name === "check") {
    return (
      <svg {...props}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PrimaryButton({ href = CAREERS_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E5A8]/45 ${className}`}
    >
      {children}
      <Icon className="h-4 w-4" />
    </SmartLink>
  );
}

function SecondaryButton({ href = PARTNERS_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
    >
      {children}
      <Icon className="h-4 w-4" />
    </SmartLink>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`team-section ${className}`}>
      <div className="team-container">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div
      className={`team-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
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

function MediaCard({ member, index }) {
  return (
    <article className="team-card group rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#00E5A8]/40">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#0B0B0B]"
        aria-label={`${member.name}, ${member.role}`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-5">
            <span className="w-fit rounded-lg border border-[#1F1F1F] bg-[#111111] px-3 py-2 text-xs font-semibold text-[#00E5A8]">
              Team video
            </span>
            <div>
              <p className="text-5xl font-semibold text-white/12">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-5 h-2 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-[#00E5A8]" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pt-5">
        <p className="text-xl font-semibold text-white">{member.name}</p>
        <p className="mt-1 text-sm font-semibold text-[#00E5A8]">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">"{member.line}"</p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const pageRef = useRef(null);
  const processLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !pageRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".team-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".team-hero-card", {
        opacity: 0,
        y: 24,
        rotate: -1.5,
        duration: 0.75,
        stagger: 0.08,
        delay: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray(".team-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 22,
          duration: 0.68,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
          },
        });
      });

      gsap.utils.toArray(".team-stagger").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.055,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 84%",
          },
        });
      });

      if (processLineRef.current) {
        gsap.fromTo(
          processLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processLineRef.current,
              start: "top 78%",
            },
          },
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style data-page-style="team-page">{`
        .team-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .team-section {
          padding: 112px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        .team-carousel {
          scrollbar-width: none;
        }

        .team-carousel::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .team-container {
            padding: 0 18px;
          }

          .team-section {
            padding: 80px 0;
          }
        }
      `}</style>

      <div ref={pageRef} className="team-page font-sans">
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="team-container relative grid min-h-[calc(100vh-120px)] gap-14 pb-24 lg:grid-cols-[0.92fr_0.88fr] lg:items-center">
            <div className="team-hero-copy max-w-3xl">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                Zvolta team
              </p>
              <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] text-white md:text-[62px]">
                The people moving Zvolta forward.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                A small team building chargers, software, and charging
                experiences that make electric power easier to use every day.
              </p>
              <div className="mt-9">
                <PrimaryButton>Join the team</PrimaryButton>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-6 text-[#A1A1A1]">
                Meet the EV charging team Pakistan is seeing grow across
                chargers, app work, installations, and support. As an EV
                charging company Pakistan can see up close, our electric
                mobility team Pakistan includes EV charger engineers, an EV
                charging app team, and a clean energy team working in one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:rotate-1">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div
                  key={member.name}
                  className={`team-hero-card rounded-lg border border-[#1F1F1F] bg-[#111111] p-3 ${index === 1 ? "sm:translate-y-8" : ""}`}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#0B0B0B]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section>
          <SectionIntro
            eyebrow="Meet the team"
            title="Meet the team."
            copy="The people behind the app, chargers, dashboard, installations, and support."
          />
          <div className="team-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <MediaCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="How we work"
            title="How we work."
            copy="That is how we build chargers, software, and support people can trust."
          />
          <div className="team-reveal mt-12 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8">
            <div className="relative grid gap-5 lg:grid-cols-4">
              <div
                ref={processLineRef}
                className="absolute left-0 top-8 hidden h-px w-full bg-[#00E5A8]/45 lg:block"
              />
              {workSteps.map((step, index) => (
                <div
                  key={step}
                  className="relative z-10 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#00E5A8] text-sm font-semibold text-black">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-lg font-semibold text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Behind the work"
            title="Behind the work."
            copy="Some days are code. Some days are site visits. Some days are charger testing in the heat. Most days are all three."
          />
          <div className="team-carousel mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
            {behindWork.map((item, index) => (
              <article
                key={item.title}
                className="team-reveal group w-[260px] shrink-0 snap-start rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#00E5A8]/40 sm:w-[310px]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#0B0B0B]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-5">
                      <span className="w-fit rounded-lg border border-[#1F1F1F] bg-[#111111] px-3 py-2 text-xs font-semibold text-[#00E5A8]">
                        Reel
                      </span>
                      <p className="text-5xl font-semibold text-white/12">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  )}
                </div>
                <p className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Built with people who care"
                title="Built with people who care."
                copy="The chargers, app, dashboard, installations, and support all come from the same place. A team trying to make electric power easier for real people in real places."
              />
              <SecondaryButton href={PARTNERS_LINK} className="mt-9">
                Work with us
              </SecondaryButton>
            </div>
            <div className="team-reveal grid gap-4 sm:grid-cols-2">
              {[
                "/img/Team/ZV%20-%20Anila.png",
                "/img/zvolta-maidan.jpg",
                "/img/Host/03.png",
                "/img/app-2.png",
              ].map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="team-container relative">
            <div className="team-reveal mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                Come help us move electric forward.
              </h2>
              <div className="mt-9">
                <PrimaryButton>Join the team</PrimaryButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
