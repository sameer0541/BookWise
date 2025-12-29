import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const publicPaths = ["/sign-in", "/sign-up", "/"];
  const PUBLIC_API_PREFIXES = ["/api/auth"];
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  if (PUBLIC_API_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

  // Example: Extract token from cookies
  const token = request.cookies.get("userToken")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  //   return NextResponse.next();
};
export default middleware;

// export default function middleware() {
//   return NextResponse.next();
// }
export const config = {
  matcher: [
    "/books/:boodId*",
    "/admin/:path*",
    "/profile/:path*",
    "/api/protected/:path*",
  ],
};
