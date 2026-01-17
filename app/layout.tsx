/** @format */
import type { Metadata, Viewport } from "next"
import { Inter, Kanit, Prompt, Anuphan } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "@/components/ui/sonner"
import { AppProvider } from "@/providers/AppProvider"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import "./globals.css"

// --- 1. Setup Fonts: Humanistic Palette ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  display: "swap",
})

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
})

const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
  display: "swap",
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
    "Web Development Thailand",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
          "bg-background min-h-screen font-sans antialiased transition-colors duration-500",
          "selection:bg-aurora-cyan/30 selection:text-aurora-cyan", // ปรับให้เข้ากับธีม Luminous
          inter.variable,
          kanit.variable,
          prompt.variable,
          anuphan.variable
        )}
      >
        {/* แถบโหลด: Gradient สไตล์ Luminous Tech */}
        <NextTopLoader
          color="linear-gradient(to right, oklch(0.75 0.12 200), oklch(0.82 0.18 155))"
          initialPosition={0.08}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={300}
        />

        <AppProvider>
          <div className="relative flex min-h-screen flex-col">{children}</div>

          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme="system"
            toastOptions={{
              style: {
                borderRadius: "1.25rem",
                padding: "1rem",
                fontFamily: "var(--font-prompt)",
              },
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}
