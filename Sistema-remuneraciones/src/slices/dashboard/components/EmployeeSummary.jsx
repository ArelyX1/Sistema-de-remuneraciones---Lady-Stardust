import React, { useEffect, useState } from "react";

export default function EmployeeSummary() {
  const [total, setTotal] = useState("-");
  const [activos, setActivos] = useState("-");
  const [inactivos, setInactivos] = useState("-");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/employees", {
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Data en EmployeeSummary:", data);
        
        let empleados = [];
        if (Array.isArray(data)) {
          empleados = data;
        } else if (data.data && Array.isArray(data.data)) {
          empleados = data.data;
        } else if (data.empleados && Array.isArray(data.empleados)) {
          empleados = data.empleados;
        } else if (data.id) {
          empleados = [data];
        }
        
        setTotal(empleados.length);
        setActivos(empleados.filter(emp => emp.activo).length);
        setInactivos(empleados.filter(emp => !emp.activo).length);
      })
      .catch(error => {
        console.error("Error en EmployeeSummary:", error);
        setTotal("Error");
        setActivos("Error");
        setInactivos("Error");
      });
  }, []);

  return (
    <div className="employee-summary">
      <h3>Resumen de empleados</h3>
      <div className="employee-summary-grid">
        <div>
          <strong>Total:</strong>
          <div className="employee-summary-number">{total}</div>
        </div>
        <div>
          <strong>Activos:</strong>
          <div className="employee-summary-number">{activos}</div>
        </div>
        <div>
          <strong>Inactivos:</strong>
          <div className="employee-summary-number">{inactivos}</div>
        </div>
      </div>
    </div>
  );
}
