/** @format */
"use client"

import React, { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Box, Terminal } from "lucide-react"
import { Project } from "@/data/types"
import { cn } from "@/lib/utils"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean
  className?: string
}

export const CatalogProjectCard = memo(function CatalogProjectCard({
  project,
  showCTA = true,
  className,
}: CatalogProjectCardProps) {
  // สร้างตัวย่อ ID สำหรับใช้แสดงผลแบบ Ref Code
  const refCode = project.id.split("-").pop()?.toUpperCase() || "ID-ERR"

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border-[6px] border-slate-900 bg-white transition-all duration-300",
        "hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_#1E3A8A]",
        "shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]",
        className
      )}
    >
      {/* ─── 🖼️ IMAGE SECTION: INDUSTRIAL VIEWPORT ─── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-[6px] border-slate-900 bg-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
          priority={false}
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:opacity-100">
          <Link
            href={`/${project.templateId}`}
            className="group/btn flex items-center gap-3 bg-brand-orange px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#000] transition-transform hover:scale-105 active:scale-95"
          >
            Explore System <ExternalLink size={16} strokeWidth={3} />
          </Link>
        </div>

        {/* Category Floating Badge */}
        <div className="absolute left-6 top-6 z-20 hidden border-4 border-slate-900 bg-white px-3 py-1 shadow-[4px_4px_0px_0px_#000] md:block">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
            {project.category}
          </span>
        </div>
      </div>

      {/* ─── 📝 CONTENT SECTION ─── */}
      <div className="flex flex-1 flex-col p-8">
        {/* Technical Metadata Header */}
        <div className="mb-6 flex items-center justify-between border-b-4 border-slate-100 pb-5">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-brand-blue" />
            <span className="font-mono text-[10px] font-black uppercase tracking-tighter text-slate-400">
              REF_SPEC: {refCode}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[9px] font-black uppercase text-emerald-600">
              Active_Link
            </span>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="mb-8 space-y-3">
          <h3 className="font-heading text-3xl font-black uppercase italic leading-none tracking-tighter text-slate-900 transition-colors group-hover:text-brand-blue">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-base font-bold leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>

        {/* ─── 📊 FOOTER: SYSTEM STATS & CTA ─── */}
        <div className="mt-auto flex items-end justify-between border-t-2 border-dashed border-slate-200 pt-6">
          <div className="space-y-1">
            <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              {project.stats?.label || "Architecture"}
            </span>
            <div className="flex items-center gap-2">
              <Box size={16} className="text-brand-orange" />
              <span className="text-lg font-black uppercase tracking-tight text-slate-900">
                {project.stats?.value || "Standard_v1"}
              </span>
            </div>
          </div>

          {showCTA && (
            <Link
              href={`/${project.templateId}`}
              aria-label={`View ${project.title}`}
              className="group/cta relative flex h-16 w-16 items-center justify-center border-4 border-slate-900 bg-white transition-all hover:bg-slate-900"
            >
              <ArrowUpRight
                size={32}
                strokeWidth={3}
                className="text-slate-900 transition-all group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 group-hover/cta:text-white"
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
})
