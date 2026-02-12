/**
 * [FEATURE COMPONENT]: BLOG_CARD v17.9.9 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Adaptive Aesthetics | Metadata Aspect-Ratio | LCP Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
// [FIX]: ตรวจสอบ Import Path ให้ถูกต้อง
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  // [PERFORMANCE]: รับ prop priority เพื่อดัน LCP
  readonly priority?: boolean;
  readonly className?: string;
}

const BlogCard = ({ post, index = 0, priority = false, className }: BlogCardProps) => {
  const imageSource = post.thumbnail || "/images/blog/default-thumb.webp";
  // Safety Access
  const imgData = IMAGE_BLUR_DATA?.[imageSource] || null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-sm hover:-translate-y-3",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- IMAGE ENGINE (CLS PROTECTED) --- */}
      <div
        className="bg-surface-offset border-border relative w-full overflow-hidden border-b"
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
      >
        <Image
          src={imageSource}
          alt={post.title}
          fill
          /* [LCP OPTIMIZATION]: ใช้ Priority ตาม Prop หรือ Index */
          priority={priority || index < 3}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 z-20 md:top-6 md:left-6">
          <div className="bg-surface-main/90 text-brand-primary border-brand-primary/20 rounded-full border px-4 py-1.5 font-mono text-[8px] font-black tracking-[0.2em] uppercase shadow-lg backdrop-blur-xl md:px-5 md:text-[9px]">
            {post.category || "Insight"}
          </div>
        </div>
      </div>

      {/* --- CONTENT HUB --- */}
      <div className="flex flex-grow flex-col p-8 md:p-10 lg:p-11">
        <div className="text-text-muted mb-6 flex items-center gap-4 font-mono text-[8px] font-black tracking-[0.4em] uppercase md:mb-8 md:gap-6 md:text-[9px]">
          <span>{post.date}</span>
          <span className="opacity-60">{post.readingTime || "5 MIN"} READ</span>
        </div>

        <div className="flex-grow space-y-4 md:space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-xl font-black tracking-tighter uppercase italic transition-colors md:text-2xl">
            {post.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-sm font-medium italic opacity-75 md:text-base">
            “{post.description}”
          </p>
        </div>

        <div className="border-border mt-10 flex items-center justify-between border-t pt-6 md:mt-12 md:pt-8">
          <span className="text-text-muted group-hover:text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase transition-all md:text-[10px]">
            Analyze_Insight
          </span>
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl border p-3 transition-all md:p-4">
            <IconRenderer name="ArrowRight" size={18} className="md:h-5 md:w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
