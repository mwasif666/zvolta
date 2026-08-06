import {
  RoiCalculatorSection,
  useState,
} from "./ChargingPartnersPage.shared.jsx";
import { PartnerHeroSection } from "./ChargingPartnersPage/sections/PartnerHeroSection.jsx";
import { HorizontalScrollSection } from "./ChargingPartnersPage/sections/HorizontalScrollSection.jsx";
import { LocationTypesSection } from "./ChargingPartnersPage/sections/LocationTypesSection.jsx";
import { PartnerBenefitsSection } from "./ChargingPartnersPage/sections/PartnerBenefitsSection.jsx";
import { PartnerFaqSection } from "./ChargingPartnersPage/sections/PartnerFaqSection.jsx";
import { ApplySection } from "./ChargingPartnersPage/sections/ApplySection.jsx";
export default function ChargingPartnersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  return (
    <>
      <div className="overflow-x-hidden">
        <main className="w-full">
          <PartnerHeroSection />
          <HorizontalScrollSection />
          <LocationTypesSection />
          <PartnerBenefitsSection />
          <PartnerFaqSection
            openFaqIndex={openFaqIndex}
            setOpenFaqIndex={setOpenFaqIndex}
          />
          <RoiCalculatorSection />
          <ApplySection />
        </main>
      </div>
    </>
  );
}
