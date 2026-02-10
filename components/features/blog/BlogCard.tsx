/**
 * [FEATURE COMPONENT]: BLOG_CARD v17.5.0 (STABILIZED_SYNC)
 * [STRATEGY]: Adaptive Aesthetics | Neural Physics | LCP Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  readonly className?: string;
}

/**
 * @component BlogCard
 * @description โหนดแสดงบทความที่ออกแบบมาเพื่อดึงดูดสายตาด้วยสถาปัตยกรรมข้อมูลเชิงลึก
 */
const BlogCard = ({ post, index, className }: BlogCardProps) => {
  const imageSource = post.thumbnail || "/images/blog/default-thumb.webp";

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
      {/* --- 01. IMAGE ENGINE: หน่วยประมวลผลทัศนียภาพ --- */}
      <div className="bg-surface-offset border-border relative aspect-[16/10] w-full overflow-hidden border-b">
        {/* Subtle Tech Grid Texture Layer */}
        <div
          className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
          aria-hidden="true"
        />

        <Image
          src={imageSource}
          alt={`Insight_Node: ${post.title}`}
          fill
          /* [LCP OPTIMIZATION]: เร่งการโหลดสำหรับบทความส่วนต้นหน้าเพื่อคะแนน Performance สูงสุด */
          priority={index !== undefined && index < 3}
          quality={85}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Floating Category Node: ป้ายระบุหมวดหมู่สไตล์ Glassmorphism */}
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-surface-main/90 text-brand-primary border-brand-primary/20 rounded-full border px-5 py-1.5 font-mono text-[9px] font-black tracking-[0.2em] uppercase shadow-lg backdrop-blur-xl">
            {post.category || "General_Insight"}
          </div>
        </div>
      </div>

      {/* --- 02. NARRATIVE HUB: ส่วนวิศวกรรมข้อมูล --- */}
      <div className="flex flex-grow flex-col p-9 lg:p-11">
        {/* Meta Metadata: ข้อมูลเบื้องหลังบทความ */}
        <div className="text-text-muted mb-8 flex items-center gap-6 font-mono text-[9px] font-black tracking-[0.4em] uppercase">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 rounded-full" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2.5 opacity-60">
            <IconRenderer name="Clock" size={12} strokeWidth={2.5} />
            <span>{post.readingTime || "5 MIN"} READ</span>
          </div>
        </div>

        {/* Textual Architecture: หัวข้อและคำอธิบายที่ทรงพลัง */}
        <div className="flex-grow space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl leading-[1.1] font-black tracking-tighter uppercase italic transition-colors duration-500 lg:text-3xl">
            {post.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-base leading-relaxed font-medium italic opacity-75 transition-opacity group-hover:opacity-100">
            “{post.description}”
          </p>
        </div>

        {/* --- 03. ACTION INTERFACE: โหนดการเข้าถึงความรู้ --- */}
        <div className="border-border mt-12 flex items-center justify-between border-t pt-8">
          <div className="text-text-muted group-hover:text-brand-primary flex items-center gap-4 font-mono text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500">
            <div className="bg-border group-hover:bg-brand-primary h-[1px] w-10 transition-all group-hover:w-16" />
            Analyze_Insight
          </div>

          {/* Interaction Trigger: ปุ่มกดที่ตอบสนองแบบ Neural Physics */}
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:shadow-glow group-hover:text-surface-main relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-700">
            <IconRenderer
              name="ArrowRight"
              size={20}
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
