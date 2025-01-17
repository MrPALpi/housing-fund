import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json"
  },
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error('Request Error', 'Failed to send request');
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error?.response;

    if (!response) {
      console.error('Network Error', 'Failed to connect to server');
      return Promise.reject(error);
    }

    const { status, statusText, data } = response;

    console.error('[API Error]', {
      status,
      statusText,
      data,
      url: response.config?.url
    });

    return Promise.reject(error);
  }
);

export { axiosInstance };
