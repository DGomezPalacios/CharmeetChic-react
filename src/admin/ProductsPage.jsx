import { useState } from "react";
import { db } from "../data/store";

export default function ProductsPage() {
  const [items, setItems] = useState(db.getAll("products"));
  const [form, setForm] = useState({ id: "", name: "", price: 0, stock: 0, category: "", visible: true });
  const [editing, setEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      db.update("products", form.id, form);
    } else {
      db.create("products", { ...form, id: crypto.randomUUID() });
    }
    setItems(db.getAll("products"));
    setEditing(false);
    setForm({ id: "", name: "", price: 0, stock: 0, category: "", visible: true });
  }

  function editItem(p) { setForm(p); setEditing(true); }
  function deleteItem(id) { db.remove("products", id); setItems(db.getAll("products")); }

  return (
    <div>
      <h3>Gestión de Productos</h3>
      <form className="row g-2 mb-3" onSubmit={handleSubmit}>
        <div className="col-md-3"><input className="form-control" placeholder="Nombre" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/></div>
        <div className="col-md-2"><input className="form-control" type="number" placeholder="Precio" required value={form.price} onChange={e=>setForm({...form, price:+e.target.value})}/></div>
        <div className="col-md-2"><input className="form-control" type="number" placeholder="Stock" required value={form.stock} onChange={e=>setForm({...form, stock:+e.target.value})}/></div>
        <div className="col-md-3"><input className="form-control" placeholder="Categoría" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/></div>
        <div className="col-md-2 form-check d-flex align-items-center">
          <input type="checkbox" className="form-check-input me-2" checked={form.visible} onChange={e=>setForm({...form, visible:e.target.checked})}/>
          <label>Visible</label>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">{editing ? "Guardar" : "Agregar"}</button>
          {editing && <button type="button" className="btn btn-secondary ms-2" onClick={()=>{setEditing(false); setForm({id:"",name:"",price:0,stock:0,category:"",visible:true});}}>Cancelar</button>}
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
              <td>${p.price.toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>{p.category}</td>
              <td>{p.visible ? "Sí" : "No"}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>editItem(p)}>Editar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteItem(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
