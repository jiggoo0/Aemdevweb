/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_REGISTRY_VARIANTS (Elite Edition)
 * [COMPONENT_ID]: UniversalRegistry.tsx
 * [VERSION]: 2.0.0
 * [STRATEGY]: Technical Hierarchy | High-Fidelity Feedback | Zero-CLS
 */

import { memo } from "react";
import type { BaseTemplateProps, ServiceFeature, CatalogItem } from "@/types";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

// --- [01] Core Capabilities (FeatureGrid) ---
export const FeatureGrid = memo(({ features }: { features: readonly ServiceFeature[] }) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {features.map((feature, idx) => (
      <div
        key={feature.title}
        className={cn(
          "group relative flex flex-col overflow-hidden border border-[var(--border)] p-10 transition-all duration-700",
          "hover:shadow-pro bg-[var(--surface-card)] hover:-translate-y-2 hover:border-[var(--color-brand-primary)]/40",
          "transform-gpu rounded-[var(--dna-radius,1.25rem)] will-change-transform",
        )}
      >
        {/* Background Aura */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--color-brand-primary)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10" />

        <div className="group-hover:shadow-glow mb-10 flex h-16 w-16 items-center justify-center rounded-[calc(var(--dna-radius,1.25rem)*0.8)] border border-[var(--border)] bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary-fg)]">
          <IconRenderer name={feature.icon as IconName} size={32} strokeWidth={2.5} />
        </div>

        <div className="relative z-10 space-y-4">
          <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-40">
            Node_{idx.toString().padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
            {feature.title}
          </h3>
          <p className="text-lg leading-relaxed font-medium text-[var(--text-secondary)] italic opacity-70">
            “{feature.description}”
          </p>
        </div>
      </div>
    ))}
  </div>
));
FeatureGrid.displayName = "FeatureGrid";

// --- [02] Specialized Units (ItemGrid) ---
const ItemGrid = memo(({ items }: { items: readonly CatalogItem[] }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((item, idx) => (
      <div
        key={item.name}
        className={cn(
          "group rounded-section border-border bg-surface-card relative flex flex-col overflow-hidden border p-2 transition-all duration-700",
          "hover:scale-[1.02] hover:border-[var(--color-brand-primary)]/40 hover:shadow-sm",
        )}
      >
        <div className="bg-surface-offset flex h-48 items-center justify-center overflow-hidden rounded-[calc(var(--radius-section)-0.5rem)] transition-colors duration-700 group-hover:bg-[var(--color-brand-primary)]/5">
          <IconRenderer
            name={item.icon as IconName}
            size={80}
            strokeWidth={1}
            className="text-[var(--color-brand-primary)] opacity-20 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-1 flex-col p-8">
          <div className="mb-6 space-y-2">
            <span className="text-text-muted font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-40">
              รหัสสินค้า {idx.toString().padStart(2, "0")}
            </span>
            <h3 className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
              {item.name}
            </h3>
            <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed font-medium italic opacity-60">
              {item.description}
            </p>
          </div>

          {item.price && (
            <div className="border-border mt-auto flex items-center justify-between border-t pt-6">
              <div className="flex flex-col">
                <span className="text-text-muted text-[8px] font-black tracking-widest uppercase opacity-40">
                  ราคาอ้างอิง
                </span>
                <span className="text-lg font-black text-[var(--color-brand-primary)] italic">
                  {item.price}{" "}
                  {item.unit && <span className="text-xs opacity-50">/ {item.unit}</span>}
                </span>
              </div>
              <div className="bg-surface-offset text-text-muted rounded-xl p-3 transition-all duration-500 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
                <IconRenderer name="ArrowUpRight" size={16} />
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
));
ItemGrid.displayName = "ItemGrid";

const UniversalRegistry = ({ data }: BaseTemplateProps) => {
  const { items, coreFeatures, title } = data;

  const hasItems = items && items.length > 0;
  const hasFeatures = coreFeatures && coreFeatures.length > 0;

  if (!hasItems && !hasFeatures) return null;

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-8">
        {/* --- SECTION HEADER --- */}
        <header className="mb-24 space-y-8">
          <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2.5 text-[var(--color-brand-primary)] backdrop-blur-md">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-md" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              ระบบหลังบ้าน
            </span>
          </div>

          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
            System <br /> <span className="text-[var(--color-brand-primary)]">Architecture.</span>
          </h2>

          <div className="border-l-[6px] border-[var(--color-brand-primary)]/40 pl-8 md:pl-14">
            <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-medium italic opacity-80 md:text-3xl">
              โครงสร้างพื้นฐานและโมดูลการทำงานที่ขับเคลื่อนระบบ <br className="hidden md:block" />
              <span className="text-text-primary font-black not-italic underline decoration-[var(--color-brand-primary)] decoration-4 underline-offset-8">
                {title.split("|")[0].trim()}
              </span>
            </p>
          </div>
        </header>

        {/* --- CONTENT HUB --- */}
        <div className="space-y-32">
          {hasFeatures && (
            <div className="space-y-16">
              <div className="flex items-center gap-8">
                <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
                  Technical <span className="text-[var(--color-brand-primary)]">Capabilities.</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-brand-primary)]/30 to-transparent" />
              </div>
              <FeatureGrid features={coreFeatures} />
            </div>
          )}

          {hasItems && (
            <div className="space-y-16">
              <div className="flex items-center gap-8">
                <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
                  Deployment <span className="text-[var(--color-brand-primary)]">Units.</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-brand-primary)]/30 to-transparent" />
              </div>
              <ItemGrid items={items!} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(UniversalRegistry);
