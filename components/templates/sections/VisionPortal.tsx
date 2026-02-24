/**
 * [SECTION COMPONENT]: VISION_PORTAL v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Reveal | Semantic Hierarchy | Zero-Framer
 */

"use client";
import React from "react";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";

interface VisionPortalProps {
  title: string;
  subtitle: string;
  banner?: string;
}

export const VisionPortal = ({ title, subtitle, banner }: VisionPortalProps) => {
  const imgData = banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {banner && (
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.03] grayscale transition-opacity duration-1000 hover:opacity-10">
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
        <div className="max-w-5xl space-y-10">
          <div
            className={cn(
              "inline-flex items-center gap-4 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-5 py-2",
              "animate-in fade-in slide-in-from-top-2 fill-mode-both duration-700",
            )}
          >
            <div className="shadow-glow h-2 w-2 animate-pulse rounded-full bg-[var(--brand-primary)]" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
              Corporate_Strategic_Node.v2026
            </span>
          </div>

          <h1
            className={cn(
              "font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl",
              "animate-in fade-in slide-in-from-left-4 fill-mode-both delay-150 duration-700",
            )}
          >
            {title.split("|")[0]} <br />
            <span className="text-[var(--brand-primary)]">Specialist.</span>
          </h1>

          <p
            className={cn(
              "max-w-3xl border-l-4 border-[var(--brand-primary)] pl-8 text-xl leading-relaxed font-medium text-[var(--text-primary)]/80 italic md:pl-12 md:text-3xl",
              "animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-300 duration-700",
            )}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-10">
        <p className="text-[20vw] font-black italic select-none">TRUST</p>
      </div>
    </section>
  );
};
