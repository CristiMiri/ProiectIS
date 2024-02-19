// services/ProductService.ts
import axios from "axios";
import { Product, ProductCategory } from "../models/product";
import exp from "constants";

const apiBaseUrl = "http://localhost:8080/products"; // Replace with your actual API base URL

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("");
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await axiosInstance.post("/", product);
  return response.data;
};

export const updateProduct = async (product: Product): Promise<Product> => {
  const response = await axiosInstance.put("/", product);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/${id}`);
};

export const getProductByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const response = await axiosInstance.get(`/category/${categoryId}`);
  return response.data;
};

export const searchProduct = async (name: string): Promise<Product[]> => {
  const response = await axiosInstance.get(`/search?name=${name}`);
  return response.data;
};

// Category-related operations
export const createCategory = async (
  category: ProductCategory
): Promise<ProductCategory> => {
  const response = await axiosInstance.post("/category", category);
  return response.data;
};

export const updateCategory = async (
  category: ProductCategory
): Promise<ProductCategory> => {
  const response = await axiosInstance.put("/category", category);
  return response.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/category/${id}`);
};

export const getAllCategories = async (): Promise<ProductCategory[]> => {
  const response = await axiosInstance.get("/category");
  return response.data;
};

export const getCategoryById = async (id: number): Promise<ProductCategory> => {
  const response = await axiosInstance.get(`/category/${id}`);
  return response.data;
};
