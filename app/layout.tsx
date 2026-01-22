/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"

// 📂 Logic & Config
import { cn } from "@/lib/utils"
import { constructMetadata, siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"

// 📂 Local Assets & Fonts
import "./globals.css"
import { Prompt, Anuphan } from "next/font/google"

// 🧩 Shared Components
import { FacebookChat } from "@/components/shared/FacebookChat" // ✅ Import Component ใหม่

/* -------------------------------------------------------------------------- */
/* 🅰️ Font Setup: Optimized for Thai/Latin Rendering (v2026 Strategy)         */
/* -------------------------------------------------------------------------- */

const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap", // ✅ ลดปัญหา "Text remains invisible during webfont load"
  preload: true, // ✅ ให้เบราว์เซอร์ดาวน์โหลดล่วงหน้าทันที
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap", // ✅ ช่วยเรื่อง PageSpeed Performance (LCP/CLS)
  preload: true, // ✅ เพิ่มความเร็วในการเรนเดอร์เนื้อหาหลัก
})

export const metadata: Metadata = constructMetadata()
export const viewport: Viewport = defaultViewport

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth focus:scroll-auto",
        fontPrompt.variable,
        fontAnuphan.variable,
        "thai-font-smoothing"
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "overflow-x-hidden"
        )}
      >
        {/* 🚀 Top Loading Bar: Brand Primary (Emerald-500) */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
        />

        {/* 💬 Facebook Customer Chat: Trusted Interaction Layer (Delayed Load) */}
        {/* ✅ แทนที่ Script เดิมด้วย Component ที่โหลดแบบ Lazy */}
        <FacebookChat />

        {/* 🌍 App Content Container */}
        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* ⚙️ SEO: JSON-LD for Local Business / Specialist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: siteConfig.ogImage,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
