import { apiProductos } from "./clientProductos";

// GET /productos
export const listarProductos = async () => {
  const { data } = await apiProductos.get("/productos");
  return data;
};

// POST /productos
export const crearProducto = async (form) => {
  const payload = {
    nombre: form.name,
    descripcion: form.description || "",
    precio: Number(form.price),
    stock: Number(form.stock),
    material: form.material || "",
    peso: form.peso ? Number(form.peso) : null,
    medidas: form.medidas || "",
    categoriaId: Number(form.categoriaId),  // OBLIGATORIO
  };

  const { data } = await apiProductos.post("/productos", payload);
  return data;
};

// PUT /productos/{id}
export const actualizarProducto = async (id, form) => {
  const payload = {
    nombre: form.name,
    descripcion: form.description || "",
    precio: Number(form.price),
    stock: Number(form.stock),
    material: form.material || "",
    peso: form.peso ? Number(form.peso) : null,
    medidas: form.medidas || "",
    categoriaId: Number(form.categoriaId), // OBLIGATORIO
  };

  const { data } =
    await apiProductos.put(`/productos/${id}`, payload);
  return data;
};

// DELETE /productos/{id}
export const eliminarProducto = async (id) => {
  await apiProductos.delete(`/productos/${id}`);
};
