// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { RouteSkeleton } from "./RouteSkeleton";

afterEach(cleanup);

describe("RouteSkeleton", () => {
  it("renders an accessible non-blank route loading state", () => {
    render(<RouteSkeleton />);

    expect(screen.getByRole("status", { name: "Loading page" })).toBeTruthy();
    expect(screen.getByText("Loading page content…")).toBeTruthy();
  });
});
