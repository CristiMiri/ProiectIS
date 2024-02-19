// services/DiscountService.ts
import axios from "axios";
import { Discount } from "../models/discount";

const discountApiBaseUrl = "http://localhost:8080/discounts"; // Replace with your actual discount API base URL

// Axios instance for discount-related API calls
const axiosInstance = axios.create({
  baseURL: discountApiBaseUrl,
  // Headers can be set here if required for your API
});

// Generic error handler
const handleError = (error: any) => {
  console.error("Discount Service Error:", error);
  throw error;
};

// Generic response handler
const handleResponse = (response: any) => {
  console.log(response.data);
  return response.data;
};

export const getAllDiscounts = async (): Promise<Discount[]> => {
  return axiosInstance.get("").then(handleResponse).catch(handleError);
};

export const getDiscountById = async (id: number): Promise<Discount> => {
  return axiosInstance.get(`/${id}`).then(handleResponse).catch(handleError);
};

export const createDiscount = async (discount: Discount): Promise<Discount> => {
  return axiosInstance
    .post("", discount)
    .then(handleResponse)
    .catch(handleError);
};

export const updateDiscount = async (discount: Discount): Promise<Discount> => {
  return axiosInstance
    .put("", discount)
    .then(handleResponse)
    .catch(handleError);
};

export const deleteDiscount = async (id: number): Promise<void> => {
  return axiosInstance.delete(`/${id}`).then(handleResponse).catch(handleError);
};
