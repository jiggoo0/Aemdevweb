/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v18.2.0 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Zero-FOUC Injection | Semantic Core | LCP Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { Metadata, Viewport } from "next";
import React from "react";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// --- 1. Infrastructure & Core Constants ---
import { SITE_CONFIG } from "@/constants/site-config";
import { generateSchemaGraph } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { type LayoutProps } from "@/types";

// --- 2. Providers & SEO ---
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
import ClientInfrastructure from "@/components/providers/ClientInfrastructure";

// --- 3. Style Engine ---
import "./globals.css";

// [FONT_ORCHESTRATION]: Optimized for Thai/Latin Glyph Balancing
const fontSans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans", 
  display: "swap" 
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: { 
    default: SITE_CONFIG.project.title, 
    template: `%s | ${SITE_CONFIG.brandName}` 
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.brandName,
  authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
  generator: "AEMDEVWEB Engine v18",
  keywords: [...SITE_CONFIG.keywords],
  icons: { 
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.brandName,
    images: [{ 
      url: SITE_CONFIG.ogImage, 
      width: 1200, 
      height: 630, 
      alt: SITE_CONFIG.brandName 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.project.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.expert.twitterHandle,
    images: [SITE_CONFIG.ogImage],
  },
  verification: {
    google: SITE_CONFIG.verification.google,
    other: {
      "facebook-domain-verification": SITE_CONFIG.verification.facebook || "",
    },
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE_CONFIG.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps) {
  // [INSIGHT]: Global Graph Injection for sitewide entity linking
  const schemaGraph = generateSchemaGraph([]);

  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth focus-within:scroll-auto", 
        fontSans.variable, 
        fontThai.variable
      )}
    >
      <head>
        <JsonLd data={schemaGraph} id="global-knowledge-graph" />
        {/* [CRITICAL_CSS]: Inline styles for instant paint & Zero-FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { background-color: ${SITE_CONFIG.themeColor}; }
              .dark { background-color: #020617; }
              body:not(.hydrated) { visibility: hidden; opacity: 0; }
              body.hydrated { visibility: visible; opacity: 1; transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
              #root-container { contain-intrinsic-size: 1000px; }
            `,
          }}
        />
        {/* [HYDRATION_SHIELD]: Script to trigger visibility immediately after DOM ready */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const observer = new MutationObserver(() => {
                  if (document.body) {
                    document.body.classList.add('hydrated');
                    observer.disconnect();
                  }
                });
                observer.observe(document.documentElement, { childList: true });
                window.addEventListener('DOMContentLoaded', () => document.body.classList.add('hydrated'));
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-surface-main text-text-primary min-h-dvh antialiased",
          "selection:bg-brand-primary/30 selection:text-brand-primary",
          "overflow-x-hidden font-sans"
        )}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          {/* [INFRA]: Client-side logic for analytics, performance, and global listeners */}
          <ClientInfrastructure />
          
          <main
            id="root-container"
            className="relative flex min-h-dvh flex-col"
            style={{ contentVisibility: "auto" } as React.CSSProperties}
          >
            {children}
          </main>

          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
