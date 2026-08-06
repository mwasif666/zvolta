import { DriverHeroSection } from "./DriverNetworkPage/sections/DriverHeroSection.jsx";
import { StepsSection } from "./DriverNetworkPage/sections/StepsSection.jsx";
import { DriverBenefitsSection } from "./DriverNetworkPage/sections/DriverBenefitsSection.jsx";
import { JoinSection } from "./DriverNetworkPage/sections/JoinSection.jsx";
export default function DriverNetworkPage() {
  return (
    <>
      <div>
        <main className="pt-24">
          <DriverHeroSection />
          <StepsSection />
          <DriverBenefitsSection />
          <JoinSection />
        </main>
      </div>
    </>
  );
}
