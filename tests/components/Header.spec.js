// tests/components/Header.spec.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../src/components/Header';

function renderHeader(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>
  );
}

describe('Header', () => {
  it('renderiza el logo con el enlace al inicio', () => {
    renderHeader('/');

    // Busca el logo
    const logo = screen.queryByAltText(/Charme et Chic/i);
    expect(logo).not.toBeNull();
    expect(logo.getAttribute('src')).toMatch(/(mock-image|data:image)/);

    // Verifica que esté dentro del contenedor principal de la marca
    const brand = logo.closest('.navbar-brand');
    expect(brand).not.toBeNull();
  });

  it('incluye el componente NavBar', () => {
    renderHeader('/');
    const nav = screen.queryByRole('navigation');
    expect(nav).not.toBeNull();
  });

  it('usa las clases principales del Navbar (Bootstrap)', () => {
    renderHeader('/');
    const navbar = screen.getByRole('navigation');
    expect(navbar.className).toContain('shadow-sm');
    expect(navbar.className).toContain('border-bottom');
    expect(navbar.className).toContain('navbar');
  });
});
