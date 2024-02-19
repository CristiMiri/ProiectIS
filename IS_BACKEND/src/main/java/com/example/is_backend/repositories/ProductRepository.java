package com.example.is_backend.repositories;

import com.example.is_backend.entities.Product;
import com.example.is_backend.entities.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findProductByCategory(ProductCategory productCategory);

    List<Product> findProductByNameContaining(String name);
}
