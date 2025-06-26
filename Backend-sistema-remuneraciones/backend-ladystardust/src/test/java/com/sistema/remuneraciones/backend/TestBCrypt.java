package com.sistema.remuneraciones.backend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TestBCrypt {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "Elmomer0123_XD";
        String encodedPassword = encoder.encode(rawPassword);
        System.out.println(encodedPassword);
    }
}

