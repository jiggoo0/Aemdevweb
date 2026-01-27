/** @format */

import React from "react"
import { Zap, Timer, Gauge, ShieldCheck } from "lucide-react"

/**
 * SpeedDemon: คอมโพเนนต์แสดงผลพิกัดความเร็วของระบบงาน
 * ยุทธศาสตร์: พิสูจน์คุณภาพงานหลังบ้านผ่านตัวเลขที่วัดผลได้จริง
 */
export const SpeedDemon = () => {
  const performanceMetrics = [
    {
      label: "Initial Load",
      value: "0.4s",
      icon: Timer,
      desc: "พิกัดความเร็วในการเข้าถึงหน้าแรก",
    },
    {
      label: "Core Web Vitals",
      value: "99/100",
      icon: Gauge,
      desc: "คะแนนมาตรฐานความกริบของระบบ",
    },
    {
      label: "Secure Protocol",
      value: "Active",
      icon: ShieldCheck,
      desc: "พิกัดความปลอดภัยข้อมูลขั้นสูงสุด",
    },
  ]

  return (
    <div className="my-16 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-emerald-500/5">
      <div className="flex flex-col lg:flex-row">
        {/* เลเยอร์เน้นย้ำพิกัดความแรง (Highlight Section) */}
        <div className="flex flex-col justify-center bg-slate-950 p-10 text-white lg:w-1/3">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <Zap size={24} fill="currentColor" />
          </div>
          <h3 className="text-3xl leading-none font-black tracking-tighter uppercase italic">
            Speed <br />
            <span className="text-emerald-500">Infrastructure.</span>
          </h3>
          <p className="mt-6 text-xs leading-relaxed font-bold tracking-widest text-slate-400 uppercase">
            ทุกพิกัดงานถูกรีดประสิทธิภาพ <br />
            เพื่อให้ธุรกิจเข้าถึงลูกค้าได้ไวที่สุด
          </p>
        </div>

        {/* เลเยอร์ตัวเลขวัดผล (Metrics Grid) */}
        <div className="grid flex-1 gap-1 bg-slate-50 p-1 md:grid-cols-3">
          {performanceMetrics.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white p-8 transition-all hover:bg-emerald-50/30"
            >
              <div className="mb-8 flex items-center justify-between">
                <item.icon
                  size={20}
                  className="text-slate-400 group-hover:text-emerald-500"
                />
                <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
                  Metric {index + 1}
                </span>
              </div>

              <div>
                <div className="text-4xl font-black tracking-tighter text-slate-950 italic md:text-5xl">
                  {item.value}
                </div>
                <div className="mt-2 text-[11px] font-black tracking-wider text-emerald-600 uppercase italic">
                  {item.label}
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* แถบสถานะความกริบ (Status Bar) */}
      <div className="bg-emerald-500 py-3 text-center">
        <p className="text-[9px] font-black tracking-[0.4em] text-white uppercase italic">
          Verified Performance Optimization 2026
        </p>
      </div>
    </div>
  )
}
