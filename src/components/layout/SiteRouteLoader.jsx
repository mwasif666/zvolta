import { useEffect, useState } from "react";

const TOTAL_DURATION_MS = 1400;
const EXIT_DURATION_MS = 450;
let hasShownSiteLoader = false;

export function SiteRouteLoader() {
  // Keep this decision stable for the component's whole lifetime. Reading the
  // module flag on every render used to flip this value after the first timer
  // update, which made React run the effect cleanup and cancel the remaining
  // exit timers. The loader would then stay at "LOADING ASSETS..." forever.
  const [shouldShowLoader] = useState(() => !hasShownSiteLoader);
  const [loaderState, setLoaderState] = useState({
    isMounted: shouldShowLoader,
    isExiting: false,
    phase: "initializing",
    status: "INITIALIZING...",
  });

  useEffect(() => {
    if (!shouldShowLoader) {
      return undefined;
    }

    const timers = [];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const totalDuration = reducedMotion ? 0 : TOTAL_DURATION_MS;
    const exitDuration = reducedMotion ? 0 : EXIT_DURATION_MS;

    hasShownSiteLoader = true;

    const updateAfter = (callback, delay) => {
      timers.push(window.setTimeout(callback, Math.max(0, delay)));
    };

    updateAfter(
      () =>
        setLoaderState((current) => ({
          ...current,
          phase: "loading",
          status: "LOADING ASSETS...",
        })),
      reducedMotion ? 0 : 320,
    );
    updateAfter(
      () =>
        setLoaderState((current) => ({
          ...current,
          phase: "ready",
          status: "READY",
        })),
      totalDuration - exitDuration - 100,
    );
    updateAfter(
      () =>
        setLoaderState((current) => ({
          ...current,
          isExiting: true,
          phase: "ready",
          status: "READY",
        })),
      totalDuration - exitDuration,
    );
    updateAfter(
      () => setLoaderState((current) => ({ ...current, isMounted: false })),
      totalDuration,
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [shouldShowLoader]);

  if (!loaderState.isMounted) {
    return null;
  }

  return (
    <div
      className={`site-route-loader is-${loaderState.phase} fixed inset-0 z-[12000] flex flex-col items-center justify-center overflow-hidden bg-transparent ${
        loaderState.isExiting ? "is-exiting" : ""
      }`}
      aria-hidden="true"
    >
      <div className="site-route-loader-blind site-route-loader-blind-top absolute left-0 top-0 h-[51%] w-full border-b border-white/5 bg-z-black" />
      <div className="site-route-loader-blind site-route-loader-blind-bottom absolute bottom-0 left-0 h-[51%] w-full border-t border-white/5 bg-z-black" />
      <div className="site-route-loader-content relative z-10 flex flex-col items-center">
        <div className="site-route-loader-glow absolute inset-0 rounded-full bg-z-green/10 blur-[100px]" />
        <div className="relative mb-10 flex h-24 w-24 items-center justify-center md:h-32 md:w-32">
          <img
            src="/img/symbol logo.png"
            className="site-route-loader-logo h-full w-full object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.3)]"
            alt=""
            draggable="false"
          />
        </div>
        <div className="site-route-loader-bar-track relative mb-4 h-[2px] w-64 overflow-hidden rounded-full bg-zinc-800">
          <div className="site-route-loader-bar absolute left-0 top-0 h-full bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]" />
        </div>
        <div className="h-6 overflow-hidden font-mono text-[10px] uppercase tracking-[0.4em] text-gray-500">
          {loaderState.status}
        </div>
      </div>
    </div>
  );
}
