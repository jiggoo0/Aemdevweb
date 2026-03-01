/**
 * [SPECIALIST COMPONENT]: AEM_SPECIALIST_HERO v18.5.0 (EXECUTIVE_STEALTH)
 * [STRATEGY]: Layered Atmosphere | Tactical Grid | Fluid Precision
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useEffect, useState, useRef } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";

export const AEMSpecialistHero = memo(() => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface-main border-border/40 relative flex min-h-[90dvh] w-full flex-col items-center justify-center overflow-hidden border-b px-4 py-32"
    >
      {/* --- LAYER 01: TACTICAL INFRASTRUCTURE (The Grid) --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--text-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, var(--brand-primary) 0%, transparent 40%)`,
            opacity: 0.03,
          }}
        />
      </div>

      {/* --- LAYER 02: ATMOSPHERIC NODES --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="bg-brand-primary/5 animate-aura-1 absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full blur-[140px]" />
        <div className="bg-brand-secondary/5 animate-aura-2 absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full blur-[120px]" />
      </div>

      {/* --- LAYER 03: CONTENT HUB --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Status Architecture: Trust & Reliability Meta-Data */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-4 px-4 md:gap-8">
            {[
              { label: "ความปลอดภัย", value: "มาตรฐานสากล", status: "emerald" },
              { label: "ความเร็ว", value: "สูงสุด (Grade A)", status: "emerald" },
              { label: "การดูแล", value: "ผู้เชี่ยวชาญโดยตรง", status: "emerald" },
              { label: "สถานะ", value: "พร้อมรับงานใหม่", status: "emerald" },
            ].map((node, i) => (
              <div
                key={i}
                className="border-border/10 bg-surface-card/30 shadow-pro-sm group hover:border-brand-primary/40 flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-md transition-all"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-text-muted font-sans text-[10px] font-bold tracking-wide uppercase opacity-60 transition-opacity group-hover:opacity-100">
                  {node.label}: <span className="text-text-primary ml-1">{node.value}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Main Title: Outcome-Oriented Branding */}
          <h1 className="text-text-primary mb-12 max-w-6xl text-6xl leading-[0.8] font-black tracking-tighter uppercase italic drop-shadow-2xl md:text-9xl lg:text-[11rem]">
            Dominate <br />
            <span className="from-brand-primary via-brand-primary/80 to-brand-accent bg-gradient-to-r bg-clip-text text-transparent saturate-150 filter">
              Results.
            </span>
          </h1>

          {/* Core Vision: Human-Centric Tactical Copywriting */}
          <div className="mb-20 flex max-w-4xl flex-col items-center gap-10">
            <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-bold italic opacity-95 md:text-3xl">
              “เปลี่ยนเว็บไซต์ของคุณให้เป็น{" "}
              <span className="text-text-primary">เครื่องจักรทำเงิน</span> ด้วยสถาปัตยกรรมระดับสากล
              ที่ครองอันดับ 1 ในยุค AI Search”
            </p>
            <div className="bg-border/20 relative h-px w-48 overflow-hidden">
              <div className="bg-brand-primary absolute inset-0 h-full w-full -translate-x-full" />
            </div>
          </div>

          {/* Conversion Actions: Simplified Response */}
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Button
              size="lg"
              variant="default"
              href={SITE_CONFIG.links.line}
              className="group glow-primary h-20 min-w-[320px] rounded-2xl px-12 text-[12px] font-black tracking-[0.4em] uppercase italic shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-md active:scale-95"
            >
              <span className="mr-6">ปรึกษาผู้เชี่ยวชาญ (ฟรี)</span>
              <IconRenderer
                name="Zap"
                size={20}
                className="transition-transform group-hover:scale-105 group-hover:rotate-12"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              href="/services"
              className="border-border hover:border-brand-primary/40 h-20 min-w-[280px] rounded-2xl px-12 text-[11px] font-black tracking-[0.4em] uppercase italic backdrop-blur-md transition-all duration-500"
            >
              ดูบริการทั้งหมด
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator: Friendly Feed */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <span className="text-text-muted font-sans text-[9px] font-bold tracking-widest uppercase opacity-40">
          เลื่อนลงเพื่อดูข้อมูลเพิ่ม
        </span>
        <div className="border-border/40 flex h-10 w-6 items-start justify-center rounded-full border p-2">
          <div className="bg-brand-primary h-1.5 w-1 animate-bounce rounded-full" />
        </div>
      </div>
    </section>
  );
});

AEMSpecialistHero.displayName = "AEMSpecialistHero";
