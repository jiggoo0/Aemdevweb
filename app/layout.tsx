/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v17.9.113 (STRUCTURE_ALIGNED)
 * [STRATEGY]: Strict Type-Safety | Resource Prioritization | Path Alignment
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// --- Infrastructure & Constants ---
import { SITE_CONFIG } from "@/constants/site-config";
import { generateSchemaGraph } from "@/lib/schema";
import { cn } from "@/lib/utils";
import "./globals.css";

// --- Core Providers & UI Elements ---
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TopLoader } from "@/components/layout/TopLoader";
import { Toaster } from "@/components/ui/Sonner";
import JsonLd from "@/components/seo/JsonLd";

// --- Shared Feature Components ---
// [ALIGNED]: นำเข้าจากตำแหน่งจริงตาม Directory Tree (components/shared)
import LineStickyButton from "@/components/shared/LineStickyButton";

/* --- 01. FONT ORCHESTRATION --- */
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

/* --- 02. METADATA ENGINE --- */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.project.title,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.brandName,
  authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
  creator: SITE_CONFIG.expert.displayName,
  publisher: SITE_CONFIG.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.project.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
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
    creator: SITE_CONFIG.expert.twitterHandle,
    images: [SITE_CONFIG.ogImage],
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
  userScalable: true,
};

/* --- 03. ROOT LAYOUT DEFINITION --- */
interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // [SEO]: Initialize Global Knowledge Graph (Organization & Website)
  const schemaGraph = generateSchemaGraph([]);

  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn("scroll-smooth focus-within:scroll-auto", fontSans.variable, fontThai.variable)}
    >
      <head>
        {/* [CRITICAL_ASSET]: Preload LCP-breaking grid pattern */}
        <link
          rel="preload"
          href="/grid-pattern.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />
        <JsonLd data={schemaGraph} />
      </head>

      <body
        className={cn(
          "bg-surface-main text-text-primary min-h-[100dvh] font-sans antialiased",
          "selection:bg-brand-primary/30 selection:text-brand-primary",
          "transition-colors duration-300",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* [UI]: Persistent Perceived Performance Layer */}
          <TopLoader color={SITE_CONFIG.themeColor} />

          {/* [STRUCTURE]: Primary Content Engine */}
          <div className="relative flex min-h-[100dvh] flex-col overflow-x-hidden">{children}</div>

          {/* [CONVERSION]: Global Line Sticky Button Anchor */}
          <LineStickyButton />

          {/* [FEEDBACK]: Global Notification Provider */}
          <Toaster position="top-center" richColors expand={false} closeButton />

          {/* [INSIGHTS]: Performance Observability */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
