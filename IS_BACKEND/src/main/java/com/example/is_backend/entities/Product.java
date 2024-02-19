package com.example.is_backend.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "product_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(name = "name", nullable = false, columnDefinition = "TEXT")
    private String name;
    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;
    @Column(name = "price", nullable = false,columnDefinition = "FLOAT")
    private float price;
    @Column(name = "quantity", nullable = false,columnDefinition = "INT")
    private int quantity;
    @Column(name = "image", nullable = true, columnDefinition = "TEXT") // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw
    private String image;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @ManyToMany(mappedBy = "products")
    private List<Cart> carts;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    public static class Builder {
        private final Product product;

        public Builder() {
            product = new Product();
        }

        public Builder withId(Long id) {
            product.id = id;
            return this;
        }

        public Builder withName(String name) {
            product.name = name;
            return this;
        }

        public Builder withDescription(String description) {
            product.description = description;
            return this;
        }

        public Builder withPrice(float price) {
            product.price = price;
            return this;
        }

        public Builder withQuantity(int quantity) {
            product.quantity = quantity;
            return this;
        }

        public Builder withImage(String image) {
            product.image = image;
            return this;
        }

        public Builder withCategory(ProductCategory category) {
            product.category = category;
            return this;
        }

        public Builder withCarts(List<Cart> carts) {
            product.carts = carts;
            return this;
        }

        public Builder withUser(User user) {
            product.user = user;
            return this;
        }

        public Product build() {
            return product;
        }
    }

}
