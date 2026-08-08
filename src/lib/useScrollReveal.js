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
    let scanFrame = 0;
    let mutationTarget = null;

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
      if (animatedElements.has(el)) {
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

    const routeSelector = `.legacy-page-shell[data-route-key="${CSS.escape(
      pathname,
    )}"]`;

    const mo = new MutationObserver(() => {
      if (scanFrame) {
        return;
      }

      scanFrame = window.requestAnimationFrame(scan);
    });

    const connectMutationObserver = (target) => {
      if (!target || mutationTarget === target) {
        return;
      }

      mo.disconnect();
      mutationTarget = target;
      mo.observe(target, { childList: true, subtree: true });
    };

    function scan() {
      scanFrame = 0;
      const routeRoot = document.querySelector(routeSelector);

      if (!routeRoot) {
        connectMutationObserver(document.body);
        return;
      }

      connectMutationObserver(routeRoot);
      routeRoot
        .querySelectorAll("section:not([data-no-reveal]), .animate-section")
        .forEach(observe);
    }

    connectMutationObserver(document.body);
    scanFrame = window.requestAnimationFrame(scan);

    return () => {
      if (scanFrame) {
        window.cancelAnimationFrame(scanFrame);
      }
      io.disconnect();
      mo.disconnect();
      animatedElements.forEach((element) => {
        element.classList.remove("scroll-reveal", "scroll-revealed");
      });
    };
  }, [enabled, pathname]);
}
