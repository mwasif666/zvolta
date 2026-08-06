import {
  CONTACT_LINK,
  FeatureCard,
  PageSection,
  PrimaryButton,
  SectionIntro,
  securityCards,
} from "../../SoftwarePage.shared.jsx";
export function SecurityAndReliabilitySection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Security and reliability"
        title="Built for secure charging operations."
        copy="Charging software needs to be safe, stable, and trusted. Zvolta software is built with secure access, user roles, protected payments, reliable data handling, and strong system controls."
      />
      <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {securityCards.map((card) => (
          <FeatureCard key={card} title={card} />
        ))}
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Talk to our team
      </PrimaryButton>
    </PageSection>
  );
}
