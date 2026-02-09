/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v17.5.0 (STABILIZED_FINAL)
 * [STRATEGY]: Unified Theme Orchestration | Zero-CLS Font Loading | High-Fidelity UX
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai, JetBrains_Mono } from "next/font/google";

// --- 1. Infrastructure & Providers ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

// --- 2. Global UI Components ---
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/layout/TopLoader";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { Toaster } from "@/components/ui/sonner";

// --- 3. Styles ---
import "./globals.css";

/* [A] FONT ORCHESTRATION: โหลดแบบ Swap เพื่อรักษาค่า CLS: 0 และความคมชัดระดับ Retina */

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
  adjustFontFallback: false, // ปิดเพื่อใช้ Metrics ของ IBM โดยตรง
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

/* [B] SEO PROTOCOL: ระบบ Metadata เชิงยุทธศาสตร์ระดับ Specialist */
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
    images: [{ url: "/images/og-main.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: { google: SITE_CONFIG.verification.google },
};

/* [C] VIEWPORT & CHROMA SYNC: ปรับจูนสี Browser UI ตามสถานะธีม */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontSans.variable,
        fontThai.variable,
        fontMono.variable
      )}
    >
      <body
        className={cn(
          "bg-surface-main text-text-primary font-thai min-h-screen overflow-x-hidden",
          "selection:bg-brand-primary/20 selection:text-brand-primary"
        )}
      >
        {/* --- 01. GLOBAL AMBIENT LAYER: หน่วยสร้างบรรยากาศทางวิศวกรรม --- */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.15]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          aria-hidden="true"
        />
        <div
          className="bg-noise pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        />

        {/* --- 02. CORE APPLICATION NODES --- */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* ระบบแถบโหลดด้านบน: ประมวลผลล่วงหน้าเพื่อลดค่า Perceived Latency */}
          <TopLoader color="var(--brand-primary)" showSpinner={false} height={2} />

          <div className="relative z-10 flex min-h-screen flex-col">
            {/* Accessibility: Skip to Content สำหรับผู้ใช้งานที่ใช้ Keyboard/Screen Reader */}
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
            
            <Navbar />
            <main id="main-content" className="relative flex flex-grow flex-col">
              {children}
            </main>
            <Footer />
          </div>

          {/* --- 03. GLOBAL OVERLAYS: เลเยอร์โต้ตอบระดับสูง --- */}
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
                className: "rounded-2xl border border-border bg-surface-card text-text-primary shadow-pro-lg",
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
