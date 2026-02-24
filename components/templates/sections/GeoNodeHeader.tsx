/**
 * [SECTION COMPONENT]: GEO_NODE_HEADER v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure Server Component | Geographical Authority | Zero-Framer
 */

import React from "react";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";

interface GeoNodeHeaderProps {
  readonly province: string;
  readonly lat?: number;
  readonly lng?: number;
  readonly nodeId: string;
  readonly banner?: string;
}

export const GeoNodeHeader = ({ province, lat, lng, nodeId, banner }: GeoNodeHeaderProps) => {
  const imgData = banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null;

  return (
    <header className="relative overflow-hidden border-b border-[var(--foreground)]/10 pt-32 pb-20 md:pt-48 md:pb-32">
      {banner && (
        <div className="absolute inset-0 -z-10 scale-105 overflow-hidden opacity-5 grayscale">
          <Image
            src={banner}
            alt=""
            fill
            className="object-cover"
            placeholder={imgData?.blurDataURL ? "blur" : "empty"}
            blurDataURL={imgData?.blurDataURL}
          />
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="space-y-10">
          {/* Status Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-4 rounded-[var(--radius)] border border-[var(--brand-primary)] bg-[var(--brand-primary)]/5 px-4 py-2",
              "animate-in fade-in slide-in-from-top-2 duration-700",
            )}
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_10px_var(--brand-primary)]" />
            <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
              Node_Active: {nodeId}
            </span>
          </div>

          {/* Title & Coordinates */}
          <div className="space-y-6">
            <h1
              className={cn(
                "font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl",
                "animate-in fade-in slide-in-from-left-4 fill-mode-both delay-150 duration-700",
              )}
            >
              {province} <br />
              <span className="text-[var(--brand-primary)]">Authority.</span>
            </h1>

            <div
              className={cn(
                "flex flex-wrap gap-x-8 gap-y-2 pt-6 font-mono text-[11px] font-bold tracking-widest uppercase opacity-40",
                "animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-300 duration-700",
              )}
            >
              <p>LAT: {lat?.toFixed(4) || "N/A"}</p>
              <p>LNG: {lng?.toFixed(4) || "N/A"}</p>
              <p>REGION: TH_LOCAL_NODE</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
