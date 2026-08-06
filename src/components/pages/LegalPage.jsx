import { useState } from "./LegalPage.shared.jsx";
import { LegalHeroSection } from "./LegalPage/sections/LegalHeroSection.jsx";
import { LegalTopicsSection } from "./LegalPage/sections/LegalTopicsSection.jsx";
import { LegalAccordionSection } from "./LegalPage/sections/LegalAccordionSection.jsx";
import { LegalContactSection } from "./LegalPage/sections/LegalContactSection.jsx";
export default function LegalPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-96 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

      <LegalHeroSection />

      <LegalTopicsSection />

      <LegalAccordionSection
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />

      <LegalContactSection />
    </div>
  );
}
