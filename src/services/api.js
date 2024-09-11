import axios from "axios";
const apiUrl = import.meta.env.API;

export const api = axios.create({
  baseURL: apiUrl,
});
