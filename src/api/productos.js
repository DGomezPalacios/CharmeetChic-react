import { api } from "./client";

// GET /api/productos
export const listarProductos = async () => {
  const { data } = await api.get("/api/productos");
  return data;
};

// POST /api/productos
export const crearProducto = async (form) => {
  const payload = {
    nombre:   form.name,
    precio:   Number(form.price),
    stock:    Number(form.stock),
    categoria: form.category,
    visible:  Boolean(form.visible),
  };
  const { data } = await api.post("/api/productos", payload);
  return data;
};

// PUT /api/productos/{id}
export const actualizarProducto = async (id, form) => {
  const payload = {
    nombre:   form.name,
    precio:   Number(form.price),
    stock:    Number(form.stock),
    categoria: form.category,
    visible:  Boolean(form.visible),
  };
  const { data } = await api.put(`/api/productos/${id}`, payload);
  return data;
};

// DELETE /api/productos/{id}
export const eliminarProducto = async (id) => {
  await api.delete(`/api/productos/${id}`);
};
