// src/components/NavBar.spec.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './NavBar';

// helper para renderizar el NavBar dentro de un <Navbar/> y con una ruta inicial
function renderNav(initialPath = '/') {
    return render(
        <MemoryRouter initialEntries={[initialPath]}>
            <Navbar>
                <NavBar />
            </Navbar>
        </MemoryRouter>
    );
}

describe('NavBar', () => {
    it('renderiza todas las opciones del menú', () => {
        renderNav('/');

        // enlaces del centro
        expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Quiénes Somos/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Catálogo/i })).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /Personalización y Reparación/i })
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Contacto/i })).toBeInTheDocument();

        // iconos derecha
        expect(screen.getByRole('link', { name: /Mi cuenta/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Buscar/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Carrito/i })).toBeInTheDocument();
    });

    it('marca como activo el link de la ruta actual (Catálogo)', () => {
        renderNav('/catalogo');

        const catalogo = screen.getByRole('link', { name: /Catálogo/i });
        // NavLink agrega la clase "active" cuando coincide la ruta
        expect(catalogo).toHaveClass('active');
    });

    it('dispara la acción de búsqueda al hacer click en el botón', async () => {
        renderNav('/');
        const user = userEvent.setup();

        spyOn(window, 'alert').and.stub(); // evita que bloquee el test

        await user.click(screen.getByRole('button', { name: /Buscar/i }));
        expect(window.alert).toHaveBeenCalledWith('Buscar (a implementar)');
    });
});
