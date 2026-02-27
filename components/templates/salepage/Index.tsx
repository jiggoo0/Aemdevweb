/**
 * [TEMPLATE]: SALEPAGE_ORCHESTRATOR v18.5.0 (FINAL_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Identity Guard | Tactical Flow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import JsonLd from "@/components/seo/JsonLd";

// --- 1. Infrastructure ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

// --- 2. Components (Atomic Blocks) ---
import UniversalHero from "@/components/templates/sections/UniversalHero";
import UniversalRegistry from "@/components/templates/sections/UniversalRegistry";
import { SaleNavbar } from "../sections/SaleNavbar";
import { FlashSaleTimer } from "../sections/FlashSaleTimer";
import { ThaiTrustBadge } from "../sections/ThaiTrustBadge";
import { DirectOrderForm } from "../sections/DirectOrderForm";
import { SaleFooter } from "../sections/SaleFooter";
import StickyBuyButton from "../sections/StickyBuyButton";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 3. Shared Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const SalePageTemplate = ({ data, suppressUI = false }: SalePageTemplateProps) => {
  const schemas = generateUniversalSchema(data);
  const { socialProof: social, regionalPricing: pricing, theme } = data;
  const isDarkMode = theme?.mode === "dark";
  const promoExpiry = new Date(Date.now() + 86400000).toISOString();

  return (
    <>
      <JsonLd data={schemas} id={`schema-salepage-${data.templateSlug}`} />

      <LayoutEngine spacing="none" theme={theme}>
        {!suppressUI && (
          <>
            <SaleNavbar
              title={data.title}
              action={{ label: "สั่งซื้อทันที", href: "#order" }}
              theme={theme}
            />
            <StickyBuyButton
              href="#order"
              label={`สั่งซื้อเลย ${data.price ? `(${data.price})` : ""}`}
              theme={theme}
            />
          </>
        )}

        <main className="relative flex flex-col antialiased">
          <h2 className="sr-only">Sale Channel & Conversion Funnel</h2>

          {/* [SEQUENCE_00]: CORE HERO (Universal Entry) */}
          <section className="bg-surface-main">
            <UniversalHero data={data} />
          </section>

          {/* [SEQUENCE_01]: REGIONAL INSIGHT (Surface Main) */}
          {data.province && (
            <section className="bg-surface-main py-24 md:py-32">
              <LocalInsight
                insight={data.localContext?.marketInsight || ""}
                painPoints={(data.localContext?.painPoints as string[]) || []}
                marketSaturation={data.marketSaturation}
              />
            </section>
          )}

          {/* [SEQUENCE_02]: EXCLUSIVE DEAL (Surface Offset for Visual Break) */}
          {data.promotions && data.promotions.length > 0 && (
            <section className="bg-surface-offset border-border/40 border-y py-24">
              <div className="container mx-auto px-4">
                <div className="rounded-card-lg border-brand-primary/20 bg-surface-card shadow-pro-xl relative overflow-hidden border p-8 backdrop-blur-3xl md:p-12">
                  <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-6">
                      <div className="bg-brand-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl text-[var(--brand-primary)]">
                        <IconRenderer name="Sparkles" size={32} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
                          Regional_Exclusive_Deal
                        </span>
                        <h4 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                          {data.promotions[0].title}
                        </h4>
                        <p className="text-text-secondary font-medium italic opacity-70">
                          {data.promotions[0].description}
                        </p>
                      </div>
                    </div>
                    {data.promotions[0].discount && (
                      <div className="border-border flex items-center gap-4 border-l pl-8">
                        <div className="text-right">
                          <p className="text-text-muted text-[9px] font-bold tracking-widest uppercase opacity-40">
                            Discount
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
          )}

          {/* [SEQUENCE_03]: SCARCITY NODE (Surface Main) */}
          <section id="scarcity-node" className="bg-surface-main py-24 md:py-32">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <FlashSaleTimer targetDate={promoExpiry} color="var(--brand-primary)" />
                {social && (
                  <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="flex text-amber-400 drop-shadow-sm">
                      {[...Array(5)].map((_, i) => (
                        <IconRenderer key={i} name="Star" size={24} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
                      Validated_Specialist_Node: {social.reviewCount?.toLocaleString()}+ Partners
                      Trusted
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* [SEQUENCE_04]: UNIVERSAL REGISTRY (Surface Offset) */}
          <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
            <UniversalRegistry data={data} />
          </section>

          {/* [SEQUENCE_05]: REGIONAL MATRIX (Surface Main) */}
          {(data.regionalVisuals?.gallery || data.province) && (
            <section className="bg-surface-main space-y-32 py-24 md:py-32">
              {data.regionalVisuals?.gallery && (
                <RegionalGallery images={data.regionalVisuals.gallery} />
              )}
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
          )}

          {/* [SEQUENCE_06]: TRUST SIGNALS (Surface Offset) */}
          <section
            id="trust-signals"
            className="bg-surface-offset border-border/40 border-y py-24 md:py-32"
          >
            <ThaiTrustBadge
              clientTrust={data.clientTrust}
              isDark={isDarkMode}
              accentColor="var(--brand-primary)"
            />
          </section>

          {/* [SEQUENCE_07]: LOCAL SUCCESS (Surface Main) */}
          {data.localSuccessStory && data.province && (
            <section className="bg-surface-main py-24 md:py-32">
              <LocalSuccessNode
                title={data.localSuccessStory.title}
                result={data.localSuccessStory.result}
                province={data.province}
              />
            </section>
          )}

          {/* [SEQUENCE_08]: OBJECTION BUSTER (Surface Offset) */}
          <section id="objection-buster" className="bg-surface-offset border-border/40 border-t">
            <DynamicFAQ
              items={data.faqs}
              title="คำถามที่พบบ่อย"
              description="ตอบทุกข้อสงสัยเชิงเทคนิค เพื่อความมั่นใจสูงสุดก่อนการตัดสินใจของคุณ"
            />
          </section>

          {/* [SEQUENCE_09]: CONVERSION GATEWAY (Surface Main) */}
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
                  {pricing ? (
                    <div className="relative z-10 mt-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-xl">
                      <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                        Special_Start_Rate
                      </span>
                      <span className="text-brand-primary text-2xl font-black italic">
                        {pricing.startPrice}
                      </span>
                    </div>
                  ) : (
                    <p className="relative z-10 mt-8 font-mono text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">
                      System_Awaiting_Order_Signal
                    </p>
                  )}
                </div>
                <div className="p-8 md:p-20">
                  <DirectOrderForm
                    price={data.price}
                    unit={data.unit}
                    accentColor="var(--brand-primary)"
                  />
                </div>
              </div>
            </div>
          </section>

          {!suppressUI && <SaleFooter brandName={data.title} isDark={isDarkMode} />}

          <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-20">
            <p className="font-mono text-[8px] font-black tracking-[0.6em] uppercase">
              SalePage_Active_Node.v18.5.0_RSC
            </p>
          </footer>
        </main>
      </LayoutEngine>
    </>
  );
};

export default SalePageTemplate;
