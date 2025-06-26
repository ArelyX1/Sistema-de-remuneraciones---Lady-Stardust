package com.sistema.remuneraciones.backend.boletas.infrastructure;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.sistema.remuneraciones.backend.boletas.application.BoletaResponse;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;

@Service
public class BoletaPdfService {
    public byte[] generarBoletaPdf(BoletaResponse boleta) throws Exception {
        Document document = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter.getInstance(document, baos);
        document.open();

        document.add(new Paragraph("BOLETA DE PAGO"));
        document.add(new Paragraph("Empleado: " + boleta.getNombresEmpleado()));
        document.add(new Paragraph("Periodo: " + boleta.getPeriodoPago()));
        document.add(new Paragraph("Fecha de pago: " + boleta.getFechaPago()));
        document.add(new Paragraph("Sueldo Base: " + boleta.getSueldoBase()));
        document.add(new Paragraph("Total Ingresos: " + boleta.getTotalIngresos()));
        document.add(new Paragraph("Total Descuentos: " + boleta.getTotalDescuentos()));
        document.add(new Paragraph("Total Aportaciones: " + boleta.getTotalAportaciones()));
        document.add(new Paragraph("Total Neto: " + boleta.getTotalNeto()));

        document.close();
        return baos.toByteArray();
    }
}
