/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_PORTAL_VARIANTS
 * [COMPONENT_ID]: UniversalPortal.tsx
 * [VERSION]: 1.0.0
 * [STATUS]: PRODUCTION_READY
 * [STRATEGY]: RSC-First, Data-Driven Actions from UniversalTemplateProps
 */

import { memo } from "react";
import Link from "next/link";
import type { BaseTemplateProps } from "@/types";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

const UniversalPortal = ({ data }: BaseTemplateProps) => {
  const { primaryAction, secondaryAction } = data;

  // [CONTENT_STRATEGY]: Professional & Engaging Copy
  const portalTitle = data.category
    ? `พร้อมยกระดับธุรกิจ ${data.category} ของคุณหรือยัง?`
    : "พร้อมยกระดับธุรกิจของคุณสู่มาตรฐานสากลหรือยัง?";

  const portalDescription =
    "ก้าวไปอีกขั้นกับโซลูชันที่ออกแบบมาเพื่อผลลัพธ์ที่จับต้องได้ ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและสนับสนุนคุณในทุกขั้นตอน";

  return (
    <section
      id="universal-portal"
      className="relative overflow-hidden border-t bg-[var(--surface-main)] py-24 text-[var(--text-primary)] sm:py-32 lg:py-40"
    >
      {/* Visual Infrastructure Layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(var(--color-brand-primary) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 transform-gpu rounded-full bg-[var(--color-brand-primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Authority Marker */}
        <div className="mb-12 flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] text-[var(--color-brand-primary)] shadow-sm ring-1 ring-[var(--color-brand-primary)]/20 backdrop-blur-sm md:h-20 md:w-20">
            <IconRenderer name="Target" size={32} className="md:size-10" />
          </div>
          <span className="font-sans text-[10px] font-bold tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-80 md:text-[11px]">
            Ready to Elevate
          </span>
        </div>

        <h2 className="mb-10 text-4xl leading-[1.2] font-black tracking-tighter text-[var(--text-primary)] uppercase italic sm:text-6xl lg:text-7xl">
          {portalTitle}
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed font-medium text-[var(--text-secondary)] opacity-90 md:text-2xl">
          “{portalDescription}”
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="h-16 rounded-2xl bg-[var(--color-brand-primary)] px-10 text-[11px] font-black tracking-widest text-white uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 md:h-18 md:px-14 md:text-xs"
          >
            <Link href={primaryAction?.href || SITE_CONFIG.links.line}>
              <IconRenderer
                name={primaryAction?.icon || "Zap"}
                className="mr-3 h-5 w-5 md:h-6 md:w-6"
              />
              {primaryAction?.label || "ปรึกษาผู้เชี่ยวชาญ"}
            </Link>
          </Button>

          {(secondaryAction || data.category) && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 rounded-2xl border-[var(--border)] bg-[var(--surface-card)]/50 px-10 text-[11px] font-black tracking-widest text-[var(--text-primary)] uppercase backdrop-blur-sm transition-all hover:border-[var(--color-brand-primary)]/50 hover:bg-[var(--surface-offset)] md:h-18 md:px-14 md:text-xs"
            >
              <Link href={secondaryAction?.href || "#"}>
                <IconRenderer
                  name={secondaryAction?.icon || "MessageCircle"}
                  className="mr-3 h-5 w-5 md:h-6 md:w-6"
                />
                {secondaryAction?.label || "ดูรายละเอียดบริการ"}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(UniversalPortal);
