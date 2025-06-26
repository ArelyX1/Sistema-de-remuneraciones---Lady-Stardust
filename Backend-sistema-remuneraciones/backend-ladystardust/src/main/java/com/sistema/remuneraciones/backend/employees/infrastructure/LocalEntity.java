package com.sistema.remuneraciones.backend.employees.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "MAE_Local")
public class LocalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_local;

    private String nombre_local;

    public String getNombre_local() { return nombre_local; }
}
