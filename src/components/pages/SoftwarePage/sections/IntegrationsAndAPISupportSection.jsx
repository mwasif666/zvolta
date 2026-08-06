import {
  CONTACT_LINK,
  FeatureCard,
  PageSection,
  PrimaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function IntegrationsAndAPISupportSection() {
  return (
    <PageSection>
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <SectionIntro
          eyebrow="Integrations and API support"
          title="Connect with the systems you already use."
          copy="The platform can connect with charger hardware, payment systems, dashboards, reports, apps, and other business tools. An API is a secure way for two systems to connect and share data."
        />
        <div className="software-reveal rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
          <div className="grid place-items-center gap-4">
            <div className="rounded-lg border border-[#16a34a]/35 bg-[#16a34a]/10 px-6 py-4 text-center text-lg font-semibold text-white">
              Zvolta
            </div>
            <div className="software-stagger grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Chargers",
                "Payments",
                "App",
                "Dashboard",
                "Reports",
                "Business tools",
                "APIs",
              ].map((node) => (
                <FeatureCard key={node} title={node} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Discuss integrations
      </PrimaryButton>
    </PageSection>
  );
}
