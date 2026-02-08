/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v17.0.2 (FINAL_STABILIZED)
 * [STRATEGY]: Zero-Jitter Font Loading | SEO Authority Protocol | Interaction Safety
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";

// --- Infrastructure & Constants ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// --- Layout & Global UI ---
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/layout/TopLoader";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { Toaster } from "@/components/ui/sonner";

// --- Styles ---
import "./globals.css";

/* [A] FONT ORCHESTRATION */
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true, // เพิ่มเพื่อความเสถียรของ Layout ฝั่งภาษาอังกฤษ
  preload: true,
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"], // [OPTIMIZED]: โหลดเฉพาะ Subset ไทยเพื่อลดขนาดไฟล์
  variable: "--font-thai",
  display: "swap", // [OPTIMIZED]: แสดงผลข้อความทันที
  adjustFontFallback: true, // [OPTIMIZED]: ป้องกัน Layout กระตุก (CLS)
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
  creator: SITE_CONFIG.brandName,
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  alternates: {
    canonical: "./",
  },

  /* [NEW]: การจัดการไอคอนระบบ (App Icons) */
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.project.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: "/images/og-main.webp", // ตรวจสอบว่ามีไฟล์นี้ใน public/images หรือไม่
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.project.title,
    description: SITE_CONFIG.description,
    images: ["/images/og-main.webp"],
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
};

export const viewport: Viewport = {
  themeColor: "#050505",
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
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased", fontSans.variable, fontThai.variable)}
    >
      <body
        className={cn(
          "font-thai selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen overflow-x-hidden bg-[#050505] text-slate-200",
          /* [TYPOGRAPHY SYSTEM]: จัดความสำคัญของฟอนต์ */
          "[&_p]:font-thai [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans [&_span.font-mono]:font-sans",
        )}
      >
        {/* --- [1] ATMOSPHERIC INFRASTRUCTURE --- */}
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid System */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:32px_32px]" />

          {/* Ambient Aura */}
          <div className="animate-pulse-slow bg-brand-primary/5 absolute -top-[20%] -left-[20%] h-[600px] w-[600px] rounded-full mix-blend-screen blur-[120px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 mix-blend-screen blur-[100px]" />
        </div>

        {/* --- [2] ORCHESTRATION LAYER --- */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <TopLoader color="#22c55e" showSpinner={false} height={2} />

          <Navbar />

          <main id="main-content" className="flex flex-grow flex-col">
            {children}
          </main>

          <Footer />
        </div>

        {/* --- [3] GLOBAL NODES (Overlays) --- */}
        <div className="pointer-events-none fixed right-0 bottom-0 z-[60] flex flex-col items-end gap-4 p-4 md:p-6">
          <div className="pointer-events-auto">
            <LineStickyButton />
          </div>
          <Toaster
            position="bottom-right"
            theme="dark"
            richColors
            closeButton
            className="font-sans"
          />
        </div>
      </body>
    </html>
  );
}
