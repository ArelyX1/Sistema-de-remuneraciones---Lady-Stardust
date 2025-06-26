package com.sistema.remuneraciones.backend.employees.domain;

import java.util.List;

public interface EmpleadoRepository {
    List<Empleado> findAll();
}
