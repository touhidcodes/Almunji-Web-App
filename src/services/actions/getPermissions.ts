// "use server";

import { cookies } from "next/headers";
import { getPermissionsCookie } from "./setPermissionsCookie";

export const getPermissions = async (): Promise<any[]> => {
  return await getPermissionsCookie();
};

export const clearPermissions = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("permissions");
};
