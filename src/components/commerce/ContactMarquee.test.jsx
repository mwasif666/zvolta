// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { ContactMarquee } from "./ContactMarquee";

afterEach(cleanup);
test("keeps product enquiries and links WhatsApp with the store contact number", () => {
  render(<ContactMarquee />);
  expect(screen.getByRole("link", { name: /WhatsApp us/ }).href).toBe(
    "https://wa.me/923104446529",
  );
  expect(
    screen.getAllByText(
      "Contact us to confirm current prices, installation and product availability.",
    ),
  ).toHaveLength(2);
  expect(screen.getAllByText("Contact us: 0310 4446529")).toHaveLength(2);
  fireEvent.click(screen.getByRole("button", { name: "Pause contact ticker" }));
  expect(
    screen
      .getByRole("button", { name: "Resume contact ticker" })
      .getAttribute("aria-pressed"),
  ).toBe("true");
});
