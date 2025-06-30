import React, { useState } from "react";
import FacturaViewer from "../components/FacturaViewer";
import "../styles/factura.css";

export default function FacturaSimuladaPage() {
  const [factura, setFactura] = useState(null);
  const [form, setForm] = useState({
    nombreEmpleado: "",
    rucEmpleado: "",
    conceptoServicio: "",
    montoBruto: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSimular = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/api/facturas/simular", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        nombreEmpleado: form.nombreEmpleado,
        rucEmpleado: form.rucEmpleado,
        conceptoServicio: form.conceptoServicio,
        montoBruto: form.montoBruto
      })
    });
    const data = await response.json();
    setFactura(data);
  };

  return (
    <div className="factura-simulador-page">
      <h2>Simulación de Factura Electrónica</h2>
      <form className="factura-form" onSubmit={handleSimular}>
        <input
          type="text"
          name="nombreEmpleado"
          placeholder="Nombre del empleado"
          value={form.nombreEmpleado}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rucEmpleado"
          placeholder="RUC o DNI del empleado"
          value={form.rucEmpleado}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="conceptoServicio"
          placeholder="Concepto del servicio"
          value={form.conceptoServicio}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="montoBruto"
          placeholder="Monto bruto"
          value={form.montoBruto}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        <button type="submit">Simular factura</button>
      </form>
      {factura && <FacturaViewer factura={factura} />}
    </div>
  );
}
