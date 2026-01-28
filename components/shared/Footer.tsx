/** @format */

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Zap,
  ShieldCheck,
} from "lucide-react"

/**
 * Footer: ส่วนแสดงข้อมูลติดต่อและเมนูท้ายหน้าเว็บ
 * แนวคิด: ตอกย้ำความเชื่อมั่นด้วยมาตรฐานงานเนี้ยบและที่ตั้งที่ชัดเจน
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  // รายการเมนูนำทาง (อัปเดตตามรูปแบบบริการปี 2026)
  const footerNavigation = {
    services: [
      { name: "แพ็กเกจเช่าเว็บไซต์", href: "/services" },
      { name: "เทมเพลตพร้อมใช้งาน", href: "/templates" },
      { name: "รวมผลงานที่สำเร็จจริง", href: "/case-studies" },
      { name: "บทความ SEO & AI", href: "/blog" },
    ],
    about: [
      { name: "รู้จักนายเอ็มซ่ามากส์", href: "/about" },
      { name: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { name: "ข้อตกลงการใช้บริการ", href: "/terms" },
    ],
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-50 bg-white pt-24 pb-12">
      {/* ตกแต่งพื้นหลัง: แสง Aurora จาง ๆ เพื่อความสวยงามแบบพรีเมียม */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* ส่วนที่ 1 - โลโก้และเป้าหมายของแบรนด์ */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-1">
              <span className="font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic">
                {siteConfig.project.name}
                <span className="text-emerald-500 group-hover:animate-pulse">
                  .
                </span>
              </span>
            </Link>

            <p className="font-body mt-8 max-w-sm text-lg leading-relaxed font-bold text-slate-500">
              สร้างระบบเว็บไซต์สเปกปีศาจที่ตอบโจทย์ธุรกิจไทย
              เปลี่ยนหน้าเว็บให้เป็นเครื่องจักรทำกำไรที่โหลดไวที่สุด
            </p>

            {/* ช่องทางติดต่อด่วน: เน้น LINE เป็นหลักเพื่อให้ลูกค้าทักง่าย */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={siteConfig.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-3 text-[11px] font-black tracking-widest text-white uppercase italic transition-all hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle size={18} fill="currentColor" />
                คุยงานผ่าน LINE
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-[11px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-slate-950"
              >
                <Mail size={18} />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* ส่วนที่ 2 - เมนูบริการและข้อมูลบริษัท */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h4 className="font-heading mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic">
                Our Services
              </h4>
              <ul className="space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-body text-sm font-bold text-slate-500 transition-colors hover:text-emerald-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic">
                Company
              </h4>
              <ul className="space-y-4">
                {footerNavigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-body text-sm font-bold text-slate-500 transition-colors hover:text-emerald-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ส่วนที่ 3 - สถานที่ตั้ง (ไม้งาม จ.ตาก) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic">
              Our Location
            </h4>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-emerald-600">
                <MapPin size={20} />
              </div>
              <address className="font-body text-sm leading-relaxed font-bold text-slate-500 not-italic">
                <span className="text-slate-900">ไม้งาม จ.ตาก, ประเทศไทย</span>{" "}
                <br />
                เราทำงานระบบออนไลน์ 100% <br />
                เพื่อความรวดเร็วในการส่งมอบงานให้ลูกค้าทั่วประเทศ
              </address>
            </div>

            {/* ตราสัญลักษณ์รับรองความเนี้ยบ */}
            <div className="mt-8 flex items-center gap-3 text-emerald-600/50">
              <ShieldCheck size={16} />
              <span className="text-[9px] font-black tracking-widest uppercase italic">
                Verified Expert 2026
              </span>
            </div>
          </div>
        </div>

        {/* ส่วนที่ 4 - ลิขสิทธิ์และสเปกเครื่องยนต์หลังบ้าน */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
          <p className="font-heading text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase italic">
            © {currentYear} {siteConfig.project.name}.{" "}
            <br className="md:hidden" />
            ดูแลงานระบบโดย นายเอ็มซ่ามากส์
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap size={12} className="text-emerald-500" />
              <span className="font-heading text-[9px] font-black tracking-widest text-slate-300 uppercase italic">
                Next.js 16 & AI Ready
              </span>
            </div>
            <span className="font-heading text-[9px] font-black tracking-widest text-emerald-500 uppercase italic">
              SEO Optimized
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
