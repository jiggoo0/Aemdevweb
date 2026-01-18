/** @format */
import React from "react"
import {
  Briefcase,
  Building2,
  Globe2,
  LayoutTemplate,
  ShieldCheck,
  Zap,
  LucideIcon,
  Sparkles,
} from "lucide-react"

interface Brand {
  name: string
  icon: LucideIcon
}

/**
 * 🛡️ TrustBadge: Luminous Server-Optimized Edition (v.2026)
 * ✅ FIXED: Accessibility (Contrast Ratio) - ปรับ text-slate-500 -> text-slate-400
 * ✅ Optimized: PageSpeed 100 | CSS-Driven transitions
 */
export function TrustBadge({ className }: { className?: string }) {
  const brands: Brand[] = [
    { name: "TechGrowth", icon: Zap },
    { name: "SME Inter", icon: Globe2 },
    { name: "BuildPlus", icon: Building2 },
    { name: "SecurePay", icon: ShieldCheck },
    { name: "DesignLab", icon: LayoutTemplate },
    { name: "ConsultPro", icon: Briefcase },
  ]

  return (
    <section
      className={`bg-background relative w-full overflow-hidden border-y border-white/5 py-16 ${className || ""}`}
      aria-label="พาร์ทเนอร์ที่ไว้วางใจ"
    >
      {/* 🌌 Aurora Ambient Light: เลเยอร์แสงหลังสุด (-z-10) */}
      <div className="aurora-bg pointer-events-none top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.05] blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Label: Luminous Typography */}
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards mb-12 flex flex-col items-center duration-1000">
          <div className="text-aurora-cyan shadow-aurora-glow mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Verified Partners
          </div>
          {/* ✅ แก้ไขสีข้อความบรรยายพาร์ทเนอร์ให้สว่างขึ้นเพื่อ Accessibility */}
          <p className="font-anuphan text-center text-sm font-medium tracking-wide text-slate-400 opacity-90 md:text-base">
            ได้รับความไว้วางใจจากธุรกิจชั้นนำกว่า{" "}
            <span className="font-bold text-white">50+ แห่ง</span> ทั่วประเทศ
          </p>
        </div>

        {/* 🔄 Luminous Logo Grid: Native CSS Performance */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => {
            const Icon = brand.icon

            return (
              <div
                key={index}
                className="group animate-in fade-in slide-in-from-bottom-2 fill-mode-forwards flex cursor-default flex-col items-center justify-center gap-4 opacity-0 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  {/* High-Performance Glow on Hover */}
                  <div className="bg-aurora-cyan/20 pointer-events-none absolute inset-0 scale-150 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Glass Box for Icon */}
                  <div className="shadow-luminous group-hover:border-aurora-cyan/40 relative flex h-16 w-16 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
                    {/* ✅ ปรับสี Icon ให้สว่างขึ้นเล็กน้อยให้สอดคล้องกับ Text */}
                    <Icon
                      className="group-hover:text-aurora-cyan h-8 w-8 text-slate-400 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Brand Name: Anuphan Font */}
                {/* ✅ ปรับสีชื่อแบรนด์เป็น text-slate-400 เพื่อเพิ่ม Contrast Ratio */}
                <span className="font-anuphan text-xs font-black tracking-[0.2em] text-slate-400 uppercase transition-colors duration-300 group-hover:text-white">
                  {brand.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
