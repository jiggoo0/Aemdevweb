/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS HERO SECTION (SUKHOTHAI)
// Identity: First-Impression Specialist (ความประทับใจแรก)
// Function: นำเสนอจุดเด่น "ไม้ดีเมืองเก่า" พร้อมปุ่มโทรออก/ทักไลน์
// ----------------------------------------------------

"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants, easeOut } from "framer-motion"
import { Phone, MessageSquare, ShieldCheck } from "lucide-react"

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
  price?: string
  themeColor?: string
}

// ------------------------
// Animation Variants: ให้ตัวอักษรค่อยๆ เลื่อนขึ้นดูพรีเมียม
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
    transition: { duration: 0.6, ease: easeOut },
  },
}

export default function HeroSection({
  title = "ไม้ดีเมืองเก่า\nคัดสวยทุกแผ่น ส่งถึงหน้างาน",
  subtitle = "โรงไม้แปรรูปมาตรฐานคนสุโขทัย สำหรับช่างและผู้รับเหมา มีไม้โครง ไม้พื้น ไม้ระแนง สต็อกแน่นพร้อมส่งทันทีทุกอำเภอ",
  image = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/starter/hero-placeholder.jpg",
  price = "เช็คราคาวันนี้",
  themeColor = "#7B3F00",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* 🏗️ GRID_BACKGROUND: ลายตารางสไตล์ช่างวัดไม้ */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${themeColor} 1px, transparent 1px), linear-gradient(90deg, ${themeColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:px-10 md:py-32"
        >
          {/* 🏷️ BADGE: ยืนยันพิกัดร้าน */}
          <motion.div
            variants={itemVars}
            className="mb-8 flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 shadow-sm"
          >
            <ShieldCheck size={14} style={{ color: themeColor }} />
            โรงไม้มาตรฐาน จ.สุโขทัย
          </motion.div>

          {/* 📢 MAIN_HEADLINE */}
          <motion.h1
            variants={itemVars}
            className="mb-8 whitespace-pre-line text-5xl font-black leading-[1.1] tracking-tighter text-slate-900 md:text-8xl"
          >
            {title}
          </motion.h1>

          {/* 📝 SUBTITLE */}
          <motion.p
            variants={itemVars}
            className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* ⚡ ACTION_ZONE: ราคาและปุ่มติดต่อ */}
          <motion.div
            variants={itemVars}
            className="mb-20 flex flex-col items-center gap-6"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
                ราคาเริ่มต้นประมาณ
              </span>
              <span className="text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
                {price} <span className="text-lg text-slate-400">.-</span>
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                style={{ backgroundColor: themeColor }}
                className="flex items-center justify-center gap-3 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:brightness-110 active:scale-95"
              >
                <MessageSquare size={18} /> ทักไลน์เช็คราคา
              </button>
              <button className="flex items-center justify-center gap-3 border border-slate-200 bg-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 transition-all hover:bg-slate-50 active:scale-95">
                <Phone size={18} /> โทรปรึกษาช่าง
              </button>
            </div>
          </motion.div>

          {/* 🖥️ IMAGE_PREVIEW: รูปหน้าโรงไม้หรือสินค้าไม้คัดเกรด */}
          <motion.div
            variants={itemVars}
            className="relative w-full max-w-5xl border-8 border-slate-100 bg-slate-100 p-1 shadow-2xl"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
              <Image
                src={image}
                alt="โรงไม้สุโขทัย สินค้าคุณภาพ"
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
