import axios from "axios";

const API_URL = "https://api.pexels.com/v1/";
const API_KEY = "na3e0y1p2twyMN0YR4a0EkCOr71FEmald86Ni3g54nvb9sRstGVG6Ea0";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 90000,
});

api.interceptors.request.use(
  async (response) => {
    if (response?.headers) response.headers.Authorization = `${API_KEY}`;

    return response;
  },
  (error) => {
    console.error(`Interceptors API Request -> ${error}`);
  }
);

export default api;
