/** @format */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * ระบบควบคุมเส้นทางและข้อมูล - มาตรฐานระดับมืออาชีพ
 * ปรับแต่งเพื่อประสิทธิภาพสูงสุดของ AEMDEVWEB (คะแนน 99 | LCP 0.6s)
 * ตัวแปร _request ใส่ขีดล่างเพื่อเคลียร์ Warning จากระบบตรวจสอบโค้ด
 * ผู้ดูแลระบบ: นายเอ็มซ่ามากส์
 * หลักการทำงาน: เน้นความปลอดภัยและรวดเร็วเป็นหลัก
 */
export function middleware(_request: NextRequest) {
  // เริ่มต้นเตรียมการส่งข้อมูลไปยังลำดับการทำงานถัดไป
  const response = NextResponse.next()

  /**
   * Header: X-Frame-Options
   * หน้าที่: ป้องกันการแอบนำหน้าเว็บไปฝังในที่อื่นเพื่อหลอกให้กด (Clickjacking)
   */
  response.headers.set("X-Frame-Options", "DENY")

  /**
   * Header: X-Content-Type-Options
   * หน้าที่: บังคับให้เบราว์เซอร์อ่านประเภทไฟล์อย่างแม่นยำ ป้องกันการรันไฟล์แปลกปลอม
   */
  response.headers.set("X-Content-Type-Options", "nosniff")

  /**
   * Header: Referrer-Policy
   * หน้าที่: ควบคุมการส่งข้อมูลต้นทางเมื่อมีการข้ามไปดูพิกัดอื่นนอกเว็บไซต์
   */
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  /**
   * Header: X-XSS-Protection
   * หน้าที่: ระบบป้องกันการฉีดสคริปต์เบื้องต้นสำหรับเบราว์เซอร์รุ่นเก่า
   */
  response.headers.set("X-XSS-Protection", "1; mode=block")

  /**
   * Header: Permissions-Policy
   * หน้าที่: ล็อกพิกัดการเข้าถึงอุปกรณ์ (กล้อง, ไมค์) เพื่อความปลอดภัยสูงสุดของผู้ใช้งาน
   */
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  )

  return response
}

export const config = {
  /**
   * ระบบกรองเส้นทาง:
   * ออกแบบมาให้ข้ามไฟล์ระบบและไฟล์รูปภาพเพื่อให้ทำงานได้รวดเร็วที่สุด
   * ลดภาระการทำงานของเครื่องลูกข่ายและช่วยให้บอทเก็บข้อมูลได้ง่ายขึ้น
   */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp)$).*)",
  ],
}
