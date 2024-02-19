package com.example.is_backend.services;

import com.example.is_backend.entities.User;
import com.example.is_backend.models.UserRequestDTO;
import com.example.is_backend.models.UserResponseDTO;
import com.example.is_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserResponseDTO> findUsers() {
        List<User> users = userRepository.findAll();
        List <UserResponseDTO> userResponseDTOS = new ArrayList<>();
        for (User user : users) {
            userResponseDTOS.add(convertToDTO(user));
        }
        return userResponseDTOS;
    }


    public UserResponseDTO convertToDTO(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .build();
    }

    public User convertToEntity(UserRequestDTO userRequestDTO) {
        User newUser = new User();
        newUser.setUsername(userRequestDTO.getUsername());
        newUser.setPassword(userRequestDTO.getPassword());
        newUser.setFirstName(userRequestDTO.getFirstName());
        newUser.setLastName(userRequestDTO.getLastName());
        newUser.setEmail(userRequestDTO.getEmail());
        return newUser;
    }

    public UserResponseDTO findUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        return convertToDTO(user);
    }

    public UserResponseDTO login(UserRequestDTO userRequestDTO) {
        User user = userRepository.findByUsernameAndPassword(userRequestDTO.getUsername(), userRequestDTO.getPassword());
        if (user == null) {
            return null;
        }
        return convertToDTO(user);
    }

    public UserResponseDTO register(UserRequestDTO userRequestDTO) {
        User newUser = convertToEntity(userRequestDTO);
        userRepository.save(newUser);
        return convertToDTO(newUser);
    }

    public UserResponseDTO updateUser(Long id, UserRequestDTO userRequestDTO) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        user.setUsername(userRequestDTO.getUsername());
        user.setPassword(userRequestDTO.getPassword());
        user.setFirstName(userRequestDTO.getFirstName());
        user.setLastName(userRequestDTO.getLastName());
        user.setEmail(userRequestDTO.getEmail());
        userRepository.save(user);
        return convertToDTO(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
