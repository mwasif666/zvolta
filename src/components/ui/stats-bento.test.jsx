import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import StatsBento from "./stats-bento";

describe("CITA EV StatsBento", () => {
  it("renders the four source-backed CITA facts in its responsive bento", () => {
    const html = renderToStaticMarkup(createElement(StatsBento));

    expect(html).toContain("35");
    expect(html).toContain("Countries");
    expect(html).toContain("AC &amp; DC");
    expect(html).toContain("App &amp; CPMS");
    expect(html).toContain("Home to Public");
    expect(html).toContain("lg:grid-cols-6");
    expect(html).toContain("CITA EV at a glance");
  });
});
