/**
 * [SECTION COMPONENT]: ATMOSPHERE_HEADER v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Reveal | Hardware Accelerated Blur | Zero-Framer
 */

"use client";
import React from "react";
import Image from "next/image";
import IconRenderer from "@/components/ui/IconRenderer";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";

export const AtmosphereHeader = ({
  title,
  description,
  banner,
}: {
  title: string;
  description: string;
  banner?: string;
}) => {
  const imgData = banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null;

  return (
    <header className="relative overflow-hidden border-[var(--foreground)]/5 border-b-[var(--border-width)] pt-32 pb-16 md:pt-48 md:pb-24">
      {banner && (
        <div className="absolute inset-0 -z-10 scale-110 overflow-hidden opacity-10 blur-xl">
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
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-4xl space-y-8">
            <div
              className={cn(
                "inline-flex items-center gap-4 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-4 py-1.5",
                "animate-in fade-in slide-in-from-top-2 fill-mode-both duration-700",
              )}
            >
              <IconRenderer name="CloudSun" size={16} className="text-[var(--brand-primary)]" />
              <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                Environment: Optimal | 24°C | AQI: 12
              </span>
            </div>
            <h1
              className={cn(
                "font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl",
                "animate-in fade-in slide-in-from-left-4 fill-mode-both delay-150 duration-700",
              )}
            >
              {title.split("|")[0]} <br />
              <span className="text-[var(--brand-primary)]">Experience.</span>
            </h1>
            <p
              className={cn(
                "max-w-2xl border-l-2 border-[var(--brand-primary)] pl-6 text-xl font-medium text-[var(--text-primary)]/70 italic",
                "animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-300 duration-700",
              )}
            >
              {description}
            </p>
          </div>

          {/* Elevation / Location Node */}
          <div
            className={cn(
              "hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 lg:block",
              "animate-in fade-in zoom-in-95 fill-mode-both delay-500 duration-1000",
            )}
          >
            <div className="space-y-4 font-mono text-xs tracking-widest uppercase">
              <div className="flex justify-between gap-12">
                <span className="opacity-40">Elevation</span>
                <span className="font-black text-[var(--brand-primary)]">350m AMSL</span>
              </div>
              <div className="flex justify-between gap-12">
                <span className="opacity-40">Node_Status</span>
                <span className="font-black text-green-500">Live_Registry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
