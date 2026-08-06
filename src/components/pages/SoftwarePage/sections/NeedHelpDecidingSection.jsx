import {
  CONTACT_LINK,
  PageSection,
  PrimaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function NeedHelpDecidingSection() {
  return (
    <PageSection>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <SectionIntro
          eyebrow="Need help deciding"
          title="Not sure if it fits your chargers?"
          copy="Tell us about your hardware, your business, and how you want to launch. Our team will help you understand if Zvolta software is the right fit."
        />
        <div className="software-reveal rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
          <p className="text-[32px] font-semibold leading-tight text-white">
            Share your chargers, locations, and launch plan.
          </p>
          <PrimaryButton href={CONTACT_LINK} className="mt-8">
            Get a free consultation
          </PrimaryButton>
        </div>
      </div>
    </PageSection>
  );
}
