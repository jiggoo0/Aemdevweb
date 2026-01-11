/** @format */
"use client"

import React, { memo, useMemo } from "react"
import Link from "next/link"
import { LayoutGrid, ArrowRight, Sparkles, Zap } from "lucide-react"
import { ServiceItem } from "@/types/services"
import { iconMap, type IconKey } from "@/components/iconMap"
import { cn } from "@/lib/utils"

interface ServicesProps {
  services: ServiceItem[]
}

const Services = ({ services }: ServicesProps) => {
  // ✅ กรองเฉพาะบริการที่พร้อมใช้งาน (READY)
  const activeServices = useMemo(
    () => services.filter((s) => s.status === "READY"),
    [services]
  )

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="services"
    >
      {/* ─── 1. Background Decor (Blueprint Style Grid) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── 2. Section Header: Industrial Border ─── */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-l-[12px] border-[#1E3A8A] pl-8 lg:flex-row lg:items-end lg:pb-4">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={12} className="animate-pulse text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Service Modules v2.1
              </span>
            </div>
            <h2 className="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-6xl">
              โซลูชัน <br />
              <span className="text-[#1E3A8A]">สถาปัตยกรรมดิจิทัล</span>
            </h2>
          </div>

          <Link
            href="/catalog"
            className="group flex items-center gap-3 border-4 border-slate-900 bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95"
          >
            <LayoutGrid className="h-5 w-5" />
            เปิดดู Catalog
          </Link>
        </div>

        {/* ─── 3. Service Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            const iconKey = service.iconName as IconKey
            const Icon = iconMap[iconKey] || iconMap.STARTER
            const hasPromo = !!service.promoPrice
            const isPopular = service.isPopular

            return (
              <article
                key={service.id}
                className={cn(
                  "group relative flex flex-col border-[4px] border-slate-900 transition-all duration-500 hover:-translate-y-2",
                  hasPromo
                    ? "bg-white shadow-[12px_12px_0px_0px_#F97316]"
                    : isPopular
                      ? "bg-white shadow-[12px_12px_0px_0px_#1E3A8A]"
                      : "bg-slate-50 shadow-[12px_12px_0px_0px_#cbd5e1] hover:bg-white hover:shadow-[12px_12px_0px_0px_#1E3A8A]"
                )}
              >
                {/* ID Tag & Badge System */}
                <div className="flex items-center justify-between border-b-4 border-slate-900 bg-inherit px-6 py-3">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
                    ID_MOD: {service.slug?.toUpperCase()}
                  </span>
                  <div className="flex gap-2">
                    {hasPromo && (
                      <span className="flex items-center gap-1 bg-[#F97316] px-2 py-0.5 text-[9px] font-black uppercase text-white">
                        <Zap size={10} fill="currentColor" /> Promo
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
                  {/* Icon Frame */}
                  <div
                    className={cn(
                      "mb-8 inline-flex h-16 w-16 items-center justify-center border-4 border-slate-900 transition-all duration-500 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:shadow-[4px_4px_0px_0px_#F97316]",
                      hasPromo ? "text-[#F97316]" : "text-[#1E3A8A]"
                    )}
                  >
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  {/* Title & Price Analysis */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-3xl font-black uppercase italic leading-none tracking-tighter text-slate-900 group-hover:text-[#1E3A8A]">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {hasPromo ? (
                        <>
                          <span className="text-3xl font-black text-[#F97316]">
                            ฿{Number(service.promoPrice).toLocaleString()}
                          </span>
                          <span className="text-sm font-bold text-slate-300 line-through">
                            ฿{Number(service.price).toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-bold uppercase text-slate-400">
                          งบประมาณ{" "}
                          <span className="text-2xl text-[#1E3A8A]">
                            ฿{Number(service.price).toLocaleString()}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Breakdown */}
                  <ul className="mb-10 space-y-3 border-t-2 border-dashed border-slate-200 pt-6">
                    {service.features?.slice(0, 4).map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[11px] font-bold uppercase tracking-tight text-slate-600"
                      >
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#1E3A8A]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Action Trigger */}
                  <Link
                    href={`/catalog?type=${service.slug}`}
                    className={cn(
                      "mt-auto flex items-center justify-center gap-3 border-4 border-slate-900 py-4 text-xs font-black uppercase tracking-widest text-white transition-all active:scale-95",
                      hasPromo
                        ? "bg-[#F97316] hover:bg-[#1E3A8A]"
                        : "bg-[#1E3A8A] hover:bg-[#F97316]"
                    )}
                  >
                    ดูรายละเอียดโมดูล
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
