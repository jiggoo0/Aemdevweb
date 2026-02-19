/**
 * [FEATURE COMPONENT]: BLOG_CARD_NODE v18.2.0 (PRODUCTION_HARDENED)
 * [STRATEGY]: Symmetry Protocol | GPU-Accelerated Stacking | Zero-CLS Hardened
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [CHANGELOG]:
 * - Implemented flex-1 orchestration to enforce footer baseline alignment.
 * - Standardized aspect-ratio (16:10) for visual consistency in grid nodes.
 * - Hardware-accelerated hover transitions for 60fps interaction.
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  readonly priority?: boolean;
  readonly className?: string;
}

const BlogCard = ({ post, index = 0, priority = false, className }: BlogCardProps) => {
  // [PATH_RESOLVER]: บังคับ Lowercase และ Clean Path สำหรับ Production Environment
  const imageSource = useMemo(() => {
    const src = post.thumbnail || post.coverImage || "/images/blog/default-thumb.webp";
    return src.trim().toLowerCase();
  }, [post.thumbnail, post.coverImage]);

  // [ENGINE]: CLS Protection (Strict Type Access)
  const imgData = useMemo(
    () => IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null,
    [imageSource],
  );

  return (
    <Link
      href={`/blog/${post.slug.toLowerCase()}`}
      aria-label={`อ่านบทความ: ${post.title}`}
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-sm hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: IMAGE ENGINE (Zero-CLS Guard) --- */}
      <div className="border-border relative aspect-[16/10] w-full overflow-hidden border-b bg-[#020617] select-none">
        <Image
          src={imageSource}
          alt={post.title}
          fill
          priority={priority || index < 3}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Dynamic Overlays */}
        <div className="from-surface-card/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay group-hover:opacity-0" />

        {/* Category Badge - Adaptive Floating */}
        <div className="absolute top-5 left-5 z-20 md:top-6 md:left-6">
          <div className="bg-surface-main/90 text-brand-primary border-brand-primary/20 shadow-glow-sm rounded-full border px-4 py-1.5 font-mono text-[9px] font-black tracking-[0.2em] uppercase backdrop-blur-xl md:px-5">
            {post.category || "Insight"}
          </div>
        </div>
      </div>

      {/* --- LAYER 02: CONTENT HUB (Flex-Orchestrated) --- */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        {/* Metadata Stack */}
        <div className="text-text-muted mb-6 flex items-center gap-4 font-mono text-[9px] font-black tracking-[0.4em] uppercase md:mb-8 md:gap-6">
          <span suppressHydrationWarning>
            {post.date
              ? new Date(post.date).toLocaleDateString("th-TH", {
                  year: "2-digit",
                  month: "short",
                  day: "numeric",
                })
              : "RECENT_NODE"}
          </span>
          <span className="bg-border h-px w-8 opacity-40" />
          <span className="opacity-60">{post.readingTime || "5 MIN"} READ</span>
        </div>

        {/* Title & Narrative (Flex-1 for equal spacing) */}
        <div className="flex-1 space-y-4 md:space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl leading-[0.95] font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-3xl">
            {post.title}
          </h3>
          <p className="text-text-secondary line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed font-medium italic opacity-75 md:text-base">
            “{post.description}”
          </p>
        </div>

        {/* [ACTION_FOOTER]: Forced Baseline Alignment */}
        <footer className="border-border mt-10 flex items-center justify-between border-t pt-6 md:mt-12 md:pt-8">
          <span className="text-text-muted group-hover:text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase transition-all group-hover:translate-x-1 group-hover:opacity-100">
            Analyze_Insight.Read
          </span>
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow rounded-2xl border p-3.5 transition-all duration-500 group-hover:-rotate-45">
            <IconRenderer name="ArrowRight" size={18} />
          </div>
        </footer>
      </div>

      {/* Subtle Glow Engine */}
      <div className="from-brand-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  );
};

export default memo(BlogCard);
