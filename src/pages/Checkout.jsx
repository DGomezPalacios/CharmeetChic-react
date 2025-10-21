import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    direccion: "",
    departamento: "",
    comuna: "",
    ciudad: "",
    region: "",
    indicaciones: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calcular totales
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const envio = subtotal > 0 ? 3000 : 0;
  const total = subtotal + envio;

  const handleSubmit = (e) => {
    e.preventDefault();

    const pagoExitoso = Math.random() > 0.3; // Simulación de pago
    if (!pagoExitoso) {
      navigate("/fail");
      return;
    }

    // Preparar datos del cliente
    const customerData = {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      correo: formData.correo,
      telefono: formData.telefono,
      direccion: formData.direccion,
      departamento: formData.departamento,
      comuna: formData.comuna,
      ciudad: formData.ciudad,
      region: formData.region,
      indicaciones: formData.indicaciones,
    };

    // Navegar a Success con todos los datos
    navigate("/success", {
      state: {
        cart,
        subtotal,
        envio,
        total,
        customer: customerData,
      },
    });
  };

  return (
    <main className="checkout-page container mt-4">
      <h2 className="titulo-seccion text-center mb-4">Finalizar Compra</h2>

      <div className="row justify-content-center">
        {/* Formulario cliente y dirección */}
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h4 className="mb-3">Datos del cliente</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input
                  type="text"
                  name="apellidos"
                  className="form-control"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
                <div className="mb-3">
                <label className="form-label">Teléfono de contacto</label>
                <input
                  type="tel"
                  name="telefono"
                  className="form-control"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <h4 className="mb-3 mt-4">Dirección de entrega</h4>
              <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  value={formData.calle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Departamento (opcional)</label>
                <input
                  type="text"
                  name="departamento"
                  className="form-control"
                  value={formData.departamento}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Comuna</label>
                <input
                  type="text"
                  name="comuna"
                  className="form-control"
                  value={formData.comuna}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  className="form-control"
                  value={formData.ciudad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Región</label>
                <input
                  type="text"
                  name="region"
                  className="form-control"
                  value={formData.region}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Indicaciones para la entrega (opcional)</label>
                <textarea
                  name="indicaciones"
                  className="form-control"
                  value={formData.indicaciones}
                  onChange={handleChange}
                  rows="2"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Confirmar compra
              </button>
            </form>
          </div>
        </div>

        {/* Resumen del carrito */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card shadow p-4">
            <h4 className="mb-3">Resumen del pedido</h4>
            {cart.length === 0 ? (
              <p className="text-muted">Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="list-group list-group-flush mb-3">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong> <br />
                        <small>{item.qty} x ${item.price.toLocaleString()}</small>
                      </div>
                      <strong>${(item.price * item.qty).toLocaleString()}</strong>
                    </li>
                  ))}
                </ul>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal</span>
                    <strong>${subtotal.toLocaleString()}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Envío</span>
                    <strong>${envio.toLocaleString()}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>${total.toLocaleString()}</strong>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
