import { InvestmentOverviewSection } from "./InvestFormPage/sections/InvestmentOverviewSection.jsx";
import { InvestorInterestFormSection } from "./InvestFormPage/sections/InvestorInterestFormSection.jsx";
export default function InvestFormPage() {
  return (
    <main>
      <div className="flex flex-wrap lg:flex-nowrap min-h-screen">
        <InvestmentOverviewSection />
        <InvestorInterestFormSection />
      </div>
    </main>
  );
}
