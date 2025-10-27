import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";
import { CartProvider } from "../../src/context/CartContext";

function renderHeader(initialPath = "/") {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Header />
      </MemoryRouter>
    </CartProvider>
  );
}

describe("Header", () => {
  it("Mostrar el logo con el enlace al inicio", () => {
    renderHeader("/");

    const logo = screen.queryByAltText(/Charme et Chic/i);
    expect(logo).not.toBeNull();
    expect(logo.closest(".navbar-brand")).not.toBeNull();
  });

  it("incluye el componente NavBar", () => {
    renderHeader("/");
    const nav = screen.queryByRole("navigation");
    expect(nav).not.toBeNull();
  });

  it("usa las clases principales del Navbar (Bootstrap)", () => {
    renderHeader("/");
    const navbar = screen.getByRole("navigation");
    expect(navbar.className).toContain("navbar");
    expect(navbar.className).toContain("shadow-sm");
    expect(navbar.className).toContain("border-bottom");
  });
});
