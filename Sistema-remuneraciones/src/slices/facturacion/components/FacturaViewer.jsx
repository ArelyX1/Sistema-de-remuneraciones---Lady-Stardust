import React from "react";

export default function FacturaViewer({ factura }) {
  if (!factura) return null;

  return (
    <div className="factura-container">
      <header className="factura-header">
        <div>
          <span className="factura-logo-text">Lady Stardust</span>
          <div><strong>RUC:</strong> 20123456789</div>
          <div><strong>Dirección:</strong> Panorámico, Arequipa</div>
        </div>
        <div className="factura-datos">
          <div><strong>Factura Electrónica</strong></div>
          <div><strong>Serie:</strong> {factura.serieFactura}</div>
          <div><strong>Correlativo:</strong> {factura.correlativoFactura}</div>
          <div><strong>Fecha de emisión:</strong> {new Date(factura.fechaEmision).toLocaleString()}</div>
        </div>
      </header>
      <section className="factura-receptor">
        <h4>Datos del receptor</h4>
        <div><strong>Nombre:</strong> {factura.nombreEmpleado}</div>
        <div><strong>RUC/DNI:</strong> {factura.rucEmpleado}</div>
      </section>
      <section className="factura-detalle">
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
              <td>{factura.conceptoServicio}</td>
              <td>S/ {Number(factura.montoBruto).toFixed(2)}</td>
              <td>S/ {Number(factura.montoIgv).toFixed(2)}</td>
              <td>S/ {Number(factura.montoTotal).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="factura-totales">
        <div>
          <strong>Subtotal:</strong> S/ {Number(factura.montoBruto).toFixed(2)}
        </div>
        <div>
          <strong>IGV (18%):</strong> S/ {Number(factura.montoIgv).toFixed(2)}
        </div>
        <div>
          <strong>Total:</strong> S/ {Number(factura.montoTotal).toFixed(2)}
        </div>
      </section>
      <footer className="factura-footer">
        <div>
          <strong>Representación impresa de la Factura Electrónica</strong>
        </div>
        <div>
          Esta factura es una simulación generada por el sistema Lady Stardust.
        </div>
      </footer>
    </div>
  );
}
