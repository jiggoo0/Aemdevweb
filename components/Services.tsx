/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { LayoutGrid, ArrowRight } from "lucide-react"
import { ServiceItem } from "@/types/services"
import { iconMap } from "@/components/iconMap"

interface ServicesProps {
  services: ServiceItem[]
}

export default function Services({ services }: ServicesProps) {
  // กรองเฉพาะบริการที่มีสถานะ READY
  const activeServices = services.filter(
    (s) => (s as any).status === "READY"
  )

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="services"
    >
      {/* Background Decor */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: 'url("/grid.svg")' }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-end justify-between gap-8 border-b-8 border-slate-900 pb-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl text-left">
            <div className="mb-4 inline-flex items-center gap-3 bg-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-white">
              <span className="h-2 w-2 animate-pulse bg-blue-500" />
              AEMDEVWEB / ECOSYSTEM_TRUST_PROTOCOL
            </div>
            <h2 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-7xl">
              Precision <br />
              <span className="text-blue-600">Templates.</span>
            </h2>
          </div>

          <Link
            href="/catalog"
            className="flex h-16 items-center border-4 border-slate-900 px-8 text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-900 hover:text-white"
          >
            <LayoutGrid className="mr-3 h-5 w-5" />
            Explore All Works
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            const Icon =
              (iconMap as any)[service.iconName] || iconMap.STARTER
            const hasPromo = !!(service as any).promoPrice

            return (
              <div
                key={service.id}
                className="group relative flex flex-col border-[3px] border-slate-900 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#2563eb]"
              >
                {/* Technical Bar */}
                <div className="flex items-center justify-between border-b-[3px] border-slate-900 bg-slate-50 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-slate-300" />
                    <div className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-400">
                    ARCH_TYPE // {(service as any).slug || "N/A"}
                  </span>
                </div>

                <div className="flex flex-grow flex-col p-8">
                  {hasPromo && (
                    <div className="mb-4 self-start bg-[#ff3e3e] px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-white">
                      Limited Offer // Active
                    </div>
                  )}

                  <div className="mb-6 flex items-end gap-4">
                    <div className="border-[3px] border-slate-900 bg-white p-4 text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-none">
                      <Icon size={32} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                        Module 0{service.id}
                      </span>
                      <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-8 line-clamp-2 text-sm font-bold italic leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <Link
                    href={`/${(service as any).slug || ""}`}
                    className="flex items-center justify-center gap-3 border-[3px] border-slate-900 bg-slate-900 py-4 text-sm font-black uppercase italic text-white transition-all hover:bg-blue-600"
                  >
                    Deploy Template
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}