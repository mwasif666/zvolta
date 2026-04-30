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
      <ScrollController />
      <SiteLayout>
        <Routes>
          {routeEntries
            .filter((entry) => entry.pageId !== "404")
            .map((entry) => (
              <Route
                key={`${entry.pageId}:${entry.paths[0]}`}
                path={entry.paths[0]}
                element={
                  <RoutedPage
                    loadPage={entry.load}
                    pageId={entry.pageId}
                    meta={entry.meta}
                  />
                }
              />
            ))}
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
