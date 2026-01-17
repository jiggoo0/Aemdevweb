/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CategoryInfo } from "@/constants/templates-data"

interface TemplateFilterProps {
  categories?: CategoryInfo[]
  activeCategory: string
  themeColor?: string // เพิ่มเพื่อรับค่าสีจากหมวดหมู่ที่เลือก
}

// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา 'TemplateFilter' is not exported
export function TemplateFilter({
  categories = [],
  activeCategory,
  themeColor = "emerald",
}: TemplateFilterProps) {
  return (
    <div className="pointer-events-none w-full">
      <div className="container mx-auto px-4">
        {/* pointer-events-auto: เฉพาะส่วนที่โต้ตอบได้ */}
        <div className="pointer-events-auto flex items-center justify-center">
          <div className="no-scrollbar flex max-w-full gap-2 overflow-x-auto rounded-full border border-slate-800 bg-slate-900/80 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {/* 🔄 Map Categories */}
            {categories.map((category) => {
              const isActive = activeCategory === category.slug

              // หากหมวดหมู่มีสีประจำตัว ให้ใช้สีนั้น (หรือใช้ค่าเริ่มต้นจาก Props)
              const currentColor = isActive
                ? category.themeColor || themeColor
                : "slate"

              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={cn(
                    "rounded-full px-6 py-2 text-sm font-bold whitespace-nowrap transition-all duration-500",
                    isActive
                      ? `bg-${currentColor}-600 text-white shadow-lg shadow-${currentColor}-500/20`
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                  )}
                >
                  {category.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
