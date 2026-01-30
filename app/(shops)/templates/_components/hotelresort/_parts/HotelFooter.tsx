/** @format */

"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Zap, ExternalLink } from "lucide-react"

// [FIXED]: ปรับ Interface ให้ตรงกับรูปทรงข้อมูลจริงจาก Schema (ล้าง TS2739)
interface HotelFooterProps {
  data: {
    address: string
    contact: {
      phone: string
      line: string
      email: string
    }
    mapsUrl: string
  }
  logo: string
}

/**
 * HotelFooter: พิกัดส่วนท้ายระดับพรีเมียม (Strategic Integrity Node)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 */
export const HotelFooter: React.FC<HotelFooterProps> = ({ data, logo }) => {
  return (
    <footer className="bg-[oklch(0.12_0.02_260)] py-24 text-white/60 lg:py-32">
      <div className="container-za">
        <div className="grid gap-16 lg:grid-cols-3">
          
          {/* [1. BRAND IDENTITY NODE] */}
          <div className="space-y-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-3xl font-black tracking-tighter text-white uppercase italic transition-all hover:text-[oklch(0.65_0.2_160)]"
            >
              <Zap size={28} className="fill-[oklch(0.65_0.2_160)] text-[oklch(0.65_0.2_160)]" />
              {logo}<span className="text-[oklch(0.65_0.2_160)]">.</span>
            </Link>
            <p className="max-w-md text-lg leading-relaxed font-bold">
              ยกระดับประสบการณ์การพักผ่อนด้วยโครงสร้างที่แม่นยำ 
              ปรับแต่งมาเพื่อประสิทธิภาพสูงสุดโดย AEMDEVWEB
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-[oklch(0.65_0.2_160)] hover:text-[oklch(0.12_0.02_260)] active:scale-95"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* [2. LOCATION NODE]: พิกัดตำแหน่งที่ตั้งจริง */}
          <div className="space-y-8">
            <h4 className="font-heading text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
              Location Hub
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="shrink-0 text-[oklch(0.65_0.2_160)]" />
                <p className="text-sm font-bold leading-relaxed">{data.address}</p>
              </div>
              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-[oklch(0.65_0.2_160)] uppercase transition-colors hover:text-white"
              >
                View on Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* [3. CONTACT CENTER]: พิกัดการสื่อสารเชิงระบบ */}
          <div className="space-y-8">
            <h4 className="font-heading text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
              Direct Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-sm font-bold transition-colors hover:text-white">
                <Phone size={20} className="text-[oklch(0.65_0.2_160)]" />
                {data.contact.phone}
              </li>
              <li className="flex items-center gap-4 text-sm font-bold transition-colors hover:text-white">
                <Mail size={20} className="text-[oklch(0.65_0.2_160)]" />
                {data.contact.email}
              </li>
            </ul>
          </div>
        </div>

        {/* [4. FINAL LEGAL FOOTER]: แผนผังลิขสิทธิ์ */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-[9px] font-black tracking-[0.3em] uppercase italic md:flex-row">
          <p>© 2026 {logo} • Strategic Infrastructure by นายเอ็มซ่ามากส์</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Protocol
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
