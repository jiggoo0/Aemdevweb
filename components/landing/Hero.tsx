/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, ShieldCheck, Star } from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * ส่วนหัวของเว็บไซต์ - ออกแบบใหม่เพื่อความพรีเมียมและความเร็วสูงสุด
 * เน้นการโหลดรูปภาพแบบ Priority เพื่อทำคะแนน LCP ให้ต่ำกว่า 1 วินาที
 * ปรับแต่งพิกัดฟอนต์เป็น IBM Plex Sans Thai (Heading) และ Anuphan (Body)
 */
const Hero = () => {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-white pt-24 lg:pt-32">
      {/* 1. เลเยอร์พื้นหลังเชิงเทคนิค (Technical Grid Layer) */}
      <div className="absolute inset-0 z-0 opacity-[0.025]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* 2. ส่วนเนื้อหาและคำเชิญชวน (Left Content Section) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5"
            >
              <Zap className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-heading text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
                Modern Web Specialist
              </span>
            </motion.div>

            {/* จุดที่แก้ไข: เปลี่ยนแท็กปิดจาก </h1> เป็น </motion.h1> */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading mb-6 text-5xl leading-[1.05] font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-8xl"
            >
              โครงสร้างเว็บ <br />
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                ที่แม่นยำ
              </span>{" "}
              <br />
              เพื่อผลกำไรจริง
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body mb-10 max-w-xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl"
            >
              ยกระดับธุรกิจ SME
              และกลุ่มอุตสาหกรรมด้วยรากฐานที่เน้นความเร็วสูงสุด วางระบบโดย{" "}
              <span className="text-slate-950 underline decoration-emerald-500/30 underline-offset-4">
                {siteConfig.expert.name}
              </span>{" "}
              เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขายอย่างยั่งยืน
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <Link
                href={siteConfig.contact.line}
                target="_blank"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-5 text-base font-black tracking-wider text-white transition-all hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95"
              >
                {siteConfig.cta.main}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="font-heading flex items-center justify-center gap-2 px-8 py-5 text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-slate-900"
              >
                {siteConfig.cta.secondary}
              </Link>
            </motion.div>

            {/* 3. ตัวชี้วัดมาตรฐานงานเทคนิค (Performance Stats Section) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 flex flex-wrap gap-8 border-t border-slate-100 pt-10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <Zap className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-heading text-lg leading-none font-black text-slate-900 italic">
                    LCP {siteConfig.standards.lcp}s
                  </div>
                  <div className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                    Speed Performance
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-heading text-lg leading-none font-black text-slate-900 italic">
                    Score {siteConfig.standards.performance}
                  </div>
                  <div className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                    Core Web Vitals
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. ส่วนแสดงผลงานและภาพลักษณ์ (Visual Asset Section) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative lg:col-span-5"
          >
            <div className="industrial-shadow relative aspect-[4/5] w-full overflow-hidden rounded-[4rem] border border-slate-200 bg-slate-100 shadow-2xl">
              <Image
                src="/images/hero/aemdevweb-hero.webp"
                alt={`โครงสร้างระบบเว็บโดย ${siteConfig.expert.name}`}
                fill
                priority
                quality={100}
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-transparent" />
            </div>

            {/* ป้ายคะแนนลอยตัว (Floating Badge) */}
            <div className="absolute -right-4 -bottom-4 hidden rounded-3xl bg-white p-6 shadow-2xl md:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="font-heading text-sm font-black text-slate-900 uppercase">
                    Trusted Specialist
                  </div>
                  <div className="font-body text-[10px] font-bold text-slate-400">
                    50+ ธุรกิจไว้วางใจระบบ
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

export default Hero
