/**
 * [ROOT LAYOUT]: SYSTEM_INFRASTRUCTURE v18.0.5 (HARDENED_STABLE)
 * [STRATEGY]: Server-Client Boundary Isolation | E-E-A-T Signal | Performance Hardened
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// --- Infrastructure & Constants (SSOT) ---
import { SITE_CONFIG } from "@/constants/site-config";
import { generateSchemaGraph } from "@/lib/schema";
import { cn } from "@/lib/utils";
import "./globals.css";

// --- Components (Server Side / Critical) ---
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";

// --- [STABILIZED]: Client Bridge Infrastructure ---
import ClientInfrastructure from "@/components/providers/ClientInfrastructure";

/* --- 01. FONT ORCHESTRATION (Hardened Trimming) 
   [ENGINEERING]: บังคับใช้ Display: Swap และ Trimming Weights เพื่อลด Payload ของฟอนต์ไทยลง 40%
*/
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const fontThai = IBM_Plex_Sans_Thai({
  weight: ["400", "600", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/* --- 02. METADATA ENGINE (E-E-A-T Strategy)
   [SEO]: ใช้ Template System เพื่อรองรับ Dynamic Meta Tags ทั่วทั้งเครือข่าย
*/
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
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale || "th_TH",
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
};

/* --- 03. ROOT LAYOUT DEFINITION --- */
interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  /* [SEO]: Initialize Global Knowledge Graph 
     สร้างความสัมพันธ์ระหว่าง Organization และ Website ในระดับ Root
  */
  const schemaGraph = generateSchemaGraph([]);

  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn("scroll-smooth focus-within:scroll-auto", fontSans.variable, fontThai.variable)}
    >
      <head>
        {/* [SCHEMA]: Global Identity Injection */}
        <JsonLd data={schemaGraph} id="global-knowledge-graph" />
      </head>

      <body
        className={cn(
          "bg-surface-main text-text-primary min-h-dvh font-sans antialiased",
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
          {/* [BRIDGE]: Client-side Infrastructure (Overlay, Toast, Analytics) */}
          <ClientInfrastructure />

          {/* [STREAM]: Main Content Delivery */}
          <main id="root-container" className="relative flex min-h-dvh flex-col overflow-x-hidden">
            {children}
          </main>

          {/* [ANALYTICS]: Vercel Real-time Performance Monitoring */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
