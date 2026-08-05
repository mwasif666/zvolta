import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPostBySlug } from "./blogPosts";

describe("blog post lookup", () => {
  it("returns the matching post", () => {
    const firstPost = blogPosts[0];
    expect(getBlogPostBySlug(firstPost.slug)).toEqual(firstPost);
  });

  it("does not substitute an unrelated article for an invalid slug", () => {
    expect(getBlogPostBySlug("missing-article")).toBeUndefined();
  });
});
