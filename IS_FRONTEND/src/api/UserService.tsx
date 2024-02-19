// interfaces/UserInterfaces.ts

// UserService.ts
import axios from "axios";
import { User } from "../models/user";
import { Product } from "../models/product";

const userApiBaseUrl = "http://localhost:8080/users"; // Replace with your actual user API base URL

// Axios instance for user-related API calls
const axiosUserInstance = axios.create({
  baseURL: userApiBaseUrl,
  // Headers can be set here if required for your API
});

// A generic error handler
const handleError = (error: any) => {
  console.error("User Service Error:", error);
  throw error;
};

// A generic response handler
const handleResponse = (response: any) => {
  console.table(response.data);
  return response.data;
};

// Service methods
export const getUsers = async (): Promise<User[]> => {
  return axiosUserInstance.get("").then(handleResponse).catch(handleError);
};

export const getUserById = async (id: number): Promise<User> => {
  return axiosUserInstance
    .get(`/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<User> => {
  return axiosUserInstance
    .post("/login", userData)
    .then(handleResponse)
    .catch(handleError);
};

export const registerUser = async (newUser: User): Promise<User> => {
  return axiosUserInstance
    .post("/register", newUser)
    .then(handleResponse)
    .catch(handleError);
};

export const updateUser = async (
  id: number,
  updatedUser: User
): Promise<User> => {
  return axiosUserInstance
    .put(`/${id}`, updatedUser)
    .then(handleResponse)
    .catch(handleError);
};

export const deleteUser = async (id: number): Promise<void> => {
  return axiosUserInstance
    .delete(`/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const getcart = async (id: number): Promise<void> => {
  return axiosUserInstance
    .get(`/${id}/ordercart`)
    .then(handleResponse)
    .catch(handleError);
};

export const addtoCart = async (
  id: number,
  product: Product
): Promise<void> => {
  return axiosUserInstance
    .post(`/${id}/ordercart`, product)
    .then(handleResponse)
    .catch(handleError);
};

export const removefromCart = async (
  id: number,
  product: Product
): Promise<void> => {
  return axiosUserInstance
    .delete(`/${id}/ordercart/${product.id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const checkout = async (id: number): Promise<void> => {
  return axiosUserInstance
    .post(`/${id}/checkout`)
    .then(handleResponse)
    .catch(handleError);
};

export const getOrders = async (id: number): Promise<void> => {
  return axiosUserInstance
    .get(`/${id}/orders`)
    .then(handleResponse)
    .catch(handleError);
};

export const getOrderById = async (
  id: number,
  orderId: number
): Promise<void> => {
  return axiosUserInstance
    .get(`/${id}/orders/${orderId}`)
    .then(handleResponse)
    .catch(handleError);
};
