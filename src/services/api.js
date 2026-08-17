const configuredBaseUrl = String(import.meta.env.VITE_API_URL || "").replace(
  /\/$/,
  "",
);

export const API_BASE_URL = configuredBaseUrl || "http://localhost:5000/api";

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
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
    const error = new Error(
      payload.message || "The ZVolta service is unavailable.",
    );
    error.status = response.status;
    throw error;
  }

  return payload;
}

function toQueryString(query = {}) {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== "" && value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });

  return params.toString();
}

async function getAllProducts(query = {}) {
  const pageSize = 100;
  const firstPage = await apiRequest(
    `/products?${toQueryString({ ...query, page: 1, limit: pageSize })}`,
  );
  const totalPages = Math.max(1, Number(firstPage.pages || 1));

  if (totalPages === 1) {
    return firstPage;
  }

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      apiRequest(
        `/products?${toQueryString({
          ...query,
          page: index + 2,
          limit: pageSize,
        })}`,
      ),
    ),
  );

  return {
    ...firstPage,
    count:
      Number(firstPage.count || 0) +
      remainingPages.reduce(
        (total, page) => total + Number(page.count || 0),
        0,
      ),
    data: [firstPage, ...remainingPages].flatMap((page) => page.data || []),
  };
}

export const commerceApi = {
  products: (query = "") => apiRequest(`/products${query ? `?${query}` : ""}`),
  allProducts: getAllProducts,
  product: (slug) => apiRequest(`/products/${encodeURIComponent(slug)}`),
  categories: () => apiRequest("/categories"),
  blogs: () => apiRequest("/articles"),
  blog: (slug) => apiRequest(`/articles/${encodeURIComponent(slug)}`),
  videos: () => apiRequest("/videos"),
  settings: () => apiRequest("/settings"),
  createOrder: (body) => apiRequest("/orders", { method: "POST", body }),
};
