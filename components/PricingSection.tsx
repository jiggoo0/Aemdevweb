/** @format */
"use client"

import React, { memo } from "react"
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const PricingSection = () => {
  // จัดลำดับแผนการลงทุน: เอา Starter ขึ้นก่อน ตามด้วย Professional และ Maintenance
  const sortedPlans = [...siteConfig.pricingPlans].sort((a, b) => {
    const order = { starter: 1, professional: 2, maintenance: 3 }
    return (
      (order[a.id as keyof typeof order] || 99) -
      (order[b.id as keyof typeof order] || 99)
    )
  })

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="pricing"
    >
      {/* ─── Background Decor: Blueprint Grid ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── Header ─── */}
        <div className="mb-20 flex flex-col justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={14} className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Investment Plans
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
              เลือกระดับ <br className="hidden md:block" />
              <span className="text-[#1E3A8A]">การลงทุนที่คุ้มค่า</span>
            </h2>
          </div>
          <div className="hidden pb-2 lg:block">
            <p className="text-right text-sm font-bold uppercase leading-relaxed tracking-widest text-slate-400">
              Transparent Pricing <br />
              <span className="text-[#F97316]">No Hidden Fees</span>
            </p>
          </div>
        </div>

        {/* ─── Pricing Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sortedPlans.map((plan) => {
            const isStarter = plan.id === "starter"
            const isPro = plan.isRecommended // ตัว 12,900.-

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col border-2 p-8 transition-all duration-500",
                  isStarter || isPro
                    ? "z-10 scale-[1.02] border-[#1E3A8A] bg-white shadow-[12px_12px_0px_0px_#1E3A8A]"
                    : "border-slate-200 bg-slate-50 shadow-sm hover:border-[#1E3A8A]/50"
                )}
              >
                {/* Badge สำหรับแพ็กเกจยอดนิยม หรือ Flash Sale */}
                {isStarter && (
                  <div className="absolute -top-5 left-6 flex items-center gap-2 bg-[#F97316] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                    <Zap size={12} fill="currentColor" /> Flash Sale
                  </div>
                )}
                {isPro && (
                  <div className="absolute -top-5 left-6 bg-[#1E3A8A] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-8">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1E3A8A]">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400">฿</span>
                    <span className="text-5xl font-black tracking-tighter text-slate-900">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-sm font-bold text-slate-500">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-6 min-h-[3rem] text-sm font-medium leading-relaxed text-slate-500">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-10 flex-grow space-y-4 border-t-2 border-dashed border-slate-100 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center bg-[#F97316] text-white">
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold leading-tight text-slate-600 transition-colors group-hover/item:text-[#1E3A8A]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={cn(
                    "h-14 rounded-none text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95",
                    isStarter || isPro
                      ? "bg-[#1E3A8A] text-white hover:bg-[#F97316]"
                      : "border-2 border-[#1E3A8A] bg-transparent text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                  )}
                >
                  <Link
                    href={`${siteConfig.contact.lineUrl}?text=สนใจแพ็กเกจ%20${plan.name}`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* ─── Trust Footer ─── */}
        <div className="mt-20 grid grid-cols-1 gap-4 border-t-2 border-slate-100 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            "ระบบ SSL ปลอดภัยสูงสุด",
            "รองรับ SEO ติดหน้าแรก Google",
            "คู่มือการใช้งานแบบละเอียด",
            "ดูแลหลังการขายโดยวิศวกร",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 md:justify-start"
            >
              <div className="h-2 w-2 bg-[#F97316]" />
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1E3A8A]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(PricingSection)
