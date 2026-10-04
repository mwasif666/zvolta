import styles from "./AppstorePage.module.css";
import { AppLaunchHeroSection } from "./AppstorePage/sections/AppLaunchHeroSection.jsx";
import { AppScreenshotsSection } from "./AppstorePage/sections/AppScreenshotsSection.jsx";
// The trust panel is intentionally omitted from the shorter mobile-app landing flow.
export default function AppstorePage({ routeClassName = "" }) {
  return (
    <>
      <main className={`appstore-page ${styles.routeStyles} ${routeClassName}`}>
        <AppLaunchHeroSection />

        <AppScreenshotsSection />
      </main>
    </>
  );
}
