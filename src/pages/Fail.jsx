import { Link } from "react-router-dom";

export default function Fail() {
  return (
    <main className="compra-fallida" style={{ textAlign: "center", marginTop: "60px" }}>
      <span style={{ fontSize: "60px" }}>❌</span>
      <h2>No se pudo procesar el pago</h2>
      <p>Por favor, revisa tus datos o intenta nuevamente.</p>
      <Link className="btn" to="/checkout">Volver al checkout</Link>
    </main>
  );
}
