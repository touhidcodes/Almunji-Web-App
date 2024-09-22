import axios from "axios";
import setAccessToken from "../../utils/setAccessToken";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utils/localStorage";
import { getNewAccessToken } from "../../utils/getNewAccessToken";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Return only data and meta if needed
    console.log(response);
    return {
      data: response.data,
      meta: response.data.meta,
    };
  },
  async function (error) {
    console.log(error);
    const config = error.config;

    // Handle 500 errors and token refreshing
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      // Call your function to get a new access token here
      const newAccessToken = await getNewAccessToken(); // Define this function
      config.headers["Authorization"] = newAccessToken;
      setToLocalStorage("accessToken", newAccessToken);
      setAccessToken(newAccessToken);
      return instance(config);
    } else {
      const responseObject = {
        statusCode:
          error?.response?.data?.statusCode || error?.response?.status,
        message: error?.response?.data?.message || "An error occurred",
        errorMessages: error?.response?.data?.message || error.message,
      };
      return Promise.reject(responseObject); // Reject with detailed error object
    }
  }
);

export { instance };
