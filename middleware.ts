/** @format */

import { NextResponse } from 'next/server'

/**
 * Middleware Infrastructure - Industrial Specialist Edition (v2026)
 * Implements Global Security Headers and Route Protection.
 * Parameter removed to satisfy strict no-unused-vars linting rules.
 * Identity Constraint: นายเอ็มซ่ามากส์ (Alongkorl)
 */
export function middleware() {
  const response = NextResponse.next()

  /**
   * Standard Security Headers for SME & Industrial Infrastructure
   * Prevents clickjacking, MIME sniffing, and unauthorized device access.
   */
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  /**
   * Permissions-Policy: Restricts hardware access to minimize attack surface.
   */
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  return response
}

export const config = {
  matcher: [
    /**
     * Strategic Route Matcher:
     * Excludes API endpoints, internal Next.js assets, and static media files
     * to optimize middleware execution performance and Crawl Budget.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp)$).*)',
  ],
}
