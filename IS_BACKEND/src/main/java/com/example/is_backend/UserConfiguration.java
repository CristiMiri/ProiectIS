package com.example.is_backend;


import com.example.is_backend.entities.User;
import com.example.is_backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfiguration {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        if (repository.count() != 0) {
            return args -> {
            };
        }
        return args -> {
            User defaultAdmin=
                    new User(
                            "1st_admin",
                            "admin",
                            "admin",
                            "Montreal");
            User defaultUser =
                    new User(
                            "user",
                            "user",
                            "user@gmail.com",
                            "Berlin"
                    );
            repository.saveAll(List.of(defaultAdmin, defaultUser));
        };
        }
}
