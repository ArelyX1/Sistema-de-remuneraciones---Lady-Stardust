import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import PagarEmpleadoButton from "../components/PagarEmpleadoButton";
import "../../facturacion/components/FacturaViewer"; // Solo para asegurar el import si usas JSX server-side
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

  const handleSelect = (empleado) => {
    setEmpleadoSeleccionado(empleado);
  };

  const handlePagar = async (empleado) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/api/facturas/simular", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        nombreEmpleado: empleado.nombres + " " + empleado.apellidos,
        rucEmpleado: empleado.numero_documento || "00000000",
        conceptoServicio: "Pago de honorarios por servicios",
        montoBruto: 1500
      })
    });
    const factura = await response.json();

    // HTML para la nueva pestaña
    const facturaHtml = `
      <html>
        <head>
          <title>Factura Electrónica</title>
          <style>
            body { background: #fff; font-family: 'Montserrat', Arial, sans-serif; margin: 0; padding: 2rem;}
            .factura-container { border: 2px solid #e0b0ff; border-radius: 12px; padding: 2rem; margin: 2rem auto; max-width: 600px; box-shadow: 0 0 24px #e0b0ff44; }
            .factura-header { display: flex; justify-content: space-between; border-bottom: 2px solid #e0b0ff; padding-bottom: 1rem; margin-bottom: 1rem; }
            .factura-logo-text { font-family: 'UnifrakturCook', cursive, serif; font-size: 2rem; color: #e0b0ff; }
            .factura-datos { font-size: 0.95rem; color: #333; }
            .factura-receptor h4, .factura-detalle h4 { margin-bottom: 0.5rem; color: #a34ddd; }
            .factura-detalle table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
            .factura-detalle th, .factura-detalle td { border: 1px solid #e0b0ff; padding: 0.5rem; text-align: center; }
            .factura-totales { text-align: right; font-size: 1.1rem; }
            .factura-totales div { margin-bottom: 0.2rem; }
            .factura-footer { border-top: 1px solid #e0b0ff; padding-top: 0.7rem; font-size: 0.95rem; color: #666; text-align: center; margin-top: 1.5rem; }
          </style>
        </head>
        <body>
          <div class="factura-container">
            <header class="factura-header">
              <div>
                <span class="factura-logo-text">Lady Stardust</span>
                <div><strong>RUC:</strong> 20123456789</div>
                <div><strong>Dirección:</strong> Panorámico, Arequipa</div>
              </div>
              <div class="factura-datos">
                <div><strong>Factura Electrónica</strong></div>
                <div><strong>Serie:</strong> ${factura.serieFactura}</div>
                <div><strong>Correlativo:</strong> ${factura.correlativoFactura}</div>
                <div><strong>Fecha de emisión:</strong> ${new Date(factura.fechaEmision).toLocaleString()}</div>
              </div>
            </header>
            <section class="factura-receptor">
              <h4>Datos del receptor</h4>
              <div><strong>Nombre:</strong> ${factura.nombreEmpleado}</div>
              <div><strong>RUC/DNI:</strong> ${factura.rucEmpleado}</div>
            </section>
            <section class="factura-detalle">
              <h4>Detalle del servicio</h4>
              <table>
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>IGV (18%)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>${factura.conceptoServicio}</td>
                    <td>S/ ${Number(factura.montoBruto).toFixed(2)}</td>
                    <td>S/ ${Number(factura.montoIgv).toFixed(2)}</td>
                    <td>S/ ${Number(factura.montoTotal).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section class="factura-totales">
              <div><strong>Subtotal:</strong> S/ ${Number(factura.montoBruto).toFixed(2)}</div>
              <div><strong>IGV (18%):</strong> S/ ${Number(factura.montoIgv).toFixed(2)}</div>
              <div><strong>Total:</strong> S/ ${Number(factura.montoTotal).toFixed(2)}</div>
            </section>
            <footer class="factura-footer">
              <div><strong>Representación impresa de la Factura Electrónica</strong></div>
              <div>Esta factura es una simulación generada por el sistema Lady Stardust.</div>
            </footer>
          </div>
        </body>
      </html>
    `;

    const facturaWindow = window.open("", "_blank");
    facturaWindow.document.write(facturaHtml);
    facturaWindow.document.close();
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
