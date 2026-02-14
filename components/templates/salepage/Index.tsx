/**
 * [TEMPLATE]: SALEPAGE_INDEX v17.9.115 (STABLE_FINAL)
 * [STRATEGY]: Psychological Flow | Component-Based Conversion | Zero-Waste
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
import StickyBuyButton from "./_components/StickyBuyButton"; // [FIXED]: เชื่อมต่อ Component ให้ Knip เลิกบ่น
import IconRenderer from "@/components/ui/IconRenderer";

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

export default function SalePageTemplate({ data, suppressUI = false }: SalePageTemplateProps) {
  // [SEO]: รวบรวม Schema ทั้งหมดเพื่อส่งให้ Google Bot
  const schemas = useMemo(() => generateUniversalSchema(data), [data]);

  const { socialProof: social, regionalPricing: pricing } = data;
  const isDarkMode = data.theme?.mode === "dark";

  return (
    <>
      <JsonLd data={schemas} />

      {/* ระบบ DynamicThemeWrapper จัดการพื้นหลังและสีหลักให้แล้วผ่าน CSS Variables */}
      <LayoutEngine spacing="none">
        {!suppressUI && (
          <>
            <SaleNavbar
              title={data.title}
              action={{ label: "สั่งซื้อทันที", href: "#order" }}
              theme={data.theme}
            />

            {/* [FIXED]: ใช้งาน StickyBuyButton Component แทนการเขียน Inline Div */}
            <StickyBuyButton
              href="#order"
              label={`สั่งซื้อเลย ${data.price ? `(${data.price})` : ""}`}
              theme={data.theme}
            />
          </>
        )}

        {/* 01. HERO: ส่วนแสดงจุดเด่นและภาพลักษณ์หลัก */}
        <SaleHero
          title={data.title}
          description={data.description}
          image={data.image}
          accentColor="var(--brand-primary)"
          className="text-[var(--brand-foreground)]"
        />

        {/* 02. URGENCY HUB: กระตุ้นการตัดสินใจด้วยความจำกัดและผลตอบรับ */}
        <section className="relative z-30 -mt-10 mb-20 px-4 sm:-mt-16 lg:mb-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Flash Sale Timer: กำหนดเวลา 24 ชม. จากปัจจุบันเป็นค่าเริ่มต้น */}
            <div className="inline-block rounded-[2rem] border border-[var(--foreground)]/10 bg-[var(--background)]/80 px-8 py-5 shadow-2xl backdrop-blur-md transition-transform hover:scale-[1.02]">
              <FlashSaleTimer
                targetDate={new Date(Date.now() + 86400000).toISOString()}
                color="var(--brand-primary)"
              />
            </div>

            {/* Social Proof: ยืนยันความเชื่อมั่นด้วยดาวและจำนวนลูกค้า */}
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

        {/* 03. COMPARISON MATRIX: แสดงคุณสมบัติที่เหนือกว่าคู่แข่ง */}
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

        {/* 04. TRUST BADGES: ความน่าเชื่อถือในแบบฉบับธุรกิจไทย */}
        <section className="py-20 lg:py-32">
          <ThaiTrustBadge
            clientTrust={data.clientTrust}
            isDark={isDarkMode}
            accentColor="var(--brand-primary)"
          />
        </section>

        {/* 05. ORDER GATEWAY: ด่านสุดท้ายสำหรับการเปลี่ยนผู้เยี่ยมชมเป็นลูกค้า */}
        <section id="order" className="relative scroll-mt-24 py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="overflow-hidden rounded-[3rem] border border-[var(--brand-primary)]/30 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_-10px_var(--brand-primary)]">
              {/* Form Header: เน้นความ Exclusive */}
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

              {/* Form Body: ระบบรับข้อมูลการสั่งซื้อโดยตรง */}
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
      </LayoutEngine>
    </>
  );
}
