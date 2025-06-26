package com.sistema.remuneraciones.backend.auth.application.auth;

public interface LoginUseCase {
    String login(String correo, String contrasena);
}
