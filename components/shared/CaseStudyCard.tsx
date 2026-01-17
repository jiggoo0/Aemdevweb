/** @format */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  title: string;
  slug: string;
  category: string;
  image: string;
  stats: { label: string; value: string };
  themeColor?: string;
}

/**
 * 🏆 CaseStudyCard: Luminous Showcase Edition
 * ปรับปรุง: ใช้ Aurora Glow และ Layered Glass เพื่อสร้าง Impact สูงสุดให้กับผลงาน
 */
export function CaseStudyCard({
  title,
  slug,
  category,
  image,
  stats,
  themeColor = "aurora-cyan", // ✅ Default theme color
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group bg-background shadow-luminous relative block overflow-hidden rounded-4xl border border-white/5 transition-all duration-700 hover:-translate-y-2",
        // ✅ ใช้ themeColor เพื่อกำหนดสีขอบตอน Hover
        themeColor === "aurora-cyan" && "hover:border-aurora-cyan/30",
        themeColor === "aurora-violet" && "hover:border-aurora-violet/30",
        themeColor === "aurora-emerald" && "hover:border-aurora-emerald/30"
      )}
    >
      {/* 🖼️ Premium Image Layer */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
          priority
        />
        {/* Luminous Overlay Shade */}
        <div className="from-background via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-80" />
      </div>

      {/* ✨ Luminous Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[70%] space-y-4">
            <span
              className={cn(
                "shadow-aurora-glow inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-[10px] font-black tracking-[0.25em] uppercase backdrop-blur-xl transition-colors",
                // ✅ แก้ไข: นำ themeColor มาใช้จริงเพื่อกำหนดสีข้อความ
                themeColor === "aurora-cyan" && "text-aurora-cyan group-hover:text-white",
                themeColor === "aurora-violet" && "text-aurora-violet group-hover:text-white",
                themeColor === "aurora-emerald" && "text-aurora-emerald group-hover:text-white"
              )}
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              {category}
            </span>
            <h3
              className={cn(
                "font-prompt text-3xl leading-none font-black tracking-tighter text-white uppercase transition-colors md:text-4xl",
                // ✅ แก้ไข: นำ themeColor มาใช้ตอน hover title
                themeColor === "aurora-cyan" && "group-hover:text-aurora-cyan",
                themeColor === "aurora-violet" && "group-hover:text-aurora-violet",
                themeColor === "aurora-emerald" && "group-hover:text-aurora-emerald"
              )}
            >
              {title}
            </h3>
          </div>

          {/* ⚡ Luminous Performance Badge */}
          <div className="shadow-luminous group-hover:shadow-aurora-glow min-w-[120px] rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-white/10">
            <p className="font-anuphan mb-2 flex items-center justify-center gap-1.5 text-[10px] font-black tracking-widest text-slate-400 uppercase">
              <Zap className="text-aurora-emerald fill-aurora-emerald h-3 w-3 animate-pulse" /> {stats.label}
            </p>
            <p className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {stats.value}
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 Floating Action Button */}
      <div
        className={cn(
          "shadow-aurora-glow absolute top-8 right-8 flex h-12 w-12 translate-y-6 scale-75 items-center justify-center rounded-2xl text-slate-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
          // ✅ แก้ไข: ปุ่ม CTA เปลี่ยนสีตาม Theme
          themeColor === "aurora-cyan" && "bg-aurora-cyan",
          themeColor === "aurora-violet" && "bg-aurora-violet",
          themeColor === "aurora-emerald" && "bg-aurora-emerald"
        )}
      >
        <ArrowUpRight className="h-6 w-6 stroke-[3px]" />
      </div>

      {/* Subtle Bottom Glow Line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100",
          // ✅ แก้ไข: เส้นเรืองแสงด้านล่างตาม Theme
          themeColor === "aurora-cyan" && "via-aurora-cyan/40",
          themeColor === "aurora-violet" && "via-aurora-violet/40",
          themeColor === "aurora-emerald" && "via-aurora-emerald/40"
        )}
      />
    </Link>
  );
}
