const configuredBaseUrl = String(import.meta.env.VITE_API_URL || "").replace(
  /\/$/,
  "",
);

export const API_BASE_URL = configuredBaseUrl || "http://localhost:5000/api";

const TOKEN_STORAGE_KEY = "zvolta-token-v1";

// The API also sets an httpOnly cookie, but that only survives a same-site
// deployment. The bearer token returned in the body is what keeps auth working
// when the site and the API are on different origins.
export function readAuthToken() {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

export function writeAuthToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    else localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    // A blocked storage bin only costs the session on the next reload.
  }
}

export async function apiRequest(path, options = {}) {
  const token = readAuthToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
    credentials: "include",
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
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
    error.errors = payload.errors;
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

export const authApi = {
  register: (body) => apiRequest("/auth/register", { method: "POST", body }),
  login: (body) => apiRequest("/auth/login", { method: "POST", body }),
  logout: () => apiRequest("/auth/logout", { method: "POST" }),
  me: () => apiRequest("/auth/me"),
  updateProfile: (body) => apiRequest("/auth/me", { method: "PATCH", body }),
  changePassword: (body) =>
    apiRequest("/auth/change-password", { method: "PATCH", body }),
};

export const accountApi = {
  orders: () => apiRequest("/orders/my"),
  order: (id) => apiRequest(`/orders/${encodeURIComponent(id)}`),
  trackOrder: (orderNumber) =>
    apiRequest("/orders/track", {
      method: "POST",
      body: { orderNumber },
    }),
};

// Every cart endpoint is behind `protect`, so these are only reachable once a
// token exists. Guests keep using the local cart in CartContext.
export const cartApi = {
  get: () => apiRequest("/cart"),
  sync: (body) => apiRequest("/cart/sync", { method: "PUT", body }),
  clear: () => apiRequest("/cart", { method: "DELETE" }),
  addItem: (body) => apiRequest("/cart/items", { method: "POST", body }),
  updateItem: (productId, body) =>
    apiRequest(`/cart/items/${encodeURIComponent(productId)}`, {
      method: "PATCH",
      body,
    }),
  removeItem: (productId) =>
    apiRequest(`/cart/items/${encodeURIComponent(productId)}`, {
      method: "DELETE",
    }),
  applyCoupon: (code) =>
    apiRequest("/cart/coupon", { method: "POST", body: { code } }),
  removeCoupon: () => apiRequest("/cart/coupon", { method: "DELETE" }),
};

export const shippingApi = {
  calculate: (body) =>
    apiRequest("/shipping/calculate", { method: "POST", body }),
};
