/** @format */

"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Zap, ShieldCheck } from "lucide-react"

// 📂 ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"

/**
 * 🏗️ CTASection — "ส่วนปิดการขายหน้าเว็บ"
 * ผมออกแบบส่วนนี้มาเพื่อกระตุ้นให้ลูกค้า SME และโรงงานตัดสินใจทักหาผม
 * โดยเน้นย้ำเรื่องความคุ้มค่าและงานที่เนี๊ยบระดับมืออาชีพครับ
 */
const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* 🧩 พื้นหลังลายตาราง (Industrial Grid Pattern) */}
      <div
        className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* ⚡ กล่องข้อความหลัก (CTA Card Container) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-950 p-8 shadow-2xl md:p-16 lg:p-20"
          >
            {/* 🌟 แสงฟุ้งมรกต: ตอกย้ำสีประจำแบรนด์นายเอ็มซ่ามากส์ */}
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* 🏷️ Badge: ตอกย้ำความทันสมัยของเทคโนโลยี */}
              <div className="mb-8 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase italic">
                  Next.js 15 & 16 Specialist v.2026
                </span>
              </div>

              {/* 📣 พาดหัวกระตุ้นการตัดสินใจ (Conversion Headline) */}
              <h2 className="font-prompt mb-10 text-4xl leading-none font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
                จะทนใช้เว็บอืดอยู่ทำไม? <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent uppercase italic">
                  มาสร้างเว็บที่เกิดมาเพื่อชนะ
                </span>
              </h2>

              <p className="font-anuphan mb-14 max-w-2xl text-lg leading-relaxed font-bold text-slate-400 md:text-xl">
                นายเอ็มซ่ามากส์ พร้อมเปลี่ยนธุรกิจ SME และโรงงานของคุณ
                ให้ก้าวข้ามขีดจำกัดเดิมๆ ด้วยเว็บไซต์ที่เปิดไว งานเนี๊ยบ คุยง่าย
                และจบงานได้ตามแผนที่วางไว้ 100%
              </p>

              {/* 🚀 ปุ่มดำเนินการ (Action Buttons) */}
              <div className="flex flex-col items-center gap-8 sm:flex-row">
                <Link
                  href={siteConfig.links?.line || "#"}
                  target="_blank"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-emerald-500 px-12 py-6 text-base font-black tracking-widest text-slate-950 shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5 fill-slate-950" />
                  {siteConfig.cta?.main || "ทักมาคุยโปรเจกต์กับผม"}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>

                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-[11px] font-black tracking-[0.3em] text-slate-300 uppercase transition-colors hover:text-emerald-400"
                >
                  {siteConfig.cta?.secondary || "ดูแพ็กเกจบริการทั้งหมด"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

              {/* 🛡️ สัญลักษณ์ความปลอดภัยและประสิทธิภาพ (Trust Labels) */}
              <div className="mt-20 flex flex-wrap justify-center gap-10 border-t border-white/5 pt-12">
                <div className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                    Security Standards 2026
                  </span>
                </div>
                <div className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
                  <Zap className="h-5 w-5 text-emerald-400" />
                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                    {/* 🛠️ แก้ไขเครื่องหมาย < ให้เป็น Entity ป้องกันการ Compile Error */}
                    LCP &lt; 1.0s Ultra Speed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
