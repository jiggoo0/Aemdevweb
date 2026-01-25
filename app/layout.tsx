/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { Prompt, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { constructMetadata, siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"
import { FacebookChat } from "@/components/shared/FacebookChat"

import "./globals.css"

/* * การตั้งค่าฟอนต์: เน้นความอ่านง่ายและสบายตา (Friendly Typography)
 * Prompt: ใช้สำหรับส่วนหัว (Headings) เพื่อความชัดเจน
 * Anuphan: ใช้สำหรับเนื้อหาหลัก (Body) เพื่อความทันสมัยและอ่านง่าย
 */

const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-prompt",
  display: "swap", // ใช้ swap เพื่อให้ข้อความแสดงทันที ลดอาการ CLS
  preload: true,
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
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
        "antialiased"
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-800",
          "selection:bg-emerald-100 selection:text-emerald-900",
          "overflow-x-hidden leading-relaxed"
        )}
      >
        {/* แถบแสดงสถานะการโหลด: ใช้สี Emerald เพื่อความผ่อนคลายและเป็นมิตร */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
          shadow="0 0 10px #10B981, 0 0 5px #10B981"
        />

        {/* ระบบสนทนาอัตโนมัติ (เชื่อมต่อลูกค้า) */}
        <FacebookChat />

        {/* โครงสร้างเนื้อหาหลัก */}
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>

        {/* ข้อมูลโครงสร้างชุดคำสั่ง (Structured Data) เพื่อเสริมความน่าเชื่อถือในสายตา AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              alternateName: siteConfig.nameTH,
              image: siteConfig.ogImage,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
              founder: {
                "@type": "Person",
                name: siteConfig.expert,
              },
              areaServed: "TH",
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
