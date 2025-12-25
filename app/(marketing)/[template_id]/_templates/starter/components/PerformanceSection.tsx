/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS PERFORMANCE (FIXED)
// Identity: Production Professional (Data Visualization)
// Design: Industrial Grid, High-Contrast Data Display
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Activity, ShieldCheck, BarChart3 } from "lucide-react"

export default function PerformanceSection() {
  const stats = [
    {
      label: "PAGESPEED_SCORE",
      value: "99",
      unit: "/100",
      desc: "คะแนนการโหลดหน้าเว็บ",
      icon: <Zap size={10} />,
    },
    {
      label: "UPTIME_RATIO",
      value: "99.9",
      unit: "%",
      desc: "ความเสถียรของเซิร์ฟเวอร์",
      icon: <Activity size={10} />,
    },
    {
      label: "SECURITY_LEVEL",
      value: "A+",
      unit: "V",
      desc: "มาตรฐานความปลอดภัย",
      icon: <ShieldCheck size={10} />,
    },
  ]

  return (
    <section className="overflow-hidden border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl border-x border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. BRAND_HEADER_CELL */}
          <div className="border-b border-slate-800 bg-slate-900/50 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-10 bg-blue-500" />
              <BarChart3 size={16} className="text-slate-500" />
            </div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.1] tracking-tighter md:text-4xl">
              HIGH_SPEED <br /> PRODUCTION
            </h2>
            <p className="text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-400">
              เราไม่ได้ออกแบบแค่ความสวยงาม แต่เราเน้นที่ประสิทธิภาพสูงสุด
              เพื่อให้แน่ใจว่าลูกค้าของคุณจะไม่เสียเวลารอแม้แต่วินาทีเดียว
            </p>
          </div>

          {/* 2. DATA_CELLS_GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center border-b border-slate-800 p-10 transition-colors last:border-b-0 last:border-r-0 hover:bg-slate-800/30 sm:border-b-0 sm:border-r md:p-12"
              >
                {/* METRIC_LABEL */}
                <span className="mb-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500">
                  {item.icon} {item.label}
                </span>

                {/* MAIN_VALUE */}
                <div className="mb-3 flex items-baseline transition-transform duration-500 group-hover:translate-x-1">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {item.value}
                  </span>
                  <span className="ml-1 font-mono text-xl font-bold text-slate-600">
                    {item.unit}
                  </span>
                </div>

                {/* DESCRIPTION: Fixed Comment Text Node Error */}
                <p className="text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-slate-500">
                  <span className="mr-1 text-blue-900 opacity-50">#</span>{" "}
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
