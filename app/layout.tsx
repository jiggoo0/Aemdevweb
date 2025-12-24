/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

// 🔹 ใช้ฟอนต์ Kanit พร้อมตั้งค่า display: 'swap' เพื่อลดปัญหา Layout Shift (CLS)
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-kanit",
  display: "swap", // 👈 ช่วยให้แสดงตัวอักษรทันทีด้วยฟอนต์สำรองก่อน Kanit จะโหลดเสร็จ
})

/**
 * 🛠️ การตั้งค่า Metadata
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
  },
  twitter: {
    card: "summary_large_image",
    title: "AEMDEVWEB",
    description: "Industrial Web Architecture & Development",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // 👈 แนะนำให้เพิ่มสำหรับ iOS
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // 👈 ปรับเป็น 5 เพื่อ Accessibility (ให้คนสายตาไม่ดีซูมดูได้)
  themeColor: "#0f172a",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" suppressHydrationWarning className={kanit.variable}>
      <body
        className={`min-h-screen font-sans antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
