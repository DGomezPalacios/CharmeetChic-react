import { api } from "./client";

export const listarInventario = async () => {
  const { data } = await api.get("/api/inventario");
  return data;
};
