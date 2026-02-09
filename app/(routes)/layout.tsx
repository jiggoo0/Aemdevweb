/**
 * [ROUTE GROUP INFRASTRUCTURE]: BUSINESS_ROUTES_LAYOUT v17.4.7 (PATH_FIXED)
 * [STRATEGY]: Server Component Base | Client Transition Island | Multi-Theme Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";

/** * [FIXED]: ปรับปรุง Path จาก '@/components/shared/PageTransition'
 * เป็น '@/components/layout/PageTransition' ให้ตรงตามโครงสร้างจริงใน Termux
 */
import PageTransition from "@/components/layout/PageTransition";
import ConversionCTA from "@/components/shared/ConversionCTA";

/**
 * @layout RoutesLayout
 * @description เลย์เอาต์หลักสำหรับกลุ่มหน้าเนื้อหาเชิงกลยุทธ์
 * ทำหน้าที่เป็นโฮสต์ให้กับ Page Transition และหน่วย Conversion ท้ายหน้า
 */
export default function RoutesLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    /* [STABILIZED]: พื้นหลังหลักที่รองรับการสลับโหมด Dark/Light อัตโนมัติ */
    <div className="bg-surface-main relative flex min-h-screen flex-col overflow-x-hidden transition-colors duration-500">
      {/* --- 01. CONTENT ORCHESTRATOR --- 
          ใช้ PageTransition เพื่อครอบคลุมเนื้อหาทั้งหมดที่เกิดจากการเปลี่ยน Route
      */}
      <PageTransition className="flex-grow">
        <main className="relative z-10 w-full">{children}</main>
      </PageTransition>

      {/* --- 02. STRATEGIC CONVERSION HUB --- 
          ส่วนปิดท้ายหน้าเนื้อหาที่ออกแบบมาเพื่อปิดการขาย (Global Footer CTA)
      */}
      <section className="bg-surface-main border-border relative z-10 border-t">
        {/* Atmospheric Infrastructure Layer: สร้างมิติชั้นบรรยากาศสไตล์ Specialist */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* Tech Grid: หน่วยสร้างบรรยากาศทางวิศวกรรม */}
          <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />

          {/* Ambient Aura: แสงฟุ้งจางๆ เพื่อสร้างจุดโฟกัสที่นุ่มนวล */}
          <div className="ambient-aura absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity)] blur-[120px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4">
          <ConversionCTA
            title="พร้อมวางรากฐานธุรกิจสู่ปี 2026 หรือยังครับ?"
            description="ไม่ว่าธุรกิจของคุณจะอยู่ในระยะไหน ทีม Specialist ของเราพร้อมให้คำปรึกษาเพื่อหาโซลูชันที่คุ้มค่าและวัดผลได้จริง"
            buttonLabel="ปรึกษาแผนงานกับผู้เชี่ยวชาญ"
            // Strategic Spacing: ปรับระยะห่างให้ดูพรีเมียมและมี Authority
            className="bg-transparent py-24 md:py-32 lg:py-40"
          />
        </div>
      </section>
    </div>
  );
}
