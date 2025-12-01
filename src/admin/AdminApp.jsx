import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import UsersPage from "./UsersPage";

/* =======================
   PROTECCIÓN POR ROL
========================== */
function ProtectedRoute({ allowed, children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;
  if (!allowed.includes(user.rol)) return <Navigate to="/" />;

  return children;
}

/* =======================
     LAYOUT ADMIN
========================== */
function AdminLayout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.rol === "ADMIN";
  const isVendedor = user?.rol === "VENDEDOR";

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
        }}
      >
        <div>
          <h5 style={{ textAlign: "center", fontWeight: "600", marginBottom: "2rem" }}>
            Charme et Chic
          </h5>

          <nav className="nav flex-column">
            {isAdmin && (
              <Link className="nav-link" to="/admin" style={linkStyle}>
                Dashboard
              </Link>
            )}

            {(isAdmin || isVendedor) && (
              <>
                <Link className="nav-link" to="/admin/orders" style={linkStyle}>
                  Órdenes
                </Link>
                <Link className="nav-link" to="/admin/products" style={linkStyle}>
                  Productos
                </Link>
              </>
            )}

            {isAdmin && (
              <Link className="nav-link" to="/admin/users" style={linkStyle}>
                Usuarios
              </Link>
            )}
          </nav>
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

/* =======================
       DASHBOARD
========================== */
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

/* =======================
       RUTAS ADMIN
========================== */
export default function AdminApp() {
  return (
    <Routes>

      {/* Entrar al panel si ADMIN o VENDEDOR */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowed={["ADMIN", "VENDEDOR"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        {/* Solo ADMIN ve dashboard */}
        <Route
          index
          element={
            <ProtectedRoute allowed={["ADMIN"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin y vendedor ven órdenes */}
        <Route
          path="orders"
          element={
            <ProtectedRoute allowed={["ADMIN", "VENDEDOR"]}>
              <OrdersPage />
            </ProtectedRoute>
          }
        />

        {/* Admin y vendedor ven productos */}
        <Route
          path="products"
          element={
            <ProtectedRoute allowed={["ADMIN", "VENDEDOR"]}>
              <ProductsPage />
            </ProtectedRoute>
          }
        />

        {/* Solo ADMIN usuarios */}
        <Route
          path="users"
          element={
            <ProtectedRoute allowed={["ADMIN"]}>
              <UsersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 🚀 RUTA VENDEDOR/ADMIN */}
      <Route
        path="*"
        element={
          (() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return <Navigate to="/login" />;
            if (user.rol === "VENDEDOR") return <Navigate to="/admin/orders" />;
            return <Navigate to="/admin" />;
          })()
        }
      />

    </Routes>
  );
}
