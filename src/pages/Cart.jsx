import { Link } from "react-router-dom";

export default function Cart() {
    return (
        <main className="under-construction">
            <span className="emoji">🚧</span>
            <h1>Página en construcción</h1>
            <p>Estamos trabajando para habilitar tu carrito de compras. ¡Vuelve pronto!</p>
            <Link className="btn" to="/catalogo">Ir al catálogo</Link>
        </main>
    );
}
