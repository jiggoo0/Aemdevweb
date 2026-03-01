/**
 * [TEMPLATE]: SALEPAGE_ORCHESTRATOR v18.5.0 (FINAL_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Identity Guard | Tactical Flow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { Suspense } from "react";
import dynamic from "next/dynamic"; // [PERFORMANCE]: Code Splitting
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";

// --- 1. Infrastructure ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";
import Skeleton from "@/components/ui/Skeleton";

// --- 2. Components (Atomic Blocks - Dynamic) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const UniversalRegistry = dynamic(
  () => import("@/components/templates/sections/UniversalRegistry"),
);
const SaleNavbar = dynamic(() => import("../sections/SaleNavbar").then((mod) => mod.SaleNavbar));
const FlashSaleTimer = dynamic(() =>
  import("../sections/FlashSaleTimer").then((mod) => mod.FlashSaleTimer),
);
const ThaiTrustBadge = dynamic(() =>
  import("../sections/ThaiTrustBadge").then((mod) => mod.ThaiTrustBadge),
);
const DirectOrderForm = dynamic(() =>
  import("../sections/DirectOrderForm").then((mod) => mod.DirectOrderForm),
);
const SaleFooter = dynamic(() => import("../sections/SaleFooter").then((mod) => mod.SaleFooter));
const StickyBuyButton = dynamic(() => import("../sections/StickyBuyButton"));
const IconRenderer = dynamic(() => import("@/components/ui/IconRenderer"));

// --- 3. Shared Sections (Dynamic) ---
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

// --- 4. Shared Component Registry (Dynamic) ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [DYNAMIC_MAP]: นิยาม Component สำหรับกลุ่ม SalePage เพื่อการจัดเรียงที่อิสระ
const SALEPAGE_MAP: Record<
  string,
  React.FC<{ data: UniversalTemplateProps; isDarkMode?: boolean }>
> = {
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
      </section>
    );
  },
  deal: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="bg-surface-offset border-border/40 border-y py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-card-lg border-brand-primary/20 bg-surface-card shadow-pro-xl relative overflow-hidden border p-8 backdrop-blur-md md:p-12">
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex items-center gap-6">
                <div className="bg-brand-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl text-[var(--brand-primary)]">
                  <Suspense fallback={<Skeleton className="h-8 w-8 rounded-lg" />}>
                    <IconRenderer name="Sparkles" size={32} />
                  </Suspense>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-primary font-sans text-[11px] font-bold tracking-widest uppercase">
                    ดีลพิเศษเฉพาะวันนี้
                  </span>
                  <h4 className="text-text-primary line-clamp-2 text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                    {data.promotions[0].title}
                  </h4>
                  <p className="text-text-secondary line-clamp-2 font-medium italic opacity-70">
                    {data.promotions[0].description}
                  </p>
                </div>
              </div>
              {data.promotions[0].discount && (
                <div className="border-border flex min-w-[180px] items-center justify-end gap-4 border-l pl-8">
                  <div className="text-right">
                    <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase opacity-80">
                      มูลค่าโปรโมชั่น
                    </p>
                    <p className="text-brand-primary text-4xl font-black italic">
                      {data.promotions[0].discount}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-brand-primary/5 absolute inset-0 -z-0" />
          </div>
        </div>
      </section>
    );
  },
  scarcity: ({ data }) => (
    <section id="scarcity-node" className="bg-surface-main py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Suspense fallback={<Skeleton className="h-32 w-full rounded-3xl" />}>
            <FlashSaleTimer color="var(--brand-primary)" />
          </Suspense>
          {data.socialProof && (
            <div className="mt-16 flex flex-col items-center gap-4">
              <div className="flex text-amber-400 drop-shadow-sm">
                {[...Array(5)].map((_, i) => (
                  <IconRenderer key={i} name="Star" size={24} className="fill-current" />
                ))}
              </div>
              <span className="text-text-muted font-sans text-[11px] font-bold tracking-widest uppercase opacity-80">
                ได้รับการยืนยันจากผู้ใช้งานจริง: {data.socialProof.reviewCount?.toLocaleString()}+
                ท่าน
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  ),
  registry: ({ data }) => (
    <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
      <UniversalRegistry data={data} />
    </section>
  ),
  matrix: ({ data }) => {
    if (!data.regionalVisuals?.gallery && !data.province) return null;
    return (
      <section className="bg-surface-main space-y-32 py-24 md:py-32">
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}
        {data.province && (
          <div className="space-y-32">
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-2xl">
                <DirectTerminal
                  mode="health-check"
                  province={data.province}
                  latency={data.regionalความเร็ว}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  },
  "trust-signals": ({ data, isDarkMode }) => (
    <section
      id="trust-signals"
      className="bg-surface-offset border-border/40 border-y py-24 md:py-32"
    >
      <ThaiTrustBadge
        clientTrust={data.clientTrust}
        isDark={isDarkMode || false}
        accentColor="var(--brand-primary)"
      />
    </section>
  ),
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
  nodes: ({ data }) => {
    return (
      <section className="bg-surface-main py-24">
        <RegionalNodeHub data={data} />
        {/* [P-SEO_OPTIMIZATION]: แสดงพื้นที่ยอดนิยมสำหรับหน้าบริการหลัก */}
        {!data.province && data.servingAreas && data.servingAreas.length > 0 && (
          <div className="container mx-auto mt-20 px-4">
            <header className="mb-10 text-center">
              <span className="text-brand-primary font-sans text-[10px] font-bold tracking-widest uppercase">
                Popular Coverage
              </span>
              <h3 className="text-text-primary mt-2 text-3xl font-black italic">
                พื้นที่ให้บริการ<span className="text-brand-primary">ยอดนิยม.</span>
              </h3>
            </header>
            <div className="flex flex-wrap justify-center gap-3">
              {data.servingAreas.slice(0, 12).map((area) => (
                <Link
                  key={area}
                  href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border-border hover:border-brand-primary/40 hover:bg-brand-primary/5 text-text-muted hover:text-brand-primary rounded-full border px-6 py-3 text-[11px] font-bold tracking-widest uppercase transition-all"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  },
  faq: ({ data }) => (
    <section id="objection-buster" className="bg-surface-offset border-border/40 border-t">
      <DynamicFAQ
        items={data.faqs}
        title="คำถามที่พบบ่อย"
        description="ตอบทุกข้อสงสัยเชิงเทคนิค เพื่อความมั่นใจสูงสุดก่อนการตัดสินใจของคุณ"
      />
    </section>
  ),
  order: ({ data }) => (
    <section
      id="order"
      className="bg-surface-main relative min-h-[60dvh] scroll-mt-24 py-24 md:py-40"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-card-lg border-border shadow-pro-xl bg-surface-card overflow-hidden border">
          <div className="bg-text-primary relative overflow-hidden p-10 text-center text-white md:p-20">
            <div className="bg-brand-primary absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-[100px]" />
            <h3 className="relative z-10 text-4xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
              Initialize <br /> <span className="text-brand-primary">Growth.</span>
            </h3>
            {data.regionalPricing ? (
              <div className="relative z-10 mt-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-sm">
                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                  Special_Start_Rate
                </span>
                <span className="text-brand-primary text-2xl font-black italic">
                  {data.regionalPricing.startPrice}
                </span>
              </div>
            ) : (
              <p className="relative z-10 mt-8 font-sans text-[12px] font-bold tracking-widest text-white/80 uppercase">
                พร้อมรับคำสั่งซื้อของคุณตลอด 24 ชั่วโมง
              </p>
            )}
          </div>
          <div className="p-8 md:p-20">
            <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
              <DirectOrderForm
                price={data.price}
                unit={data.unit}
                accentColor="var(--brand-primary)"
              />
            </Suspense>
          </div>
        </div>
      </div>
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

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const SalePageTemplate = ({ data, suppressUI = false }: SalePageTemplateProps) => {
  const schemas = generateUniversalSchema(data);
  const { theme } = data;
  const isDarkMode = theme?.mode === "dark";

  // [CONVERSION_STYLE_DNA]: ฉีดสไตล์เฉพาะทางสำหรับหน้า SalePage
  const salePageStyle = {
    "--card-radius": "2.5rem",
    "--section-gap": "gap-y-32 md:gap-y-48",
    "--glow-intensity": isDarkMode ? "0.4" : "0.15",
  } as React.CSSProperties;

  // [DNA_ROUTER]: Default Sequence
  const defaultSequence = [
    "hero",
    "insight",
    "deal",
    "scarcity",
    "registry",
    "matrix",
    "trust-signals",
    "success",
    "nodes",
    "faq",
    "order",
  ];

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0 ? data.layoutOrder : defaultSequence;

  return (
    <div style={salePageStyle} className="template-salepage-wrapper overflow-hidden">
      <JsonLd data={schemas} id={`schema-salepage-${data.templateSlug}`} />

      <LayoutEngine spacing="none" theme={theme} className="template-salepage relative">
        {/* [CONVERSION_AURAS]: แสง Spotlights สร้างจุดดึงดูดสายตา */}
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-[1000px] w-full bg-[radial-gradient(ellipse_at_top_left,var(--brand-primary)_0%,transparent_60%)] opacity-[var(--glow-intensity)]" />
        <div className="pointer-events-none absolute top-[20%] right-[-10%] z-0 h-[800px] w-[800px] rounded-full bg-[var(--brand-accent)]/5 blur-[120px]" />

        {!suppressUI && (
          <>
            <SaleNavbar
              title={data.title}
              action={{ label: "Initialize Order", href: "#order" }}
              theme={theme}
            />
            <StickyBuyButton
              href="#order"
              label={`Reserve Your Slot ${data.price ? `(${data.price})` : ""}`}
              theme={theme}
            />
          </>
        )}

        <main className="relative flex flex-col antialiased">
          <h2 className="sr-only">Sale Channel & Conversion Funnel</h2>

          {/* [DYNAMIC_RENDERER]: ประกอบร่างหน้าเว็บตาม DNA */}
          {renderSequence.map((key) => {
            const SectionComponent = SALEPAGE_MAP[key];
            if (!SectionComponent) return null;
            return <SectionComponent key={key} data={data} isDarkMode={isDarkMode} />;
          })}

          {!suppressUI && <SaleFooter brandName={data.title} isDark={isDarkMode} />}

          <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-20">
            <p className="font-mono text-[8px] font-black tracking-[0.6em] uppercase">
              SalePage_Active_Node.v19.0.0_DYNAMIC
            </p>
          </footer>
        </main>
      </LayoutEngine>
    </div>
  );
};

export default SalePageTemplate;
