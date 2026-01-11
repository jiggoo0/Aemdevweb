/** @format */
"use client"

import React, { memo } from "react"
// ✅ ลบ import Link ที่ไม่ได้ใช้งานออก
import Image from "next/image"
import {
  ArrowUpRight,
  ExternalLink,
  Box,
  Terminal,
  Globe,
  ShieldCheck,
} from "lucide-react"
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
  const isUnlink = project.id === "project-unlink-th"
  const destinationUrl = isUnlink
    ? "https://unlink-th.vercel.app/"
    : `/${project.templateId}`
  const refCode = (project.templateId || project.id).toUpperCase()

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border-[6px] border-slate-900 bg-white transition-all duration-300",
        "hover:-translate-x-2 hover:-translate-y-2",
        isUnlink
          ? "border-[#1E3A8A] hover:shadow-[20px_20px_0px_0px_#F97316]"
          : "hover:shadow-[20px_20px_0px_0px_#1E3A8A]",
        "shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-[6px] border-slate-900 bg-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-all duration-700 group-hover:scale-110",
            isUnlink ? "grayscale-0" : "grayscale group-hover:grayscale-0"
          )}
          priority={isUnlink}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:opacity-100">
          <a
            href={destinationUrl}
            target={isUnlink ? "_blank" : "_self"}
            rel={isUnlink ? "noopener noreferrer" : ""}
            className={cn(
              "group/btn flex items-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#000] transition-transform hover:scale-105 active:scale-95",
              isUnlink ? "bg-[#1E3A8A]" : "bg-[#F97316]"
            )}
          >
            {isUnlink ? "LAUNCH_PLATFORM" : "VIEW_SYSTEM"}
            {isUnlink ? (
              <Globe size={16} strokeWidth={3} />
            ) : (
              <ExternalLink size={16} strokeWidth={3} />
            )}
          </a>
        </div>

        <div
          className={cn(
            "absolute left-6 top-6 z-20 hidden border-4 border-slate-900 px-3 py-1 shadow-[4px_4px_0px_0px_#000] md:block",
            isUnlink ? "bg-[#F97316] text-white" : "bg-white text-slate-900"
          )}
        >
          <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            {isUnlink && <ShieldCheck size={12} />}
            {isUnlink ? "OUR_PRODUCT" : project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-6 flex items-center justify-between border-b-4 border-slate-100 pb-5">
          <div className="flex items-center gap-2">
            <Terminal
              size={14}
              className={isUnlink ? "text-[#F97316]" : "text-[#1E3A8A]"}
            />
            <span className="font-mono text-[10px] font-black uppercase tracking-tighter text-slate-400">
              {isUnlink ? "CORE_PLATFORM" : `REF_SPEC: ${refCode}`}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={cn(
                "h-2 w-2 animate-pulse rounded-full",
                isUnlink ? "bg-[#F97316]" : "bg-emerald-500"
              )}
            />
            <span
              className={cn(
                "text-[9px] font-black uppercase",
                isUnlink ? "text-[#F97316]" : "text-emerald-600"
              )}
            >
              {isUnlink ? "Active_Service" : "System_Live"}
            </span>
          </div>
        </div>

        <div className="mb-8 space-y-3">
          <h3
            className={cn(
              "font-heading text-3xl font-black uppercase italic leading-none tracking-tighter transition-colors md:text-4xl",
              isUnlink
                ? "text-[#1E3A8A] group-hover:text-[#F97316]"
                : "text-slate-900 group-hover:text-[#1E3A8A]"
            )}
          >
            {project.title}
          </h3>
          <p className="line-clamp-2 text-base font-bold leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between border-t-2 border-dashed border-slate-200 pt-6">
          <div className="space-y-1">
            <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              {project.stats?.label || "Architecture"}
            </span>
            <div className="flex items-center gap-2">
              <Box
                size={16}
                className={isUnlink ? "text-[#1E3A8A]" : "text-[#F97316]"}
              />
              <span className="text-lg font-black uppercase tracking-tight text-slate-900">
                {project.stats?.value || "Standard_v2"}
              </span>
            </div>
          </div>

          {showCTA && (
            <a
              href={destinationUrl}
              target={isUnlink ? "_blank" : "_self"}
              rel={isUnlink ? "noopener noreferrer" : ""}
              aria-label={`View ${project.title}`}
              className={cn(
                "group/cta relative flex h-16 w-16 items-center justify-center border-4 border-slate-900 bg-white transition-all",
                isUnlink ? "hover:bg-[#1E3A8A]" : "hover:bg-slate-900"
              )}
            >
              <ArrowUpRight
                size={32}
                strokeWidth={3}
                className={cn(
                  "transition-all group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 group-hover/cta:text-white",
                  isUnlink ? "text-[#1E3A8A]" : "text-slate-900"
                )}
              />
            </a>
          )}
        </div>
      </div>
    </article>
  )
})
