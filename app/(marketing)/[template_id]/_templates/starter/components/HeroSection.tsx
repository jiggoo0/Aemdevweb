/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION HERO SECTION (MASTER)
// Identity: First-Impression Specialist, Stable Framer Motion
// Fix: Image Optimization for All Environments (Unoptimized)
// ----------------------------------------------------

"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants, easeOut } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"
import styles from "../StarterStyle.module.css"

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
  price?: string
  themeColor?: string
}

// ------------------------
// Animation Variants
// ------------------------
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

// ------------------------
// HeroSection Component
// ------------------------
export default function HeroSection({
  title = "จบทุกปัญหาเรื่องทำเว็บ\nสร้างความน่าเชื่อถือทันที",
  subtitle = "เราส่งมอบเว็บไซต์ที่เปิดไว อ่านง่าย และช่วยให้ลูกค้าตัดสินใจซื้อได้เร็วขึ้น ไม่ใช้ศัพท์เทคนิคให้ปวดหัว จบงานตามกำหนด 100%",
  image = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/starter/hero-placeholder.jpg",
  price = "3,900",
  themeColor = "#1e40af",
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-col items-center px-6">
          {/* 🛰️ SYSTEM_STATUS_LABEL */}
          <motion.div variants={itemVars} className={styles.label}>
            <ShieldCheck size={14} className="text-blue-600" />
            System_Ready_2025 // Production_Active
          </motion.div>

          {/* 📢 MAIN_HEADLINE */}
          <motion.h1 variants={itemVars} className={styles.mainTitle}>
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* 📝 SUBTITLE */}
          <motion.p
            variants={itemVars}
            className={`${styles.description} mb-12 max-w-2xl text-center`}
          >
            {subtitle}
          </motion.p>

          {/* ⚡ CALL_TO_ACTION_GROUP */}
          <motion.div
            variants={itemVars}
            className="mb-20 flex w-full flex-col items-center justify-center gap-8 sm:flex-row"
          >
            <button
              style={{ "--theme-color": themeColor } as React.CSSProperties}
              className={styles.primaryButton}
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ดูแพ็คเกจบริการ <ArrowRight size={18} />
            </button>

            <div className="flex h-12 items-center gap-4 border-l border-slate-200 pl-8">
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] font-bold uppercase leading-none tracking-widest text-slate-400">
                  เริ่มต้นเพียง
                </span>
                <span className="text-4xl font-black italic leading-none text-slate-900">
                  ฿{price}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 🖥️ PREVIEW_MOCKUP */}
          <motion.div
            variants={itemVars}
            className="relative w-full max-w-5xl border border-slate-200 bg-slate-50 p-2 shadow-2xl shadow-slate-200/50 md:p-3"
          >
            {/* WINDOW_CONTROLS */}
            <div className="mb-3 flex items-center justify-between px-3">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 bg-slate-300" />
                <div className="h-2 w-2 bg-slate-300" />
                <div className="h-2 w-2 bg-slate-300" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400">
                Instance_Preview_01
              </span>
            </div>

            <div className="aspect-video relative w-full overflow-hidden border border-slate-200 bg-slate-200">
              <Image
                src={image}
                alt="System Interface Preview"
                fill
                unoptimized
                className="scale-100 object-cover grayscale-[0.3] transition-all duration-700 ease-in-out hover:scale-105 hover:grayscale-0"
                priority
              />
              {/* VIGNETTE_OVERLAY */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
