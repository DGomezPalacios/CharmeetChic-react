import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUsuario } from "../api/usuario";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [showPass, setShowPass] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        if (!/^\S+@\S+\.\S+$/.test(email)) return setMsg("Correo inválido");
        if (pass.length < 6) return setMsg("La contraseña debe tener al menos 6 caracteres");

        try {
            const user = await loginUsuario(email, pass);

            // Guardar usuario en localStorage
            localStorage.setItem("user", JSON.stringify(user));

            // Redirección según rol
            if (user.rol === "ADMIN") {
                window.location.href = "/";
            } else {
                window.location.href = "/";
            }

        } catch (err) {
            setMsg("Credenciales incorrectas");
        }
    };

    return (
        <div className="seccion centrada">
            <h2>Iniciar sesión</h2>
            <p>Ingresa tu correo y contraseña para acceder a tu cuenta y gestionar tus pedidos:</p>

            <form id="formLogin" className="formulario-contacto" onSubmit={onSubmit} noValidate>
                <label htmlFor="loginEmail">Correo Electrónico *</label>
                <input
                    id="loginEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="loginPass">Contraseña *</label>
                <div style={{ position: "relative" }}>
  <input
    id="loginPass"
    type={showPass ? "text" : "password"}
    value={pass}
    onChange={(e) => setPass(e.target.value)}
  />

  <span
    onClick={() => setShowPass(!showPass)}
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#666"
    }}
  >
    {showPass ? "🙈" : "👁️"}
  </span>
</div>


                <div className="inline remember-row">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember" style={{ margin: 0 }}>Recuérdame</label>
                </div>

                <button type="submit" className="btn-primary">Acceder</button>

                <p className="help" aria-live="polite">{msg}</p>

                <p className="help" style={{ textAlign: "center", marginTop: 10 }}>
                    ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
                </p>
            </form>
        </div>
    );
}
