/** @format */

"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, TrendingUp, Users, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ข้อมูลสถิติเพื่อสร้างความเชื่อมั่น (Core Metrics)
 * ชุดข้อมูลนี้ถูกเลือกเพื่อยืนยันประสิทธิภาพของระบบงานที่ส่งมอบให้ลูกค้า
 */
const stats = [
  {
    label: "คะแนน PageSpeed",
    value: 99,
    suffix: "/100",
    icon: Zap,
    description: "เน้นความไวระดับสูงสุด",
    color: "text-emerald-500",
  },
  {
    label: "โอกาสปิดการขาย",
    value: 300,
    suffix: "%",
    icon: TrendingUp,
    description: "อัตราการเปลี่ยนเป็นยอดขายที่ดีขึ้น",
    color: "text-blue-500",
  },
  {
    label: "ธุรกิจที่ดูแล",
    value: 50,
    suffix: "+",
    icon: Users,
    description: "กลุ่ม SME และโรงงานทั่วไทย",
    color: "text-slate-900",
  },
  {
    label: "เทคโนโลยีปี 2026",
    value: 2026,
    suffix: "",
    icon: Globe,
    description: "รากฐานดิจิทัลที่ทันสมัยที่สุด",
    color: "text-indigo-500",
  },
]

/**
 * ระบบคำนวณตัวเลขวิ่ง (Counter Engine)
 * พัฒนาด้วย requestAnimationFrame เพื่อความลื่นไหลระดับ 60fps
 */
const Counter = ({
  value,
  duration = 2,
}: {
  value: number
  duration?: number
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        )
        // ใช้หลักการ Linear Interpolation แบบง่ายในการคำนวณค่า
        const currentCount = Math.floor(progress * value)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

/**
 * ImpactStats - ส่วนแสดงผลลัพธ์และความสำเร็จเชิงตัวเลข
 * ออกแบบมาเพื่อสร้างความมั่นใจให้กับกลุ่มเจ้าของธุรกิจและโรงงานอุตสาหกรรม
 */
export const ImpactStats = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* ส่วนบรรจุไอคอน: ออกแบบด้วยแนวทางความแม่นยำระดับ Specialist */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-slate-50 text-slate-900 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-emerald-400 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                <stat.icon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12" />
              </div>

              {/* ส่วนแสดงตัวเลขที่มีการเคลื่อนไหว */}
              <div className="mb-2 flex items-baseline justify-center">
                <h3 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 italic md:text-5xl lg:text-6xl">
                  <Counter value={stat.value} />
                </h3>
                <span
                  className={cn(
                    "font-prompt ml-1 text-xl font-black italic",
                    stat.color
                  )}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* หัวข้อและคำอธิบายข้อมูล */}
              <div className="font-prompt text-[11px] font-black tracking-[0.3em] text-slate-500 uppercase">
                {stat.label}
              </div>
              <p className="font-anuphan mt-3 max-w-[150px] text-sm font-bold text-slate-400">
                {stat.description}
              </p>

              {/* เส้นแบ่งเขตข้อมูลเชิงโครงสร้าง (เฉพาะหน้าจอขนาดใหญ่) */}
              {index < stats.length - 1 && (
                <div
                  className="absolute top-1/2 -right-6 hidden h-16 w-[1px] -translate-y-1/2 bg-slate-100 opacity-50 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
