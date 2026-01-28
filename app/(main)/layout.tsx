/** @format */

import React from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

/**
 * [COMPONENTS]: ดึงส่วนประกอบหน้าเว็บหลัก
 * เน้นการโหลดที่รวดเร็วและไม่หน่วงเครื่องผู้ใช้งาน เพื่อผลลัพธ์ความเร็วระดับปีศาจ
 */
import LineStickyButton from "@/components/shared/LineStickyButton"

/**
 * MainLayout - โครงสร้างพื้นฐานสำหรับกลุ่มหน้าบริการหลัก
 * ครอบคลุม: หน้าเกี่ยวกับเรา, บริการ, บทความ และผลงาน
 * ปรัชญา: เรียบง่าย โหลดไว และใช้งานง่ายที่สุดในสไตล์นายเอ็มซ่ามากส์
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* ปุ่มลัด (Skip to Content): 
          ช่วยให้ผู้ใช้งานข้ามไปยังเนื้อหาหลักได้ทันที เพิ่มคะแนน Accessibility ให้เต็มร้อย
      */}
      <a
        href="#main-content"
        className="focus:font-heading sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[1000] focus:rounded-2xl focus:bg-slate-950 focus:px-8 focus:py-4 focus:text-xs focus:font-black focus:tracking-widest focus:text-emerald-500 focus:uppercase focus:italic focus:shadow-2xl"
      >
        ข้ามไปที่เนื้อหาหลัก
      </a>

      {/* เมนูหลัก (Navbar):
          ออกแบบให้ลูกค้าหาข้อมูลและบริการที่ต้องการได้ไวที่สุด ไม่ซับซ้อน
      */}
      <Navbar />

      {/* พื้นที่เนื้อหาหลัก (Main Content):
          โครงสร้างรองรับการเปลี่ยนหน้าแบบลื่นไหล ตามมาตรฐานเว็บปี 2026
      */}
      <main
        id="main-content"
        className="flex-1 transition-all duration-500 outline-none"
      >
        {children}
      </main>

      {/* ปุ่มติดต่อด่วน (Quick Contact):
          ปุ่ม LINE ติดหนึบมุมหน้าจอ เพื่อให้ลูกค้าทักปรึกษาได้ทันทีที่ต้องการ
      */}
      <div className="fixed right-8 bottom-8 z-[99] md:right-12 md:bottom-12">
        <LineStickyButton />
      </div>

      {/* ส่วนท้าย (Footer):
          สรุปช่องทางติดต่อและลิงก์สำคัญทั้งหมดของ AEMDEVWEB
      */}
      <Footer />
    </div>
  )
}
