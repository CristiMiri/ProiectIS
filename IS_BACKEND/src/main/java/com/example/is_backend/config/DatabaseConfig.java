package com.example.is_backend.config;

import com.example.is_backend.entities.*;
import com.example.is_backend.repositories.UserRepository;
import com.example.is_backend.services.AdminService;
import com.example.is_backend.services.DiscountService;
import com.example.is_backend.services.ProductService;
import com.example.is_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
public class DatabaseConfig {

    @Autowired
    private final UserRepository userRepository;
    private final AdminService adminService;
    private final ProductService productService;
    private final DiscountService discountService;
    public DatabaseConfig(UserRepository userService, AdminService adminService, ProductService productService, DiscountService discountService) {
        this.userRepository = userService;
        this.adminService = adminService;
        this.productService = productService;
        this.discountService = discountService;
    }

    @Bean
    CommandLineRunner commandLineRunner() {
        return args -> {
            if (userRepository.findAll().isEmpty()) {
                User defautUser = new User();
                defautUser.setUsername("user");
                defautUser.setPassword("user");
                defautUser.setFirstName("user");
                defautUser.setLastName("user");
                defautUser.setEmail("user@mail.com");
                Admin defaultAdmin = new Admin();
                defaultAdmin.setUsername("admin");
                defaultAdmin.setPassword("admin");
                defaultAdmin.setEmail("admin@mail.com");
                defaultAdmin.setAdminCode("admin");
                defaultAdmin.setRole("ADMIN");
                userRepository.save(defautUser);
                adminService.register(defaultAdmin);
                ProductCategory productCategory = new ProductCategory();
                productCategory.setName("category");
                productCategory.setDescription("description");
                productService.createCategory(productCategory);
                Product product = new Product();
                product.setName("product");
                product.setPrice(100);
                product.setCategory(productCategory);
                product.setDescription("description");
                product.setQuantity(10);
                product.setUser(defautUser);
                productService.createProduct(product);
                Discount discount = new Discount();
                discount.setCode("discount");
                discount.setStatus(true);
                discount.setPercentage(10);

                discountService.createDiscount(discount);
                System.out.println("Database initialized");
            } else {
                return;
            }
        };
    }
}
