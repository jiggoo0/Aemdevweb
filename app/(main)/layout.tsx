/**
 * [(MAIN) LAYOUT]: CORE_ORCHESTRATOR v18.0.2 (ULTIMATE_STABILITY)
 * [STRATEGY]: Accessibility Priority | Layered Architecture | Next.js 15 Async Params
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | string[] | undefined }>;
}

export default async function MainLayout({ children, params }: MainLayoutProps) {
  // [CORE]: Next.js 15 Async Params Resolve (ป้องกัน Hydration Mismatch)
  await params;

  return (
    <div className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary relative flex min-h-dvh flex-col font-sans antialiased">
      {/* [A11Y]: Skip to Content (สำคัญมากสำหรับ SEO & Accessibility) */}
      <a
        href="#main-content"
        className="bg-brand-primary absolute top-0 left-0 z-[100] -translate-y-full px-4 py-2 text-white transition-transform focus:translate-y-0"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      {/* [LAYER 1]: NAVIGATIONAL OVERLAY (Fixed) */}
      <Navbar />

      {/* [LAYER 2]: MAIN CONTENT HUB 
          - pt-24 (96px) md:pt-28 (112px): Clearance สำหรับ Fixed Navbar
          - isolate: ป้องกัน z-index ภายในตีกับระบบ Overlay ภายนอก
      */}
      <main
        id="main-content"
        className={cn(
          "relative z-0 flex flex-grow flex-col",
          "pt-24 md:pt-28",
          "isolate outline-none",
        )}
      >
        {children}
      </main>

      {/* [LAYER 3]: FOOTER TERMINUS */}
      <footer className="bg-surface-main border-border/40 relative z-10 shrink-0 border-t">
        <Footer />
      </footer>
    </div>
  );
}
