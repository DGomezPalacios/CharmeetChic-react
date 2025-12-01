// ===============================
//  CLIENTE AXIOS
// ===============================
import { api } from "./client";

const URL_USUARIO = "http://localhost:8090/api/usuario";


// ===============================
//  LOGIN
// ===============================
export const loginUsuario = async (correo, contrasenia) => {
  try {
    const payload = { correo, contrasenia };

    const { data } = await api.post(`${URL_USUARIO}/login`, payload);

    // Guardar token y usuario
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.usuario));

    // devolver TODO (token + usuario)
    return data;

  } catch (err) {
    console.log("ERROR LOGIN → ", err);
    throw new Error("Credenciales incorrectas");
  }
};


// ===============================
//  LISTAR USUARIOS
// ===============================
export const listarUsuarios = async () => {
  const { data } = await api.get(`${URL_USUARIO}`);
  return data;
};


// ===============================
//  CREAR USUARIO (ADMIN)
// ===============================
export const crearUsuario = async (form) => {
  const payload = {
    nombre: form.name,
    apellido: "",
    correo: form.email,
    contrasenia: form.password ?? "123456",
    rol: form.rol
  };

  const { data } = await api.post(`${URL_USUARIO}`, payload);
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

  const { data } = await api.put(`${URL_USUARIO}/${id}`, payload);
  return data;
};


// ===============================
//  ELIMINAR USUARIO
// ===============================
export const eliminarUsuario = async (id) => {
  await api.delete(`${URL_USUARIO}/${id}`);
};
