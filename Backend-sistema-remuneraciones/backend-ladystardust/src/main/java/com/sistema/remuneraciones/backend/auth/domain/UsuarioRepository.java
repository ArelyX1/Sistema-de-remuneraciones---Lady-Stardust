package com.sistema.remuneraciones.backend.auth.domain;

import java.util.Optional;

public interface UsuarioRepository {
    Optional<Usuario> findByCorreoElectronico(String correo);
}
