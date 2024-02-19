import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import { loginUser } from "../api/UserService";
import { User } from "../models/user";
import UserPage from "./UserPage";
const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    loginUser({ email: username, password: password }).then((user) => {
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/profile";
    });
    alert("Login successful! Redirecting to profile page...");
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
