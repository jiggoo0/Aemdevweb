/** @format */

import React from "react"
import {
  MessageSquare,
  LayoutTemplate,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { siteConfig } from "@/constants/site-config"

const steps = [
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "คุยความต้องการ",
    desc: "บอกโจทย์ธุรกิจของคุณให้พี่เอ็มฟัง พี่เอ็มจะช่วยวางแผนการขายบนหน้าเว็บให้ฟรี แบบไม่มีกั๊ก!",
    color: "from-aurora-cyan to-aurora-violet",
    delay: "delay-100",
  },
  {
    icon: <LayoutTemplate className="h-10 w-10" />,
    title: "เลือกทรง & ปรับแต่ง",
    desc: "เลือกโครงสร้างที่คุณชอบ แล้วส่งข้อมูลมา พี่เอ็มจัดการวาง Layout ที่ปิดการขายได้จริงและสวยงาม",
    color: "from-aurora-emerald to-aurora-cyan",
    delay: "delay-300",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "ส่งงาน & ดูแลตลอดชีพ",
    desc: "เว็บออนไลน์ได้จริงใน 3-7 วัน พร้อมสอนใช้งานเบื้องต้น มีปัญหาทักถามพี่เอ็มได้ตลอดชีพ ไม่ทิ้งงานแน่นอน",
    color: "from-aurora-violet to-aurora-emerald",
    delay: "delay-500",
  },
]

/**
 * 🛣️ WorkProcess Component: Luminous Server Edition (v.2026)
 * ออกแบบมาเพื่อความน่าเชื่อถือระดับมืออาชีพ และ PageSpeed 100
 * ✅ Optimized: ใช้ Native CSS Animations แทน JavaScript Library เพื่อลดค่า TBT
 */
export const WorkProcess = () => {
  return (
    <section className="bg-background relative overflow-hidden py-32">
      {/* 🌌 Luminous Background Decor: Layered behind everything */}
      <div className="aurora-bg pointer-events-none top-1/2 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-[size:50px_50px] opacity-[0.02] mix-blend-overlay" />

      <div className="relative z-10 container mx-auto px-4">
        {/* 🎯 Header Section: CSS-only fade-in-up */}
        <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-forwards mx-auto mb-24 max-w-4xl text-center duration-1000">
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-4 w-4 animate-pulse" /> Simple Process
          </div>

          <h2 className="text-luminous mb-10 text-4xl tracking-tighter uppercase md:text-7xl">
            3 ขั้นตอนง่ายๆ <br className="md:hidden" />
            มีเว็บเป็น <span className="text-aurora-emerald">ของตัวเอง</span>
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
            "ไม่ต้องกังวลเรื่องเทคนิค พี่เอ็มดูแลให้ครบทุกขั้นตอน
            จนกว่าเว็บจะออนไลน์ทำเงินให้คุณครับ"
          </p>
        </div>

        {/* 🛣️ Steps Grid: Staggered Loading with CSS Delays */}
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 -z-10 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`group animate-in fade-in slide-in-from-bottom-8 fill-mode-forwards relative opacity-0 duration-1000 ${step.delay}`}
            >
              {/* Connector Arrow (Desktop Only) */}
              {i < steps.length - 1 && (
                <div className="text-aurora-cyan/20 group-hover:text-aurora-cyan/50 absolute top-1/3 -right-10 z-20 hidden transition-all duration-500 lg:block">
                  <ArrowRight className="animate-float h-10 w-10" />
                </div>
              )}

              <div className="glass-card flex flex-col items-center p-12 text-center transition-all duration-700 hover:border-aurora-cyan/40 hover:shadow-luminous hover:-translate-y-4">
                {/* 🎨 Icon Holder with Glow Effect */}
                <div className="relative mb-10">
                  <div
                    className={`shadow-luminous flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br text-white transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 ${step.color}`}
                  >
                    <div className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-aurora-cyan absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-lg font-black shadow-xl">
                    0{i + 1}
                  </div>
                </div>

                {/* 📝 Content Typography */}
                <h3 className="font-prompt group-hover:text-aurora-cyan mb-6 text-3xl leading-none font-black tracking-tight text-white uppercase transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="font-anuphan px-4 text-base leading-relaxed font-medium text-slate-400 opacity-80 transition-opacity duration-500 group-hover:opacity-100 md:px-0 md:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 📢 Final Call to Action Area */}
        <div className="animate-in fade-in fill-mode-forwards mt-28 text-center opacity-0 delay-700 duration-1000">
          <div className="flex flex-col items-center gap-8">
            <p className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
              Ready to Scale?
            </p>
            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luminous shadow-luminous h-20 px-16 text-xl"
            >
              เริ่มโปรเจกต์ของพี่เลย
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
