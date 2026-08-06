import {
  PageSection,
  SecondaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function BuiltOnOpenInfrastructureSection() {
  return (
    <PageSection>
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <SectionIntro
          eyebrow="Built on open infrastructure"
          title="Open and flexible by design."
          copy="Zvolta uses open and flexible infrastructure so your network can grow without unnecessary limits."
        />
        <div className="software-stagger grid gap-4">
          {[
            "Hardware",
            "OCPP",
            "Zvolta platform",
            "Apps and dashboards",
            "Reports and integrations",
          ].map((layer) => (
            <div
              key={layer}
              className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-5 text-lg font-semibold text-white"
            >
              {layer}
            </div>
          ))}
        </div>
      </div>
      <SecondaryButton href="#features" className="mt-10">
        Learn more about the platform
      </SecondaryButton>
    </PageSection>
  );
}
