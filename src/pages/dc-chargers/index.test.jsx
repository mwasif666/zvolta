// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, test } from "vitest";
import DcChargersRoute from "./index";
afterEach(cleanup);
test("legacy DC charger URLs redirect to the unified shop", async () => {
  render(
    <MemoryRouter initialEntries={["/dc-chargers"]}>
      <Routes>
        <Route path="/dc-chargers" element={<DcChargersRoute />} />
        <Route path="/products" element={<h1>Unified shop</h1>} />
      </Routes>
    </MemoryRouter>,
  );
  expect(
    await screen.findByRole("heading", { name: "Unified shop" }),
  ).toBeTruthy();
});
