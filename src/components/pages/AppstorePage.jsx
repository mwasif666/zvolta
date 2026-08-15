import styles from "./AppstorePage.module.css";
import { AppLaunchHeroSection } from "./AppstorePage/sections/AppLaunchHeroSection.jsx";
import { AppScreenshotsSection } from "./AppstorePage/sections/AppScreenshotsSection.jsx";
import { AppTrustSection } from "./AppstorePage/sections/AppTrustSection.jsx";
export default function AppstorePage({ routeClassName = "" }) {
  return (
    <>
      <main
        className={`appstore-page ${styles.routeStyles} ${routeClassName}`}
      >
        <AppLaunchHeroSection />

        <AppScreenshotsSection />

        <AppTrustSection />
      </main>
    </>
  );
}
