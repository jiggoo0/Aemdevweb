/**
 * [TEMPLATE]: SALEPAGE_INDEX v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Zero-Friction Layout | Atomic Component Orchestration | Conversion Hardened
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React from "react";
import Script from "next/script";

// --- 1. Infrastructure & Types ---
import type { BaseTemplateProps, TemplateMasterData } from "@/types";
import { generateSalePageSchema } from "./Schema";

// --- 2. Atomic Components ---
import { SaleHero } from "./_components/SaleHero";
import { FlashSaleTimer } from "./_components/FlashSaleTimer";
import { FeatureComparison } from "./_components/FeatureComparison";
import { ThaiTrustBadge } from "./_components/ThaiTrustBadge";
import { DirectOrderForm } from "./_components/DirectOrderForm";
import StickyBuyButton from "./_components/StickyBuyButton";

export default function SalePageTemplate({ data }: BaseTemplateProps) {
  const typedData = data as unknown as TemplateMasterData;
  const schemas = generateSalePageSchema(typedData);
  const currentYear = 2026;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-700">
      <Script
        id={`schema-${typedData.templateSlug || "salepage"}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* --- 01. HEADER: Focused Action --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.5)]" />
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
              {typedData.title}
            </span>
          </div>
          <a
            href="#order"
            className="rounded-full bg-rose-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-all hover:bg-rose-700 hover:shadow-rose-300 active:scale-95"
          >
            สั่งซื้อตอนนี้
          </a>
        </div>
      </nav>

      <main className="flex flex-col">
        <SaleHero
          title={typedData.title}
          description={typedData.description}
          image={typedData.image}
        />

        <section className="relative z-10">
          <FlashSaleTimer />
        </section>

        <section className="bg-slate-50 py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <FeatureComparison features={typedData.coreFeatures || []} />
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <ThaiTrustBadge />
          </div>
        </section>

        {/* [CONVERSION]: Final Checkout Node */}
        <section id="order" className="scroll-mt-20 bg-rose-50/30 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <header className="mb-12 text-center">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase italic sm:text-4xl">
                กรอกข้อมูลรับข้อเสนอพิเศษ
              </h2>
              <div className="shadow-glow-sm mx-auto mt-4 h-1.5 w-24 rounded-full bg-rose-600" />
            </header>

            <div className="shadow-pro-xl rounded-[2.5rem] border border-rose-100 bg-white p-2">
              <DirectOrderForm price={typedData.price} unit={typedData.unit} />
            </div>
          </div>
        </section>
      </main>

      {/* [ANCHOR]: เชื่อมโยง href และราคาเข้ากับตัวปุ่ม */}
      <StickyBuyButton href="#order" price={typedData.priceValue} label="จองสิทธิ์พิเศษ" />

      <footer className="border-t border-slate-100 bg-slate-50/50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-slate-400">
            &copy; {currentYear} {typedData.title} | Secured Infrastructure by AEMDEVWEB Node
          </p>
        </div>
      </footer>
    </div>
  );
}
