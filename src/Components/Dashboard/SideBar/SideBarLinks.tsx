import { authRole, TAuthRole } from "@/constants/authRoles";
import {
  PersonStanding,
  HomeIcon,
  LayoutDashboard,
  Users,
  Star,
  KeyRound,
} from "lucide-react";

// Type definition for the sidebar item
type SidebarGroup = {
  section: string;
  items: {
    label: string;
    href: string;
    icon: React.ElementType;
    permission?: {
      route: string;
      action?: "read" | "create" | "update" | "delete";
    };
  }[];
};

// Permission map for common routes
const ADMIN_PERMISSIONS = {
  overview: { route: "/dashboard/admin/overview", action: "read" as const },
  createSurah: { route: "/dashboard/admin/create/surah", action: "create" as const },
  createAyah: { route: "/dashboard/admin/create/ayah", action: "create" as const },
};

const USER_PERMISSIONS = {
  overview: { route: "/dashboard/user/overview", action: "read" as const },
  bookmarks: { route: "/dashboard/user/bookmarks", action: "read" as const },
};

const MODERATOR_PERMISSIONS = {
  overview: { route: "/dashboard/moderator/overview", action: "read" as const },
  content: { route: "/dashboard/moderator/content", action: "read" as const },
};

export const getSidebarLinks = (
  role: TAuthRole,
  permissions: any[] = []
): SidebarGroup[] => {
  // Helper to check if user has permission
  const hasPermission = (route: string, action: "read" | "create" | "update" | "delete" = "read") => {
    // Admin and User roles have all permissions by default
    if (role === authRole.ADMIN || role === authRole.USER) {
      return true;
    }
    
    // For other roles (like MODERATOR), check specific permissions
    return permissions.some(
      (perm: any) => perm.route === route && (perm.action === action || perm.action === "read")
    );
  };

  const filterItems = (items: any[]) => {
    return items.filter((item) => {
      if (!item.permission) return true;
      return hasPermission(item.permission.route, item.permission.action);
    });
  };

  const profileItems = filterItems([
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: PersonStanding,
      permission: { route: "/dashboard/profile", action: "read" },
    },
    {
      label: "Change Password",
      href: "/dashboard/change-password",
      icon: KeyRound,
      permission: { route: "/dashboard/change-password", action: "update" },
    },
  ]);

  switch (role) {
    case authRole.ADMIN:
      return [
        {
          section: "Main",
          items: [
            {
              label: "Home",
              href: "/dashboard/admin/overview",
              icon: LayoutDashboard,
              permission: ADMIN_PERMISSIONS.overview,
            },
          ],
        },
        {
          section: "Manage",
          items: [
            {
              label: "Create Surah",
              href: "/dashboard/admin/create/surah",
              icon: HomeIcon,
              permission: ADMIN_PERMISSIONS.createSurah,
            },
            {
              label: "Create Ayah",
              href: "/dashboard/admin/create/ayah",
              icon: HomeIcon,
              permission: ADMIN_PERMISSIONS.createAyah,
            },
          ],
        },
        { section: "Profile", items: [profileItems[0]] },
        { section: "Settings", items: [profileItems[1]] },
      ];

    case authRole.USER:
      return [
        {
          section: "Main",
          items: [
            {
              label: "Home",
              href: "/dashboard/user/overview",
              icon: LayoutDashboard,
              permission: USER_PERMISSIONS.overview,
            },
          ],
        },
        {
          section: "My Activity",
          items: [
            {
              label: "Bookmarks",
              href: "/dashboard/user/bookmarks",
              icon: Star,
              permission: USER_PERMISSIONS.bookmarks,
            },
          ],
        },
        { section: "Profile", items: [profileItems[0]] },
        { section: "Settings", items: [profileItems[1]] },
      ];

    case authRole.MODERATOR:
      // Filter moderator items based on permissions
      return [
        {
          section: "Main",
          items: filterItems([
            {
              label: "Home",
              href: "/dashboard/moderator/overview",
              icon: LayoutDashboard,
              permission: MODERATOR_PERMISSIONS.overview,
            },
          ]),
        },
        {
          section: "Moderation",
          items: filterItems([
            {
              label: "Content Moderation",
              href: "/dashboard/moderator/content",
              icon: Users,
              permission: MODERATOR_PERMISSIONS.content,
            },
          ]),
        },
        ...filterItems([
          { section: "Profile", items: [profileItems[0]] },
          { section: "Settings", items: [profileItems[1]] },
        ]),
      ];

    default:
      return filterItems([
        { section: "Profile", items: [profileItems[0]] },
        { section: "Settings", items: [profileItems[1]] },
      ]);
  }
};
