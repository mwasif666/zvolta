import {
  ComparisonColumn,
  DEMO_LINK,
  PageSection,
  PrimaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function WhyLicenseInsteadOfBuildingFromZeroSection() {
  return (
    <PageSection>
      <SectionIntro
        centered
        eyebrow="Why license instead of building from zero"
        title="Launch faster without building from zero."
        copy="Building charging software takes time, cost, and technical effort. Zvolta gives you the core platform already built."
      />
      <div className="software-stagger mt-12 grid gap-8 lg:grid-cols-2">
        <ComparisonColumn
          title="Build from scratch"
          items={[
            "Long development time",
            "Payment setup needed",
            "App development needed",
            "Dashboard development needed",
            "OCPP work needed",
            "Testing and support needed",
          ]}
        />
        <ComparisonColumn
          title="License Zvolta"
          positive
          items={[
            "Faster launch",
            "App already available",
            "Dashboard included",
            "Payments supported",
            "OCPP-ready",
            "Support from Zvolta team",
          ]}
        />
      </div>
      <div className="mt-10 text-center">
        <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
      </div>
    </PageSection>
  );
}
