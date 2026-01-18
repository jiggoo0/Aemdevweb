/** @format */
import type { Metadata, Viewport } from "next"
import { Prompt, Anuphan } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "@/components/ui/sonner"
import { AppProvider } from "@/providers/AppProvider"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import "./globals.css"

// --- 1. Setup Fonts: High-Performance Thai Stack ---
// ใช้ display: 'swap' เพื่อให้ Text ขึ้นทันที (ลด LCP)
// adjustFontFallback: false ช่วยลด CLS โดยไม่ให้ Next.js พยายามปรับ size font สำรอง
const fontPrompt = Prompt({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
  preload: true,
  adjustFontFallback: false, // ✅ Critical for CLS Optimization
})

const fontAnuphan = Anuphan({
  weight: ["400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
  adjustFontFallback: false, // ✅ Critical for CLS Optimization
})

// --- 2. SEO & Metadata Strategy ---
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName} - รับทำเว็บคุยง่าย`,
  },
  description: siteConfig.description,
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "จ้างทำเว็บคุยง่ายๆ",
    "รับทำเซลเพจ SME",
    "เว็บหน้าเดียวปิดการขาย",
    "AEMDEVWEB",
    ...siteConfig.keywords,
  ],
  authors: [{ name: "นายเอ็มซ่ามากส์", url: siteConfig.url }],
  creator: siteConfig.companyName,
  metadataBase: new URL(siteConfig.url),
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
        alt: "นายเอ็มซ่ามากส์ - High-Conversion Web Factory",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

// ✅ Viewport Optimization
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// --- 3. Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          "selection:bg-aurora-cyan/30 selection:text-aurora-cyan", // Theme Selection
          "transition-colors duration-500", // Smooth Theme Switch
          fontPrompt.variable,
          fontAnuphan.variable
        )}
      >
        {/* 🚀 NextTopLoader: Optimized Minimal Loader */}
        <NextTopLoader
          color="oklch(0.78 0.12 200)" // Aurora Cyan
          initialPosition={0.08}
          height={2}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px oklch(0.78 0.12 200),0 0 5px oklch(0.78 0.12 200)"
        />

        <AppProvider>
          {/* Main Wrapper Structure */}
          <div className="relative flex min-h-screen flex-col">{children}</div>

          {/* Global Notification Engine */}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme="system"
            toastOptions={{
              className:
                "rounded-3xl border-white/10 bg-background/80 backdrop-blur-xl font-prompt",
              style: { fontFamily: "var(--font-prompt)" },
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}
