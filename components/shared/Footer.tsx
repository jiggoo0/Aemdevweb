/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  ShieldCheck,
  ArrowUpRight,
  HardHat,
  Factory,
  Building2,
  Zap,
} from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { footerServicesNav, footerCompanyNav } from "@/constants/navigation"
import { cn } from "@/lib/utils"

/**
 * Footer Industrial Specialist Identity (v2026)
 * Refined Brand Identity Layer: Removed dark background frame from logo.
 * Engineered for trust acquisition among SME owners and industrial sectors.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-24 pb-12 antialiased selection:bg-emerald-500/10">
      {/* Industrial Background Branding using Specialist Zap Logo */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 opacity-[0.03]"
        aria-hidden="true"
      >
        <Zap size={450} fill="currentColor" className="text-[#020617]" />
      </div>

      {/* Blueprint Grid Pattern: Visualizing precision and engineering standards */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-center opacity-[0.2]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Target Audience Segment Recognition */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "SME", icon: Zap },
            { label: "Business Owner", icon: ShieldCheck },
            { label: "Enterprise", icon: Building2 },
            { label: "Industrial Factory", icon: Factory },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 rounded-2xl border border-slate-50 bg-slate-50/50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
            >
              <item.icon className="h-5 w-5 text-emerald-500 transition-transform group-hover:scale-110" />
              <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-[#020617] uppercase italic">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Column 1: Brand Authority Profile with Verified PNG Logo 
              REMOVED: bg-[#020617], shadow-2xl, shadow-emerald-500/10, group-hover:bg-emerald-600
          */}
          <div className="space-y-8 lg:col-span-4">
            <Link
              href="/"
              className="group flex items-center gap-4 select-none"
            >
              <div className="flex size-14 items-center justify-center rounded-[1.25rem] transition-all duration-500 group-hover:rotate-6">
                <Image
                  src="/images/logo-circuit.png"
                  alt={`${siteConfig.name} identity by ${siteConfig.expert}`}
                  width={48} // Adjusted for visual balance in transparent mode
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-prompt text-3xl leading-none font-black tracking-tighter text-[#020617] uppercase italic">
                  {siteConfig.shortName || "AEM"}
                  <span className="text-emerald-500">DEV</span>
                </span>
                <span className="font-prompt mt-1.5 text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Industrial Specialist
                </span>
              </div>
            </Link>

            <p className="font-anuphan max-w-sm text-base leading-relaxed font-bold text-slate-500">
              Leading digital architecture provider for{" "}
              <span className="text-[#020617]">SME Owners</span> and
              <span className="text-[#020617]"> Industrial Factories</span>
              focusing on stability and highest security standards.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase shadow-sm">
                <HardHat size={12} className="text-emerald-500" /> Industrial Standard
              </div>
            </div>
          </div>

          {/* Column 2: Solutions Navigation */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-emerald-500 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Solutions
            </h4>
            <ul className="space-y-5">
              {footerServicesNav?.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group font-anuphan flex items-center gap-2 text-sm font-bold text-slate-500 transition-all hover:translate-x-1 hover:text-emerald-600"
                  >
                    {service.name}
                    <ArrowUpRight
                      size={12}
                      className="-translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Resources */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Resources
            </h4>
            <ul className="space-y-5">
              {footerCompanyNav?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-anuphan text-sm font-bold transition-all",
                      item.disabled
                        ? "pointer-events-none text-slate-300"
                        : "text-slate-500 hover:translate-x-1 hover:text-[#020617]"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Strategic Consultation */}
          <div className="space-y-8 lg:col-span-4">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Consultation
            </h4>
            <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 p-8 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-5">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-emerald-600 shadow-sm transition-transform hover:scale-105">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                    Direct Access
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-prompt text-lg font-black text-[#020617] transition-colors hover:text-emerald-500"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Copyright Layer */}
        <div className="mt-28 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
          <div className="flex flex-col gap-3">
            <p className="font-anuphan text-center text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase italic md:text-left">
              © {currentYear} {siteConfig.companyName}. Engineered by {siteConfig.expert}.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <Link
              href="/privacy"
              className="font-prompt text-[11px] font-black tracking-[0.5em] text-slate-400 uppercase italic transition-all hover:text-emerald-600"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-prompt text-[11px] font-black tracking-[0.5em] text-slate-400 uppercase italic transition-all hover:text-emerald-600"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
