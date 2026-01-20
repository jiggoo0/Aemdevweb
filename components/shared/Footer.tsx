/** @format */

"use client"

import React from "react"
import Link from "next/link"
import {
  Zap,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Globe,
  HardHat,
  Factory,
  Building2,
} from "lucide-react"

// 📂 Logic & Config Architecture
import { siteConfig } from "@/constants/site-config"
import { footerServicesNav, footerCompanyNav } from "@/constants/navigation"
import { cn } from "@/lib/utils"

/**
 * 🏗️ Footer Industrial Specialist Identity (v2026)
 * [FIXED]: ใช้งานตัวแปร currentYear เพื่อแก้ปัญหา ESLint Unused Variable
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-24 pb-12 antialiased selection:bg-emerald-500/10">
      {/* 🧩 1. Industrial Background Branding */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 opacity-[0.03]"
        aria-hidden="true"
      >
        <Zap size={450} fill="currentColor" className="text-[#0F172A]" />
      </div>

      {/* 📐 Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-center opacity-[0.2]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* 🏢 Top Tier: Target Audience Acknowledgement */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "SME", icon: Zap },
            { label: "เจ้าของกิจการ", icon: ShieldCheck },
            { label: "บริษัท & หจก.", icon: Building2 },
            { label: "โรงงานอุตสาหกรรม", icon: Factory },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-colors hover:bg-white"
            >
              <item.icon className="h-5 w-5 text-emerald-500" />
              <span className="font-prompt text-[10px] font-black tracking-widest text-[#0F172A] uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* 🏛️ Column 1: Brand Authority Profile */}
          <div className="space-y-8 lg:col-span-4">
            <Link
              href="/"
              className="group flex items-center gap-3 select-none"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0F172A] text-emerald-400 shadow-2xl shadow-emerald-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:bg-emerald-600">
                <Zap size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-prompt text-2xl leading-none font-black tracking-tighter text-[#0F172A] uppercase italic">
                  {siteConfig.shortName || "AEM"}
                  <span className="text-emerald-500">DEV</span>
                </span>
                <span className="font-prompt mt-1 text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Industrial Specialist
                </span>
              </div>
            </Link>

            <p className="font-anuphan max-w-sm text-base leading-relaxed font-bold text-slate-500">
              ผู้นำการวางสถาปัตยกรรมดิจิทัลสำหรับ **เจ้าของกิจการ** และ
              **โรงงานอุตสาหกรรม**
              เราสร้างเว็บไซต์ที่เน้นความเร็วและความปลอดภัยระดับสูงสุด
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2 text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase shadow-sm">
                <HardHat size={12} /> Industrial Standard
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2 text-[9px] font-black tracking-[0.2em] text-emerald-600 uppercase shadow-sm">
                <Globe size={12} /> Global Scalability
              </div>
            </div>
          </div>

          {/* 🛠️ Column 2: Solutions */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-emerald-500 pl-4 text-[11px] font-black tracking-[0.4em] text-[#0F172A] uppercase italic">
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

          {/* 📚 Column 3: Corporate & Resources */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#0F172A] uppercase italic">
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
                        : "text-slate-500 hover:translate-x-1 hover:text-[#0F172A]"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="group font-anuphan flex items-center gap-2 text-sm font-bold text-slate-500 transition-all hover:text-emerald-600"
                >
                  Careers
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8px] font-black text-emerald-600 uppercase ring-1 ring-emerald-600/20 ring-inset">
                    Hiring
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 📞 Column 4: Consultation */}
          <div className="space-y-8 lg:col-span-4">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#0F172A] uppercase italic">
              Get Started
            </h4>
            <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-emerald-600 shadow-sm">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
                    Official Channel
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-prompt text-base font-black text-[#0F172A] transition-colors hover:text-emerald-500"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📜 Bottom Compliance Layer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
          <div className="flex flex-col gap-3">
            <p className="font-anuphan text-center text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase md:text-left">
              © {currentYear} {siteConfig.companyName}. Build for Enterprise
              results.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="font-prompt text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-600"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-prompt text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-600"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
