/** @format */

import React from "react"
import { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { IBM_Plex_Sans_Thai, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { constructMetadata } from "@/app/metadata"
import { viewport as defaultViewport } from "./viewport"

import { JsonLd } from "@/components/seo/JsonLd"
import { Toaster } from "@/components/ui/sonner"

import "@/app/globals.css"

/**
 * พิกัดฟอนต์สำหรับหัวข้อ: IBM Plex Sans Thai
 * เน้นความมั่นคงและเป็นทางการของระบบงานวิศวกรรมซอฟต์แวร์
 */
const fontHeading = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

/**
 * พิกัดฟอนต์สำหรับเนื้อหา: Anuphan
 * เน้นการอ่านข้อมูลบนหน้าจอที่ไหลลื่นและทันสมัย
 */
const fontBody = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

/**
 * การประกาศพิกัด SEO ประจำเว็บไซต์ (Construct Metadata)
 */
export const metadata: Metadata = constructMetadata({
  title: siteConfig.project.title,
  description: siteConfig.project.description,
  image: siteConfig.project.ogImage,
})

export const viewport: Viewport = defaultViewport

/**
 * Root Layout - โครงสร้างหลักของอาณาจักร AEMDEVWEB
 * จัดการพิกัดฟอนต์, ระบบแจ้งเตือน และโครงสร้างข้อมูลระดับ Global
 */
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
        fontHeading.variable,
        fontBody.variable,
        "antialiased"
      )}
      suppressHydrationWarning
    >
      <head>
        {/* ฉีดโครงสร้างข้อมูล WebSite เพื่อให้ Search AI เข้าใจความสัมพันธ์ของแบรนด์และผู้สร้าง */}
        <JsonLd
          type="WebSite"
          data={{
            name: siteConfig.project.name,
            alternateName: siteConfig.project.nameTH,
            url: siteConfig.project.url,
            // ระบุพิกัดเจ้าของระบบเพื่อสร้าง Trust ในหน้า Google
            publisher: {
              "@type": "Organization",
              name: siteConfig.company.fullName,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.project.url}/images/logo-circuit.png`,
              },
              sameAs: [
                siteConfig.contact.facebook,
                siteConfig.contact.linkedin,
              ].filter(Boolean),
            },
            // เพิ่มระบบค้นหาภายใน (Sitelinks Searchbox)
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteConfig.project.url}/blog?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </head>
      <body
        className={cn(
          "font-body min-h-screen bg-white text-slate-800",
          "selection:bg-emerald-100 selection:text-emerald-900",
          "overflow-x-hidden leading-relaxed"
        )}
      >
        {/* แถบสถานะการโหลดพิกัดสีเขียวมรกต (Emerald-500) */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
          shadow="0 0 10px #10B981,0 0 5px #10B981"
        />

        <div className="relative flex min-h-screen flex-col">
          {/* ส่วนเนื้อหาหลักที่รองรับการเรนเดอร์ Landing Page และระบบงานทั้งหมด */}
          <main className="flex-1">{children}</main>
        </div>

        {/* ระบบแจ้งเตือนผลลัพธ์ผ่านอินเทอร์เฟซ (Sonner) */}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
