import { Suspense, lazy, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import { SiteLayout } from "./components/SiteLayout";
import { routeEntries } from "./routes";
import { useLegacyPageRuntime } from "./lib/legacy-page-runtime";

function loadNotFoundPage() {
  const notFoundRoute =
    routeEntries.find((entry) => entry.pageId === "404.html") ??
    routeEntries[0];

  return notFoundRoute?.load;
}

function getCanonicalPathname(pathname) {
  if (!pathname) {
    return pathname;
  }

  if (pathname === "/index.html") {
    return "/";
  }

  const routeEntry = routeEntries.find((entry) =>
    entry.paths.some(
      (candidate) => candidate.toLowerCase() === pathname.toLowerCase(),
    ),
  );

  return routeEntry?.paths[0] ?? pathname;
}

function normalizeInternalPath(url) {
  const canonicalPathname = getCanonicalPathname(url.pathname);
  return `${canonicalPathname}${url.search}${url.hash}`;
}

function shouldHandleClientNavigation(anchor, event) {
  if (!anchor) {
    return false;
  }

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    anchor.target === "_blank" ||
    anchor.hasAttribute("download") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  const rawHref = anchor.getAttribute("href");

  if (!rawHref || rawHref.startsWith("#")) {
    return false;
  }

  if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) {
    return false;
  }

  const resolvedUrl = new URL(anchor.href, window.location.href);

  if (resolvedUrl.origin !== window.location.origin) {
    return false;
  }

  return (
    /\.(html)?$/i.test(resolvedUrl.pathname) ||
    routeEntries.some((entry) => entry.paths.includes(resolvedUrl.pathname))
  );
}

function NavigationController() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const canonicalPath = getCanonicalPathname(location.pathname);

    if (canonicalPath !== location.pathname) {
      navigate(`${canonicalPath}${location.search}${location.hash}`, {
        replace: true,
      });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest("a");

      if (!shouldHandleClientNavigation(anchor, event)) {
        return;
      }

      const nextUrl = new URL(anchor.href, window.location.href);
      const nextPath = normalizeInternalPath(nextUrl);

      event.preventDefault();
      navigate(nextPath);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return null;
}

function ScrollController() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView();
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function RoutedPage({ loadPage, pageId, meta }) {
  const PageComponent = useMemo(() => lazy(loadPage), [loadPage]);

  return (
    <Suspense fallback={null}>
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
      <NavigationController />
      <ScrollController />
      <SiteLayout>
        <Routes>
          {routeEntries
            .filter((entry) => entry.pageId !== "404.html")
            .flatMap((entry) =>
              entry.paths.map((routePath) => (
                <Route
                  key={`${entry.pageId}:${routePath}`}
                  path={routePath}
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
                  pageId="404.html"
                  meta={
                    routeEntries.find((entry) => entry.pageId === "404.html")
                      ?.meta
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
