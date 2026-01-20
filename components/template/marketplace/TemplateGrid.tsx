/** @format */

"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Eye, Star, Zap } from "lucide-react"

// 📦 UI & Utils Specialist
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * ✅ Interface Definition
 * รองรับข้อมูลที่ประมวลผลมาจาก lib/template.ts
 */
export interface TemplateItem {
  id: string
  slug: string
  title: string
  name?: string
  description: string
  image: string
  category: string
  price: number
  salePrice?: number
  isPopular?: boolean
  isNew?: boolean
  stats?: {
    sold: number
    rating: number
  }
  themeColor?: string
  demoUrl?: string
}

interface TemplateGridProps {
  initialTemplates: any[] // รับข้อมูลจาก Server Component
}

/**
 * 🏗️ TemplateGrid Specialist Edition
 */
export const TemplateGrid = ({ initialTemplates }: TemplateGridProps) => {
  const [templates] = useState<TemplateItem[]>(initialTemplates || [])

  if (!templates || templates.length === 0) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-[3rem] border border-dashed border-white/10 bg-white/[0.02] text-center backdrop-blur-sm">
        <div className="mb-4 rounded-full bg-white/5 p-4">
          <Zap className="h-8 w-8 text-slate-600" />
        </div>
        <h3 className="font-prompt text-xl font-bold text-slate-300 uppercase italic">
          No Templates Found
        </h3>
        <p className="mt-2 text-slate-500">
          นายเอ็มกำลังเร่งพัฒนาอาวุธลับใหม่ๆ สำหรับธุรกิจคุณเร็วๆ นี้ครับ
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.slug} template={template} />
      ))}
    </div>
  )
}

/**
 * 🧱 TemplateCard Component
 */
function TemplateCard({ template }: { template: TemplateItem }) {
  const displayTitle = template.title || template.name || "Untitled Template"
  const themeColor = template.themeColor || "emerald"

  // 🛣️ สร้าง Link ที่ถูกต้องตามโครงสร้าง 3 ชั้น (templates/category/slug)
  // บังคับ lowercase ทั้งหมดเพื่อกัน 404 บน Termux
  const detailUrl = `/templates/${template.category.toLowerCase()}/${template.slug.toLowerCase()}`

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2.8rem] border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
      {/* 🖼️ Image Layer */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={template.image || "/images/templates/project-01.webp"}
          alt={displayTitle}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {template.isPopular && (
            <Badge className="bg-emerald-500 text-[10px] font-black tracking-widest text-slate-950 uppercase italic">
              Best Seller
            </Badge>
          )}
        </div>

        {/* ⚡ Interaction Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#0F172A]/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="outline"
            className="h-14 w-14 rounded-full border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950"
            asChild
          >
            <Link href={template.demoUrl || "#"} target="_blank">
              <Eye className="h-6 w-6" />
            </Link>
          </Button>
          <Button
            size="icon"
            className={cn(
              "h-14 w-14 rounded-full text-slate-950 shadow-xl transition-transform hover:scale-110",
              themeColor === "rose" ? "bg-rose-500" : "bg-emerald-500"
            )}
            asChild
          >
            <Link href={detailUrl}>
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 📝 Content Architecture */}
      <div className="flex flex-1 flex-col p-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase italic">
            {template.category}
          </span>
          {template.stats?.rating && (
            <div className="flex items-center gap-1.5 text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="text-[11px] font-black">
                {template.stats.rating}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-prompt mb-4 line-clamp-1 text-2xl font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-emerald-400">
          {displayTitle}
        </h3>

        <p className="mb-10 line-clamp-2 flex-1 text-sm leading-relaxed font-medium text-slate-400">
          {template.description}
        </p>

        {/* 💰 Pricing & CTA */}
        <div className="flex items-center justify-between border-t border-white/5 pt-8">
          <div className="flex flex-col">
            {template.salePrice && (
              <span className="text-[10px] font-bold text-slate-600 line-through decoration-rose-500/50">
                ฿{template.price?.toLocaleString()}
              </span>
            )}
            <span className="font-prompt text-2xl font-black tracking-tighter text-white italic">
              ฿{(template.salePrice || template.price || 0).toLocaleString()}
            </span>
          </div>

          <Link
            href={detailUrl}
            className="group/link flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-all hover:text-white"
          >
            Details
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all group-hover/link:bg-emerald-500 group-hover/link:text-slate-950">
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
