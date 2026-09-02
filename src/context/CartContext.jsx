import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cartApi } from "../services/api";
import { useAuth } from "./AuthContext";

const STORAGE_KEY = "zvolta-cart-v1";
// Records which account the stored cart already belongs to. Without it every
// reload would re-merge the local mirror into the account cart, undoing a
// quantity the reader had lowered somewhere else.
const OWNER_KEY = "zvolta-cart-owner-v1";
const emptyCart = {
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  removeItem: () => {},
  clearCart: () => {},
  syncItems: () => {},
  applyCoupon: async () => {},
  removeCoupon: async () => {},
  itemCount: 0,
  subtotal: 0,
  discountTotal: 0,
  grandTotal: 0,
  coupon: null,
  couponError: "",
  cartError: "",
  syncing: false,
  isServerCart: false,
};
const CartContext = createContext(emptyCart);

function readCart() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function readCartOwner() {
  try {
    return localStorage.getItem(OWNER_KEY) || "";
  } catch {
    return "";
  }
}

function writeCartOwner(userId) {
  try {
    if (userId) localStorage.setItem(OWNER_KEY, userId);
    else localStorage.removeItem(OWNER_KEY);
  } catch {
    // Losing the marker only costs one extra merge on the next sign-in.
  }
}

// The cart API serializes products differently from the storefront product
// endpoint, so server items are folded back into the shape the UI already uses.
function fromServerItem(entry = {}) {
  const product = entry.product || {};
  const image = Array.isArray(product.images)
    ? product.images[0] || ""
    : product.images?.[0]?.url || "";

  return {
    productId: String(product._id || product.id || ""),
    slug: product.slug || "",
    title: product.title || product.name || "",
    sku: product.sku || "",
    image,
    price: Number(entry.price ?? product.price ?? 0),
    originalPrice: Number(product.originPrice || product.price || 0),
    stock: Number(product.stock || 0),
    quantity: Number(entry.quantity || 1),
  };
}

export function CartProvider({ children }) {
  const { isAuthenticated, loading: authLoading, user } = useAuth();
  const [items, setItems] = useState(readCart);
  const [serverCart, setServerCart] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [cartError, setCartError] = useState("");

  const itemsRef = useRef(items);
  // Responses can land out of order when the stepper is clicked quickly, so only
  // the newest request is allowed to write back.
  const requestRef = useRef(0);
  const wasAuthenticatedRef = useRef(false);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const adoptServerCart = useCallback((cart) => {
    setServerCart(cart);
    setItems((cart.items || []).map(fromServerItem));
  }, []);

  // Runs one server call and adopts its result unless a newer call started.
  const runServerCart = useCallback(
    async (action, { reportError = true } = {}) => {
      const requestId = requestRef.current + 1;
      requestRef.current = requestId;
      setSyncing(true);
      setCartError("");

      try {
        const result = await action();
        if (requestRef.current === requestId) adoptServerCart(result.data);
        return result.data;
      } catch (error) {
        if (requestRef.current === requestId && reportError)
          setCartError(error.message);
        throw error;
      } finally {
        if (requestRef.current === requestId) setSyncing(false);
      }
    },
    [adoptServerCart],
  );

  // Signing in merges whatever the guest collected into the account cart. A
  // reload of an already-established session just reads the account cart, and
  // signing out drops the local copy so it cannot leak into the next account.
  useEffect(() => {
    if (authLoading) return undefined;

    if (!isAuthenticated) {
      if (wasAuthenticatedRef.current) {
        wasAuthenticatedRef.current = false;
        writeCartOwner("");
        setItems([]);
      }

      setServerCart(null);
      setCartError("");
      return undefined;
    }

    const userId = String(user?._id || user?.id || "");
    const isSameOwner = Boolean(userId) && readCartOwner() === userId;
    wasAuthenticatedRef.current = true;

    let active = true;
    const requestId = requestRef.current + 1;
    requestRef.current = requestId;
    setSyncing(true);

    const load = isSameOwner
      ? cartApi.get()
      : cartApi.sync({
          items: itemsRef.current.map((item) => ({
            product: item.productId,
            quantity: item.quantity,
          })),
        });

    load
      .then((result) => {
        if (!active || requestRef.current !== requestId) return;
        writeCartOwner(userId);
        adoptServerCart(result.data);
      })
      .catch((error) => {
        if (active && requestRef.current === requestId)
          setCartError(error.message);
      })
      .finally(() => {
        if (active && requestRef.current === requestId) setSyncing(false);
      });

    return () => {
      active = false;
    };
  }, [adoptServerCart, authLoading, isAuthenticated, user]);

  const addItem = useCallback(
    (product, quantity = 1) => {
      const id = String(product._id || product.id || "");
      const nextQuantity = Math.max(1, Number(quantity) || 1);

      setItems((current) => {
        const existing = current.find((item) => item.productId === id);

        if (existing) {
          return current.map((item) =>
            item.productId === id
              ? {
                  ...item,
                  quantity: Math.min(
                    Number(product.stock || 99),
                    item.quantity + nextQuantity,
                  ),
                }
              : item,
          );
        }

        return [
          ...current,
          {
            productId: id,
            slug: product.slug,
            title: product.title,
            sku: product.sku,
            image: product.images?.[0]?.url || "",
            price: Number(product.discountPrice || product.price || 0),
            originalPrice: Number(product.price || 0),
            stock: Number(product.stock || 0),
            quantity: Math.min(Number(product.stock || 99), nextQuantity),
          },
        ];
      });

      if (isAuthenticated) {
        runServerCart(() =>
          cartApi.addItem({ productId: id, quantity: nextQuantity }),
        ).catch(() => {});
      }
    },
    [isAuthenticated, runServerCart],
  );

  const removeItem = useCallback(
    (productId) => {
      setItems((current) =>
        current.filter((item) => item.productId !== productId),
      );

      if (isAuthenticated) {
        runServerCart(() => cartApi.removeItem(productId)).catch(() => {});
      }
    },
    [isAuthenticated, runServerCart],
  );

  const updateQuantity = useCallback(
    (productId, quantity) => {
      const requested = Math.max(0, Number(quantity) || 0);

      if (requested < 1) {
        removeItem(productId);
        return;
      }

      setItems((current) =>
        current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.min(item.stock || 99, requested) }
            : item,
        ),
      );

      if (isAuthenticated) {
        runServerCart(() =>
          cartApi.updateItem(productId, { quantity: requested }),
        ).catch(() => {});
      }
    },
    [isAuthenticated, removeItem, runServerCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);

    if (isAuthenticated) {
      runServerCart(() => cartApi.clear()).catch(() => {});
    }
  }, [isAuthenticated, runServerCart]);

  // Refreshes the stored snapshot with live catalog values keyed by product id.
  // Returns the same array when nothing changed so callers cannot loop.
  const syncItems = useCallback((updates) => {
    setItems((current) => {
      let changed = false;
      const next = current.map((item) => {
        const patch = updates[item.productId];

        if (!patch) return item;

        const isSame = Object.keys(patch).every(
          (key) => item[key] === patch[key],
        );

        if (isSame) return item;

        changed = true;
        return { ...item, ...patch };
      });

      return changed ? next : current;
    });
  }, []);

  const applyCoupon = useCallback(
    (code) =>
      runServerCart(() => cartApi.applyCoupon(code), { reportError: false }),
    [runServerCart],
  );

  const removeCoupon = useCallback(
    () => runServerCart(() => cartApi.removeCoupon(), { reportError: false }),
    [runServerCart],
  );

  const value = useMemo(() => {
    const localSubtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const isServerCart = Boolean(serverCart);
    const subtotal = isServerCart
      ? Number(serverCart.subtotal || 0)
      : localSubtotal;
    const discountTotal = isServerCart
      ? Number(serverCart.discountTotal || 0)
      : 0;

    return {
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      syncItems,
      applyCoupon,
      removeCoupon,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      discountTotal,
      grandTotal: Math.max(0, subtotal - discountTotal),
      coupon: isServerCart ? serverCart.appliedCoupon || null : null,
      couponError: isServerCart ? serverCart.couponError || "" : "",
      cartError,
      syncing,
      isServerCart,
    };
  }, [
    addItem,
    applyCoupon,
    cartError,
    clearCart,
    items,
    removeCoupon,
    removeItem,
    serverCart,
    syncItems,
    syncing,
    updateQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
