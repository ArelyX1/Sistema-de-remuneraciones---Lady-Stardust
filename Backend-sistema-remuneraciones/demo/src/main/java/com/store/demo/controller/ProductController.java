package com.store.demo.controller;

import com.store.demo.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*") // Habilita CORS para todos los orígenes
public class ProductController {

    private final ProductoService nombreService;

    @Autowired
    public ProductController(ProductoService nombreService) {
        this.nombreService = nombreService;
    }

    @GetMapping
    public List<String> listarNombres() {
        return nombreService.obtenerNombres();
    }

    @PostMapping
    public void agregarNombre(@RequestBody String nombre) {
        nombreService.agregarNombre(nombre);
    }
}
