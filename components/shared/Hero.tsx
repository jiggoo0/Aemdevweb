/** @format */

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  PlayCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"

/**
 * Hero Component - จุดต้อนรับหลัก (Rental Revolution 2026)
 * แนวทาง: ชูจุดเด่น "เช่าเว็บสเปกปีศาจ" ให้ SME เข้าถึงง่ายและเร้าใจที่สุด
 * ประสิทธิภาพ: เน้น CSS-based Effects แทนรูปภาพ เพื่อให้โหลดไว (LCP < 0.8s)
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-48 lg:pb-32">
      {/* [BACKGROUND] - Infrastructure Grid (CSS Only)
          ใช้ระบบ Grid Pattern เพื่อความซิ่งและประหยัดข้อมูลสูงสุด
      */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-50"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
          {/* [CONTENT] - ข้อความหลักที่เน้นการปิดการขาย */}
          <div className="flex-1 space-y-10">
            {/* Tagline: ความล้ำประจำปี 2026 */}
            <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-5 py-2 ring-1 ring-emerald-500/20">
              <Sparkles size={14} className="animate-pulse text-emerald-600" />
              <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
                Next-Gen Web Rental Engine 2026
              </span>
            </div>

            {/* Headline: นายเอ็มซ่ามากส์ + AEMDEVWEB 
                ใช้ตัวอักษรใหญ่และ Text-Gradient เพื่อสร้าง Impact ทันทีที่เห็น
            */}
            <div className="relative">
              <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[9rem]">
                <span className="text-slate-900">AEM</span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  DEV
                </span>
                <span className="text-slate-900">WEB</span>
                <br />
                <span className="text-emerald-500 drop-shadow-sm">
                  นายเอ็มซ่ามากส์.
                </span>
              </h1>
              {/* Aurora Glow Effect: แสงฟุ้งจาง ๆ เพิ่มมิติโดยไม่ทำให้เว็บอืด */}
              <div className="absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />
            </div>

            {/* Sub-headline: แก้ปัญหาต้นทุนและส่งต่อความคุ้มค่า */}
            <p className="font-body max-w-xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
              เลิกแบกต้นทุนทำเว็บหลักหมื่น! <br className="hidden md:block" />
              เปลี่ยนมาเช่า{" "}
              <strong className="text-slate-900 underline decoration-emerald-500/30 decoration-4 underline-offset-4">
                "เว็บไซต์สเปกปีศาจ"
              </strong>{" "}
              โหลดไว LCP &lt; 0.8s วางโครงสร้าง SEO แน่นปึ๊ก
              พร้อมปิดการขายได้ภายใน 24 ชม.
            </p>

            {/* CTA Hub: ปุ่มดำเนินการที่เน้นความชัดเจนและการตอบสนองที่ลื่นไหล */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-16 rounded-2xl bg-slate-950 px-10 text-base font-black tracking-widest text-white uppercase italic shadow-2xl shadow-slate-950/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/20 active:scale-95"
              >
                <Link href="/services" className="flex items-center gap-3">
                  เริ่มแผนเช่าเว็บด่วน
                  <ArrowRight size={20} strokeWidth={3} />
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="h-16 rounded-2xl px-10 text-base font-black tracking-widest text-slate-950 uppercase italic transition-all active:scale-95"
              >
                <Link href="/templates" className="flex items-center gap-3">
                  <PlayCircle size={20} />
                  ดูตัวอย่างเว็บซิ่ง
                </Link>
              </Button>
            </div>

            {/* Trust Badges: ยืนยันมาตรฐานงานสร้างสไตล์นายเอ็ม */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              {[
                { icon: <Zap size={14} />, text: "LCP < 0.8s" },
                { icon: <CheckCircle size={14} />, text: "SEO Ready" },
                { icon: <Sparkles size={14} />, text: "AI Search Ready" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="font-heading flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase italic"
                >
                  <span className="text-emerald-500">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* [VISUAL] - Expert Showcase Card
              ใช้ระบบ Glassmorphism Card แทนรูปภาพขนาดใหญ่ เพื่อประหยัดข้อมูลและรักษาความเร็ว
          */}
          <div className="hidden flex-1 lg:block">
            <div className="relative mx-auto max-w-sm">
              {/* แสง Aurora พื้นหลัง */}
              <div className="absolute -inset-10 rounded-full bg-emerald-500/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white/80 p-12 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-emerald-500/10">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="font-heading text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                      Za-Maks Logic
                    </div>
                    <Zap className="text-slate-200" size={24} />
                  </div>

                  <p className="font-heading text-2xl leading-tight font-black text-slate-900 italic">
                    "เว็บดีไม่ต้องจ่ายแพง <br />
                    แต่ต้องแรงและ <br />
                    <span className="text-emerald-500 underline decoration-slate-950 underline-offset-8">
                      ติดหน้าแรก Google
                    </span>
                    "
                  </p>

                  <div className="h-px w-full bg-slate-50" />

                  <div className="flex items-center gap-5">
                    <div className="font-heading flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-[10px] font-black text-white italic">
                      AEM
                    </div>
                    <div>
                      <div className="font-heading text-sm font-black text-slate-900 uppercase italic">
                        {siteConfig.expert.name}
                      </div>
                      <div className="font-heading text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
                        Technical Web Architect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
