package com.sistema.remuneraciones.backend.facturacion.application;

import com.sistema.remuneraciones.backend.facturacion.domain.FacturaSimulada;
import com.sistema.remuneraciones.backend.facturacion.domain.FacturaSimuladorService;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;

@Component
public class SimularFacturaUseCase {
    private final FacturaSimuladorService simuladorService;

    public SimularFacturaUseCase(FacturaSimuladorService simuladorService) {
        this.simuladorService = simuladorService;
    }

    public FacturaSimulada ejecutar(String nombreEmpleado, String rucEmpleado, String concepto, BigDecimal monto) {
        return simuladorService.simularFactura(nombreEmpleado, rucEmpleado, concepto, monto);
    }
}
