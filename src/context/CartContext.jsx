import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "zvolta-cart-v1";
const emptyCart = {
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  removeItem: () => {},
  clearCart: () => {},
  itemCount: 0,
  subtotal: 0,
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

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, quantity = 1) => {
    setItems((current) => {
      const id = product._id || product.id;
      const existing = current.find((item) => item.productId === id);
      const nextQuantity = Math.max(1, Number(quantity) || 1);

      if (existing) {
        return current.map((item) =>
          item.productId === id
            ? { ...item, quantity: Math.min(Number(product.stock || 99), item.quantity + nextQuantity) }
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
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.min(item.stock || 99, Math.max(0, Number(quantity) || 0)) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    [addItem, clearCart, items, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
