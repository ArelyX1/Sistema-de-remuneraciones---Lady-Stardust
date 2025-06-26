package com.sistema.remuneraciones.backend.employees.infrastructure;

import com.sistema.remuneraciones.backend.employees.domain.Empleado;
import com.sistema.remuneraciones.backend.employees.domain.EmpleadoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class EmpleadoRepositoryImpl implements EmpleadoRepository {
    private final EmpleadoJpaRepository empleadoJpaRepository;

    public EmpleadoRepositoryImpl(EmpleadoJpaRepository empleadoJpaRepository) {
        this.empleadoJpaRepository = empleadoJpaRepository;
    }

    @Override
    public List<Empleado> findAll() {
        return empleadoJpaRepository.findAll().stream().map(entity ->
            new Empleado(
                entity.getId_empleado(),
                entity.getNombres(),
                entity.getApellidos(),
                entity.getPuesto() != null ? entity.getPuesto().getNombre_puesto() : null,
                entity.getLocal() != null ? entity.getLocal().getNombre_local() : null,
                entity.getActivo()
            )
        ).collect(Collectors.toList());
    }
}
