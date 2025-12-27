/** @format */
import type { Metadata, Viewport } from "next"
import { Kanit, Prompt, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import JsonLd from "@/components/seo/JsonLd" // ✅ Import JsonLd

// 🔤 1. Font Configurations
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
})

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
})

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
  maximumScale: 5,
}

// 🔍 3. SEO Metadata (Refined for Rank Math 100/100)
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำเว็บไซต์ SME",
    "รับทำ Landing Page",
    "ทำเว็บไซต์ราคาถูก",
    "AEMDEVWEB",
    "ทำเว็บติดหน้าแรก",
    "Digital Marketing SME",
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
      <head>
        {/* ✅ แทรก Structured Data สำหรับ SEO Analyzer */}
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          kanit.variable,
          prompt.variable,
          jetbrains.variable
        )}
      >
        <main className="relative flex min-h-screen flex-col">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
