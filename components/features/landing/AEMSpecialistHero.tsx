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
          {/* Status Chip: High-Authority Marker */}
          <div className="border-brand-primary/20 bg-brand-primary/5 group hover:border-brand-primary/40 mb-12 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-md transition-all">
            <div className="relative flex h-2 w-2">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-[0_0_10px_var(--brand-primary)]"></span>
            </div>
            <span className="text-text-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase italic">
              System_Integrity: <span className="text-brand-primary">Optimal_v18.5</span>
            </span>
          </div>

          {/* Main Title: Fluid Precision Scaling */}
          <h1 className="text-text-primary mb-10 max-w-5xl text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Hyper <br />
            <span className="from-brand-primary via-brand-primary to-brand-accent bg-gradient-to-r bg-clip-text text-transparent">
              Performance.
            </span>
          </h1>

          {/* Core Vision: Tactical Copywriting */}
          <div className="mb-16 flex max-w-3xl flex-col items-center gap-8">
            <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-90 md:text-2xl">
              “วิศวกรรมโครงสร้างพื้นฐานเว็บไซต์ เพื่อสร้างอำนาจการจัดอันดับที่ยั่งยืนในยุค AI-Search
              Domination”
            </p>
            <div className="bg-border/40 h-px w-24" />
          </div>

          {/* Conversion Actions: Weighted Response */}
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Button
              size="lg"
              variant="default"
              href={SITE_CONFIG.links.line}
              className="shadow-glow-lg group h-16 rounded-2xl px-10 text-[11px] font-black tracking-[0.3em] uppercase italic transition-all duration-500 hover:scale-[1.02] active:scale-95"
            >
              <span className="mr-4">Initialize Specialist Audit</span>
              <IconRenderer
                name="Zap"
                size={16}
                className="transition-transform group-hover:rotate-12"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              href="/services"
              className="border-border hover:border-brand-primary/40 h-16 rounded-2xl px-10 text-[11px] font-black tracking-[0.3em] uppercase italic transition-all duration-500"
            >
              Master Services Registry
            </Button>
          </div>
        </div>
      </div>

      {/* --- LAYER 04: NAVIGATION DECOR (The Dashboard Feel) --- */}
      <div className="pointer-events-none absolute bottom-12 left-12 hidden flex-col gap-4 font-mono md:flex">
        <div className="flex items-center gap-3">
          <span className="text-text-muted text-[8px] font-bold uppercase opacity-40">
            Lat_Node:
          </span>
          <span className="text-text-primary text-[10px] font-black">{mousePos.x.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-text-muted text-[8px] font-bold uppercase opacity-40">
            Lng_Node:
          </span>
          <span className="text-text-primary text-[10px] font-black">{mousePos.y.toFixed(2)}</span>
        </div>
      </div>

      {/* Scroll Indicator: Haptic Feed */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.4em] uppercase opacity-30">
          Scroll_Exploration
        </span>
        <div className="border-border/40 flex h-10 w-6 items-start justify-center rounded-full border p-2">
          <div className="bg-brand-primary h-1.5 w-1 animate-bounce rounded-full" />
        </div>
      </div>
    </section>
  );
});

AEMSpecialistHero.displayName = "AEMSpecialistHero";
