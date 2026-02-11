/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v17.7.0 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Metadata Slot Reservation | Dynamic Blur-up | Value Proposition
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const displayFeatures = useMemo(() => {
    return data.benefits?.slice(0, 3) || data.coreFeatures?.slice(0, 3).map((f) => f.title) || [];
  }, [data.benefits, data.coreFeatures]);

  const imgData = IMAGE_BLUR_DATA[data.image || ""];

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        className,
      )}
    >
      {(isPopular || data.isPopular) && (
        <div className="bg-brand-primary shadow-glow absolute top-6 right-6 z-30 rounded-full px-5 py-1.5">
          <span className="text-surface-main text-[9px] font-black tracking-widest uppercase">
            Popular_Choice
          </span>
        </div>
      )}

      {/* --- VISUAL INFRASTRUCTURE (CLS PROTECTED) --- */}
      <div
        className="bg-surface-offset border-border relative w-full overflow-hidden border-b"
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
      >
        {data.image ? (
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority={index < 2}
            placeholder="blur"
            blurDataURL={imgData?.blurDataURL}
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center opacity-20">
            <IconRenderer name="Cpu" size={60} />
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-9 md:p-11">
        <header className="mb-8 space-y-4">
          <span className="text-text-muted font-mono text-[9px] font-black uppercase opacity-50">
            Module_SRV.{(index + 1).toString().padStart(2, "0")}
          </span>
          <h3 className="text-text-primary group-hover:text-brand-primary text-3xl font-black italic transition-colors">
            {data.title.split("|")[0].trim()}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-base font-medium italic opacity-70">
            “{data.description}”
          </p>
        </header>

        <ul className="mb-10 space-y-4">
          {displayFeatures.map((f, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="bg-brand-primary/10 text-brand-primary flex h-6 w-6 items-center justify-center rounded-lg">
                <IconRenderer name="Check" size={12} strokeWidth={4} />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary text-sm font-bold transition-colors">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-border mt-auto flex items-end justify-between border-t pt-10">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[8px] font-black uppercase opacity-40">
              Investment_Node
            </span>
            <div className="text-text-primary flex items-baseline font-black">
              <span className="mr-1 text-sm opacity-50">฿</span>
              <span className="text-4xl tabular-nums">
                {(data.priceValue || 0).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl p-4 transition-all">
            <IconRenderer
              name="ArrowRight"
              size={22}
              className="transition-transform group-hover:-rotate-45"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ServiceCard);
