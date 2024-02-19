package com.example.is_backend.services;

import com.example.is_backend.entities.Admin;
import com.example.is_backend.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin findAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    public Admin findAdminByEmailAndPassword(String email, String password) {
        return adminRepository.findAdminByEmailAndPassword(email, password);
    }

    public Admin register(Admin request) {
        return adminRepository.save(request);
    }

    public Admin verify(Admin request) {
        String Requestcode = request.getAdminCode();
        String AdminCode = adminRepository.findAdminById(request.getId()).getAdminCode();
        if (Requestcode.equals(AdminCode)){
            return adminRepository.save(request);
        }
        else {
            return null;
        }
    }

    public Admin update(Admin request) {
        Admin adminbefore = adminRepository.findAdminById(request.getId());
        return adminRepository.save(request);
    }

    public void delete(Long id) {
        adminRepository.deleteById(id);
    }
}
