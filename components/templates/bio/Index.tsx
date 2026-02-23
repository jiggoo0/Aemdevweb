/**
 * [TEMPLATE]: BIO_IDENTITY_ORCHESTRATOR v18.0.40 (RSC_ENFORCED)
 * [STRATEGY]: Identity Consolidation | Specialist FAQ Activation | Server-Side Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Identity Suite) ---
import { IdentityNode } from "../sections/IdentityNode";
import { ActionRegistry } from "../sections/ActionRegistry";
import { ProjectHighlight } from "../sections/ProjectHighlight";
import { CapabilityGraph } from "../sections/CapabilityGraph";
import { CredentialStack } from "../sections/CredentialStack";
import { DirectTerminal } from "../sections/DirectTerminal";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalInsight } from "../sections/LocalInsight";

/** * [INJECT]: เปิดใช้งานระบบ Intelligence FAQ ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อแก้ปัญหา 'Attempted import error' ในรอบ Build ก่อนหน้า
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component BioTemplate
 * @description นามบัตรดิจิทัลระดับ Specialist ที่รวบรวมอัตลักษณ์ ผลงาน และความรู้เข้าด้วยกัน
 */
const BioTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: Direct Schema Generation for RSC Compliance
  const schema = generateUniversalSchema(data);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="flex min-h-[100dvh] flex-col items-center bg-[var(--surface-main)] px-4 py-16 selection:bg-[var(--brand-primary)] selection:text-black md:py-24">
        <div className="w-full max-w-xl space-y-16">
          {/* --- Phase 01: Core Identification --- 
              แสดงตัวตนและสถานะ Real-time ของ Specialist
          */}
          <IdentityNode
            name={data.title}
            description={data.description}
            image={data.image}
            banner={data.regionalVisuals?.banner}
          />

          {/* [NEW]: Regional Promotions (Specialist Style) */}
          {data.promotions && data.promotions.length > 0 && (
            <section className="relative z-10 w-full">
              <div className="rounded-[var(--radius)] border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 p-8 text-center backdrop-blur-md">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/20 bg-white/5 px-4 py-1 dark:bg-black/20">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)]" />
                  <span className="font-mono text-[9px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                    Personal_Promotion_Node
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-black tracking-tighter uppercase italic">
                  {data.promotions[0].title}
                </h3>
                <p className="mb-6 text-sm font-medium opacity-60">
                  {data.promotions[0].description}
                </p>
                {data.promotions[0].discount && (
                  <div className="inline-block rounded-2xl border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 px-8 py-3">
                    <span className="text-3xl font-black text-[var(--brand-primary)] italic">
                      {data.promotions[0].discount}
                    </span>
                  </div>
                )}
              </div>
            </section>
          )}

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

          {/* [NEW]: Regional Authority for Bio Nodes */}
          {data.province && (
            <div className="space-y-16 py-8">
              <div className="-mx-4 md:-mx-10">
                <LocalInsight
                  insight={data.localContext?.marketInsight || ""}
                  painPoints={(data.localContext?.painPoints as string[]) || []}
                  marketSaturation={data.marketSaturation}
                />
                <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
              </div>
              <DirectTerminal
                mode="health-check"
                province={data.province}
                latency={data.regionalLatency}
              />
            </div>
          )}

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
          <DirectTerminal mode="contact" />

          {/* --- FOOTER: System Status --- */}
          <footer className="pt-8 text-center">
            <div className="inline-flex items-center gap-2 opacity-20">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)]" />
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase">
                Architected_By_AEMZA_v18.0.40_RSC
              </p>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
};

export default BioTemplate;
