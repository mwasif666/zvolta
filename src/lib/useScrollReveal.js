import { useEffect } from 'react';

export function useScrollReveal(enabled, pathname) {
  useEffect(() => {
    if (!enabled) return;

    const observed = new Set();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
            io.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = (el) => {
      if (observed.has(el) || el.classList.contains('scroll-revealed')) return;
      observed.add(el);
      el.classList.add('scroll-reveal');
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll(
        '.legacy-page-shell section:not([data-no-reveal]), .animate-section'
      ).forEach(observe);
    };

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    scan();

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [enabled, pathname]);
}
