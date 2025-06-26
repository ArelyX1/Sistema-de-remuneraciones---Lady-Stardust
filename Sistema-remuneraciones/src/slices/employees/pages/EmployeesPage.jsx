import React, { useEffect, useState } from "react";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/employees", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar empleados");
        return res.json();
      })
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar la lista de empleados.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando empleados...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="employees-page">
      <h2>Lista de Empleados</h2>
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
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombres}</td>
              <td>{emp.apellidos}</td>
              <td>{emp.puesto}</td>
              <td>{emp.local}</td>
              <td>{emp.activo ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
