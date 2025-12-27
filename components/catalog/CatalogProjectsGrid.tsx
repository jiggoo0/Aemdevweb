/** @format */
"use client"

import React, { useMemo } from "react"
import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"
import { LayoutDashboard, Database, SearchX } from "lucide-react"
import { cn } from "@/lib/utils"

interface CatalogProjectsGridProps {
  projects: Project[]
  columns?: 2 | 3 | 4
  showCTA?: boolean
  className?: string
}

export function CatalogProjectsGrid({
  projects,
  columns = 3,
  showCTA = true,
  className,
}: CatalogProjectsGridProps) {
  // ─── 1. COLUMN LOGIC (Performance Optimized) ───
  const gridConfig = useMemo(() => {
    const configs = {
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4 xl:grid-cols-4",
    }
    return configs[columns] || configs[3]
  }, [columns])

  // ─── 2. EMPTY STATE: REGISTRY NOT FOUND ───
  if (!projects || projects.length === 0) {
    return (
      <div className="group relative flex min-h-[400px] flex-col items-center justify-center border-[6px] border-dashed border-slate-200 bg-slate-50/30 p-12 text-center transition-all hover:border-brand-blue/30">
        {/* Blueprint Decorative Elements */}
        <div className="absolute left-6 top-6 h-12 w-12 border-l-4 border-t-4 border-slate-200 group-hover:border-brand-blue/30" />
        <div className="absolute bottom-6 right-6 h-12 w-12 border-b-4 border-r-4 border-slate-200 group-hover:border-brand-blue/30" />

        <div className="relative mb-8">
          <div className="flex h-20 w-20 items-center justify-center border-4 border-slate-200 bg-white shadow-[8px_8px_0px_0px_#e2e8f0] transition-all group-hover:shadow-[8px_8px_0px_0px_#1E3A8A]">
            <SearchX className="h-10 w-10 text-slate-300 group-hover:text-brand-blue" />
          </div>
          <Database className="absolute -bottom-2 -right-2 h-6 w-6 text-slate-400 opacity-50" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-xl font-black uppercase tracking-widest text-slate-900">
            Registry_Empty
          </h3>
          <p className="max-w-[280px] text-[10px] font-bold uppercase leading-relaxed tracking-[0.3em] text-slate-400">
            No active project specifications found matching your current filter
            criteria
          </p>
        </div>
      </div>
    )
  }

  // ─── 3. MAIN GRID RENDER ───
  return (
    <section className={cn("relative py-8", className)}>
      {/* 🛠️ TECHNICAL BACKGROUND GRID */}
      {/* เลเยอร์กระดาษไข (Blueprint Overlay) */}
      <div
        className="absolute inset-x-0 -bottom-20 -top-20 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div
        className={cn(
          "grid grid-cols-1 gap-10 md:grid-cols-2 xl:gap-14",
          gridConfig
        )}
      >
        {projects.map((project, index) => (
          <div
            key={project.id || `project-${index}`}
            className={cn(
              "duration-700 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            )}
            style={{
              animationDelay: `${index * 80}ms`,
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Project Index Label (Technical Detail) */}
            <div className="mb-4 flex items-center gap-3 opacity-20 transition-opacity group-hover:opacity-100">
              <span className="font-mono text-[10px] font-black text-slate-900">
                P_{String(index + 1).padStart(3, "0")}
              </span>
              <div className="h-px flex-1 bg-slate-900" />
            </div>

            <CatalogProjectCard project={project} showCTA={showCTA} />
          </div>
        ))}
      </div>

      {/* ─── GRID FOOTER INFO ─── */}
      <div className="mt-16 flex items-center justify-between border-t-4 border-slate-900 pt-6">
        <div className="flex items-center gap-4">
          <LayoutDashboard size={16} className="text-brand-orange" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Total_Records: {projects.length}
          </span>
        </div>
        <div className="hidden font-mono text-[10px] font-bold text-slate-400 md:block">
          STATUS: SYSTEM_READY // VIEWPORT: {columns}_COL
        </div>
      </div>
    </section>
  )
}
