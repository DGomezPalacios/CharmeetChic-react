import axios from "axios";

export const api = axios.create({
  baseURL: "", // proxy local se encarga de redirigir
  withCredentials: true,
});
