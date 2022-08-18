import axios from "axios";
export const baseURL = "http://localhost:8080/";
import { getStorage } from "../helpers/apihelper";

let axiosInstance = axios.create({
  baseURL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getStorage("token");
    if (token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default axiosInstance;
