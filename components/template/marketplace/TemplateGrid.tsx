/** @format */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Eye } from "lucide-react"

// Types
import { TemplateItem } from "@/constants/templates-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TemplateGridProps {
  initialTemplates: TemplateItem[]
}

export function TemplateGrid({ initialTemplates }: TemplateGridProps) {
  const [templates] = useState<TemplateItem[]>(initialTemplates)

  if (!templates || templates.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/50 text-center">
        <p className="text-slate-400">ยังไม่มีเทมเพลตในหมวดหมู่นี้</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  )
}

function TemplateCard({ template }: { template: TemplateItem }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 transition-all hover:border-aurora-cyan/30 hover:shadow-luminous">
      {/* Image Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={template.image}
          alt={template.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {/* ✅ Fix 2: เปลี่ยน variant="secondary" เป็น "outline" */}
          <Button size="icon" variant="outline" className="rounded-full bg-slate-950/80 border-white/20 hover:bg-white hover:text-black" asChild>
            <Link href={template.demoUrl || "#"} target="_blank">
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-aurora-cyan text-slate-950 hover:bg-aurora-cyan/90"
            asChild
          >
            <Link href={`/${template.category}/${template.slug}`}>
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="font-prompt text-lg font-bold text-white line-clamp-1">
            {template.title}
          </h3>
          {template.isNew && (
            <Badge variant="luminous" className="text-[10px]">
              NEW
            </Badge>
          )}
        </div>
        <p className="font-anuphan mb-4 text-sm text-slate-400 line-clamp-2">
          {template.description}
        </p>
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-mono text-lg font-bold text-aurora-emerald">
            ฿
            {template.salePrice?.toLocaleString() ||
              template.price?.toLocaleString()}
          </span>
          <Link
            href={`/${template.category}/${template.slug}`}
            className="group/link flex items-center text-xs font-bold text-slate-500 uppercase transition-colors hover:text-white"
          >
            View Details
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
