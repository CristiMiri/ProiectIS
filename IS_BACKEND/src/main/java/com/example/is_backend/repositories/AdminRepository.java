package com.example.is_backend.repositories;

import com.example.is_backend.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findAdminByEmailAndPassword(String email, String password);

    Admin findAdminById(Long id);
}
