/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants, easeOut } from "framer-motion"
import { Phone, MessageSquare, ShieldCheck } from "lucide-react"

// ✅ แก้ไข Warning: นำ TechStackBadge ออกเนื่องจากไม่ได้ใช้ในไฟล์นี้ (ย้ายไปเรียกที่ Template หลักแล้ว)

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
  price?: string
  themeColor?: string
  contact?: {
    lineId?: string
    mobile?: string
  }
}

// ─── ANIMATION VARIANTS: ควบคุมจังหวะการแสดงผล ───
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
  image = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/WoodBusiness/Hero.jpg",
  price = "เช็คราคาวันนี้",
  themeColor = "#7B3F00",
  contact = { lineId: "@SukhothaiWood", mobile: "08x-xxx-xxxx" },
}: HeroProps) {
  // จัดการ Line ID สำหรับสร้าง Link เพื่อให้กดแล้วเด้งเข้าแอปทันที
  const cleanLineId = contact?.lineId?.replace("@", "")

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      {/* 🏗️ GRID_BACKGROUND: ลายตารางสไตล์ช่างวัดไม้ที่เปลี่ยนสีตาม themeColor */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${themeColor} 1px, transparent 1px), linear-gradient(90deg, ${themeColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center py-20 text-center md:py-32"
        >
          {/* 🏷️ BADGE: ยืนยันพิกัดร้าน เพิ่มความเชื่อมั่น (Authority) */}
          <motion.div
            variants={itemVars}
            className="mb-8 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 shadow-sm"
          >
            <ShieldCheck size={14} style={{ color: themeColor }} />
            โรงไม้มาตรฐาน จ.สุโขทัย
          </motion.div>

          {/* 📢 MAIN_HEADLINE: พาดหัวหลักที่ดูสุขุมและพรีเมียม */}
          <motion.h1
            variants={itemVars}
            className="mb-8 whitespace-pre-line text-5xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-7xl"
          >
            {title}
          </motion.h1>

          {/* 📝 SUBTITLE: คำบรรยายเชิงลึก */}
          <motion.p
            variants={itemVars}
            className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* ⚡ ACTION_ZONE: ส่วนแสดงราคาและช่องทางการติดต่อ */}
          <motion.div
            variants={itemVars}
            className="mb-20 flex w-full max-w-2xl flex-col items-center gap-10"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-slate-300">
                Current_Market_Price
              </span>
              <span className="text-5xl font-bold tracking-tighter text-slate-900 md:text-6xl">
                {price}
              </span>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {/* ปุ่มทักไลน์: SME Professional Style */}
              <a
                href={`https://line.me/ti/p/~${cleanLineId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: themeColor }}
                className="flex items-center justify-center gap-3 rounded-xl px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:brightness-110 active:scale-95"
              >
                <MessageSquare size={18} /> ทักไลน์เช็คราคาส่ง
              </a>

              {/* ปุ่มโทรออก: เรียบง่ายแต่ชัดเจน */}
              <a
                href={`tel:${contact.mobile}`}
                className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900 active:scale-95"
              >
                <Phone size={18} /> โทรปรึกษาฝ่ายขาย
              </a>
            </div>
          </motion.div>

          {/* 🖥️ IMAGE_PREVIEW: แสดงภาพโรงไม้แบบ Soft Professional (ฉีกจาก Brutalist เดิม) */}
          <motion.div
            variants={itemVars}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-50 p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
          >
            <div className="relative aspect-[16/9] w-auto overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src={image}
                alt="โรงไม้สุโขทัย สินค้าคุณภาพ"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
                unoptimized
              />
            </div>

            {/* 🏷️ CAPTION: ป้ายกำกับเล็กน้อย */}
            <div className="absolute bottom-6 left-6 hidden rounded-lg bg-white/90 px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500 backdrop-blur-md md:block">
              Verified_Factory_Stock
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
