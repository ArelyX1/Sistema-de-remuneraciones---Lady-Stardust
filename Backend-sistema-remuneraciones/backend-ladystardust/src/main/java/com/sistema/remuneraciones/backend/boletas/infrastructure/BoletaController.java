package com.sistema.remuneraciones.backend.boletas.infrastructure;

import com.sistema.remuneraciones.backend.boletas.application.BoletaResponse;
import com.sistema.remuneraciones.backend.boletas.application.GenerarBoletaUseCase;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/boletas")
public class BoletaController {
    private final GenerarBoletaUseCase generarBoletaUseCase;
    private final BoletaPdfService boletaPdfService;

    public BoletaController(GenerarBoletaUseCase generarBoletaUseCase, BoletaPdfService boletaPdfService) {
        this.generarBoletaUseCase = generarBoletaUseCase;
        this.boletaPdfService = boletaPdfService;
    }

    @PostMapping("/generar")
    @PreAuthorize("hasAnyRole('Administrador de Sistemas','Administrador')")
    public BoletaResponse generarBoleta(
            @RequestParam Long idEmpleado,
            @RequestParam String periodoPago) {
        return generarBoletaUseCase.generarBoleta(idEmpleado, periodoPago);
    }

    @GetMapping("/pdf")
    @PreAuthorize("hasAnyRole('Administrador de Sistemas','Administrador')")
    public ResponseEntity<byte[]> descargarBoletaPdf(
            @RequestParam Long idEmpleado,
            @RequestParam String periodoPago) throws Exception {

        BoletaResponse boleta = generarBoletaUseCase.generarBoleta(idEmpleado, periodoPago);
        byte[] pdfBytes = boletaPdfService.generarBoletaPdf(boleta);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "boleta_pago.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }
}
