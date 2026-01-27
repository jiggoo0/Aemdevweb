/** @format */

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react"

/**
 * Footer: พิกัดฐานข้อมูลและการติดต่อท้ายระบบงาน
 * แนวทาง: แยกส่วนการจัดวางให้ดูสะอาดตา จัดกลุ่มข้อมูลให้เข้าถึงง่ายสไตล์ Professional Freelance
 * [FIXED]: ปรับปรุงพิกัดเส้นทางให้ตรงตามโครงสร้างไฟล์ปัจจุบัน และเพิ่มจุดท้าย Logo เพื่อความกริบ
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  // สารบบพิกัดการนำทางที่สอดคล้องกับ Directory Tree ล่าสุด
  const footerNavigation = {
    system: [
      { name: "บริการของเรา", href: "/services" },
      { name: "คลังโครงสร้าง", href: "/templates" },
      { name: "ถอดรหัสผลงาน", href: "/case-studies" },
      { name: "คลังความรู้", href: "/blog" },
    ],
    support: [
      { name: "เกี่ยวกับเรา", href: "/about" },
      { name: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { name: "ข้อตกลงการใช้งาน", href: "/terms" },
    ],
  }

  return (
    <footer className="relative border-t border-slate-100 bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* 1. Branding & Identity: พิกัดตัวตนและแนวคิดของแบรนด์ AEMDEVWEB */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <span className="font-heading text-2xl font-black tracking-tighter text-slate-950 uppercase italic">
                {siteConfig.project.name}
                <span className="text-emerald-500">.</span>
              </span>
            </Link>
            <p className="font-body mt-8 max-w-sm text-lg leading-relaxed font-bold text-slate-500">
              วางพิกัดงานระบบเว็บไซต์ที่ตอบโจทย์คนทำงานจริง
              เปลี่ยนหน้าบ้านดิจิทัลให้เป็นเครื่องจักรที่ช่วยสร้างผลลัพธ์อย่างแม่นยำ
            </p>

            {/* พิกัดช่องทางติดต่อด่วน: เน้นการเชื่อมต่อที่รวดเร็วและเป็นมิตร */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={siteConfig.contact.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
              >
                <MessageCircle size={16} />
                LINE Official
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
              >
                <Mail size={16} />
                Email Support
              </a>
            </div>
          </div>

          {/* 2. Navigation Links: พิกัดการนำทางภายในโครงสร้างเว็บ (Fixed Routes 2026) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h4 className="font-heading mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic">
                Our System
              </h4>
              <ul className="space-y-4">
                {footerNavigation.system.map((item) => (
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
                Support
              </h4>
              <ul className="space-y-4">
                {footerNavigation.support.map((item) => (
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

          {/* 3. Base Location: พิกัดฐานการทำงานจริง (Mai Ngam, Tak) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic">
              Base Location
            </h4>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                <MapPin size={20} />
              </div>
              <address className="font-body text-sm leading-relaxed font-bold text-slate-500 not-italic">
                Mai Ngam, Tak, Thailand <br />
                พิกัดการทำงานแบบ Remote-First <br />
                เพื่อความเร็วในการส่งมอบระบบงาน
              </address>
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar: พิกัดลิขสิทธิ์และมาตรฐานงานพัฒนาระบบ */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-slate-50 pt-12 md:flex-row">
          <p className="font-heading text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase italic">
            © {currentYear} {siteConfig.project.name}. Developed by
            นายเอ็มซ่ามากส์.
          </p>
          <div className="flex items-center gap-8">
            <span className="font-heading text-[9px] font-black tracking-widest text-slate-300 uppercase italic">
              Next.js 15 Ready
            </span>
            <span className="font-heading text-[9px] font-black tracking-widest text-emerald-500/40 uppercase italic">
              Technical SEO Optimized
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
