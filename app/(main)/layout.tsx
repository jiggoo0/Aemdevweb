/**
 * [(MAIN) LAYOUT]: CORE_ORCHESTRATOR v17.9.117
 * [STRATEGY]: Stacking Context Isolation | Async Type-Safety | Mobile-First Spacing
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | string[] | undefined }>;
}

export default async function MainLayout({ children, params }: MainLayoutProps) {
  // [CORE]: Resolve params เพื่อรองรับมาตรฐาน Next.js 15+ และป้องกัน Lint Error
  await params;

  return (
    <div className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary relative flex min-h-dvh flex-col font-sans antialiased">
      {/* [LAYER 1]: NAVIGATIONAL OVERLAY (Fixed)
          Navbar ตัวนี้รองรับ Framer Motion และลอยอยู่ด้านบนสุดของ Stacking Context
      */}
      <Navbar />

      {/* [LAYER 2]: MAIN CONTENT HUB
          - pt-24 (96px) md:pt-28 (112px): เผื่อพื้นที่ให้ Fixed Navbar อย่างแม่นยำ
          - isolate: สร้าง Stacking Context ใหม่ป้องกัน z-index ภายในตีกับภายนอก
          - flex-grow: บังคับให้ขยายตัวเต็มพื้นที่แนวตั้งเสมอ
      */}
      <main
        id="main-content"
        className={cn(
          "relative z-0 flex flex-grow flex-col",
          "pt-24 md:pt-28", // Clearance for Fixed Navbar
          "isolate outline-none",
        )}
      >
        {children}
      </main>

      {/* [LAYER 3]: FOOTER TERMINUS
          - shrink-0: ป้องกัน Footer ถูกบีบอัดในหน้าที่มี Content น้อย
          - z-10: ยกระดับขึ้นมาเล็กน้อยเพื่อให้ Shadow หรือ Border แสดงผลได้ถูกต้อง
      */}
      <footer className="bg-surface-main relative z-10 shrink-0">
        <Footer />
      </footer>

      {/* [LAYER 4]: FLOATING CONVERSION GATEWAY
          - z-[100]: ระดับสูงสุด (Topmost Layer) เหนือ Navbar และ Overlay อื่นๆ
          - pointer-events-none: ป้องกัน Container บังการคลิกในจุดที่ไม่มีปุ่ม
      */}
      <div className="safe-area-bottom pointer-events-none fixed right-6 bottom-6 z-[100]">
        <div className="pointer-events-auto transform-gpu transition-all duration-300 hover:scale-110 active:scale-95">
          <LineStickyButton />
        </div>
      </div>
    </div>
  );
}
