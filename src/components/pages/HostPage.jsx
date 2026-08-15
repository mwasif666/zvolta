import {
  AnimatePresence,
  ShutterExpand,
  YoutubeReelsSection,
  hostWhereLocations,
  useMemo,
  useState,
} from "./HostPage.shared.jsx";
import { HeroSection } from "./HostPage/sections/HeroSection.jsx";
import { ChargersSection } from "./HostPage/sections/ChargersSection.jsx";
import { WhySection } from "./HostPage/sections/WhySection.jsx";
import { RoiSection } from "./HostPage/sections/RoiSection.jsx";
import { HowSection } from "./HostPage/sections/HowSection.jsx";
import { InstallationOptionsSection } from "./HostPage/sections/InstallationOptionsSection.jsx";
import { RequirementsSection } from "./HostPage/sections/RequirementsSection.jsx";
import { WhoSection } from "./HostPage/sections/WhoSection.jsx";
import { PartnersSection } from "./HostPage/sections/PartnersSection.jsx";
import { StartHostingSection } from "./HostPage/sections/StartHostingSection.jsx";
import { RealStoriesSection } from "./HostPage/sections/RealStoriesSection.jsx";
export default function HostPage({ routeClassName = "" }) {
  const [chargerCount, setChargerCount] = useState(2);
  const [unitPrice, setUnitPrice] = useState(120);
  const [usage, setUsage] = useState(8);
  const [showRoiCalculator, setShowRoiCalculator] = useState(false);
  const [showHostingSections, setShowHostingSections] = useState(false);
  const [showInstallationOptions, setShowInstallationOptions] = useState(false);
  const [activeWhereIndex, setActiveWhereIndex] = useState(0);
  const [wherePanelMode, setWherePanelMode] = useState("benefits");
  const monthlyEarnings = useMemo(
    () => Math.max(0, chargerCount * unitPrice * usage * 30),
    [chargerCount, unitPrice, usage],
  );
  const activeWhereLocation =
    hostWhereLocations[activeWhereIndex] ?? hostWhereLocations[0];
  const activeWherePanel = activeWhereLocation[wherePanelMode];
  return (
    <>
      <div className={`host-page font-sans ${routeClassName}`}>
        <HeroSection />

        <ChargersSection
          setShowInstallationOptions={setShowInstallationOptions}
          showInstallationOptions={showInstallationOptions}
        />

        <AnimatePresence initial={false}>
          {showInstallationOptions ? (
            <ShutterExpand key="installation-options">
              <InstallationOptionsSection
                onCollapse={() => setShowInstallationOptions(false)}
              />
            </ShutterExpand>
          ) : null}
        </AnimatePresence>

        <WhySection
          setShowRoiCalculator={setShowRoiCalculator}
          showRoiCalculator={showRoiCalculator}
        />

        <AnimatePresence initial={false}>
          {showRoiCalculator ? (
            <ShutterExpand key="roi-calculator">
              <RoiSection
                chargerCount={chargerCount}
                monthlyEarnings={monthlyEarnings}
                setChargerCount={setChargerCount}
                setShowRoiCalculator={setShowRoiCalculator}
                setUnitPrice={setUnitPrice}
                setUsage={setUsage}
                unitPrice={unitPrice}
                usage={usage}
              />
            </ShutterExpand>
          ) : null}
        </AnimatePresence>

        <HowSection />

        <RequirementsSection
          activeWhereIndex={activeWhereIndex}
          activeWhereLocation={activeWhereLocation}
          activeWherePanel={activeWherePanel}
          setActiveWhereIndex={setActiveWhereIndex}
          setWherePanelMode={setWherePanelMode}
          wherePanelMode={wherePanelMode}
        />

        <WhoSection
          setShowHostingSections={setShowHostingSections}
          showHostingSections={showHostingSections}
        />

        <AnimatePresence initial={false}>
          {showHostingSections ? (
            <ShutterExpand key="hosting-sections">
              <PartnersSection
                setShowHostingSections={setShowHostingSections}
              />

              <RealStoriesSection />
            </ShutterExpand>
          ) : null}
        </AnimatePresence>
        <StartHostingSection />

        <YoutubeReelsSection />
      </div>
    </>
  );
}
