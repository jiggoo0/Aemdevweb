// @format
// พิกัดข้อมูล: components/shared/Hero.tsx
// หน้าที่: ศูนย์กลางการนำเสนอแผนงานระบบหลัก (The System Hub)
// มาตรฐาน: Next.js 16 | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

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
// [FIXED]: ลบการนำเข้า cn ออกเรียบร้อยเพื่อกำจัดจุด Warning สุดท้าย

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(1_0_0)] pt-24 pb-16 lg:pt-48 lg:pb-40 dark:bg-[oklch(0.12_0.02_260)]">
      {/* ส่วนประกอบพื้นหลัง: รูปแบบตารางเชิงระบบเพื่อความแม่นยำของพิกัดสายตา */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(0.9_0.01_260_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0.01_260_/_0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* รัศมีแสงเสริมมิติความลึก (Depth Dimension) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[oklch(0.65_0.2_160_/_0.05)] blur-[120px]" />

      <div className="container-za">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
          {/* [CONTENT NODE]: ยุทธศาสตร์การสื่อสารคุณค่าของพิกัดงาน */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-12"
          >
            {/* สถานะความพร้อมของระบบงาน (System Status) */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[oklch(0.65_0.2_160_/_0.2)] bg-[oklch(0.96_0.04_160_/_0.5)] px-5 py-2 shadow-sm backdrop-blur-sm">
              <Terminal
                size={14}
                className="animate-pulse text-[oklch(0.5_0.15_160)]"
              />
              <span className="text-[10px] font-black tracking-[0.3em] text-[oklch(0.4_0.15_160)] uppercase italic">
                System Platform v2026.4
              </span>
            </div>

            {/* หัวข้อหลัก: การแสดงอัตลักษณ์แบรนด์ที่ชัดเจน (Brand Identity) */}
            <div className="relative">
              <h1 className="text-7xl leading-[0.85] font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-9xl lg:text-[11rem] dark:text-[oklch(0.95_0.01_260)]">
                <span>AEM</span>
                <span className="text-[oklch(0.65_0.2_160)]">DEV</span>
                <span>WEB</span>
                <br />
                <span className="relative mt-4 inline-block text-[0.4em] tracking-tight text-[oklch(0.65_0.2_160)] md:text-[0.5em]">
                  The Specialist
                  <span className="text-[oklch(0.2_0.02_260)] dark:text-[oklch(0.95_0.01_260)]">
                    .
                  </span>
                  <div className="absolute -bottom-2 left-0 h-2 w-24 bg-[oklch(0.65_0.2_160_/_0.3)] md:w-48" />
                </span>
              </h1>
            </div>

            {/* ข้อความสื่อสาร: ประสิทธิภาพและผลลัพธ์ทางธุรกิจระดับสากล */}
            <p className="max-w-2xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl">
              นายเอ็มซ่ามากส์ วางรากฐานระบบ
              <br className="hidden md:block" />
              <strong className="text-[oklch(0.2_0.02_260)] underline decoration-[oklch(0.65_0.2_160_/_0.3)] decoration-8 underline-offset-[10px] dark:text-[oklch(0.95_0.01_260)]">
                เว็บไซต์สมรรถนะสูง
              </strong>
              เพื่อ SME ยุคใหม่ เน้นความเร็วที่เป็นเลิศและพิกัด SEO ที่แม่นยำ
            </p>

            {/* [CTA NODE]: เส้นทางสู่การปิดพิกัดงานเชิงกลยุทธ์ */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Button
                asChild
                className="group h-20 rounded-3xl bg-[oklch(0.2_0.02_260)] px-12 text-lg font-black tracking-widest text-white uppercase italic shadow-2xl transition-all hover:bg-[oklch(0.65_0.2_160)] active:scale-95"
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
                className="group flex items-center gap-4 px-8 py-4 text-xs font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase italic transition-all hover:text-[oklch(0.2_0.02_260)] dark:hover:text-white"
              >
                <PlayCircle
                  size={20}
                  className="text-[oklch(0.65_0.2_160)] transition-transform group-hover:scale-110"
                />
                ดูผลลัพธ์ความสำเร็จจริง
              </Link>
            </div>

            {/* ข้อมูลการรับประกันสมรรถนะระบบ (Performance Metrics) */}
            <div className="flex flex-wrap items-center gap-8 border-t border-[oklch(0.9_0.02_260_/_0.3)] pt-8">
              {[
                { icon: <Zap size={18} />, text: "ความเร็วระดับ 100 คะแนน" },
                {
                  icon: <CheckCircle size={18} />,
                  text: "พิกัด Linked-Data พร้อมใช้งาน",
                },
                { icon: <Cpu size={18} />, text: "Edge-Runtime Optimized" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase italic transition-colors hover:text-[oklch(0.65_0.2_160)]"
                >
                  <span className="text-[oklch(0.65_0.2_160)]">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* [AUTHORITY NODE]: ข้อมูลผู้เชี่ยวชาญเพื่อสร้างความเชื่อมั่นระดับสูง */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden flex-1 lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 rounded-[4rem] bg-[oklch(0.65_0.2_160_/_0.05)] blur-[80px]" />

              <div className="depth-card relative overflow-hidden rounded-[3.5rem] bg-white p-12 transition-all duration-700 hover:-translate-y-3 dark:bg-[oklch(0.15_0.02_260)]">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-3 rounded-xl bg-[oklch(0.2_0.02_260)] px-4 py-1.5">
                      <div className="h-2 w-2 animate-ping rounded-full bg-[oklch(0.65_0.2_160)]" />
                      <span className="text-[10px] font-black tracking-[0.25em] text-white uppercase italic">
                        Active Node
                      </span>
                    </div>
                    <Zap className="text-[oklch(0.65_0.2_160)]" size={32} />
                  </div>

                  <div className="space-y-4">
                    <blockquote className="text-4xl leading-[1] font-black text-[oklch(0.2_0.02_260)] italic dark:text-[oklch(0.95_0.01_260)]">
                      เราไม่ได้แค่ทำเว็บ
                      <br />
                      แต่เราวางโครงสร้าง
                      <br />
                      เพื่อผลกำไรที่ยั่งยืน
                    </blockquote>
                    <p className="text-lg font-bold text-[oklch(0.5_0.02_260)]">
                      ยกระดับพิกัดมูลค่าดิจิทัล
                    </p>
                  </div>

                  <div className="h-[2px] w-full bg-[oklch(0.95_0.02_260_/_0.5)]" />

                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-white shadow-xl ring-4 shadow-[oklch(0.2_0.02_260_/_0.2)] ring-[oklch(0.98_0.01_260)]">
                      <span className="text-sm font-black italic">AEM</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg leading-none font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-[oklch(0.95_0.01_260)]">
                        {siteConfig.expert.name}
                      </div>
                      <div className="mt-1 text-[9px] font-black tracking-widest text-[oklch(0.6_0.15_160)] uppercase italic">
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
