package com.example.is_backend.models;

import lombok.*;

@Data
@Builder
public class UserRequestDTO {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
}
