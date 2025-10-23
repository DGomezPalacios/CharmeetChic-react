import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../src/context/CartContext";
import Success from "../../src/pages/Success";

describe("Success Page", () => {
  it("muestra mensaje de éxito", () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Success />
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByText(/compra exitosa/i)).not.toBeNull();
  });
});
