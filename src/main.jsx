import { Suspense, lazy, useEffect, useLayoutEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./scroll-ownership.css";
import "./styles/commerce.css";
import { SiteLayout } from "./components/SiteLayout";
import { RouteSkeleton } from "./components/layout/RouteSkeleton";
import { PageSeo } from "./components/seo/PageSeo";
import { routeEntries } from "./routes";
import { useLegacyPageRuntime } from "./lib/legacy-page-runtime";
import { useRouteAnimationRefresh } from "./hooks/useRouteAnimationRefresh";
import { useRealtimeUpdates } from "./hooks/useRealtimeUpdates";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { StorefrontSettingsProvider } from "./context/StorefrontSettingsContext";

const ROUTE_SKELETON_MIN_MS = 220;
// Clearance for the floating nav pill so a linked section heading is never
// parked underneath it.
const HASH_SCROLL_OFFSET = 104;
// Routes are lazy-loaded and their imagery keeps reflowing after mount, so the
// hash target is tracked until its offset holds still rather than for a fixed
// number of retries.
const HASH_SCROLL_TIMEOUT_MS = 8000;
const HASH_SCROLL_SETTLE_MS = 400;
const nativeSetTimeout = window.setTimeout.bind(window);

function releaseGlobalScrollLock() {
  document.documentElement.classList.remove("site-scroll-locked");
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("overflow-y");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("overflow-y");
  document.body.style.removeProperty("height");
  document.body.classList.remove("is-scrolling");
}

function setDocumentScrollPosition(top) {
  const nextTop = Math.max(0, Number(top) || 0);
  const scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    scrollingElement.scrollTop = nextTop;
    scrollingElement.scrollLeft = 0;
  }

  // Legacy page CSS/scripts have historically made either html or body the
  // scroll owner. Reset both as a defensive fallback while the route swaps.
  document.documentElement.scrollTop = nextTop;
  document.body.scrollTop = nextTop;
  window.scrollTo({ top: nextTop, left: 0, behavior: "auto" });
}

function getHashTargetTop(hashId) {
  const element = document.getElementById(hashId);

  if (!element) {
    return null;
  }

  return Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - HASH_SCROLL_OFFSET,
  );
}

function alignToHashTarget(hashId) {
  const top = getHashTargetTop(hashId);

  if (top === null) {
    return false;
  }

  setDocumentScrollPosition(top);
  window.ScrollTrigger?.refresh?.();
  return true;
}

/**
 * Keeps the viewport pinned to a hash target while the lazy route mounts and
 * its late assets reflow the page, then stops as soon as the target offset has
 * held still. Any real scroll intent from the reader cancels the tracking.
 */
function trackHashTarget(hashId) {
  let cancelled = false;
  let frame = 0;
  let lastTop = null;
  let stableSince = null;
  const deadline = performance.now() + HASH_SCROLL_TIMEOUT_MS;

  const step = () => {
    if (cancelled) {
      return;
    }

    const now = performance.now();
    const top = getHashTargetTop(hashId);

    if (top !== null) {
      if (lastTop !== null && Math.abs(top - lastTop) < 1) {
        stableSince = stableSince ?? now;
      } else {
        stableSince = null;
      }

      lastTop = top;
      setDocumentScrollPosition(top);
      window.ScrollTrigger?.refresh?.();

      if (stableSince !== null && now - stableSince >= HASH_SCROLL_SETTLE_MS) {
        return;
      }
    }

    if (now >= deadline) {
      return;
    }

    frame = window.requestAnimationFrame(step);
  };

  const cancel = () => {
    cancelled = true;
    window.cancelAnimationFrame(frame);
  };

  const intentEvents = ["wheel", "touchstart", "pointerdown", "keydown"];

  intentEvents.forEach((eventName) => {
    window.addEventListener(eventName, cancel, {
      passive: eventName !== "keydown",
      once: true,
    });
  });

  frame = window.requestAnimationFrame(step);

  return () => {
    cancel();
    intentEvents.forEach((eventName) => {
      window.removeEventListener(eventName, cancel);
    });
  };
}

function loadNotFoundPage() {
  const notFoundRoute =
    routeEntries.find((entry) => entry.pageId === "404") ?? routeEntries[0];

  return notFoundRoute?.load;
}

function ScrollController() {
  const location = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    releaseGlobalScrollLock();

    const refreshScrollAnimations = () => {
      window.ScrollTrigger?.refresh?.();
    };

    const scrollToPosition = (top) => {
      setDocumentScrollPosition(top);
    };

    const scrollToTop = () => {
      scrollToPosition(0);
    };

    if (location.hash) {
      const hashId = decodeURIComponent(location.hash.slice(1));

      // The target belongs to a route chunk that may still be loading. Land at
      // the top of the new page first so the navigation is visible instead of
      // leaving the reader parked on the previous page's footer offset.
      if (!document.getElementById(hashId)) {
        scrollToTop();
      }

      return trackHashTarget(hashId);
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(() => {
      releaseGlobalScrollLock();
      scrollToTop();
      refreshScrollAnimations();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
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
      const hashId = decodeURIComponent(url.hash.replace(/^#/, ""));

      releaseGlobalScrollLock();

      if (nextLocation !== currentLocation) {
        window.history.pushState({}, "", nextLocation);
        window.dispatchEvent(new Event("popstate"));
        // The location change re-runs ScrollController's effect, which owns
        // tracking the target until the layout settles.
        return;
      }

      // Re-clicking the link for the section already in the URL leaves the
      // location untouched, so scroll here instead.
      alignToHashTarget(hashId);
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

  // One shared stream for the whole app; screens react through window events.
  useRealtimeUpdates();

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
        <StorefrontSettingsProvider>
          <AuthProvider>
            <CartProvider>
              <AppRoutes />
            </CartProvider>
          </AuthProvider>
        </StorefrontSettingsProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<AppRouter />);
}
