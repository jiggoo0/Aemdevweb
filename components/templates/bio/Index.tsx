/**
 * [TEMPLATE]: BIO_IDENTITY_ORCHESTRATOR v19.0.0 (SPECIALIST_DYNAMIC)
 * [STRATEGY]: Sequence-First Layout | Specialist Personal Branding | Dynamic Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import dynamic from "next/dynamic"; // [PERFORMANCE]: Code Splitting
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 1. Modular Component Registry (Dynamic) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const UniversalRegistry = dynamic(
  () => import("@/components/templates/sections/UniversalRegistry"),
);
const UniversalLogoCloud = dynamic(
  () => import("@/components/templates/sections/UniversalLogoCloud"),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((mod) => mod.DirectTerminal),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));

// [DYNAMIC_MAP]: นิยาม Component สำหรับกลุ่ม Bio เพื่อการจัดเรียงที่อิสระ
const BIO_MAP: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => (
    <section>
      <UniversalHero data={data} />
    </section>
  ),
  promotions: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="relative z-10 w-full">
        <div className="rounded-card border-brand-primary/40 bg-brand-primary/5 border border-dashed p-8 text-center backdrop-blur-md">
          <div className="border-brand-primary/20 bg-surface-card shadow-pro-sm mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-1.5">
            <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-sm" />
            <span className="text-brand-primary font-sans text-[11px] font-bold tracking-widest uppercase">
              สิทธิพิเศษสำหรับคุณ
            </span>
          </div>
          <h3 className="text-text-primary mb-2 text-2xl font-black tracking-tighter uppercase italic md:text-4xl">
            {data.promotions[0].title}
          </h3>
          <p className="text-text-secondary mb-8 text-lg font-medium italic opacity-70">
            “{data.promotions[0].description}”
          </p>
          {data.promotions[0].discount && (
            <div className="bg-brand-primary inline-block rounded-2xl px-10 py-4 shadow-sm">
              <span className="text-surface-main text-3xl font-black italic">
                {data.promotions[0].discount}
              </span>
            </div>
          )}
        </div>
      </section>
    );
  },
  registry: ({ data }) => (
    <section className="bg-surface-offset/50 rounded-section border-border/40 border p-8 shadow-inner md:p-12">
      <UniversalRegistry data={data} />
    </section>
  ),
  authority: ({ data }) => {
    if (!data.province) return null;
    return (
      <section className="border-border/10 space-y-20 border-t py-8">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketโอกาสเติบโต={data.marketโอกาสเติบโต}
        />
        {/* [UX_OPTIMIZATION]: ปุ่มกลับไปยังหน้าบริการหลักสำหรับผู้เชี่ยวชาญเฉพาะทาง */}
        {data.masterServiceUrl && (
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="ghost"
              className="text-brand-primary hover:bg-brand-primary/5 rounded-full px-8"
            >
              <a href={data.masterServiceUrl} className="flex items-center gap-3">
                <IconRenderer name="ArrowUpRight" size={16} />
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
                  View Service Credentials
                </span>
              </a>
            </Button>
          </div>
        )}
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
        <div className="mx-auto max-w-xl">
          <DirectTerminal
            mode="health-check"
            province={data.province}
            latency={data.regionalความเร็ว}
          />
        </div>
      </section>
    );
  },
  faq: ({ data }) => (
    <section className="border-border/10 border-t pt-12">
      <DynamicFAQ
        items={data.faqs}
        title="Process_FAQ"
        description="ข้อมูลเบื้องต้นเกี่ยวกับขั้นตอนการทำงานและการร่วมงานในระดับ Specialist"
      />
    </section>
  ),
  "trust-network": ({ data }) => (
    <section className="py-8">
      <UniversalLogoCloud title={data.clientTrust || "Authorized Experience"} theme="minimal_bar" />
    </section>
  ),
  contact: () => (
    <section className="pt-8">
      <DirectTerminal mode="contact" />
    </section>
  ),
};

const BioTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  // [DNA_ROUTER]: Default Sequence
  const defaultSequence = [
    "hero",
    "promotions",
    "registry",
    "authority",
    "faq",
    "trust-network",
    "contact",
  ];

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0 ? data.layoutOrder : defaultSequence;

  return (
    <LayoutEngine spacing="none" theme={theme} className="template-bio">
      <JsonLd data={schema} />

      <main className="bg-surface-main relative flex flex-col items-center antialiased">
        <h2 className="sr-only">Specialist Identity & Performance Portfolio</h2>

        <div className="w-full max-w-3xl space-y-24 px-4 py-16 md:py-32">
          {/* [DYNAMIC_RENDERER]: ประกอบร่างหน้าเว็บตาม DNA */}
          {renderSequence.map((key) => {
            const SectionComponent = BIO_MAP[key];
            if (!SectionComponent) return null;
            return <SectionComponent key={key} data={data} />;
          })}

          <footer className="pt-16 text-center opacity-20">
            <div className="inline-flex items-center gap-3">
              <div className="bg-brand-primary h-1.5 w-1.5 rounded-full" />
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase">
                Architected_By_AEMZA_v19.0.0_DYNAMIC
              </p>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
};

export default BioTemplate;
