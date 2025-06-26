package com.sistema.remuneraciones.backend.auth.infrastructure;

import jakarta.persistence.*;

@Entity
@Table(name = "MAE_Usuario")
public class UsuarioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    @Column(name = "correo_electronico") // Mapea al nombre real de la columna en DB
    private String correoElectronico;    // Propiedad en camelCase

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "estado")
    private Boolean estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_rol")
    private RolEntity rol;

    // Getters y setters en camelCase
    public Long getIdUsuario() { return idUsuario; }
    public void setIdUsuario(Long idUsuario) { this.idUsuario = idUsuario; }
    
    public String getCorreoElectronico() { return correoElectronico; }
    public void setCorreoElectronico(String correoElectronico) { this.correoElectronico = correoElectronico; }
    
    public String getContrasena() { return contrasena; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    
    public Boolean getEstado() { return estado; }
    public void setEstado(Boolean estado) { this.estado = estado; }
    
    public RolEntity getRol() { return rol; }
    public void setRol(RolEntity rol) { this.rol = rol; }
}
