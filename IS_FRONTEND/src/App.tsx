import React from "react";

import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import TestingPage from "./pages/TestingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DiscountPage from "./pages/DiscountPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <div className="App bg-info-subtle ">
        <NavigationBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/testing" element={<DiscountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
