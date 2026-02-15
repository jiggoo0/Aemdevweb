/**
 * [TEMPLATE]: SALEPAGE_ORCHESTRATOR v18.0.39 (STABLE_CONVERSION)
 * [STRATEGY]: Psychological Flow | Intelligence FAQ Activation | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import JsonLd from "@/components/seo/JsonLd";

// --- Infrastructure ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

// --- Components ---
import { SaleNavbar } from "./_components/SaleNavbar";
import { SaleHero } from "./_components/SaleHero";
import { FlashSaleTimer } from "./_components/FlashSaleTimer";
import { FeatureComparison } from "./_components/FeatureComparison";
import { ThaiTrustBadge } from "./_components/ThaiTrustBadge";
import { DirectOrderForm } from "./_components/DirectOrderForm";
import { SaleFooter } from "./_components/SaleFooter";
import StickyBuyButton from "./_components/StickyBuyButton";
import IconRenderer from "@/components/ui/IconRenderer";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_PATCH]: ป้องกันค่า undefined ในขั้นตอนการสร้าง Static Page (Build Engine)
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

export default function SalePageTemplate({ data, suppressUI = false }: SalePageTemplateProps) {
  // [SEO]: รวบรวมข้อมูล Schema สำหรับ Product/Offer เพื่อส่งค่าให้ Google Core Algorithm
  const schemas = useMemo(() => generateUniversalSchema(data), [data]);

  const { socialProof: social, regionalPricing: pricing } = data;
  const isDarkMode = data.theme?.mode === "dark";

  return (
    <>
      <JsonLd data={schemas} />

      <LayoutEngine spacing="none">
        {!suppressUI && (
          <>
            <SaleNavbar
              title={data.title}
              action={{ label: "สั่งซื้อทันที", href: "#order" }}
              theme={data.theme}
            />

            <StickyBuyButton
              href="#order"
              label={`สั่งซื้อเลย ${data.price ? `(${data.price})` : ""}`}
              theme={data.theme}
            />
          </>
        )}

        {/* --- Phase 01: Core Hero Section --- 
            สร้าง First Impression และระบุ Value Proposition หลัก
        */}
        <SaleHero
          title={data.title}
          description={data.description}
          image={data.image}
          accentColor="var(--brand-primary)"
          className="text-[var(--brand-foreground)]"
        />

        {/* --- Phase 02: Scarcity & Social Proof --- 
            กระตุ้นการตัดสินใจด้วยเวลาที่จำกัดและยืนยันด้วยฐานลูกค้าจริง
        */}
        <section className="relative z-30 -mt-10 mb-20 px-4 sm:-mt-16 lg:mb-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-block rounded-[2rem] border border-[var(--foreground)]/10 bg-[var(--surface-main)]/80 px-8 py-5 shadow-2xl backdrop-blur-md transition-transform hover:scale-[1.02]">
              <FlashSaleTimer
                targetDate={new Date(Date.now() + 86400000).toISOString()}
                color="var(--brand-primary)"
              />
            </div>

            {social && (
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex text-yellow-400 drop-shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <IconRenderer key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <span className="text-xs font-black tracking-[0.2em] uppercase opacity-70">
                  Trusted by {social.reviewCount?.toLocaleString()}+ Customers
                </span>
              </div>
            )}
          </div>
        </section>

        {/* --- Phase 03: Feature Matrix --- 
            แสดงความเหนือกว่าในเชิงเทคนิคและผลประโยชน์ที่ลูกค้าจะได้รับ
        */}
        {data.coreFeatures && data.coreFeatures.length > 0 && (
          <section className="relative overflow-hidden border-y border-[var(--foreground)]/5 py-24">
            <div className="container mx-auto px-4">
              <FeatureComparison
                features={data.coreFeatures}
                accentColor="var(--brand-primary)"
                isDark={isDarkMode}
              />
            </div>
          </section>
        )}

        {/* --- Phase 04: Authority Validation --- 
            ยืนยันมาตรฐานความปลอดภัยและความน่าเชื่อถือ (Trust Signals)
        */}
        <section className="py-20 lg:py-32">
          <ThaiTrustBadge
            clientTrust={data.clientTrust}
            isDark={isDarkMode}
            accentColor="var(--brand-primary)"
          />
        </section>

        {/* --- Phase 05: Objection Killer (FAQ) --- 
            [STRATEGY]: ด่านสุดท้ายในการทำลายข้อโต้แย้งก่อนเข้าสู่ขั้นตอนการชำระเงิน
        */}
        <div className="border-t border-[var(--foreground)]/5 bg-[var(--surface-main)]/30">
          <DynamicFAQ
            items={data.faqs}
            title="คำถามที่พบบ่อย"
            description="เราตอบทุกข้อสงสัยเชิงเทคนิค เพื่อให้คุณมั่นใจในคุณภาพและการบริการที่เหนือกว่า"
          />
        </div>

        {/* --- Phase 06: Conversion Gateway --- 
            Closing Section: ปิดการขายด้วยฟอร์มการสั่งซื้อตรง (Direct Order)
        */}
        <section id="order" className="relative scroll-mt-24 py-24 min-h-[50dvh]">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="overflow-hidden rounded-[var(--brand-radius)] border border-[var(--brand-primary)]/30 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_-10px_var(--brand-primary)]">
              <div
                className="relative overflow-hidden p-10 text-center text-white"
                style={{ backgroundColor: "var(--brand-secondary)" }}
              >
                <div className="absolute inset-0 animate-pulse bg-[url('/grid-pattern.svg')] opacity-10" />
                <h3 className="relative z-10 text-3xl font-black tracking-tighter uppercase italic drop-shadow-lg md:text-5xl">
                  Limited Offer
                </h3>

                {pricing ? (
                  <div className="relative z-10 mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-2 text-sm font-bold backdrop-blur-md">
                    <span className="font-medium text-white/80">ราคาพิเศษ</span>
                    <span className="text-[var(--brand-primary)]">{pricing.startPrice}</span>
                  </div>
                ) : (
                  <p className="relative z-10 mt-3 font-medium text-white/80">
                    จองสิทธิ์โปรโมชั่นก่อนหมดเวลา
                  </p>
                )}
              </div>

              <div className="bg-white p-8 md:p-14">
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

        {/* --- SYSTEM FOOTER: Technical Stamp --- */}
        <footer className="py-8 text-center border-t border-[var(--foreground)]/5 opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            SalePage_Active_Node.v18.0.39
          </p>
        </footer>
      </LayoutEngine>
    </>
  );
}
