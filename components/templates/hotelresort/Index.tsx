/**
 * [TEMPLATE]: HOTEL_RESORT_ORCHESTRATOR v19.0.0 (DYNAMIC_DNA)
 * [STRATEGY]: Composition-First Layout | Province Identity Guard | Performance Optimized
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
const WeatherTracker = dynamic(() =>
  import("../sections/WeatherTracker").then((mod) => mod.WeatherTracker),
);
const ExperienceNodes = dynamic(() =>
  import("../sections/ExperienceNodes").then((mod) => mod.ExperienceNodes),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
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

// --- 2. Shared Component Registry (Dynamic) ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [DYNAMIC_MAP]: นิยาม Component สำหรับกลุ่ม Hospitality เพื่อการจัดเรียงที่อิสระ
const HOSPITALITY_MAP: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
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
        {/* [UX_OPTIMIZATION]: ลิงก์ไปยังหน้าบริการระดับ Master เพื่อดูมาตรฐาน Hospitality ทั่วประเทศ */}
        {data.masterServiceUrl && (
          <div className="container mx-auto mt-12 px-4 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[var(--brand-primary)]/20 px-8 py-6"
            >
              <a href={data.masterServiceUrl} className="flex items-center gap-3">
                <IconRenderer name="Globe" size={16} className="text-[var(--brand-primary)]" />
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
                  Hospitality Standards
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
              <div className="space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
                  <span className="font-sans text-[12px] font-bold tracking-widest text-[var(--brand-primary)] uppercase">
                    ข้อเสนอสุดพิเศษ
                  </span>
                </div>
                <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                  {data.promotions[0].title}
                </h3>
                <p className="text-text-secondary max-w-xl text-lg font-medium italic opacity-80">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="rounded-3xl border-2 border-dashed border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 px-12 py-8 text-center shadow-inner">
                  <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase opacity-40">
                    Save_Rate
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
  "weather-facilities": ({ data }) => (
    <section className="bg-surface-main space-y-24 py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="ml-auto max-w-md">
          <WeatherTracker location={data.province || "Thailand"} />
        </div>
      </div>
      <UniversalRegistry data={data} />
    </section>
  ),
  experience: ({ data }) => (
    <section className="bg-surface-offset border-border/40 border-y py-24 md:py-40">
      <ExperienceNodes isTourismHeavy={data.isTourismHeavy} />
    </section>
  ),
  "roadmap-gallery": ({ data }) => (
    <section className="bg-surface-main space-y-32 py-24 md:py-32">
      {data.province && data.regionalRoadmap && (
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
      )}
      {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}
    </section>
  ),
  gallery: ({ data }) => {
    if (!data.regionalVisuals?.gallery) return null;
    return (
      <section className="bg-surface-main py-24">
        <RegionalGallery images={data.regionalVisuals.gallery} />
      </section>
    );
  },
  success: ({ data }) => {
    if (!data.localSuccessStory) return null;
    return (
      <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
        <LocalSuccessNode
          title={data.localSuccessStory.title}
          result={data.localSuccessStory.result}
          province={data.province || "Thailand"}
        />
      </section>
    );
  },
  faq: ({ data }) => (
    <section className="bg-surface-main py-24">
      <DynamicFAQ
        items={data.faqs}
        title="Essential_Intelligence"
        description={`ข้อมูลสำคัญสำหรับการเตรียมตัวเข้าพักที่ ${data.title} ณ ${data.province || "Thailand"}`}
      />
    </section>
  ),
  portal: ({ data }) => (
    <section className="bg-surface-main">
      <UniversalPortal data={data} />
      {/* [P-SEO_OPTIMIZATION]: แสดงพื้นที่พักผ่อนยอดนิยม */}
      {!data.province && data.servingAreas && data.servingAreas.length > 0 && (
        <div className="container mx-auto px-4 pb-24 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {data.servingAreas.slice(0, 10).map((area) => (
              <Link
                key={area}
                href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-text-secondary hover:text-brand-primary text-[12px] font-black tracking-tighter italic transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      )}
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

const HotelResortTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  // [DNA_ROUTER]: Default Sequence
  const defaultSequence = [
    "hero",
    "insight",
    "promotions",
    "weather-facilities",
    "experience",
    "roadmap-gallery",
    "success",
    "faq",
    "portal",
  ];

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0 ? data.layoutOrder : defaultSequence;

  return (
    <LayoutEngine spacing="none" theme={theme} className="template-hotelresort">
      <JsonLd data={schema} />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">Hospitality Experience & Facility Architecture</h2>

        {/* [DYNAMIC_RENDERER]: ประกอบร่างหน้าเว็บตาม DNA */}
        {renderSequence.map((key) => {
          const SectionComponent = HOSPITALITY_MAP[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Hospitality_Node_Protocol.v19.0.0_DYNAMIC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default HotelResortTemplate;
