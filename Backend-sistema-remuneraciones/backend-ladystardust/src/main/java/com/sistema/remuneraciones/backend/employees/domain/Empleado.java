package com.sistema.remuneraciones.backend.employees.domain;

public class Empleado {
    private Integer id;
    private String nombres;
    private String apellidos;
    private String puesto;
    private String local;
    private Boolean activo;

    public Empleado(Integer id, String nombres, String apellidos, String puesto, String local, Boolean activo) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.puesto = puesto;
        this.local = local;
        this.activo = activo;
    }

    // Getters y setters
    public Integer getId() { return id; }
    public String getNombres() { return nombres; }
    public String getApellidos() { return apellidos; }
    public String getPuesto() { return puesto; }
    public String getLocal() { return local; }
    public Boolean getActivo() { return activo; }
}
