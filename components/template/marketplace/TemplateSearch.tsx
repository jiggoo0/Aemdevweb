/** @format */
"use client"
import React, { useTransition } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Search, Loader2 } from "lucide-react"

export const TemplateSearch = ({
  placeholder = "ค้นหาอาวุธลับ...",
}: {
  placeholder?: string
}) => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) params.set("q", term)
    else params.delete("q")

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <div className="group relative w-full max-w-md">
      <div className="absolute inset-y-0 left-5 flex items-center">
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
        ) : (
          <Search className="h-4 w-4 text-slate-500 transition-colors group-focus-within:text-emerald-500" />
        )}
      </div>
      <input
        type="text"
        className="font-anuphan w-full rounded-full border border-white/5 bg-white/5 py-4 pr-6 pl-12 text-sm text-white transition-all placeholder:text-slate-600 focus:border-emerald-500/50 focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  )
}
