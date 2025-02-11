import { NextResponse } from "next/server";

// Middleware function
export function middleware(request) {
  const currentCookie = request.cookies.get("nextjs-token");
   
  // Check if cookie exists before accessing .value
  console.log("Token:", currentCookie ? currentCookie.value : "No token found");

  // Dummy user data (Replace this with real authentication logic)
  const dummyUserData = {
    role: "user",
    email: "test@admin.com",
  };

  // Check if the user is trying to access /services
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";

  // Redirect non-admin users away from /services
  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// export const config = {
//     matcher: '/about/:path*',
// }