import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavBar from "../../src/components/NavBar";
import { CartProvider } from "../../src/context/CartContext";

function renderNav(initialPath = "/") {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Navbar>
          <NavBar />
        </Navbar>
      </MemoryRouter>
    </CartProvider>
  );
}

describe("NavBar", () => {
  it("Mostrar todas las opciones del menú", () => {
    renderNav("/");

    expect(screen.queryByRole("link", { name: /Inicio/i })).not.toBeNull();
    expect(screen.queryByRole("link", { name: /Quiénes Somos/i })).not.toBeNull();
    expect(screen.queryByRole("link", { name: /Catálogo/i })).not.toBeNull();
    expect(screen.queryByRole("link", { name: /Personalización y Reparación/i })).not.toBeNull();
    expect(screen.queryByRole("link", { name: /Contacto/i })).not.toBeNull();
  });

  it("marca como activo el link de la ruta actual (Catálogo)", () => {
    renderNav("/catalogo");
    const catalogo = screen.getByRole("link", { name: /Catálogo/i });
    expect(catalogo.className).toContain("active");
  });

  it("dispara la acción de búsqueda al hacer click en el botón", async () => {
    renderNav("/");
    const user = userEvent.setup();
    spyOn(window, "alert").and.stub();

    await user.click(screen.getByRole("button", { name: /Buscar/i }));
    expect(window.alert).toHaveBeenCalledWith("Buscar (a implementar)");
  });
});
