/** @format */

import React from "react"
// [แก้ไขพิกัด]: นำเครื่องหมาย { } ออกเพื่อให้ตรงกับ export default ของคอมโพเนนต์ต้นทาง
import SeoNavbar from "./_components/SeoNavbar"
import SeoFooter from "./_components/SeoFooter"

/**
 * SeoLayout: พิกัดควบคุมโครงสร้างพื้นฐานสำหรับหมวดบริการ SEO
 * ปรับปรุงระบบการดึงข้อมูลคอมโพเนนต์เพื่อกำจัดข้อผิดพลาด 'undefined'
 */
export default function SeoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ส่วนนำทางหลักที่ผ่านการตรวจสอบพิกัดรหัสแล้ว */}
      <SeoNavbar />

      {/* พิกัดแสดงผลเนื้อหาบริการเชิงเทคนิค */}
      <main className="flex-1">
        {children}
      </main>

      {/* ส่วนท้ายของระบบงาน */}
      <SeoFooter />
    </div>
  )
}
