/** @format */

import React from "react"

/**
 * ShopsLayout - โครงสร้างส่วนแสดงผลกลุ่มผลิตภัณฑ์ (Marketplace Interface)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างบรรยากาศที่ส่งเสริมภาพลักษณ์ระดับพรีเมียมและประสิทธิภาพการเข้าถึงข้อมูล
 * มาตรฐาน: High-Response UI และการจัดการโครงสร้างที่แม่นยำระดับสากล
 */
export default function ShopsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-white font-sans antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* โครงสร้างนี้ควบคุมทั้งส่วนรายการผลิตภัณฑ์ (Catalog) และส่วนแสดงผลตัวอย่าง (Preview)
        โดยใช้โทนสีมรกต (Emerald) เพื่อสะท้อนถึงความมั่งคั่งและความเสถียรของระบบ
      */}

      <main className="relative flex flex-col">{children}</main>

      {/* [VISUAL LAYER]: ลายเส้นโครงสร้างเชิงระบบ (Systematic Grid Overlay)
          สื่อถึงความประณีตและความแม่นยำของโครงสร้างระบบพื้นฐานที่ผ่านการตรวจสอบอย่างละเอียด
      */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* [ATMOSPHERIC DEPTH]: แสงนวลตาสร้างมิติเชิงพื้นที่ (Strategic Glow) 
          เพิ่มความพรีเมียมและความลึกให้กับการนำเสนอข้อมูล เพื่อประสบการณ์การใช้งานที่เหนือระดับ
      */}
      <div
        className="pointer-events-none fixed -top-[10%] -right-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />
    </div>
  )
}
