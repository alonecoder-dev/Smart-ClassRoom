import { clerkMiddleware } from "@clerk/nextjs/server";

// Export the middleware function directly
export default clerkMiddleware;

// Optional: Add configuration if needed
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
