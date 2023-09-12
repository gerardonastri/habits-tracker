import axios from "axios";

// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "https://habits-tracker-api-mv81.onrender.com/api";

export const axiosReq = axios.create({
  baseURL: BASE_URL,
});
