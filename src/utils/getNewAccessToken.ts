import { instance as AxiosInstance } from "@/helpers/axios/axiosInstance";

export const getNewAccessToken = async (): Promise<string | null> => {
  try {
    const response = await AxiosInstance({
      url: "http://localhost:5000/api/refresh-token",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const newAccessToken = response.data?.data?.accessToken;
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    }

    return null;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return null;
  }
};
