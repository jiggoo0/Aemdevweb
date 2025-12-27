/** @format */
import React from "react"
import { Server, Zap, ShieldCheck } from "lucide-react"

export const TechStackBadge = () => {
  const stacks = [
    { label: "Next.js 15", icon: Zap, color: "text-slate-900" },
    { label: "Supabase", icon: Server, color: "text-emerald-500" },
    { label: "Enterprise SEO", icon: ShieldCheck, color: "text-brand-blue" },
  ]

  return (
    <div className="flex flex-wrap gap-3 py-4">
      {stacks.map((stack, i) => (
        <div
          key={i}
          className="flex items-center gap-2 border-2 border-slate-900 bg-slate-50 px-3 py-1.5 shadow-[3px_3px_0px_0px_#0F172A] transition-transform hover:-translate-y-0.5"
        >
          <stack.icon size={14} className={stack.color} />
          <span className="font-mono text-[9px] font-black uppercase tracking-tighter text-slate-900">
            {stack.label}
          </span>
        </div>
      ))}
    </div>
  )
}
