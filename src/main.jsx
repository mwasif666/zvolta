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

    const refreshScrollAnimations = () => {
      window.ScrollTrigger?.refresh?.();
    };

    const scrollToPosition = (top, behavior = "smooth") => {
      if (window.__zvoltaLenis) {
        window.__zvoltaLenis.scrollTo(top, {
          immediate: behavior === "auto",
        });
      }

      window.scrollTo({ top, left: 0, behavior });
    };

    const scrollToTop = () => {
      scrollToPosition(0, "auto");
      refreshScrollAnimations();
    };

    if (location.hash) {
      const hashId = decodeURIComponent(location.hash.slice(1));
      const scrollToHashTarget = () => {
        const element = document.getElementById(hashId);

        if (!element) {
          return false;
        }

        const top = element.getBoundingClientRect().top + window.scrollY;
        scrollToPosition(top);
        refreshScrollAnimations();
        return true;
      };

      if (scrollToHashTarget()) {
        return;
      }

      const frame = window.requestAnimationFrame(scrollToHashTarget);
      const timers = [
        window.setTimeout(scrollToHashTarget, 80),
        window.setTimeout(scrollToHashTarget, 240),
        window.setTimeout(scrollToHashTarget, 600),
        window.setTimeout(scrollToHashTarget, 1200),
      ];

      return () => {
        window.cancelAnimationFrame(frame);
        timers.forEach((timer) => window.clearTimeout(timer));
      };
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

  useEffect(() => {
    const scrollToHash = (hash) => {
      const hashId = decodeURIComponent(hash.replace(/^#/, ""));
      const element = document.getElementById(hashId);

      if (!element) {
        return false;
      }

      const top = element.getBoundingClientRect().top + window.scrollY;
      if (window.__zvoltaLenis) {
        window.__zvoltaLenis.scrollTo(top);
      }

      window.scrollTo({ top, left: 0, behavior: "smooth" });
      window.ScrollTrigger?.refresh?.();
      return true;
    };

    const handleSamePageHashClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest?.("a[href]");

      if (!link || link.target || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        !url.hash ||
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search
      ) {
        return;
      }

      event.preventDefault();

      const nextLocation = `${url.pathname}${url.search}${url.hash}`;
      const currentLocation = `${window.location.pathname}${window.location.search}${window.location.hash}`;

      if (nextLocation !== currentLocation) {
        window.history.pushState({}, "", nextLocation);
        window.dispatchEvent(new Event("popstate"));
      }

      if (!scrollToHash(url.hash)) {
        window.requestAnimationFrame(() => scrollToHash(url.hash));
        window.setTimeout(() => scrollToHash(url.hash), 120);
        window.setTimeout(() => scrollToHash(url.hash), 360);
        window.setTimeout(() => scrollToHash(url.hash), 800);
      }
    };

    document.addEventListener("click", handleSamePageHashClick, true);

    return () => {
      document.removeEventListener("click", handleSamePageHashClick, true);
    };
  }, []);

  return null;
}

function PageLoaderFallback() {
  return null;
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
