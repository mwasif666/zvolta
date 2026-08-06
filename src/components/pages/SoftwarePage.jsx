import {
  ScrollTrigger,
  gsap,
  useEffect,
  useRef,
} from "./SoftwarePage.shared.jsx";
import { ControlNetwork } from "./SoftwarePage/sections/ControlNetwork.jsx";
import { EveryChargingModel } from "./SoftwarePage/sections/EveryChargingModel.jsx";
import { EverythingConnected } from "./SoftwarePage/sections/EverythingConnected.jsx";
import { ImpactIntelligence } from "./SoftwarePage/sections/ImpactIntelligence.jsx";
import { SoftwareHeroSection } from "./SoftwarePage/sections/SoftwareHeroSection.jsx";
import { NetworkGrowthSection } from "./SoftwarePage/sections/NetworkGrowthSection.jsx";
export default function SoftwarePage() {
  const pageRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !pageRef.current) {
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.from(".software-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".software-hero-visual", {
        opacity: 0,
        y: 32,
        scale: 0.97,
        duration: 0.9,
        delay: 0.18,
        ease: "power3.out",
      });
      gsap.from(".software-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        delay: 0.55,
        ease: "power2.out",
      });
      gsap.utils.toArray(".software-reveal").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 84%",
          once: true,
          onEnter: () => {
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
                clearProps: "opacity,transform",
              },
            );
          },
        });
      });
      gsap.utils.toArray(".software-stagger").forEach((group) => {
        ScrollTrigger.create({
          trigger: group,
          start: "top 84%",
          once: true,
          onEnter: () => {
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
                stagger: 0.07,
                ease: "power3.out",
                clearProps: "opacity,transform",
              },
            );
          },
        });
      });
      ScrollTrigger.refresh();
    }, pageRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={pageRef} className="software-page font-sans">
        <SoftwareHeroSection />

        <NetworkGrowthSection />

        <EverythingConnected />

        <ControlNetwork />

        <ImpactIntelligence />

        <EveryChargingModel />
      </div>
    </>
  );
}
