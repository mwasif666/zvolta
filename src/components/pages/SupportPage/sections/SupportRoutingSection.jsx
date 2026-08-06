import { SmartLink, steps } from "../../SupportPage.shared.jsx";
export function SupportRoutingSection() {
  return (
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
              <span className="mt-3 block text-lg font-medium">
                Open the main contact page
              </span>
            </SmartLink>
            <SmartLink
              href="/legal"
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                Legal
              </span>
              <span className="mt-3 block text-lg font-medium">
                Policy and privacy questions
              </span>
            </SmartLink>
            <SmartLink
              href="/mobile"
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                Mobile flow
              </span>
              <span className="mt-3 block text-lg font-medium">
                Understand scan, pay, and charge
              </span>
            </SmartLink>
            <SmartLink
              href="/stories"
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/40"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                Stories
              </span>
              <span className="mt-3 block text-lg font-medium">
                See how the network works in practice
              </span>
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
