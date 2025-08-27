// Locale redirect middleware (Phase: routing normalization)
// Adds default or negotiated locale prefix to routes that lack one.

import { NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['ka','en','ru'];
const DEFAULT_LOCALE = 'ka';

function detectPreferred(acceptLanguage) {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const parts = acceptLanguage.split(',').map(p => p.split(';')[0].trim().toLowerCase());
  for (const p of parts) {
    // match full tag or first two letters
    const two = p.slice(0,2);
    if (SUPPORTED_LOCALES.includes(p)) return p;
    if (SUPPORTED_LOCALES.includes(two)) return two;
  }
  return DEFAULT_LOCALE;
}

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow internal/static paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // If already has locale segment
  const hasLocale = SUPPORTED_LOCALES.some(l => pathname === '/' + l || pathname.startsWith('/' + l + '/'));
  if (hasLocale) {
    // Inject request header with detected locale for downstream (layout) SSR lang.
    const locale = pathname.split('/').filter(Boolean)[0];
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-site-locale', locale || DEFAULT_LOCALE);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Redirect to negotiated locale
  const preferred = detectPreferred(req.headers.get('accept-language'));
  const url = req.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${preferred}` : `/${preferred}${pathname}`;
  const response = NextResponse.redirect(url, 308);
  return response;
}

// Match all paths except static assets with extension
export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
