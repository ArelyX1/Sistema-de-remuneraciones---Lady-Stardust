import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ userName }) {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Panel</li>
          <li onClick={() => navigate("/empleados")}>Empleados</li>
          <li>Descripción</li>
          <li>Estadísticas</li>
          <li>Pagos recientes</li>
        </ul>
      </nav>
      <div className="profile-section">
        <div className="profile-pic">Perfil</div>
        <div className="profile-info">
          <span>{userName}</span>
        </div>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
