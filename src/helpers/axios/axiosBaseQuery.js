import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method = "GET", data, params, headers, contentType }) => {
    const config = {
      url: baseUrl + url,
      method,
      data,
      params,
      headers: {
        ...headers,
        "Content-Type": contentType || "application/json",
      },
    };

    try {
      console.log(url, "url");
      const result = await axiosInstance(config);
      return { data: result.data };
    } catch (error) {
      console.log(error, "as err");
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
