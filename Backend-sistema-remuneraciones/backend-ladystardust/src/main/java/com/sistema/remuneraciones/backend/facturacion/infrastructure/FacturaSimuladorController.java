package com.sistema.remuneraciones.backend.facturacion.infrastructure;

import com.sistema.remuneraciones.backend.facturacion.application.SimularFacturaUseCase;
import com.sistema.remuneraciones.backend.facturacion.domain.FacturaSimulada;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/facturas")
public class FacturaSimuladorController {
    private final SimularFacturaUseCase useCase;

    public FacturaSimuladorController(SimularFacturaUseCase useCase) {
        this.useCase = useCase;
    }

    @PostMapping("/simular")
    public ResponseEntity<FacturaSimulada> simularFactura(@RequestBody Map<String, Object> request) {
        String nombreEmpleado = request.get("nombreEmpleado").toString();
        String rucEmpleado = request.get("rucEmpleado").toString();
        String concepto = request.get("conceptoServicio").toString();
        BigDecimal monto = new BigDecimal(request.get("montoBruto").toString());

        FacturaSimulada factura = useCase.ejecutar(nombreEmpleado, rucEmpleado, concepto, monto);
        return ResponseEntity.ok(factura);
    }
}
