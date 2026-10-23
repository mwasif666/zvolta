// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import { SkeletonImage } from "./SkeletonImage";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

test("shows a skeleton until an image loads and starts again for a different image", () => {
  const view = render(<SkeletonImage src="/charger-a.png" alt="Charger" />);
  expect(screen.getByRole("status", { name: "Loading image" })).toBeTruthy();
  fireEvent.load(screen.getByAltText("Charger"));
  expect(screen.queryByRole("status")).toBeNull();
  view.rerender(<SkeletonImage src="/charger-b.png" alt="Charger" />);
  expect(screen.getByRole("status", { name: "Loading image" })).toBeTruthy();
  fireEvent.load(screen.getByAltText("Charger"));
  expect(screen.queryByRole("status")).toBeNull();
});

test("an image failure ends loading rather than leaving an endless shimmer", () => {
  const onError = vi.fn();
  render(<SkeletonImage src="/missing.png" alt="Charger" onError={onError} />);
  fireEvent.error(screen.getByAltText("Charger"));
  expect(screen.queryByRole("status")).toBeNull();
  expect(onError).toHaveBeenCalledOnce();
});

test("already cached images do not keep a loading skeleton", () => {
  vi.spyOn(HTMLImageElement.prototype, "complete", "get").mockReturnValue(true);
  render(<SkeletonImage src="/cached.png" alt="Charger" />);
  expect(screen.queryByRole("status")).toBeNull();
});
