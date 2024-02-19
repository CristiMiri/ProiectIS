// RegisterPage.tsx
import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import { Container } from "react-bootstrap";
import { User } from "../models/user";

const RegisterPage = () => {
  const handleRegister = (userData: User) => {
    console.log("Registering user:", userData);
    // Implement registration logic here, e.g., calling an API endpoint
  };

  return (
    <Container>
      <h2>Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </Container>
  );
};

export default RegisterPage;
