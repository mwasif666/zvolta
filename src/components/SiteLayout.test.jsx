// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SiteLayout } from "./SiteLayout";

beforeEach(() => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: false });
});

afterEach(cleanup);

describe("SiteLayout", () => {
  it("mounts exactly one shared footer on the homepage", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteLayout>
          <div>Homepage content</div>
        </SiteLayout>
      </MemoryRouter>,
    );

    expect(container.querySelectorAll(".site-footer")).toHaveLength(1);
    expect(container.textContent).toContain("Copyright © 2026 Zvolta");
  });
});
