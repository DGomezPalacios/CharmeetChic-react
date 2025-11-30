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

  const [form, setForm]     = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    rol: "CLIENTE",
    blocked: false,
  });

  const cargar = async () => {
    setLoad(true);
    setErr(null);
    try {
      const data = await listarUsuarios();

      const ui = (data ?? []).map((u) => ({
        id: u.id,
        name: u.nombre,
        email: u.correo,
        rol: u.rol,
        blocked: u.blocked ?? false,
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
      setForm({
        id: "",
        name: "",
        email: "",
        password: "",
        rol: "CLIENTE",
        blocked: false,
      });
    } catch (e) {
      console.error(e);
      alert("No se pudo guardar el usuario.");
    }
  };

  const onEdit = (u) => {
    setForm({
      id: u.id,
      name: u.name,
      email: u.email,
      password: "",
      rol: u.rol,
      blocked: u.blocked,
    });
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
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Nombre"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <select
            className="form-select"
            value={form.rol}
            onChange={(e) => setForm({ ...form, rol: e.target.value })}
          >
            <option value="ADMIN">Admin</option>
            <option value="CLIENTE">Cliente</option>
            <option value="VENDEDOR">Vendedor</option>
          </select>
        </div>

        <div className="col-md-2">
          <input
            className="form-control"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            {editing ? "Guardar" : "Agregar"}
          </button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && !loading ? (
            <tr>
              <td colSpan="4" className="text-center">
                No hay usuarios.
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.rol}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(u)}>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(u.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
