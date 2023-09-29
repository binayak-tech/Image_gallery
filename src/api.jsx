import axios from "axios";

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL: "http://localhost:5000", // Replace with your backend URL
});

export default api;
