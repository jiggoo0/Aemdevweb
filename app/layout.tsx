/** @format */

import React from "react"
import { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { IBM_Plex_Sans_Thai, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"

import { JsonLd } from "@/components/seo/JsonLd"
import { Toaster } from "@/components/ui/sonner"

import "@/app/globals.css"

/**
 * พิกัดฟอนต์หัวข้อ: IBM Plex Sans Thai
 * ให้ความรู้สึกที่ยั่งยืนและเป็นระเบียบ เข้าถึงกลุ่มเจ้าของธุรกิจได้ดี
 */
const fontHeading = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

/**
 * พิกัดฟอนต์เนื้อหา: Anuphan
 * เน้นการอ่านที่สบายตาบนหน้าจอ ทันสมัย และดูเป็นมิตรต่อผู้ใช้งาน
 */
const fontBody = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

/**
 * จัดการพิกัด SEO ประจำเว็บไซต์ (Metadata)
 * วางรากฐานเพื่อรองรับการเติบโตผ่าน Organic Search
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.project.title,
    template: `%s | ${siteConfig.project.name}`,
  },
  description: siteConfig.project.description,
  metadataBase: new URL(siteConfig.project.url),
  keywords: siteConfig.keywords.list,
  authors: [{ name: "อลงกรณ์ ยมเกิด", url: "https://me.aemdevweb.com" }],
  creator: "นายเอ็มซ่ามากส์",
  openGraph: {
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    url: siteConfig.project.url,
    siteName: siteConfig.project.name,
    images: [
      {
        url: siteConfig.project.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.project.title,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    images: [siteConfig.project.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

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
        fontHeading.variable,
        fontBody.variable,
        "antialiased"
      )}
      suppressHydrationWarning
    >
      <head>
        {/* ฉีดข้อมูลโครงสร้างเพื่อให้ระบบค้นหาเข้าใจบริบทของธุรกิจและตัวตนผู้ดูแลระบบ */}
        <JsonLd
          type="WebSite"
          data={{
            name: siteConfig.project.name,
            alternateName: siteConfig.project.nameTH,
            url: siteConfig.project.url,
            publisher: {
              "@type": "Person",
              name: "อลงกรณ์ ยมเกิด",
              url: siteConfig.project.url,
              sameAs: [
                siteConfig.contact?.facebook,
                siteConfig.contact?.linkedin,
              ].filter(Boolean),
            },
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
          "font-body min-h-screen bg-white text-slate-900",
          "selection:bg-emerald-500/10 selection:text-emerald-900",
          "overflow-x-hidden leading-relaxed"
        )}
      >
        {/* แถบสถานะการโหลดสีเขียวมรกต เพื่อความภูมิฐานตามสไตล์ Professional Freelance */}
        <NextTopLoader
          color="#059669"
          height={2}
          showSpinner={false}
          easing="ease"
          speed={400}
        />

        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* ระบบแจ้งเตือนผลลัพธ์ที่ใช้งานง่ายและไม่รบกวนสายตา */}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
