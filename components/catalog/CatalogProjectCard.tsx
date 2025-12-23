/** @format */
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Activity } from "lucide-react"

import { Project } from "@/data/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean
}

export function CatalogProjectCard({
  project,
  showCTA = true,
}: CatalogProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-none border-4 border-slate-900 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(37,99,235,1)]">
      {/* ─── 1. THUMBNAIL AREA ─── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-slate-900 bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Label: Industrial Tag Style */}
        <Badge className="absolute left-0 top-6 rounded-none border-y-2 border-r-2 border-slate-900 bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          {project.category}
        </Badge>
      </div>

      {/* ─── 2. CONTENT AREA ─── */}
      <CardContent className="space-y-6 p-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-3xl">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm font-bold leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>

        {/* Tags: Small blueprints style */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-slate-100 bg-slate-50 px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter text-slate-400 transition-colors group-hover:border-blue-600/20 group-hover:text-blue-600"
            >
              # {tag}
            </span>
          ))}
        </div>

        {/* ─── 3. STATS (Enterprise Performance) ─── */}
        {project.stats && (
          <div className="flex items-center gap-4 border-l-4 border-blue-600 bg-blue-50/50 p-4 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <div className="shrink-0 bg-white p-2 text-blue-600 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              <Activity size={20} className="animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                {project.stats.label}
              </p>
              <p className="text-xl font-black tabular-nums tracking-tighter">
                {project.stats.value}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      {/* ─── 4. CTA FOOTER ─── */}
      {showCTA && (
        <CardFooter className="p-8 pt-0">
          <Button
            asChild
            className="h-16 w-full rounded-none border-4 border-slate-900 bg-slate-900 text-xs font-black uppercase italic tracking-[0.2em] text-white transition-all hover:bg-blue-600 active:translate-y-1 active:scale-95"
          >
            <Link href={`/landing/${project.templateId}`}>
              Preview Architecture
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-3" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
