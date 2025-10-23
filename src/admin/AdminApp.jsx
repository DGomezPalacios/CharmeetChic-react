import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import UsersPage from "./UsersPage";

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#faf9f6" }}>
      <aside
        style={{
          width: "230px",
          margin: "20px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          color: "#3d3a2b",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h5 style={{ textAlign: "center", fontWeight: "600", marginBottom: "2rem" }}>
            Charme et Chic
          </h5>
          <nav className="nav flex-column">
            <Link className="nav-link" to="/admin" style={linkStyle}>Dashboard</Link>
            <Link className="nav-link" to="/admin/orders" style={linkStyle}>Órdenes</Link>
            <Link className="nav-link" to="/admin/products" style={linkStyle}>Productos</Link>
            <Link className="nav-link" to="/admin/users" style={linkStyle}>Usuarios</Link>
          </nav>
        </div>

        <div>
          <Link to="/" className="btn w-100 mb-2" style={btnOutline}>Ir a tienda</Link>
          <button className="btn w-100" style={btnFilled}>Cerrar sesión</button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: "#3d3a2b",
  fontWeight: "500",
  textDecoration: "none",
  marginBottom: "0.8rem",
  transition: "all 0.2s",
};

const btnOutline = {
  border: "1px solid #c9a66b",
  color: "#3d3a2b",
  backgroundColor: "transparent",
  borderRadius: "8px",
};

const btnFilled = {
  backgroundColor: "#c9a66b",
  border: "none",
  color: "#fff",
  fontWeight: "500",
  borderRadius: "8px",
};

// dashboard
function Dashboard() {
  const cards = [
    { title: "Compras", value: "500", desc: "Probabilidad de aumento: 20%", color: "#f2e2b6" },
    { title: "Productos", value: "300", desc: "Inventario actual: 300", color: "#d9e5c3" },
    { title: "Usuarios", value: "50", desc: "Nuevos este mes: 15", color: "#f7e9b9" },
  ];

  return (
    <div>
      <h3 className="text-center fw-bold mb-4" style={{ color: "#3d3a2b" }}>
        Dashboard
      </h3>
      <div className="d-flex gap-4 justify-content-center flex-wrap">
        {cards.map((c) => (
          <div
            key={c.title}
            className="card shadow-sm"
            style={{
              width: "280px",
              backgroundColor: c.color,
              border: "none",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <h5 style={{ color: "#3d3a2b" }}>{c.title}</h5>
            <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>{c.value}</p>
            <small>{c.desc}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
}
