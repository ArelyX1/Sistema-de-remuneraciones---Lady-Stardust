import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin({ correoElectronico, contrasena });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correoElectronico}
        onChange={e => setCorreoElectronico(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={e => setContrasena(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Conectando..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
