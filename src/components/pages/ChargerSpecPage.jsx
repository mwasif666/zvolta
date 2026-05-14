import { SmartLink } from "../SmartLink";
import { chargerSpecCommon } from "../../data/chargerSpecs";

const CONTACT_LINK = "/contact-us";

function Icon({ name = "check", className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg {...props}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function PrimaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E5A8]/45 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function SecondaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`charger-section ${className}`}>
      <div className="charger-container">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
        {title}
      </h2>
      {copy ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-4 max-w-2xl text-base leading-7 text-[#A1A1A1]`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function DataTable({ rows, headers = ["Detail", "Value"] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111]">
      <div
        className="grid border-b border-[#1F1F1F] bg-[#0B0B0B] text-xs font-semibold uppercase text-[#A1A1A1]"
        style={{
          gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
        }}
      >
        {headers.map((header) => (
          <div key={header} className="p-4">
            {header}
          </div>
        ))}
      </div>
      <div>
        {rows.map((row) => (
          <div
            key={row.join(":")}
            className="grid border-b border-[#1F1F1F] last:border-b-0"
            style={{
              gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
            }}
          >
            {row.map((cell, index) => (
              <div
                key={`${row[0]}-${index}`}
                className={`p-4 text-sm leading-6 ${index === 0 ? "font-semibold text-white" : "text-[#A1A1A1]"}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChargerVisual({ power }) {
  return (
    <div className="relative rounded-lg border border-[#1F1F1F] bg-[#111111] p-8">
      <div className="mx-auto h-56 w-36 rounded-xl border border-[#2A2A2A] bg-[#141414] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto h-4 w-20 rounded-sm bg-[#242424]" />
        <div className="mx-auto mt-7 grid h-20 w-16 place-items-center rounded-lg border border-[#2A2A2A] bg-[#0B0B0B]">
          <Icon name="bolt" className="h-8 w-8 text-[#00E5A8]" />
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#00E5A8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#303030]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#303030]" />
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5 text-center">
        <p className="text-xs font-semibold uppercase text-[#00E5A8]">
          Smart AC charger
        </p>
        <p className="mt-2 text-[40px] font-semibold leading-none text-white">
          {power}
        </p>
        <p className="mt-3 text-sm text-[#A1A1A1]">
          App, dashboard, payments, and safety included
        </p>
      </div>
    </div>
  );
}

function LeadForm({ spec }) {
  return (
    <form
      className="grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {["Name", "Phone number", "Email", "City"].map((field) => (
          <label key={field} className="grid gap-3">
            <span className="text-sm font-semibold text-white">{field}</span>
            <input
              type={field === "Email" ? "email" : "text"}
              className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
            />
          </label>
        ))}
      </div>
      <label className="grid gap-3">
        <span className="text-sm font-semibold text-white">Site type</span>
        <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]">
          {spec.leadSiteTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-3">
          <span className="text-sm font-semibold text-white">
            How do you want to use the charger
          </span>
          <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]">
            <option>Private use</option>
            <option>Public charging</option>
            <option>Both</option>
          </select>
        </label>
        <label className="grid gap-3">
          <span className="text-sm font-semibold text-white">
            Do you have solar installed
          </span>
          <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]">
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label className="grid gap-3">
        <span className="text-sm font-semibold text-white">Message</span>
        <textarea
          rows="5"
          className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-white outline-none transition focus:border-[#00E5A8]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
      >
        Get a free recommendation
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function ChargerSpecPage({ spec }) {
  const common = chargerSpecCommon;

  return (
    <>
      <style data-page-style={`charger-spec:${spec.power}`}>{`
        .charger-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .charger-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .charger-section {
          padding: 120px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        @media (max-width: 767px) {
          .charger-container {
            padding: 0 18px;
          }

          .charger-section {
            padding: 84px 0;
          }

          .charger-page [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="charger-page font-sans">
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="charger-container relative grid min-h-[calc(100vh-80px)] gap-16 pb-24 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                Zvolta {spec.power} charger
              </p>
              <h1 className="mt-5 text-[40px] font-semibold leading-[1.04] text-white md:text-[58px]">
                {spec.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                {spec.heroBody}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                {spec.heroSupport}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {spec.heroBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Get this charger</PrimaryButton>
                <SecondaryButton>Talk to our team</SecondaryButton>
              </div>
            </div>
            <ChargerVisual power={spec.power} />
          </div>
        </section>

        <Section>
          <SectionIntro
            eyebrow="Quick details"
            title={`${spec.power} charger at a glance.`}
          />
          <div className="mt-12">
            <DataTable
              rows={spec.quickDetails}
              headers={["Detail", `Zvolta ${spec.power} charger`]}
            />
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <SectionIntro
              eyebrow="Who should choose this charger"
              title={spec.whoTitle}
              copy={spec.whoBody}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {spec.bestFor.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <PrimaryButton className="mt-10">
            {spec.recommendationCta}
          </PrimaryButton>
        </Section>

        {spec.balanceTitle ? (
          <Section>
            <SectionIntro
              eyebrow="Charger fit"
              title={spec.balanceTitle}
              copy={spec.balanceBody}
            />
            <PrimaryButton className="mt-9">Get setup advice</PrimaryButton>
          </Section>
        ) : null}

        <Section>
          <SectionIntro
            eyebrow="Private, shared, or public"
            title="Use it privately or earn from it."
            copy={`You can use the same charger in different ways. ${spec.useSupport}`}
          />
          <div className="mt-12">
            <DataTable
              rows={spec.useTypes}
              headers={["Use type", "What it means"]}
            />
          </div>
          <div className="mt-8 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "You set the price.",
              "You set the timing.",
              "You choose who can use it.",
              "You keep 100% of your earnings.",
            ].map((item) => (
              <p key={item} className="text-base font-semibold text-white">
                {item}
              </p>
            ))}
          </div>
          <PrimaryButton className="mt-9">
            Start earning from your charger
          </PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Smart software is included"
            title="This is not just a basic charger."
            copy={spec.softwareIntro}
          />
          <div className="mt-12">
            <DataTable
              rows={common.softwareFeatures}
              headers={["Feature", "What it does"]}
            />
          </div>
          <div className="mt-8 grid gap-4 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:grid-cols-3">
            {["No staff needed.", "No cash handling.", "No manual work."].map(
              (item) => (
                <p key={item} className="text-lg font-semibold text-white">
                  {item}
                </p>
              ),
            )}
          </div>
          <SecondaryButton href="/software" className="mt-9">
            Learn about Zvolta software
          </SecondaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Simple for EV users"
            title="Easy charging through the Zvolta app."
            copy="EV users can find your charger on the Zvolta app if you make it public. They can check the location, see the price, scan the QR code, start charging, and pay from the app."
          />
          <SecondaryButton href="/charge" className="mt-9">
            Download the app
          </SecondaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Built-in safety features"
            title="Safety should not be an extra upgrade."
            copy="Zvolta includes important safety features in the charger price."
          />
          <div className="mt-12">
            <DataTable
              rows={common.safetyFeatures}
              headers={["Safety feature", "What it means"]}
            />
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#A1A1A1]">
            These features are included for free. Some basic imported chargers
            charge extra for these safety add ons. These add ons can cost around
            PKR 50,000 to PKR 80,000. Zvolta includes them because safety should
            be standard.
          </p>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Comparison"
            title={`Zvolta ${spec.power} vs basic imported chargers.`}
          />
          <div className="mt-12">
            <DataTable
              rows={common.importedComparisonRows}
              headers={[
                "Feature",
                `Zvolta ${spec.power} smart charger`,
                "Basic imported chargers",
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Installation"
            title="Free standard installation."
            copy={`Zvolta provides free standard installation with the ${spec.power} charger. Our team installs the charger, connects it with the app, and helps you get started. If your site needs earthing, only the earthing cost will apply.`}
          />
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#A1A1A1]">
            Earthing means a safe connection to the ground. It helps protect
            people and equipment from extra current.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <DataTable
              rows={common.installationItems}
              headers={["Installation item", "Cost"]}
            />
            <DataTable
              rows={spec.installationOptions}
              headers={["Installation style", "Good for"]}
            />
          </div>
          <PrimaryButton className="mt-9">Book a site check</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Technical specs"
            title={`${spec.power} technical specs.`}
          />
          <div className="mt-12">
            <DataTable
              rows={spec.technicalSpecs}
              headers={["Spec", "Detail"]}
            />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Pricing"
            title={`${spec.power} charger pricing.`}
          />
          <div className="mt-12">
            <DataTable rows={spec.pricing} headers={["Item", "Price"]} />
          </div>
          <PrimaryButton className="mt-9">Get this charger</PrimaryButton>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionIntro
                eyebrow="Add more chargers later"
                title={`Start with one ${spec.power} charger and add more later.`}
                copy="Zvolta add on modules let you connect two or more chargers together. Each add on module costs 50% of the charger price."
              />
              <SecondaryButton className="mt-9">
                Ask about add on modules
              </SecondaryButton>
            </div>
            <div>
              <SectionIntro
                eyebrow="How setup works"
                title="From site check to go live."
              />
              <div className="mt-8">
                <DataTable
                  rows={common.setupSteps}
                  headers={["Step", "What happens"]}
                />
              </div>
              <PrimaryButton className="mt-9">Start setup</PrimaryButton>
            </div>
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Use cases"
            title={`Where the ${spec.power} charger works well.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {spec.goodFor.map(([title, copy, cta]) => (
              <article
                key={title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
                <SmartLink
                  href={CONTACT_LINK}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5A8]"
                >
                  {cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Compare options"
            title="Compare Zvolta charger options."
          />
          <div className="mt-12">
            <DataTable
              rows={common.compareChargers}
              headers={["Charger", "Best for", "Power"]}
            />
          </div>
          <p className="mt-8 text-lg font-semibold text-white">
            Not sure which one you need?
          </p>
          <PrimaryButton className="mt-5">
            Get a free recommendation
          </PrimaryButton>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <SectionIntro
              eyebrow="Recommendation"
              title={spec.leadTitle}
              copy="Tell us about your space and our team will guide you."
            />
            <LeadForm spec={spec} />
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="FAQs"
            title={`Questions about the ${spec.power} charger.`}
          />
          <div className="mt-12 grid gap-4">
            {spec.faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {question}
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="charger-container relative">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                {spec.finalTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1]">
                {spec.finalBody}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <PrimaryButton>Get this charger</PrimaryButton>
                <SecondaryButton href="/host">
                  Compare all Zvolta chargers
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
