/**
 * [FEATURE COMPONENT]: AREA_CARD_NODE v18.2.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure Server Component | Zero-JS Payload | Geospatial Authority
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { AreaNode } from "@/types";

interface AreaCardProps {
  readonly data: AreaNode;
  readonly index?: number;
  readonly className?: string;
}

const AreaCard = ({ data, index = 0, className }: AreaCardProps) => {
  // [SERVER_ONLY]: Pure logic for RSC execution
  const safeSlug = data.slug.trim().toLowerCase();
  const districts = Array.isArray(data.districts) ? [...data.districts] : [];
  const displayTitle = data.province || "พื้นที่ให้บริการ";

  const imagePath = data.heroImage ? data.heroImage.trim() : `/images/areas/${safeSlug}-node.webp`;
  const imgData = IMAGE_BLUR_DATA[imagePath as keyof typeof IMAGE_BLUR_DATA] || null;

  const socialProof = data.localContext?.socialProof;
  const displayPrice = data.price || data.localContext?.regionalPricing?.startPrice;

  return (
    <Link
      href={`/areas/${safeSlug}`}
      aria-label={`ดูรายละเอียดบริการรับทำเว็บไซต์ในพื้นที่ ${displayTitle}`}
      className={cn(
        "group rounded-section relative flex h-full min-h-[520px] w-full flex-col justify-between overflow-hidden border transition-[transform,box-shadow,border-color,background-color] duration-700 ease-[0.16,1,0.3,1]",
        "border-border bg-surface-card shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: VISUAL ENGINE (LCP & CLS PROTECTED) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={imagePath}
          alt={`บริการรับทำเว็บไซต์ ${displayTitle}`}
          fill
          priority={index < 4}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-60 transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-30"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="from-surface-main via-surface-main/80 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
        <div
          className="bg-infrastructure-grid absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
      </div>

      <div className="relative z-30 flex flex-1 flex-col justify-between p-8 md:p-10">
        <header className="flex items-start justify-between">
          <div className="border-border bg-surface-offset/80 text-brand-primary group-hover:bg-brand-primary group-hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:rotate-[15deg] group-hover:text-white">
            <IconRenderer name="MapPin" size={20} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
              {safeSlug.slice(0, 3).toUpperCase()}_NODE
            </span>

            {socialProof && (
              <div className="border-brand-primary/20 bg-brand-primary/5 group-hover:border-brand-primary/40 group-hover:bg-brand-primary/10 flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-md transition-colors">
                <div className="text-brand-primary flex">
                  {[...Array(5)].map((_, i) => (
                    <IconRenderer
                      key={`star-${i}`}
                      name="Star"
                      size={8}
                      className={cn(
                        i < Math.floor(socialProof.rating) ? "fill-current" : "opacity-20",
                      )}
                    />
                  ))}
                </div>
                <span className="text-brand-primary font-mono text-[8px] font-black">
                  {socialProof.rating}
                </span>
              </div>
            )}
          </div>
        </header>

        <section className="mt-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-text-primary group-hover:text-brand-primary text-4xl font-black tracking-tighter uppercase italic transition-colors md:text-5xl">
              {displayTitle}
            </h3>
            <div className="bg-brand-primary/20 group-hover:bg-brand-primary h-1 w-10 rounded-full transition-all duration-700 group-hover:w-full" />
          </div>

          <div className="space-y-4">
            {districts.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {districts.slice(0, 2).map((d) => (
                  <span
                    key={d}
                    className="border-border bg-surface-card/40 text-text-secondary group-hover:border-brand-primary/20 rounded-lg border px-3 py-1 text-[9px] font-bold tracking-wider uppercase backdrop-blur-sm transition-colors"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-6 border-t border-[var(--brand-primary)]/10 pt-4">
              <div className="space-y-1">
                <p className="font-mono text-[8px] font-bold uppercase opacity-40">Saturation</p>
                <p className="text-sm font-black italic">{data.marketSaturation || 45}%</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[8px] font-bold uppercase opacity-40">Latency</p>
                <p className="text-sm font-black text-emerald-500 italic">
                  {data.regionalLatency || 25}
                  <span className="ml-0.5 text-[8px]">ms</span>
                </p>
              </div>
            </div>
          </div>

          <footer className="border-border flex items-center justify-between border-t pt-6">
            <div className="flex flex-col">
              {displayPrice && (
                <span className="text-brand-primary text-xs font-black italic">
                  ฿{displayPrice} <span className="text-[8px] uppercase opacity-40">Start</span>
                </span>
              )}
              <span className="text-text-muted group-hover:text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                Analyze_Node
              </span>
            </div>
            <div className="bg-surface-offset/50 group-hover:bg-brand-primary flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:text-white">
              <IconRenderer name="ArrowRight" size={18} />
            </div>
          </footer>
        </section>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--brand-primary)_0%,transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />
    </Link>
  );
};

export default memo(AreaCard);
