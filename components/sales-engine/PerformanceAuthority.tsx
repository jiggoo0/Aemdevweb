/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { Gauge, Zap, Activity, ShieldCheck } from "lucide-react"

interface PerformanceProps {
  score?: number
  label?: string
  metric?: string
}

/**
 * PerformanceAuthority - ส่วนแสดงผลสมรรถนะระบบเชิงกลยุทธ์
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การยืนยันความเชื่อมั่นผ่านตัวเลขประสิทธิภาพที่พิสูจน์ได้จริง
 * มาตรฐาน: DNA Specialist - ดุดัน เฉียบคม และน่าเชื่อถือ
 */
export const PerformanceAuthority = ({
  score = 99,
  label = "Strategic Velocity",
  metric = "Performance Core",
}: PerformanceProps) => {
  return (
    <div className="relative my-16 overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-8 md:p-16">
      {/* Background Infrastructure Layer */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* [LAYER 1]: Data Visualization - ระบบแสดงมาตรวัดประสิทธิภาพ */}
        <div className="relative flex justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* Outer Ring */}
            <svg className="h-full w-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                className="fill-none stroke-slate-50"
                strokeWidth="8"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="48%"
                className="fill-none stroke-emerald-500"
                strokeWidth="8"
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 100 - score }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "circOut" }}
                strokeLinecap="round"
              />
            </svg>

            {/* Central Insight Node */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-heading text-7xl font-black tracking-tighter text-slate-950 italic md:text-8xl"
              >
                {score}
              </motion.span>
              <span className="font-heading -mt-2 text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
                {metric}
              </span>
            </div>
          </div>

          {/* Floating Performance Nodes */}
          <div className="absolute -top-4 -right-4 rounded-2xl bg-slate-950 p-4 text-white shadow-2xl">
            <Zap size={20} className="text-emerald-400" />
          </div>
        </div>

        {/* [LAYER 2]: Strategic Context - รายละเอียดความเหนือระดับของระบบ */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                System Verification
              </span>
            </div>
            <h3 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
              {label}<span className="text-emerald-500">.</span>
            </h3>
            <p className="font-body text-lg font-bold text-slate-500">
              ระบบที่ผ่านการคำนวณและปรับแต่งมาเพื่อประสิทธิภาพการประมวลผลสูงสุด 
              ลดอัตราการสูญเสียโอกาสทางธุรกิจจากความล่าช้าของโครงสร้างพื้นฐานเดิม
            </p>
          </div>

          {/* Technical Spec Matrix */}
          <div className="grid grid-cols-2 gap-6">
            <SpecItem icon={<Gauge size={16} />} label="LCP < 0.8s" />
            <SpecItem icon={<Activity size={16} />} label="High-Response" />
            <SpecItem icon={<ShieldCheck size={16} />} label="Stable Node" />
            <SpecItem icon={<Zap size={16} />} label="SEO Native" />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * SpecItem - ส่วนประกอบย่อยสำหรับระบุคุณสมบัติทางเทคนิค
 */
const SpecItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 border-l-2 border-slate-100 pl-4 transition-colors hover:border-emerald-500">
    <div className="text-emerald-500">{icon}</div>
    <span className="font-heading text-[10px] font-black tracking-widest text-slate-400 uppercase italic group-hover:text-slate-950">
      {label}
    </span>
  </div>
)
