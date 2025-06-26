package com.sistema.remuneraciones.backend.boletas.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BoletaJpaRepository extends JpaRepository<BoletaEntity, Long> {
    Optional<BoletaEntity> findByIdEmpleadoAndPeriodoPago(Long idEmpleado, String periodoPago);
}
