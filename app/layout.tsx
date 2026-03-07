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
import ReputationShield from "@/components/seo/ReputationShield";
import ClientInfrastructure from "@/components/providers/ClientInfrastructure";
import { constructMetadata } from "@/lib/seo-utils";

// --- 3. Style Engine ---
import "./globals.css";

// [FONT_ORCHESTRATION]: Optimized for Thai/Latin Glyph Balancing
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = constructMetadata({
  title: {
    default: SITE_CONFIG.project.title,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  path: "/",
});

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
      className={cn("scroll-smooth focus-within:scroll-auto", fontSans.variable, fontThai.variable)}
    >
      <head>
        <JsonLd data={schemaGraph} id="global-knowledge-graph" />
        <ReputationShield />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-surface-main text-text-primary min-h-dvh antialiased",
          "selection:bg-brand-primary/30 selection:text-brand-primary",
          "font-thai overflow-x-hidden",
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

          <div id="root-container" className="relative flex min-h-dvh flex-col">
            {children}
          </div>

          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
