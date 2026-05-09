import { useState } from "react";
import { SmartLink } from "../SmartLink";

const supportCards = [
  {
    title: "Driver help",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img01.png",
    note: "Charging questions, onboarding clarity, and day-to-day usage support.",
  },
  {
    title: "Host support",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img02.png",
    note: "Site behavior, charger issues, and partner-side coordination.",
  },
  {
    title: "Operator support",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img03.png",
    note: "Software visibility, reporting questions, and operational escalations.",
  },
];

const steps = [
  "Share the site, program, or issue detail as clearly as you can.",
  "We route it to the right lane instead of treating every request the same way.",
  "The goal is a response that tells you what happens next, not just that the message was received.",
  "Repeated support signals feed back into product and operations improvements.",
];

const faqs = [
  {
    question: "How do I report a charger or site issue?",
    answer:
      "Use the contact page or support email with the clearest location detail you can provide. That helps us route the request faster.",
  },
  {
    question: "Is support different for drivers, hosts, and operators?",
    answer:
      "Yes. The response paths are related, but the people and next steps can differ depending on whether the issue is usage, site-side, or software-side.",
  },
  {
    question: "Can I use support for policy or privacy questions too?",
    answer:
      "Yes. If the question is really legal or privacy-related, we route it against the right policy path instead of leaving you to guess.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-96 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center pt-32"
        style={{ backgroundImage: "url('/img/aivora-career/bootcamp-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050806]/85 to-[#040605]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/70">
            <SmartLink href="/" className="transition-colors hover:text-emerald-400">
              Home
            </SmartLink>
            <span>/</span>
            <span className="text-white">Support</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Support page with contact-style pattern
              </span>
              <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Help that keeps people
                <span className="text-emerald-400"> moving forward</span>.
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              This page leans into the Aivora contact/support rhythm instead of
              the same template shell. The goal is simple: drivers, hosts, and
              operators should know where to go and what kind of help they can
              expect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {supportCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                    {card.title}
                  </span>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {card.note}
                  </p>
                  <div className="mt-5 space-y-2 text-sm text-white/78">
                    <a href={`tel:${card.phone.replace(/\s+/g, "")}`} className="block hover:text-emerald-300">
                      {card.phone}
                    </a>
                    <a href={`mailto:${card.email}`} className="block hover:text-emerald-300">
                      {card.email}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-[#07110d] p-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              How support works
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              Clear routing matters more than generic replies.
            </h2>
            <div className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                    Step 0{index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-7 text-white/70">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0a1610] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Quick actions
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              Start in the lane that matches your question.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SmartLink
                href="/contact-us"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  Contact
                </span>
                <span className="mt-3 block text-lg font-medium">Open the main contact page</span>
              </SmartLink>
              <SmartLink
                href="/legal"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  Legal
                </span>
                <span className="mt-3 block text-lg font-medium">Policy and privacy questions</span>
              </SmartLink>
              <SmartLink
                href="/mobile"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  Mobile flow
                </span>
                <span className="mt-3 block text-lg font-medium">Understand scan, pay, and charge</span>
              </SmartLink>
              <SmartLink
                href="/stories"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  Stories
                </span>
                <span className="mt-3 block text-lg font-medium">See how the network works in practice</span>
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#06100b] py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              Common questions
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              A small FAQ, kept plain on purpose.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-lg font-medium tracking-[-0.03em]">
                      {item.question}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-emerald-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-6 pb-6 text-sm leading-7 text-white/70">
                      {item.answer}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
