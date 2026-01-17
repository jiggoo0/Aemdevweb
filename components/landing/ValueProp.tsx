/** @format */
"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Search,
  ShieldCheck,
  Smartphone,
  MousePointerClick,
  LineChart,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Zap,
    title: "โหลดไวระดับปีศาจ",
    description:
      "ลืม WordPress ช้าๆ ไปได้เลย เราใช้ Next.js 15 (Server Components) ทำให้เว็บโหลดเสร็จในพริบตา ลูกค้าไม่ต้องรอ",
    color: "text-aurora-cyan",
    glow: "shadow-[0_0_20px_rgba(122,243,255,0.3)]",
  },
  {
    icon: Search,
    title: "โครงสร้าง SEO 100%",
    description:
      "ไม่ใช่แค่ทำเว็บให้เสร็จ แต่เราวางโครงสร้าง H1-H6, Schema และ Meta Tags ให้ Google รักเว็บคุณตั้งแต่วันแรก",
    color: "text-aurora-violet",
    glow: "shadow-[0_0_20px_rgba(165,180,252,0.3)]",
  },
  {
    icon: MousePointerClick,
    title: "ดีไซน์ปิดการขาย (Conversion)",
    description:
      "เราไม่ได้ออกแบบตามใจศิลปิน แต่ออกแบบตามหลักจิตวิทยา (UX/UI) เพื่อให้ลูกค้าหาปุ่ม 'สั่งซื้อ' เจอไวที่สุด",
    color: "text-aurora-emerald",
    glow: "shadow-[0_0_20px_rgba(130,255,180,0.3)]",
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description:
      "ลูกค้า 90% ของคุณเข้าผ่านมือถือ เราจึงออกแบบบนหน้าจอมือถือเป็นหลัก ใช้นิ้วโป้งกดง่าย ไม่ต้องซูม",
    color: "text-aurora-cyan",
    glow: "shadow-[0_0_20px_rgba(122,243,255,0.3)]",
  },
  {
    icon: ShieldCheck,
    title: "ความปลอดภัยขั้นสูง",
    description:
      "หมดห่วงเรื่องเว็บโดนแฮก หรือโดนฝังสคริปต์พนัน เพราะเราไม่มี Plugin รูรั่วเยอะเหมือน CMS ทั่วไป",
    color: "text-aurora-emerald",
    glow: "shadow-[0_0_20px_rgba(130,255,180,0.3)]",
  },
  {
    icon: LineChart,
    title: "รองรับ Pixel & Tracking",
    description:
      "สายยิงแอดต้องชอบ! เราเตรียมพื้นที่สำหรับฝัง Facebook Pixel, TikTok Pixel และ GTM ไว้ให้พร้อมใช้งาน",
    color: "text-aurora-violet",
    glow: "shadow-[0_0_20px_rgba(165,180,252,0.3)]",
  },
]

export const ValueProp = () => {
  return (
    <div className="relative z-10 container mx-auto px-4">
      {/* 🌌 Luminous Section Header */}
      <div className="mx-auto mb-20 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-aurora-cyan mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" /> The Unfair
          Advantage
        </motion.div>

        <h2 className="text-luminous mb-8 text-4xl tracking-tighter uppercase md:text-7xl">
          ทำไมต้องจ้าง <span className="text-aurora-emerald">AemDevWeb?</span>
        </h2>
        <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
          เพราะเราไม่ได้แค่ "รับทำเว็บ" แต่เราคือพาร์ทเนอร์สาย Tech ที่เข้าใจว่า{" "}
          <br className="hidden md:block" />
          คุณต้องการ{" "}
          <span className="decoration-aurora-cyan/30 font-bold text-white underline underline-offset-8">
            "ยอดขาย"
          </span>{" "}
          ไม่ใช่แค่เว็บสวยๆ ที่ไม่มีคนเข้า
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="group glass-card hover:border-aurora-cyan/30 hover:shadow-luminous relative overflow-hidden p-10 transition-all duration-500"
          >
            {/* Luminous Hover Decor */}
            <div className="bg-aurora-cyan/10 absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Icon with Aurora Glow */}
              <div
                className={cn(
                  "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
                  feature.glow
                )}
              >
                <feature.icon className={cn("h-8 w-8", feature.color)} />
              </div>

              <h3 className="group-hover:text-aurora-cyan mb-4 text-2xl font-black tracking-tight text-white uppercase transition-colors">
                {feature.title}
              </h3>

              <p className="font-anuphan text-base leading-relaxed font-medium text-slate-400 opacity-80 transition-opacity group-hover:opacity-100 md:text-lg">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
