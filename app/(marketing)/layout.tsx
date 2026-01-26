/** @format */

import React from "react"

interface MarketingLayoutProps {
  children: React.ReactNode
}

/**
 * Marketing Layout (Clean Wrapper Mode)
 * ถอด Navbar, Footer และปุ่มติดต่อออก เพื่อให้หน้าลูก (Children)
 * จัดการส่วนประกอบเหล่านี้เองได้อิสระ หรือใช้ในหน้า Landing Page เฉพาะกิจ
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* พื้นที่เนื้อหาหลัก: 
        ถอด Navbar/Footer/LineButton ออกแล้ว 
        เพื่อให้ children จัดการเลย์เอาต์ภายในเองได้ 100% 
      */}
      <main className="flex-1 transition-all duration-500">{children}</main>
    </div>
  )
}
