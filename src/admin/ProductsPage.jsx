import { useEffect, useState } from "react";
import {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../../api/productos";

export default function ProductsPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    stock: 0,
    category: "",
    visible: true,
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const cargar = async () => {
    setLoading(true);
    setErr(null);
    try {
      const data = await listarProductos();
      // Backend usa español -> normalizamos a tu UI
      const ui = data.map(p => ({
        id: p.id,
        name: p.nombre,
        price: p.precio,
        stock: p.stock,
        category: p.categoria,
        visible: p.visible,
      }));
      setItems(ui);
    } catch (e) {
      console.error(e);
      setErr("No se pudo cargar la lista de productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editing) {
        await actualizarProducto(form.id, form);
      } else {
        await crearProducto(form);
      }
      await cargar();
      setEditing(false);
      setForm({ id: "", name: "", price: 0, stock: 0, category: "", visible: true });
    } catch (e) {
      console.error(e);
      alert("No se pudo guardar el producto.");
    }
  }

  function editItem(p) {
    setForm({ ...p });
    setEditing(true);
  }

  async function deleteItem(id) {
    if (!confirm("¿Eliminar este producto?")) return;
    try {
      await eliminarProducto(id);
      await cargar();
    } catch (e) {
      console.error(e);
      alert("No se pudo eliminar.");
    }
  }

  return (
    <div>
      <h3>Gestión de Productos</h3>

      {err && <div className="alert alert-danger">{err}</div>}
      {loading && <p>Cargando...</p>}

      <form className="row g-2 mb-3" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input className="form-control" placeholder="Nombre" required
                 value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        </div>
        <div className="col-md-2">
          <input className="form-control" type="number" placeholder="Precio" required
                 value={form.price} onChange={e=>setForm({...form, price:+e.target.value})}/>
        </div>
        <div className="col-md-2">
          <input className="form-control" type="number" placeholder="Stock" required
                 value={form.stock} onChange={e=>setForm({...form, stock:+e.target.value})}/>
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Categoría"
                 value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
        </div>
        <div className="col-md-2 form-check d-flex align-items-center">
          <input type="checkbox" className="form-check-input me-2"
                 checked={form.visible} onChange={e=>setForm({...form, visible:e.target.checked})}/>
          <label>Visible</label>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            {editing ? "Guardar" : "Agregar"}
          </button>
          {editing && (
            <button type="button" className="btn btn-secondary ms-2"
                    onClick={()=>{
                      setEditing(false);
                      setForm({ id:"", name:"", price:0, stock:0, category:"", visible:true });
                    }}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>Categoría</th><th>Visible</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {items.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${Number(p.price).toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>{p.category}</td>
              <td>{p.visible ? "Sí" : "No"}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>editItem(p)}>Editar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteItem(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
          {items.length === 0 && !loading && (
            <tr><td colSpan="6" className="text-center">No hay productos</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
