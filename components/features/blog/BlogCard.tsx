/**
 * [FEATURE COMPONENT]: BLOG_CARD_NODE v18.1.2 (FALLBACK_FIXED)
 * [STRATEGY]: Pure Server Component | Zero-JS Payload | SEO Continuity
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import IconRenderer from "@/components/ui/IconRenderer";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  readonly priority?: boolean;
}

const BlogCard = ({ post, index = 0, priority = false }: BlogCardProps) => {
  // [SERVER_ONLY]: Pure logic for RSC execution
  const imageSource = post.image || "/images/blog/default-thumb.webp";
  const imgData = IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-section bg-surface-card border-border shadow-pro-sm hover:border-brand-primary/40 hover:shadow-glow-lg relative flex h-full flex-col overflow-hidden border transition-all duration-500"
    >
      {/* 01. VISUAL CORE (Zero-CLS) */}
      <div className="bg-surface-offset relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={imageSource}
          alt={post.title}
          fill
          priority={priority || index === 0}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="from-surface-card absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-60" />
      </div>

      {/* 02. CONTENT HUB */}
      <div className="flex flex-1 flex-col p-8">
        <header className="mb-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
              {post.category || "Technical_Insight"}
            </span>
            <div className="bg-border h-3 w-px" />
            <time className="text-text-muted text-[10px] font-bold tracking-widest uppercase">
              {post.date}
            </time>
          </div>

          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-3xl">
            {post.title}
          </h3>
        </header>

        <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed font-medium italic opacity-80">
          “{post.excerpt}”
        </p>

        <div className="border-border mt-auto flex items-center justify-between border-t pt-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary h-2 w-2 rounded-full" />
            <span className="text-text-primary text-[10px] font-black tracking-[0.2em] uppercase">
              Read_Protocol
            </span>
          </div>
          <IconRenderer
            name="ArrowRight"
            size={18}
            className="text-text-muted group-hover:text-brand-primary transition-colors group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
