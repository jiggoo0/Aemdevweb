/**
 * [TEMPLATE CORE]: PREMIUM_TEMPLATE_RENDERER v1.0.0
 * [STRATEGY]: Dynamic Component Hydration | Context Projection | Zero-FOUC
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { TemplateMasterData } from "@/types/templates";
import { TemplateBuilderProvider } from "./TemplateBuilderContext";
import { LivePerformanceDashboard } from "@/components/features/landing/LivePerformanceDashboard";
import { DynamicROICalculator } from "@/components/features/landing/DynamicROICalculator";

interface RendererProps {
  data: TemplateMasterData;
}

/**
 * @component PremiumTemplateRenderer
 * @description ตัวเรนเดอร์หลักสำหรับเทมเพลตระดับพรีเมียม โดยดึงฟีเจอร์จาก Master Data
 */
export const PremiumTemplateRenderer = ({ data }: RendererProps) => {
  return (
    <TemplateBuilderProvider initialData={data}>
      <main className="bg-surface-main relative min-h-screen w-full">
        {/* --- DYNAMIC SECTION MAPPING --- */}
        <section className="container mx-auto space-y-32 px-4 py-24">
          {/* Example integration of premium features */}
          {data.features.map((feature) => (
            <div key={feature.id} className="template-feature-node">
              {feature.type === "dashboard" && (
                <div className="mx-auto max-w-4xl">
                  <header className="mb-12 text-center">
                    <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                      {feature.title}
                    </h2>
                  </header>
                  <LivePerformanceDashboard />
                </div>
              )}

              {feature.type === "calculator" && (
                <div className="mx-auto max-w-5xl">
                  <header className="mb-12 text-center">
                    <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                      {feature.title}
                    </h2>
                  </header>
                  <DynamicROICalculator />
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </TemplateBuilderProvider>
  );
};
