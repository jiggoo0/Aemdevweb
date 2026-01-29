/** @format */

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import IconRenderer from "@/components/shared/IconRenderer"

/**
 * SeoNavbar: พิกัดควบคุมส่วนนำทางหลักสำหรับหมวดงาน SEO
 * ออกแบบมาเพื่อเน้นการสร้างภาพจำด้านประสิทธิภาพ (Performance) และการติดต่อที่ฉับไว
 */
export default function SeoNavbar() {
  return (
    <nav className="sticky top-0 z-[60] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container-za flex h-20 items-center justify-between">
        
        {/* พิกัดตราสัญลักษณ์ระบบ (Brand Identity Node) */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-emerald-500 shadow-node transition-transform group-hover:scale-105">
            <IconRenderer name="Zap" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">
              AEM<span className="text-emerald-500">SEO</span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
              System Performance
            </span>
          </div>
        </Link>

        {/* ระบบเมนูและพิกัดการสื่อสารระดับสากล (Global Protocol) */}
        <div className="flex items-center gap-6">
          {/* พิกัดลิงก์บริการทั้งหมด (แสดงผลเฉพาะบนหน้าจอขนาดใหญ่) */}
          <Link 
            href="/seo" 
            className="hidden text-xs font-black tracking-widest text-slate-500 uppercase italic transition-colors hover:text-emerald-500 md:block"
          >
            All Services
          </Link>

          {/* ปุ่มพิกัดติดต่อสื่อสารที่ตอบสนองความเร็วสูง */}
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-za flex items-center gap-2 !px-6 !py-3 shadow-aurora"
          >
            <IconRenderer name="MessageSquare" size={14} />
            <span>ติดต่องานด่วน</span>
          </a>
        </div>

      </div>
    </nav>
  )
}
