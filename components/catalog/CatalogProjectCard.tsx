/** @format */
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

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
    <Card className="group relative overflow-hidden rounded-none border-4 border-brand-navy bg-white transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(37,99,235,1)]">
      {/* ─── Image ───────────────────────────── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-brand-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Badge className="absolute left-4 top-4 rounded-none border-2 border-brand-navy bg-white px-3 py-1 text-xs font-black uppercase text-brand-navy shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          {project.category}
        </Badge>
      </div>

      {/* ─── Content ─────────────────────────── */}
      <CardContent className="space-y-6 p-6">
        <div>
          <h3 className="text-2xl font-black uppercase italic tracking-tight text-brand-navy">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 font-bold leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>

        {/* ─── Tags ───────────────────────────── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-brand-navy px-2 py-1 text-[10px] font-black uppercase tracking-widest text-brand-navy"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── Stats ──────────────────────────── */}
        {project.stats && (
          <div className="flex items-center gap-3 border-l-4 border-brand-blue bg-blue-50 p-4">
            <TrendingUp className="h-6 w-6 text-brand-blue" />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                {project.stats.label}
              </p>
              <p className="text-lg font-black text-brand-navy">
                {project.stats.value}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      {/* ─── CTA ─────────────────────────────── */}
      {showCTA && (
        <CardFooter className="p-6 pt-0">
          <Button asChild className="btn-primary h-14 w-full text-base">
            <Link href={`/landing/${project.templateId}`}>
              View Template
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
