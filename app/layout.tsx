/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Unified Theme Orchestration | Chroma Sync Hardening | Zero-CLS
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// --- 1. Infrastructure & Providers ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
// [FIX]: Import ให้ตรงกับ Named Export
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// --- 2. Global UI Components ---
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/layout/TopLoader";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { Toaster } from "@/components/ui/Sonner";

import "./globals.css";

/* FONT ORCHESTRATION */
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.project.title,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.expert.displayName }],
  creator: SITE_CONFIG.expert.legalName,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.brandName,
    images: [{ url: "/images/og-main.webp", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: SITE_CONFIG.verification.google },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontSans.variable,
        fontThai.variable,
        fontMono.variable,
      )}
    >
      <body
        className={cn(
          "bg-surface-main text-text-primary font-thai min-h-screen overflow-x-hidden",
          "selection:bg-brand-primary/20 selection:text-brand-primary",
        )}
      >
        <div
          className="pointer-events-none fixed inset-0 z-0 transform-gpu opacity-[0.15]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          aria-hidden="true"
        />
        <div
          className="bg-noise pointer-events-none fixed inset-0 z-0 opacity-[0.03] will-change-transform"
          aria-hidden="true"
        />

        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TopLoader color="var(--brand-primary)" showSpinner={false} height={2} />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />

            <main id="main-content" className="relative flex flex-grow flex-col outline-none">
              {children}
            </main>

            <Footer />
          </div>

          <div className="pointer-events-none fixed right-0 bottom-0 z-[60] flex flex-col items-end gap-4 p-4 md:p-6">
            <div className="pointer-events-auto">
              <LineStickyButton />
            </div>
            <Toaster
              theme="dark"
              position="bottom-right"
              richColors
              closeButton
              toastOptions={{
                className:
                  "rounded-2xl border border-border bg-surface-card text-text-primary shadow-pro-lg",
              }}
            />
          </div>

          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
