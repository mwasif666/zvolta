import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CitaEvChargersPage from "./CitaEvChargersPage";
import { citaChargers } from "../../data/citaChargers";

describe("CITA product cards", () => {
  it("keeps source images and detail links with labelled Smart Pro variants", () => {
    const html = renderToStaticMarkup(
      createElement(MemoryRouter, null, createElement(CitaEvChargersPage)),
    );

    expect((html.match(/class="cita-product-card"/g) || []).length).toBe(
      citaChargers.length,
    );
    expect((html.match(/class="cita-product-variant"/g) || []).length).toBe(3);

    for (const charger of citaChargers) {
      expect(html).toContain(`data-model="${charger.slug}"`);
      expect(html).toContain(`src="${charger.productImage}"`);
      expect(html).toContain(charger.name);
      expect(html).toContain(`href="/cita-ev-chargers/${charger.slug}"`);
    }
    expect(html).toContain("7.4 kW");
    expect(html).toContain("11 kW");
    expect(html).toContain("22 kW");
    expect(html).toContain("cita-product-cta-icon");
  });
});
