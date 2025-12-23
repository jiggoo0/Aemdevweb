/** @format */
"use client"

import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"
import { LayoutDashboard } from "lucide-react"

interface CatalogProjectsGridProps {
  projects: Project[]
  columns?: 2 | 3 | 4
  showCTA?: boolean
}

export function CatalogProjectsGrid({
  projects,
  columns = 3,
  showCTA = true,
}: CatalogProjectsGridProps) {
  // ─── 1. Empty State (Industrial Style) ───
  if (!projects || projects.length === 0) {
    return (
      <div className="group relative flex h-80 flex-col items-center justify-center border-4 border-dashed border-slate-200 bg-slate-50/50 p-12 transition-colors hover:border-blue-600/30">
        {/* Blueprint Corner Decor */}
        <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-slate-200 group-hover:border-blue-600/30" />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-slate-200 group-hover:border-blue-600/30" />

        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(226,232,240,1)]">
          <LayoutDashboard className="h-8 w-8 text-slate-300" />
        </div>

        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          No active projects found in registry
        </p>
      </div>
    )
  }

  // ─── 2. Column Logic ───
  // ปรับให้ Tablet (md) เริ่มต้นที่ 2 คอลัมน์เสมอเพื่อความสมดุล
  const gridColsClass = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns]

  return (
    <section className="relative">
      {/* 🛠️ Background Grid: สื่อถึงกระดาษไขเขียนแบบ */}
      <div className="absolute inset-x-0 -bottom-12 -top-12 -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] opacity-60 [background-size:32px_32px]" />

      {/* Grid Container */}
      <div
        className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridColsClass} xl:gap-12`}
      >
        {projects.map((project, index) => (
          <div
            key={project.id || index}
            // เพิ่มจังหวะการเลื่อนขึ้นเล็กน้อย (ถ้าคุณใช้ Framer Motion สามารถเปลี่ยนเป็น motion.div ได้)
            className="duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CatalogProjectCard project={project} showCTA={showCTA} />
          </div>
        ))}
      </div>
    </section>
  )
}
