import { ScrollTrigger, gsap, useEffect, useRef } from "./TeamPage.shared.jsx";
import { TeamHeroSection } from "./TeamPage/sections/TeamHeroSection.jsx";
import { CareersCtaSection } from "./TeamPage/sections/CareersCtaSection.jsx";
import { MeetTheTeamSection } from "./TeamPage/sections/MeetTheTeamSection.jsx";
import { HowWeWorkSection } from "./TeamPage/sections/HowWeWorkSection.jsx";
import { BehindTheWorkSection } from "./TeamPage/sections/BehindTheWorkSection.jsx";
import { BuiltWithPeopleWhoCareSection } from "./TeamPage/sections/BuiltWithPeopleWhoCareSection.jsx";
export default function TeamPage() {
  const pageRef = useRef(null);
  const processLineRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !pageRef.current) {
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.from(".team-hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".team-hero-card", {
        opacity: 0,
        y: 24,
        rotate: -1.5,
        duration: 0.75,
        stagger: 0.08,
        delay: 0.12,
        ease: "power3.out",
      });
      gsap.utils.toArray(".team-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 22,
          duration: 0.68,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
          },
        });
      });
      gsap.utils.toArray(".team-stagger").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.055,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 84%",
          },
        });
      });
      if (processLineRef.current) {
        gsap.fromTo(
          processLineRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processLineRef.current,
              start: "top 78%",
            },
          },
        );
      }
    }, pageRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={pageRef} className="team-page font-sans">
        <TeamHeroSection />

        <MeetTheTeamSection />

        <HowWeWorkSection processLineRef={processLineRef} />

        <BehindTheWorkSection />

        <BuiltWithPeopleWhoCareSection />

        <CareersCtaSection />
      </div>
    </>
  );
}
