import { createContext, useContext, useState, useEffect, useRef } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  // Evita que Karma (JSDOM) ejecute localStorage
  const isTestEnv = typeof process !== "undefined" && process.env.NODE_ENV === "test";
  const isBrowser = typeof window !== "undefined" && !!window.localStorage && !isTestEnv;

  const [cart, setCart] = useState(() => {
    if (!isBrowser) return [];
    try {
      const saved = localStorage.getItem("charmeetchic_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const prevCartRef = useRef(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!isBrowser) return;
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    try {
      const data = JSON.stringify(cart);
      if (prevCartRef.current !== data) {
        localStorage.setItem("charmeetchic_cart", data);
        prevCartRef.current = data;
      }
    } catch (err) {
      console.warn("Error guardando carrito:", err);
    }
  }, [cart, isBrowser]);

  // Funciones del carrito
  const addToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p.name === product.name);
      if (item) {
        return prev.map((p) =>
          p.name === product.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (name) =>
    setCart((prev) => prev.filter((p) => p.name !== name));

  const updateQty = (name, qty) => {
    if (qty <= 0) return removeFromCart(name);
    setCart((prev) =>
      prev.map((p) => (p.name === name ? { ...p, qty } : p))
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, p) => sum + (p.price || 0) * (p.qty || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
