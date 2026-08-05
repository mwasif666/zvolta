import { useEffect } from "react";

export function useRouteAnimationRefresh(routeKey) {
  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const frames = [];
    const imageCleanups = [];

    const refresh = () => {
      if (cancelled) {
        return;
      }

      window.ScrollTrigger?.refresh?.();
      window.dispatchEvent(
        new CustomEvent("zvolta:animations-refreshed", {
          detail: { routeKey },
        }),
      );
    };

    const scheduleRefresh = () => {
      frames.push(window.requestAnimationFrame(refresh));
      [80, 240, 600, 1200].forEach((delay) => {
        timers.push(window.setTimeout(refresh, delay));
      });
    };

    const routeRoot = document.querySelector(
      `.legacy-page-shell[data-route-key="${CSS.escape(routeKey)}"]`,
    );

    routeRoot?.querySelectorAll("img").forEach((image) => {
      if (image.complete) {
        return;
      }

      image.addEventListener("load", refresh, { once: true });
      image.addEventListener("error", refresh, { once: true });
      imageCleanups.push(() => {
        image.removeEventListener("load", refresh);
        image.removeEventListener("error", refresh);
      });
    });

    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener("zvolta:page-ready", scheduleRefresh);
    scheduleRefresh();

    return () => {
      cancelled = true;
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      timers.forEach((timer) => window.clearTimeout(timer));
      imageCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("zvolta:page-ready", scheduleRefresh);
    };
  }, [routeKey]);
}
