import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartContext } from "../../src/context/CartContext";
import Cart from "../../src/pages/Cart";

describe("Cart component", () => {
  it("muestra el mensaje de carrito vacío", () => {
    const mockContext = { cart: [], clearCart: jasmine.createSpy(), removeFromCart: jasmine.createSpy() };

    render(
      <CartContext.Provider value={mockContext}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText(/tu carrito está vacío/i)).not.toBeNull();
  });
});
