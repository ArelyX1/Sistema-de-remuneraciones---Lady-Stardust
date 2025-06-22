// src/Login.jsx
import "./Login.css";
import logo from "./assets/nombreWayruSoft.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="WAYRU LOGO" className="login-logo" />
        <h2 className="login-title">Inicia sesión</h2>
        <p className="login-subtitle">Accede a tu cuenta para continuar</p>

        <label className="login-label">Correo electrónico</label>
        <input className="login-input" type="email" placeholder="Ingresa tu correo electrónico" />

        <label className="login-label">Contraseña</label>
        <input className="login-input" type="password" placeholder="Ingresa tu contraseña" />

        <button className="login-button">Ingresar</button>
      </div>
    </div>
  );
}
