/** @format */

"use client"

import React, { useTransition } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 🛠️ [FIXED]: กำหนด Interface เพื่อรองรับ className จาก Parent Component
 * แก้ปัญหา TS2322: Property 'className' does not exist on type...
 */
interface TemplateSearchProps {
  placeholder?: string
  className?: string // ✅ เพิ่มเพื่อรองรับการจัดตำแหน่งจากหน้า Page
}

/**
 * 🔍 Template Search Specialist — "ระบบค้นหาอาวุธลับที่แม่นยำและรวดเร็ว"
 */
export const TemplateSearch = ({
  placeholder = "ค้นหาอาวุธลับ...",
  className,
}: TemplateSearchProps) => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  /**
   * ⚡ Search Logic: จัดการ URL Params แบบ Real-time
   */
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("q", term)
    } else {
      params.delete("q")
    }

    startTransition(() => {
      // ✅ ใช้ replace เพื่ออัปเดต URL โดยไม่สร้าง History ใหม่ที่ซ้ำซ้อน
      replace(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  return (
    <div className={cn("group relative w-full", className)}>
      {/* 🌌 Icon Indicator System */}
      <div className="absolute inset-y-0 left-5 flex items-center">
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
        ) : (
          <Search className="h-4 w-4 text-slate-500 transition-colors group-focus-within:text-emerald-500" />
        )}
      </div>

      {/* ⌨️ Specialist Input Field */}
      <input
        type="text"
        className={cn(
          "font-anuphan w-full rounded-full border border-white/5 bg-white/5 py-4 pr-6 pl-12",
          "text-sm text-white transition-all outline-none",
          "placeholder:text-slate-600",
          "focus:border-emerald-500/50 focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10",
          "selection:bg-emerald-500/30"
        )}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  )
}
