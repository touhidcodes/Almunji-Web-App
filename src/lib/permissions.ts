/**
 * Permission utility functions
 */

export interface Permission {
  route: string;
  action: "read" | "create" | "update" | "delete";
}

export interface User {
  role?: string;
  permissions?: Permission[];
}

/**
 * Check if a user has a specific permission
 */
export const hasPermission = (
  user: User,
  route: string,
  action: "read" | "create" | "update" | "delete" = "read"
): boolean => {
  // Admin has all permissions
  if (user.role === "ADMIN") {
    return true;
  }

  // Check specific permissions for non-admin users
  if (user.permissions && user.permissions.length > 0) {
    return user.permissions.some(
      (perm) => perm.route === route && (perm.action === action || perm.action === "read")
    );
  }

  return false;
};

/**
 * Check if a user has any of the specified permissions
 */
export const hasAnyPermission = (
  user: User,
  routes: string[],
  action: "read" | "create" | "update" | "delete" = "read"
): boolean => {
  // Admin has all permissions
  if (user.role === "ADMIN") {
    return true;
  }

  return routes.some((route) => hasPermission(user, route, action));
};

/**
 * Filter sidebar links based on user permissions
 */
export const filterSidebarLinks = (
  links: any[],
  user: User
): any[] => {
  return links
    .map((group) => ({
      ...group,
      items: group.items.filter((item: any) => {
        if (!item.permission) return true;
        return hasPermission(user, item.permission.route, item.permission.action);
      }),
    }))
    .filter((group) => group.items.length > 0);
};

/**
 * Check if user can access a specific route
 */
export const canAccessRoute = (
  user: User,
  route: string,
  action: "read" | "create" | "update" | "delete" = "read"
): boolean => {
  // Admin and User roles have access to all routes by default
  if (user.role === "ADMIN" || user.role === "USER") {
    return true;
  }

  // For other roles (like MODERATOR), check permissions
  return hasPermission(user, route, action);
};
