import axios from "axios";

export const apiProductos = axios.create({
  baseURL: "http://localhost:8088", // Microservicio PRODUCTO
});

apiProductos.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
