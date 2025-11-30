import { api } from "./clientCompras";

// GET /compras
export const listarCompras = async () => {
  const { data } = await api.get("/compras");
  return data;
};

// GET compras por usuario
export const listarComprasPorUsuario = async (userId) => {
  const { data } = await api.get(`/compras/usuario/${userId}`);
  return data;
};

// POST /compras
export const crearCompra = async (form) => {
  const payload = {
    usuarioId: form.usuarioId,
    productos: form.productos,   // lista de productos: [{id, cantidad}]
    total: form.total
  };

  const { data } = await api.post("/compras", payload);
  return data;
};

// PUT /compras/{id}
export const actualizarCompra = async (id, form) => {
  const payload = {
    usuarioId: form.usuarioId,
    productos: form.productos,
    total: form.total
  };

  const { data } = await api.put(`/compras/${id}`, payload);
  return data;
};

// DELETE /compras/{id}
export const eliminarCompra = async (id) => {
  await api.delete(`/compras/${id}`);
};
