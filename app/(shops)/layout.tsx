/** @format */

import React from "react"

/**
 * ShopsLayout - ส่วนคุมพิกัดหน้าตาหลักของโซนร้านค้า (Shops)
 * แนวคิด: สร้างบรรยากาศโชว์รูมที่เนี้ยบ ดูพรีเมียม และวางระบบให้โหลดไวสไตล์ Specialist
 * วางระบบโดย: นายเอ็มซ่ามากส์ (The Accessible Expert)
 */
export default function ShopsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="shops-unit-wrapper relative min-h-screen bg-white font-sans antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* [พิกัดงานระบบ]: 
        Layout นี้จะคุมพิกัดทั้งหน้ารวมแผนงาน (Catalog) และหน้าตัวอย่างงาน (Preview)
        เราจูนพิกัดสีเขียวมรกต (Emerald) ไว้เพื่อความกริบของระบบงานครับ
      */}

      <main className="relative flex flex-col">{children}</main>

      {/* [พิกัดงานดีไซน์]: ลายตารางจางๆ เบื้องหลัง
        ตอกย้ำว่าทุกส่วนของระบบหน้าร้านนี้ผ่านการจูนเครื่องมาอย่างดี 
      */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* วางพิกัดแสงเรืองแสงนุ่มๆ (Soft Glow) เพิ่มมิติความเนี้ยบสไตล์ Specialist */}
      <div
        className="pointer-events-none fixed -top-[10%] -right-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />
    </div>
  )
}
