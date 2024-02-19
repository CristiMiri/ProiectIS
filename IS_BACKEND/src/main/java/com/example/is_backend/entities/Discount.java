package com.example.is_backend.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Table(name = "discounts")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Discount {
    @Id
    @SequenceGenerator(
            name = "discount_sequence",
            sequenceName = "discount_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "discount_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(name = "code", nullable = false, columnDefinition = "TEXT")
    private String code;
    @Column(name = "percentage", nullable = false, columnDefinition = "FLOAT")
    private float percentage;
    @Column(name = "expiryDate", columnDefinition = "TEXT")
    private String expiryDate;
    @Column(name = "status", nullable = false, columnDefinition = "BOOLEAN")
    private boolean status;

    @Override
    public String toString() {
        return "Discount{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", percentage=" + percentage +
                ", expiryDate='" + expiryDate + '\'' +
                ", status=" + status +
                '}';
    }
}
