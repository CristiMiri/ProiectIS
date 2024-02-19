package com.example.is_backend.controllers;

import com.example.is_backend.entities.Admin;
import com.example.is_backend.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Admin dto = adminService.findAdminById(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/login")
    public ResponseEntity<Admin> login(@RequestBody Admin request) {
        Admin dto = adminService.findAdminByEmailAndPassword(request.getEmail(), request.getPassword());
        return dto != null ? ResponseEntity.ok(dto) : ResponseEntity.notFound().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin request) {
        Admin response = adminService.register(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify")
    public ResponseEntity<Admin> verifyAdmin(@RequestBody Admin request) {
        Admin response = adminService.verify(request);
        if (response != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(403).build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin request) {
        Admin response = adminService.update(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAdmin(@PathVariable Long id) {
        adminService.delete(id);
        return ResponseEntity.ok("Admin deleted successfully");
    }


}
