package com.store.demo.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class ProductoService {
    private final List<String> nombres = new CopyOnWriteArrayList<>();

    public List<String> obtenerNombres() {
        return nombres;
    }

    public void agregarNombre(String nombre) {
        nombres.add(nombre);
    }
}
