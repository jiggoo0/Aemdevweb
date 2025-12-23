/** @format */
import React from "react"
import { CheckSquare } from "lucide-react"

interface InclusionProps {
  items: string[]
  primaryColor?: string
}

export default function ServiceInclusionSection({
  items,
  primaryColor = "#000",
}: InclusionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="grid gap-4 border-4 border-slate-900 bg-slate-50 p-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckSquare size={20} style={{ color: primaryColor }} />
          <span className="font-bold uppercase tracking-tight text-slate-900">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}
