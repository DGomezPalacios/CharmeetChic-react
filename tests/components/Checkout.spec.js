import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../src/context/CartContext";
import Checkout from "../../src/pages/Checkout";

describe("Checkout Page", () => {
  it("muestra el título de finalizar compra", () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Checkout />
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByText("Finalizar Compra")).not.toBeNull();
  });
});
