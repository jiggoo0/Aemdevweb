/** @format */

import { NextResponse } from 'next/server'

/**
 * Proxy Infrastructure - Next.js 16 Enterprise Standard
 * Optimized for AEMDEVWEB Performance Standards (Score 99 | LCP 0.6s)
 * Function renamed to 'proxy' to satisfy Next.js 16 Proxy requirements.
 * Identity: นายเอ็มซ่ามากส์
 * Paradigm: Industrial Mindset - Security First
 */
export function proxy() {
  // Initialize response from the next execution link
  const response = NextResponse.next()

  /**
   * Header: X-Frame-Options
   * Requirement: Prevent Clickjacking attacks by disallowing frame embedding.
   */
  response.headers.set('X-Frame-Options', 'DENY')

  /**
   * Header: X-Content-Type-Options
   * Requirement: Enforce strict MIME checking to prevent drive-by downloads.
   */
  response.headers.set('X-Content-Type-Options', 'nosniff')

  /**
   * Header: Referrer-Policy
   * Requirement: Control information leakage in cross-origin requests.
   */
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  /**
   * Header: X-XSS-Protection
   * Requirement: Legacy browser protection (Defense in depth strategy).
   */
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  /**
   * Header: Permissions-Policy
   * Requirement: Strict hardware access restriction to reduce attack surface.
   */
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  return response
}

export const config = {
  /**
   * Performance Optimized Matcher:
   * Carefully crafted to bypass static assets and internal Next.js calls.
   * Optimized for Crawl Budget and Edge execution.
   */
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp)$).*)',
  ],
}
