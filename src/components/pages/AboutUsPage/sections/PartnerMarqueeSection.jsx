import { partnerPills } from "../../AboutUsPage.shared.jsx";
export function PartnerMarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-[#E5E5E5] bg-white py-8">
      <div className="about-page__pill-row flex gap-4">
        {[...partnerPills, ...partnerPills].map((pill, index) => (
          <span
            key={`${pill}-${index}`}
            className="inline-flex shrink-0 items-center rounded-full border border-[#E0E0E0] bg-[#F5F5F5] px-5 py-3 text-sm font-semibold text-zinc-700"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
