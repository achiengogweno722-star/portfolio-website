import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const sendContact = (data) => {
  return api.post("/api/contact", data);
};