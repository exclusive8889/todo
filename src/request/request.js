import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.task-manager.api.mvn-training.com",
});

const requestHandler = (config) => {
  const atk = localStorage.getItem("accessToken");
  config.headers = {
    Authorization: `Bearer ${atk}`,
  };
  return config;
};
axiosInstance.interceptors.request.use(requestHandler, (err) =>
  Promise.reject(err)
);
export { axiosInstance as ApiClient };
