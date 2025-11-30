import { api } from "./client";

// ===============================
//  LOGIN
// ===============================
export const loginUsuario = async (correo, contrasenia) => {
  try {
    const payload = { correo, contrasenia };
    const { data } = await api.post("/api/usuario/login", payload);
    return data;
  } catch (err) {
    throw new Error("Credenciales incorrectas");
  }
};

// ===============================
//  LISTAR USUARIOS
// ===============================
export const listarUsuarios = async () => {
  const { data } = await api.get("/api/usuario");
  return data;
};

// ===============================
//  CREAR USUARIO (ADMIN)
// ===============================
export const crearUsuario = async (form) => {
  const payload = {
    nombre: form.name,
    apellido: "", // si no usas apellido
    correo: form.email,
    contrasenia: form.password ?? "123456",
    rol: form.rol
  };

  const { data } = await api.post("/api/usuario", payload);
  return data;
};

// ===============================
//  ACTUALIZAR USUARIO
// ===============================
export const actualizarUsuario = async (id, form) => {
  const payload = {
    nombre: form.name,
    apellido: "",
    correo: form.email,
    contrasenia: form.password ?? "123456",
    rol: form.rol
  };

  const { data } = await api.put(`/api/usuario/${id}`, payload);
  return data;
};

// ===============================
//  ELIMINAR USUARIO
// ===============================
export const eliminarUsuario = async (id) => {
  await api.delete(`/api/usuario/${id}`);
};
