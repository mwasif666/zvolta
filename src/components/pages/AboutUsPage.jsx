import { aboutBg } from "./AboutUsPage.shared.jsx";
import { AboutHeroSection } from "./AboutUsPage/sections/AboutHeroSection.jsx";
import { FieldGrowthSection } from "./AboutUsPage/sections/FieldGrowthSection.jsx";
import { ConnectedMobilitySection } from "./AboutUsPage/sections/ConnectedMobilitySection.jsx";
import { PartnerMarqueeSection } from "./AboutUsPage/sections/PartnerMarqueeSection.jsx";
import { OperatingPrinciplesSection } from "./AboutUsPage/sections/OperatingPrinciplesSection.jsx";
import { ExploreCompanySection } from "./AboutUsPage/sections/ExploreCompanySection.jsx";
export default function AboutUsPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-[#030504] text-white">
        <img
          src={aboutBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 w-[1200px] max-w-none -translate-x-1/2 opacity-30"
        />
        <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <AboutHeroSection />

        <FieldGrowthSection />

        <ConnectedMobilitySection />

        <PartnerMarqueeSection />

        <OperatingPrinciplesSection />

        <ExploreCompanySection />
      </div>
    </>
  );
}
