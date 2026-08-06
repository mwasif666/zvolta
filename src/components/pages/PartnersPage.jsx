import { useFormSubmission } from "./PartnersPage.shared.jsx";
import { PartnersHeroSection } from "./PartnersPage/sections/PartnersHeroSection.jsx";
import { PartnerCtaSection } from "./PartnersPage/sections/PartnerCtaSection.jsx";
import { LogoGridSection } from "./PartnersPage/sections/LogoGridSection.jsx";
import { WhatPartnershipLooksLikeSection } from "./PartnersPage/sections/WhatPartnershipLooksLikeSection.jsx";
import { WhyPartnersChooseZvoltaSection } from "./PartnersPage/sections/WhyPartnersChooseZvoltaSection.jsx";
import { PartnerStoriesSection } from "./PartnersPage/sections/PartnerStoriesSection.jsx";
import { TestimonialsSection } from "./PartnersPage/sections/TestimonialsSection.jsx";
import { WhoCanPartnerSection } from "./PartnersPage/sections/WhoCanPartnerSection.jsx";
import { PartnerFormSection } from "./PartnersPage/sections/PartnerFormSection.jsx";
export default function PartnersPage() {
  const form = useFormSubmission("https://formspree.io/f/movwbyqn");
  return (
    <>
      <div className="partners-page font-sans">
        <PartnersHeroSection />

        <LogoGridSection />

        <WhatPartnershipLooksLikeSection />

        <WhyPartnersChooseZvoltaSection />

        <PartnerStoriesSection />

        <TestimonialsSection />

        <WhoCanPartnerSection />

        <PartnerFormSection form={form} />

        <PartnerCtaSection />
      </div>
    </>
  );
}
