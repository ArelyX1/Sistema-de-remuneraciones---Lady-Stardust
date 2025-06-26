package com.sistema.remuneraciones.backend.boletas.domain;

import java.time.LocalDate;

public class Boleta {
    private Long id;
    private Long idEmpleado;
    private String nombresEmpleado;
    private String periodoPago;
    private LocalDate fechaPago;
    private Double sueldoBase;
    private Double totalIngresos;
    private Double totalDescuentos;
    private Double totalAportaciones;
    private Double totalNeto;

    public Boleta(Long id, Long idEmpleado, String nombresEmpleado, String periodoPago, LocalDate fechaPago,
                  Double sueldoBase, Double totalIngresos, Double totalDescuentos, Double totalAportaciones, Double totalNeto) {
        this.id = id;
        this.idEmpleado = idEmpleado;
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
    public Long getIdEmpleado() { return idEmpleado; }
    public String getNombresEmpleado() { return nombresEmpleado; }
    public String getPeriodoPago() { return periodoPago; }
    public LocalDate getFechaPago() { return fechaPago; }
    public Double getSueldoBase() { return sueldoBase; }
    public Double getTotalIngresos() { return totalIngresos; }
    public Double getTotalDescuentos() { return totalDescuentos; }
    public Double getTotalAportaciones() { return totalAportaciones; }
    public Double getTotalNeto() { return totalNeto; }
}
