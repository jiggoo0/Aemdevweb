/**
 * [ROUTE GROUP INFRASTRUCTURE]: BUSINESS_ROUTES_LAYOUT v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Server Component Base | Client Transition Island | Multi-Theme Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import PageTransition from "@/components/layout/PageTransition";
import ConversionCTA from "@/components/shared/ConversionCTA";

/**
 * @layout RoutesLayout
 * @description เลย์เอาต์หลักสำหรับกลุ่มหน้าธุรกิจ จัดการระบบ Transition และ Conversion Hub 
 * รองรับการสลับโหมด Dark/Light อัตโนมัติ
 */
export default function RoutesLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    /* [STABILIZED]: ใช้ bg-surface-main เพื่อรองรับการสลับโหมดสีทั้งระบบ */
    <div className="bg-surface-main relative flex min-h-screen flex-col overflow-x-hidden transition-colors duration-500">
      
      {/* 01. CONTENT ORCHESTRATOR: จัดการแอนิเมชันการเปลี่ยนหน้า */}
      <PageTransition>
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </PageTransition>

      {/* 02. STRATEGIC CONVERSION HUB: จุดเชื่อมต่อโอกาสทางธุรกิจ */}
      <section className="bg-surface-main relative z-10 border-t border-border py-24 md:py-32">
        
        {/* Atmospheric Infrastructure Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none"
          aria-hidden="true"
        >
          {/* Grid ปรับตามสี Border ของธีมโดยอัตโนมัติ */}
          <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
          
          {/* Ambient Aura: ปรับความสว่างตามตัวแปร --ambient-opacity ของธีม */}
          <div className="ambient-aura absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity)] blur-[120px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
          <ConversionCTA
            title="พร้อมวางรากฐานธุรกิจสู่ปี 2026 หรือยังครับ?"
            description="ไม่ว่าธุรกิจของคุณจะอยู่ในระยะไหน ทีม Specialist ของเราพร้อมให้คำปรึกษาเพื่อหาโซลูชันที่คุ้มค่าและวัดผลได้จริง"
            buttonLabel="ปรึกษาแผนงานกับผู้เชี่ยวชาญ"
            className="animate-in fade-in slide-in-from-bottom-10 duration-1000"
          />
        </div>
      </section>
    </div>
  );
}
