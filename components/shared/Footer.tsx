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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-24 pb-12 antialiased selection:bg-emerald-500/10">
      {/* ส่วนตกแต่งพื้นหลังระดับลึก */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 opacity-[0.03]"
        aria-hidden="true"
      >
        <Zap size={450} fill="currentColor" className="text-[#020617]" />
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-center opacity-[0.2]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* ส่วนแสดงกลุ่มธุรกิจที่รองรับ */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "SME Business", icon: Zap },
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
          {/* ส่วนข้อมูลเจ้าของเว็บไซต์: แก้ไขจุดเรียกชื่อย่อโครงการ */}
          <div className="space-y-8 lg:col-span-4">
            <Link
              href="/"
              className="group flex items-center gap-4 select-none"
            >
              <div className="flex size-14 items-center justify-center rounded-[1.25rem] transition-all duration-500 group-hover:rotate-6">
                <Image
                  src="/images/logo-circuit.png"
                  alt={`ข้อมูลโดย ${siteConfig.expert.name}`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-prompt text-3xl leading-none font-black tracking-tighter text-[#020617] uppercase italic">
                  {siteConfig.project.shortName}
                  <span className="text-emerald-500">DEV</span>
                </span>
                <span className="font-prompt mt-1.5 text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Industrial Area Specialist
                </span>
              </div>
            </Link>

            <p className="font-anuphan max-w-sm text-base leading-relaxed font-bold text-slate-500">
              {siteConfig.project.description}
            </p>

            <div className="wrap flex gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase shadow-sm">
                <HardHat size={12} className="text-emerald-500" /> Industrial
                Standard
              </div>
            </div>
          </div>

          {/* ส่วนรายการบริการ */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-emerald-500 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Services
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

          {/* ส่วนข้อมูลบริษัท */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Company
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

          {/* ช่องทางการติดต่อ: แก้ไขจุดเรียก Email */}
          <div className="space-y-8 lg:col-span-4">
            <h4 className="font-prompt border-l-4 border-slate-200 pl-4 text-[11px] font-black tracking-[0.4em] text-[#020617] uppercase italic">
              Contact
            </h4>
            <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 p-8 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-5">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-emerald-600 shadow-sm transition-transform hover:scale-105">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                    Email Support
                  </span>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="font-prompt text-lg font-black text-[#020617] transition-colors hover:text-emerald-500"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ส่วนท้าย: แก้ไขชื่อบริษัทและชื่อผู้เชี่ยวชาญ */}
        <div className="mt-28 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
          <p className="font-anuphan text-center text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase italic md:text-left">
            © {currentYear} {siteConfig.company.fullName}. จัดการโดย{" "}
            {siteConfig.expert.name}.
          </p>
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
