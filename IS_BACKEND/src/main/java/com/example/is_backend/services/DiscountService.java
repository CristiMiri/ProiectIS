package com.example.is_backend.services;

import com.example.is_backend.entities.Discount;
import com.example.is_backend.repositories.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountService {
    private final DiscountRepository discountRepository;

    @Autowired
    public DiscountService(DiscountRepository discountRepository) {
        this.discountRepository = discountRepository;
    }

    public List<Discount> getAllDiscounts() {
        return discountRepository.findAll();
    }

    public Discount getDiscountById(Long id) {
        return discountRepository.findById(id).orElse(null);
    }

    public Discount createDiscount(Discount request) {
        return discountRepository.save(request);
    }

    public Discount updateDiscount(Discount request) {
        return discountRepository.save(request);
    }

    public void deleteDiscount(Long id) {
        discountRepository.deleteById(id);
    }
}
