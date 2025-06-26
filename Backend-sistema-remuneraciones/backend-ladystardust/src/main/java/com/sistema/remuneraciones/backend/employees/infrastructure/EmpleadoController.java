package com.sistema.remuneraciones.backend.employees.infrastructure;

import com.sistema.remuneraciones.backend.employees.application.query.ConsultarEmpleadosUseCase;
import com.sistema.remuneraciones.backend.employees.application.query.EmpleadoResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmpleadoController {
    private final ConsultarEmpleadosUseCase consultarEmpleadosUseCase;

    public EmpleadoController(ConsultarEmpleadosUseCase consultarEmpleadosUseCase) {
        this.consultarEmpleadosUseCase = consultarEmpleadosUseCase;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('Administrador de Sistemas','Administrador','Empleado')")
    public List<EmpleadoResponse> getAll() {
        return consultarEmpleadosUseCase.consultarTodos();
    }
}
