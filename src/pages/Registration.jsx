import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
    const [f, setF] = useState({
        nombres: "", apP: "", apM: "", rut: "", nacimiento: "",
        direccion: "", comuna: "", provincia: "", region: "",
        email: "", telefono: "", pass: ""
    });
    const [msg, setMsg] = useState("");

    const onChange = (e) => setF({ ...f, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        setMsg("");
        if (!f.nombres.trim()) return setMsg("Ingresa tus nombres");
        if (!/^\S+@\S+\.\S+$/.test(f.email)) return setMsg("Correo inválido");
        if (f.pass.length < 6) return setMsg("La contraseña debe tener mínimo 6 caracteres");
        // aquí iría POST /api/registro
        setMsg("Registro OK (simulado)");
    };

    return (
        <div className="seccion centrada">
            <h2>Crea tu cuenta</h2>
            <p>Completa tus datos para registrarte y poder realizar pedidos personalizados en nuestra tienda:</p>

            <form id="formRegistro" className="formulario-contacto" onSubmit={onSubmit} noValidate>
                <label htmlFor="nombres">Nombres *</label>
                <input id="nombres" value={f.nombres} onChange={onChange} />

                <label htmlFor="apP">Apellido Paterno *</label>
                <input id="apP" value={f.apP} onChange={onChange} />

                <label htmlFor="apM">Apellido Materno *</label>
                <input id="apM" value={f.apM} onChange={onChange} />

                <label htmlFor="rut">RUT *</label>
                <input id="rut" value={f.rut} onChange={onChange} placeholder="Ej: 12.345.678-9" />

                <label htmlFor="nacimiento">Fecha de Nacimiento *</label>
                <input id="nacimiento" type="date" value={f.nacimiento} onChange={onChange} />

                <label htmlFor="direccion">Dirección *</label>
                <input id="direccion" value={f.direccion} onChange={onChange} />

                <label htmlFor="comuna">Comuna *</label>
                <input id="comuna" value={f.comuna} onChange={onChange} />

                <label htmlFor="provincia">Provincia *</label>
                <input id="provincia" value={f.provincia} onChange={onChange} />

                <label htmlFor="region">Región *</label>
                <input id="region" value={f.region} onChange={onChange} />

                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" type="email" value={f.email} onChange={onChange} />

                <label htmlFor="telefono">Teléfono Fijo / Celular *</label>
                <input id="telefono" value={f.telefono} onChange={onChange} placeholder="+56 9 1234 5678" />

                <label htmlFor="pass">Contraseña *</label>
                <input id="pass" type="password" value={f.pass} onChange={onChange} />

                <p className="help" style={{ margin: "10px 0" }}>
                    Tus datos se utilizarán para procesar tu pedido y mejorar tu experiencia en el sitio.
                </p>

                <button type="submit" className="btn-primary">Registrarse</button>
                <p className="help" aria-live="polite">{msg}</p>

                <p className="help" style={{ textAlign: "center", marginTop: 10 }}>
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
                </p>
            </form>
        </div>
    );
}
