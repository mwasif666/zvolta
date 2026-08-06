import {
  FeaturePill,
  PageSection,
  PhoneMini,
  SecondaryButton,
  SectionIntro,
  userPoints,
} from "../../SoftwarePage.shared.jsx";
export function ForEVUsersSection() {
  return (
    <PageSection>
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="For EV users"
            title="A simple app experience for EV users."
            copy="Users can find nearby chargers, check availability, view pricing, scan the QR code, start charging, pay, and see their session history without manual help."
          />
          <div className="software-stagger mt-8 grid gap-3 sm:grid-cols-2">
            {userPoints.map((point) => (
              <FeaturePill key={point}>{point}</FeaturePill>
            ))}
          </div>
          <SecondaryButton href="/charge" className="mt-9">
            View app experience
          </SecondaryButton>
        </div>
        <div className="software-reveal">
          <PhoneMini />
        </div>
      </div>
    </PageSection>
  );
}
