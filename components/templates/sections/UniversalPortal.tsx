/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_PORTAL_VARIANTS
 * [COMPONENT_ID]: UniversalPortal.tsx
 * [VERSION]: 1.0.0
 * [STATUS]: PRODUCTION_READY
 * [STRATEGY]: RSC-First, Data-Driven Actions from UniversalTemplateProps
 */

import { memo } from "react";
import type { BaseTemplateProps } from "@/types/template-props";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";

const UniversalPortal = ({ data }: BaseTemplateProps) => {
  const { primaryAction, secondaryAction, theme: _theme } = data;

  // Use a generic title/description if the main ones are too long or not fitting
  const portalTitle = `Ready to Elevate ${data.category}?`;
  const portalDescription = `Take the next step. Our specialists are ready to assist you with tailored solutions that drive results.`;

  return (
    <section
      id="universal-portal"
      className="relative overflow-hidden border-t bg-[#020617] py-24 text-white sm:py-32"
    >
      {/* Visual Infrastructure Layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(var(--brand-primary) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 transform-gpu rounded-full bg-[var(--brand-primary)]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Authority Marker */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="shadow-glow-sm flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-[var(--brand-primary)] ring-1 ring-[var(--brand-primary)]/20 backdrop-blur-2xl">
            <IconRenderer name="Target" size={48} />
          </div>
          <span className="font-mono text-[10px] font-black tracking-[0.5em] text-[var(--brand-primary)] uppercase opacity-80">
            Conversion_Master_Node
          </span>
        </div>

        <h2 className="mb-8 text-4xl leading-[0.9] font-black tracking-tighter uppercase italic sm:text-6xl lg:text-7xl">
          {portalTitle}
        </h2>

        <p className="text-text-secondary mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-semibold italic opacity-80 md:text-xl">
          “{portalDescription}”
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {primaryAction && (
            <Button
              href={primaryAction.href}
              size="lg"
              className="shadow-glow-md h-16 rounded-2xl px-10 text-[11px] font-black tracking-widest uppercase italic"
              variant="default"
            >
              <IconRenderer name={primaryAction.icon || "Zap"} className="mr-2 h-5 w-5" />
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              href={secondaryAction.href}
              size="lg"
              variant="outline"
              className="hover:border-brand-primary/60 h-16 rounded-2xl border-white/20 px-10 text-[11px] font-black tracking-widest text-white uppercase italic backdrop-blur-sm"
            >
              <IconRenderer
                name={secondaryAction.icon || "MessageCircle"}
                className="mr-2 h-5 w-5"
              />
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(UniversalPortal);
