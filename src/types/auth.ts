export const authRole = {
  ADMIN: "ADMIN",
  USER: "USER",
  MODERATOR: "MODERATOR",
};

export type TAuthRole = keyof typeof authRole;

export type TPermission = {
  route: string;
  action: "read" | "create" | "update" | "delete";
};

export type TUser = {
  _id: string;
  email: string;
  username?: string;
  role: TAuthRole;
  permissions?: TPermission[];
  iat?: number;
  exp?: number;
};
