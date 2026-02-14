/**
 * [COMPONENT]: FEATURE_COMPARISON v17.9.103 (STABILIZED)
 * [STRATEGY]: Glassmorphism Support | Dark Mode Logic | Strict Readonly Types
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import type { ServiceFeature } from "@/types";

interface FeatureComparisonProps {
  // [FIXED]: ใช้ ServiceFeature และกำหนดเป็น readonly array ตามมาตรฐานที่ได้รับมอบหมาย
  readonly features?: readonly ServiceFeature[];
  readonly accentColor?: string;
  readonly isDark?: boolean;
}

export const FeatureComparison = memo(
  ({ features, accentColor = "#e11d48", isDark = false }: FeatureComparisonProps) => {
    // [SAFETY]: Gatekeeper ป้องกันการเรนเดอร์หากไม่มีข้อมูล
    if (!features || features.length === 0) return null;

    return (
      <div className="relative z-10 w-full">
        {/* [01] SECTION HEADER: Branding & Scannability */}
        <div className="mb-16 text-center">
          <h3
            style={{ color: accentColor }}
            className="mb-4 text-xs font-black tracking-[0.3em] uppercase drop-shadow-sm"
          >
            Core Competencies
          </h3>
          <h2
            className={cn(
              "text-3xl leading-[0.9] font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-5xl",
              isDark ? "text-white drop-shadow-lg" : "text-slate-900",
            )}
          >
            จุดเด่นที่เหนือกว่า
            <br />
            <span className="font-thai text-2xl font-light tracking-normal not-italic opacity-50 md:text-4xl">
              คู่แข่งในท้องตลาด
            </span>
          </h2>
        </div>

        {/* [02] FEATURE GRID: Responsive Architecture */}

        <div className="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={`feat-comp-${idx}`}
              className={cn(
                "group relative rounded-[2.5rem] border p-8 transition-all duration-500 hover:-translate-y-2 md:p-10",
                // [THEME_LOGIC]: สลับสไตล์ Glassmorphism ตามพื้นหลัง (isDark)
                isDark
                  ? "border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                  : "border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50",
              )}
            >
              {/* Icon Container: Dynamic Branding Glow */}
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.5rem] text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: isDark
                    ? `0 0 20px ${accentColor}60`
                    : `0 20px 40px -10px ${accentColor}40`,
                }}
              >
                <IconRenderer name={feature.icon as IconName} size={32} strokeWidth={2.5} />
              </div>

              {/* Content Body: Contrast-Aware Text */}
              <h4
                className={cn(
                  "mb-4 text-2xl font-black tracking-tight transition-colors",
                  isDark ? "text-white" : "text-slate-900",
                )}
              >
                {feature.title}
              </h4>
              <p
                className={cn(
                  "font-thai leading-relaxed transition-colors",
                  isDark
                    ? "text-slate-300 group-hover:text-white"
                    : "text-slate-500 group-hover:text-slate-700",
                )}
              >
                {feature.description}
              </p>

              {/* Decorative Element: Theme-Based Corner Glow */}
              <div
                className="absolute top-0 right-0 h-24 w-24 rounded-tr-[2.5rem] rounded-bl-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{ backgroundColor: accentColor }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
);

FeatureComparison.displayName = "FeatureComparison";
