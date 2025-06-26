package com.sistema.remuneraciones.backend.auth.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioJpaRepository extends JpaRepository<UsuarioEntity, Long> {
    Optional<UsuarioEntity> findByCorreoElectronico(String correoElectronico); // Ahora coincide
}
