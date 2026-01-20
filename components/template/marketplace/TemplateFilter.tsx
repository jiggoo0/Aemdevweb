/** @format */
"use client"
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const TemplateFilter = ({
  activeCategory,
}: {
  activeCategory: string
}) => {
  const categories = [
    { name: "All", slug: "all", href: "/templates" },
    { name: "Booking", slug: "booking", href: "/templates/booking" },
    { name: "E-Commerce", slug: "e-commerce", href: "/templates/e-commerce" },
    { name: "Service", slug: "service", href: "/templates/service" },
    { name: "Landing", slug: "landing-page", href: "/templates/landing-page" },
  ]

  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((cat) => {
        const isActive = activeCategory.toLowerCase() === cat.slug.toLowerCase()
        return (
          <Link
            key={cat.slug}
            href={cat.href}
            className={cn(
              "rounded-full border px-6 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all",
              isActive
                ? "border-emerald-500 bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "border-white/5 bg-white/5 text-slate-500 hover:border-white/20 hover:text-white"
            )}
          >
            {cat.name}
          </Link>
        )
      })}
    </div>
  )
}
