// @vitest-environment jsdom
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import RoiCalculatorSection from "./RoiCalculatorSection";

afterEach(cleanup);

describe("RoiCalculatorSection", () => {
  it("recalculates results when the base charger cost changes", () => {
    render(<RoiCalculatorSection />);

    const costLabel = screen.getByText("Base Charger Cost").closest("label");
    const totalInvestment = screen.getByText("Total Investment").parentElement;

    fireEvent.change(within(costLabel).getByRole("spinbutton"), {
      target: { value: "100000" },
    });

    expect(within(totalInvestment).getByText("Rs 100,000")).toBeTruthy();
  });

  it("adds and removes charger modules", () => {
    render(<RoiCalculatorSection />);

    fireEvent.click(screen.getByRole("button", { name: /add module/i }));
    expect(screen.getByText(/Module #1/)).toBeTruthy();
    expect(
      within(screen.getByText("Total Chargers").parentElement).getByText("3"),
    ).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(screen.queryByText(/Module #1/)).toBeNull();
  });
});
