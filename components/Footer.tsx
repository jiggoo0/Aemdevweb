/** @format */
"use client"

import React from "react"
import Link from "next/link"
import {
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Globe,
  Instagram,
  Zap,
} from "lucide-react"

import { siteConfig } from "@/config/siteConfig"

// ✅ Interface สำหรับรองรับข้อมูลหลายภาษา
interface MultiLangText {
  th?: string
  en?: string
}

interface FooterProps {
  data?: {
    name?: string | MultiLangText
    phone?: string
    lineId?: string
    address?: string
    socials?: {
      facebook?: string
      instagram?: string
    }
  }
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // ✅ ปรับ Logic การเลือกชื่อแบรนด์ให้แสดงผลภาษาไทยเป็นหลัก
  const displayName = React.useMemo(() => {
    if (!data?.name) return siteConfig.name
    if (typeof data.name === "string") return data.name
    const nameObj = data.name as MultiLangText
    return nameObj.th || nameObj.en || siteConfig.name
  }, [data?.name])

  return (
    <footer className="relative mt-20 border-t-[12px] border-[#0F172A] bg-white pb-10 pt-24">
      {/* 🛠️ TECHNICAL ACCENT: ลายตารางวิศวกรรมพื้นหลัง */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] opacity-30 [background-size:32px_32px]" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* ─── 01. BRAND IDENTITY ─── */}
          <div className="space-y-10 lg:col-span-5">
            <Link
              href="/"
              className="inline-block border-[6px] border-[#0F172A] bg-[#1E3A8A] px-8 py-4 shadow-[10px_10px_0px_0px_#F97316] transition-transform hover:-rotate-2"
            >
              <span className="text-4xl font-black uppercase italic tracking-tighter text-white">
                {displayName}
              </span>
            </Link>

            <div className="space-y-4">
              <p className="max-w-md text-2xl font-black leading-[1.1] tracking-tighter text-[#0F172A] md:text-3xl">
                DIGITAL ARCHITECTURE <br />
                <span className="text-[#F97316]">FOR MODERN BUSINESS.</span>
              </p>
              <p className="max-w-sm text-lg font-bold leading-relaxed text-slate-500">
                เราไม่ได้แค่ทำเว็บ แต่เราวางโครงสร้าง{" "}
                <span className="text-[#0F172A] underline decoration-[#F97316] decoration-4">
                  สถาปัตยกรรมดิจิทัล
                </span>{" "}
                ที่ช่วยเพิ่มความน่าเชื่อถือและยอดขายให้ธุรกิจคุณ
              </p>
            </div>

            {/* Social Connectors */}
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: <Facebook size={22} strokeWidth={2.5} />,
                  href: data?.socials?.facebook || siteConfig.links.facebook,
                  color: "hover:bg-[#1877F2]",
                },
                {
                  icon: <MessageCircle size={22} strokeWidth={2.5} />,
                  href: siteConfig.contact.lineUrl,
                  color: "hover:bg-[#06C755]",
                },
                {
                  icon: <Instagram size={22} strokeWidth={2.5} />,
                  href: siteConfig.links.instagram,
                  color: "hover:bg-[#E4405F]",
                },
                {
                  icon: <Mail size={22} strokeWidth={2.5} />,
                  href: `mailto:${siteConfig.contact.email}`,
                  color: "hover:bg-[#F97316]",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-white text-[#0F172A] transition-all hover:-translate-y-2 hover:text-white hover:shadow-[6px_6px_0px_0px_#0F172A] ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ─── 02. NAV_SYSTEM ─── */}
          <div className="lg:col-span-3">
            <div className="mb-10 flex items-center gap-2">
              <Zap size={16} className="fill-[#F97316] text-[#F97316]" />
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                NAV_SYSTEM
              </h4>
            </div>
            <ul className="grid grid-cols-1 gap-5">
              {siteConfig.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-xl font-black uppercase tracking-tighter text-[#0F172A] transition-all hover:translate-x-2 hover:text-[#1E3A8A]"
                  >
                    <div className="h-2 w-6 bg-slate-200 transition-all group-hover:w-8 group-hover:bg-[#F97316]" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 03. CONTACT_DIRECT ─── */}
          <div className="lg:col-span-4">
            <div className="mb-10 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                CONTACT_DIRECT
              </h4>
            </div>
            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-[#0F172A] bg-yellow-400 shadow-[6px_6px_0px_0px_#0F172A] transition-transform group-hover:rotate-6">
                  <Phone
                    size={28}
                    strokeWidth={2.5}
                    className="text-[#0F172A]"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                    Call_The_Expert
                  </p>
                  <p className="text-2xl font-black tracking-tighter text-[#0F172A]">
                    {data?.phone || siteConfig.contact.tel}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-[#0F172A] bg-[#1E3A8A] text-white shadow-[6px_6px_0px_0px_#0F172A] transition-transform group-hover:-rotate-6">
                  <MapPin size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                    Office_Location
                  </p>
                  <p className="max-w-[240px] text-lg font-black leading-tight tracking-tighter text-[#0F172A]">
                    {data?.address || siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="mt-24 border-t-[8px] border-[#0F172A] pt-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <Globe size={18} className="animate-spin-slow text-[#F97316]" />
              <div className="flex flex-col">
                <p className="font-mono text-[11px] font-black uppercase leading-none tracking-[0.2em] text-[#0F172A]">
                  © {currentYear} {displayName}.
                </p>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  ALL SYSTEMS OPERATIONAL // READY TO DEPLOY
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Build Version จาก siteConfig */}
              <div className="border-2 border-slate-900 px-4 py-1.5 font-mono text-[10px] font-black tracking-[0.1em] text-[#0F172A] shadow-[4px_4px_0px_0px_#E2E8F0]">
                BUILD_v{siteConfig.version || "1.5.0"}
              </div>
              <span className="hidden h-8 w-[2px] bg-slate-100 md:block" />
              <p className="text-[10px] font-black uppercase italic tracking-[0.3em] text-slate-300">
                Engineered_by_AemDevWeb
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
