import {
  Diagram,
  PageSection,
  SecondaryButton,
  SectionIntro,
} from "../../SoftwarePage.shared.jsx";
export function BuiltOnOCPPSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Built on OCPP"
        title="Built for OCPP-ready charging."
        copy="OCPP means Open Charge Point Protocol. It is the common language that helps chargers connect with charging software, so Zvolta can work as OCPP charging software for compatible hardware."
      />
      <p className="software-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
        This helps operators connect hardware, manage chargers, and grow their
        network without being locked into one setup.
      </p>
      <div className="mt-12">
        <Diagram
          nodes={[
            "Charger",
            "OCPP",
            "Zvolta Platform",
            "App, Dashboard, Payments",
          ]}
        />
      </div>
      <SecondaryButton href="#features" className="mt-10">
        Check OCPP compatibility
      </SecondaryButton>
    </PageSection>
  );
}
