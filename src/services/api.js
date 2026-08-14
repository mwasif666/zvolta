const configuredBaseUrl = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export const API_BASE_URL = configuredBaseUrl || "http://localhost:5000/api";

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    body:
      options.body && typeof options.body !== "string"
        ? JSON.stringify(options.body)
        : options.body,
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "The ZVolta service is unavailable.");
  }

  return payload;
}

export const commerceApi = {
  products: (query = "") => apiRequest(`/products${query ? `?${query}` : ""}`),
  product: (slug) => apiRequest(`/products/${encodeURIComponent(slug)}`),
  categories: () => apiRequest("/categories"),
  blogs: () => apiRequest("/articles"),
  blog: (slug) => apiRequest(`/articles/${encodeURIComponent(slug)}`),
  videos: () => apiRequest("/videos"),
  settings: () => apiRequest("/settings"),
  createOrder: (body) => apiRequest("/orders", { method: "POST", body }),
};
