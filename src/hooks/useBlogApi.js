import { useMemo } from "react";
import { commerceApi } from "../services/api";
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
    }).format(new Date(article.publishedAt || article.createdAt || Date.now())),
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
  const posts = useMemo(
    () => (query.data || []).map(adaptApiArticle),
    [query.data],
  );
  return { ...query, data: posts };
}

export function useBlogPost(slug) {
  const query = useCommerceData(() => commerceApi.blog(slug), [slug]);
  return {
    ...query,
    data: query.data ? adaptApiArticle(query.data) : null,
  };
}
