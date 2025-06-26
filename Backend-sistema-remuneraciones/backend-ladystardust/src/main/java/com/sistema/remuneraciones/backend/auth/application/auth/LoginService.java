package com.sistema.remuneraciones.backend.auth.application.auth;

import com.sistema.remuneraciones.backend.auth.domain.Usuario;
import com.sistema.remuneraciones.backend.auth.domain.UsuarioRepository;
import com.sistema.remuneraciones.backend.auth.infrastructure.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements LoginUseCase {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public LoginService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public String login(String correo, String contrasena) {
        Usuario usuario = usuarioRepository.findByCorreoElectronico(correo)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        if (!passwordEncoder.matches(contrasena, usuario.getContrasena())) {
            throw new RuntimeException("Credenciales inválidas");
        }
        return jwtUtil.generateToken(usuario);
    }
}
