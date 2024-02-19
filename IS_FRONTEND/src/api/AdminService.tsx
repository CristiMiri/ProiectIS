import axios, { AxiosResponse } from "axios";
import { Admin } from "../models/admin";

const adminApiBaseUrl = "http://localhost:8081/admin"; // Use your actual admin API base URL

const handleAdminResponse = (response: AxiosResponse) => {
  console.table(response.data);
  return response.data;
};

const handleAdminError = (error: any) => {
  console.error("Admin Error:", error);
  throw error;
};

const axiosAdminInstance = axios.create({
  baseURL: adminApiBaseUrl,
  // Headers can be set here if required for your API
});

export const getAdminById = async (id: number) => {
  return axiosAdminInstance
    .get(`/${id}`)
    .then(handleAdminResponse)
    .catch(handleAdminError);
};

export const adminLogin = async (email: string, password: string) => {
  return axiosAdminInstance
    .post("/login", { email, password })
    .then(handleAdminResponse)
    .catch(handleAdminError);
};

export const registerAdmin = async (admin: Admin) => {
  return axiosAdminInstance
    .post("/register", admin)
    .then(handleAdminResponse)
    .catch(handleAdminError);
};

export const verifyAdmin = async (admin: Admin) => {
  return axiosAdminInstance
    .post("/verify", admin)
    .then(handleAdminResponse)
    .catch(handleAdminError);
};

export const updateAdmin = async (admin: Admin) => {
  return axiosAdminInstance
    .put("/update", admin)
    .then(handleAdminResponse)
    .catch(handleAdminError);
};

export const deleteAdmin = async (id: number) => {
  return axiosAdminInstance
    .delete(`/delete/${id}`)
    .then(handleAdminResponse)
    .catch(handleAdminError);
};
