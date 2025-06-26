package com.sistema.remuneraciones.backend.boletas.application;

import java.time.LocalDate;

public class BoletaResponse {
    private Long id;
    private String nombresEmpleado;
    private String periodoPago;
    private LocalDate fechaPago;
    private Double sueldoBase;
    private Double totalIngresos;
    private Double totalDescuentos;
    private Double totalAportaciones;
    private Double totalNeto;

    public BoletaResponse(Long id, String nombresEmpleado, String periodoPago, LocalDate fechaPago,
                          Double sueldoBase, Double totalIngresos, Double totalDescuentos, Double totalAportaciones, Double totalNeto) {
        this.id = id;
        this.nombresEmpleado = nombresEmpleado;
        this.periodoPago = periodoPago;
        this.fechaPago = fechaPago;
        this.sueldoBase = sueldoBase;
        this.totalIngresos = totalIngresos;
        this.totalDescuentos = totalDescuentos;
        this.totalAportaciones = totalAportaciones;
        this.totalNeto = totalNeto;
    }

    // Getters
    public Long getId() { return id; }
    public String getNombresEmpleado() { return nombresEmpleado; }
    public String getPeriodoPago() { return periodoPago; }
    public LocalDate getFechaPago() { return fechaPago; }
    public Double getSueldoBase() { return sueldoBase; }
    public Double getTotalIngresos() { return totalIngresos; }
    public Double getTotalDescuentos() { return totalDescuentos; }
    public Double getTotalAportaciones() { return totalAportaciones; }
    public Double getTotalNeto() { return totalNeto; }
}
