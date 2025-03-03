import axios from "axios";

const BASE_URL = "http://localhost:5001/api"; // Double-check this

console.log("Axios BASE_URL:", BASE_URL); // Log to see if it's correct

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});
