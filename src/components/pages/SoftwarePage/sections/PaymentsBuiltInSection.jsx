import {
  CONTACT_LINK,
  Diagram,
  PageSection,
  PrimaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function PaymentsBuiltInSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Payments built in"
        title="Payments are built into the flow."
        copy="Users pay through the app. Operators and hosts get clear records of usage, payments, and session history."
      />
      <p className="software-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
        No cash handling. No manual coordination. No unclear billing.
      </p>
      <div className="mt-12">
        <Diagram
          nodes={[
            "User starts session",
            "App payment",
            "Payment record",
            "Dashboard update",
          ]}
        />
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Talk to sales
      </PrimaryButton>
    </PageSection>
  );
}
