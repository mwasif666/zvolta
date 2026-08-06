import {
  Icon,
  Section,
  SectionIntro,
  trustPoints,
} from "../../PartnersPage.shared.jsx";
export function PartnerFormSection({ form }) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionIntro
            eyebrow="Partner form"
            title="Let's bring charging to more places."
            copy="Tell us what kind of space, business, or network you have. We will help you understand what kind of partnership makes sense."
          />
          <div className="partners-reveal mt-8 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <form
          className="partners-reveal grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8"
          onSubmit={form.submit}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {["Name", "Email", "Phone", "Company or location name", "City"].map(
              (field) => (
                <label key={field} className="grid gap-3">
                  <span className="text-sm font-semibold text-white">
                    {field}
                  </span>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    name={field.toLowerCase().replaceAll(" ", "-")}
                    required
                    autoComplete={
                      field === "Email"
                        ? "email"
                        : field === "Phone"
                          ? "tel"
                          : field === "Name"
                            ? "name"
                            : "organization"
                    }
                    className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                  />
                </label>
              ),
            )}
          </div>
          <label className="grid gap-3">
            <span className="text-sm font-semibold text-white">
              What are you interested in?
            </span>
            <select
              name="interest"
              required
              className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
            >
              <option>Host a charger</option>
              <option>Use Zvolta software</option>
              <option>Partner with Zvolta</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="grid gap-3">
            <span className="text-sm font-semibold text-white">Message</span>
            <textarea
              name="message"
              required
              rows="5"
              className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-white outline-none transition focus:border-[#00E5A8]"
            />
          </label>
          <button
            type="submit"
            disabled={form.status === "submitting"}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
          >
            {form.status === "submitting" ? "Sending…" : "Submit"}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
          <p
            aria-live="polite"
            className={`min-h-6 text-sm ${form.status === "error" ? "text-red-400" : "text-emerald-400"}`}
          >
            {form.message}
          </p>
        </form>
      </div>
    </Section>
  );
}
