import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { routeEntries } from "../routes";

describe("page route smoke tests", () => {
  // Redirect-only routes are exercised with a client router in dc-chargers/index.test.jsx.
  test.each(routeEntries.filter((route) => route.pageId !== "dc-chargers"))(
    "renders $pageId without crashing",
    async (route) => {
      const pageModule = await route.load();
      const Page = pageModule.default;

      const html = renderToString(
        <HelmetProvider>
          <MemoryRouter initialEntries={[route.paths[0]]}>
            <Page />
          </MemoryRouter>
        </HelmetProvider>,
      );

      expect(html.length).toBeGreaterThan(40);
    },
  );
});
