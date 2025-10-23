import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../../src/context/CartContext";

describe("CartContext", () => {
  it("agrega un producto al carrito", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ name: "Anillo Luna", price: 20000, image: "img.jpg" });
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe("Anillo Luna");
  });

  it("vacía el carrito correctamente", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ name: "Collar", price: 10000 });
      result.current.clearCart();
    });

    expect(result.current.cart.length).toBe(0);
  });
});
