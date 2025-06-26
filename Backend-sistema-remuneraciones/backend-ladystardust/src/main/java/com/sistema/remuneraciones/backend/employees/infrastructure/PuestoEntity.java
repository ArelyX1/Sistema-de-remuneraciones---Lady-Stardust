package com.sistema.remuneraciones.backend.employees.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "MAE_Puesto")
public class PuestoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_puesto;

    private String nombre_puesto;

    // Getter
    public String getNombre_puesto() { return nombre_puesto; }
}
