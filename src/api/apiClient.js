import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.transgateacd.com/api",
  headers: {
    Accept: "application/json",
  },
});

export default apiClient;
