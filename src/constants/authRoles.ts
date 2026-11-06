export const authRole = {
  ADMIN: "ADMIN",
  USER: "USER",
  MODERATOR: "MODERATOR",
};

export type TAuthRole = keyof typeof authRole;
