package com.example.is_backend.entities;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_sequence")
    @SequenceGenerator(name = "order_sequence", sequenceName = "order_sequence", allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "total", nullable = false)
    private Float total;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "order_date", nullable = false)
    private String orderDate;

    @Column(name = "delivery_date", nullable = false)
    private String deliveryDate;
    public static class Builder {
        private Order order;

        public Builder() {
            order = new Order();
        }

        public Builder id(Long id) {
            order.id = id;
            return this;
        }

        public Builder user(User user) {
            order.user = user;
            return this;
        }

        public Builder total(Float total) {
            order.total = total;
            return this;
        }

        public Builder status(String status) {
            order.status = status;
            return this;
        }

        public Builder paymentMethod(String paymentMethod) {
            order.paymentMethod = paymentMethod;
            return this;
        }

        public Builder orderDate(String orderDate) {
            order.orderDate = orderDate;
            return this;
        }

        public Builder deliveryDate(String deliveryDate) {
            order.deliveryDate = deliveryDate;
            return this;
        }

        public Order build() {
            return order;
        }
    }
}
