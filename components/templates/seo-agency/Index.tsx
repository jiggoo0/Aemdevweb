/**
 * [TEMPLATE]: SEO_AGENCY_ORCHESTRATOR v18.5.0 (LAB_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Data Visualization | Identity Guard
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
const AuditReportGenerator = dynamic(() =>
  import("../sections/AuditReportGenerator").then((mod) => mod.AuditReportGenerator),
);
const PerformanceTrajectory = dynamic(() =>
  import("../sections/PerformanceTrajectory").then((mod) => mod.PerformanceTrajectory),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const RevenueLeakageCalculator = dynamic(() => import("../sections/RevenueLeakageCalculator"));
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalSuccessNode = dynamic(() =>
  import("../sections/LocalSuccessNode").then((mod) => mod.LocalSuccessNode),
);
const RegionalGallery = dynamic(() =>
  import("../sections/RegionalGallery").then((mod) => mod.RegionalGallery),
);
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((mod) => mod.DirectTerminal),
);
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));

// --- 2. Shared Component Registry (Dynamic) ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [DYNAMIC_MAP]: นิยาม Component สำหรับกลุ่ม SEO Agency เพื่อการจัดเรียงที่อิสระ
const SEO_AGENCY_MAP: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => (
    <section className="bg-surface-main">
      <UniversalHero data={data} />
    </section>
  ),
  insight: ({ data }) => {
    if (!data.province) return null;
    return (
      <section className="bg-surface-main py-24 md:py-32">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketSaturation={data.marketSaturation}
        />
        {/* [UX_OPTIMIZATION]: ปุ่มกลับไปยังหน้าบริการหลักสำหรับผู้ใช้ในพื้นที่ */}
        {data.masterServiceUrl && (
          <div className="container mx-auto mt-12 px-4 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[var(--brand-primary)]/20 px-8 py-6"
            >
              <a href={data.masterServiceUrl} className="flex items-center gap-3">
                <IconRenderer name="ArrowRight" size={16} className="text-[var(--brand-primary)]" />
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
                  Explore Full Specialist Solutions
                </span>
              </a>
            </Button>
          </div>
        )}
      </section>
    );
  },
  promotions: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="bg-surface-offset border-border/40 border-y py-24">
        <div className="container mx-auto px-4">
          <div className="shadow-pro-xl rounded-section border-border/50 bg-surface-card relative overflow-hidden p-10 backdrop-blur-3xl transition-all md:p-20">
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-primary shadow-glow-sm h-2 w-2 animate-pulse rounded-full" />
                  <span className="font-sans text-[12px] font-bold tracking-widest text-[var(--brand-primary)] uppercase">
                    รับสิทธิพิเศษเพิ่มเติม
                  </span>
                </div>
                <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                  {data.promotions[0].title}
                </h3>
                <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="rounded-3xl border-2 border-dashed border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 px-12 py-8 text-center shadow-inner">
                  <p className="text-text-muted mb-2 text-[11px] font-bold tracking-widest uppercase opacity-80">
                    มูลค่าที่ได้รับ
                  </p>
                  <p className="text-brand-primary text-5xl font-black italic">
                    {data.promotions[0].discount}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-brand-primary/5 absolute inset-0 -z-0" />
          </div>
        </div>
      </section>
    );
  },
  audit: () => (
    <section className="bg-surface-main py-24 md:py-32">
      <AuditReportGenerator />
    </section>
  ),
  revenue: ({ data }) => (
    <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
      <RevenueLeakageCalculator data={data} />
    </section>
  ),
  trajectory: ({ data }) => (
    <section className="bg-surface-main space-y-40 py-24 md:py-40">
      <PerformanceTrajectory />
      <UniversalRegistry data={data} />
    </section>
  ),
  visuals: ({ data }) => {
    if (!data.regionalVisuals?.gallery && !data.province) return null;
    return (
      <section className="bg-surface-offset border-border/40 space-y-32 border-y py-24 md:py-32">
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}
        {data.province && (
          <div className="space-y-32">
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-2xl">
                <DirectTerminal
                  mode="health-check"
                  province={data.province}
                  latency={data.regionalLatency}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  },
  success: ({ data }) => {
    if (!data.localSuccessStory || !data.province) return null;
    return (
      <section className="bg-surface-main py-24 md:py-32">
        <LocalSuccessNode
          title={data.localSuccessStory.title}
          result={data.localSuccessStory.result}
          province={data.province}
        />
      </section>
    );
  },
  nodes: ({ data }) => <RegionalNodeHub data={data} />,
  faq: ({ data }) => (
    <section className="bg-surface-offset border-border/40 border-t">
      <DynamicFAQ
        items={data.faqs}
        title="SEO_Intelligence_FAQ"
        description="ตอบทุกข้อสงสัยด้านเทคนิคและการทำอันดับเพื่อความโปร่งใสสูงสุดในการทำงาน"
        className="py-24"
      />
    </section>
  ),
  portal: ({ data }) => (
    <section className="bg-surface-main">
      <UniversalPortal data={data} />
    </section>
  ),
  // --- Shared Components ---
  trust: () => (
    <section className="bg-surface-main py-24">
      <TrustBadge />
    </section>
  ),
  process: () => (
    <section className="bg-surface-offset py-24">
      <WorkProcess />
    </section>
  ),
  pricing: () => (
    <section className="bg-surface-main py-24">
      <PricingSection />
    </section>
  ),
  cta: () => (
    <section className="bg-surface-main pb-24">
      <ConversionCTA />
    </section>
  ),
};

const SeoAgencyTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  // [DNA_ROUTER]: Default Sequence
  const defaultSequence = [
    "hero",
    "insight",
    "promotions",
    "audit",
    "revenue",
    "trajectory",
    "visuals",
    "success",
    "nodes",
    "faq",
    "portal",
  ];

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0 ? data.layoutOrder : defaultSequence;

  return (
    <LayoutEngine spacing="none" theme={theme} className="template-seo-agency">
      <JsonLd data={schema} id={`schema-seo-agency-${data.templateSlug}`} />

      {/* [LAB_GRID_OVERLAY]: พื้นหลังตารางแบบเทคนิคเฉพาะทางสำหรับหน้า SEO Agency */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--brand-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">SEO Strategy & Intelligence Lab</h2>

        {/* [DYNAMIC_RENDERER]: ประกอบร่างหน้าเว็บตาม DNA */}
        {renderSequence.map((key) => {
          const SectionComponent = SEO_AGENCY_MAP[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            SEO_Lab_Protocol.v19.0.0_DYNAMIC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default SeoAgencyTemplate;
