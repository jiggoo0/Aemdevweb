/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PERFORMANCE (SUKHOTHAI EDITION)
// Identity: สถิติความเชื่อมั่นและความยิ่งใหญ่ของโรงไม้ (Authority Layer)
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Award, MapPin } from "lucide-react"

interface StatItem {
  label: string
  value: string
  unit: string
  desc: string
  icon: React.ReactNode
}

interface PerformanceSectionProps {
  themeColor?: string
}

export default function PerformanceSection({
  themeColor = "#7B3F00",
}: PerformanceSectionProps) {
  // ข้อมูลสถิติที่เน้น Authority ของโรงไม้สุโขทัย
  const stats: StatItem[] = [
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
    <section className="overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl border-x border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. BRAND_HEADER_CELL: หัวข้อเน้นความเชื่อมั่นในสไตล์ Industrial */}
          <div className="border-b border-slate-800 bg-slate-900/40 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div
              className="mb-10 flex h-14 w-14 items-center justify-center font-black italic text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] transition-transform hover:scale-110"
              style={{ backgroundColor: themeColor }}
            >
              ST
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-5xl">
              ตัวเลขยืนยัน <br />
              <span className="text-slate-500">ความเป็นมืออาชีพ</span>
            </h2>
            <div className="space-y-2">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
                Sukhothai_Timber_System_Verified
              </p>
              <div className="h-0.5 w-12 bg-slate-800" />
              <p className="font-mono text-[9px] font-bold text-slate-700">
                EST. 2000 // LOGISTICS_DEPT
              </p>
            </div>
          </div>

          {/* 2. STATS_GRID: ตัวเลขขนาดใหญ่สไตล์ Brutalist เพื่อสร้าง Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-center border-b border-slate-800 p-12 transition-all duration-500 last:border-r-0 hover:bg-slate-900 md:border-b-0 md:border-r md:p-16"
              >
                {/* Decoration: ลำดับช่องจางๆ ด้านบน */}
                <span className="absolute right-6 top-6 select-none font-mono text-7xl font-black text-white/[0.03] transition-opacity group-hover:opacity-10">
                  0{idx + 1}
                </span>

                {/* METRIC_LABEL: หัวข้อย่อยประจำช่อง */}
                <span
                  className="mb-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em]"
                  style={{ color: themeColor }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                    {item.icon}
                  </span>
                  {item.label}
                </span>

                {/* MAIN_VALUE: ตัวเลขสถิติหลัก */}
                <div className="mb-6 flex items-baseline transition-transform duration-500 group-hover:translate-x-3">
                  <span className="text-7xl font-black italic leading-none tracking-tighter md:text-8xl lg:text-9xl">
                    {item.value}
                  </span>
                  <span className="ml-3 font-mono text-xl font-black uppercase text-slate-600">
                    {item.unit}
                  </span>
                </div>

                {/* DESCRIPTION: คำอธิบายใต้ตัวเลข */}
                <div className="flex items-center gap-4">
                  <div
                    className="h-[2px] w-6 transition-all duration-500 group-hover:w-10"
                    style={{ backgroundColor: themeColor }}
                  />
                  <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    {item.desc}
                  </p>
                </div>

                {/* HOVER_ACCENT: เส้นด้านล่างที่จะแสดงเมื่อเมาส์ชี้ */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full"
                  style={{ backgroundColor: themeColor }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
