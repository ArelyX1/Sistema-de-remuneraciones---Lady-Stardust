package com.sistema.remuneraciones.backend.boletas.domain;

public interface BoletaRepository {
    Boleta generarBoletaParaEmpleado(Long idEmpleado, String periodoPago);
}
