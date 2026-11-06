import { authKey } from "@/constants/authKey";
import Cookies from "js-cookie";

export const logoutUser = () => {
  Cookies.remove(authKey);
  Cookies.remove("refreshToken");
  Cookies.remove("permissions");
  window.location.reload();
};
