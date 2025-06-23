// src/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./assets/nombreWayruSoft.png";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo_electronico: correo,
          contrasena: contrasena, // <- estos campos deben coincidir con el backend
        }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        // Ya no mostramos el rol porque lo quitaste del backend
        setMensaje(`${datos.mensaje}`);

        // Redireccionar al dashboard después de un breve mensaje
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        // Mensaje de error si las credenciales no son válidas
        setMensaje(`${datos.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <img src={logo} alt="WAYRU LOGO" className="login-logo" />
        <h2 className="login-title">Inicia sesión</h2>
        <p className="login-subtitle">Accede a tu cuenta para continuar</p>

        <label className="login-label">Correo electrónico</label>
        <input
          className="login-input"
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label className="login-label">Contraseña</label>
        <input
          className="login-input"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button type="submit" className="login-button">Ingresar</button>

        {mensaje && <p style={{ marginTop: "10px" }}>{mensaje}</p>}
      </form>
    </div>
  );
}
