import { useEffect, useState } from "react";
import {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../api/productos";

export default function ProductsPage() {
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    stock: 0,
    categoriaId: 1, // OBLIGATORIO POR BACKEND
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const cargar = async () => {
    setLoading(true);
    setErr(null);

    try {
      const data = await listarProductos();
      const ui = data.map((p) => ({
        id: p.id,
        name: p.nombre,
        price: p.precio,
        stock: p.stock,
        categoriaId: p.categoriaId,
      }));
      setItems(ui);
    } catch (e) {
      console.error(e);
      setErr("No se pudo cargar la lista de productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editing) {
        await actualizarProducto(form.id, form);
      } else {
        await crearProducto(form);
      }

      await cargar();
      setEditing(false);
      setForm({
        id: "",
        name: "",
        price: 0,
        stock: 0,
        categoriaId: 1,
      });

    } catch (e) {
      console.error(e);
      alert("No se pudo guardar el producto.");
    }
  };

  const editItem = (p) => {
    setForm({ ...p });
    setEditing(true);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;
    try {
      await eliminarProducto(id);
      await cargar();
    } catch (e) {
      console.error(e);
      alert("No se pudo eliminar.");
    }
  };

  return (
    <div>
      <h3>Gestión de Productos</h3>

      {err && <div className="alert alert-danger">{err}</div>}
      {loading && <p>Cargando...</p>}

      <form className="row g-2 mb-3" onSubmit={handleSubmit}>

        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Nombre"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="col-md-2">
          <input
            className="form-control"
            type="number"
            placeholder="Precio"
            required
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: +e.target.value })
            }
          />
        </div>

        <div className="col-md-2">
          <input
            className="form-control"
            type="number"
            placeholder="Stock"
            required
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: +e.target.value })
            }
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            type="number"
            placeholder="Categoría ID"
            required
            value={form.categoriaId}
            onChange={(e) =>
              setForm({ ...form, categoriaId: +e.target.value })
            }
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            {editing ? "Guardar" : "Agregar"}
          </button>
        </div>

      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría ID</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {items.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${Number(p.price).toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>{p.categoriaId}</td>

              <td>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => editItem(p)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteItem(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {!loading && items.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No hay productos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
