// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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
    expect(container.textContent).toMatch(/Copyright © \d{4} ZVolta/);
  });

  it("keeps Shop and Cart out of the primary and expanded navigation", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteLayout>
          <div>Host content</div>
        </SiteLayout>
      </MemoryRouter>,
    );

    const primaryNavigation = screen.getByRole("navigation", { name: "Main" });
    expect(primaryNavigation.textContent).not.toContain("Shop");
    expect(primaryNavigation.textContent).not.toContain("Cart");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const expandedNavigation = screen.getByRole("dialog", {
      name: "Site navigation",
    });
    expect(expandedNavigation.textContent).not.toContain("Shop");
    expect(expandedNavigation.textContent).not.toContain("Cart");
  });
});
