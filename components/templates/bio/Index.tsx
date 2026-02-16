/**
 * [TEMPLATE]: BIO_IDENTITY_ORCHESTRATOR v18.0.39 (STABLE_FINAL)
 * [STRATEGY]: Identity Consolidation | Specialist FAQ Activation | Zero-Waste
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Identity Suite) ---
import { IdentityNode } from "./_components/IdentityNode";
import { ActionRegistry } from "./_components/ActionRegistry";
import { ProjectHighlight } from "./_components/ProjectHighlight";
import { CapabilityGraph } from "./_components/CapabilityGraph";
import { CredentialStack } from "./_components/CredentialStack";
import { DirectTerminal } from "./_components/DirectTerminal";

/** * [INJECT]: เปิดใช้งานระบบ Intelligence FAQ ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อแก้ปัญหา 'Attempted import error' ในรอบ Build ก่อนหน้า
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component BioTemplate
 * @description นามบัตรดิจิทัลระดับ Specialist ที่รวบรวมอัตลักษณ์ ผลงาน และความรู้เข้าด้วยกัน
 */
const BioTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: ประมวลผล Schema สำหรับอัตลักษณ์บุคคล (Person / Specialist)
  // เพื่อส่งเสริม E-E-A-T ของโดเมนในระดับโครงสร้าง
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="flex min-h-[100dvh] flex-col items-center bg-[var(--surface-main)] px-4 py-16 selection:bg-[var(--brand-primary)] selection:text-black md:py-24">
        <div className="w-full max-w-xl space-y-16">
          {/* --- Phase 01: Core Identification --- 
              แสดงตัวตนและสถานะ Real-time ของ Specialist
          */}
          <IdentityNode name={data.title} description={data.description} image={data.image} />

          {/* --- Phase 02: Strategic Linkage --- 
              ศูนย์รวม Link สำคัญ (Registry Mapping)
          */}
          <ActionRegistry links={data.items || []} />

          {/* --- Phase 03: Performance Evidence --- 
              คัดกรองผลงานที่โดดเด่น (Featured Portfolio)
          */}
          <ProjectHighlight projects={data.featuredProjects} />

          {/* --- Phase 04: Capability Metrics --- 
              จำลองข้อมูลความสามารถผ่าน Data Visualization (Graph Node)
          */}
          <CapabilityGraph skills={data.coreFeatures || []} />

          {/* --- Phase 05: Intelligence Hub (FAQ) ---
              [STRATEGIC_INSERTION]: ลดภาระการตอบคำถามซ้ำซากและกำจัด Dead Code ในโปรเจกต์
          */}
          <div className="border-t border-[var(--foreground)]/5 pt-4">
            <DynamicFAQ
              items={data.faqs}
              title="Process_FAQ"
              description="ข้อมูลเบื้องต้นเกี่ยวกับขั้นตอนการทำงานและการร่วมงานในระดับ Specialist"
            />
          </div>

          {/* --- Phase 06: Experience Stack --- 
              การยืนยันความน่าเชื่อถือผ่านประวัติและรางวัล
          */}
          <CredentialStack trustTitle={data.clientTrust} />

          {/* --- Phase 07: Direct Gateway --- 
              Terminal Contact Node สำหรับการสื่อสารโดยตรง
          */}
          <DirectTerminal />

          {/* --- FOOTER: System Status --- */}
          <footer className="pt-8 text-center">
            <div className="inline-flex items-center gap-2 opacity-20">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)]" />
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase">
                Architected_By_AEMZA_v18.0.39
              </p>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
};

export default BioTemplate;
