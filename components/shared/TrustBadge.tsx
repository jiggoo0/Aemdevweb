/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { ShieldCheck, Zap, BarChart3, Cpu, Sparkles } from "lucide-react"

/**
 * TrustBadge - ระบบยืนยันมาตรฐานคุณภาพ (The Authority Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านตัวชี้วัดประสิทธิภาพระดับสากล
 */
export default function TrustBadge() {
  const standards = [
    {
      icon: <Zap size={24} />,
      label: "Loading Performance",
      value: "LCP < 0.8s Target",
      desc: "ความเร็วการโหลดระดับเป็นเลิศ",
    },
    {
      icon: <Cpu size={24} />,
      label: "System Structure",
      value: "Next.js 16.1 Native",
      desc: "โครงสร้างระบบที่ทันสมัยที่สุด",
    },
    {
      icon: <BarChart3 size={24} />,
      label: "Search Visibility",
      value: "AI Search Ready",
      desc: "รองรับระบบการค้นหายุคใหม่",
    },
    {
      icon: <ShieldCheck size={24} />,
      label: "Quality Standard",
      value: "95-100 Performance",
      desc: "ผลลัพธ์คะแนนระดับสูงสุด",
    },
  ]

  /** * Animation Variants:
   * การจัดจังหวะแสดงผลข้อมูลเพื่อความลื่นไหลและดูเป็นมืออาชีพ
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden border-y border-slate-50 bg-white py-20 lg:py-24">
      {/* พื้นหลังลายเส้นตารางเชิงระบบจางๆ เพื่อเพิ่มมิติความประณีต */}
      <div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 md:grid-cols-4"
        >
          {standards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col items-center gap-6 text-center md:items-start md:text-left"
            >
              {/* ส่วนแสดงไอคอนมาตรฐานคุณภาพ */}
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-slate-50 text-slate-400 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:bg-slate-950 group-hover:text-emerald-500 group-hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.3)]">
                  {item.icon}
                  <Sparkles
                    className="absolute -top-1 -right-1 text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100"
                    size={16}
                  />
                </div>
                {/* ลำดับการตรวจสอบมาตรฐาน */}
                <span className="font-heading absolute -right-2 -bottom-2 text-[8px] font-black tracking-widest text-slate-200 uppercase group-hover:text-emerald-500/40">
                  Standard_{idx + 1}
                </span>
              </div>

              <div className="space-y-3">
                <div className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                  {item.label}
                </div>

                <div className="font-heading text-2xl font-black tracking-tighter text-slate-950 italic transition-colors group-hover:text-emerald-600 lg:text-3xl">
                  {item.value}
                </div>

                <p className="font-body text-[11px] font-bold tracking-wide text-slate-400 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  {item.desc}
                </p>

                {/* เส้นบ่งบอกประสิทธิภาพที่ตอบสนองตามการโต้ตอบ */}
                <div className="relative h-[2px] w-12 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 w-0 bg-emerald-500 transition-all duration-700 ease-in-out group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
