// "use server";

import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";
import { setPermissionsCookie } from "./setPermissionsCookie";
import { toast } from "sonner";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    // cache: "no-store",
  });
  const userInfo = await res.json();

  if (userInfo.success === false) {
    toast.error(userInfo.message);
    return userInfo;
  }

  if (userInfo.data.token) {
    // setToLocalStorage(authKey, userInfo.data.token);
    setAccessToken(userInfo.data.token);
    
    // Store permissions if available (from backend response)
    if (userInfo.data.permissions) {
      setPermissionsCookie(userInfo.data.permissions);
    }
  }

  toast.success(userInfo.message);
  return userInfo;
};
