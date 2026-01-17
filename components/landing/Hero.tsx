/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageCircle,
  Rocket,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🚀 Hero Component: Luminous Edition
 * ยกระดับความพรีเมียมด้วย Aurora Glow และ Weightless Typography
 * ปรับปรุง: ใช้ตัวแปรสีและคลาส Luminous จาก Design System ล่าสุด
 */
export const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40">
      {/* 🌌 Luminous Background Decor: เลเยอร์แสงระดับพรีเมียม */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* แสง Aurora เต้นระบำ (Main Glow) */}
        <div className="aurora-bg top-[-15%] left-1/2 h-[800px] w-[1300px] -translate-x-1/2 opacity-[0.18]" />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:60px_60px] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 🏷️ Smart Badge: Weightless Design */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 inline-block"
          >
            <Badge
              variant="outline"
              className="text-aurora-cyan shadow-aurora-glow rounded-full border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-3xl md:text-xs"
            >
              <Sparkles className="text-aurora-cyan mr-2 h-4 w-4 animate-pulse" />
              SME Sale Engine Expert 2026
            </Badge>
          </motion.div>

          {/* ⚡ Headline: พลังแห่งแสงและมิติ (Luminous Typography) */}
          <h1 className="text-luminous mx-auto mb-10 max-w-7xl text-6xl leading-[0.8] font-black tracking-tighter uppercase md:text-8xl lg:text-[10rem]">
            เปลี่ยนเว็บนิ่ง <br />
            <span className="relative mt-8 inline-block">
              <span className="from-aurora-cyan to-aurora-emerald bg-gradient-to-r via-white bg-clip-text pb-8 text-transparent drop-shadow-[0_0_35px_rgba(122,243,255,0.4)]">
                เครื่องจักรผลิตเงิน
              </span>

              {/* Rocket: Floating Effect */}
              <Rocket className="text-aurora-emerald animate-float absolute -top-16 -right-24 hidden h-28 w-28 rotate-12 drop-shadow-[0_0_25px_rgba(130,255,180,0.5)] filter lg:block" />
            </span>
          </h1>

          {/* 📝 Description: Humanistic Friendly Font */}
          <p className="font-anuphan mx-auto mb-16 max-w-4xl text-xl leading-relaxed font-medium text-balance text-slate-300 opacity-90 md:text-3xl">
            รับทำเว็บไซต์และ Sale Page ที่เน้น{" "}
            <span className="border-aurora-cyan/40 border-b-2 font-bold text-white">
              "ยอดขาย"
            </span>{" "}
            เป็นหลัก ด้วยระบบ High-Performance ที่โหลดไวกว่าใครในตลาดปี 2026
          </p>
        </motion.div>

        {/* 🔘 CTAs: Luminous Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-8 sm:flex-row"
        >
          <Button
            asChild
            className="btn-luminous shadow-luminous h-20 px-14 text-xl"
          >
            <Link href={siteConfig.links.line} target="_blank">
              <MessageCircle className="mr-3 h-7 w-7" />
              คุยงานกับพี่เอ็ม
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group h-20 rounded-full border-white/10 px-14 text-xl font-bold text-slate-300 backdrop-blur-2xl transition-all hover:bg-white/5 hover:text-white"
          >
            <Link href="/case-studies">
              ดูผลงานที่ผ่านมา{" "}
              <ArrowRight className="text-aurora-cyan ml-3 h-6 w-6 transition-transform group-hover:translate-x-3" />
            </Link>
          </Button>
        </motion.div>

        {/* 🛡️ Trust Signals: Professional Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-28 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase md:text-xs"
        >
          {[
            { label: "Lifetime Support", icon: CheckCircle2 },
            { label: "Payment Integrated", icon: CheckCircle2 },
            { label: "SEO Optimized 2026", icon: CheckCircle2 },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex cursor-default items-center gap-3"
            >
              <item.icon className="text-aurora-cyan h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
              <span className="transition-colors group-hover:text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
