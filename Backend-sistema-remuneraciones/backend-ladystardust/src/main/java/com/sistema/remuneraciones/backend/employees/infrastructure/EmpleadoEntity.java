package com.sistema.remuneraciones.backend.employees.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "MAE_Empleado")
public class EmpleadoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_empleado;

    private String nombres;
    private String apellidos;
    private Boolean activo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_puesto")
    private PuestoEntity puesto;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_local")
    private LocalEntity local;

    public Integer getId_empleado() { return id_empleado; }
    public String getNombres() { return nombres; }
    public String getApellidos() { return apellidos; }
    public Boolean getActivo() { return activo; }
    public PuestoEntity getPuesto() { return puesto; }
    public LocalEntity getLocal() { return local; }
}
