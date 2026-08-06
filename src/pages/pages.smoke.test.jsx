import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { routeEntries } from "../routes";

describe("page route smoke tests", () => {
  test.each(routeEntries)("renders $pageId without crashing", async (route) => {
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
  });
});
