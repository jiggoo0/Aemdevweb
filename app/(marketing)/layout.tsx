/** @format */

import React from "react"

interface MarketingLayoutProps {
  children: React.ReactNode
}

/**
 * Marketing Layout (Clean Wrapper Mode)
 * พิกัด: พื้นที่จัดวางหน้า Landing Page และ Campaign พิเศษ
 * * แนวทาง:
 * - ปิดกั้นการใช้ Navbar/Footer ส่วนกลางเพื่อปล่อยให้เนื้อหาคุมเลเยอร์ได้เอง
 * - ปรับจูนระนาบการจัดวางให้มีความลื่นไหล ไม่ขวางพิกัดการคลิก (Click Events)
 * - รองรับระบบงานที่ต้องการความเร็วและการเรนเดอร์ที่กริบที่สุด
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white antialiased">
      {/* พิกัดพื้นที่เนื้อหาหลัก: 
        ใช้ flex-1 เพื่อดันพิกัดให้เต็มความสูงหน้าจอเสมอ 
        โดยไม่มีการใส่ overflow-hidden ในระดับนี้ เพื่อป้องกันปัญหาระบบ Sticky ไม่ทำงาน
      */}
      <main className="relative flex-1 transition-all duration-500">
        {children}
      </main>
    </div>
  )
}
