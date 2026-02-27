/**
 * [SYSTEM ENGINE]: UNIFIED_LAYOUT_ENGINE v19.1.0 (PRODUCTION_READY)
 * [STRATEGY]: Shell + Strategy Pattern | Theme Injection | Zero-Flicker
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { cn, injectThemeVariables } from "@/lib/utils";
import type { UniversalTemplateProps, BaseTemplateProps, ThemeConfig } from "@/types";
import AmbientBackground from "@/components/ui/AmbientBackground";

// --- 01. SECTION REGISTRY (Strategy Mode) ---
import UniversalHero from "./sections/UniversalHero";
import ImpactStats from "@/components/shared/ImpactStats";
import { LocalInsight } from "./sections/LocalInsight";
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import WorkProcess from "@/components/features/landing/WorkProcess";
import PricingSection from "@/components/features/landing/PricingSection";
import { RegionalGallery } from "./sections/RegionalGallery";
import { DynamicFAQ } from "./sections/DynamicFAQ";

// [TYPE_DEFINITION]: รายการ Section ที่รองรับ
type SectionKey =
  | "hero"
  | "stats"
  | "insight"
  | "trust"
  | "process"
  | "pricing"
  | "gallery"
  | "faq"
  | "cta";

const SECTION_MAP: Record<SectionKey, React.ComponentType<BaseTemplateProps>> = {
  hero: UniversalHero as any,
  stats: ImpactStats as any,
  insight: LocalInsight as any,
  trust: TrustBadge as any,
  process: WorkProcess as any,
  pricing: PricingSection as any,
  gallery: RegionalGallery as any,
  faq: DynamicFAQ as any,
  cta: ConversionCTA as any,
};

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  /** [STRATEGY]: ข้อมูล Template สำหรับการเรนเดอร์อัตโนมัติ */
  readonly data?: UniversalTemplateProps;
  /** [CUSTOM]: ลำดับของ Section (Override) */
  readonly sectionOrder?: SectionKey[];
  /** [SHELL]: เนื้อหาที่ต้องการครอบด้วย Shell */
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  /** [THEME]: บังคับฉีดค่าธีม (ถ้าไม่ใช้ data.theme) */
  readonly theme?: ThemeConfig;
}

/**
 * @component LayoutEngine
 * @description เครื่องจักรจัดการ Layout หลักของระบบ รองรับทั้งการเรนเดอร์อัตโนมัติผ่าน data
 * และการเป็น Container Shell สำหรับหน้า Hub ต่างๆ
 */
const LayoutEngine = ({
  data,
  sectionOrder,
  children,
  className,
  spacing = "none",
  theme: directTheme,
}: LayoutEngineProps) => {
  // [A] THEME_RESOLUTION: จัดลำดับความสำคัญของธีม
  const activeTheme = data?.theme || directTheme;
  const dynamicStyles = injectThemeVariables(activeTheme);
  const ambientColor = activeTheme?.primary || "var(--brand-primary)";

  // [B] SPACING_CALCULATION
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-12 md:gap-y-16",
    medium: "gap-y-20 md:gap-y-28",
    large: "gap-y-24 md:gap-y-36",
    specialist: "gap-y-40 md:gap-y-64",
  };

  // [C] RENDER_STRATEGY: ลำดับการแสดงผล
  const order = sectionOrder ||
    (data as any)?.layoutOrder || [
      "hero",
      "stats",
      "insight",
      "trust",
      "process",
      "gallery",
      "pricing",
      "faq",
      "cta",
    ];

  return (
    <div
      className={cn(
        "bg-surface-main text-text-primary relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden",
        "isolate touch-pan-y antialiased selection:bg-[var(--brand-primary)]/20",
        className,
      )}
      style={{ ...dynamicStyles, isolation: "isolate" } as React.CSSProperties}
      data-theme-mode={activeTheme?.mode || "light"}
    >
      {/* --- LAYER 01: ATMOSPHERIC INFRASTRUCTURE --- */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <AmbientBackground
          color={ambientColor}
          opacity={activeTheme?.mode === "dark" ? 0.15 : 0.08}
        />
      </div>

      {/* --- LAYER 02: CONTENT CORE --- */}
      <main className={cn("relative z-10 flex w-full flex-auto flex-col", spacingMap[spacing])}>
        {children
          ? children
          : data
            ? order.map((key: SectionKey, index: number) => {
                const SectionComponent = SECTION_MAP[key];
                if (!SectionComponent) return null;

                return (
                  <SectionComponent
                    key={`${key}-${index}`}
                    data={data}
                    {...((data as any).sections?.[key] || {})}
                  />
                );
              })
            : null}
      </main>

      {/* Visual Terminal Baseline */}
      <div className="via-brand-primary/20 pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};

export default memo(LayoutEngine);
