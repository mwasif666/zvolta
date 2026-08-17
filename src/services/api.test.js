import { afterEach, describe, expect, test, vi } from "vitest";
import { commerceApi } from "./api";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("commerceApi.allProducts", () => {
  test("loads every public catalogue page", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          count: 2,
          total: 3,
          page: 1,
          pages: 2,
          data: [{ _id: "one" }, { _id: "two" }],
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          count: 1,
          total: 3,
          page: 2,
          pages: 2,
          data: [{ _id: "three" }],
        }),
      });
    vi.stubGlobal("fetch", fetchMock);

    const result = await commerceApi.allProducts({ sort: "featured" });

    expect(result.data.map((item) => item._id)).toEqual([
      "one",
      "two",
      "three",
    ]);
    expect(result.count).toBe(3);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1][0]).toContain("page=2");
  });
});
