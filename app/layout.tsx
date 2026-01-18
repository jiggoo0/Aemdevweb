/** @format */
import type { Metadata, Viewport } from "next"
import { Prompt, Anuphan } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "@/components/ui/sonner"
import { AppProvider } from "@/providers/AppProvider"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import "./globals.css"

// --- 1. Setup Fonts: Modern Thai Stack ---
const fontPrompt = Prompt({
  weight: ["400", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
  preload: true,
})

const fontAnuphan = Anuphan({
  weight: ["400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
})

// --- 2. SEO & Metadata Strategy ---
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "Next.js 15",
    "ทำเว็บ SME",
    "Sale Page",
    "aemdevweb",
    ...siteConfig.keywords,
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aemdevweb",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
}

// ✅ Viewport Optimization
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }, // Matches bg-background
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
          "bg-background selection:bg-aurora-cyan/30 selection:text-aurora-cyan min-h-screen font-sans antialiased transition-colors duration-500",
          fontPrompt.variable,
          fontAnuphan.variable
        )}
      >
        {/* 🚀 NextTopLoader: Tuned for Midnight Theme */}
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
          {/* Main Wrapper */}
          <div className="relative flex min-h-screen flex-col">{children}</div>

          {/* Global Notification Engine */}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme="system"
            toastOptions={{
              className:
                "rounded-3xl border-white/10 bg-background/80 backdrop-blur-xl",
              style: {
                fontFamily: "var(--font-prompt)",
              },
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}
