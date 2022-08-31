import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.task-manager.api.mvn-training.com",
});

const requestHandler = (config) => {
  const atk = localStorage.getItem("accessToken");
  config.headers = {
    Authorization: `Bearer ${atk}`,
  };
  if (config.method === "get") {
    config.params = {
      ...config.params,
      // version: Date.now(),
    };
  }

  return config;
};
axiosInstance.interceptors.request.use(requestHandler, (err) =>
  Promise.reject(err)
);
export { axiosInstance as ApiClient };
