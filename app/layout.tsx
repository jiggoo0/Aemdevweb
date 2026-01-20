/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"

// 📂 Logic & Config
import { cn } from "@/lib/utils"
// ✅ [FIXED]: เปลี่ยนมาเรียกใช้ constructMetadata โดยตรงเพื่อให้รูป OG Image ขึ้นทุกหน้า
import { constructMetadata } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"

// 📂 Local Assets & Fonts
import "./globals.css"
import { Prompt, Anuphan } from "next/font/google"

/* -------------------------------------------------------------------------- */
/* 🅰️ Font Setup: Industrial Typography Specialist v2026                      */
/* -------------------------------------------------------------------------- */

/**
 * 🏢 Prompt: สำหรับ Heading ที่ต้องการความสุขุมและมั่นคง
 * ปรับจูนให้รองรับภาษาไทยระดับ Industrial Grade
 */
const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap", // ✅ ป้องกันอาการตัวหนังสือหายระหว่างโหลด
  preload: true,
  adjustFontFallback: true, // ✅ จูนระยะบรรทัดให้ไม่กระตุกเมื่อฟอนต์โหลดเสร็จ
})

/**
 * 🧬 Anuphan: สำหรับ Body Text ที่เน้นการอ่านข้อมูลจำนวนมาก (SME & Factory)
 * ออกแบบมาให้สบายตาและดูทันสมัย (Humanist Thai)
 */
const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

/* -------------------------------------------------------------------------- */
/* 🧬 SEO & Performance Config                                                */
/* -------------------------------------------------------------------------- */

// ✅ ใช้ระบบ Metadata ที่จูน Path รูปภาพมาแล้ว 100%
export const metadata: Metadata = constructMetadata()
export const viewport: Viewport = defaultViewport

/* -------------------------------------------------------------------------- */
/* 🏗️ Root Layout Infrastructure                                              */
/* -------------------------------------------------------------------------- */

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth",
        fontPrompt.variable,
        fontAnuphan.variable,
        "thai-font-smoothing" // ✅ ใช้ Utility สำหรับรีดความชัดของฟอนต์ไทย
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "transition-colors duration-300"
        )}
      >
        {/* 🚀 Top Loading Bar: Emerald-500 Brand Primary */}
        <NextTopLoader
          color="#10B981"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #10B981,0 0 5px #10B981"
        />

        {/* 🌍 App Content Infrastructure */}
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
