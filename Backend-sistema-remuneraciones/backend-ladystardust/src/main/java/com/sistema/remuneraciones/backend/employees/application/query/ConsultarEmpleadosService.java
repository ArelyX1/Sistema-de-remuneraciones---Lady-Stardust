package com.sistema.remuneraciones.backend.employees.application.query;

import com.sistema.remuneraciones.backend.employees.domain.EmpleadoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConsultarEmpleadosService implements ConsultarEmpleadosUseCase {
    private final EmpleadoRepository empleadoRepository;

    public ConsultarEmpleadosService(EmpleadoRepository empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }

    @Override
    public List<EmpleadoResponse> consultarTodos() {
        return empleadoRepository.findAll().stream()
            .map(e -> new EmpleadoResponse(
                e.getId(),
                e.getNombres(),
                e.getApellidos(),
                e.getPuesto(),
                e.getLocal(),
                e.getActivo()
            ))
            .collect(Collectors.toList());
    }
}
