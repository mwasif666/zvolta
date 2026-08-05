import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

export function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.__zvoltaLenis = lenis;

    const onRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (window.__zvoltaLenis === lenis) {
        window.__zvoltaLenis = null;
      }

      gsap.ticker.remove(onRaf);
      lenis.destroy();
    };
  }, [enabled]);
}
