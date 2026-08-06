import {
  CONTACT_LINK,
  PageSection,
  PrimaryButton,
  SectionIntro,
  setupSteps,
} from "../../SoftwarePage.shared.jsx";
export function HowSetupWorksSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="How setup works"
        title="A clear path from hardware details to go live."
      />
      <div className="software-stagger mt-12 grid gap-5">
        {setupSteps.map(([title, copy], index) => (
          <article
            key={title}
            className="grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:grid-cols-[110px_1fr]"
          >
            <p className="text-sm font-semibold text-[#16a34a]">
              Step {index + 1}
            </p>
            <div>
              <h3 className="text-[24px] font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
            </div>
          </article>
        ))}
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Start software setup
      </PrimaryButton>
    </PageSection>
  );
}
