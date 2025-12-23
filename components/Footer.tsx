/** @format */
import React from "react"
import Link from "next/link"
import { Facebook, MessageCircle, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

// 🟢 ดึง Type มาจากไฟล์กลางเพื่อให้สอดคล้องกัน
import { MultiLangText } from "@/app/landing/[template-id]/types"

interface FooterProps {
  data: {
    // ✅ ปรับให้รองรับทั้ง String และ MultiLang เพื่อแก้ Build Error
    name: string | MultiLangText
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

  /**
   * 🛠️ Helper: จัดการแสดงผลชื่อแบรนด์
   * ถ้าเป็น Object จะเลือกภาษาไทยก่อน ถ้าไม่มีให้ไปภาษาอังกฤษ
   */
  const displayName = typeof data.name === "string" 
    ? data.name 
    : data.name?.th || data.name?.en || "AEMDEVWEB"

  return (
    <footer className="border-t-8 border-slate-900 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ─── BRAND SECTION ─── */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-block border-4 border-slate-900 bg-blue-600 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                {displayName}
              </span>
            </div>
            <p className="max-w-md text-lg font-bold leading-relaxed text-slate-500">
              รับออกแบบสถาปัตยกรรมดิจิทัลและพัฒนาเว็บไซต์ที่เน้นผลลัพธ์
              เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยเทคโนโลยี Next.js 15
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={20} />, href: data.socials?.facebook },
                {
                  icon: <MessageCircle size={20} />,
                  href: `https://line.me/ti/p/~${data.lineId}`,
                },
                { icon: <Mail size={20} />, href: "mailto:contact@aemdevweb.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-900 bg-white p-3 transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ─── QUICK LINKS ─── */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xl font-black uppercase italic text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-4 font-bold text-slate-500">
              {["Services", "Catalog", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="group flex items-center gap-2 transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── CONTACT INFO ─── */}
          <div className="space-y-6 lg:col-span-4">
            <h4 className="mb-6 text-xl font-black uppercase italic text-slate-900">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 border-2 border-slate-900 bg-yellow-400 p-1">
                  <Phone size={16} className="text-slate-900" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Call Now
                  </p>
                  <p className="font-black text-slate-900">
                    {data.phone || "08x-xxx-xxxx"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 border-2 border-slate-900 bg-yellow-400 p-1">
                  <MapPin size={16} className="text-slate-900" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Studio Location
                  </p>
                  <p className="font-black text-slate-900">
                    {data.address || "Bangkok, Thailand"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="mt-16 flex flex-col items-center justify-between border-t-4 border-slate-900 pt-8 md:flex-row">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            © {currentYear} {displayName}. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-4 flex gap-8 md:mt-0">
            <Link
              href="/privacy"
              className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-blue-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-blue-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
