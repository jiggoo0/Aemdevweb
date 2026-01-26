/** @format */

import React from "react"
import { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { Prompt, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { constructMetadata } from "@/app/metadata"
import { viewport as defaultViewport } from "./viewport"

import { JsonLd } from "@/components/seo/JsonLd"
import { Toaster } from "@/components/ui/sonner"
import { FacebookChat } from "@/components/shared/FacebookChat"

import "@/app/globals.css"

/**
 * จัดการชุดฟอนต์: ล็อคความนิ่งของหน้าจอด้วย display: "swap"
 * เน้นน้ำหนักที่ใช้งานจริงตั้งแต่บางสุดจนถึงหนาพิเศษ
 */
const fontPrompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

const fontAnuphan = Anuphan({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
})

/**
 * ระบบจัดการส่วนหัว (Metadata Engine):
 * ดึงข้อมูลผ่านโครงสร้าง Nested (project.*) เพื่อป้องกัน Error Property Missing
 */
export const metadata: Metadata = constructMetadata({
  title: siteConfig.project.title,
  description: siteConfig.project.description,
  image: siteConfig.project.ogImage,
})

export const viewport: Viewport = defaultViewport

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <head>
        {/* ระบบข้อมูลโครงสร้างเพื่อให้ AI และ Search Engine จัดลำดับได้แม่นยำ */}
        <JsonLd
          type="WebSite"
          data={{
            name: siteConfig.project.name,
            alternateName: siteConfig.project.nameTH,
            url: siteConfig.project.url,
            publisher: {
              "@type": "Organization",
              name: siteConfig.company.name,
              logo: siteConfig.project.ogImage,
            },
          }}
        />
      </head>
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-800",
          "selection:bg-emerald-100 selection:text-emerald-900",
          "overflow-x-hidden leading-relaxed"
        )}
      >
        {/* แถบสถานะการโหลดด้านบน: ใช้สีเขียว Emerald ของแบรนด์ */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
        />

        {/* ระบบสนทนาผ่าน Facebook */}
        <FacebookChat />

        {/* พื้นที่แสดงผลเนื้อหาทั้งหมด */}
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>

        {/* ระบบแจ้งเตือนข้อมูล (Toast) */}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
