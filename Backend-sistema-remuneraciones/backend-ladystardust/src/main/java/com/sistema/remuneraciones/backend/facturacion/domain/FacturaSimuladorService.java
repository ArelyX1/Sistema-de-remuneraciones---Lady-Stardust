package com.sistema.remuneraciones.backend.facturacion.domain;

import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.Random;

@Service
public class FacturaSimuladorService {
    public FacturaSimulada simularFactura(String nombreEmpleado, String rucEmpleado, String concepto, BigDecimal monto) {
        String serie = "F001";
        String correlativo = String.format("%08d", new Random().nextInt(99999999) + 1);
        FacturaSimulada factura = new FacturaSimulada(serie, correlativo, nombreEmpleado, rucEmpleado, concepto, monto);
        factura.setXmlGenerado(generarXml(factura));
        return factura;
    }

    private String generarXml(FacturaSimulada factura) {
        return String.format("""
            <?xml version="1.0" encoding="UTF-8"?>
            <Invoice>
                <NumeroFactura>%s</NumeroFactura>
                <FechaEmision>%s</FechaEmision>
                <NombreEmpleado>%s</NombreEmpleado>
                <RucEmpleado>%s</RucEmpleado>
                <ConceptoServicio>%s</ConceptoServicio>
                <MontoBruto>%.2f</MontoBruto>
                <MontoIGV>%.2f</MontoIGV>
                <MontoTotal>%.2f</MontoTotal>
            </Invoice>
            """,
            factura.getNumeroFactura(),
            factura.getFechaEmision().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            factura.getNombreEmpleado(),
            factura.getRucEmpleado(),
            factura.getConceptoServicio(),
            factura.getMontoBruto(),
            factura.getMontoIgv(),
            factura.getMontoTotal()
        );
    }
}
