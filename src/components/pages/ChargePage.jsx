import {
  ScrollTrigger,
  gsap,
  useEffect,
  useRef,
} from "./ChargePage.shared.jsx";
import { AppExperienceSection } from "./ChargePage/sections/AppExperienceSection.jsx";
import { HeroLightSection } from "./ChargePage/sections/HeroLightSection.jsx";
import { HowItWorksSection } from "./ChargePage/sections/HowItWorksSection.jsx";
import { NetworkMapSection } from "./ChargePage/sections/NetworkMapSection.jsx";
import { ReadyToChargeSection } from "./ChargePage/sections/ReadyToChargeSection.jsx";
import { WhereToChargeSection } from "./ChargePage/sections/WhereToChargeSection.jsx";
import { WhyChooseSection } from "./ChargePage/sections/WhyChooseSection.jsx";
export default function ChargePage() {
  const pageRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const refreshTimers = [];
    const refreshScrollTriggers = () => ScrollTrigger.refresh();
    const scheduleRefresh = (delay) => {
      const timer = window.setTimeout(refreshScrollTriggers, delay);
      refreshTimers.push(timer);
    };
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !pageRef.current) {
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.from(".charge-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".chl-visual", {
        opacity: 0,
        y: 32,
        scale: 0.96,
        duration: 0.9,
        delay: 0.16,
        ease: "power3.out",
      });
      gsap.utils.toArray(".charge-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
      gsap.utils.toArray(".charge-stagger").forEach((group) => {
        gsap.fromTo(
          group.children,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    }, pageRef);
    window.requestAnimationFrame(refreshScrollTriggers);
    scheduleRefresh(80);
    scheduleRefresh(320);
    scheduleRefresh(900);
    scheduleRefresh(1800);
    window.addEventListener("load", refreshScrollTriggers, {
      once: true,
    });
    return () => {
      window.removeEventListener("load", refreshScrollTriggers);
      refreshTimers.forEach((timer) => window.clearTimeout(timer));
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div ref={pageRef} className="charge-page font-sans">
        <HeroLightSection />

        <NetworkMapSection />

        <HowItWorksSection />

        <ReadyToChargeSection />

        <WhyChooseSection />

        <WhereToChargeSection />

        <AppExperienceSection />
      </div>
    </>
  );
}
