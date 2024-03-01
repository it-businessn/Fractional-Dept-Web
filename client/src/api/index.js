import axios from "axios";

const BASE_URL_LOCAL = "http://localhost:5000/api";
const BASE_URL_LIVE = "https://fd-website.onrender.com";

export const API = axios.create({
  baseURL: BASE_URL_LIVE,
});
