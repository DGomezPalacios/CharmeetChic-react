import { useState } from "react";
import { db } from "../data/store";

export default function UsersPage() {
  const [users, setUsers] = useState(db.getAll("users"));
  function toggleBlock(id) {
    const u = users.find(x=>x.id===id);
    db.update("users", id, { blocked: !u.blocked });
    setUsers(db.getAll("users"));
  }

  return (
    <div>
      <h3>Usuarios</h3>
      <table className="table">
        <thead><tr><th>Nombre</th><th>Email</th><th>Estado</th><th></th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.blocked ? "Bloqueado" : "Activo"}</td>
              <td><button className="btn btn-sm btn-outline-warning" onClick={()=>toggleBlock(u.id)}>{u.blocked ? "Desbloquear" : "Bloquear"}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
