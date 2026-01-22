/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { TemplateMeta } from "@/lib/template"

interface TemplateCardProps {
  template: TemplateMeta
}

/**
 * 🏗️ TemplateCard — การ์ดนำเสนอเทมเพลตสไตล์ Industrial Specialist
 */
export default function TemplateCard({ template }: TemplateCardProps) {
  const {
    name,
    slug,
    category,
    price,
    salePrice,
    isPopular,
    image,
    themeColor,
  } = template

  // จัดการชุดสีตาม themeColor ที่ระบุมา
  const accentColor =
    themeColor === "blue" ? "text-blue-500" : "text-emerald-500"
  const bgAccent = themeColor === "blue" ? "bg-blue-500" : "bg-emerald-500"

  return (
    <Link
      href={`/templates/${category}/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-emerald-500/5"
    >
      {/* 🏷️ Popular Badge */}
      {isPopular && (
        <div className="absolute top-5 right-5 z-20 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black text-slate-900 uppercase italic">
          <Star size={10} fill="currentColor" /> Best Seller
        </div>
      )}

      {/* 🖼️ Thumbnail Infrastructure */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image || "/images/og-image.png"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
      </div>

      {/* ✍️ Content Details */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-center justify-between">
          <span
            className={cn(
              "font-prompt text-[10px] font-black tracking-[0.3em] uppercase italic",
              accentColor
            )}
          >
            {category}
          </span>
          <div className="flex items-center gap-2 text-white/20">
            <Zap size={14} fill="currentColor" />
          </div>
        </div>

        <h3 className="font-prompt mb-4 text-2xl leading-none font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-emerald-400">
          {name}
        </h3>

        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-6">
          <div className="flex flex-col">
            {salePrice ? (
              <>
                <span className="text-[10px] text-slate-500 line-through">
                  ฿{price.toLocaleString()}
                </span>
                <span className="font-prompt text-xl font-black text-white italic">
                  ฿{salePrice.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-prompt text-xl font-black text-white italic">
                ฿{price.toLocaleString()}
              </span>
            )}
          </div>

          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl text-slate-950 transition-all group-hover:scale-110 group-hover:rotate-12",
              bgAccent
            )}
          >
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  )
}
