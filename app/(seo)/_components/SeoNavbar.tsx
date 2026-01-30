/** @format */

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import IconRenderer from "@/components/shared/IconRenderer"

/**
 * SeoNavbar: พิกัดควบคุมส่วนนำทางหลักสำหรับหมวดงาน SEO
 * มาตรฐาน: Tailwind 4 OKLCH | Glassmorphism
 */
export default function SeoNavbar() {
  return (
    <nav className="sticky top-0 z-[60] w-full border-b border-[oklch(0.9_0.02_260)] bg-[oklch(1_0_0_/_0.8)] backdrop-blur-md dark:bg-[oklch(0.12_0.02_260_/_0.8)]">
      <div className="container-za flex h-20 items-center justify-between">
        {/* พิกัดตราสัญลักษณ์ระบบ (Identity Node) */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-[oklch(0.65_0.2_160)] shadow-lg transition-transform group-hover:scale-105 dark:bg-[oklch(0.95_0.01_260)]">
            <IconRenderer name="Zap" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl leading-none font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
              AEM<span className="text-[oklch(0.65_0.2_160)]">SEO</span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-[oklch(0.45_0.02_260)] uppercase italic">
              System Performance
            </span>
          </div>
        </Link>

        {/* Global Navigation Protocol */}
        <div className="flex items-center gap-6">
          <Link
            href="/seo"
            className="hidden text-xs font-black tracking-widest text-[oklch(0.45_0.02_260)] uppercase italic transition-colors hover:text-[oklch(0.65_0.2_160)] md:block"
          >
            All Services
          </Link>

          {/* Action Point: High-Speed Contact */}
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-za flex items-center gap-2 bg-[oklch(0.2_0.02_260)] !px-6 !py-3 text-white hover:shadow-[0_0_20px_oklch(0.65_0.2_160_/_0.3)]"
          >
            <IconRenderer name="MessageSquare" size={14} />
            <span className="font-black uppercase italic">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
