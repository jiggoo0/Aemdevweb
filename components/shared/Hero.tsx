/** @format */

"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  PlayCircle,
  Cpu,
  Terminal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"

/**
 * Hero Component - ศูนย์กลางการนำเสนอแผนงานระบบ (The System Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การจัดวางลำดับข้อมูลที่ทรงพลังและชัดเจน
 * มาตรฐาน: ความเร็วในการตอบสนองระดับสูงสุด LCP ต่ำกว่า 0.8 วินาที
 * อัตลักษณ์: AEMDEVWEB Specialist
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-48 lg:pb-40">
      {/* ส่วนประกอบพื้นหลัง: รูปแบบตารางเชิงระบบที่แสดงถึงความแม่นยำ */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(96%_0.01_240)_1px,transparent_1px),linear-gradient(to_bottom,oklch(96%_0.01_240)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-70"
        aria-hidden="true"
      />

      {/* รัศมีมรกตเสริมมิติความทันสมัย */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
          {/* ส่วนเนื้อหาหลัก: ยุทธศาสตร์การสื่อสารคุณค่าของแบรนด์ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-12"
          >
            {/* สถานะความพร้อมของระบบ */}
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-5 py-2 shadow-sm backdrop-blur-sm">
              <Terminal size={14} className="animate-pulse text-emerald-600" />
              <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
                System Platform v2026.4
              </span>
            </div>

            {/* หัวข้อหลัก: การแสดงตัวตนแบรนด์ที่แข็งแกร่ง */}
            <div className="relative">
              <h1 className="font-heading text-7xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-9xl lg:text-[11rem]">
                <span className="text-slate-950">AEM</span>
                <span className="text-emerald-500">DEV</span>
                <span className="text-slate-950">WEB</span>
                <br />
                <span className="relative mt-4 inline-block text-[0.4em] tracking-tight text-emerald-500 md:text-[0.5em]">
                  The Specialist<span className="text-slate-950">.</span>
                  <div className="absolute -bottom-2 left-0 h-2 w-24 bg-emerald-500/30 md:w-48" />
                </span>
              </h1>
            </div>

            {/* ข้อความสื่อสาร: ประสิทธิภาพและผลลัพธ์ทางธุรกิจ */}
            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              นายเอ็มซ่ามากส์ ออกแบบโครงสร้าง
              <br className="hidden md:block" />
              <strong className="text-slate-950 underline decoration-emerald-500/30 decoration-8 underline-offset-[10px]">
                เว็บไซต์ประสิทธิภาพสูง
              </strong>
              เพื่อ SME ยุคใหม่ เน้นความเร็วที่เป็นเลิศและโครงสร้าง SEO
              ที่แม่นยำ
            </p>

            {/* จุดกระตุ้นการตัดสินใจ: เส้นทางสู่การปิดการขาย */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Button
                asChild
                className="group h-20 rounded-3xl bg-slate-950 px-12 text-lg font-black tracking-widest text-white uppercase italic shadow-2xl transition-all hover:bg-emerald-600 active:scale-95"
              >
                <Link href="/services" className="flex items-center gap-4">
                  เริ่มแผนงานระบบ
                  <ArrowRight
                    size={24}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </Button>

              <Link
                href="/case-studies"
                className="group font-heading flex items-center gap-4 px-8 py-4 text-xs font-black tracking-widest text-slate-400 uppercase italic transition-all hover:text-slate-950"
              >
                <PlayCircle
                  size={20}
                  className="text-emerald-500 transition-transform group-hover:scale-110"
                />
                ดูผลลัพธ์ความสำเร็จจริง
              </Link>
            </div>

            {/* ข้อมูลการรับประกันประสิทธิภาพ */}
            <div className="flex flex-wrap items-center gap-8 border-t border-slate-50 pt-8">
              {[
                {
                  icon: <Zap size={18} />,
                  text: "ความเร็วสูงสุดระดับ 100 คะแนน",
                },
                {
                  icon: <CheckCircle size={18} />,
                  text: "โครงสร้าง Linked-Data พร้อมใช้งาน",
                },
                { icon: <Cpu size={18} />, text: "Edge-Runtime Optimized" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="font-heading flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
                >
                  <span className="text-emerald-500">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ส่วนสร้างความเชื่อมั่น: ข้อมูลผู้เชี่ยวชาญระดับสูง */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden flex-1 lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 rounded-[4rem] bg-emerald-500/5 blur-[80px]" />

              <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-3">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-4 py-1.5">
                      <div className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
                      <span className="font-heading text-[10px] font-black tracking-[0.25em] text-white uppercase italic">
                        Active Node
                      </span>
                    </div>
                    <Zap
                      className="text-emerald-500"
                      size={32}
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                  </div>

                  <div className="space-y-4">
                    <blockquote className="font-heading text-4xl leading-[1] font-black text-slate-950 italic">
                      เราไม่ได้แค่พัฒนาหน้าเว็บ
                      <br />
                      แต่เราวางโครงสร้าง
                      <br />
                      เพื่อผลกำไรที่ยั่งยืน
                    </blockquote>
                    <p className="font-body text-lg font-bold text-slate-400">
                      ยกระดับมูลค่าทรัพย์สินทางดิจิทัล
                    </p>
                  </div>

                  <div className="h-[2px] w-full bg-slate-50" />

                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl ring-4 shadow-slate-950/20 ring-slate-50">
                      <span className="font-heading text-sm font-black italic">
                        AEM
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-heading text-lg leading-none font-black text-slate-950 uppercase italic">
                        {siteConfig.expert.name}
                      </div>
                      <div className="font-heading mt-1 text-[9px] font-black tracking-widest text-emerald-600 uppercase italic">
                        Technical SEO Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
