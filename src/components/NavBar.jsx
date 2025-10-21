import { useCart } from "../context/CartContext";

import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// Iconos
import casa from "../assets/img/casa.png";
import usuario from "../assets/img/usuario.png";
import buscar from "../assets/img/buscar.png";
import carrito from "../assets/img/carrito-de-compras.png";

export default function NavBar() {
    const active = ({ isActive }) =>
        "nav-link fw-semibold" + (isActive ? " active" : "");
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);


    return (
        <>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
                {/* Centro: menú */}
                <Nav className="mx-auto align-items-center gap-3">
                    <Nav.Link as={NavLink} to="/" end className={active} title="Inicio" aria-label="Inicio">
                        <img src={casa} alt="" width="20" height="20" />
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/quienes-somos" className={active}>
                        Quiénes Somos
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/catalogo" className={active}>
                        Catálogo
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/personalizacion-reparacion" className={active}>
                        Personalización y Reparación
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto" className={active}>
                        Contacto
                    </Nav.Link>
                </Nav>

                {/* Derecha: iconos */}
                <Nav className="ms-auto align-items-center gap-2">
                    <Nav.Link as={Link} to="/login" title="Mi cuenta" aria-label="Mi cuenta">
                        <img src={usuario} alt="" width="20" height="20" />
                    </Nav.Link>

                    <Button
                        variant="link"
                        className="p-2 btn-icono"
                        title="Buscar"
                        aria-label="Buscar"
                        onClick={() => alert("Buscar (a implementar)")}
                    >
                        <img src={buscar} alt="" width="20" height="20" />
                    </Button>

                    <Nav.Link
                        as={Link}
                        to="/carrito"
                        title="Carrito"
                        aria-label="Carrito"
                        className="position-relative"
                    >
                        <img src={carrito} alt="" width="20" height="20" />
                        {totalItems > 0 && (
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: "0.6rem" }}
                        >
                            {totalItems}
                        </span>
                        )}
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </>
    );
}

