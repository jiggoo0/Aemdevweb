/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PERFORMANCE (SUKHOTHAI EDITION)
// Identity: สถิติความเชื่อมั่นและความยิ่งใหญ่ของโรงไม้
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Award, MapPin } from "lucide-react" // ✅ ลบ ShieldCheck ออกเพื่อแก้ Warning

export default function PerformanceSection() {
  const stats = [
    {
      label: "YEARS_EXPERIENCE",
      value: "25",
      unit: "ปี",
      desc: "ความเชี่ยวชาญด้านไม้แปรรูป",
      icon: <Award size={10} />,
    },
    {
      label: "SERVICE_AREAS",
      value: "9",
      unit: "อำเภอ",
      desc: "ส่งด่วนครอบคลุมทั่วสุโขทัย",
      icon: <MapPin size={10} />,
    },
    {
      label: "STOCK_AVAILABILITY",
      value: "100",
      unit: "%",
      desc: "มีสินค้าพร้อมส่ง ไม่ต้องรอนาน",
      icon: <Zap size={10} />,
    },
  ]

  return (
    <section className="overflow-hidden border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl border-x border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. BRAND_HEADER_CELL: ส่วนหัวของเซกชันสถิติ */}
          <div className="border-b border-slate-800 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div className="mb-8 flex h-10 w-10 items-center justify-center bg-[#7B3F00] font-black italic text-white">
              ST
            </div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-none tracking-tighter">
              ตัวเลขยืนยัน <br />
              <span className="text-slate-500">ความเป็นมืออาชีพ</span>
            </h2>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Sukhothai_Timber_System_Verified // 2025
            </p>
          </div>

          {/* 2. STATS_GRID: ส่วนแสดงสถิติ 3 ช่อง */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center border-b border-slate-800 p-10 transition-colors last:border-b-0 last:border-r-0 hover:bg-slate-800/30 sm:border-b-0 sm:border-r md:p-12"
              >
                {/* METRIC_LABEL: ชื่อสถิติ */}
                <span className="mb-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#A0522D]">
                  {item.icon} {item.label}
                </span>

                {/* MAIN_VALUE: ตัวเลขขนาดใหญ่ */}
                <div className="mb-3 flex items-baseline transition-transform duration-500 group-hover:translate-x-1">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {item.value}
                  </span>
                  <span className="ml-1 font-mono text-xl font-bold text-slate-600">
                    {item.unit}
                  </span>
                </div>

                {/* DESCRIPTION: คำอธิบายภาษาไทย */}
                <p className="text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-slate-400">
                  <span className="mr-1 text-[#7B3F00] opacity-50">#</span>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
