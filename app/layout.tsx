/** @format */
import type { Metadata, Viewport } from "next"
import { Kanit, Prompt, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

// 🔤 1. Font Configurations
// Kanit: ใช้สำหรับ Headings (สไตล์ Brutalist ที่เน้นความหนาและทรงพลัง)
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
})

// Prompt: ใช้สำหรับ Body Text (เน้นการอ่านง่าย สบายตา)
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
})

// JetBrains Mono: ใช้สำหรับตัวเลขหรือโค้ด (เน้นความรู้สึก Technical/Engineering)
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

// 📱 2. Viewport Settings
export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ User Zoom ได้เพื่อ Accessibility
}

// 🔍 3. SEO Metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "SME",
    "Landing Page",
    "Next.js",
    "React",
    "AEMDEVWEB",
    "ทำเว็บติดหน้าแรก",
    "สถาปัตยกรรมดิจิทัล",
  ],
  authors: [{ name: "AEMDEVWEB Team", url: siteConfig.url }],
  creator: "AEMDEVWEB",
  publisher: "AEMDEVWEB",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aemdevweb",
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

// 🏗️ 4. Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // ผูก Font Variables เข้ากับ Class เพื่อให้ Tailwind เรียกใช้ได้
          kanit.variable,
          prompt.variable,
          jetbrains.variable
        )}
      >
        {/* Main Content Architecture */}
        <main className="relative flex min-h-screen flex-col">{children}</main>

        {/* Global UI Components */}
        <Toaster />
      </body>
    </html>
  )
}
