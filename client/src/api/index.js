import axios from "axios";

const BASE_URL_LOCAL = "http://localhost:5000/api";
const BASE_URL_LIVE = "https://fractional-dept-web.onrender.com/api";

export const API = axios.create({
	baseURL: BASE_URL_LIVE,
});
