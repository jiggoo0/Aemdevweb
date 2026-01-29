/** @format */

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import IconRenderer from "@/components/shared/IconRenderer"

/**
 * SeoFooter: ส่วนท้ายของระบบหมวด SEO
 * ออกแบบมาเพื่อเน้นการสร้าง Authority และการเชื่อมโยงพิกัดข้อมูลภายใน (Internal Link)
 */
export default function SeoFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <div className="container-za">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. ข้อมูลแบรนด์และพิกัดระบบงาน */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-black uppercase italic text-slate-900">
              {siteConfig.company.name}
            </h3>
            <p className="font-body text-sm font-bold leading-relaxed text-slate-500">
              {siteConfig.project.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-black text-slate-600 uppercase italic">
              <IconRenderer name="ShieldCheck" size={14} className="text-emerald-500" />
              Quality Controlled by {siteConfig.expert.name}
            </div>
          </div>

          {/* 2. พิกัดลิงก์บริการ SEO เชิงเทคนิค */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm font-black tracking-[0.2em] text-emerald-500 uppercase italic">
              SEO Services
            </h4>
            <ul className="space-y-3 text-sm font-bold text-slate-600">
              <li>
                <Link href="/seo/technical-structure-audit" className="transition-colors hover:text-emerald-500">
                  Technical Audit
                </Link>
              </li>
              <li>
                <Link href="/seo/core-web-vitals-speed" className="transition-colors hover:text-emerald-500">
                  Speed Optimization
                </Link>
              </li>
              <li>
                <Link href="/seo/advanced-schema-markup" className="transition-colors hover:text-emerald-500">
                  Schema Markup
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. พิกัดการติดต่อสื่อสาร (Protocol) */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm font-black tracking-[0.2em] text-emerald-500 uppercase italic">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-bold text-slate-600">
              <li>
                <a 
                  href={siteConfig.links.line} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-emerald-500"
                >
                  <IconRenderer name="MessageSquare" size={16} />
                  LINE Official
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-emerald-500"
                >
                  <IconRenderer name="Facebook" size={16} />
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* 4. การยืนยันตัวตน (Authority Node) */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm font-black tracking-[0.2em] text-emerald-500 uppercase italic">
              Expertise
            </h4>
            <p className="font-body text-sm font-bold leading-relaxed text-slate-500">
              วิเคราะห์และปรับจูนระบบโดยทีมงานมืออาชีพ เน้นผลลัพธ์เชิงเทคนิคเพื่อการจัดอันดับที่ยั่งยืน
            </p>
          </div>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* ส่วนลิขสิทธิ์และนโยบายพิกัดข้อมูล */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-body text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
            © {currentYear} {siteConfig.company.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-emerald-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-emerald-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
