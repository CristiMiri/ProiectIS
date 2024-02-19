package com.example.is_backend.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "admins")
public class Admin {
    @Id
    @SequenceGenerator(
            name = "admin_sequence",
            sequenceName = "admin_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "admin_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(name = "username", nullable = false,unique = true, columnDefinition = "TEXT")
    private String username;
    @Column(name = "password", nullable = false ,columnDefinition = "TEXT")
    private String password;
    @Column(name = "email", nullable = false,unique = true, columnDefinition = "TEXT")
    private String email;
    @Column(name = "AdminCode", nullable = false,unique = true, columnDefinition = "TEXT")
    private String AdminCode;
    @Column(name = "role", nullable = false )
    private String role;
}
