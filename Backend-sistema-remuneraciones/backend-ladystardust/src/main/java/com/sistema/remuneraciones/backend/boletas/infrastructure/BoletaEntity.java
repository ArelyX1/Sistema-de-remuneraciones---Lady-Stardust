package com.sistema.remuneraciones.backend.boletas.infrastructure;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "TRS_Pago")
public class BoletaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pago")
    private Long idPago;

    @Column(name = "id_empleado")
    private Long idEmpleado;

    @Column(name = "periodo_pago")
    private String periodoPago;

    @Column(name = "fecha_pago")
    private LocalDate fechaPago;

    @Column(name = "monto_pagado")
    private Double montoPagado;

    @Column(name = "total_ingresos")
    private Double totalIngresos;

    @Column(name = "total_descuentos")
    private Double totalDescuentos;

    @Column(name = "total_aportaciones")
    private Double totalAportaciones;

    @Column(name = "total_neto")
    private Double totalNeto;

    // Getters y setters en camelCase
    public Long getIdPago() { return idPago; }
    public Long getIdEmpleado() { return idEmpleado; }
    public String getPeriodoPago() { return periodoPago; }
    public LocalDate getFechaPago() { return fechaPago; }
    public Double getMontoPagado() { return montoPagado; }
    public Double getTotalIngresos() { return totalIngresos; }
    public Double getTotalDescuentos() { return totalDescuentos; }
    public Double getTotalAportaciones() { return totalAportaciones; }
    public Double getTotalNeto() { return totalNeto; }
}
