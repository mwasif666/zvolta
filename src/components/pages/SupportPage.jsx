import { useState } from "./SupportPage.shared.jsx";
import { SupportHeroSection } from "./SupportPage/sections/SupportHeroSection.jsx";
import { SupportChannelsSection } from "./SupportPage/sections/SupportChannelsSection.jsx";
import { SupportRoutingSection } from "./SupportPage/sections/SupportRoutingSection.jsx";
import { SupportFaqSection } from "./SupportPage/sections/SupportFaqSection.jsx";
export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-96 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <SupportHeroSection />

      <SupportChannelsSection />

      <SupportRoutingSection />

      <SupportFaqSection openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}
