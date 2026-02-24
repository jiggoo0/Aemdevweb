/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v17.9.103 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | IntersectionObserver | Zero-Framer
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

interface TrustNode {
  readonly label: string;
  readonly icon: IconName;
  readonly status: "active" | "standby";
}

const TRUST_NODES: readonly TrustNode[] = [
  { label: "High-Speed Protocol", icon: "Zap", status: "active" },
  { label: "SEO Architecture", icon: "SearchCheck", status: "active" },
  { label: "Bank-Grade Security", icon: "ShieldCheck", status: "active" },
  { label: "Responsive Geometry", icon: "Layers", status: "active" },
  { label: "Next.js Core", icon: "Cpu", status: "active" },
];

const TrustBadge = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, margin: "-50px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-16 md:py-24"
      aria-label="Trust Signals"
    >
      {/* --- 01. STATUS HEADER: Blueprint Alignment --- */}
      <div
        className={cn(
          "mb-14 flex w-full max-w-2xl items-center justify-center gap-6 px-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible ? "scale-x-100 opacity-60" : "scale-x-75 opacity-0",
        )}
      >
        <div className="via-border/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
        <span
          suppressHydrationWarning
          className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] whitespace-nowrap uppercase italic md:text-[10px]"
        >
          Infrastructure_Verified.v{SITE_CONFIG.project.version}
        </span>
        <div className="via-border/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      {/* --- 02. NODES GRID: Balanced Kinetic Chips --- */}
      <div className="flex flex-wrap justify-center gap-4 px-4 md:gap-5 lg:gap-6">
        {TRUST_NODES.map((node, index) => (
          <div
            key={node.label}
            className={cn(
              "group relative flex cursor-default items-center gap-5 overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem]",
              "border-border bg-surface-card/30 shadow-pro-sm border px-6 py-4 backdrop-blur-3xl md:px-9 md:py-5",
              "hover:border-brand-primary/40 hover:bg-surface-offset/60 transition-all duration-500",
              "transform-gpu will-change-transform",
              "hover:-translate-y-1.5 hover:scale-103",
              "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              visible
                ? "blur-0 translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0 blur-[4px]",
            )}
            style={{
              transitionDelay: `${index * 120}ms`,
            }}
          >
            {/* Neural Signal: Emerald (Online/Secure) */}
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 group-hover:opacity-40",
                  node.status === "active" ? "bg-emerald-500" : "bg-text-muted",
                )}
              />
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-full transition-all duration-500",
                  node.status === "active"
                    ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    : "bg-text-muted/40",
                )}
              />
            </div>

            {/* Content Hub */}
            <div className="flex items-center gap-5">
              <div className="text-text-muted group-hover:text-brand-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
                <IconRenderer name={node.icon} size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-text-secondary group-hover:text-text-primary font-mono text-[10px] font-black tracking-widest uppercase transition-colors duration-500 md:text-[11px]">
                  {node.label}
                </span>
                <span className="text-brand-primary/0 group-hover:text-brand-primary/60 font-mono text-[7px] font-bold tracking-tighter uppercase transition-all duration-500">
                  Node_Authenticated_Stable
                </span>
              </div>
            </div>

            {/* Shine Sweep Effect */}
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-[1500ms] group-hover:translate-x-full"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(TrustBadge);
