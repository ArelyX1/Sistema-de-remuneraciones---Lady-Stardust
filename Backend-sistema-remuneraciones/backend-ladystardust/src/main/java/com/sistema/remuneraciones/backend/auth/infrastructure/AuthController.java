package com.sistema.remuneraciones.backend.auth.infrastructure;

import com.sistema.remuneraciones.backend.auth.application.auth.LoginRequest;
import com.sistema.remuneraciones.backend.auth.application.auth.LoginResponse;
import com.sistema.remuneraciones.backend.auth.application.auth.LoginUseCase;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final LoginUseCase loginUseCase;

    public AuthController(LoginUseCase loginUseCase) {
        this.loginUseCase = loginUseCase;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        String token = loginUseCase.login(request.getCorreoElectronico(), request.getContrasena());
        return new LoginResponse(token);
    }
}
