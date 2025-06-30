import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeesPage() {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/employees", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setEmpleados(data);
        } else if (data.data && Array.isArray(data.data)) {
          setEmpleados(data.data);
        } else if (data.empleados && Array.isArray(data.empleados)) {
          setEmpleados(data.empleados);
        } else if (data.id) {
          setEmpleados([data]);
        } else {
          setError("Estructura de respuesta inesperada del servidor.");
        }
        setCargando(false);
      })
      .catch(error => {
        setError(`No se pudo cargar la lista de empleados: ${error.message}`);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div>Cargando empleados...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="employees-page">
      <h2>Lista de Empleados ({empleados.length})</h2>
      {/* BOTÓN PARA IR A PAGAR EMPLEADOS */}
      <button
        className="gothic-pay-btn"
        style={{
          margin: "1rem 0",
          background: "#18141a",
          color: "#e0b0ff",
          border: "2px solid #e0b0ff",
          fontFamily: "'UnifrakturCook', cursive, serif",
          fontSize: "1.1rem",
          padding: "1rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 0 16px #e0b0ff55",
          letterSpacing: "0.12em",
          transition: "all 0.2s",
          cursor: "pointer"
        }}
        onClick={() => navigate("/pagar-empleados")}
      >
        Pagar empleados
      </button>
      {empleados.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Puesto</th>
              <th>Local</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map(emp => (
              <tr key={emp.id || emp.id_empleado}>
                <td>{emp.id || emp.id_empleado}</td>
                <td>{emp.nombres}</td>
                <td>{emp.apellidos}</td>
                <td>{emp.puesto || emp.nombrePuesto || "No asignado"}</td>
                <td>{emp.local || emp.nombreLocal || "No asignado"}</td>
                <td>{emp.activo ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No hay empleados registrados.</div>
      )}
    </div>
  );
}
