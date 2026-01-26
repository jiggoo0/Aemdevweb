/** @format */

"use client"

import React from "react"
import Link from "next/link"
// [FIXED]: ตัด usePathname ออกเนื่องจากไม่ได้ใช้ตรวจสอบสถานะ Active Link ในไฟล์นี้
import { motion } from "framer-motion"
import {
  ChevronLeft,
  LayoutTemplate,
  MonitorSmartphone,
  Share2,
} from "lucide-react"
// [FIXED]: ตัด cn ออกเนื่องจากไม่มีการจัดการเงื่อนไข ClassName ซับซ้อน

/**
 * แถบนำทางเฉพาะส่วนเทมเพลต (Template Marketplace Navbar)
 * ออกแบบมาเพื่อให้ผู้ใช้งานโฟกัสกับการเลือกโครงสร้างเว็บไซต์โดยเฉพาะ
 */
const TemplateNavbar = () => {
  // [FIXED]: ลบ const pathname = usePathname() ออกเพื่อเคลียร์ Error no-unused-vars

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* 1. ปุ่มย้อนกลับ (Navigation Control) */}
        <div className="flex items-center gap-4">
          <Link
            href="/templates"
            className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-950"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-200">
              <ChevronLeft size={16} />
            </div>
            <span className="font-prompt hidden text-[11px] font-black tracking-widest uppercase md:inline">
              Back to Catalog
            </span>
          </Link>
          <div className="mx-2 h-6 w-[1px] bg-slate-100" />
          <div className="flex items-center gap-2">
            <LayoutTemplate size={18} className="text-emerald-500" />
            <span className="font-prompt text-xs font-black tracking-tighter text-slate-900 uppercase">
              Structure <span className="text-slate-400">Preview</span>
            </span>
          </div>
        </div>

        {/* 2. ส่วนข้อมูลสถานะ (Status & Info) */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2">
            <MonitorSmartphone size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Responsive Structure Verified
            </span>
          </div>
        </div>

        {/* 3. ส่วนดำเนินการ (Action Buttons) */}
        <div className="flex items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "AEMDEVWEB Structure",
                  url: window.location.href,
                })
              }
            }}
          >
            <Share2 size={16} />
          </button>

          <Link
            href="/contact"
            className="font-prompt rounded-xl bg-slate-950 px-5 py-2.5 text-[10px] font-black tracking-[0.15em] text-white uppercase shadow-xl shadow-slate-200 transition-all hover:bg-emerald-600 hover:shadow-emerald-200 active:scale-95"
          >
            Get This Structure
          </Link>
        </div>
      </div>

      {/* แถบสถานะความก้าวหน้า (Visual Progress Indicator) */}
      <motion.div
        className="absolute bottom-[-1px] left-0 h-[2px] bg-emerald-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </nav>
  )
}

export default TemplateNavbar
