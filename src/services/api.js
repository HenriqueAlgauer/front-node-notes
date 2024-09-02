import axios from "axios";

export const api = axios.create({
  baseURL: "https://node-ten-rust.vercel.app/",
});
