import { useEffect, useState } from "react";
import { listarUsuarios } from "../../api/usuario"; // <-- llama a tu backend real

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar usuarios desde el backend
  useEffect(() => {
    listarUsuarios()
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error("Error al obtener usuarios:", err);
        setError("No se pudo cargar la lista de usuarios");
      })
      .finally(() => setLoading(false));
  }, []);

  // (Simulado) bloquea usuario 
  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, blocked: !u.blocked } : u
      )
    );
    alert("⚠️ Esta acción se simula localmente");
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No hay usuarios registrados.
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.nombre ?? u.name}</td>
                <td>{u.email}</td>
                <td>{u.blocked ? "Bloqueado" : "Activo"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => toggleBlock(u.id)}
                  >
                    {u.blocked ? "Desbloquear" : "Bloquear"}
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
