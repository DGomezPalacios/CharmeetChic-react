import { useState } from "react";
import { db } from "../data/store";

export default function OrdersPage() {
  const [orders, setOrders] = useState(db.getAll("orders"));

  function updateStatus(id, status) {
    db.update("orders", id, { status });
    setOrders(db.getAll("orders"));
  }

  return (
    <div>
      <h3>Pedidos</h3>
      <table className="table">
        <thead><tr><th>ID</th><th>Fecha</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{new Date(o.createdAt).toLocaleString()}</td>
              <td>${o.total.toLocaleString()}</td>
              <td>{o.status}</td>
              <td>
                <button className="btn btn-sm btn-outline-success me-2" onClick={()=>updateStatus(o.id, "preparando")}>Preparar</button>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>updateStatus(o.id, "enviado")}>Enviar</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={()=>updateStatus(o.id, "entregado")}>Entregar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
