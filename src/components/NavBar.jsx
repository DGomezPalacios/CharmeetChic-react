import { useCart } from "../context/CartContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// Iconos
import casa from "../assets/img/casa.png";
import usuario from "../assets/img/usuario.png";
import buscar from "../assets/img/buscar.png";
import carrito from "../assets/img/carrito-de-compras.png";
import rueda from "../assets/img/engranaje.png";

export default function NavBar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Usuario actual
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const isAdmin = user?.rol === "ADMIN";
  const isVendedor = user?.rol === "VENDEDOR";

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const active = ({ isActive }) =>
    "nav-link fw-semibold" + (isActive ? " active" : "");

  return (
    <>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        
        {/* Centro: Menú principal */}
        <Nav className="mx-auto align-items-center gap-3">
          <Nav.Link as={NavLink} to="/" end className={active}>
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

        {/* Derecha: Iconos */}
        <Nav className="ms-auto align-items-center gap-2">

          {/* Ícono Admin/Vendedor */}
{(isAdmin || isVendedor) && (
  <Nav.Link
    as={Link}
    to={isAdmin ? "/admin" : "/admin/orders"}   // 👈 ADMIN → /admin, VENDEDOR → /admin/orders
    title="Panel Admin"
  >
    <img src={rueda} alt="admin" width="22" height="22" />
  </Nav.Link>
)}


          {/* 👤 Usuario */}
          {!user ? (
            <Nav.Link as={Link} to="/login" title="Mi cuenta">
              <img src={usuario} alt="login" width="20" height="20" />
            </Nav.Link>
          ) : (
            <div className="dropdown">
              <img
                src={usuario}
                width="20"
                height="20"
                alt="usuario"
                style={{ cursor: "pointer" }}
              />

              <div className="dropdown-content">
                <button className="dropdown-item" onClick={logout}>
                  Cerrar sesión
                </button>
              </div>
            </div>
          )}

          {/* 🔍 Buscar */}
          <Button
            variant="link"
            className="p-2 btn-icono"
            title="Buscar"
            aria-label="Buscar"
            onClick={() => alert("Buscar (a implementar)")}
          >
            <img src={buscar} alt="" width="20" height="20" />
          </Button>

          {/* 🛒 Carrito */}
          <Nav.Link as={Link} to="/carrito" className="position-relative">
            <img src={carrito} alt="carrito" width="20" height="20" />
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

      <style>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          top: 120%;
          background: #ffffff;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 6px;
          min-width: 120px;
          z-index: 2000;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-item {
          background: none;
          border: none;
          font-size: 14px;
          cursor: pointer;
          text-align: left;
          width: 100%;
          padding: 5px 0;
        }

        .dropdown-item:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
