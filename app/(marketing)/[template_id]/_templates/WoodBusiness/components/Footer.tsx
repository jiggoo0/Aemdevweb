/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FOOTER (SUKHOTHAI EDITION)
// Identity: Stable Local Enterprise (ความมั่นคงและที่ตั้งที่ชัดเจน)
// ----------------------------------------------------

"use client"

import React from "react"
import { Phone, MessageCircle, MapPin, ShieldCheck, Clock } from "lucide-react"

interface FooterProps {
  themeColor?: string
  contact?: {
    lineId?: string
    phone?: string
    mobile?: string
    facebook?: string
    email?: string
    address?: string
    workingHours?: string
  }
}

export default function Footer({
  themeColor = "#7B3F00",
  contact,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  // จัดการข้อมูลเบอร์โทรศัพท์ (เลือก Mobile เป็นลำดับแรก)
  const displayPhone = contact?.mobile || contact?.phone || "055-xxx-xxx"
  const cleanLineId = contact?.lineId?.replace("@", "")

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl">
        {/* MAIN_FOOTER_GRID: ระบบตารางที่แข็งแรงสไตล์โรงงานไม้ */}
        <div className="grid grid-cols-1 gap-0 border-x border-slate-800 md:grid-cols-12">
          {/* 1. BRAND & IDENTITY: ยืนยันตัวตนคนพื้นที่ */}
          <div className="border-b border-slate-800 p-10 transition-colors hover:bg-slate-900/50 md:col-span-5 md:border-r md:p-16">
            <div className="mb-8 flex select-none items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center font-black italic text-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]"
                style={{ backgroundColor: themeColor }}
              >
                ST
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black uppercase tracking-tighter">
                  สุโขทัยค้าไม้
                </span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Sukhothai_Timber
                </span>
              </div>
            </div>

            <p className="mb-10 max-w-sm text-sm font-medium leading-relaxed text-slate-400">
              โรงไม้แปรรูปมาตรฐานเมืองเก่า คัดเกรดไม้ด้วยความชำนาญกว่า 25 ปี
              บริการส่งด่วนถึงหน้างานทั่วจังหวัดสุโขทัย
              เพื่อความแข็งแรงของทุกสิ่งปลูกสร้าง
            </p>

            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <ShieldCheck size={14} style={{ color: themeColor }} />
              Verified_Sukhothai_Business_System
            </div>
          </div>

          {/* 2. CONTACT_INFO: ข้อมูลติดต่อที่ชัดเจน */}
          <div className="border-b border-slate-800 p-10 md:col-span-4 md:border-r md:p-16">
            <h4
              className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: themeColor }}
            >
              Connect_Directly
            </h4>
            <div className="space-y-6">
              <a
                href={`tel:${displayPhone}`}
                className="group flex items-center gap-4 transition-colors hover:opacity-80"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-800 bg-slate-900 group-hover:border-slate-600">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    โทรปรึกษาช่าง
                  </p>
                  <p className="font-bold tracking-tight text-slate-200">
                    {displayPhone}
                  </p>
                </div>
              </a>

              <a
                href={`https://line.me/ti/p/~${cleanLineId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-colors hover:opacity-80"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-800 bg-slate-900 group-hover:border-green-900/50">
                  <MessageCircle
                    size={16}
                    className="group-hover:text-green-500"
                  />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    Line Official
                  </p>
                  <p className="font-bold tracking-tight text-slate-200">
                    {contact?.lineId || "@SukhothaiWood"}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-slate-800 bg-slate-900">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    ที่ตั้งโรงไม้
                  </p>
                  <p className="max-w-[180px] text-xs font-bold leading-relaxed text-slate-300">
                    {contact?.address || "อ.กงไกรลาศ จ.สุโขทัย"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. WORKING_HOURS: เวลาให้บริการ */}
          <div className="bg-slate-900/20 p-10 md:col-span-3 md:p-16">
            <h4
              className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: themeColor }}
            >
              Operating_Hours
            </h4>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Clock size={16} className="mt-1 text-slate-600" />
                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    จันทร์ - เสาร์
                  </p>
                  <p className="font-bold text-slate-200">08:00 - 17:00 น.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-4 w-4" /> {/* Spacer */}
                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    วันอาทิตย์
                  </p>
                  <p className="text-xs font-bold italic text-slate-700">
                    ปิดทำการ (สอบถามผ่านไลน์ได้)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM_BAR: ลิขสิทธิ์และพิกัด */}
        <div className="flex flex-col items-center justify-between border-x border-slate-800 px-10 py-8 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 md:flex-row">
          <p className="text-center md:text-left">
            © {currentYear} SUKHOTHAI_TIMBER_SYSTEMS // PRODUCTION_UNIT_01
          </p>
          <div className="mt-6 flex items-center gap-6 md:mt-0">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-900" />
              Service_Online
            </span>
            <span className="hidden text-slate-900 sm:block">|</span>
            <span className="italic text-slate-500">Sukhothai, TH</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
