import "./AppstorePage.module.css";
import { AppLaunchHeroSection } from "./AppstorePage/sections/AppLaunchHeroSection.jsx";
import { AppScreenshotsSection } from "./AppstorePage/sections/AppScreenshotsSection.jsx";
import { AppTrustSection } from "./AppstorePage/sections/AppTrustSection.jsx";
export default function AppstorePage() {
  return (
    <>
      <main className="appstore-page">
        <AppLaunchHeroSection />

        <AppScreenshotsSection />

        <AppTrustSection />
      </main>
    </>
  );
}
