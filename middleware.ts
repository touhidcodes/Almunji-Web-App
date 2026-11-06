import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const AuthRoutes = ["/auth"];
const commonPrivateRoutes = [
  "/dashboard/profile",
  "/dashboard/change-password",
];

// Role-based route definitions
const roleBasedPrivateRoutes = {
  ADMIN: [
    /^\/dashboard\/admin\/overview/,
    /^\/dashboard\/admin\/users/,
    /^\/dashboard\/admin\/listings/,
    /^\/dashboard\/admin\/bookings/,
    /^\/dashboard\/admin\/reviews/,
    /^\/dashboard\/admin\/create\/surah/,
    /^\/dashboard\/admin\/create\/ayah/,
  ],
  USER: [
    /^\/dashboard\/user\/overview/,
    /^\/dashboard\/user\/bookmarks/,
    /^\/dashboard\/user\/reviews/,
  ],
  MODERATOR: [
    /^\/dashboard\/moderator\/overview/,
    /^\/dashboard\/moderator\/content/,
  ],
};

type Role = keyof typeof roleBasedPrivateRoutes;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the access token from cookies
  const accessToken = request.cookies.get("accessToken")?.value;

  // If no access token is found and the route is public, allow access
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  if (accessToken && commonPrivateRoutes.some((route) => pathname.match(route))) {
    return NextResponse.next();
  }

  let decodedData: any = null;

  // Decode the JWT token to get user data
  if (accessToken) {
    try {
      decodedData = jwtDecode<{ role?: string; permissions?: any[] }>(accessToken);
    } catch (err) {
      console.error("Failed to decode token:", err);
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  const role = decodedData?.role?.toUpperCase() as Role;
  const permissions = decodedData?.permissions || [];

  // Check if the user role matches the role-based routes
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role];
    
    // Check if path matches any route for this role
    const hasRouteAccess = routes.some((route) => pathname.match(route));
    
    if (hasRouteAccess) {
      // If role is MODERATOR, also check specific permissions
      if (role === "MODERATOR" && permissions.length > 0) {
        const hasPermission = permissions.some((perm: any) => {
          return pathname.match(new RegExp(`^${perm.route}`)) && 
                 (perm.action === "read" || perm.action === "update" || perm.action === "delete" || perm.action === "create");
        });
        
        if (hasPermission) {
          return NextResponse.next();
        }
        
        // If no permission matches, redirect to overview or home
        return NextResponse.redirect(new URL("/", request.url));
      }
      
      return NextResponse.next();
    }
  }

  // If none of the conditions are met, redirect to home
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/auth",
    "/dashboard/:path*",
  ],
};
