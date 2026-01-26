/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ImageOff,
  BarChart3,
} from "lucide-react"

/**
 * CaseStudyCardProps: ปรับปรุงพิกัดประเภทข้อมูล
 * แก้ไข: ให้ description เป็น optional (?) หรือยอมรับค่าว่าง เพื่อป้องกัน Error TS2769
 */
interface CaseStudyCardProps {
  title: string
  description?: string // <--- ปรับเป็น optional เพื่อความยืดหยุ่นของระบบพิกัดข้อมูล
  image?: string
  slug: string
  industry: string
  result?: string
  index?: number
}

const CaseStudyCard = ({
  title,
  description = "", // <--- ใส่ Default Value เพื่อป้องกันพิกัดข้อมูลว่างเปล่า
  image,
  slug,
  industry,
  result = "Performance 100",
  index = 0,
}: CaseStudyCardProps) => {
  // การจัดการพิกัดรูปภาพสำรองเพื่อป้องกันความผิดพลาดขณะเรนเดอร์ระบบ
  const imageSrc =
    image && image.trim() !== "" ? image : "/images/showcase/placeholder.webp"

  const safeAlt =
    title && title.trim() !== ""
      ? title
      : `ผลงานในกลุ่ม ${industry || "ธุรกิจทั่วไป"}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[520px] overflow-hidden rounded-[3rem] bg-slate-950 shadow-2xl transition-all duration-500 hover:-translate-y-3"
    >
      {/* 1. เลเยอร์รูปภาพปก: จัดพิกัดการโหลดด้วย priority สำหรับใบแรกๆ ของรายการ */}
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={safeAlt}
            fill
            className="object-cover opacity-60 grayscale-[40%] transition-all duration-700 group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2} // รีดความเร็วรูปภาพแรก (LCP Optimization)
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900">
            <ImageOff className="text-slate-700" size={48} />
          </div>
        )}

        {/* การไล่ระดับสีเชิงระบบเพื่อความคมชัด (Readability Layer) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
      </div>

      {/* 2. ส่วนพิกัดข้อมูลสถานะ (Badges) */}
      <div className="absolute top-8 left-8 z-20 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <ShieldCheck size={12} className="text-emerald-400" />
          <span className="font-heading text-[10px] font-black tracking-[0.2em] text-white uppercase italic">
            {industry}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 ring-1 ring-emerald-500/30 backdrop-blur-md">
          <BarChart3 size={12} className="text-emerald-400" />
          <span className="font-heading text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase italic">
            {result}
          </span>
        </div>
      </div>

      {/* 3. ส่วนพิกัดเนื้อหา (Typography) */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-12">
        <div className="flex flex-col gap-5">
          <div className="space-y-3 text-left">
            <h3 className="font-heading text-3xl leading-[1.1] font-black tracking-tighter text-white uppercase italic transition-colors duration-500 group-hover:text-emerald-400 md:text-4xl">
              {title || "รายละเอียดโครงการ"}
            </h3>
            <p className="font-body line-clamp-2 text-lg leading-relaxed font-bold text-slate-400 transition-colors group-hover:text-slate-200">
              {description}
            </p>
          </div>

          {/* ปุ่ม CTA และพิกัดงานเทคนิคที่ยืนยันความเร็ว */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-8">
            <Link
              href={`/case-studies/${slug}`}
              className="group/link inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-white uppercase transition-all hover:text-emerald-400"
            >
              ตรวจสอบผลงาน
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>

            <div className="flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Zap size={16} className="fill-emerald-500 text-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-widest text-emerald-500 uppercase italic">
                Performance Optimized
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Glow Effect: เพิ่มมิติพรีเมียมเมื่อ Hover */}
      <div
        className="absolute -inset-2 z-10 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default CaseStudyCard
