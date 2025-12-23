/** @format */
"use client"

import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"

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
  if (!projects.length) {
    return (
      <div className="flex h-64 items-center justify-center border-4 border-dashed border-slate-300 bg-slate-50">
        <p className="text-sm font-black uppercase tracking-widest text-slate-400">
          No projects available
        </p>
      </div>
    )
  }

  const gridColsClass = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns]

  return (
    <section className="relative">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-40" />

      <div className={`grid grid-cols-1 gap-12 ${gridColsClass}`}>
        {projects.map((project) => (
          <CatalogProjectCard
            key={project.id}
            project={project}
            showCTA={showCTA}
          />
        ))}
      </div>
    </section>
  )
}
