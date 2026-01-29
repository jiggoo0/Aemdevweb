/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Eye, Layers, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { TemplateMetadata } from "@/types/template"

interface TemplateCardProps {
  template: TemplateMetadata
  className?: string
  priority?: boolean
}

/**
 * TemplateCard - ส่วนนำเสนอข้อมูลรูปแบบระบบ (Strategic System Presentation)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างมูลค่าเพิ่มให้กับผลิตภัณฑ์ผ่านการนำเสนอที่แม่นยำและพรีเมียม
 */
export default function TemplateCard({
  template,
  className,
  priority = false,
}: TemplateCardProps) {
  if (!template?.slug) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-[3rem] border border-slate-100 bg-white p-5 transition-all duration-500",
        "hover:border-emerald-500/30 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.1)]",
        className
      )}
    >
      {/* Visual Portal: พื้นที่แสดงผลตัวอย่างระบบ */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] bg-slate-50">
        <Image
          src={template.thumbnail || "/images/templates/placeholder.webp"}
          alt={`AEMDEVWEB Strategic System: ${template.name}`}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />

        <div className="absolute top-5 left-5 z-10">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 ring-1 ring-white/10 backdrop-blur-xl">
            <span className="font-heading text-[9px] font-black tracking-widest text-emerald-400 uppercase italic">
              {template.category}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center bg-emerald-950/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
          <Link
            href={`/templates/${template.slug}`}
            className="group/btn font-heading flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-[11px] font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl transition-all hover:bg-emerald-500 hover:text-white"
          >
            <Eye
              size={18}
              strokeWidth={2.5}
              className="transition-transform group-hover/btn:rotate-12"
            />
            Examine Configuration
          </Link>
        </div>
      </div>

      {/* Content Hub: ส่วนข้อมูลรายละเอียดและราคาการลงทุน */}
      <div className="flex flex-1 flex-col px-2 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={14} className="text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
              Ref ID: {template.id}
            </span>
          </div>
          {template.isNew && (
            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2 py-1">
              <div className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500" />
              <span className="font-heading text-[8px] font-black text-emerald-600 uppercase">
                Strategic Asset
              </span>
            </div>
          )}
        </div>

        <h3 className="font-heading mb-6 text-3xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
          {template.name}
        </h3>

        <div className="mb-8 flex items-baseline gap-2">
          {template.pricePrefix && (
            <span className="font-heading text-[10px] font-black text-slate-400 uppercase italic">
              {template.pricePrefix}
            </span>
          )}
          <span className="font-heading text-4xl font-black tracking-tighter text-slate-950 italic">
            ฿{template.priceLabel}
          </span>
          <span className="font-heading text-[10px] font-black text-slate-300 uppercase italic">
            / Solution
          </span>
        </div>

        {/* System Specs: การยืนยันประสิทธิภาพเชิงเทคนิค */}
        <div className="mt-auto flex items-end justify-between border-t border-slate-50 pt-8 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-600">
              <Zap size={12} fill="currentColor" />
              <span className="font-heading text-[9px] font-black tracking-[0.4em] uppercase italic">
                Performance Optimized
              </span>
            </div>
            <p className="font-body line-clamp-2 max-w-[180px] text-[11px] leading-tight font-bold text-slate-400">
              {template.description}
            </p>
          </div>

          <Link
            href={`/templates/${template.slug}`}
            className="flex h-16 w-16 items-center justify-center rounded-[1.8rem] bg-slate-950 text-white shadow-xl shadow-slate-950/10 transition-all hover:bg-emerald-600 active:scale-90"
            aria-label={`View details for ${template.name}`}
          >
            <ArrowRight
              size={24}
              strokeWidth={3}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Signature Interaction Line */}
      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-[1.2s] ease-in-out group-hover:w-full" />
    </motion.div>
  )
}
