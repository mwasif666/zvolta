import { PartnerProgramOverviewSection } from "./BecomeChargingPartnerPage/sections/PartnerProgramOverviewSection.jsx";
import { PartnerApplicationFormSection } from "./BecomeChargingPartnerPage/sections/PartnerApplicationFormSection.jsx";
export default function BecomeChargingPartnerPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <PartnerProgramOverviewSection />
      <PartnerApplicationFormSection />
    </main>
  );
}
