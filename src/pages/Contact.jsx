import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
    const [ok, setOk] = useState(false);
    const [err, setErr] = useState("");

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        setOk(false); setErr("");

        if (!form.nombre.trim()) return setErr("El nombre es obligatorio");
        if (!/^\S+@\S+\.\S+$/.test(form.email)) return setErr("Correo inválido");
        if (!form.mensaje.trim()) return setErr("El mensaje es obligatorio");

        setOk(true);
        setForm({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <div className="seccion centrada">
            <h2>Contáctanos</h2>
            <p>¿Tienes dudas, quieres personalizar una joya o necesitas ayuda? Escríbenos:</p>

            <form id="formContacto" className="formulario-contacto" onSubmit={onSubmit} noValidate>
                <label htmlFor="nombre">Nombre:</label>
                <input id="nombre" name="nombre" value={form.nombre} onChange={onChange} required />

                <label htmlFor="email">Correo electrónico:</label>
                <input id="email" name="email" value={form.email} onChange={onChange} required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="5" value={form.mensaje} onChange={onChange} required />

                <button type="submit">Enviar</button>
            </form>

            {ok && <div style={{ color: "green", marginTop: 15 }}>¡Tu mensaje fue enviado correctamente!</div>}
            {err && <div style={{ color: "red", marginTop: 15 }}>{err}</div>}
        </div>
    );
}
