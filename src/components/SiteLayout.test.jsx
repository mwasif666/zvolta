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

  it("keeps Shop and Cart in the primary nav and out of the expanded menu", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SiteLayout>
          <div>Host content</div>
        </SiteLayout>
      </MemoryRouter>,
    );

    const primaryNavigation = screen.getByRole("navigation", { name: "Main" });
    expect(primaryNavigation.textContent).toContain("Shop");
    expect(primaryNavigation.textContent).not.toContain("DC Chargers");
    // Regression: Shop used to display "CITA EV" twice.
    const dockLinks = [...primaryNavigation.querySelectorAll(".dock-pill-link")];
    expect(dockLinks.map((link) => link.textContent.trim())).toEqual([
      "Hosting",
      "Charging",
      "Software",
      "Shop",
      "CITA EV",
    ]);
    expect(primaryNavigation.querySelectorAll('a[href="/cita-ev-chargers"]')).toHaveLength(1);
    expect(primaryNavigation.querySelectorAll('a[href="/products"]')).toHaveLength(1);
    expect(
      screen.getByRole("link", { name: "Cart, 0 items" }).getAttribute("href"),
    ).toBe("/cart");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const expandedNavigation = screen.getByRole("dialog", {
      name: "Site navigation",
    });
    expect(expandedNavigation.textContent).toContain("Hosting");
    expect(expandedNavigation.textContent).not.toContain("Shop");
    expect(expandedNavigation.textContent).not.toContain("DC Chargers");
    expect(expandedNavigation.textContent).not.toContain("Cart");
  });
  it("only highlights Shop when on /products (not CITA EV)", () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <SiteLayout><div>Shop content</div></SiteLayout>
      </MemoryRouter>,
    );
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(nav.querySelector('a[href="/products"]').getAttribute("aria-current")).toBe("page");
    expect(nav.querySelector('a[href="/cita-ev-chargers"]').getAttribute("aria-current")).not.toBe("page");
  });

  it("highlights only CITA EV when navigating from Shop", () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <SiteLayout><div>Shop content</div></SiteLayout>
      </MemoryRouter>,
    );
    const nav = screen.getByRole("navigation", { name: "Main" });
    fireEvent.click(nav.querySelector('a[href="/cita-ev-chargers"]'));
    expect(nav.querySelectorAll('a[href="/cita-ev-chargers"]')).toHaveLength(1);
    expect(nav.querySelector('a[href="/cita-ev-chargers"]').getAttribute("aria-current")).toBe("page");
    expect(nav.querySelector('a[href="/products"]').getAttribute("aria-current")).not.toBe("page");
  });

});
