/** @format */
"use client"

import React from "react"
// ✅ Fixed: Removed unused 'cn' and 'Zap' imports to clear ESLint errors
import {
  Building2,
  Coffee,
  ShoppingBag,
  Utensils,
  Wrench,
  Briefcase,
  Gem,
  Cpu,
  Sparkles,
} from "lucide-react"

const clients = [
  { id: 1, name: "Siam Cafe", icon: Coffee, category: "F&B" },
  { id: 2, name: "Tech Build", icon: Cpu, category: "Tech" },
  { id: 3, name: "Grand Home", icon: Building2, category: "Real Estate" },
  { id: 4, name: "Yummy Box", icon: Utensils, category: "Delivery" },
  { id: 5, name: "Fix It All", icon: Wrench, category: "Service" },
  { id: 6, name: "Fashionista", icon: ShoppingBag, category: "Ecommerce" },
  { id: 7, name: "Glow Spa", icon: Gem, category: "Beauty" },
  { id: 8, name: "Biz Corp", icon: Briefcase, category: "Corporate" },
]

/**
 * 🎡 SocialProofBanner: Luminous Marquee Edition
 * จัดการส่วนแสดงโลโก้ลูกค้าให้ดูพรีเมียม สว่าง และไม่หมอง
 */
export const SocialProofBanner = () => {
  return (
    <section className="bg-background relative w-full overflow-hidden border-y border-white/5 py-16">
      {/* 🌌 Aurora Ambient Light */}
      <div className="aurora-bg top-1/2 left-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title: Humanistic Friendly Typography */}
        <div className="mb-12 flex flex-col items-center">
          <div className="text-aurora-cyan shadow-aurora-glow mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Global Trust
          </div>
          <p className="font-anuphan text-center text-lg font-medium text-slate-400 opacity-80 md:text-xl">
            ได้รับความไว้วางใจจาก SME ไทยกว่า{" "}
            <span className="border-aurora-emerald/40 border-b-2 font-black text-white">
              100+ ธุรกิจ
            </span>
          </p>
        </div>

        {/* Marquee Container with Masking */}
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Logo Tracks */}
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16 md:gap-24">
            {clients.map((client) => (
              <LogoItem key={client.id} client={client} />
            ))}
          </div>

          <div
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16 md:gap-24"
            aria-hidden="true"
          >
            {clients.map((client) => (
              <LogoItem key={`dup-${client.id}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const LogoItem = ({ client }: { client: (typeof clients)[0] }) => (
  <div className="group flex cursor-pointer flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
    {/* Icon Placeholder with Luminous Glass Style */}
    <div className="group-hover:text-aurora-cyan group-hover:bg-aurora-cyan/10 group-hover:border-aurora-cyan/30 group-hover:shadow-aurora-glow flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500 backdrop-blur-sm transition-all duration-500">
      <client.icon className="h-7 w-7 transition-transform group-hover:scale-110" />
    </div>

    {/* Client Name: Anuphan Font */}
    <span className="font-anuphan text-xs font-black tracking-widest text-slate-500 uppercase transition-colors group-hover:text-white">
      {client.name}
    </span>
  </div>
)

export default SocialProofBanner
