package com.example.is_backend.controllers;

import com.example.is_backend.entities.Discount;
import com.example.is_backend.services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/discounts")
public class DiscountController {
    private final DiscountService discountService;

    @Autowired
    public DiscountController(DiscountService discountService) {
        this.discountService = discountService;
    }

    @GetMapping
    public ResponseEntity<List<Discount>> getAllDiscounts() {
        return ResponseEntity.ok(discountService.getAllDiscounts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Discount> getDiscountById(Long id) {
        return ResponseEntity.ok(discountService.getDiscountById(id));
    }

    @PostMapping
    public ResponseEntity<Discount> createDiscount(@RequestBody  Discount request) {
        System.out.println(request.toString());
        return ResponseEntity.ok(discountService.createDiscount(request));
    }

    @PutMapping
    public ResponseEntity<Discount> updateDiscount(Discount request) {
        return ResponseEntity.ok(discountService.updateDiscount(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDiscount(Long id) {
        discountService.deleteDiscount(id);
        return ResponseEntity.ok().build();
    }

}
