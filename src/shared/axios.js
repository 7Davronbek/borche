import axios from "axios";

const BASE_URL = "https://api.borche.uz/api";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default httpClient;
