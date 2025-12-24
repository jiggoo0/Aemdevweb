/** @format */

import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* 1. Header มักจะตั้งค่าเป็น fixed/sticky 
          จึงแนะนำให้ตรวจเช็ค padding-top ในหน้าย่อย 
      */}
      <Header />

      {/* 2. flex-1: ดัน Footer ลงล่างเสมอ
          3. overflow-x-hidden: ป้องกันจอดิ้นในแนวนอนจาก Animation หรือ Component ที่กว้างเกินไป
      */}
      <main className="flex-1 overflow-x-hidden">{children}</main>

      {/* 4. Footer ส่วนท้ายเว็บไซต์ */}
      <Footer />
    </div>
  )
}
