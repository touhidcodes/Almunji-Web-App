import { instance as axiosInstance } from "/src/helpers/axios/axiosInstance";

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/refresh-token",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
