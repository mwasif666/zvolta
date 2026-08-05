import { useLayoutEffect } from "react";

export function useScrollReveal(enabled, pathname) {
  useLayoutEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const observed = new Set();
    const animatedElements = new Set();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-revealed");
            io.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = (el) => {
      if (observed.has(el)) {
        return;
      }

      animatedElements.add(el);
      el.classList.remove("scroll-revealed");
      el.classList.add("scroll-reveal");

      if (prefersReducedMotion) {
        el.classList.add("scroll-revealed");
        return;
      }

      observed.add(el);
      io.observe(el);
    };

    const scan = () => {
      document
        .querySelectorAll(
          `.legacy-page-shell[data-route-key="${CSS.escape(pathname)}"] section:not([data-no-reveal]),
         .legacy-page-shell[data-route-key="${CSS.escape(pathname)}"] .animate-section`,
        )
        .forEach(observe);
    };

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    const frame = window.requestAnimationFrame(scan);

    return () => {
      window.cancelAnimationFrame(frame);
      io.disconnect();
      mo.disconnect();
      animatedElements.forEach((element) => {
        element.classList.remove("scroll-reveal", "scroll-revealed");
      });
    };
  }, [enabled, pathname]);
}
