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
 * [FONT STRATEGY 2026]
 * IBM Plex Sans Thai: สำหรับหัวข้อ (Heading) ให้ความรู้สึกเป็นมืออาชีพที่เชื่อถือได้
 * Anuphan: สำหรับเนื้อหา (Body) อ่านง่าย สบายตา และดูทันสมัย
 */
const fontHeading = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const fontBody = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

/**
 * [SEO & AI STRATEGY]
 * ตั้งค่าข้อมูลเพื่อให้ระบบค้นหาและ AI เข้าใจตัวตนของ AEMDEVWEB ได้ทันที
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.project.title,
    template: `%s | ${siteConfig.project.name}`,
  },
  description: siteConfig.project.description,
  metadataBase: new URL(siteConfig.project.url),
  keywords: siteConfig.keywords.list,
  authors: [
    { name: siteConfig.expert.realName, url: siteConfig.links.personal },
  ],
  creator: siteConfig.expert.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
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
}

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
        fontHeading.variable,
        fontBody.variable,
        "antialiased"
      )}
      suppressHydrationWarning
    >
      <head>
        {/* [SCHEMA] ใส่ข้อมูลธุรกิจเพื่อให้ Google จัดอันดับได้แม่นยำที่สุด */}
        <JsonLd
          type="WebSite"
          data={{
            name: siteConfig.project.name,
            alternateName: siteConfig.project.nameTH,
            url: siteConfig.project.url,
            publisher: {
              "@type": "Person",
              name: siteConfig.expert.realName,
              jobTitle: siteConfig.expert.role,
              url: siteConfig.links.personal,
              sameAs: [
                siteConfig.links.facebook,
                siteConfig.links.linkedin,
                siteConfig.links.tiktok,
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
        {/* แถบสถานะการโหลด: สีเขียว Emerald สื่อถึงความซิ่งและความพร้อมให้บริการ */}
        <NextTopLoader
          color="#10b981"
          height={3}
          showSpinner={false}
          easing="ease"
          speed={300}
          shadow="0 0 10px #10b981,0 0 5px #10b981"
          zIndex={1600}
        />

        {/* ส่วนประกอบของเนื้อหาหลัก */}
        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* ระบบแจ้งเตือน (Sonner): ดีไซน์เรียบง่าย ใช้งานสะดวก */}
        <Toaster richColors closeButton position="top-center" expand={false} />
      </body>
    </html>
  )
}
