import { jwtDecode } from "jwt-decode";

export function decodeToken<T = object>(token: string): T | { error: string } {
  try {
    const decoded = jwtDecode<T>(token);
    return decoded;
  } catch (error) {
    return { error: "Failed to decode token!" };
  }
}
