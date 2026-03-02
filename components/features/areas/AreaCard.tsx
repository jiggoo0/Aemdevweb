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
      aria-label={`ดูรายละเอียดบริการวางระบบเว็บไซต์องค์กรในพื้นที่ ${displayTitle}`}
      className={cn(
        "group rounded-section relative flex h-full min-h-[520px] w-full flex-col justify-between overflow-hidden border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "shadow-pro-sm border-[var(--border)] bg-[var(--surface-card)]",
        "hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/40 hover:shadow-md hover:shadow-sm",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: VISUAL ENGINE (LCP & CLS PROTECTED) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={imagePath}
          alt={`บริการวางระบบเว็บไซต์องค์กร ${displayTitle} - โครงสร้างดิจิทัลประสิทธิภาพสูงโดย AEMDEVWEB`}
          fill
          priority={index < 4}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-60 transition-transform duration-[2s] ease-out group-hover:scale-105 group-hover:opacity-30"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--surface-main)] via-[var(--surface-main)]/80 to-transparent" />
        <div
          className="bg-infrastructure-grid absolute inset-0 z-20 opacity-[0.05]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
      </div>

      <div className="relative z-30 flex flex-1 flex-col justify-between p-8 md:p-10">
        <header className="flex items-start justify-between">
          <div className="group- flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-offset)]/80 text-[var(--color-brand-primary)] backdrop-blur-sm transition-all duration-500 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white group-hover:shadow-md">
            <IconRenderer name="MapPin" size={20} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-60">
              {safeSlug.slice(0, 3).toUpperCase()}_NODE
            </span>

            {socialProof && (
              <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-3 py-1 backdrop-blur-md transition-colors group-hover:border-[var(--color-brand-primary)]/40 group-hover:bg-[var(--color-brand-primary)]/10">
                <div className="flex text-[var(--color-brand-primary)]">
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
                <span className="font-mono text-[8px] font-black text-[var(--color-brand-primary)]">
                  {socialProof.rating}
                </span>
              </div>
            )}
          </div>
        </header>

        <section className="mt-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-5xl">
              {displayTitle}
            </h3>
            <div className="h-1 w-10 rounded-full bg-[var(--color-brand-primary)]/20 transition-all duration-700 group-hover:w-full group-hover:bg-[var(--color-brand-primary)]" />
          </div>

          <div className="space-y-4">
            {districts.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {districts.slice(0, 2).map((d) => (
                  <span
                    key={d}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-card)]/40 px-3 py-1 text-[9px] font-bold tracking-wider text-[var(--text-secondary)] uppercase backdrop-blur-sm transition-colors group-hover:border-[var(--color-brand-primary)]/20"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-6 border-t border-[var(--color-brand-primary)]/10 pt-4">
              <div className="space-y-1">
                <p className="font-mono text-[8px] font-bold text-[var(--text-muted)] uppercase opacity-60">
                  โอกาสเติบโต
                </p>
                <p className="text-sm font-black text-[var(--text-primary)] italic">
                  {data.marketโอกาสเติบโต || 45}%
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[8px] font-bold text-[var(--text-muted)] uppercase opacity-60">
                  ความเร็ว
                </p>
                <p className="text-sm font-black text-emerald-500 italic">
                  {data.regionalความเร็ว || 25}
                  <span className="ml-0.5 text-[8px]">ms</span>
                </p>
              </div>
            </div>
          </div>

          <footer className="flex items-center justify-between border-t border-[var(--border)] pt-6">
            <div className="flex flex-col">
              {displayPrice && (
                <span className="text-xs font-black text-[var(--color-brand-primary)] italic">
                  ฿{displayPrice} <span className="text-[8px] uppercase opacity-40">Start</span>
                </span>
              )}
              <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--text-muted)] uppercase opacity-60 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-brand-primary)] group-hover:opacity-100">
                ดูรายละเอียด
              </span>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-offset)] text-[var(--text-primary)] transition-all duration-300 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
              <IconRenderer name="ArrowRight" size={18} />
            </div>
          </footer>
        </section>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-brand-primary)_0%,transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />
    </Link>
  );
};

export default memo(AreaCard);
