/** @format */

import React from "react"
import { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { IBM_Plex_Sans_Thai, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import { Toaster } from "@/components/ui/sonner"

import "@/app/globals.css"

/**
 * [FONT SYSTEM 2026]
 * IBM Plex Sans Thai: ส่วนหัวข้อ (สร้างภาพลักษณ์ที่มั่นคงและมีมาตรฐาน)
 * Anuphan: ส่วนเนื้อหา (เน้นการเข้าถึงข้อมูลที่ชัดเจนและร่วมสมัย)
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
 * [SEARCH ENGINE OPTIMIZATION]: การตั้งค่าข้อมูลหลักของเว็บไซต์
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.project.title,
    template: `%s | ${siteConfig.project.name}`,
  },
  description: siteConfig.project.description,
  metadataBase: new URL(siteConfig.project.url),
  alternates: {
    canonical: "./",
  },
  keywords: siteConfig.keywords.all,
  authors: [
    { name: siteConfig.expert.realName, url: siteConfig.links.personal },
  ],
  creator: siteConfig.expert.name,
  publisher: siteConfig.company.name,
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
  // ตั้งค่าระบบดึงข้อมูลเพื่อให้แสดงภาพลักษณ์ที่ดีที่สุดบนแพลตฟอร์มการค้นหา
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

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth antialiased",
        fontHeading.variable,
        fontBody.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* [SCHEMA MARKUP]: การระบุความสัมพันธ์ของข้อมูลเพื่อให้ระบบการค้นหาเข้าใจตัวตนของธุรกิจอย่างแม่นยำ */}
        <JsonLd
          type="Organization"
          data={{
            "@id": `${siteConfig.project.url}/#organization`,
            name: siteConfig.company.name,
            url: siteConfig.project.url,
            logo: `${siteConfig.project.url}${siteConfig.project.logo}`,
            founder: {
              "@type": "Person",
              "@id": `${siteConfig.links.personal}/#person`,
              name: siteConfig.expert.realName,
              jobTitle: siteConfig.expert.role,
              description: siteConfig.expert.bio,
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: siteConfig.company.email,
              contactType: "customer service",
              areaServed: "TH",
              availableLanguage: ["Thai", "English"],
            },
            sameAs: [
              siteConfig.links.facebook,
              siteConfig.links.linkedin,
              siteConfig.links.tiktok,
              siteConfig.links.line,
            ].filter(Boolean),
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-white text-slate-900 selection:bg-emerald-500/10 selection:text-emerald-900">
        {/* แถบสถานะการโหลด: ใช้สีประจำอัตลักษณ์เพื่อความต่อเนื่องของประสบการณ์ผู้ใช้งาน */}
        <NextTopLoader color="#10b981" showSpinner={false} height={3} />

        <main className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </main>

        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
