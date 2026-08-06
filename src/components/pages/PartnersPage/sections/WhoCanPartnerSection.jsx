import {
  PrimaryButton,
  Section,
  SectionIntro,
  partnerTypes,
} from "../../PartnersPage.shared.jsx";
export function WhoCanPartnerSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Who can partner"
        title="Who can partner with Zvolta."
        copy="If your space, business, or network can help more people access charging, we can talk."
      />
      <div className="partners-reveal mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {partnerTypes.map((type) => (
          <div
            key={type}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-4 text-sm font-semibold text-white"
          >
            {type}
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-6 text-[#A1A1A1]">
        We support EV charging for businesses, restaurants, apartments, offices,
        and public spaces. Zvolta partners can also use ESG charging solutions
        and clean energy partner programs.
      </p>
      <PrimaryButton className="mt-9">
        Check if we can work together
      </PrimaryButton>
    </Section>
  );
}
