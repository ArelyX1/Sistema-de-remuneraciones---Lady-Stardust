package com.sistema.remuneraciones.backend.facturacion.domain;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class FacturaSimulada {
    private String numeroFactura;
    private String serieFactura;
    private String correlativoFactura;
    private LocalDateTime fechaEmision;
    private String nombreEmpleado;
    private String rucEmpleado;
    private String conceptoServicio;
    private BigDecimal montoBruto;
    private BigDecimal montoIgv;
    private BigDecimal montoTotal;
    private String xmlGenerado;

    public FacturaSimulada(String serie, String correlativo, String nombreEmpleado, String rucEmpleado, String concepto, BigDecimal monto) {
        this.serieFactura = serie;
        this.correlativoFactura = correlativo;
        this.numeroFactura = serie + "-" + correlativo;
        this.fechaEmision = LocalDateTime.now();
        this.nombreEmpleado = nombreEmpleado;
        this.rucEmpleado = rucEmpleado;
        this.conceptoServicio = concepto;
        this.montoBruto = monto;
        this.montoIgv = monto.multiply(BigDecimal.valueOf(0.18));
        this.montoTotal = monto.add(this.montoIgv);
    }

    // Getters y setters (puedes generarlos automáticamente con tu IDE)
    // ...
    public String getNumeroFactura() { return numeroFactura; }
    public String getSerieFactura() { return serieFactura; }
    public String getCorrelativoFactura() { return correlativoFactura; }
    public LocalDateTime getFechaEmision() { return fechaEmision; }
    public String getNombreEmpleado() { return nombreEmpleado; }
    public String getRucEmpleado() { return rucEmpleado; }
    public String getConceptoServicio() { return conceptoServicio; }
    public BigDecimal getMontoBruto() { return montoBruto; }
    public BigDecimal getMontoIgv() { return montoIgv; }
    public BigDecimal getMontoTotal() { return montoTotal; }
    public String getXmlGenerado() { return xmlGenerado; }
    public void setXmlGenerado(String xmlGenerado) { this.xmlGenerado = xmlGenerado; }
}
