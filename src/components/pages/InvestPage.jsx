import { HeroSection } from "./InvestPage/sections/HeroSection.jsx";
import { PassiveIncomeProcessSection } from "./InvestPage/sections/PassiveIncomeProcessSection.jsx";
import { ManagedInvestmentSection } from "./InvestPage/sections/ManagedInvestmentSection.jsx";
import { InvestorFaqSection } from "./InvestPage/sections/InvestorFaqSection.jsx";
import { InvestFormSection } from "./InvestPage/sections/InvestFormSection.jsx";
export default function InvestPage() {
  return (
    <>
      <div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="w-full">
              <HeroSection />
              <PassiveIncomeProcessSection />
              <ManagedInvestmentSection />
              <InvestorFaqSection />
              <InvestFormSection />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
