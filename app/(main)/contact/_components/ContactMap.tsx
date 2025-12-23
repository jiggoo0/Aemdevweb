/** @format */
"use client"

import React from "react"
import {
  MapPin,
  Navigation,
  Map as MapIcon,
  Coffee,
  ArrowUpRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export default function ContactMap() {
  /**
   * 🛠️ แนะนำ: ให้ใช้ Embed URL จาก Google Maps โดยตรง (Share > Embed a map)
   * ตัวอย่างด้านล่างเป็น URL จำลองสำหรับแสดงสไตล์
   */
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.503123456789!2d100.50123456789!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDMwJzA0LjQiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"

  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      id="location"
    >
      {/* ─── INDUSTRIAL BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-30" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-px overflow-hidden border-2 border-brand-navy bg-brand-navy shadow-enterprise-lg lg:grid-cols-12">
            {/* 1. ส่วนข้อมูลที่ตั้ง: BUSINESS INTELLIGENCE (Col-span 5) */}
            <div className="relative flex flex-col justify-between bg-white p-8 md:p-14 lg:col-span-5">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 border-l-4 border-brand-blue bg-slate-50 px-5 py-2">
                  <MapIcon size={14} className="text-brand-blue" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    Our Workstation
                  </span>
                </div>

                <div className="space-y-8">
                  <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-brand-navy md:text-6xl">
                    แวะมาคุย <br />
                    <span className="text-brand-blue">จิบกาแฟกันครับ</span>
                  </h2>

                  <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                    <p className="text-lg font-bold leading-relaxed text-slate-600">
                      ออฟฟิศของผมตั้งอยู่ที่ <br />
                      <span className="text-brand-navy underline decoration-brand-blue decoration-2 underline-offset-8">
                        {siteConfig.contact.address}
                      </span>
                    </p>
                    <p className="text-[11px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                      * เพื่อการต้อนรับที่ดีที่สุด รบกวนนัดหมายล่วงหน้าครับ
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Block: Sharp & Tactile */}
              <div className="mt-16 space-y-6 border-t-2 border-slate-50 pt-10">
                <div className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand-navy bg-white text-brand-blue shadow-enterprise-sm transition-transform group-hover:-translate-y-1">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      HQ Coordinates
                    </h4>
                    <p className="text-sm font-black uppercase leading-tight text-brand-navy">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border-2 border-brand-navy bg-brand-blue px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-brutal-blue transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <span className="flex items-center gap-4">
                    <Navigation
                      size={18}
                      className="transition-transform group-hover:rotate-12"
                    />
                    เปิด Google Maps นำทาง
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* 2. ส่วนแผนที่ Interactive: SYSTEM SCAN (Col-span 7) */}
            <div className="relative min-h-[500px] overflow-hidden bg-slate-100 lg:col-span-7">
              {/* Overlay Glass Pattern */}
              <div className="pointer-events-none absolute inset-0 z-10 border-[1px] border-brand-navy/10" />

              <iframe
                title="aemdevweb-location-scan"
                src={mapEmbedUrl}
                className="h-full w-full contrast-[1.1] grayscale-[0.6] transition-all duration-700 hover:grayscale-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Coffee Indicator: Personal Detail */}
              <div className="group absolute bottom-8 right-8 z-20 hidden md:block">
                <div className="relative">
                  {/* Shadow layer */}
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-brand-navy" />
                  <div className="relative flex items-center gap-4 border-2 border-brand-navy bg-white p-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-blue bg-brand-blue/5 text-brand-blue">
                      <Coffee size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Guest Protocol
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-widest text-brand-navy">
                        Welcome Drink Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Scanning Lines (Decorative) */}
              <div className="animate-scan pointer-events-none absolute left-0 top-0 z-10 h-1 w-full bg-brand-blue/20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
