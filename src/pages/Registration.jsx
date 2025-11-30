import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { crearUsuario } from "../api/usuario";

export default function Registration() {
    const [f, setF] = useState({
        nombres: "", apP: "", apM: "",
        email: "", telefono: "", pass: ""
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => setF({ ...f, [e.target.id]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        if (!f.nombres.trim()) return setMsg("Ingresa tus nombres");
        if (!/^\S+@\S+\.\S+$/.test(f.email)) return setMsg("Correo inválido");
        if (f.pass.length < 6) return setMsg("La contraseña debe tener mínimo 6 caracteres");

        try {
            await crearUsuario({
                name: f.nombres,
                email: f.email,
                password: f.pass,
                rol: "COMPRADOR"   // ← Cliente automático
            });

            setMsg("Cuenta creada exitosamente");
            setTimeout(() => navigate("/login"), 1000);

        } catch (err) {
            console.error(err);
            setMsg("Error al registrar la cuenta.");
        }
    };

    return (
        <div className="seccion centrada">
            <h2>Crea tu cuenta</h2>

            <form id="formRegistro" className="formulario-contacto" onSubmit={onSubmit} noValidate>

                <label htmlFor="nombres">Nombres *</label>
                <input id="nombres" value={f.nombres} onChange={onChange} />

                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" type="email" value={f.email} onChange={onChange} />

                <label htmlFor="telefono">Teléfono *</label>
                <input id="telefono" value={f.telefono} onChange={onChange} />

                <label htmlFor="pass">Contraseña *</label>
                <input id="pass" type="password" value={f.pass} onChange={onChange} />

                <button type="submit" className="btn-primary">Registrarse</button>
                <p className="help">{msg}</p>

                <p className="help" style={{ textAlign: "center", marginTop: 10 }}>
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
                </p>
            </form>
        </div>
    );
}
