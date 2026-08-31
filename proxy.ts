import { NextResponse, type NextRequest } from "next/server";
import { isLocale, locales, matchLocale } from "@/lib/i18n";

/**
 * Every page lives under /[locale]. A request without one is redirected to the
 * visitor's best match from Accept-Language, defaulting to German.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  // Honour an explicit choice made earlier via the language switcher.
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  // 307 rather than 308: the mapping depends on headers and a cookie, so it
  // must not be cached permanently by the browser.
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    // Everything except Next internals, the API, and files with an extension.
    "/((?!_next|api|.*\\..*).*)",
  ],
};
