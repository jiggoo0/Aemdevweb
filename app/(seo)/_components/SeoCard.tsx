/** @format */

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import IconRenderer from "@/components/shared/IconRenderer"
import { SeoServiceItem } from "@/types/seo"

interface SeoCardProps {
  data: SeoServiceItem
  className?: string
}

/**
 * SeoCard: พิกัดควบคุมการแสดงผลรายการบริการหมวด SEO
 * ออกแบบเพื่อเพิ่มพิกัดความน่าเชื่อถือและการเข้าถึงข้อมูลเชิงเทคนิคระดับสูง
 */
export function SeoCard({ data, className }: SeoCardProps) {
  const { slug, title, subtitle, description, iconName, pricing, features } = data
  
  // จำกัดพิกัดจุดเด่นเพียง 3 ข้อ เพื่อรักษาความสม่ำเสมอของโครงสร้างระบบ
  const highlightFeatures = features ? features.slice(0, 3) : []

  return (
    <Link
      href={`/seo/${slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-node",
        className
      )}
    >
      {/* [BADGE]: ยืนยันพิกัดบริการที่แนะนำโดยผู้เชี่ยวชาญ (นายเอ็มซ่ามากส์) */}
      {pricing.isPopular && (
        <div className="absolute top-0 right-0 rounded-bl-2xl bg-emerald-500 px-5 py-2 text-[10px] font-black tracking-widest text-white uppercase italic shadow-aurora">
          Recommended
        </div>
      )}

      {/* [HEADER]: ส่วนนำพิกัดข้อมูลพร้อมระบบตอบสนองไอคอน (Active State) */}
      <div className="mb-8">
        <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-emerald-600 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-500/20">
          <IconRenderer name={iconName} size={32} />
        </div>
        
        <h3 className="font-heading text-2xl font-black tracking-tighter text-slate-900 transition-colors group-hover:text-emerald-600">
          {title}
        </h3>
        <p className="font-body mt-2 text-sm font-bold text-slate-400">
          {subtitle}
        </p>
      </div>

      {/* [BODY]: รายละเอียดเชิงระบบและพิกัดจุดเด่นทางเทคนิค */}
      <div className="flex-1">
        <p className="font-body mb-8 line-clamp-2 text-sm font-medium leading-relaxed text-slate-500">
          {description}
        </p>

        {/* รายการจุดเด่นเชิงรหัส (Feature List Protocol) */}
        {highlightFeatures.length > 0 && (
          <ul className="mb-10 space-y-4">
            {highlightFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <IconRenderer name="CheckCircle2" size={12} />
                </span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* [FOOTER]: พิกัดงบประมาณและการเปลี่ยนสถานะหน้าจอ */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-8">
        <div>
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">Investment Node</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-heading text-3xl font-black text-slate-950">
              {pricing.label}
            </span>
            <span className="font-body text-[10px] font-black text-slate-400 uppercase">
              {pricing.suffix || "THB"}
            </span>
          </div>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:bg-emerald-500 group-hover:shadow-node">
          <IconRenderer name="ArrowUpRight" size={20} />
        </div>
      </div>
    </Link>
  )
}
