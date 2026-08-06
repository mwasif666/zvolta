import {
  FeatureCard,
  PageSection,
  SecondaryButton,
  SectionIntro,
  pricingRules,
} from "../../SoftwarePage.shared.jsx";
export function PricingAndRulesSection() {
  return (
    <PageSection>
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Pricing and rules"
            title="Set how your network works."
            copy="Control pricing, access, timings, charger availability, user roles, and location settings from the dashboard."
          />
          <p className="software-reveal mt-5 text-base leading-7 text-[#A1A1A1]">
            Everything can be managed remotely.
          </p>
          <SecondaryButton href="#features" className="mt-9">
            See dashboard features
          </SecondaryButton>
        </div>
        <div className="software-stagger grid gap-4 sm:grid-cols-2">
          {pricingRules.map((rule) => (
            <FeatureCard key={rule} title={rule} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
