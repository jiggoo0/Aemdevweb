/** @format */
"use client"

import React, { memo, useMemo } from "react"
import Link from "next/link"
import { LayoutGrid, ArrowRight, Sparkles, Zap } from "lucide-react"
import { ServiceItem } from "@/types/services"
import { iconMap, type IconKey } from "@/components/iconMap" // ✅ นำเข้า Type ที่ถูกต้อง
import { cn } from "@/lib/utils"

interface ServicesProps {
  services: ServiceItem[]
}

const Services = ({ services }: ServicesProps) => {
  // ✅ 1. ใช้ useMemo เพื่อป้องกันการ Filter ใหม่ทุกครั้งที่ Render
  const activeServices = useMemo(
    () => services.filter((s) => s.status === "READY"),
    [services]
  )

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="services"
    >
      {/* ─── 1. Background Decor (Blueprint Style) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── 2. Section Header ─── */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-l-[12px] border-[#1E3A8A] pl-8 lg:flex-row lg:items-end lg:pb-4">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={12} className="animate-pulse text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Service Modules
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-6xl">
              โซลูชัน <br />
              <span className="text-[#1E3A8A]">ที่ออกแบบเพื่อธุรกิจคุณ</span>
            </h2>
          </div>

          <Link
            href="/catalog"
            className="group flex items-center gap-3 border-2 border-[#1E3A8A] bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1E3A8A] transition-all hover:bg-[#1E3A8A] hover:text-white active:scale-95"
          >
            <LayoutGrid className="h-5 w-5" />
            ดูผลงานทั้งหมด
          </Link>
        </div>

        {/* ─── 3. Service Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            // ✅ 2. Type-Safe Icon Selection
            const iconKey = service.iconName as IconKey
            const Icon = iconMap[iconKey] || iconMap.STARTER
            const hasPromo = !!service.promoPrice
            const isPopular = service.isPopular

            return (
              <article
                key={service.id}
                className={cn(
                  "group relative flex flex-col border-2 transition-all duration-500 hover:-translate-y-2",
                  hasPromo
                    ? "border-[#F97316] bg-white shadow-[12px_12px_0px_0px_#F97316]"
                    : isPopular
                      ? "border-[#1E3A8A] bg-white shadow-[12px_12px_0px_0px_#1E3A8A]"
                      : "border-slate-200 bg-slate-50 hover:border-[#1E3A8A] hover:bg-white hover:shadow-[12px_12px_0px_0px_rgba(30,58,138,0.1)]"
                )}
              >
                {/* Module Label & Badges */}
                <div className="flex items-center justify-between border-b-2 border-inherit bg-inherit px-6 py-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    ID: {service.id.toString().padStart(2, "0")} /{" "}
                    {service.slug}
                  </span>
                  <div className="flex gap-2">
                    {hasPromo && (
                      <span className="flex items-center gap-1 bg-[#F97316] px-2 py-0.5 text-[9px] font-black uppercase text-white">
                        <Zap size={10} fill="currentColor" /> Best Value
                      </span>
                    )}
                    {isPopular && (
                      <span className="bg-[#1E3A8A] px-2 py-0.5 text-[9px] font-black uppercase text-white">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-8">
                  {/* Icon Box */}
                  <div
                    className={cn(
                      "mb-8 inline-flex h-16 w-16 items-center justify-center border-2 transition-all duration-500 group-hover:shadow-[4px_4px_0px_0px_#F97316]",
                      hasPromo
                        ? "border-[#F97316] text-[#F97316]"
                        : "border-[#1E3A8A] text-[#1E3A8A]",
                      "group-hover:border-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white"
                    )}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Title & Price */}
                  <div className="mb-4">
                    <h3 className="mb-1 text-2xl font-black uppercase tracking-tighter text-slate-900">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {hasPromo ? (
                        <>
                          <span className="text-2xl font-black text-[#F97316]">
                            ฿{service.promoPrice}
                          </span>
                          <span className="text-sm font-bold text-slate-300 line-through">
                            ฿{service.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-bold uppercase text-slate-500">
                          เริ่มต้น{" "}
                          <span className="text-lg text-[#1E3A8A]">
                            ฿{service.price}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-8 line-clamp-3 text-sm font-medium leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mb-10 space-y-3 border-t-2 border-dashed border-slate-100 pt-6">
                    {service.features?.slice(0, 3).map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-slate-600"
                      >
                        <div
                          className={cn(
                            "h-1.5 w-1.5",
                            hasPromo ? "bg-[#F97316]" : "bg-[#1E3A8A]"
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Link
                    href={`/catalog?type=${service.slug}`}
                    className={cn(
                      "mt-auto flex items-center justify-center gap-3 py-4 text-xs font-black uppercase tracking-widest text-white transition-all active:scale-95",
                      hasPromo
                        ? "bg-[#F97316] hover:bg-[#1E3A8A]"
                        : "bg-[#1E3A8A] hover:bg-[#F97316]"
                    )}
                  >
                    ดูรายละเอียด
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
