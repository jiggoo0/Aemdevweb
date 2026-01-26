/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

/**
 * นิยามพิกัดข้อมูล (Interface) เพื่อล้าง Warning เรื่อง any
 */
interface NavLink {
  label: string
  href: string
}

interface RentalNavbarProps {
  data: {
    logo: string
    cta: string
    links: NavLink[]
  }
}

/**
 * RentalNavbar - ส่วนแถบนำทางสำหรับระบบเช่าเว็บ
 * ปรับปรุงพิกัด Type และระบบ Font ให้เป็นมาตรฐาน Specialist 2026
 */
export const RentalNavbar = ({ data }: RentalNavbarProps) => (
  <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
    <div className="container mx-auto flex h-20 items-center justify-between px-6">
      {/* พิกัดโลโก้: ใช้ฟอนต์ Heading (IBM Plex Sans Thai) */}
      <div className="font-heading text-2xl font-black tracking-tighter text-white uppercase italic">
        {data.logo}
      </div>

      {/* รายการเมนูสำหรับหน้าจอขนาดใหญ่ */}
      <div className="hidden items-center gap-8 lg:flex">
        {data.links.map((link, i) => (
          <Link
            key={`${link.label}-${i}`}
            href={link.href}
            className="font-body text-sm font-bold text-slate-400 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}

        {/* ปุ่มดำเนินการหลัก (CTA) */}
        <button className="font-heading flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-[10px] font-black tracking-[0.2em] text-white uppercase italic transition-all hover:bg-indigo-500 active:scale-95">
          {data.cta} <ArrowRight size={14} />
        </button>
      </div>

      {/* ปุ่มเมนูสำหรับ Mobile */}
      <button className="p-2 text-white lg:hidden" aria-label="เปิดเมนูนำทาง">
        <Menu size={24} />
      </button>
    </div>
  </nav>
)
