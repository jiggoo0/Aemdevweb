/** @format */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * AEMDEVWEB | Edge Proxy Protocol (Next.js 16.1+ Optimized)
 * ยุทธศาสตร์: "Security as Code" ป้องกันตั้งแต่ระดับขอบพิกัด (Edge)
 * เป้าหมาย: ล้างพิกัด Warning และรักษาค่า LCP < 0.6s
 */
export function proxy(_request: NextRequest) {
  const response = NextResponse.next()

  /**
   * [1] CORE SECURITY HEADERS
   * บังคับใช้โปรโตคอลความปลอดภัยระดับสูงสุด (High-End Infrastructure)
   */
  const securityHeaders = {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    /** * [CSP Node]: ป้องกัน XSS
     * จูนให้รองรับ Google Tag Manager และความปลอดภัยของรูปภาพ
     */
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline';",
  }

  // ฉีดพิกัด Headers เข้าสู่ Response แบบ Batch
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

/**
 * [2] MATCHER CONFIGURATION
 * กรองเส้นทางเพื่อลดภาระการประมวลผล (Optimization Node)
 */
export const config = {
  matcher: [
    /*
     * กรองพิกัดที่ไม่ต้องการให้ Proxy รัน (เพื่อความเร็วสูงสุด):
     * - ข้ามระบบหลังบ้าน (api)
     * - ข้ามไฟล์ระบบ Next.js (_next/static, _next/image)
     * - ข้ามไฟล์ Static Assets ทั้งหมดใน public
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.xml|.*\\.(?:svg|png|jpg|jpeg|webp|gif)$).*)",
  ],
}
