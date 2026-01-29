/** @format */

"use client"

import React from "react"
import Link from "next/link"
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Cpu,
  Globe,
  Activity,
  Wifi,
  Clock,
} from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { footerNavigation } from "@/constants/navigation"

/**
 * Footer Component - ศูนย์บัญชาการข้อมูลส่วนท้าย (System Terminal)
 * -------------------------------------------------------------------------
 * DNA: Professional & Sharp - ตรวจสอบความถูกต้องตาม SEO Report 2026
 * ยุทธศาสตร์: การเชื่อมโยงโครงสร้างข้อมูล (Link Equity) ให้สอดคล้องกับ Sitemap
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-24 pb-12">
      {/* เอฟเฟกต์รัศมีแสงเพื่อสร้างมิติความเหนือระดับ */}
      <div
        className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12 xl:gap-24">
          {/* [01]: IDENTITY HUB - อัตลักษณ์และความมุ่งมั่นของแบรนด์ */}
          <div className="lg:col-span-4 xl:col-span-5">
            <Link href="/" className="group inline-flex items-center">
              <span className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic">
                AEM<span className="text-emerald-600">DEV</span>WEB
                <span className="text-emerald-600 transition-opacity group-hover:opacity-40">
                  .
                </span>
              </span>
            </Link>

            <p className="font-body mt-8 max-w-sm text-lg leading-relaxed font-bold text-slate-500">
              {siteConfig.project.slogan} <br />
              <span className="text-slate-400">
                ยกระดับขีดความสามารถทางการแข่งขันด้วยระบบเว็บไซต์ประสิทธิภาพสูง
              </span>
            </p>

            <div className="mt-10">
              <a
                href={siteConfig.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-[2rem] bg-slate-950 px-10 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase italic shadow-2xl shadow-slate-950/20 transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
              >
                <MessageCircle size={20} fill="currentColor" />
                START CONSULTATION
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* [02]: STRATEGIC NAVIGATION - การเชื่อมโยงเส้นทางตามโครงสร้าง Sitemap */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-5 xl:col-span-4">
            {/* บริการหลักที่ผ่านการตรวจสอบ SEO mapping */}
            <div className="space-y-8">
              <h4 className="font-heading flex items-center gap-3 text-[11px] font-black tracking-[0.4em] text-slate-950 uppercase italic">
                <Cpu size={14} className="text-emerald-600" />
                Solutions
              </h4>
              <ul className="space-y-5">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group font-body flex items-center gap-3 text-sm font-bold text-slate-500 transition-colors hover:text-emerald-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-all group-hover:scale-150 group-hover:bg-emerald-600" />
                      {item.name}
                      {item.badge && (
                        <span className="rounded-lg bg-emerald-50 px-2 py-0.5 text-[8px] font-black tracking-widest text-emerald-600 uppercase">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ข้อมูลองค์กรและการติดต่อ */}
            <div className="space-y-8">
              <h4 className="font-heading flex items-center gap-3 text-[11px] font-black tracking-[0.4em] text-slate-950 uppercase italic">
                <Globe size={14} className="text-emerald-600" />
                Enterprise
              </h4>
              <ul className="space-y-5">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-body text-sm font-bold text-slate-500 transition-colors hover:text-slate-950"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* [03]: OPERATION HUB - รายงานสถานะความพร้อมของระบบ (Verified 2026) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading mb-8 flex items-center gap-3 text-[11px] font-black tracking-[0.4em] text-slate-950 uppercase italic">
              <Activity size={14} className="text-emerald-600" />
              Service Status
            </h4>

            <div className="rounded-[3rem] border border-slate-100 bg-slate-50/50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="mb-6 flex items-center gap-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-600" />
                </span>
                <span className="font-heading text-[11px] font-black tracking-widest text-slate-950 uppercase italic">
                  Systems Active
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                  <Wifi size={14} className="text-emerald-600/60" /> Remote
                  Support
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                  <Clock size={14} className="text-emerald-600/60" /> Response:
                  ~10 Mins
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span className="font-heading text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
                  Verified Specialist
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: TECHNOLOGY SPEC - การยืนยันประสิทธิภาพเชิงเทคนิคตาม Report */}
        <div className="mt-24 flex flex-col items-center justify-between gap-10 border-t border-slate-100 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="font-heading text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase italic">
              © {currentYear} {siteConfig.company.name}. ALL SYSTEMS
              OPERATIONAL.
            </p>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="font-heading flex items-center gap-3 text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-slate-950"
            >
              <Mail size={12} />
              {siteConfig.company.email}
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 transition-opacity hover:opacity-100">
              <Zap size={14} className="text-emerald-600" />
              <span className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase italic">
                Next.js 16.1
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
              Tailwind v4
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
