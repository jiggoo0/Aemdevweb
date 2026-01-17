/** @format */
"use client"

import React, { useState, useEffect, useTransition } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Search, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TemplateSearchProps {
  placeholder?: string
  className?: string
}

export default function TemplateSearch({
  placeholder = "ค้นหาเทมเพลต... (เช่น ร้านอาหาร, บริษัท)",
  className,
}: TemplateSearchProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [isPending, startTransition] = useTransition()

  // Initialize state once from URL
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("q")?.toString() || ""
  )

  // Sync logic: Only update URL when searchTerm changes (User types)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Check if current URL param is different to avoid redundant replace
      const currentQuery = searchParams.get("q") || ""

      if (searchTerm !== currentQuery) {
        startTransition(() => {
          const params = new URLSearchParams(searchParams)
          if (searchTerm) {
            params.set("q", searchTerm)
          } else {
            params.delete("q") // ✅ Syntax Fixed: Added closing quote
          }
          // ใช้ replace เพื่อไม่ให้ History บวม
          replace(`${pathname}?${params.toString()}`, { scroll: false })
        })
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, pathname, replace, searchParams])

  const handleClear = () => {
    setSearchTerm("")
    // Optional: Trigger URL clear immediately or let useEffect handle it
  }

  return (
    <div className={cn("group relative mx-auto w-full max-w-xl", className)}>
      {/* ... (Rest of JSX remains same) ... */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 blur transition duration-500 group-focus-within:opacity-100 group-hover:opacity-100" />

      <div className="relative flex items-center">
        <div className="absolute left-4 text-slate-500 transition-colors group-focus-within:text-emerald-400">
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-full border border-slate-800 bg-slate-950/80 py-3 pr-12 pl-12 text-sm text-slate-200 shadow-xl backdrop-blur-sm transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 rounded-full p-1 text-slate-500 transition-all hover:bg-slate-800 hover:text-white"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="pointer-events-none absolute right-4 hidden md:block">
          {!searchTerm && (
            <span className="rounded border border-slate-800 px-1.5 py-0.5 text-xs text-slate-600">
              Ctrl+K
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
