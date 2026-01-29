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
 * IBM Plex Sans Thai: สำหรับ Heading (ความมั่นคง/มาตรฐาน)
 * Anuphan: สำหรับ Body (ความชัดเจน/ร่วมสมัย)
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
 * [SEARCH ENGINE OPTIMIZATION]: Metadata Configuration
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
        {/* [SCHEMA MARKUP]: Unified Entity Bridge 2026 */}
        <JsonLd
          type="Organization"
          data={{
            "@id": `${siteConfig.project.url}/#organization`,
            name: siteConfig.company.name,
            url: siteConfig.project.url,
            // [Consolidated Logo]: ใช้ Logo หลักเพื่อสร้างภาพจำ Entity เดียวกัน
            logo: "https://www.aemdevweb.com/images/logo-circuit.png",
            founder: {
              "@type": "Person",
              // [Critical Bridge]: เชื่อมโยง Founder ไปยัง @id ของหน้า Portfolio
              "@id": "https://me.aemdevweb.com/#person",
              name: siteConfig.expert.realName,
              jobTitle: siteConfig.expert.role,
              description: siteConfig.expert.bio,
              url: "https://me.aemdevweb.com",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: siteConfig.company.email,
              contactType: "customer service",
              areaServed: "TH",
              availableLanguage: ["Thai", "English"],
            },
            // [Social Signals]: รวมทุกลิงก์เพื่อยืนยัน Authority ข้ามแพลตฟอร์ม
            // กรองค่าที่เป็น undefined ออกเพื่อให้ Schema สะอาด
            sameAs: [
              siteConfig.links.facebook,
              siteConfig.links.linkedin,
              siteConfig.links.tiktok,
              siteConfig.links.line,
              siteConfig.links.x,
              siteConfig.links.github,
            ].filter((link): link is string => !!link),
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-white text-slate-900 selection:bg-emerald-500/10 selection:text-emerald-900">
        {/* Progress Bar: Emerald Brand Identity */}
        <NextTopLoader color="#10b981" showSpinner={false} height={3} />

        <main className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </main>

        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  )
}
