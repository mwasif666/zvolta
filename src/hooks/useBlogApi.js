import { useMemo } from "react";
import { commerceApi } from "../services/api";
import { blogPosts as legacyBlogPosts } from "../data/pages/blogs/blogPosts";
import { useCommerceData } from "./useCommerceData";

export function adaptApiArticle(article) {
  return {
    id: article._id,
    slug: article.slug,
    title: article.title,
    excerpt: article.summary || "Read the latest from ZVolta.",
    category: article.category || "EV Insights",
    author: article.authorName || "ZVolta Team",
    date: new Intl.DateTimeFormat("en-PK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(article.publishedAt || article.createdAt)),
    readTime: article.readTime || "5 min read",
    image: article.imageUrl || "/img/charging station.png",
    cardImage: article.imageUrl || "/img/charging station.png",
    imageCaption: article.imageCaption || article.title,
    htmlBody: article.body,
    isApiArticle: true,
  };
}

export function useBlogPosts() {
  const query = useCommerceData(commerceApi.blogs, []);
  const posts = useMemo(() => {
    if (!query.data) return legacyBlogPosts;
    const apiPosts = query.data.map(adaptApiArticle);
    const apiSlugs = new Set(apiPosts.map((post) => post.slug));
    return [
      ...apiPosts,
      ...legacyBlogPosts.filter((post) => !apiSlugs.has(post.slug)),
    ];
  }, [query.data]);
  return { ...query, data: posts };
}

export function useBlogPost(slug) {
  const query = useCommerceData(() => commerceApi.blog(slug), [slug]);
  const legacyPost = legacyBlogPosts.find((post) => post.slug === slug);
  return {
    ...query,
    data: query.data ? adaptApiArticle(query.data) : legacyPost,
    loading: query.loading && !legacyPost,
    error: legacyPost ? "" : query.error,
  };
}
