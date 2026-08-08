import { TermsAndConditionsSection } from "./PolicyPage/sections/TermsAndConditionsSection.jsx";
import { ReturnsPolicySection } from "./PolicyPage/sections/ReturnsPolicySection.jsx";
import { StandardServicePolicySection } from "./PolicyPage/sections/StandardServicePolicySection.jsx";
import { PrivacyPolicySection } from "./PolicyPage/sections/PrivacyPolicySection.jsx";
export default function PolicyPage() {
  return (
    <>
      <div className="policy-page bg-white text-[#2a3b1e]">
        <div className="gradient-blob-1" />
        <div className="gradient-blob-2" />
        <div className="gradient-blob-3" />

        <main className="main-container relative container mx-auto px-4 pt-16 pb-24 lg:pt-20 lg:pb-32">
          <div className="max-w-4xl mx-auto page-content">
            <TermsAndConditionsSection />

            <ReturnsPolicySection />

            <StandardServicePolicySection />

            <PrivacyPolicySection />
          </div>
        </main>
      </div>
    </>
  );
}
