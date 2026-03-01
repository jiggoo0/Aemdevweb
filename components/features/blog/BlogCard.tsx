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
      className="group rounded-section shadow-pro-sm hover:shadow-glow-lg relative flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] transition-all duration-500 hover:border-[var(--color-brand-primary)]/40"
    >
      {/* 01. VISUAL CORE (Zero-CLS) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-offset)]">
        <Image
          src={imageSource}
          alt={post.title}
          fill
          priority={priority || index === 0}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent opacity-60" />
      </div>

      {/* 02. CONTENT HUB */}
      <div className="flex flex-1 flex-col p-8">
        <header className="mb-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
              {post.category || "Technical_Insight"}
            </span>
            <div className="h-3 w-px bg-[var(--border)]" />
            <time
              dateTime={post.date}
              className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase"
            >
              {new Date(post.date).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>

          <h3 className="line-clamp-2 text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors duration-300 group-hover:text-[var(--color-brand-primary)] md:text-3xl">
            {post.title}
          </h3>
        </header>

        <p className="line-clamp-2 text-sm leading-relaxed font-medium text-[var(--text-secondary)] italic opacity-90">
          “{post.excerpt}”
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-8">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
            <span className="text-[10px] font-black tracking-[0.2em] text-[var(--text-primary)] uppercase">
              Read_Protocol
            </span>
          </div>
          <IconRenderer
            name="ArrowRight"
            size={18}
            className="text-[var(--text-muted)] transition-colors group-hover:translate-x-1 group-hover:text-[var(--color-brand-primary)]"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
