/** @format */

import React from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

/**
 * [FIXED]: นำเข้าคอมโพเนนต์แบบ Default Import (ไม่มีปีกกา)
 * เพื่อป้องกันพิกัดข้อมูลผิดพลาด (undefined) ทำให้ระบบเรียกใช้งานได้แม่นยำ 100%
 */
import LineStickyButton from "@/components/shared/LineStickyButton"

/**
 * MainLayout - ระบบพื้นฐานสำหรับกลุ่มหน้าเนื้อหาหลัก
 * ครอบคลุมพิกัดหน้า: เกี่ยวกับเรา, บริการ, บทความ และผลงาน
 * แนวทาง: เน้นการเข้าถึงข้อมูลที่ลื่นไหล และมีจุดเชื่อมต่อถึงที่ปรึกษาได้ทุกเวลา
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white selection:bg-emerald-500/10">
      {/* [LAYER 1] - ส่วนนำทาง (Navbar): พิกัดการเข้าถึงเมนูหลักของระบบงาน */}
      <Navbar />

      {/* [LAYER 2] - พื้นที่เนื้อหา (Main Content): พิกัดแสดงผลข้อมูลตามที่ผู้ใช้งานเลือกชม */}
      <main className="flex-1 focus:outline-none">{children}</main>

      {/* [LAYER 3] - จุดติดต่อด่วน (Quick Contact): ปุ่ม LINE สำหรับการปรึกษาโครงการ */}
      <LineStickyButton />

      {/* [LAYER 4] - ส่วนท้าย (Footer): พิกัดรวบรวมข้อมูลธุรกิจและลิงก์ที่จำเป็น */}
      <Footer />
    </div>
  )
}
