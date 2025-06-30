import React from "react";
import "../styles/employees.css";

export default function PagarEmpleadoButton({ empleado, onPagar }) {
  if (!empleado) return null;
  return (
    <div className="pagar-btn-container">
      <button className="gothic-pay-btn" onClick={() => onPagar(empleado)}>
        Pagar a {empleado.nombres} {empleado.apellidos}
      </button>
    </div>
  );
}
