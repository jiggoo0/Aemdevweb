/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION GUARANTEE SECTION
// Identity: Trust & Stability (ความเชื่อมั่นและบริการ)
// Design: Sharp Grid Architecture (สไตล์เหลี่ยมคม)
// ----------------------------------------------------

"use client"

import React from "react"
import { Heart, ShieldCheck, Headphones } from "lucide-react"

export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: <ShieldCheck size={32} />,
      title: "มั่นใจ ไม่ทิ้งงาน",
      desc: "จดทะเบียนชัดเจน มีตัวตนจริง ติดต่อได้ตลอดเวลา พร้อมสัญญาจ้างมาตรฐาน",
      label: "IDENTITY_VERIFIED",
    },
    {
      icon: <Headphones size={32} />,
      title: "สอนใช้งานฟรี",
      desc: "มีคู่มือและคลิปสอนแก้ข้อมูลเองได้ ไม่ต้องรอช่างให้เสียเวลา จัดการเองได้ 100%",
      label: "HANDOVER_READY",
    },
    {
      icon: <Heart size={32} />,
      title: "ดูแลหลังการขาย",
      desc: "ระบบมีปัญหาเราแก้ให้ฟรี ตลอดอายุการใช้งาน มั่นใจได้ว่าธุรกิจจะไม่สะดุด",
      label: "LIFETIME_SUPPORT",
    },
  ]

  return (
    <section className="overflow-hidden border-b border-blue-700 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl border-x border-blue-500/30">
        {/* GRID_LAYOUT: แบ่ง 3 ส่วนด้วยเส้นขอบบางๆ สไตล์ Industrial */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col gap-6 p-10 transition-all duration-300 hover:bg-blue-700/50 md:p-14 ${
                idx !== guarantees.length - 1
                  ? "border-b border-blue-500/30 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* ICON_HOLDER: ปรับให้ดูเป็นระบบเครื่องจักร */}
              <div className="text-blue-200 transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                {item.icon}
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300/60">
                  {item.label}
                </span>
                <h4 className="text-2xl font-black uppercase leading-none tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-sm font-medium uppercase leading-relaxed tracking-tight text-blue-100/80">
                  {item.desc}
                </p>
              </div>

              {/* DECORATIVE_BAR: เส้นขอบล่างเพิ่มมิติ */}
              <div className="h-1 w-12 bg-white/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
