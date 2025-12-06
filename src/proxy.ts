import { NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { geolocation} from '@vercel/functions'

import { getIpFromRequest } from "@/lib/http";

import { isRatelimited } from "@/features/rate-limiter/utils";
import { UPSTASH_CONFIGS } from "@/features/rate-limiter/constants";

export default async function proxy(request: NextRequest) {
  const requestPath = request.nextUrl.pathname;
  const { country } = geolocation(request) ?? "Country";
  const clientIp = getIpFromRequest(request);

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

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
