package com.sistema.remuneraciones.backend.auth.domain;

public class Usuario {
    private Long id;
    private String correoElectronico;
    private String contrasena;
    private String rol;
    private Boolean estado;

    public Usuario() {}
    public Usuario(Long id, String correoElectronico, String contrasena, String rol, Boolean estado) {
        this.id = id;
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
        this.rol = rol;
        this.estado = estado;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCorreoElectronico() { return correoElectronico; }
    public void setCorreoElectronico(String correoElectronico) { this.correoElectronico = correoElectronico; }
    public String getContrasena() { return contrasena; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }
    public Boolean getEstado() { return estado; }
    public void setEstado(Boolean estado) { this.estado = estado; }
}
