import { Suspense, lazy, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { SiteLayout } from "./components/SiteLayout";
import { RouteSkeleton } from "./components/layout/RouteSkeleton";
import { PageSeo } from "./components/seo/PageSeo";
import { routeEntries } from "./routes";
import { useLegacyPageRuntime } from "./lib/legacy-page-runtime";
import { useRouteAnimationRefresh } from "./hooks/useRouteAnimationRefresh";

const ROUTE_SKELETON_MIN_MS = 220;
const nativeSetTimeout = window.setTimeout.bind(window);
const nativeClearTimeout = window.clearTimeout.bind(window);

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

    const scrollToPosition = (top, behavior = "auto") => {
      window.scrollTo({ top, left: 0, behavior });
    };

    const scrollToTop = () => {
      scrollToPosition(0, "auto");
    };

    if (location.hash) {
      const hashId = decodeURIComponent(location.hash.slice(1));
      let hasScrolled = false;
      let cancelledByUser = false;

      const scrollToHashTarget = () => {
        if (hasScrolled || cancelledByUser) {
          return hasScrolled;
        }

        const element = document.getElementById(hashId);

        if (!element) {
          return false;
        }

        const top = element.getBoundingClientRect().top + window.scrollY;
        scrollToPosition(top);
        refreshScrollAnimations();
        hasScrolled = true;
        return true;
      };

      if (scrollToHashTarget()) {
        return undefined;
      }

      const frame = window.requestAnimationFrame(scrollToHashTarget);
      const timers = [80, 240, 600, 1200].map((delay) =>
        nativeSetTimeout(scrollToHashTarget, delay),
      );
      const cancelRetriesForUser = () => {
        cancelledByUser = true;
        window.cancelAnimationFrame(frame);
        timers.forEach((timer) => nativeClearTimeout(timer));
      };
      const intentEvents = ["wheel", "touchstart", "pointerdown", "keydown"];

      intentEvents.forEach((eventName) => {
        window.addEventListener(eventName, cancelRetriesForUser, {
          passive: eventName !== "keydown",
          once: true,
        });
      });

      return () => {
        window.cancelAnimationFrame(frame);
        timers.forEach((timer) => nativeClearTimeout(timer));
        intentEvents.forEach((eventName) => {
          window.removeEventListener(eventName, cancelRetriesForUser);
        });
      };
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(refreshScrollAnimations);

    return () => {
      window.cancelAnimationFrame(frame);
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
      window.scrollTo({ top, left: 0, behavior: "auto" });
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

      let hasScrolled = scrollToHash(url.hash);
      const retryScroll = () => {
        if (!hasScrolled) {
          hasScrolled = scrollToHash(url.hash);
        }
      };

      if (!hasScrolled) {
        window.requestAnimationFrame(retryScroll);
        [120, 360, 800].forEach((delay) =>
          nativeSetTimeout(retryScroll, delay),
        );
      }
    };

    document.addEventListener("click", handleSamePageHashClick, true);

    return () => {
      document.removeEventListener("click", handleSamePageHashClick, true);
    };
  }, []);

  return null;
}

function RoutedPage({ loadPage, pageId, meta }) {
  const PageComponent = useMemo(
    () =>
      lazy(async () => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const minimumDelay = prefersReducedMotion ? 0 : ROUTE_SKELETON_MIN_MS;
        const [pageModule] = await Promise.all([
          loadPage(),
          new Promise((resolve) => nativeSetTimeout(resolve, minimumDelay)),
        ]);

        return pageModule;
      }),
    [loadPage],
  );

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <MountedPage pageId={pageId} meta={meta} PageComponent={PageComponent} />
    </Suspense>
  );
}

function MountedPage({ pageId, meta, PageComponent }) {
  const location = useLocation();
  const routeKey = `${location.pathname}${location.search}`;
  useLegacyPageRuntime(pageId, meta?.disableLegacyRuntime !== true);
  useRouteAnimationRefresh(routeKey);

  useEffect(() => {
    document.documentElement.dataset.page = pageId;
  }, [pageId]);

  return (
    <div
      className="legacy-page-shell"
      data-page-id={pageId}
      data-route-key={routeKey}
    >
      <PageSeo meta={meta} pathname={location.pathname} />
      <PageComponent />
    </div>
  );
}

function AppRoutes() {
  const notFoundLoader = loadNotFoundPage();
  const location = useLocation();

  return (
    <>
      <ScrollController />
      <SiteLayout>
        <Routes
          location={location}
          key={`${location.pathname}${location.search}`}
        >
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
    </>
  );
}

function AppRouter() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<AppRouter />);
}
