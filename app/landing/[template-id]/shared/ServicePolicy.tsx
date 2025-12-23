/** @format */
import React from "react"
import { ShieldCheck, RefreshCcw, Truck } from "lucide-react"

interface PolicyProps {
  policies: Array<{
    title: string
    description: string
    iconType?: "shield" | "refresh" | "delivery"
  }>
}

export default function ServicePolicy({ policies }: PolicyProps) {
  if (!policies || policies.length === 0) return null

  const getIcon = (type?: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheck size={32} />
      case "refresh":
        return <RefreshCcw size={32} />
      case "delivery":
        return <Truck size={32} />
      default:
        return <ShieldCheck size={32} />
    }
  }

  return (
    <div className="grid gap-12 md:grid-cols-3">
      {policies.map((policy, index) => (
        <div key={index} className="group">
          <div className="mb-4 text-slate-900 transition-transform group-hover:scale-110">
            {getIcon(policy.iconType)}
          </div>
          <h4 className="mb-2 text-xl font-black uppercase tracking-tighter">
            {policy.title}
          </h4>
          <p className="font-medium leading-relaxed text-slate-500">
            {policy.description}
          </p>
        </div>
      ))}
    </div>
  )
}
