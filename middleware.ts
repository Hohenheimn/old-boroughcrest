import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export default async function middleware(req: NextRequest, res: NextResponse) {
    //preventing logging in if the cookie has no request
    const cookie = req.cookies.get("user");
    const url = req.url;

    if (!cookie && req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (
        !cookie &&
        req.nextUrl.pathname.startsWith("/client-request-processing")
    ) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (
        !cookie &&
        req.nextUrl.pathname.startsWith("/costumer-&-property-profile")
    ) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (!cookie && req.nextUrl.pathname.startsWith("/tower")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    //if the cookies is verified, redirect to the dashboard
    if (cookie && url.includes("/login")) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
}
