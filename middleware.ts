import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. Security Headers Configuration
  const securityHeaders = {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://**.supabase.co https://images.unsplash.com https://lin.ee; font-src 'self' data:; connect-src 'self' https://**.supabase.co;",
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  // 2. Apply Headers to Response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // 3. Simple Bot/Path Protection (Optional)
  const userAgent = request.headers.get('user-agent') || '';
  if (userAgent.includes('SomeSuspiciousBot')) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return response;
}

// Configuration to filter paths that middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public folder assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
