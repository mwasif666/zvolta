import {
  Icon,
  PageSection,
  SecondaryButton,
  SectionIntro,
  platformFeatures,
} from "../../SoftwarePage.shared.jsx";
export function WhatTheSoftwareDoesSection() {
  return (
    <PageSection id="features">
      <SectionIntro
        eyebrow="What the software does"
        title="One system for the full charging journey."
        copy="The platform connects the charger, app, payments, users, and dashboard, so the full experience works smoothly. It gives operators EV charging software, an EV charger dashboard, charging payments, and charging network management in one place."
      />
      <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {platformFeatures.map(([title, copy], index) => (
          <article
            key={title}
            className={`rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 ${index < 2 ? "lg:col-span-2" : ""}`}
          >
            <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
              <Icon name={index === 0 ? "bolt" : "check"} className="h-5 w-5" />
            </div>
            <h3 className="text-[24px] font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
          </article>
        ))}
      </div>
      <SecondaryButton href="#features" className="mt-10">
        See platform features
      </SecondaryButton>
    </PageSection>
  );
}
