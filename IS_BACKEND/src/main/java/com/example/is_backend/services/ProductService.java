package com.example.is_backend.services;

import com.example.is_backend.entities.Product;
import com.example.is_backend.entities.ProductCategory;
import com.example.is_backend.repositories.ProductCategoryRepository;
import com.example.is_backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService{
    private final ProductRepository productRepository;
    private final ProductCategoryRepository productCategoryRepository;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductCategoryRepository productCategoryRepository) {
        this.productRepository = productRepository;
        this.productCategoryRepository = productCategoryRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product request) {
        return productRepository.save(request);
    }

    public Product updateProduct(Product request) {
        return productRepository.save(request);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> getProductByCategory(Long id) {
        return productRepository.findProductByCategory(productCategoryRepository.findById(id).orElse(null));
    }

    public List<Product> searchProduct(String name) {
        return productRepository.findProductByNameContaining(name);
    }

    public ProductCategory createCategory(ProductCategory request) {
        return productCategoryRepository.save(request);
    }

    public ProductCategory updateCategory(ProductCategory request) {
        return productCategoryRepository.save(request);
    }

    public void deleteCategory(Long id) {
        productCategoryRepository.deleteById(id);
    }

    public List<ProductCategory> getAllCategories() {
        return productCategoryRepository.findAll();
    }
}
