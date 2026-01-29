/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShopCardProps {
  id: string
  name: string
  category: string
  image: string
  slug: string
  priceLabel?: string
  isNew?: boolean
  className?: string
}

/**
 * ShopCard - ส่วนนำเสนอโซลูชันเชิงกลยุทธ์ (Strategic Asset Card)
 * -------------------------------------------------------------------------
 * มาตรฐาน: การตอบสนองที่ลื่นไหลผ่าน Framer Motion 12 และ Tailwind 4
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านโครงสร้างระบบที่ตรวจสอบผลลัพธ์ได้จริง
 */
export const ShopCard = ({
  id,
  name,
  category,
  image,
  slug,
  priceLabel = "1,990",
  isNew,
  className,
}: ShopCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-[3rem] border border-slate-100 bg-white p-5 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)]",
        className
      )}
    >
      {/* [LAYER 1]: VISUAL ASSET - ส่วนแสดงผลตัวอย่างระบบพร้อมการเพิ่มประสิทธิภาพการแสดงผล */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] bg-slate-100">
        <Image
          src={image}
          alt={`AEMDEVWEB Strategic Asset: ${name}`}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={id.includes("01")} // LCP Optimization: จัดลำดับความสำคัญของภาพหลักในระบบ
        />

        {/* Status Badge: แจ้งสถานะโซลูชันใหม่ล่าสุด */}
        {isNew && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 ring-1 ring-white/10 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-heading text-[9px] font-black tracking-widest text-white uppercase italic">
                Recent Release
              </span>
            </div>
          </div>
        )}

        {/* Reference Tag: ข้อมูลรหัสอ้างอิงของระบบหลัก */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="rounded-xl bg-white/80 px-3 py-1.5 ring-1 ring-black/5 backdrop-blur-md">
            <span className="font-heading text-[9px] font-black tracking-[0.2em] text-slate-950 uppercase italic">
              REF ID: {id}
            </span>
          </div>
        </div>

        {/* Interaction Layer: พื้นผิวตอบสนองเชิงสายตา */}
        <div className="absolute inset-0 bg-emerald-600/0 transition-colors duration-500 group-hover:bg-emerald-600/5" />
      </div>

      {/* [LAYER 2]: CORE DATA - ส่วนแสดงข้อมูลรายละเอียดโซลูชัน */}
      <div className="mt-8 flex flex-1 flex-col px-4 pb-4">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
            <Zap size={12} fill="currentColor" />
          </div>
          <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors group-hover:text-emerald-600">
            {category}
          </span>
        </div>

        <h3 className="font-heading mb-8 text-3xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-700">
          {name}
        </h3>

        {/* [LAYER 3]: STRATEGIC ACTION - ส่วนแสดงมูลค่าและการเข้าถึงระบบงาน */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-emerald-600/50">
              <ShieldCheck size={10} />
              <span className="font-heading text-[8px] font-black tracking-widest uppercase italic">
                System Verified
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-heading text-4xl font-black text-slate-950 italic transition-colors group-hover:text-emerald-600">
                {priceLabel}
              </span>
              <span className="font-heading text-[10px] font-black text-slate-400 italic">
                THB
              </span>
            </div>
          </div>

          <Link
            href={`/templates/${slug}`}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 hover:bg-emerald-600 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] active:scale-90"
            aria-label={`ตรวจสอบรายละเอียดโซลูชัน ${name}`}
          >
            <ArrowRight
              size={24}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
            <div className="absolute -inset-2 rounded-3xl border-2 border-emerald-500/0 opacity-0 transition-all group-hover:inset-0 group-hover:opacity-100" />
          </Link>
        </div>
      </div>

      {/* Performance Visualizer: แถบแสดงผลประสิทธิภาพความเร็วเชิงสัญลักษณ์ */}
      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000 ease-in-out group-hover:w-full" />
    </motion.div>
  )
}
