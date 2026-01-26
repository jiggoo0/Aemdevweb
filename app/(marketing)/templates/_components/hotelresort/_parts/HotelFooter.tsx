/** @format */

import React from "react"
import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react"

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

export const HotelFooter = ({ data, logo }: HotelFooterProps) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-24 text-left text-slate-400 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          {/* 1. ข้อมูลแบรนด์และจุดขาย (Branding) */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-3xl leading-none font-black tracking-tighter text-white uppercase italic">
                {logo}
                <span className="text-emerald-500">.</span>
              </div>
              <p className="max-w-sm text-sm leading-loose font-light">
                ยกระดับประสบการณ์การพักผ่อนด้วย **เทมเพลตสำเร็จรูป พร้อมใช้งาน**
                ที่ออกแบบมาเพื่อธุรกิจโรงแรมโดยเฉพาะ มุ่งเน้นการใช้งานที่ง่าย
                และความเร็วที่เหนือระดับโดย **AEMDEVWEB**
              </p>
            </div>
            <div className="flex gap-4">
              {["Visa", "Mastercard", "PromptPay"].map((p, i) => (
                <div
                  key={i}
                  className="rounded border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold tracking-widest text-white/30 uppercase"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* 2. ตำแหน่งที่ตั้งและแผนที่ (Location) */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
              Location Detail
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed">{data.address}</p>
              </div>
              <a
                href={data.mapsUrl}
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-emerald-500 uppercase transition-colors hover:text-white"
              >
                ดูแผนที่ผ่าน Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* 3. ช่องทางการติดต่อ (Contact Center) */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
              Contact Center
            </h4>
            <ul className="space-y-6">
              <li className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-emerald-500/10">
                  <Phone size={16} className="text-emerald-500" />
                </div>
                <span className="text-sm font-medium">
                  {data.contact.phone}
                </span>
              </li>
              <li className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-emerald-500/10">
                  <MessageCircle size={16} className="text-emerald-500" />
                </div>
                <span className="text-sm font-medium">{data.contact.line}</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-emerald-500/10">
                  <Mail size={16} className="text-emerald-500" />
                </div>
                <span className="text-sm font-medium">
                  {data.contact.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ส่วนลิขสิทธิ์และเครดิตด้านล่างสุด */}
        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-12 md:flex-row md:items-center">
          <p className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">
            © 2026 {logo} All rights reserved.
          </p>
          <div className="text-[10px] font-black tracking-widest uppercase">
            <span className="text-slate-600">Structure by</span>{" "}
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-emerald-500"
            >
              AEMDEVWEB นายเอ็มซ่ามากส์
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
