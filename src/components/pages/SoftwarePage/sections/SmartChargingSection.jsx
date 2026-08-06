import {
  ChargerMini,
  DEMO_LINK,
  PrimaryButton,
  SectionIntro,
  smartChips,
  smartSteps,
} from "../../SoftwarePage.shared.jsx";
export function SmartChargingSection({ setSmartState, smartState }) {
  return (
    <section className="software-smart-section border-b border-[#1F1F1F] py-[120px]">
      <div className="software-container">
        <SectionIntro
          eyebrow="Make any charger Smart"
          title="A normal charger only gives power."
          copy="With Zvolta software, it can connect to the app, start sessions with QR, handle payments, show live status, and send data to a dashboard. This is smart EV charger software for real charging operations."
        />
        <div className="software-smart-grid mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="software-smart-steps grid gap-6">
            {smartSteps.map((step, index) => (
              <article
                key={step.title}
                data-index={index}
                onMouseEnter={() => setSmartState(step)}
                className="software-smart-step rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 lg:min-h-[220px]"
              >
                <p className="text-xs font-semibold text-[#16a34a]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-[24px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                  {step.copy}
                </p>
              </article>
            ))}
            <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
          </div>

          <div className="software-smart-visual top-28">
            <div className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6">
              <div className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-center">
                <div className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-6">
                  <ChargerMini active={smartState.state !== "Power only"} />
                  <p className="mt-5 text-center text-sm font-semibold text-white">
                    {smartState.state}
                  </p>
                </div>
                <div>
                  <div className="rounded-lg border border-[#16a34a]/35 bg-[#16a34a]/10 p-5">
                    <p className="text-xs font-semibold uppercase text-[#16a34a]">
                      Active software state
                    </p>
                    <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                      {smartState.title}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                      {smartState.copy}
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#16a34a]/20 pt-4">
                      {[
                        ["28", "Available"],
                        ["12", "In use"],
                        ["03", "Offline"],
                      ].map(([val, label]) => (
                        <div
                          key={label}
                          className="rounded-lg bg-[#06130F] p-3 text-center"
                        >
                          <p className="text-xl font-semibold text-white">
                            {val}
                          </p>
                          <p className="mt-1 text-[10px] text-[#A1A1A1]">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="software-stagger mt-5 grid gap-3 sm:grid-cols-2">
                    {smartChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-sm font-semibold text-white"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
