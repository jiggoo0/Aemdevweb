/**
 * [FEATURE COMPONENT]: BLOG_CARD v17.7.0 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Adaptive Aesthetics | Metadata Aspect-Ratio | LCP Optimized
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  readonly className?: string;
}

const BlogCard = ({ post, index, className }: BlogCardProps) => {
  const imageSource = post.thumbnail || "/images/blog/default-thumb.webp";
  const imgData = IMAGE_BLUR_DATA[imageSource];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-sm hover:-translate-y-3",
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
          priority={index !== undefined && index < 3}
          placeholder="blur"
          blurDataURL={imgData?.blurDataURL}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-surface-main/90 text-brand-primary border-brand-primary/20 rounded-full border px-5 py-1.5 font-mono text-[9px] font-black tracking-[0.2em] uppercase shadow-lg backdrop-blur-xl">
            {post.category || "Insight"}
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-9 lg:p-11">
        <div className="text-text-muted mb-8 flex items-center gap-6 font-mono text-[9px] font-black tracking-[0.4em] uppercase">
          <span>{post.date}</span>
          <span className="opacity-60">{post.readingTime || "5 MIN"} READ</span>
        </div>

        <div className="flex-grow space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl font-black tracking-tighter uppercase italic transition-colors">
            {post.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-base font-medium italic opacity-75">
            “{post.description}”
          </p>
        </div>

        <div className="border-border mt-12 flex items-center justify-between border-t pt-8">
          <span className="text-text-muted group-hover:text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase transition-all">
            Analyze_Insight
          </span>
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl border p-4 transition-all">
            <IconRenderer name="ArrowRight" size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
