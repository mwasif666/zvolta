import { useState } from "react";
import "./ChargerSpecPage.module.css";
import { DecisionSection } from "./ChargerSpecPage/sections/DecisionSection.jsx";
import { EnvironmentSection } from "./ChargerSpecPage/sections/EnvironmentSection.jsx";
import { ThreeKwHero } from "./ChargerSpecPage/sections/ThreeKwHero.jsx";
import { ThreeKwHostWhoBlock } from "./ChargerSpecPage/sections/ThreeKwHostWhoBlock.jsx";
import { ThreeKwQuickSection } from "./ChargerSpecPage/sections/ThreeKwQuickSection.jsx";
import { UseCasesRecommendationFaq } from "./ChargerSpecPage/sections/UseCasesRecommendationFaq.jsx";

export default function ChargerSpecPage({ spec }) {
  const [showHostingSections, setShowHostingSections] = useState(false);

  return (
    <div className="three-page font-sans">
      <ThreeKwHero spec={spec} />
      <ThreeKwQuickSection spec={spec} />
      <EnvironmentSection spec={spec} />
      <DecisionSection spec={spec} />
      <UseCasesRecommendationFaq spec={spec} />
      <ThreeKwHostWhoBlock
        showHostingSections={showHostingSections}
        onShowHostingSections={() => setShowHostingSections(true)}
        onHideHostingSections={() => setShowHostingSections(false)}
      />
    </div>
  );
}
