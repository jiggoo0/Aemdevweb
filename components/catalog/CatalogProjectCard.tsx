/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Project } from "@/data/types"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean // ✅ เก็บไว้ใช้ในอนาคตได้ แต่ต้องจัดการในโค้ดให้ถูกต้อง
}

export function CatalogProjectCard({
  project,
  showCTA = true, // ✅ กำหนด Default value
}: CatalogProjectCardProps) {
  return (
    <div className="group relative flex flex-col border-4 border-slate-900 bg-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[15px_15px_0px_0px_#2563eb]">
      {/* 🖼️ IMAGE SECTION */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-slate-900 bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/40 group-hover:opacity-100">
          <Link
            href={`/${project.templateId}`}
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-slate-900"
          >
            Live Preview <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* 📝 CONTENT SECTION */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <span className="bg-slate-900 px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white">
            {project.category}
          </span>
          <span className="font-mono text-[10px] font-bold text-slate-400">
            REF: {project.id.split("-").pop()?.toUpperCase()}
          </span>
        </div>

        <h3 className="mb-3 text-2xl font-black uppercase italic leading-tight tracking-tighter text-slate-900">
          {project.title}
        </h3>

        <p className="mb-6 line-clamp-2 text-sm font-bold leading-relaxed text-slate-500">
          {project.description}
        </p>

        {/* STATS / TAGS */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-col">
            {/* ✅ FIX: ใช้ Optional Chaining ป้องกันค่า stats เป็น undefined */}
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              {project.stats?.label || "Type"}
            </span>
            <span className="text-sm font-black text-blue-600">
              {project.stats?.value || "Standard"}
            </span>
          </div>

          {/* ✅ ใช้งาน showCTA เพื่อแก้ปัญหา Unused Variable */}
          {showCTA && (
            <Link
              href={`/${project.templateId}`}
              className="flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-white transition-colors hover:bg-slate-900 hover:text-white"
            >
              <ArrowUpRight size={20} strokeWidth={3} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
