// @format
// พิกัดข้อมูล: app/layout.tsx
// หน้าที่: พิกัดควบคุมโครงสร้างพื้นฐานและระบบรากของเว็บไซต์ (Root Layout)
// มาตรฐาน: Next.js 16 | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import React from "react";
import { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { IBM_Plex_Sans_Thai, Anuphan } from "next/font/google";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";

import "@/app/globals.css";

/**
 * [DNA FONT SYSTEM 2026]
 * IBM Plex Sans Thai: สำหรับส่วนหัวพิกัดข้อมูล (ความมั่นคงและมาตรฐานสากล)
 * Anuphan: สำหรับเนื้อหาหลักของระบบงาน (ความชัดเจนและร่วมสมัย)
 */
const fontHeading = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/**
 * [SEARCH ENGINE PERFORMANCE]: การกำหนดพิกัดชุดข้อมูล Metadata
 * เน้นความแม่นยำของพิกัดตัวตนแบรนด์บนระบบการค้นหายุคใหม่
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.project.title,
    template: `%s | ${siteConfig.project.name}`,
  },
  description: siteConfig.project.description,
  metadataBase: new URL(siteConfig.project.url),
  alternates: {
    canonical: "./",
  },
  keywords: siteConfig.keywords.all,
  authors: [
    { name: siteConfig.expert.realName, url: siteConfig.links.personal },
  ],
  creator: siteConfig.expert.name,
  publisher: siteConfig.company.name,
  openGraph: {
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    url: siteConfig.project.url,
    siteName: siteConfig.project.name,
    images: [
      {
        url: siteConfig.project.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.project.title,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    images: [siteConfig.project.ogImage],
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

/**
 * Viewport Configuration: กำหนดสีพื้นฐานของแถบสถานะ (Status Bar)
 * ปรับปรุงพิกัดสีเป็น OKLCH ตามมาตรฐานระบบปี 2026
 */
export const viewport: Viewport = {
  themeColor: "oklch(0.7 0.2 160)",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth antialiased",
        fontHeading.variable,
        fontBody.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        {/* [ENTITY CONNECTIVITY]: การยืนยันพิกัดตัวตนเพื่อความน่าเชื่อถือระดับสูง */}
        <JsonLd
          type="Organization"
          data={{
            "@id": `${siteConfig.project.url}/#organization`,
            name: siteConfig.company.name,
            url: siteConfig.project.url,
            logo: `${siteConfig.project.url}/images/logo-circuit.png`,
            founder: {
              "@type": "Person",
              "@id": `${siteConfig.links.personal}/#person`,
              name: siteConfig.expert.realName,
              jobTitle: siteConfig.expert.role,
              description: siteConfig.expert.bio,
              url: siteConfig.links.personal,
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: siteConfig.company.email,
              contactType: "customer service",
              areaServed: "TH",
              availableLanguage: ["Thai", "English"],
            },
            sameAs: [
              siteConfig.links.facebook,
              siteConfig.links.linkedin,
              siteConfig.links.tiktok,
              siteConfig.links.line,
              siteConfig.links.x,
              siteConfig.links.github,
            ].filter((link): link is string => !!link),
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-[oklch(1_0_0)] text-[oklch(0.2_0.02_260)] selection:bg-[oklch(0.7_0.2_160_/_0.1)] selection:text-[oklch(0.4_0.15_160)]">
        {/* ระบบแถบสถานะประมวลผล: Emerald Depth Identity */}
        <NextTopLoader
          color="oklch(0.7 0.2 160)"
          showSpinner={false}
          height={3}
        />

        {/* พิกัดแสดงผลเนื้อหาระบบงานหลัก */}
        <main className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </main>

        {/* ระบบแจ้งเตือนส่วนหน้าจอ (Global Notification Node) */}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
