import { api } from "./client";

export const listarUsuarios = async () => {
  const { data } = await api.get("/api/usuario");
  return data;
};
