import {
  Icon,
  PrimaryButton,
  Section,
  SectionIntro,
  partnershipCards,
} from "../../PartnersPage.shared.jsx";
export function WhatPartnershipLooksLikeSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="What partnership looks like"
        title="Partnership can look different for every business."
        copy="Some partners host chargers. Some use our software. Some help us bring charging to more places. Some do all three."
      />
      <p className="partners-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
        The goal stays the same. Make EV charging easier to access, easier to
        manage, and easier to trust.
      </p>
      <div className="partners-reveal mt-12 grid gap-6 lg:grid-cols-3">
        {partnershipCards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/35"
          >
            <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="text-[24px] font-semibold text-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{card.copy}</p>
          </article>
        ))}
      </div>
      <PrimaryButton className="mt-10">Become a partner</PrimaryButton>
    </Section>
  );
}
