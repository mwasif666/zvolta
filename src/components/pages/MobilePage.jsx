import styles from "./MobilePage.module.css";
import { MobileAppHeroSection } from "./MobilePage/sections/MobileAppHeroSection.jsx";
import { AppScreenshotsSection } from "./MobilePage/sections/AppScreenshotsSection.jsx";
import { AppAccessOptionsSection } from "./MobilePage/sections/AppAccessOptionsSection.jsx";
export default function MobilePage({ routeClassName = "" }) {
  return (
    <>
      <div className={`${styles.routeStyles} ${routeClassName}`}>
        <div className="fixed top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        <main className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-0 pt-28 pb-16 max-w-lg mx-auto">
          <MobileAppHeroSection />
          <AppScreenshotsSection />
          <AppAccessOptionsSection />
        </main>
      </div>
    </>
  );
}
