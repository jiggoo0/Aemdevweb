/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { ServiceItem } from "@/types";
import IconRenderer from "@/components/shared/IconRenderer";

interface ServiceCardProps {
  data: ServiceItem;
  className?: string;
}

/**
 * ServiceCard - ส่วนแสดงแผนงานบริการหลัก (The Solution Node)
 * -------------------------------------------------------------------------
 * แนวคิด: การตอบสนองที่ฉับไวเพื่อสร้างประสบการณ์ที่น่าเชื่อถือในทุกสัมผัส
 */
export const ServiceCard = ({ data, className }: ServiceCardProps) => {
  if (!data) return null;

  // ระบบจัดการโทนสีเชิงกลยุทธ์ (Strategic Theme Mapping)
  const themeMap: Record<string, string> = {
    emerald:
      "text-emerald-500 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white",
    blue: "text-blue-500 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
    rose: "text-rose-500 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white",
    orange:
      "text-orange-500 bg-orange-50 border-orange-100 group-hover:bg-orange-500 group-hover:text-white",
    amber:
      "text-amber-500 bg-amber-50 border-amber-100 group-hover:bg-amber-500 group-hover:text-white",
    indigo:
      "text-indigo-500 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white",
    slate:
      "text-slate-500 bg-slate-50 border-slate-100 group-hover:bg-slate-900 group-hover:text-white",
    violet:
      "text-violet-500 bg-violet-50 border-violet-100 group-hover:bg-violet-600 group-hover:text-white",
  };

  // ตรวจสอบความถูกต้องของพิกัดสีเพื่อเสถียรภาพสูงสุดของระบบ
  const currentTheme =
    data.themeColor && themeMap[data.themeColor as keyof typeof themeMap]
      ? themeMap[data.themeColor as keyof typeof themeMap]
      : themeMap.emerald;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem]",
        "border border-slate-100 bg-white p-8 transition-all duration-500 lg:p-12",
        "hover:border-emerald-500/20 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.1)]",
        className,
      )}
    >
      {/* 1. ส่วนหัว: สัญลักษณ์และรหัสอ้างอิงระบบ */}
      <header className="mb-14 flex items-start justify-between">
        <div
          className={cn(
            "flex h-20 w-20 items-center justify-center rounded-[1.8rem] transition-all duration-700",
            "shadow-sm group-hover:scale-110 group-hover:rotate-12",
            currentTheme,
          )}
        >
          <IconRenderer name={data.iconName} size={36} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-end gap-2">
          {data.highlight && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-1.5 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase italic"
            >
              <Sparkles size={10} fill="currentColor" />
              Featured
            </motion.div>
          )}
          <span className="font-heading text-[10px] font-black tracking-widest text-slate-300 uppercase">
            REF_{data.id}
          </span>
        </div>
      </header>

      {/* 2. เนื้อหา: จุดนำเสนอความโดดเด่นของแผนงาน */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
              {data.category} Plan
            </span>
          </div>
          <h3 className="font-heading text-4xl leading-none font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
            {data.title}
          </h3>
          <p className="font-body text-lg leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-700">
            {data.description}
          </p>
        </div>

        {/* รายละเอียดคุณสมบัติหลัก */}
        <div className="grid gap-3 pt-6">
          {data.features.slice(0, 4).map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 size={12} strokeWidth={3} />
              </div>
              <span className="font-body text-sm font-bold text-slate-600">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ส่วนท้าย: ข้อมูลการลงทุนและการตอบสนอง */}
      <footer className="mt-14 space-y-8 border-t border-slate-50 pt-10">
        <div className="flex flex-col">
          <p className="font-heading mb-1 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
            มูลค่าการลงทุนเริ่มต้นที่
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-6xl font-black tracking-tighter text-slate-950 italic">
              ฿{data.priceValue.toLocaleString()}
            </span>
            <span className="font-heading text-[11px] font-black text-slate-300 uppercase italic">
              ต่อโปรเจกต์
            </span>
          </div>
        </div>

        <Link
          href={`/services/${data.slug}`}
          className="group/btn flex w-full items-center justify-between rounded-2xl bg-slate-950 px-8 py-6 text-white shadow-2xl shadow-slate-950/20 transition-all hover:bg-emerald-600 active:scale-95"
        >
          <span className="font-heading text-xs font-black tracking-[0.3em] uppercase italic">
            วิเคราะห์รายละเอียดแผนงาน
          </span>
          <ArrowRight
            size={20}
            className="transition-transform group-hover/btn:translate-x-2"
          />
        </Link>
      </footer>
    </motion.article>
  );
};
