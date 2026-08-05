// @vitest-environment jsdom
import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SiteRouteLoader } from "./SiteRouteLoader";

beforeEach(() => {
  vi.useFakeTimers();
  window.matchMedia = vi.fn().mockReturnValue({ matches: false });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("SiteRouteLoader", () => {
  it("continues past the loading phase and unmounts", () => {
    const { container } = render(<SiteRouteLoader />);

    expect(screen.getByText("INITIALIZING...")).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(320);
    });

    expect(screen.getByText("LOADING ASSETS...")).toBeTruthy();
    expect(container.querySelector(".site-route-loader")).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1080);
    });

    expect(container.querySelector(".site-route-loader")).toBeNull();
  });
});
