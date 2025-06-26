package com.sistema.remuneraciones.backend.boletas.infrastructure;

import com.sistema.remuneraciones.backend.boletas.domain.Boleta;
import com.sistema.remuneraciones.backend.boletas.domain.BoletaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.Optional;

@Repository
public class BoletaRepositoryImpl implements BoletaRepository {
    private final BoletaJpaRepository boletaJpaRepository;

    public BoletaRepositoryImpl(BoletaJpaRepository boletaJpaRepository) {
        this.boletaJpaRepository = boletaJpaRepository;
    }

    @Override
    public Boleta generarBoletaParaEmpleado(Long idEmpleado, String periodoPago) {
        Optional<BoletaEntity> optionalEntity = boletaJpaRepository.findByIdEmpleadoAndPeriodoPago(idEmpleado, periodoPago);

        BoletaEntity entity = optionalEntity.orElse(null);

        if (entity == null) {
            // Devuelve una boleta vacía o con "No corresponde"
            return new Boleta(
                null,
                idEmpleado,
                "No corresponde",
                periodoPago,
                null,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
            );
        }

        return new Boleta(
            entity.getIdPago(),
            entity.getIdEmpleado(),
            "No corresponde", // O consulta el nombre real del empleado
            entity.getPeriodoPago(),
            entity.getFechaPago(),
            entity.getMontoPagado(),
            entity.getTotalIngresos(),
            entity.getTotalDescuentos(),
            entity.getTotalAportaciones(),
            entity.getTotalNeto()
        );
    }

    
    // Métodos auxiliares para manejar valores null
    private String defaultString(String value, String defaultValue) {
        return value != null ? value : defaultValue;
    }
    
    private LocalDate defaultDate(LocalDate value, LocalDate defaultValue) {
        return value != null ? value : defaultValue;
    }
    
    private Double defaultDouble(Double value, Double defaultValue) {
        return value != null ? value : defaultValue;
    }
}
