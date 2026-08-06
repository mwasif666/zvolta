import { YoutubeReelsSection } from "./IndexPage.shared.jsx";
import { AppSection } from "./IndexPage/sections/AppSection.jsx";
import { BentoSection } from "./IndexPage/sections/BentoSection.jsx";
import { ContactSection } from "./IndexPage/sections/ContactSection.jsx";
import { HeroSection } from "./IndexPage/sections/HeroSection.jsx";
import { HorizontalScrollSection } from "./IndexPage/sections/HorizontalScrollSection.jsx";
import { HowItWorksSection } from "./IndexPage/sections/HowItWorksSection.jsx";
import { MissionSection } from "./IndexPage/sections/MissionSection.jsx";
import { PartnersSection } from "./IndexPage/sections/PartnersSection.jsx";
import { TeamSection } from "./IndexPage/sections/TeamSection.jsx";
export default function IndexPage() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <div className="content-overlap overflow-hidden rounded-t-[3rem]">
        <HorizontalScrollSection />
      </div>
      <MissionSection />
      <HowItWorksSection />
      <AppSection />
      <BentoSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
      <YoutubeReelsSection />
    </main>
  );
}
