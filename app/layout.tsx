/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-kanit",
  display: "swap",
})

/**
 * 🛠️ การตั้งค่า Metadata (Fixed OG Images)
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.aemdevweb.com"
      : "http://localhost:3000"
  ),
  title: {
    default: "AEMDEVWEB | Industrial Web Architecture",
    template: "%s | AEMDEVWEB",
  },
  description:
    "บริการพัฒนาเว็บไซต์ระดับ Enterprise และวางโครงสร้าง Digital Architecture ที่แข็งแกร่ง",
  keywords: ["Web Development", "Next.js", "Industrial Design", "AEMDEVWEB"],
  authors: [{ name: "AEMDEVWEB" }],
  openGraph: {
    title: "AEMDEVWEB | Industrial Web Architecture",
    description:
      "Enterprise-level web development and digital architecture solutions.",
    url: "https://www.aemdevweb.com",
    siteName: "AEMDEVWEB",
    locale: "th_TH",
    type: "website",
    // ✅ เพิ่มส่วนนี้เพื่อให้ Social Media แสดงรูปภาพ
    images: [
      {
        url: "/og-image.png", // ไฟล์ต้องอยู่ที่ public/og-image.png
        width: 1200,
        height: 630,
        alt: "AEMDEVWEB Industrial Web Architecture Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEMDEVWEB",
    description: "Industrial Web Architecture & Development",
    // ✅ เพิ่มส่วนนี้สำหรับ Twitter/X
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" suppressHydrationWarning className={kanit.variable}>
      <body className="min-h-screen font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
