import {
  PrimaryButton,
  Section,
  SectionIntro,
  testimonials,
} from "../../PartnersPage.shared.jsx";
export function TestimonialsSection() {
  return (
    <Section>
      <SectionIntro eyebrow="Testimonials" title="What our partners say." />
      <div className="partners-reveal mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(([quote, label]) => (
          <figure
            key={quote}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
          >
            <blockquote className="text-base leading-7 text-white">
              "{quote}"
            </blockquote>
            <figcaption className="mt-8 text-sm font-semibold text-[#A1A1A1]">
              {label}
            </figcaption>
          </figure>
        ))}
      </div>
      <PrimaryButton className="mt-10">Become a partner</PrimaryButton>
    </Section>
  );
}
