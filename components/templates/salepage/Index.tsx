/**
 * [TEMPLATE]: SALEPAGE_ORCHESTRATOR v18.0.6 (STABILIZED_FINAL)
 * [STRATEGY]: Psychological Funnel | Intelligence FAQ | Zero-Jank Deployment
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo, memo } from "react";
import JsonLd from "@/components/seo/JsonLd";

// --- 1. Infrastructure ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

// --- 2. Components (Atomic Blocks) ---
import { SaleNavbar } from "./_components/SaleNavbar";
import { SaleHero } from "./_components/SaleHero";
import { FlashSaleTimer } from "./_components/FlashSaleTimer";
import { FeatureComparison } from "./_components/FeatureComparison";
import { ThaiTrustBadge } from "./_components/ThaiTrustBadge";
import { DirectOrderForm } from "./_components/DirectOrderForm";
import { SaleFooter } from "./_components/SaleFooter";
import StickyBuyButton from "./_components/StickyBuyButton";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 3. Shared Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

/**
 * @component SalePageTemplate
 * @description เทมเพลตหน้าขายระดับพรีเมียมที่ผ่านการปรับแต่งความเร็วและการจัดเรียงเนื้อหาเชิงจิตวิทยา
 */
const SalePageTemplate = ({ data, suppressUI = false }: SalePageTemplateProps) => {
  // [SEO]: ประมวลผล Schema สำหรับ Product/Offer (Search AI Optimization)
  const schemas = useMemo(() => generateUniversalSchema(data), [data]);

  // [DESTRUCTURING]: แยกข้อมูลสำคัญเพื่อความสะอาดของโค้ด
  const { socialProof: social, regionalPricing: pricing, theme } = data;
  const isDarkMode = theme?.mode === "dark";

  // [LOGIC]: กำหนดเวลาสิ้นสุดโปรโมชั่น (จำลอง 24 ชม. จากปัจจุบัน)
  // หมายเหตุ: ในระบบจริงควรส่งมาจาก Database เพื่อความแม่นยำ
  const promoExpiry = useMemo(() => new Date(Date.now() + 86400000).toISOString(), []);

  return (
    <>
      <JsonLd data={schemas} id={`schema-salepage-${data.templateSlug}`} />

      <LayoutEngine spacing="none">
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

        <main className="bg-surface-main relative flex flex-col antialiased">
          {/* Phase 01: CORE HERO - สร้าง First Impression ทันทีที่โหลดหน้า */}
          <SaleHero
            title={data.title}
            description={data.description}
            image={data.image}
            accentColor="var(--brand-primary)"
            className="text-text-primary"
          />

          {/* Phase 02: SCARCITY & PROOF - กระตุ้นด้วยความจำกัดและฐานลูกค้า */}
          <section
            id="scarcity-node"
            className="relative z-30 -mt-10 mb-20 px-4 sm:-mt-16 lg:mb-32"
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className="border-border/10 bg-surface-card/80 shadow-pro-xl inline-block rounded-[2.5rem] border px-8 py-6 backdrop-blur-xl transition-all hover:scale-[1.02]">
                <FlashSaleTimer targetDate={promoExpiry} color="var(--brand-primary)" />
              </div>

              {social && (
                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex text-amber-400 drop-shadow-md">
                    {[...Array(5)].map((_, i) => (
                      <IconRenderer key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
                    Trusted by {social.reviewCount?.toLocaleString()}+ Professional Partners
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* Phase 03: FEATURE MATRIX - เปรียบเทียบความคุ้มค่าและจุดเด่น */}
          {data.coreFeatures && data.coreFeatures.length > 0 && (
            <section
              id="features"
              className="border-border/5 bg-surface-main/50 relative overflow-hidden border-y py-24 lg:py-32"
            >
              <div className="container mx-auto px-4">
                <FeatureComparison
                  features={data.coreFeatures}
                  accentColor="var(--brand-primary)"
                  isDark={isDarkMode}
                />
              </div>
            </section>
          )}

          {/* Phase 04: TRUST SIGNALS - ตอกย้ำความปลอดภัยและมาตรฐานบริการ */}
          <section id="trust-signals" className="py-24 lg:py-32">
            <ThaiTrustBadge
              clientTrust={data.clientTrust}
              isDark={isDarkMode}
              accentColor="var(--brand-primary)"
            />
          </section>

          {/* Phase 05: OBJECTION BUSTER - ตอบข้อสงสัยก่อนปิดการขาย */}
          <div id="objection-buster" className="border-border/5 bg-surface-card/30 border-t">
            <DynamicFAQ
              items={data.faqs}
              title="คำถามที่พบบ่อย"
              description="ตอบทุกข้อสงสัยเชิงเทคนิค เพื่อความมั่นใจสูงสุดก่อนการตัดสินใจของคุณ"
            />
          </div>

          {/* Phase 06: CONVERSION GATEWAY - ส่วนสรุปและฟอร์มสั่งซื้อ */}
          <section id="order" className="relative min-h-[60dvh] scroll-mt-24 py-24 md:py-32">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="border-brand-primary/30 shadow-glow-sm bg-surface-card hover:shadow-glow overflow-hidden rounded-[3rem] border transition-all duration-700">
                <div className="bg-brand-secondary relative overflow-hidden p-10 text-center text-white md:p-16">
                  {/* Pattern Decorator */}
                  <div
                    className="bg-brand-primary absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <h3 className="relative z-10 text-4xl font-black tracking-tighter uppercase italic drop-shadow-lg md:text-6xl">
                    Limited <span className="text-brand-primary">Offer</span>
                  </h3>

                  {pricing ? (
                    <div className="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-8 py-3 text-sm font-bold backdrop-blur-md">
                      <span className="tracking-widest text-white/70 uppercase">Special_Price</span>
                      <span className="text-brand-primary text-xl font-black">
                        {pricing.startPrice}
                      </span>
                    </div>
                  ) : (
                    <p className="relative z-10 mt-5 font-mono text-[10px] font-bold tracking-[0.4em] text-white/60 uppercase">
                      System_Awaiting_Order_Signal
                    </p>
                  )}
                </div>

                <div className="p-8 md:p-16">
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

          <footer className="border-border/5 py-12 text-center opacity-20">
            <p className="font-mono text-[8px] font-black tracking-[0.6em] uppercase">
              SalePage_Active_Node.v18.0.6_STABLE
            </p>
          </footer>
        </main>
      </LayoutEngine>
    </>
  );
};

SalePageTemplate.displayName = "SalePageTemplate";

export default memo(SalePageTemplate);
