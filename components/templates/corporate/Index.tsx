/**
 * [TEMPLATE]: CORPORATE_ORCHESTRATOR v18.5.0 (EXECUTIVE_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Professional Authority | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import dynamic from "next/dynamic"; // [PERFORMANCE]: Code Splitting
import Link from "next/link";
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
const ValueBlueprint = dynamic(() =>
  import("../sections/ValueBlueprint").then((mod) => mod.ValueBlueprint),
);
const UniversalLogoCloud = dynamic(
  () => import("@/components/templates/sections/UniversalLogoCloud"),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const SuccessTimeline = dynamic(() =>
  import("../sections/SuccessTimeline").then((mod) => mod.SuccessTimeline),
);
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
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));

// --- 2. Shared Component Registry (Dynamic) ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [DYNAMIC_MAP]: นิยาม Component สำหรับกลุ่ม Corporate เพื่อการจัดเรียงที่อิสระ
const CORPORATE_MAP: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
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
          marketโอกาสเติบโต={data.marketโอกาสเติบโต}
        />
        {/* [UX_OPTIMIZATION]: ลิงก์ไปยังหน้าบริการหลักเพื่อสร้างความมั่นใจระดับ Expert */}
        {data.masterServiceUrl && (
          <div className="container mx-auto mt-12 px-4 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[var(--brand-primary)]/20 px-8 py-6"
            >
              <a href={data.masterServiceUrl} className="flex items-center gap-3">
                <IconRenderer
                  name="ChevronRight"
                  size={16}
                  className="text-[var(--brand-primary)]"
                />
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
                  Explore Enterprise Solutions
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
          <div className="shadow-pro-xl rounded-section bg-surface-card border-l-[6px] border-[var(--brand-primary)] p-10 backdrop-blur-md transition-all md:p-20">
            <div className="relative z-10 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
              <div className="space-y-6">
                <span className="font-sans text-[12px] font-bold tracking-widest text-[var(--brand-primary)] uppercase opacity-80">
                  สิทธิพิเศษสำหรับลูกค้าใหม่
                </span>
                <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                  {data.promotions[0].title}
                </h3>
                <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="border-border/50 bg-surface-offset rounded-3xl border px-12 py-8 text-center shadow-inner">
                  <p className="text-text-muted mb-2 text-[11px] font-bold tracking-widest uppercase opacity-80">
                    ความคุ้มค่าที่ได้รับ
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
  "value-timeline": () => (
    <section className="bg-surface-main space-y-32 py-24 md:py-40">
      <ValueBlueprint />
      <SuccessTimeline />
    </section>
  ),
  roadmap: ({ data }) => {
    if (!data.province || !data.regionalRoadmap) return null;
    return (
      <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
      </section>
    );
  },
  registry: ({ data }) => (
    <section className="bg-surface-main py-24 md:py-32">
      <UniversalRegistry data={data} />
    </section>
  ),
  gallery: ({ data }) => {
    if (!data.regionalVisuals?.gallery) return null;
    return (
      <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
        <RegionalGallery images={data.regionalVisuals.gallery} />
      </section>
    );
  },
  "trust-network": ({ data }) => (
    <section className="bg-surface-main py-24 md:py-32">
      <UniversalLogoCloud
        title={data.clientTrust || "Strategic Partnership Network"}
        theme="full_section"
      />
      {data.localSuccessStory && data.province && (
        <div className="mt-24">
          <LocalSuccessNode
            title={data.localSuccessStory.title}
            result={data.localSuccessStory.result}
            province={data.province}
          />
        </div>
      )}
    </section>
  ),
  nodes: ({ data }) => {
    return (
      <section className="bg-surface-main py-24">
        <RegionalNodeHub data={data} />
        {/* [P-SEO_OPTIMIZATION]: แสดงพื้นที่ยอดนิยมสำหรับหน้าบริการหลักแบบ Corporate Style */}
        {!data.province && data.servingAreas && data.servingAreas.length > 0 && (
          <div className="container mx-auto mt-20 px-4">
            <header className="mb-12">
              <span className="text-brand-primary font-sans text-[11px] font-bold tracking-widest uppercase opacity-60">
                Service Network
              </span>
              <h3 className="text-text-primary mt-2 text-4xl font-black italic">
                โครงข่ายการให้บริการ<span className="text-brand-primary">ทั่วประเทศ.</span>
              </h3>
            </header>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {data.servingAreas.slice(0, 18).map((area) => (
                <Link
                  key={area}
                  href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border-border hover:border-brand-primary/40 hover:bg-brand-primary/5 text-text-muted hover:text-brand-primary flex flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase">{area}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  },
  faq: ({ data }) => (
    <section className="bg-surface-offset border-border/40 border-t">
      <DynamicFAQ
        items={data.faqs}
        title="Executive_FAQ"
        description="ฐานข้อมูลเชิงเทคนิคและมาตรฐานการปฏิบัติงานระดับสากล เพื่อความโปร่งใสและประสิทธิภาพสูงสุด"
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

const CorporateTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  // [EXECUTIVE_STYLE_DNA]: ฉีดสไตล์เฉพาะทางสำหรับหน้า Corporate
  const corporateStyle = {
    "--card-radius": "3rem",
    "--section-spacing": "py-32 md:py-48",
    "--glass-opacity": theme?.mode === "dark" ? "0.05" : "0.02",
  } as React.CSSProperties;

  // [DNA_ROUTER]: Default Sequence
  const defaultSequence = [
    "hero",
    "insight",
    "promotions",
    "value-timeline",
    "roadmap",
    "registry",
    "gallery",
    "trust-network",
    "nodes",
    "faq",
    "portal",
  ];

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0 ? data.layoutOrder : defaultSequence;

  return (
    <div style={corporateStyle} className="template-corporate-wrapper">
      <LayoutEngine spacing="none" theme={theme} className="template-corporate relative">
        {/* [CORPORATE_ATMOSPHERE]: แสงฟุ้งที่มุมจอเพื่อความภูมิฐาน */}
        <div className="pointer-events-none absolute top-[-5%] right-[-5%] z-0 h-[700px] w-[700px] rounded-full bg-[var(--brand-primary)]/5 blur-[120px]" />

        <JsonLd data={schema} />

        <main className="relative flex flex-col antialiased">
          <h2 className="sr-only">Executive Strategy & Capability Architecture</h2>

          {/* [DYNAMIC_RENDERER]: ประกอบร่างหน้าเว็บตาม DNA */}
          {renderSequence.map((key) => {
            const SectionComponent = CORPORATE_MAP[key];
            if (!SectionComponent) return null;
            return <SectionComponent key={key} data={data} />;
          })}

          <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
            <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
              Corporate_Node_Protocol.v19.0.0_DYNAMIC
            </p>
          </footer>
        </main>
      </LayoutEngine>
    </div>
  );
};

export default CorporateTemplate;
