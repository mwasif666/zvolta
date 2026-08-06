import {
  DEMO_LINK,
  PageSection,
  PrimaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function WhiteLabelOrZvoltaPoweredSection() {
  return (
    <PageSection>
      <SectionIntro
        centered
        eyebrow="White label or Zvolta powered"
        title="Launch with Zvolta branding or your own."
        copy="White label means the app, dashboard, and charging flow can carry your brand instead of ours, including a white label EV charging app experience."
      />
      <div className="software-stagger mt-12 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
          <p className="text-xs font-semibold uppercase text-[#16a34a]">
            Zvolta powered
          </p>
          <h3 className="mt-5 text-[32px] font-semibold text-white">
            Use Zvolta app, dashboard, and brand support.
          </h3>
        </article>
        <article className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
          <p className="text-xs font-semibold uppercase text-[#16a34a]">
            Your own brand
          </p>
          <h3 className="mt-5 text-[32px] font-semibold text-white">
            Use the platform with your own app and brand experience.
          </h3>
        </article>
      </div>
      <div className="mt-10 text-center">
        <PrimaryButton href={DEMO_LINK}>
          Explore white label options
        </PrimaryButton>
      </div>
    </PageSection>
  );
}
