/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PROFESSIONAL FOOTER
// Identity: Stable Grid Architecture, Industrial Design
// Accessibility: Direct Thai Communication
// ----------------------------------------------------

"use client"

import React from "react"
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react"

interface FooterProps {
  contact?: {
    lineId: string
    phone: string
    facebook?: string
    email: string
  }
}

export default function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl">
        {/* MAIN_FOOTER_GRID: ระบบตารางที่แข็งแรง */}
        <div className="grid grid-cols-1 gap-0 border-x border-slate-800 md:grid-cols-12">
          {/* 1. BRAND & VISION: ความน่าเชื่อถือในแวบแรก */}
          <div className="border-b border-slate-800 p-10 transition-colors hover:bg-slate-800/20 md:col-span-5 md:border-r md:p-16">
            <div className="mb-8 flex select-none items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-blue-600 font-black italic text-white">
                A
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                AEMDEVWEB<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="mb-8 max-w-sm text-lg font-medium leading-relaxed text-slate-400">
              เราเปลี่ยนเทคโนโลยีที่ซับซ้อน ให้กลายเป็นเครื่องมือที่ใช้งานง่าย
              เพื่อขับเคลื่อนธุรกิจของคุณสู่มาตรฐานสากลด้วยระบบที่แม่นยำที่สุด
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 border border-slate-700 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                <ShieldCheck size={12} /> System_v1.0
              </div>
              <div className="flex items-center gap-2 border border-slate-700 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Verified_Production
              </div>
            </div>
          </div>

          {/* 2. CONTACT_CHANNELS: ช่องทางที่เข้าถึงง่ายที่สุด */}
          <div className="border-b border-slate-800 bg-slate-900/50 p-10 md:col-span-4 md:border-r md:p-16">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
              Direct_Communication
            </span>
            <ul className="space-y-6">
              <li>
                <a
                  href={`tel:${contact?.phone}`}
                  className="group flex items-center justify-between transition-all duration-300 hover:text-blue-400"
                >
                  <div className="flex items-center gap-4">
                    <Phone
                      size={18}
                      className="text-slate-600 group-hover:text-blue-400"
                    />
                    <span className="font-bold tracking-tight">
                      {contact?.phone || "08x-xxx-xxxx"}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`https://line.me/ti/p/${contact?.lineId}`}
                  className="group flex items-center justify-between transition-all duration-300 hover:text-green-400"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle
                      size={18}
                      className="text-slate-600 group-hover:text-green-400"
                    />
                    <span className="font-bold italic">
                      LINE: {contact?.lineId || "@aemdev"}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact?.email}`}
                  className="group flex items-center justify-between transition-all duration-300 hover:text-blue-400"
                >
                  <div className="flex items-center gap-4">
                    <Mail
                      size={18}
                      className="text-slate-600 group-hover:text-blue-400"
                    />
                    <span className="font-bold tracking-tight">
                      {contact?.email || "contact@aemdevweb.com"}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* 3. OPERATIONAL: เวลาทำการและความใส่ใจ */}
          <div className="border-b border-slate-800 bg-slate-900 p-10 md:col-span-3 md:p-16">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Operational_Hours
            </span>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  Mon - Fri
                </p>
                <p className="font-bold text-slate-200">09:00 - 18:00 น.</p>
              </div>
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  Sat - Sun
                </p>
                <p className="font-bold italic leading-relaxed text-slate-500">
                  สอบถามทิ้งไว้ จะมีเจ้าหน้าที่ตอบกลับโดยเร็วที่สุด
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM_BAR: ลิขสิทธิ์และสถานะเซิร์ฟเวอร์ */}
        <div className="flex flex-col items-center justify-between border-x border-slate-800 px-10 py-8 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 md:flex-row">
          <p className="text-center md:text-left">
            © {currentYear} AEMDEVWEB_SYSTEMS // ALL_RIGHTS_RESERVED
          </p>
          <div className="mt-6 flex items-center gap-6 md:mt-0">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Server_Status: Optimal
            </span>
            <span className="hidden opacity-50 sm:inline">|</span>
            <span>Made_in_Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
