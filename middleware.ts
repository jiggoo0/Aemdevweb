/** @format */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Middleware - ระบบควบคุมความปลอดภัยและลำดับการเข้าถึงข้อมูล
 * ยุทธศาสตร์: เน้นความเร็วสูงสุด (Edge Runtime) เพื่อรักษาพิกัด LCP 0.6s
 * มาตรฐานงาน: ป้องกันการโจมตีพื้นฐานและควบคุมสิทธิ์การเข้าถึงอุปกรณ์
 * Identity: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export function middleware(_request: NextRequest) {
  // สร้างพิกัดการตอบสนองเริ่มต้น
  const response = NextResponse.next()

  /**
   * [SECURITY LAYER]
   * กำหนดค่าชุดข้อมูล Header เพื่อความปลอดภัยตามมาตรฐานปี 2026
   */

  // 1. ป้องกันการแอบนำหน้าเว็บไปฝังในที่อื่น (Anti-Clickjacking)
  response.headers.set("X-Frame-Options", "DENY")

  // 2. บังคับการอ่านประเภทไฟล์ให้ตรงตามที่ระบุ ป้องกันการรันสคริปต์แปลกปลอม
  response.headers.set("X-Content-Type-Options", "nosniff")

  // 3. ควบคุมการส่งข้อมูลต้นทาง เพื่อรักษาความเป็นส่วนตัวของผู้ใช้งาน
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // 4. ล็อกพิกัดการใช้งานอุปกรณ์ ป้องกันการแอบเข้าถึงกล้องหรือไมค์โดยไม่ได้รับอนุญาต
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  )

  // 5. บังคับการเชื่อมต่อผ่านโปรโตคอลที่ปลอดภัยเท่านั้น (HSTS)
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  )

  return response
}

/**
 * [ROUTE CONFIG]
 * ระบบกรองเส้นทาง: กำหนดพิกัดให้ Middleware ทำงานเฉพาะส่วนที่จำเป็น
 * ข้ามไฟล์ระบบและไฟล์รูปภาพทั้งหมดเพื่อไม่ให้หน่วงความเร็วในการโหลด
 */
export const config = {
  matcher: [
    /*
     * 1. ข้ามพิกัด api (_next/data)
     * 2. ข้ามพิกัด static files (_next/static, _next/image)
     * 3. ข้ามไฟล์นามสกุลรูปภาพและไอคอนทั้งหมด
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|webp|gif)$).*)",
  ],
}
