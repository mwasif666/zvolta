import { useState } from "react";
import { SmartLink } from "../components/SmartLink";

const legalCards = [
  {
    title: "Terms and responsibilities",
    copy:
      "What ZVolta services expect from users, hosts, and partners, and where responsibilities sit in active programs.",
  },
  {
    title: "Privacy and data use",
    copy:
      "How service, contact, and operational information may be used to run support, compliance, and product workflows.",
  },
  {
    title: "Payments and refunds",
    copy:
      "The commercial side of charging, program participation, and how disputes or correction requests should be handled.",
  },
  {
    title: "Program-specific rules",
    copy:
      "Additional conditions that may apply to partner sites, managed programs, or service types with extra operational detail.",
  },
];

const sections = [
  {
    title: "Using ZVolta services",
    body:
      "ZVolta's legal framework is there to set expectations clearly. That includes appropriate service use, accurate information where onboarding depends on it, and responsible use of network access and support channels.",
  },
  {
    title: "How we handle information",
    body:
      "We use service and contact data to operate the network, support users, improve reliability, and meet compliance-related obligations where they apply. If your question is specifically about privacy, the contact route is the right place to start.",
  },
  {
    title: "Commercial clarity and disputes",
    body:
      "Where payments or service fees are involved, the aim is to keep pricing scope and issue handling understandable. If something needs review or correction, the request should include enough detail for the right team to assess it quickly.",
  },
  {
    title: "Partner or program-specific conditions",
    body:
      "Some offerings, especially those involving charging sites, hardware, or managed EV programs, can depend on more specific terms. This page is the clearer overview; deeper operational details are handled through the related workflow.",
  },
];

export default function LegalPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-96 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end lg:px-8">
          <div>
            <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
              <SmartLink href="/" className="transition-colors hover:text-emerald-400">
                Home
              </SmartLink>
              <span>/</span>
              <span className="text-white">Legal</span>
            </nav>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Policy clarity without the wall of text
            </span>
            <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Legal information in a
              <span className="text-emerald-400"> cleaner format</span>.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Instead of putting everything into one giant policy block, this page
            uses a clearer editorial structure. It is still ZVolta legal
            information, just easier to scan and understand before you need
            deeper detail.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {legalCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/12 text-sm font-bold text-emerald-300">
                  0{index + 1}
                </span>
                <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
          <aside className="h-fit rounded-[2rem] border border-white/10 bg-[#07110d] p-6 lg:sticky lg:top-28">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Quick map
            </span>
            <ul className="mt-6 space-y-4 text-sm text-white/74">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <button
                    type="button"
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition-colors ${
                      openIndex === index
                        ? "border-emerald-400/40 bg-emerald-500/10 text-white"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }`}
                    onClick={() => setOpenIndex(index)}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/70">
              If your question is active and operational, the{" "}
              <SmartLink href="/support" className="text-emerald-300 hover:text-emerald-200">
                support page
              </SmartLink>{" "}
              may get you to the right lane faster.
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section, index) => {
              const isOpen = index === openIndex;

              return (
                <article
                  key={section.title}
                  className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#07110d]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-xl font-medium tracking-[-0.03em]">
                      {section.title}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-emerald-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-6 pb-6 text-sm leading-8 text-white/72">
                      {section.body}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#06100b] py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              When to contact us
            </span>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Privacy or data-use concerns.
              </li>
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Clarification on responsibilities inside a program or partner setup.
              </li>
              <li className="border-l-2 border-emerald-400/40 pl-4">
                Payment, refund, or policy interpretation questions.
              </li>
            </ul>
          </div>

          <div className="rounded-[2.4rem] border border-white/10 bg-gradient-to-r from-[#07110d] via-[#0b1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              Need the right context?
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Start with the clearest route.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              If the issue is about terms, privacy, or accountability, reach out
              through the main contact flow. If the issue is live and
              operational, support is usually the better first stop.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SmartLink
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
              >
                Contact ZVolta
              </SmartLink>
              <SmartLink
                href="/support"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
              >
                Go to support
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
