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
import { cn } from "@/lib/utils";

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
          {/* Status Architecture: High-Authority Meta-Data */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-4 px-4 md:gap-8">
            {[
              { label: "ENGINE", value: "NEXT.JS 16.1.6", status: "emerald" },
              { label: "RUNTIME", value: "REACT 19.0.0", status: "emerald" },
              { label: "SECURITY", value: "HARDENED", status: "amber" },
              { label: "LOCATION", value: "BANGKOK CBD", status: "emerald" },
            ].map((node, i) => (
              <div
                key={i}
                className="border-border/10 bg-surface-card/30 shadow-pro-sm group hover:border-brand-primary/40 flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-3xl transition-all"
              >
                <div
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    node.status === "emerald"
                      ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                      : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
                  )}
                />
                <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.4em] uppercase opacity-40 transition-opacity group-hover:opacity-100">
                  {node.label}: <span className="text-text-primary ml-1">{node.value}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Main Title: Fluid Precision Scaling */}
          <h1 className="text-text-primary mb-12 max-w-6xl text-6xl leading-[0.8] font-black tracking-tighter uppercase italic drop-shadow-2xl md:text-9xl lg:text-[11rem]">
            Hyper <br />
            <span className="from-brand-primary via-brand-primary/80 to-brand-accent bg-gradient-to-r bg-clip-text text-transparent saturate-150 filter">
              Authority.
            </span>
          </h1>

          {/* Core Vision: Tactical Copywriting */}
          <div className="mb-20 flex max-w-4xl flex-col items-center gap-10">
            <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-bold italic opacity-95 md:text-3xl">
              “สถาปัตยกรรมเว็บไซต์เพื่อสร้าง{" "}
              <span className="text-text-primary">อำนาจการจัดอันดับ</span> ที่ยั่งยืนในยุค AI-Search
              Domination”
            </p>
            <div className="bg-border/20 relative h-px w-48 overflow-hidden">
              <div className="bg-brand-primary absolute inset-0 h-full w-full -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>

          {/* Conversion Actions: Weighted Response */}
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Button
              size="lg"
              variant="default"
              href={SITE_CONFIG.links.line}
              className="shadow-glow-lg group glow-primary h-20 min-w-[320px] rounded-2xl px-12 text-[12px] font-black tracking-[0.4em] uppercase italic transition-all duration-500 hover:scale-[1.02] active:scale-95"
            >
              <span className="mr-6">Initialize Specialist Audit</span>
              <IconRenderer
                name="Zap"
                size={20}
                className="transition-transform group-hover:scale-125 group-hover:rotate-12"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              href="/services"
              className="border-border hover:border-brand-primary/40 h-20 min-w-[280px] rounded-2xl px-12 text-[11px] font-black tracking-[0.4em] uppercase italic backdrop-blur-3xl transition-all duration-500"
            >
              Expertise Registry
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
