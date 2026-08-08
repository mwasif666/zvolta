import { useEffect } from "react";

export function useRouteAnimationRefresh(routeKey) {
  useEffect(() => {
    let cancelled = false;
    let refreshFrame = 0;
    const timers = [];
    const imageCleanups = [];

    const refresh = () => {
      refreshFrame = 0;

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

    const requestRefresh = () => {
      if (cancelled || refreshFrame) {
        return;
      }

      refreshFrame = window.requestAnimationFrame(refresh);
    };

    const scheduleRefresh = () => {
      requestRefresh();
      [180, 700].forEach((delay) => {
        timers.push(window.setTimeout(requestRefresh, delay));
      });
    };

    const routeRoot = document.querySelector(
      `.legacy-page-shell[data-route-key="${CSS.escape(routeKey)}"]`,
    );

    routeRoot?.querySelectorAll("img").forEach((image) => {
      if (image.complete) {
        return;
      }

      image.addEventListener("load", requestRefresh, { once: true });
      image.addEventListener("error", requestRefresh, { once: true });
      imageCleanups.push(() => {
        image.removeEventListener("load", requestRefresh);
        image.removeEventListener("error", requestRefresh);
      });
    });

    document.fonts?.ready.then(requestRefresh).catch(() => {});
    window.addEventListener("zvolta:page-ready", scheduleRefresh);
    scheduleRefresh();

    return () => {
      cancelled = true;
      if (refreshFrame) {
        window.cancelAnimationFrame(refreshFrame);
      }
      timers.forEach((timer) => window.clearTimeout(timer));
      imageCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("zvolta:page-ready", scheduleRefresh);
    };
  }, [routeKey]);
}
