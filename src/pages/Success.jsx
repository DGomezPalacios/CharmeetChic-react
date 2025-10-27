import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Success() {
  const { clearCart } = useCart();
  const { state } = useLocation();

  const purchasedItems = state?.cart || [];
  const purchasedSubtotal = state?.subtotal || 0;
  const purchasedEnvio = state?.envio || 0;
  const purchasedTotal = state?.total || 0;
  const customer = state?.customer || {};

  // limpia el carrito luego de la compra
  useEffect(() => {
    const timer = setTimeout(() => clearCart(), 100);
    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <main style={{ textAlign: "center", marginTop: "60px" }}>
      <span style={{ fontSize: "60px" }}>✅</span>
      <h2>¡Compra exitosa!</h2>
      <p>Gracias por tu compra. Tu pedido está siendo procesado.</p>

      <div style={{ maxWidth: "500px", margin: "30px auto", textAlign: "left" }}>
        {/* Datos del cliente */}
        {customer && (
          <section style={{ marginBottom: "20px" }}>
            <h3>Datos del cliente:</h3>
            <p><strong>Nombre:</strong> {customer.nombre} {customer.apellidos}</p>
            <p><strong>Email:</strong> {customer.correo}</p>
            <p><strong>Teléfono:</strong> {customer.telefono}</p>
            <p><strong>Dirección:</strong> {customer.direccion} {customer.departamento}</p>
            <p><strong>Comuna:</strong> {customer.comuna}</p>
            <p><strong>Ciudad:</strong> {customer.ciudad}</p> 
            <p><strong>Región:</strong> {customer.region}</p>
            {customer.indicaciones && <p><strong>Indicaciones:</strong> {customer.indicaciones}</p>}
          </section>
        )}

        {/* Resumen del pedido */}
        {purchasedItems.length > 0 && (
          <section>
            <h3>Resumen de la compra:</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>Producto</th>
                  <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>Cantidad</th>
                  <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>Precio</th>
                </tr>
              </thead>
              <tbody>
                {purchasedItems.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.name}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.qty}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                      ${(item.price * item.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
              <li>Subtotal: ${purchasedSubtotal.toLocaleString()}</li>
              <li>Envío: ${purchasedEnvio.toLocaleString()}</li>
              <li><strong>Total: ${purchasedTotal.toLocaleString()}</strong></li>
            </ul>
          </section>
        )}
      </div>

      <Link to="/catalogo" className="btn btn-outline-dark mt-4">
        ← Volver al catálogo
      </Link>
    </main>
  );
}
