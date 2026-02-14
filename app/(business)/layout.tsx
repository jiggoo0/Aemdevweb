/**
 * [(BUSINESS) LAYOUT]: P-SEO_ORCHESTRATOR v17.9.107 (NAKED_SHELL)
 * [STRATEGY]: Naked Frame Execution | Server-Side Type Safety | Exit-Point Reduction
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LineStickyButton from "@/components/shared/LineStickyButton";
import { cn } from "@/lib/utils";

interface BusinessLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | undefined }>;
}

export default async function BusinessLayout({ children, params }: BusinessLayoutProps) {
  // [CORE]: Resolve params ป้องกัน Error TS2322 และรองรับอนาคต
  await params;

  return (
    <div className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary relative flex min-h-[100dvh] flex-col antialiased">
      {/* [LAYER 01]: CONTENT CORE
          ถอด Navbar/Footer ออกเพื่อลดทางออก (Exit Points) บังคับโฟกัสที่เนื้อหา 100%
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

      {/* [LAYER 02]: HIGH-PRIORITY FLOATING UI
          คงเหลือปุ่มติดต่อเพื่อรักษาโอกาส Conversion (CTA)
      */}
      <div className="pointer-events-none fixed right-0 bottom-0 z-[60] p-4 md:p-6 lg:p-8">
        <div className="pointer-events-auto transform-gpu transition-all duration-300 hover:scale-110 active:scale-95">
          <LineStickyButton />
        </div>
      </div>
    </div>
  );
}
