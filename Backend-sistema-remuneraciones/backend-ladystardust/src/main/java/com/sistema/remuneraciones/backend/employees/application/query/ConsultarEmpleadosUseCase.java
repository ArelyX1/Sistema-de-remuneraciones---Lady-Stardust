package com.sistema.remuneraciones.backend.employees.application.query;

import java.util.List;

public interface ConsultarEmpleadosUseCase {
    List<EmpleadoResponse> consultarTodos();
}
