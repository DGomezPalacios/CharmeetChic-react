import { useEffect, useState } from "react";
import {
  listarUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../api/usuario";

export default function UsersPage() {
  const [users, setUsers]   = useState([]);
  const [loading, setLoad]  = useState(true);
  const [err, setErr]       = useState(null);
  const [editing, setEdit]  = useState(false);
  const [form, setForm]     = useState({ id:"", name:"", email:"", blocked:false });

  const cargar = async () => {
    setLoad(true); setErr(null);
    try {
      const data = await listarUsuarios();
      // normaliza campos desde tu DTO
      const ui = (data ?? []).map(u => ({
        id: u.id,
        name: u.nombre ?? u.name ?? "",
        email: u.email ?? "",
        blocked: u.blocked ?? (u.activo === false ? true : false),
      }));
      setUsers(ui);
    } catch (e) {
      console.error(e);
      setErr("No se pudo obtener la lista de usuarios");
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await actualizarUsuario(form.id, form);
      } else {
        await crearUsuario(form);
      }
      await cargar();
      setEdit(false);
      setForm({ id:"", name:"", email:"", blocked:false });
    } catch (e) {
      console.error(e);
      alert("No se pudo guardar el usuario.");
    }
  };

  const onEdit = (u) => {
    setForm({ ...u });
    setEdit(true);
  };

  const onDelete = async (id) => {
    if (!window.confirm("¿Eliminar este usuario?")) return;
    try {
      await eliminarUsuario(id);
      await cargar();
    } catch (e) {
      console.error(e);
      alert("No se pudo eliminar.");
    }
  };

  return (
    <div>
      <h3>Usuarios</h3>

      {err && <div className="alert alert-danger">{err}</div>}
      {loading && <p>Cargando...</p>}

      <form className="row g-2 mb-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Nombre"
            required
            value={form.name}
            onChange={(e)=>setForm({ ...form, name:e.target.value })}
          />
        </div>
        <div className="col-md-5">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e)=>setForm({ ...form, email:e.target.value })}
          />
        </div>
        <div className="col-md-2 form-check d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={form.blocked}
            onChange={(e)=>setForm({ ...form, blocked:e.target.checked })}
          />
          <label>Bloqueado</label>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            {editing ? "Guardar" : "Agregar"}
          </button>
          {editing && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={()=>{
                setEdit(false);
                setForm({ id:"", name:"", email:"", blocked:false });
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <table className="table">
        <thead>
          <tr><th>Nombre</th><th>Email</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {users.length === 0 && !loading ? (
            <tr><td colSpan="4" className="text-center">No hay usuarios.</td></tr>
          ) : users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.blocked ? "Bloqueado" : "Activo"}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>onEdit(u)}>Editar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>onDelete(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
