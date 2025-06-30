import React from "react";
import "../styles/employees.css";

export default function EmployeeCard({ empleado, selected, onSelect }) {
  return (
    <div
      className={`empleado-card-gothic${selected ? " selected" : ""}`}
      onClick={() => onSelect(empleado)}
    >
      <div className="empleado-card-header">
        {empleado.nombres} {empleado.apellidos}
      </div>
      <div className="empleado-card-body">
        <span>{empleado.puesto}</span>
        <span>{empleado.local}</span>
        <span className={empleado.activo ? "activo" : "inactivo"}>
          {empleado.activo ? "Activo" : "Inactivo"}
        </span>
      </div>
    </div>
  );
}
