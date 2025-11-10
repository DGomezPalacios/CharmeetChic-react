import { useEffect, useState } from "react";
import { listarInventario } from "../api/inventario";

export default function ListaInventario() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    listarInventario()
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            Producto {item.productoId} — Stock: {item.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
