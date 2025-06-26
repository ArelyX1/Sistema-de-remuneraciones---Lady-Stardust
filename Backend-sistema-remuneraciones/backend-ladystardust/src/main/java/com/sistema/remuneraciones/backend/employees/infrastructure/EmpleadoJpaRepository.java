package com.sistema.remuneraciones.backend.employees.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoJpaRepository extends JpaRepository<EmpleadoEntity, Integer> {}
