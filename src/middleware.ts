import { NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';

import { getIpFromRequest } from "@/lib/http";

import { isRatelimited } from "@/features/rate-limiter/utils";
import { UPSTASH_CONFIGS } from "@/features/rate-limiter/constants";

import {routing} from './i18n/routing';

export async function middleware(request: NextRequest) {
  const requestPath = request.nextUrl.pathname;
  const country = request.geo?.country ?? "Country";
  const clientIp = getIpFromRequest(request);

  // Log request info
  console.log(`${request.method} ${clientIp} (${country}) -> ${requestPath}`);

  // If there IP is not provided we skip rate limiting because its what we are using as an identifier
  // typically you would use the user ID but we don't have authentication implemented
  if (!clientIp) return NextResponse.next();

  // Check if ratelimit is successful
  const isLimited = await isRatelimited(clientIp);
  if (!isLimited) return NextResponse.next();

  // Ban duration in hours (4 hours is the default)
  const banDuration = Math.floor(UPSTASH_CONFIGS.banDuration / 60 / 60);
  return NextResponse.json(
    {
      error: `Too many requests, you have been banned for ${banDuration} hours.`,
    },
    { status: 429 }
  );
}

export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
