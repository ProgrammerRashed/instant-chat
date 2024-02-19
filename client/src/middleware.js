import { NextResponse } from "next/server";


export function middleware(request) {
  const pathName = request.nextUrl.pathname;

  const isPublicPath = pathName === "/login" || pathName === "/signup";
  const token = request.cookies.get("token")?.value || "";
  
  //Handle Public Request
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  //handle private path request
  if (!isPublicPath && !token) {
    if (pathName === "/") {
      return null;
    } else {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/signup"],
};