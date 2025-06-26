package com.sistema.remuneraciones.backend.boletas.application;

public interface GenerarBoletaUseCase {
    BoletaResponse generarBoleta(Long idEmpleado, String periodoPago);
}
