/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v18.2.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure Server Component | Zero-JS Payload | CLS Stability
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { TemplateMasterData } from "@/types";

interface ServiceCardProps {
  readonly data: TemplateMasterData;
  readonly className?: string;
  readonly isPopular?: boolean;
  readonly index?: number;
}

const ServiceCard = ({ data, className, isPopular, index = 0 }: ServiceCardProps) => {
  // [SERVER_ONLY]: Pure logic for RSC execution
  const sourceFeatures = data.benefits?.length
    ? data.benefits
    : data.coreFeatures?.map((f) => f.title);
  const displayFeatures = sourceFeatures?.slice(0, 3) || [
    "High-End Architecture",
    "Technical SEO Strategy",
    "ROI-Focused Design",
  ];

  const imageSource = data.image || "/images/services/default.webp";
  const imgData = IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null;

  const priceValue = data.priceValue || 0;
  const priceDisplay =
    priceValue === 0 ? "Premium_Quote" : new Intl.NumberFormat("th-TH").format(priceValue);

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group rounded-section relative flex h-full w-full flex-col justify-between overflow-hidden border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "shadow-pro-sm border-[var(--border)] bg-[var(--surface-card)]",
        "hover:shadow-glow-lg hover:-translate-y-2 hover:border-[var(--color-brand-primary)]/40",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 1: AUTHORITY BADGE --- */}
      {(isPopular || data.isPopular) && (
        <div className="absolute top-6 right-6 z-30">
          <div className="shadow-glow-sm flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-brand-primary)] px-4 py-2 text-white backdrop-blur-xl">
            <IconRenderer name="Star" size={10} className="fill-current" />
            <span className="text-[8px] font-black tracking-widest uppercase md:text-[9px]">
              Specialist_Choice
            </span>
          </div>
        </div>
      )}

      {/* --- LAYER 2: VISUAL CORE (Zero-CLS Guard) --- */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-offset)] select-none">
        <Image
          src={imageSource}
          alt={`Solution: ${data.title}`}
          fill
          priority={index < 3}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-8 md:p-10">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <div className="shadow-glow h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-brand-primary)]" />
            <span className="font-mono text-[8px] font-black tracking-[0.3em] text-[var(--text-muted)] uppercase opacity-60">
              Service_Node.v18.{(index + 1).toString().padStart(2, "0")}
            </span>
          </div>

          <h3 className="line-clamp-1 text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors duration-300 group-hover:text-[var(--color-brand-primary)] md:text-3xl">
            {data.title.split("|")[0].trim()}
          </h3>

          <p className="line-clamp-2 min-h-[3rem] text-sm leading-relaxed font-medium text-[var(--text-secondary)] italic opacity-90">
            “{data.description}”
          </p>
        </header>

        <ul className="mb-10 space-y-3.5">
          {displayFeatures.map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:border-[var(--color-brand-primary)]/20">
                <IconRenderer name="Check" size={12} strokeWidth={4} />
              </div>
              <span className="text-xs leading-relaxed font-bold text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)] md:text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between border-t border-[var(--border)] pt-8">
          <div className="space-y-1">
            <span className="font-mono text-[8px] font-black tracking-widest text-[var(--text-muted)] uppercase opacity-50">
              {priceValue ? "Starting_Investment" : "Inquiry_Status"}
            </span>
            <div className="flex items-baseline font-black text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-brand-primary)]">
              {priceValue > 0 && <span className="mr-1 font-sans text-xs opacity-50">฿</span>}
              <span
                className={cn(
                  "tracking-tight uppercase italic tabular-nums",
                  priceValue ? "text-3xl md:text-4xl" : "text-xl md:text-2xl",
                )}
              >
                {priceDisplay}
              </span>
            </div>
          </div>

          <div className="group-hover:shadow-glow rounded-2xl border border-[var(--border)] bg-[var(--surface-offset)] p-4 text-[var(--text-primary)] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
            <IconRenderer name="ArrowRight" size={20} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  );
};

export default memo(ServiceCard);
