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
  {
    title: "Site visits",
    image: "/img/zvolta-maidan.jpg",
  },
  {
    title: "Charger testing",
    image: "/img/charging-post.jpg",
  },
  {
    title: "App testing",
    image: "/img/app-1.png",
  },
  {
    title: "Installations",
    image: "/img/Host/04.png",
  },
  {
    title: "Office moments",
    image: "/img/Team/ZV%20-%20Anila.png",
  },
  {
    title: "Team clips",
  },
  {
    title: "Support calls",
  },
  {
    title: "Partner visits",
    image: "/img/host An EV charging.jpg",
  },
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#16a34a]/45 ${className}`}
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
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
        <p className="mb-4 text-xs font-semibold uppercase text-[#16a34a]">
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
    <article className="team-card group rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#16a34a]/40">
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
            <span className="w-fit rounded-lg border border-[#1F1F1F] bg-[#111111] px-3 py-2 text-xs font-semibold text-[#16a34a]">
              Team video
            </span>
            <div>
              <p className="text-5xl font-semibold text-white/12">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-5 h-2 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-[#16a34a]" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pt-5">
        <p className="text-xl font-semibold text-white">{member.name}</p>
        <p className="mt-1 text-sm font-semibold text-[#16a34a]">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">"{member.line}"</p>
      </div>
    </article>
  );
}
export {
  CAREERS_LINK,
  Icon,
  MediaCard,
  PARTNERS_LINK,
  PrimaryButton,
  ScrollTrigger,
  SecondaryButton,
  Section,
  SectionIntro,
  SmartLink,
  behindWork,
  gsap,
  teamMembers,
  useEffect,
  useRef,
  workSteps,
};
