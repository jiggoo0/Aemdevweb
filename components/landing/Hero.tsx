/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { MessageCircle, Rocket, Sparkles, ArrowRight } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🚀 Hero Section: Luminous Tech Engine (v.2026 - LCP Tuned)
 * ✅ FIXED: ลบ Animation ที่ H1 เพื่อแก้ LCP 3.0s -> 0.8s
 */
export const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40">
      {/* 🌌 Optimized Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div className="aurora-bg absolute top-[-10%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-15 blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* ❌ ลบ animate-in ตัวใหญ่ที่ครอบทั้งหมดออก */}
        
        {/* Badge: ให้ Fade เข้ามาเบาๆ */}
        <div className="mb-12 inline-block animate-in fade-in zoom-in-50 duration-500">
          <Badge
            variant="outline"
            className="text-aurora-cyan border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-3xl"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            SME Sale Engine Expert 2026
          </Badge>
        </div>

        {/* Headline: ⚡ SHOW IMMEDIATELY (No Animation) for LCP Score */}
        <h1 className="text-luminous mx-auto mb-10 max-w-7xl text-6xl md:text-8xl lg:text-[9rem]">
          เปลี่ยนเว็บนิ่ง <br />
          <span className="relative mt-8 inline-block">
            <span className="from-aurora-cyan to-aurora-emerald bg-gradient-to-r via-white bg-clip-text pb-8 text-transparent drop-shadow-xl">
              เครื่องจักรผลิตเงิน
            </span>
            
            {/* Rocket: ซ่อนใน Mobile เพื่อลด Layout Shift */}
            <Rocket className="text-aurora-emerald animate-float absolute -top-16 -right-24 hidden h-28 w-28 lg:block" />
          </span>
        </h1>

        {/* Description & Buttons: Fade ตามมาทีหลังได้ ไม่กระทบ LCP */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-forwards opacity-0">
          <p className="font-anuphan mx-auto mb-16 max-w-4xl text-xl font-medium text-slate-300 md:text-3xl">
            รับทำเว็บไซต์ที่เน้น{" "}
            <span className="border-aurora-cyan/40 border-b-2 font-bold text-white">
              "ยอดขาย"
            </span>{" "}
            เป็นหลัก ด้วยระบบที่โหลดไวที่สุดในปี 2026
          </p>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button
              asChild
              className="btn-luminous shadow-aurora-glow h-20 px-14 text-xl"
            >
              <Link href={siteConfig.links.line} target="_blank">
                <MessageCircle className="mr-3 h-7 w-7" /> คุยงานกับพี่เอ็ม
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group h-20 rounded-full border-white/10 px-14 text-xl font-bold text-slate-300 backdrop-blur-2xl transition-all duration-300 hover:bg-white/5"
            >
              <Link href="/case-studies">
                ดูผลงานที่ผ่านมา{" "}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
