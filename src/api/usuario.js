import { api } from "./client";

// GET /api/usuario
export const listarUsuarios = async () => {
  const { data } = await api.get("/api/usuario");
  return data;
};

// POST /api/usuario
export const crearUsuario = async (form) => {
  const payload = {
    nombre: form.name,
    email: form.email,
    blocked: Boolean(form.blocked), // o "activo": !form.blocked, segun tu backend
  };
  const { data } = await api.post("/api/usuario", payload);
  return data;
};

// PUT /api/usuario/{id}
export const actualizarUsuario = async (id, form) => {
  const payload = {
    nombre: form.name,
    email: form.email,
    blocked: Boolean(form.blocked),
  };
  const { data } = await api.put(`/api/usuario/${id}`, payload);
  return data;
};

// DELETE /api/usuario/{id}
export const eliminarUsuario = async (id) => {
  await api.delete(`/api/usuario/${id}`);
};
