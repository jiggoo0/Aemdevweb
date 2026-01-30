/** @format */

import React from "react"
import Link from "next/link" // [PATCHED]: นำเข้าพิกัด Link เพื่อแก้ปัญหา ReferenceError
import { cn } from "@/lib/utils"
import IconRenderer from "@/components/shared/IconRenderer"
import { SeoServiceItem } from "@/types/seo"

interface SeoCardProps {
  data: SeoServiceItem
  className?: string
}

/**
 * SeoCard: พิกัดควบคุมการแสดงผลรายการบริการหมวด SEO
 * ควบคุมมาตรฐานระดับ 7 โดย: นายเอ็มซ่ามากส์
 */
export function SeoCard({ data, className }: SeoCardProps) {
  const { slug, title, subtitle, description, iconName, pricing, features } =
    data

  // จำกัดพิกัดจุดเด่นเพียง 3 ข้อ เพื่อรักษาความสม่ำเสมอของโครงสร้างระบบ
  const highlightFeatures = features ? features.slice(0, 3) : []

  return (
    <Link
      href={`/seo/${slug}`}
      className={cn(
        "group hover:shadow-node relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[oklch(0.95_0.02_260)] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[oklch(0.65_0.2_160)]/30 dark:border-[oklch(0.2_0.02_260)] dark:bg-[oklch(0.15_0.02_260)]",
        className
      )}
    >
      {/* [BADGE]: ยืนยันพิกัดบริการที่แนะนำ */}
      {pricing.isPopular && (
        <div className="absolute top-0 right-0 rounded-bl-2xl bg-[oklch(0.65_0.2_160)] px-5 py-2 text-[10px] font-black tracking-widest text-white uppercase italic shadow-lg">
          Recommended
        </div>
      )}

      {/* [HEADER]: ส่วนนำพิกัดข้อมูลพร้อมระบบตอบสนองไอคอน */}
      <div className="mb-8">
        <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.98_0.01_260)] text-[oklch(0.65_0.2_160)] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-[oklch(0.65_0.2_160)] group-hover:text-white dark:bg-[oklch(0.2_0.02_260)]">
          <IconRenderer name={iconName} size={32} />
        </div>

        <h3 className="font-heading text-2xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] transition-colors group-hover:text-[oklch(0.65_0.2_160)] dark:text-white">
          {title}
        </h3>
        <p className="font-body mt-2 text-sm font-bold text-[oklch(0.45_0.02_260)]">
          {subtitle}
        </p>
      </div>

      {/* [BODY]: รายละเอียดเชิงระบบและพิกัดจุดเด่นทางเทคนิค */}
      <div className="flex-1">
        <p className="font-body mb-8 line-clamp-2 text-sm leading-relaxed font-medium text-[oklch(0.4_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
          {description}
        </p>

        {/* Feature List Protocol */}
        {highlightFeatures.length > 0 && (
          <ul className="mb-10 space-y-4">
            {highlightFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-xs font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.2_160_/_0.1)] text-[oklch(0.65_0.2_160)] transition-colors group-hover:bg-[oklch(0.65_0.2_160)] group-hover:text-white">
                  <IconRenderer name="CheckCircle2" size={12} />
                </span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* [FOOTER]: พิกัดงบประมาณและการเปลี่ยนสถานะหน้าจอ */}
      <div className="mt-4 flex items-center justify-between border-t border-[oklch(0.98_0.01_260)] pt-8 dark:border-[oklch(0.2_0.02_260)]">
        <div>
          <p className="text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase italic">
            Investment Node
          </p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-heading text-3xl font-black text-[oklch(0.2_0.02_260)] dark:text-white">
              {pricing.label}
            </span>
            <span className="font-body text-[10px] font-black text-[oklch(0.45_0.02_260)] uppercase">
              {pricing.currency} {pricing.suffix}
            </span>
          </div>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-white transition-all duration-500 group-hover:bg-[oklch(0.65_0.2_160)] group-hover:shadow-lg dark:bg-[oklch(0.95_0.01_260)] dark:text-[oklch(0.2_0.02_260)]">
          <IconRenderer name="ArrowUpRight" size={20} />
        </div>
      </div>
    </Link>
  )
}
