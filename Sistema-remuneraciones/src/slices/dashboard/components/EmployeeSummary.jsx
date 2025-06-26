import React, { useEffect, useState } from "react";

export default function EmployeeSummary() {
  const [total, setTotal] = useState("-");
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/employees", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setTotal(data.length))
      .catch(() => setTotal("Error"));
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
          <div className="employee-summary-number">Próximamente</div>
        </div>
        <div>
          <strong>Inactivos:</strong>
          <div className="employee-summary-number">Próximamente</div>
        </div>
      </div>
    </div>
  );
}
