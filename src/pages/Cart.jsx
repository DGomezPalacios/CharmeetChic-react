// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, total, clearCart } = useCart();

  return (
    <main className="catalogo">
      <h2 className="titulo-seccion">Tu Carrito</h2>

      {cart.length === 0 ? (
        <div className="empty-cart" style={{ textAlign: "center", marginTop: "50px" }}>
          <span className="emoji" style={{ fontSize: "50px" }}>🛒</span>
          <p>Tu carrito está vacío.</p>
          <Link className="btn" to="/catalogo">Ir al catálogo</Link>
        </div>
      ) : (
        <>
          <div className="productos">
            {cart.map((item, index) => (
              <div
                key={index}
                className="producto"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}
              >
                <img src={item.image} alt={item.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <p className="nombre">{item.name}</p>
                <p className="precio">${(item.price * item.qty).toLocaleString()}</p>

                <div
                  className="cantidad"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "5px"
                  }}
                >
                  <button onClick={() => updateQty(item.name, item.qty - 1)}>-</button>
                  <span style={{ minWidth: "30px", textAlign: "center" }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
                </div>

                <button
                  className="btn btn-danger"
                  style={{ marginTop: "10px" }}
                  onClick={() => removeFromCart(item.name)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total" style={{ marginTop: "30px", textAlign: "right" }}>
            <h3>Total: ${total.toLocaleString()}</h3>

            <div className="botones-carrito mt-3" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Link className="btn btn-secondary" to="/catalogo">Seguir comprando</Link>
              <Link className="btn btn-primary" to="/checkout">Finalizar compra</Link>
              <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
