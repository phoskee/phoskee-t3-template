import { betterFetch } from "@better-fetch/fetch";

import { NextResponse, type NextRequest } from "next/server";
import { Session } from "./lib/auth-types";

const authorizedPath = ["/sign-in", "/api/"];
const publicPath = ["/"];
const adminOnlyPaths = ["/admin"];
const workerAndAbovePaths = ["/impostazioni"];
 
export default async function authMiddleware(request: NextRequest) {
	const clientIP = request.headers.get('x-forwarded-for') || 'IP sconosciuto';
	console.info({
    timestamp: new Date().toISOString(),
    path: request.nextUrl.pathname,
    ip: clientIP,
  });
	const onLoginPage = request.nextUrl.pathname === "/sign-in"
	const { data: session } = await betterFetch<Session>(
		"/api/auth/get-session",
		{
			baseURL: request.nextUrl.origin,
			headers: {
				cookie: request.headers.get("cookie") || "",
			},
		},
	);
	const onPublicPath = publicPath.some((path) => 
    request.nextUrl.pathname === path
  );
    const onAuthorizedPath = authorizedPath.includes(request.nextUrl.pathname);
	const onAdminPath = adminOnlyPaths.some((path) =>
     request.nextUrl.pathname.startsWith(path),
   );
	const onWorkerPath = workerAndAbovePaths.some((path) =>
     request.nextUrl.pathname.startsWith(path),
   );
	//console.info({path: request.nextUrl.pathname,logiPage: Boolean(onLoginPage),hasSession: Boolean(session)})
	console.warn(session?.user?.surname)

	if (onAdminPath && session?.user?.role !== "admin")
		return NextResponse.redirect(new URL("/", request.url));

	if (onWorkerPath && !["admin", "worker"].includes(session?.user?.role || ""))
		return NextResponse.redirect(new URL("/", request.url));

	if (onLoginPage && session) {
		//console.log("redirecting to home")
		return NextResponse.redirect(new URL("/", request.url));
	}
 
	if (!session && !onLoginPage && !onPublicPath) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}
	return NextResponse.next();
}
 
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|manifest\\.webmanifest$).*)"],
};