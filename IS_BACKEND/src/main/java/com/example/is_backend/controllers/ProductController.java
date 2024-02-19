package com.example.is_backend.controllers;

import com.example.is_backend.entities.Product;
import com.example.is_backend.entities.ProductCategory;
import com.example.is_backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(Product request) {
        return ResponseEntity.ok(productService.createProduct(request));
    }

    @PutMapping
    public ResponseEntity<Product> updateProduct(Product request) {
        return ResponseEntity.ok(productService.updateProduct(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/category")
    public ResponseEntity<List<ProductCategory>> getAllCategories() {
        return ResponseEntity.ok(productService.getAllCategories());
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductByCategory(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(String name) {
        return ResponseEntity.ok(productService.searchProduct(name));
    }

    @PostMapping("/category")
    public ResponseEntity<ProductCategory> createCategory(ProductCategory request) {
        return ResponseEntity.ok(productService.createCategory(request));
    }

    @PutMapping("/category")
    public ResponseEntity<ProductCategory> updateCategory(ProductCategory request) {
        return ResponseEntity.ok(productService.updateCategory(request));
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable  Long id) {
        productService.deleteCategory(id);
        return ResponseEntity.ok().build();
    }

}
