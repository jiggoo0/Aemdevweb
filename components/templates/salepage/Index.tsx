/**
 * [TEMPLATE]: SALEPAGE_INDEX v17.9.104 (THEME_STABILIZED)
 * [STRATEGY]: Layered Context | Optical Balance | Type-Safe Architecture
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

// --- 1. Infrastructure & Core Engines ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

// --- 2. Internal Atomic Components ---
import { SaleNavbar } from "./_components/SaleNavbar";
import { SaleHero } from "./_components/SaleHero";
import { FlashSaleTimer } from "./_components/FlashSaleTimer";
import { FeatureComparison } from "./_components/FeatureComparison";
import { ThaiTrustBadge } from "./_components/ThaiTrustBadge";
import { DirectOrderForm } from "./_components/DirectOrderForm";
import { StickyBuyButton } from "./_components/StickyBuyButton";
import { SaleFooter } from "./_components/SaleFooter";
import IconRenderer from "@/components/ui/IconRenderer";

interface SalePageTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

export default function SalePageTemplate({ data, suppressUI = false }: SalePageTemplateProps) {
  // [SEO]: Compute Schema for Product/Service Graph
  const schemas = useMemo(() => generateUniversalSchema(data), [data]);

  // [DATA_MANAGEMENT]: Extract sub-data safely
  const { socialProof: social, regionalPricing: pricing } = data;

  // [THEME_ENGINE]: Centralized Theme Reference with Fallback Values
  const activeTheme = useMemo(
    () => ({
      primary: data.theme?.primary || "#ef4444",
      secondary: data.theme?.secondary || "#991b1b",
      background: data.theme?.background || "bg-white",
      accent: data.theme?.accent || "#f43f5e",
    }),
    [data.theme],
  );

  // [FIXED]: Check if background is a custom dark hex with safe access
  const isDarkMode = activeTheme.background?.includes("bg-[#") ?? false;

  // [NAVBAR_LOGIC]: Standardize CTA mapping
  const navbarAction = useMemo(() => {
    const label =
      typeof data.primaryAction === "string"
        ? data.primaryAction
        : data.primaryAction?.label || "สั่งซื้อทันที";

    return { label, href: "#order" };
  }, [data.primaryAction]);

  return (
    <LayoutEngine spacing="none" theme={activeTheme}>
      <JsonLd data={schemas} />

      {/* [LAYER 0]: Base Dynamic Layer */}
      <div
        className={cn(
          "selection:bg-brand-primary/30 flex min-h-screen flex-col transition-all duration-700 ease-in-out",
          activeTheme.background,
        )}
      >
        {/* [NAVIGATIONAL_OVERLAY] */}
        {!suppressUI && (
          <>
            {/* [FIXED]: Passing mapped theme to ensure type compatibility */}
            <SaleNavbar
              title={data.title}
              action={navbarAction}
              theme={{
                primary: activeTheme.primary,
                background: activeTheme.background,
              }}
            />
            <StickyBuyButton
              href="#order"
              price={data.price}
              color={activeTheme.primary}
              label="จองสิทธิ์ราคาโปรโมชั่น"
            />
          </>
        )}

        {/* 01. HERO IMPACT NODE */}
        <SaleHero
          title={data.title}
          description={data.description}
          image={data.image}
          accentColor={activeTheme.primary}
          className={isDarkMode ? "text-white" : "text-slate-900"}
        />

        {/* 02. PSYCHOLOGICAL URGENCY HUB */}
        <section className="relative z-30 -mt-10 mb-20 px-4 sm:-mt-16 lg:mb-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Urgency Trigger: Flash Sale & Timer */}
            <div className="glass-card shadow-glow inline-block rounded-[2rem] px-8 py-5 transition-transform hover:scale-[1.02]">
              <FlashSaleTimer
                targetDate={new Date(Date.now() + 86400000).toISOString()}
                color={activeTheme.primary}
              />
            </div>

            {/* Credibility Signals: Social Proof */}
            {social && (
              <div className="animate-in fade-in slide-in-from-bottom-5 mt-8 flex flex-col items-center gap-3 duration-1000">
                <div className="flex text-yellow-400 drop-shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <IconRenderer key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <span
                  className={cn(
                    "text-xs font-black tracking-[0.2em] uppercase opacity-70",
                    isDarkMode ? "text-white" : "text-slate-600",
                  )}
                >
                  Trusted by {social.reviewCount?.toLocaleString()}+ Active Users
                </span>
              </div>
            )}
          </div>
        </section>

        {/* 03. SOLUTION MATRIX: Feature Comparison */}
        {data.coreFeatures && data.coreFeatures.length > 0 && (
          <section className="relative overflow-hidden border-y border-white/5 py-24">
            <div className="container mx-auto px-4">
              <FeatureComparison
                features={data.coreFeatures}
                accentColor={activeTheme.primary}
                isDark={isDarkMode}
              />
            </div>
          </section>
        )}

        {/* 04. VALIDATION NODE: Trust Badges */}
        <section className="py-20 lg:py-32">
          <ThaiTrustBadge
            clientTrust={data.clientTrust}
            isDark={isDarkMode}
            accentColor={activeTheme.primary}
          />
        </section>

        {/* 05. CONVERSION CLOSER (ORDER_GATEWAY) */}
        <section id="order" className="relative scroll-mt-24 py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div
              className="glass-card shadow-pro-xl hover:shadow-glow overflow-hidden rounded-[3rem] transition-all duration-500"
              style={{ borderColor: `${activeTheme.primary}30` }}
            >
              {/* Header: Visual Authority */}
              <div
                className="relative overflow-hidden p-10 text-center text-white"
                style={{ backgroundColor: activeTheme.secondary }}
              >
                <div className="absolute inset-0 animate-pulse bg-[url('/grid-pattern.svg')] opacity-10" />
                <h3 className="relative z-10 text-3xl font-black tracking-tighter uppercase italic drop-shadow-lg md:text-5xl">
                  Order Now
                </h3>

                {pricing ? (
                  <div className="relative z-10 mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-6 py-2 text-sm font-bold backdrop-blur-md">
                    <span className="font-medium text-white/60">ราคาพิเศษ</span>
                    <span className="text-brand-primary">{pricing.startPrice}</span>
                  </div>
                ) : (
                  <p className="relative z-10 mt-3 font-medium text-white/80">
                    กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับภายใน 5 นาที
                  </p>
                )}
              </div>

              {/* Body: Zero-Friction UX Form */}
              <div className="bg-white/95 p-8 backdrop-blur-2xl md:p-14">
                <DirectOrderForm
                  price={data.price}
                  unit={data.unit}
                  accentColor={activeTheme.primary}
                />
              </div>
            </div>
          </div>
        </section>

        {/* [SYSTEM_FOOTER] */}
        {!suppressUI && <SaleFooter brandName={data.title} isDark={isDarkMode} />}
      </div>
    </LayoutEngine>
  );
}
