import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { Prompt, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { constructMetadata, siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"
import { FacebookChat } from "@/components/shared/FacebookChat"

import "./globals.css"

// Font Configuration: Optimized for Thai/Latin Rendering
// Using 'optional' display strategy to prioritize LCP and prevent CLS
const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "optional",
  preload: true,
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "optional",
  preload: true,
})

export const metadata: Metadata = constructMetadata()
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
        fontPrompt.variable,
        fontAnuphan.variable,
        "thai-font-smoothing"
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "overflow-x-hidden"
        )}
      >
        {/* Navigation Progress Bar */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
          shadow="0 0 10px #10B981,0 0 5px #10B981"
        />

        {/* Third-party Integrations (Lazy Loaded) */}
        <FacebookChat />

        {/* Main Application Container */}
        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* Structured Data: Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: siteConfig.ogImage,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
