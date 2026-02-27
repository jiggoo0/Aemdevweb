/**
 * [TEMPLATE]: BIO_IDENTITY_ORCHESTRATOR v18.5.0 (SPECIALIST_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Specialist Personal Branding | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry ---
import UniversalHero from "@/components/templates/sections/UniversalHero";
import UniversalRegistry from "@/components/templates/sections/UniversalRegistry";
import UniversalLogoCloud from "@/components/templates/sections/UniversalLogoCloud";
import { DirectTerminal } from "../sections/DirectTerminal";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalInsight } from "../sections/LocalInsight";
import { DynamicFAQ } from "../sections/DynamicFAQ";

const BioTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  return (
    <LayoutEngine spacing="none" theme={theme}>
      <JsonLd data={schema} />

      <main className="bg-surface-main relative flex flex-col items-center antialiased">
        <h2 className="sr-only">Specialist Identity & Performance Portfolio</h2>

        <div className="w-full max-w-3xl space-y-24 px-4 py-16 md:py-32">
          {/* [SEQUENCE_00]: CORE HERO (Universal Entry) */}
          <section>
            <UniversalHero data={data} />
          </section>

          {/* [SEQUENCE_01]: PERSONAL PROMOTION (Surface Card) */}
          {data.promotions && data.promotions.length > 0 && (
            <section className="relative z-10 w-full">
              <div className="rounded-card border-brand-primary/40 bg-brand-primary/5 border border-dashed p-8 text-center backdrop-blur-md">
                <div className="border-brand-primary/20 bg-surface-card shadow-pro-sm mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-1.5">
                  <div className="bg-brand-primary shadow-glow-sm h-1.5 w-1.5 animate-pulse rounded-full" />
                  <span className="text-brand-primary font-mono text-[9px] font-black tracking-widest uppercase">
                    Personal_Bonus_Node
                  </span>
                </div>
                <h3 className="text-text-primary mb-2 text-2xl font-black tracking-tighter uppercase italic md:text-4xl">
                  {data.promotions[0].title}
                </h3>
                <p className="text-text-secondary mb-8 text-lg font-medium italic opacity-70">
                  “{data.promotions[0].description}”
                </p>
                {data.promotions[0].discount && (
                  <div className="bg-brand-primary shadow-glow-sm inline-block rounded-2xl px-10 py-4">
                    <span className="text-surface-main text-3xl font-black italic">
                      {data.promotions[0].discount}
                    </span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* [SEQUENCE_02]: SKILLS & LINKS (Registry Matrix) */}
          <section className="bg-surface-offset/50 rounded-section border-border/40 border p-8 shadow-inner md:p-12">
            <UniversalRegistry data={data} />
          </section>

          {/* [SEQUENCE_03]: REGIONAL AUTHORITY (Context Node) */}
          {data.province && (
            <section className="border-border/10 space-y-20 border-t py-8">
              <LocalInsight
                insight={data.localContext?.marketInsight || ""}
                painPoints={(data.localContext?.painPoints as string[]) || []}
                marketSaturation={data.marketSaturation}
              />
              <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
              <div className="mx-auto max-w-xl">
                <DirectTerminal
                  mode="health-check"
                  province={data.province}
                  latency={data.regionalLatency}
                />
              </div>
            </section>
          )}

          {/* [SEQUENCE_04]: INTELLIGENCE HUB (FAQ) */}
          <section className="border-border/10 border-t pt-12">
            <DynamicFAQ
              items={data.faqs}
              title="Process_FAQ"
              description="ข้อมูลเบื้องต้นเกี่ยวกับขั้นตอนการทำงานและการร่วมงานในระดับ Specialist"
            />
          </section>

          {/* [SEQUENCE_05]: EXPERIENCE STACK (Proof Node) */}
          <section className="py-8">
            <UniversalLogoCloud
              title={data.clientTrust || "Authorized Experience"}
              theme="minimal_bar"
            />
          </section>

          {/* [SEQUENCE_06]: DIRECT TERMINAL (Conversion) */}
          <section className="pt-8">
            <DirectTerminal mode="contact" />
          </section>

          <footer className="pt-16 text-center opacity-20">
            <div className="inline-flex items-center gap-3">
              <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase">
                Architected_By_AEMZA_v18.5.0_FINAL
              </p>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
};

export default BioTemplate;
