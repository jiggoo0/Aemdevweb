/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Users, TrendingUp, ShieldCheck, Globe, LucideIcon } from "lucide-react"

/**
 * [TYPE DEFINITIONS]
 */
interface StatItem {
  label: string
  value: string
  desc: string
  icon: LucideIcon
}

/**
 * ImpactStats - ระบบแสดงผลความสำเร็จเชิงสถิติ (The Authority Engine)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านตัวเลขผลลัพธ์ที่วัดผลได้จริง
 */
export const ImpactStats = () => {
  const stats: StatItem[] = [
    {
      label: "Completed Systems",
      value: "150+",
      desc: "ส่งมอบระบบเว็บไซต์และโซลูชันธุรกิจที่สมบูรณ์",
      icon: ShieldCheck,
    },
    {
      label: "Average Growth",
      value: "45%",
      desc: "อัตราการเติบโตเฉลี่ยของธุรกิจหลังการปรับปรุงระบบ",
      icon: TrendingUp,
    },
    {
      label: "Strategic Partners",
      value: "120+",
      desc: "ความสำเร็จร่วมกับพาร์ทเนอร์ทางธุรกิจที่ไว้วางใจเรา",
      icon: Users,
    },
    {
      label: "Industry Expertise",
      value: "12",
      desc: "ความเชี่ยวชาญที่ครอบคลุมกลุ่มธุรกิจหลักอย่างแม่นยำ",
      icon: Globe,
    },
  ]

  /** * Animation Variants:
   * การตั้งค่าการเคลื่อนไหวเพื่อเพิ่มความน่าสนใจให้กับข้อมูล
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 antialiased lg:py-32">
      {/* Background Layer: ลายเส้นตารางเชิงระบบเพื่อความแม่นยำ */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.03]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              variants={itemVariants}
              className="group flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Icon Node: การโต้ตอบที่ฉับไวและทันสมัย */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-slate-50 text-slate-400 ring-1 ring-slate-100 transition-all duration-500 group-hover:-rotate-6 group-hover:bg-slate-950 group-hover:text-emerald-400 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] group-hover:ring-emerald-500/50">
                <stat.icon size={32} strokeWidth={1.2} />
              </div>

              {/* Data Node: ความชัดเจนและโดดเด่นของข้อมูล */}
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl lg:text-8xl">
                    {stat.value}
                  </span>
                </div>
                <div className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic opacity-80">
                  {stat.label}
                </div>
              </div>

              {/* Description Node: ข้อมูลสนับสนุนที่เข้าใจง่าย */}
              <p className="font-body mt-6 max-w-[220px] text-sm leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-900">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
