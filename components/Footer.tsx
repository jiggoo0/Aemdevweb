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
  ArrowUpRight,
} from "lucide-react"

import { siteConfig } from "@/config/siteConfig"
// ✅ แก้ไข: เปลี่ยนจาก Path ที่ Error เป็นการใช้ Type จากศูนย์กลางของข้อมูล
import type { MultiLangText } from "@/data/types"

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

  // Defensive Logic: ป้องกัน Error หากข้อมูลมาไม่ครบ
  const displayName =
    typeof data?.name === "string"
      ? data.name
      : (data?.name as MultiLangText)?.th ||
        (data?.name as MultiLangText)?.en ||
        siteConfig.name ||
        "AEMDEVWEB"

  return (
    <footer className="border-t-8 border-slate-900 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ─── BRAND IDENTITY ─── */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-block border-4 border-slate-900 bg-blue-600 px-4 py-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              <span className="text-2xl font-black uppercase italic tracking-tighter text-white">
                {displayName}
              </span>
            </div>
            <p className="max-w-md text-lg font-bold italic leading-relaxed text-slate-500">
              รับออกแบบสถาปัตยกรรมดิจิทัลและพัฒนาเว็บไซต์ที่เน้นผลลัพธ์
              เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วย{" "}
              <span className="font-black text-slate-900 underline decoration-blue-600/30">
                เทคโนโลยีมาตรฐานสากล
              </span>
            </p>

            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: <Facebook size={20} />,
                  href: data?.socials?.facebook || siteConfig.links.facebook,
                },
                {
                  icon: <MessageCircle size={20} />,
                  href: data?.lineId
                    ? `https://line.me/ti/p/~${data.lineId}`
                    : siteConfig.contact.lineUrl,
                },
                {
                  icon: <Mail size={20} />,
                  href: `mailto:${siteConfig.contact.email}`,
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-900 bg-white p-3 transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ─── NAVIGATION ─── */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              NAV_SYSTEM
            </h4>
            <ul className="space-y-4 font-bold italic text-slate-600">
              {siteConfig.navLinks.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── CONTACT ─── */}
          <div className="space-y-6 lg:col-span-4">
            <h4 className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              CONTACT_DIRECT
            </h4>
            <div className="space-y-5">
              <div className="group flex items-start gap-4">
                <div className="mt-1 border-2 border-slate-900 bg-yellow-400 p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Phone size={16} className="text-slate-900" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Call Now
                  </p>
                  <p className="text-lg font-black text-slate-900 transition-colors group-hover:text-blue-600">
                    {data?.phone || siteConfig.contact.tel}
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4">
                <div className="mt-1 border-2 border-slate-900 bg-blue-600 p-2 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Location
                  </p>
                  <p className="font-black text-slate-900 transition-colors group-hover:text-blue-600">
                    {data?.address || siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t-4 border-slate-900 pt-8 md:flex-row">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
            © {currentYear} {displayName}. ALL RIGHTS RESERVED.
          </p>
          <span className="mt-4 text-[10px] font-bold italic tracking-[0.2em] text-slate-300 md:mt-0">
            ENGINEERED_BY_AEMDEVWEB
          </span>
        </div>
      </div>
    </footer>
  )
}
