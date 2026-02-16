/**
 * [FEATURE COMPONENT]: BLOG_CARD_NODE v18.0.0 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Adaptive Aesthetics | Metadata Aspect-Ratio | LCP Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure ---
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
  // [LOGIC]: Image Path Normalization & Fallback
  const imageSource = useMemo(() => {
    const src = post.thumbnail || "/images/blog/default-thumb.webp"; // [FIXED]: Extension typo
    return src.trim().toLowerCase();
  }, [post.thumbnail]);

  // [ENGINE]: CLS Protection Data (Strict Type Assertion)
  const imgData = useMemo(
    () => IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null,
    [imageSource],
  );

  return (
    <Link
      href={`/blog/${post.slug.toLowerCase()}`}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm border md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-sm hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: IMAGE ENGINE (CLS PROTECTED) --- */}
      <div
        className="bg-surface-offset border-border relative w-full overflow-hidden border-b select-none"
        /* [CLS GUARD]: ป้องกันการขยับของ Grid (Layout Shift) 100% */
        style={{
          aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10",
          backgroundColor: "#111111",
        }}
      >
        <Image
          src={imageSource}
          alt={post.title}
          fill
          /* [LCP OPTIMIZATION]: เร่งความเร็วการแสดงผล 3 ใบแรก */
          priority={priority || index < 3}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Texture Overlay */}
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay transition-opacity group-hover:opacity-0" />

        {/* Gradient Overlay */}
        <div className="from-surface-card/80 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 z-20 md:top-6 md:left-6">
          <div className="bg-surface-main/90 text-brand-primary border-brand-primary/20 shadow-glow-sm rounded-full border px-4 py-1.5 font-mono text-[8px] font-black tracking-[0.2em] uppercase backdrop-blur-xl md:px-5 md:text-[9px]">
            {post.category || "Insight"}
          </div>
        </div>
      </div>

      {/* --- LAYER 02: CONTENT HUB --- */}
      <div className="flex flex-grow flex-col p-8 md:p-10">
        {/* Metadata */}
        <div className="text-text-muted mb-6 flex items-center gap-4 font-mono text-[8px] font-black tracking-[0.4em] uppercase md:mb-8 md:gap-6 md:text-[9px]">
          <span suppressHydrationWarning>
            {post.date
              ? new Date(post.date).toLocaleDateString("th-TH", {
                  year: "2-digit",
                  month: "short",
                  day: "numeric",
                })
              : "RECENT_NODE"}
          </span>
          <span className="bg-border h-px w-8" />
          <span className="opacity-60">{post.readingTime || "5 MIN"} READ</span>
        </div>

        {/* Title & Description */}
        <div className="flex-grow space-y-4 md:space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-xl font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-2xl">
            {post.title}
          </h3>
          <p className="text-text-secondary line-clamp-3 text-sm font-medium italic opacity-75 md:text-base">
            “{post.description}”
          </p>
        </div>

        {/* Footer Action */}
        <div className="border-border mt-10 flex items-center justify-between border-t pt-6 md:mt-12 md:pt-8">
          <span className="text-text-muted group-hover:text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase transition-colors md:text-[9px]">
            Analyze_Insight.Read
          </span>
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow rounded-2xl border p-3 transition-all duration-500 group-hover:-rotate-45 md:p-3.5">
            <IconRenderer name="ArrowRight" size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
