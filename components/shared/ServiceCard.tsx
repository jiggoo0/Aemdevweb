/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Zap, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description?: string
  price: number | string
  slug: string
  features: string[]
  isPopular?: boolean
  className?: string
  index?: number
  themeColor?: string // เพิ่มเพื่อรองรับการปรับแต่งสีตามประเภทบริการ
}

/**
 * 🏗️ ServiceCard — "หน้าด่านการเสนอขายโซลูชัน"
 * ผมออกแบบมาให้ข้อมูลราคาและฟีเจอร์อ่านง่ายที่สุด
 * เพื่อให้ลูกค้า SME และโรงงานตัดสินใจได้ทันทีครับ
 */
const ServiceCard = ({
  title,
  description = "โซลูชันระดับ Specialist โดย นายเอ็มซ่ามากส์",
  price,
  slug,
  features,
  isPopular = false,
  className,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn(
        "group relative flex flex-col rounded-[2.5rem] border p-8 transition-all duration-500 md:p-10 lg:p-12",
        isPopular
          ? "border-emerald-500 bg-slate-950 text-white shadow-2xl"
          : "border-slate-100 bg-white text-slate-900 hover:border-emerald-500/30 hover:shadow-xl",
        className
      )}
    >
      {/* 🌟 ป้ายแนะนำ (Popular Badge) */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-6 py-2 text-[10px] font-black tracking-[0.2em] whitespace-nowrap text-slate-950 uppercase shadow-lg">
          🔥 แพ็กเกจแนะนำ
        </div>
      )}

      {/* 🏷️ ส่วนหัวข้อ (Header) */}
      <div className="mb-10">
        <h3
          className={cn(
            "font-prompt mb-4 text-3xl leading-none font-black tracking-tighter uppercase italic transition-colors",
            isPopular
              ? "text-white"
              : "text-slate-950 group-hover:text-emerald-500"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "font-anuphan text-sm leading-relaxed font-bold",
            isPopular ? "text-slate-400" : "text-slate-500"
          )}
        >
          {description}
        </p>
      </div>

      {/* 💰 ส่วนราคา (Pricing) */}
      <div className="mb-10 flex items-baseline gap-2">
        <span
          className={cn(
            "font-prompt text-xs font-black tracking-widest uppercase",
            isPopular ? "text-emerald-400" : "text-slate-400"
          )}
        >
          เริ่มต้น ฿
        </span>
        <span className="font-prompt text-6xl leading-none font-black tracking-tighter italic">
          {typeof price === "number" ? price.toLocaleString() : price}
        </span>
      </div>

      {/* ✅ รายการฟีเจอร์ (Features List) */}
      <div className="mb-12 flex-grow space-y-5">
        <div
          className={cn(
            "mb-6 text-[10px] font-black tracking-[0.3em] uppercase opacity-60",
            isPopular ? "text-slate-400" : "text-slate-300"
          )}
        >
          Technical Deliverables
        </div>
        {features?.map((feature, i) => (
          <div key={i} className="group/item flex items-start gap-4">
            <div
              className={cn(
                "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover/item:scale-110",
                isPopular ? "bg-emerald-500/20" : "bg-emerald-50"
              )}
            >
              <Check
                className={cn(
                  "h-3 w-3",
                  isPopular ? "text-emerald-500" : "text-emerald-600"
                )}
              />
            </div>
            <span
              className={cn(
                "font-anuphan text-[15px] leading-snug font-bold transition-colors",
                isPopular
                  ? "text-slate-300"
                  : "text-slate-600 group-hover:text-slate-950"
              )}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* 🚀 ปุ่มดำเนินการ (Action Area) */}
      <div className="mt-auto space-y-6">
        <Link
          href={`/services/${slug}`}
          className={cn(
            "font-prompt flex w-full items-center justify-center gap-3 rounded-2xl py-6 text-sm font-black tracking-widest uppercase transition-all duration-500 active:scale-95",
            isPopular
              ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400"
              : "bg-slate-50 text-slate-950 hover:bg-emerald-500 hover:text-white"
          )}
        >
          ดูรายละเอียดบริการ
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>

        {/* ส่วนท้ายแสดงความมั่นใจ (Verification Footer) */}
        <div className="flex items-center justify-center gap-3 opacity-40 select-none">
          {isPopular ? (
            <Zap className="h-4 w-4 text-emerald-400" />
          ) : (
            <ShieldCheck className="h-4 w-4 text-slate-300" />
          )}
          <span
            className={cn(
              "text-[9px] leading-none font-black tracking-[0.4em] uppercase",
              isPopular ? "text-slate-400" : "text-slate-300"
            )}
          >
            Specialist Standard v.2026
          </span>
        </div>
      </div>

      {/* แสงฟุ้งมรกตสำหรับแพ็กเกจเด่น */}
      {isPopular && (
        <div
          className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-emerald-500/5 blur-[40px]"
          aria-hidden="true"
        />
      )}
    </motion.div>
  )
}

export default ServiceCard
