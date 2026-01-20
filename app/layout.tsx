/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"

// 📂 Logic & Config
import { cn } from "@/lib/utils"
import { defaultMetadata } from "./metadata" // ดึง Metadata ชุดเต็มที่เราแก้กันไว้
import { viewport as defaultViewport } from "./viewport" // ดึง Viewport ที่ตั้งค่าไว้

// 📂 Local Assets & Fonts
import "./globals.css"
import { Prompt, Anuphan } from "next/font/google"

/* -------------------------------------------------------------------------- */
/* 🅰️ Font Setup: Industrial Typography                                       */
/* -------------------------------------------------------------------------- */

// Prompt: ใช้สำหรับ Heading และ UI ที่ต้องการความมั่นคง (Modern Thai)
const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

// Anuphan: ใช้สำหรับ Body Text ให้อ่านง่าย สบายตา (Humanist Thai)
const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
})

/* -------------------------------------------------------------------------- */
/* 🧬 SEO & Performance Config                                                */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = defaultMetadata
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
      className={cn("scroll-smooth", fontPrompt.variable, fontAnuphan.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-slate-50/50 text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "transition-colors duration-300"
        )}
      >
        {/* 🚀 Top Loading Bar: Brand Primary (Emerald 500) */}
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
        <div className="bg-background relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
