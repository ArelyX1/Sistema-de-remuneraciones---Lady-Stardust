package com.sistema.remuneraciones.backend.auth.infrastructure;


import jakarta.persistence.*;

@Entity
@Table(name = "MAE_Rol")
public class RolEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_rol;

    private String nombre_rol;

    // Getters y setters
    public Long getId_rol() { return id_rol; }
    public void setId_rol(Long id_rol) { this.id_rol = id_rol; }
    public String getNombre_rol() { return nombre_rol; }
    public void setNombre_rol(String nombre_rol) { this.nombre_rol = nombre_rol; }
}
