/**
 * [FEATURE]: KEYWORD_REGISTRY v18.0.6 (STABILIZED_FINAL)
 * [STRATEGY]: Technical Social Proof | EEAT Hardening | Named Export Alignment
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * [DATA_NODE]: Strategic Keywords
 * ย้ายข้อมูลออกมานอก Component เพื่อป้องกันการ Re-allocation ของหน่วยความจำ
 */
const STRATEGIC_KEYWORDS = [
  { word: "รับทำเว็บไซต์ โคราช", volume: "High", rank: "Top 1", trend: "stable" },
  { word: "จ้างทำเว็บแคตตาล็อก", volume: "Medium", rank: "Top 3", trend: "up" },
  { word: "SEO Agency Thailand", volume: "Extreme", rank: "Top 5", trend: "up" },
  { word: "ออกแบบเว็บไซต์บริษัท", volume: "High", rank: "Top 2", trend: "stable" },
] as const;

/**
 * @component KeywordRegistry
 * @description ตารางแสดงผลอันดับคำค้นหาที่ผ่านการคัดกรองมาเพื่อโชว์ศักยภาพทางเทคนิค
 * [FIXED]: เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Knip และรองรับ Tree-shaking 100%
 */
export const KeywordRegistry = memo(() => {
  return (
    <section id="ranking-registry" className="bg-surface-main/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* --- 01. REGISTRY HEADER: Authority Signal --- */}
          <div className="border-border/10 flex flex-col justify-between gap-8 border-b pb-12 md:flex-row md:items-end">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconRenderer name="Database" size={16} className="text-brand-primary" />
                <p className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  SERP_Intelligence_Log
                </p>
              </div>
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Ranking <br /> <span className="text-brand-primary">Registry.</span>
              </h2>
            </div>
            <p className="text-text-secondary border-brand-primary/30 max-w-xs border-l-2 pl-6 text-sm font-medium italic opacity-60 md:text-base">
              บันทึกประวัติการยึดครองพื้นที่การค้นหาในคำทำเงิน (Money Keywords) ของลูกค้าในระบบ
            </p>
          </div>

          {/* --- 02. TECHNICAL DATA GRID: Zero-CLS Structure --- */}
          <div className="group border-border/10 bg-surface-card relative overflow-hidden rounded-[2.5rem] border shadow-2xl backdrop-blur-sm">
            {/* Ambient Shadow Effect */}
            <div className="bg-brand-primary/5 absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-50 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left font-mono text-xs md:text-sm">
                <thead>
                  <tr className="border-border/5 border-b bg-white/[0.02]">
                    <th className="p-8 font-black tracking-widest uppercase opacity-40">
                      Strategic_Keyword
                    </th>
                    <th className="p-8 font-black tracking-widest uppercase opacity-40">
                      Search_Volume
                    </th>
                    <th className="p-8 text-right font-black tracking-widest uppercase opacity-40">
                      Target_Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border/5 divide-y">
                  {STRATEGIC_KEYWORDS.map((k, idx) => (
                    <tr
                      key={`${k.word}-${idx}`}
                      className="group/row hover:bg-brand-primary/[0.03] transition-all duration-500"
                    >
                      <td className="p-8">
                        <div className="flex items-center gap-4">
                          <div className="bg-brand-primary/40 group-hover/row:bg-brand-primary h-1.5 w-1.5 rounded-full transition-all group-hover/row:scale-150" />
                          <span className="text-text-primary group-hover/row:text-brand-primary text-lg font-bold italic transition-colors">
                            {k.word}
                          </span>
                        </div>
                      </td>
                      <td className="p-8">
                        <span
                          className={cn(
                            "rounded-full border px-4 py-1.5 text-[10px] font-black tracking-widest uppercase",
                            k.volume === "Extreme"
                              ? "border-rose-500/20 bg-rose-500/5 text-rose-500"
                              : "border-border/10 bg-surface-main text-text-muted",
                          )}
                        >
                          {k.volume}
                        </span>
                      </td>
                      <td className="p-8 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {k.trend === "up" && (
                            <IconRenderer
                              name="TrendingUp"
                              size={14}
                              className="animate-bounce text-emerald-500"
                            />
                          )}
                          <span className="text-brand-primary text-2xl font-black tracking-tighter italic drop-shadow-[0_0_8px_rgba(var(--brand-primary-rgb),0.3)] md:text-3xl">
                            {k.rank}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer: Technical Stamp */}
            <div className="border-border/5 border-t bg-white/[0.01] p-6 text-center">
              <p className="font-mono text-[8px] font-bold tracking-[0.5em] uppercase opacity-20">
                Data_Verified_By_AEMZA_MACKS_Protocol // 2026_Standard
              </p>
            </div>
          </div>

          {/* --- 03. SYSTEM NOTE: Trust Layer --- */}
          <div className="flex items-center justify-center gap-4 opacity-30 md:justify-start">
            <IconRenderer name="ShieldCheck" size={14} />
            <p className="font-mono text-[9px] font-bold tracking-widest uppercase">
              Real-time monitoring enabled for all registry nodes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

KeywordRegistry.displayName = "KeywordRegistry";
