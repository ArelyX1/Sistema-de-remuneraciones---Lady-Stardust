import React from "react";

export default function Topbar() {
  return (
    <header className="topbar">
      <h1>Pagos Pendientes</h1>
      <nav>
        <button>Panel</button>
        <button>Empleado</button>
        <button>Pagos</button>
        <button>Ajustes</button>
      </nav>
      <button className="close-btn">X</button>
    </header>
  );
}
