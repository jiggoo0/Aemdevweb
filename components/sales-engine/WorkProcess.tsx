/** @format */
"use client"

import React, { useState, useEffect } from "react"
import {
  MessageSquare,
  LayoutTemplate,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

// 📝 Interface Definition
interface WorkStep {
  icon: LucideIcon
  title: string
  desc: string
  color: string
  delay: string
}

// 📦 Data: ขั้นตอนการทำงาน
const steps: WorkStep[] = [
  {
    icon: MessageSquare,
    title: "คุยความต้องการ",
    desc: "บอกโจทย์ธุรกิจของคุณให้พี่เอ็มฟัง พี่เอ็มจะช่วยวางแผนการขายบนหน้าเว็บให้ฟรี แบบไม่มีกั๊ก!",
    color: "from-aurora-cyan to-aurora-violet",
    delay: "100ms",
  },
  {
    icon: LayoutTemplate,
    title: "เลือกทรง & ปรับแต่ง",
    desc: "เลือกโครงสร้างที่คุณชอบ แล้วส่งข้อมูลมา พี่เอ็มจัดการวาง Layout ที่ปิดการขายได้จริงและสวยงาม",
    color: "from-aurora-emerald to-aurora-cyan",
    delay: "300ms",
  },
  {
    icon: ShieldCheck,
    title: "ส่งงาน & ดูแลตลอดชีพ",
    desc: "เว็บออนไลน์ได้จริงใน 3-7 วัน พร้อมสอนใช้งานเบื้องต้น มีปัญหาทักถามพี่เอ็มได้ตลอดชีพ ไม่ทิ้งงานแน่นอน",
    color: "from-aurora-violet to-aurora-emerald",
    delay: "500ms",
  },
]

export const WorkProcess = () => {
  const [isMounted, setIsMounted] = useState(false)

  // ✅ Hydration Fix: ใช้ setTimeout เพื่อผลัก State Update ไปยัง Event Loop รอบถัดไป
  // ช่วยแก้ Error: "Calling setState synchronously within an effect"
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-slate-950 relative overflow-hidden py-32">
      {/* 🌌 Background Decor */}
      <div className="aurora-bg pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-[size:50px_50px] opacity-[0.02]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* 🎯 Header Section */}
        <div
          className={cn(
            "mx-auto mb-24 max-w-4xl text-center transition-all duration-1000",
            isMounted
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          )}
        >
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-4 w-4 animate-pulse" /> Simple Process
          </div>

          <h2 className="text-luminous mb-10 text-4xl tracking-tighter uppercase md:text-7xl">
            3 ขั้นตอนง่ายๆ <br className="md:hidden" />
            มีเว็บเป็น <span className="text-aurora-emerald">ของตัวเอง</span>
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
            &quot;ไม่ต้องกังวลเรื่องเทคนิค พี่เอ็มดูแลให้ครบทุกขั้นตอน
            จนกว่าเว็บจะออนไลน์ครับ&quot;
          </p>
        </div>

        {/* 🛣️ Steps Grid */}
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 -z-10 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className={cn(
                  "group relative transition-all duration-1000",
                  isMounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: isMounted ? step.delay : "0ms" }}
              >
                {/* Connector Arrow (Desktop) */}
                {i < steps.length - 1 && (
                  <div className="text-aurora-cyan/20 group-hover:text-aurora-cyan/50 absolute top-1/3 -right-10 z-20 hidden transition-all duration-500 lg:block">
                    <ArrowRight className="h-10 w-10" />
                  </div>
                )}

                <div className="glass-card flex flex-col items-center p-12 text-center transition-all duration-700 hover:-translate-y-4 hover:border-aurora-cyan/40 hover:shadow-luminous">
                  <div className="relative mb-10">
                    <div
                      className={cn(
                        "shadow-luminous flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br text-white transition-all duration-700 group-hover:scale-110",
                        step.color
                      )}
                    >
                      <Icon className="h-10 w-10 drop-shadow-lg" />
                    </div>
                    <div className="text-aurora-cyan absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-lg font-black">
                      0{i + 1}
                    </div>
                  </div>

                  <h3 className="font-prompt group-hover:text-aurora-cyan mb-6 text-3xl font-black italic tracking-tight text-white uppercase transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-anuphan text-base leading-relaxed font-medium text-slate-400 opacity-80 group-hover:opacity-100">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
