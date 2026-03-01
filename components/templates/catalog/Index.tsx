/**
 * [TEMPLATE]: CATALOG_v20.0.0 (INDUSTRIAL_PRECISION)
 * [STRATEGY]: Product-First Strategy | Engineering Aesthetic | B2B Conversion
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import dynamic from "next/dynamic";
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- Specialized Components ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const InteractiveCatalog = dynamic(() => import("@/components/templates/InteractiveCatalog"));
const RevenueLeakageCalculator = dynamic(() => import("../sections/RevenueLeakageCalculator"));
const AuditReportGenerator = dynamic(() =>
  import("../sections/AuditReportGenerator").then((m) => m.AuditReportGenerator),
);
const PerformanceTrajectory = dynamic(() =>
  import("../sections/PerformanceTrajectory").then((m) => m.PerformanceTrajectory),
);
const LocalInsight = dynamic(() => import("../sections/LocalInsight").then((m) => m.LocalInsight));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));
const UniversalPortal = dynamic(() => import("../sections/UniversalPortal"));
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((m) => m.DynamicFAQ));

// --- Shared Assets ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));

const CatalogTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const provinceName = data.province || "";

  return (
    <LayoutEngine spacing="none" theme={data.theme} className="template-catalog-v2">
      <JsonLd data={schema} id={`schema-catalog-${data.slug}`} />

      {/* --- LAYER 01: INDUSTRIAL HERO --- */}
      <UniversalHero data={data} align="left" />

      {/* --- LAYER 02: PRODUCT SEARCH & REGISTRY --- */}
      <section className="bg-surface-main py-24 md:py-40">
        <div className="container mx-auto px-4">
          <div className="mb-20 flex items-center gap-6">
            <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
              Technical <span className="text-brand-primary">Catalog.</span>
            </h2>
            <div className="from-brand-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />
          </div>

          <InteractiveCatalog items={data.items || []} features={data.coreFeatures || []} />
        </div>
      </section>

      {/* --- LAYER 03: ROI & BUSINESS ANALYSIS --- */}
      <div className="bg-surface-offset border-border/40 border-y">
        <RevenueLeakageCalculator data={data} />
      </div>

      {/* --- LAYER 04: TECHNICAL VALIDATION --- */}
      <section className="bg-surface-main py-24 md:py-40">
        <div className="container mx-auto">
          <AuditReportGenerator />
        </div>
      </section>

      {/* --- LAYER 05: REGIONAL CONTEXT (If available) --- */}
      {provinceName && (
        <section className="bg-surface-offset border-border/40 border-y py-24 md:py-40">
          <LocalInsight
            insight={data.localContext?.marketInsight || ""}
            painPoints={(data.localContext?.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />
        </section>
      )}

      {/* --- LAYER 06: INFRASTRUCTURE METRICS --- */}
      <section className="bg-surface-main py-24 md:py-40">
        <PerformanceTrajectory />
        <div className="mt-20">
          <TrustBadge />
        </div>
      </section>

      {/* --- LAYER 07: NODE NETWORK & SUPPORT --- */}
      <RegionalNodeHub data={data} />

      <DynamicFAQ
        items={data.faqs || []}
        title="Industrial_FAQ"
        description="มาตรฐานวิศวกรรมและข้อกำหนดทางเทคนิคสำหรับการวางระบบแคตตาล็อก"
        className="bg-surface-offset border-border/40 border-t py-32"
      />

      {/* --- LAYER 08: CONVERSION GATEWAY --- */}
      <UniversalPortal data={data} />

      <footer className="bg-[#020617] py-12 text-center">
        <div className="inline-flex items-center gap-3 opacity-20">
          <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
          <p className="font-mono text-[8px] tracking-[0.5em] text-white uppercase">
            Catalog_System_Protocol_v20.0.0_HARDENED
          </p>
        </div>
      </footer>
    </LayoutEngine>
  );
};

export default CatalogTemplate;
