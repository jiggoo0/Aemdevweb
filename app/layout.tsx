/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v17.3.9 (STABILIZED)
 * [STRATEGY]: Theme Orchestration | Zero-Jitter Font Loading | SEO Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";

// --- Infrastructure & Providers ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import { generateBusinessSchema } from "@/lib/schema";
import { ThemeProvider } from "@/components/providers/theme-provider";

// --- Layout & Global UI ---
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/layout/TopLoader";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";

// --- Styles ---
import "./globals.css";

/* [A] FONT ORCHESTRATION: จัดการระบบตัวอักษรเพื่อ CLS: 0 */
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  preload: true,
});

/* [B] SEO & METADATA PROTOCOL */
export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.project.title,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.siteUrl }],
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.project.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.brandName,
    images: [{ url: "/images/og-main.png", width: 1200, height: 630, alt: SITE_CONFIG.brandName }],
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
  verification: { google: SITE_CONFIG.verification.google },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateBusinessSchema();

  return (
    <html
      lang="th"
      /* [MANDATE]: ป้องกันการแจ้งเตือนเรื่อง Hydration mismatch จาก next-themes */
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased", fontSans.variable, fontThai.variable)}
    >
      <body
        className={cn(
          "min-h-screen overflow-x-hidden transition-colors duration-500",
          /* [HYBRID THEME]: ใช้ Semantic Variables แทนสีแบบ Hardcode */
          "bg-surface-main text-text-primary font-thai",
          "selection:bg-brand-primary/20 selection:text-brand-primary",
          "[&_p]:font-thai [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans",
        )}
      >
        <ThemeProvider>
          <JsonLd data={businessSchema} />

          {/* --- [1] ATMOSPHERIC INFRASTRUCTURE: เลเยอร์พื้นหลัง --- */}
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
            {/* Noise Texture เพื่อความพรีเมียม */}
            <div
              className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Infrastructure Grid ที่ปรับสีตามธีม */}
            <div className="bg-infrastructure-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            {/* Ambient Lighting: ปรับความสว่างตาม --ambient-opacity */}
            <div className="ambient-aura absolute -top-[20%] -left-[20%] h-[600px] w-[600px] opacity-[var(--ambient-opacity)]" />
            <div className="absolute -right-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 mix-blend-screen blur-[100px] opacity-[var(--ambient-opacity)]" />
          </div>

          {/* --- [2] CORE INTERFACE LAYER --- */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <TopLoader />
            <Navbar />
            <main id="main-content" className="relative flex flex-grow flex-col">
              {children}
            </main>
            <Footer />
          </div>

          {/* --- [3] GLOBAL OVERLAYS --- */}
          <div className="pointer-events-none fixed right-0 bottom-0 z-[60] flex flex-col items-end gap-4 p-4 md:p-6">
            <div className="pointer-events-auto">
              <LineStickyButton />
            </div>
            <Toaster position="bottom-right" richColors closeButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
