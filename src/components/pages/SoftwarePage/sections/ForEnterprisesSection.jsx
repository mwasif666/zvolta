import {
  DEMO_LINK,
  DashboardMockup,
  FeaturePill,
  PageSection,
  PrimaryButton,
  SectionIntro,
  enterprisePoints,
} from "../../SoftwarePage.shared.jsx";
export function ForEnterprisesSection() {
  return (
    <PageSection>
      <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="For enterprises"
            title="Manage many chargers from one place."
            copy="Operators can monitor performance, control access, review revenue, manage pricing, and see reports across their whole network. The app and dashboard work together as an EV charging app for operators."
          />
          <div className="software-stagger mt-8 grid gap-3 sm:grid-cols-2">
            {enterprisePoints.map((point) => (
              <FeaturePill key={point}>{point}</FeaturePill>
            ))}
          </div>
          <PrimaryButton href={DEMO_LINK} className="mt-9">
            Book enterprise demo
          </PrimaryButton>
        </div>
        <DashboardMockup variant="enterprise" />
      </div>
    </PageSection>
  );
}
