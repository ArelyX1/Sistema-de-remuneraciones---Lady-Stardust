import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import PagarEmpleadoButton from "../components/PagarEmpleadoButton";
import "../styles/employees.css";

export default function PagarEmpleadosPage() {
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/employees", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setEmpleados(Array.isArray(data) ? data : [data]))
      .catch(() => setEmpleados([]));
  }, []);

  const handleSelect = (empleado) => setEmpleadoSeleccionado(empleado);

  const handlePagar = (empleado) => {
    alert(`Pago realizado a ${empleado.nombres} ${empleado.apellidos} (demo)`);
  };

  return (
    <div className="pagar-empleados-page-gothic">
      <h2 className="gothic-title">Pagar Empleados</h2>
      <div className="empleados-list-gothic">
        {empleados.map(emp => (
          <EmployeeCard
            key={emp.id || emp.id_empleado}
            empleado={emp}
            selected={empleadoSeleccionado && ((emp.id === empleadoSeleccionado.id) || (emp.id_empleado === empleadoSeleccionado.id_empleado))}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <PagarEmpleadoButton empleado={empleadoSeleccionado} onPagar={handlePagar} />
    </div>
  );
}
