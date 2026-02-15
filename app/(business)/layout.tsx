/**
 * [(BUSINESS) LAYOUT]: P-SEO_ORCHESTRATOR v17.9.108 (PURE_NAKED_SHELL)
 * [STRATEGY]: Distraction-Free Execution | Zero Exit Points | Frameless Context
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { cn } from "@/lib/utils";

interface BusinessLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | undefined }>;
}

export default async function BusinessLayout({ children, params }: BusinessLayoutProps) {
  // [CORE]: Resolve params เพื่อรองรับมาตรฐาน Next.js 15+
  // ป้องกันปัญหาการเข้าถึงสัญลักษณ์ params ก่อนการ Resolve
  await params;

  return (
    <div className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary relative flex min-h-[100dvh] flex-col antialiased">
      {/* [LAYER 01]: PURE CONTENT CORE
          - ถอด Navbar, Footer และปุ่ม Floating ทั้งหมดออก
          - วัตถุประสงค์: บังคับให้อ่านข้อมูลจนจบ เพื่อเพิ่ม Time-on-Page และ CTR ภายในเนื้อหา
      */}
      <main
        id="business-content"
        className={cn(
          "relative flex-grow pt-0 outline-none",
          "transition-all duration-300 ease-in-out",
        )}
      >
        {children}
      </main>
    </div>
  );
}
