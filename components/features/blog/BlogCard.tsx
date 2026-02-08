/**
 * [FEATURE COMPONENT]: BLOG_CARD v16.9.18 (STABILIZED)
 * [STRATEGY]: Adaptive Aesthetics | Neural Physics | Metadata Precision
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  readonly data: {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
    category?: string;
    readingTime?: string;
  };
  readonly index?: number;
}

const BlogCard = ({ data, index }: BlogCardProps) => {
  const imageSource = data.image || "/images/blog/default-thumb.webp";

  return (
    <Link
      href={`/blog/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-main border-surface-muted/50 shadow-sm",
        "hover:border-brand-primary/40 hover:shadow-pro-2xl hover:-translate-y-3",
      )}
    >
      {/* 01. THUMBNAIL ENGINE: ส่วนแสดงภาพลักษณ์และอัตลักษณ์บทความ */}
      <div className="bg-surface-offset border-surface-muted/20 relative aspect-video w-full overflow-hidden border-b">
        {/* เลเยอร์ตารางกริดเบื้องหลัง เพื่อมิติเชิงวิศวกรรมดีไซน์ */}
        <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-10 opacity-[0.1]" />

        <Image
          src={imageSource}
          alt={`Blog_Visual: ${data.title}`}
          fill
          priority={index !== undefined && index < 3}
          quality={90}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 group-hover:rotate-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge: หมวดหมู่ที่ถูกจัดกลุ่มอย่างเป็นระบบ */}
        <div className="absolute top-5 left-5 z-20">
          <div className="bg-text-primary/90 rounded-full border border-white/10 px-5 py-2 font-mono text-[9px] font-black tracking-[0.2em] text-white uppercase shadow-lg backdrop-blur-xl">
            {data.category || "General_Node"}
          </div>
        </div>
      </div>

      {/* 02. NARRATIVE NODE: ส่วนข้อมูลและเนื้อหาย่อย */}
      <div className="flex flex-grow flex-col p-9 lg:p-11">
        {/* Metadata Orchestration: วันที่และเวลาที่ใช้ในการประมวลผล */}
        <div className="text-text-muted mb-8 flex items-center gap-8 font-mono text-[9px] font-black tracking-[0.4em] uppercase">
          <div className="text-brand-primary flex items-center gap-3">
            <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            <span>{data.date}</span>
          </div>
          <div className="flex items-center gap-2.5 opacity-60">
            <IconRenderer name="Clock" size={12} strokeWidth={2.5} />
            <span>{data.readingTime || "5 MIN_READ"}</span>
          </div>
        </div>

        {/* Title & Excerpt Hub */}
        <div className="flex-grow space-y-5">
          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl leading-[1.2] font-black tracking-tighter italic transition-colors duration-500 lg:text-3xl">
            {data.title}
          </h3>
          <p className="text-text-secondary line-clamp-3 text-base leading-relaxed font-medium italic opacity-70 transition-opacity group-hover:opacity-100">
            “{data.excerpt || "กำลังประมวลผลบทสรุปเนื้อหาเพื่อยกระดับธุรกิจของคุณ..."}”
          </p>
        </div>

        {/* 03. INTERFACE ACTION: จุดเชื่อมต่อสู่ความรู้ฉบับเต็ม */}
        <div className="border-surface-muted/20 mt-12 flex items-center justify-between border-t pt-8">
          <div className="text-text-muted group-hover:text-brand-primary flex items-center gap-4 font-mono text-[10px] font-black tracking-[0.5em] uppercase transition-all">
            <div className="bg-surface-muted group-hover:bg-brand-primary h-px w-10 transition-all group-hover:w-16" />
            Read_Archive
          </div>

          <div className="bg-surface-offset border-surface-muted group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:shadow-glow relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-700 group-hover:text-white">
            <IconRenderer
              name="ArrowRight"
              size={22}
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>

      {/* ARCHIVE IDENTITY: รหัสอ้างอิงบทความเชิงวิศวกรรม */}
      <div className="pointer-events-none absolute top-5 right-5 z-20">
        <span className="text-brand-primary bg-surface-main/90 border-brand-primary/20 translate-y-3 rounded-xl border px-4 py-2 font-mono text-[9px] font-black opacity-0 shadow-sm backdrop-blur-md transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          NODE_{(index !== undefined ? index + 1 : 0).toString().padStart(3, "0")}
        </span>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
