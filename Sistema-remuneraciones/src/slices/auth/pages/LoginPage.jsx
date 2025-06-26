import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ correoElectronico, contrasena }) => {
    setError(null);
    setLoginSuccess(null);
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correoElectronico, contrasena }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setLoginSuccess("¡Conexión exitosa con la base de datos! Token recibido.");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setError("Respuesta inesperada del servidor.");
      }
    } catch {
      setError("Error de autenticación o de conexión con la base de datos.");
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar sesión</h2>
      <LoginForm onLogin={handleLogin} />
      {loginSuccess && <div className="success-message">{loginSuccess}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
