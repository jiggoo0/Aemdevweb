/**
 * [TEMPLATE]: LOCAL_AUTHORITY_v20.0.0 (FLAGSHIP_READY)
 * [STRATEGY]: Hyper-Local Authority | Consistent Visual Rhythm | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import dynamic from "next/dynamic";
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- Specialized Internal Components (Flagship Layering) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const LocalMapNode = dynamic(() => import("../sections/LocalMapNode").then((m) => m.LocalMapNode));
const LocalInsight = dynamic(() => import("../sections/LocalInsight").then((m) => m.LocalInsight));
const MarketIntelligence = dynamic(() =>
  import("../sections/MarketIntelligence").then((m) => m.MarketIntelligence),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((m) => m.RegionalRoadmap),
);
const LocalSuccessNode = dynamic(() =>
  import("../sections/LocalSuccessNode").then((m) => m.LocalSuccessNode),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((m) => m.DirectTerminal),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((m) => m.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));
const UniversalPortal = dynamic(() => import("../sections/UniversalPortal"));

// --- Shared Assets ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));

const LocalAuthorityTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const provinceName = data.province || "Thailand";

  return (
    <LayoutEngine spacing="none" theme={data.theme} className="template-local-authority-v2">
      <JsonLd data={schema} id={`schema-pseo-${data.slug}`} />

      {/* --- LAYER 01: HERO GATEWAY --- */}
      <UniversalHero data={data} align="center" />

      {/* --- LAYER 02: GEOSPATIAL TRUST --- */}
      <section className="bg-surface-offset border-border/40 border-y py-12 md:py-20">
        <LocalMapNode
          lat={data.coordinates?.lat || 13.7563}
          lng={data.coordinates?.lng || 100.5018}
          province={provinceName}
        />
      </section>

      {/* --- LAYER 03: REGIONAL INTELLIGENCE --- */}
      <div className="bg-surface-main relative space-y-0">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketSaturation={data.marketSaturation}
        />

        <MarketIntelligence
          level={data.localContext?.competitorLevel || "medium"}
          industries={(data.localContext?.nicheIndustries as string[]) || []}
        />
      </div>

      {/* --- LAYER 04: EXECUTION BLUEPRINT --- */}
      <section className="bg-surface-offset border-border/40 border-y py-32 md:py-48">
        <RegionalRoadmap province={provinceName} steps={data.regionalRoadmap} />

        <div className="container mx-auto mt-24 max-w-2xl px-4">
          <DirectTerminal
            mode="health-check"
            province={provinceName}
            latency={data.regionalLatency}
          />
        </div>
      </section>

      {/* --- LAYER 05: SOCIAL PROOF & SUCCESS --- */}
      <section className="bg-surface-main py-24 md:py-40">
        <div className="container mx-auto mb-20 text-center">
          <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-60">
            Validated_Evidence
          </span>
          <h2 className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            Success <span className="text-brand-primary">Evidence.</span>
          </h2>
        </div>

        {data.localSuccessStory && (
          <LocalSuccessNode
            title={data.localSuccessStory.title}
            result={data.localSuccessStory.result}
            province={provinceName}
          />
        )}

        <div className="mt-24">
          <TrustBadge />
        </div>
      </section>

      {/* --- LAYER 06: GLOBAL SERVICE NETWORK --- */}
      <RegionalNodeHub data={data} />

      {/* --- LAYER 07: STRATEGIC KNOWLEDGE --- */}
      <DynamicFAQ
        items={data.faqs || []}
        title={`Regional_FAQ: ${provinceName}`}
        description={`ตอบทุกข้อสงสัยเชิงเทคนิคและการให้บริการสำหรับพื้นที่ ${provinceName}`}
        className="bg-surface-offset border-border/40 border-t py-32"
      />

      {/* --- LAYER 08: CONVERSION PORTAL --- */}
      <UniversalPortal data={data} />

      <footer className="bg-[#020617] py-12 text-center">
        <div className="inline-flex items-center gap-3 opacity-20">
          <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
          <p className="font-mono text-[8px] tracking-[0.5em] text-white uppercase">
            PSEO_Protocol_v20.0.0_HARDENED_{provinceName.toUpperCase()}
          </p>
        </div>
      </footer>
    </LayoutEngine>
  );
};

export default LocalAuthorityTemplate;
