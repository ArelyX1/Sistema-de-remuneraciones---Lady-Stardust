package com.sistema.remuneraciones.backend.boletas.application;

import com.sistema.remuneraciones.backend.boletas.domain.Boleta;
import com.sistema.remuneraciones.backend.boletas.domain.BoletaRepository;
import org.springframework.stereotype.Service;

@Service
public class GenerarBoletaService implements GenerarBoletaUseCase {
    private final BoletaRepository boletaRepository;

    public GenerarBoletaService(BoletaRepository boletaRepository) {
        this.boletaRepository = boletaRepository;
    }

    @Override
    public BoletaResponse generarBoleta(Long idEmpleado, String periodoPago) {
        Boleta boleta = boletaRepository.generarBoletaParaEmpleado(idEmpleado, periodoPago);
        return new BoletaResponse(
            boleta.getId(),
            boleta.getNombresEmpleado(),
            boleta.getPeriodoPago(),
            boleta.getFechaPago(),
            boleta.getSueldoBase(),
            boleta.getTotalIngresos(),
            boleta.getTotalDescuentos(),
            boleta.getTotalAportaciones(),
            boleta.getTotalNeto()
        );
    }
}
