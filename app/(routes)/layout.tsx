/**
 * [ROUTE GROUP INFRASTRUCTURE]: BUSINESS_ROUTES_LAYOUT v17.1.0 (SERVER-SIDE-OPTIMIZED)
 * [STRATEGY]: Server Component Base | Client Transition Island | Metadata Capable
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import PageTransition from "@/components/layout/PageTransition"; // Import ตัวที่แยกไว้
import ConversionCTA from "@/components/shared/ConversionCTA";

// [ADDED]: ตอนนี้สามารถใส่ Metadata รวมของ Group นี้ได้แล้ว (ถ้าต้องการ)
/*
export const metadata = {
  title: 'บริการและโซลูชัน | AEMDEVWEB',
  description: 'รวมบริการรับทำเว็บไซต์และ SEO ครบวงจร',
}
*/

export default function RoutesLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="bg-surface-main relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 01. CONTENT ORCHESTRATOR: ส่งต่อหน้าที่ Animation ให้ Client Component */}
      <PageTransition>
        {children}
      </PageTransition>

      {/* 02. STRATEGIC FOOTER CTA: แยกออกมาอยู่นิ่งๆ ไม่ต้อง Re-render ตาม Route */}
      <section className="bg-surface-main relative z-10 border-t border-white/5 py-24">
        {/* Background Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
          aria-hidden="true"
        >
          <div className="bg-infrastructure-grid absolute inset-0" />
          <div className="ambient-aura absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[0.1] blur-[120px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
          <ConversionCTA
            title="พร้อมวางรากฐานธุรกิจสู่ปี 2026 หรือยังครับ?"
            description="ไม่ว่าธุรกิจของคุณจะอยู่ในระยะไหน ทีม Specialist ของเราพร้อมให้คำปรึกษาเพื่อหาโซลูชันที่คุ้มค่าและวัดผลได้จริง"
            buttonLabel="ปรึกษาแผนงานกับผู้เชี่ยวชาญ"
          />
        </div>
      </section>
    </div>
  );
}
