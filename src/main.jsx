import { Suspense, lazy, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { SiteLayout } from "./components/SiteLayout";
import { routeEntries } from "./routes";
import { useLegacyPageRuntime } from "./lib/legacy-page-runtime";

function loadNotFoundPage() {
  const notFoundRoute =
    routeEntries.find((entry) => entry.pageId === "404") ?? routeEntries[0];

  return notFoundRoute?.load;
}

function ScrollController() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.ScrollTrigger?.refresh?.();
    };

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView();
        window.ScrollTrigger?.refresh?.();
        return;
      }
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    const timers = [
      window.setTimeout(scrollToTop, 80),
      window.setTimeout(scrollToTop, 240),
    ];

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function PageLoaderFallback() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-z-black">
      <div className="absolute top-0 left-0 h-[51%] w-full border-b border-white/5 bg-z-black" />
      <div className="absolute bottom-0 left-0 h-[51%] w-full border-t border-white/5 bg-z-black" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="absolute inset-0 scale-0 rounded-full bg-z-green/10 blur-[100px] animate-pulse-slow" />
        <div className="relative mb-10 flex h-24 w-24 items-center justify-center md:h-32 md:w-32">
          <img
            src="/img/symbol logo.png"
            className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.3)]"
            alt="ZVolta Loading"
          />
        </div>
        <div className="relative mb-4 h-[2px] w-64 overflow-hidden rounded-full bg-zinc-800">
          <div className="absolute left-0 top-0 h-full w-1/2 animate-pulse bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-500">
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}

function RoutedPage({ loadPage, pageId, meta }) {
  const PageComponent = useMemo(() => lazy(loadPage), [loadPage]);

  return (
    <Suspense fallback={<PageLoaderFallback />}>
      <MountedPage pageId={pageId} meta={meta} PageComponent={PageComponent} />
    </Suspense>
  );
}

function MountedPage({ pageId, meta, PageComponent }) {
  useLegacyPageRuntime(pageId);

  useEffect(() => {
    document.documentElement.dataset.page = pageId;
  }, [pageId]);

  useEffect(() => {
    if (meta?.title) {
      document.title = meta.title;
    }

    if (meta?.description) {
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute("content", meta.description);
      }
    }
  }, [meta]);

  return (
    <div className="legacy-page-shell" data-page-id={pageId}>
      <PageComponent />
    </div>
  );
}

function AppRouter() {
  const notFoundLoader = loadNotFoundPage();

  return (
    <BrowserRouter>
      <ScrollController />
      <SiteLayout>
        <Routes>
          {routeEntries
            .filter((entry) => entry.pageId !== "404")
            .flatMap((entry) =>
              entry.paths.map((path) => (
                <Route
                  key={`${entry.pageId}:${path}`}
                  path={path}
                  element={
                    <RoutedPage
                      loadPage={entry.load}
                      pageId={entry.pageId}
                      meta={entry.meta}
                    />
                  }
                />
              )),
            )}
          {notFoundLoader ? (
            <Route
              path="*"
              element={
                <RoutedPage
                  loadPage={notFoundLoader}
                  pageId="404"
                  meta={
                    routeEntries.find((entry) => entry.pageId === "404")?.meta
                  }
                />
              }
            />
          ) : null}
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<AppRouter />);
}
