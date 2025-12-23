/** @format */
import React from "react"

export default function LandingTemplateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // กำหนด h-full เพื่อให้เทมเพลตคุมพื้นที่หน้าจอได้ทั้งหมด
    <div className="landing-scope min-h-screen bg-white">
      {/* 🟢 ไฟล์นี้จะว่างเปล่าที่สุด เพราะเราต้องการให้ Template 
          จัดการ Navbar และ Footer ของตัวเองผ่าน Variant Components */}
      {children}
    </div>
  )
}
