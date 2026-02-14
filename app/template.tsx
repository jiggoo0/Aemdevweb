/**
 * [SYSTEM MODULE]: ROOT_TRANSITION_ORCHESTRATOR v17.9.31 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Framer Motion Re-mount | Layout Persistence | GPU Paint-Lock
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React from "react";
import PageTransition from "@/components/layout/PageTransition";

/**
 * @template RootTemplate
 * @description หน่วยประมวลผลกลางที่ควบคุมจังหวะการเข้า-ออกของเนื้อหาในระดับ Root
 * [ENGINEERING]: ใช้ 'template.tsx' เพื่อบังคับให้ React ทำการ Re-mount ทุกครั้งที่เปลี่ยน Route
 * ทำให้แอนิเมชัน PageTransition ทำงานได้อย่างแม่นยำทุกครั้ง
 */
export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    /**
     * [STRATEGY]: Transition Shield
     * ห่อหุ้มด้วย bg-surface-main และ min-h-screen
     * เพื่อป้องกัน "Transition Gap" (ช่องว่างสีขาว) ในช่วงรอยต่อของแอนิเมชัน
     */
    <div className="bg-surface-main relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <PageTransition className="flex w-full flex-grow flex-col">
        {/* [INJECTION]: เนื้อหาจาก page.tsx จะถูกประมวลผลแอนิเมชันที่นี่ */}
        {children}
      </PageTransition>
    </div>
  );
}
