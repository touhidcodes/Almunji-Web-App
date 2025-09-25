import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { decodeToken } from "@/utils/decodeToken";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  //   console.log(accessToken);
  return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  //   console.log(authToken);
  if (authToken) {
    const decodedData: any = decodeToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role,
    };
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage("accessToken");
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/refresh-token",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
