package com.sistema.remuneraciones.backend.auth.infrastructure;

import com.sistema.remuneraciones.backend.auth.domain.Usuario;
import com.sistema.remuneraciones.backend.auth.domain.UsuarioRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UsuarioRepositoryImpl implements UsuarioRepository {
    private final UsuarioJpaRepository jpaRepository;

    public UsuarioRepositoryImpl(UsuarioJpaRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public Optional<Usuario> findByCorreoElectronico(String correo) {
        return jpaRepository.findByCorreoElectronico(correo)
            .map(entity -> new Usuario(
                entity.getIdUsuario(),
                entity.getCorreoElectronico(),
                entity.getContrasena(),
                entity.getRol().getNombre_rol(),
                entity.getEstado()
            ));
    }
}
