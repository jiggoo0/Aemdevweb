/**
 * [SECTION COMPONENT]: VALUE_BLUEPRINT v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Reveal | IntersectionObserver | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const ValueBlueprint = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "AI_Entity_Trust", value: "98%", desc: "Generative Search Visibility" },
    { label: "Core_Vitals_Pass", value: "100%", desc: "Standardized Engineering" },
    { label: "Average_ROI_Gain", value: "x3.8", desc: "Conversion Infrastructure" },
  ];

  return (
    <section
      ref={ref}
      className="bg-surface-offset relative overflow-hidden border-[var(--foreground)]/10 border-y-[var(--border-width)] py-32 md:py-48"
    >
      {/* 01. BLUEPRINT INFRASTRUCTURE */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mb-24 space-y-4 text-center md:text-left">
          <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase italic">
            Strategic_Authority_Blueprint
          </span>
          <h2 className="text-text-primary text-4xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
            Success <span className="text-brand-primary">Hardened.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={cn(
                "relative space-y-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="bg-brand-primary/10 absolute -top-8 -left-8 h-24 w-24 rounded-full blur-3xl" />

              <div className="relative space-y-1">
                <p className="font-[family-name:var(--font-primary)] text-7xl font-black tracking-tighter text-[var(--brand-primary)] italic md:text-8xl lg:text-9xl">
                  {stat.value}
                </p>
                <p className="text-text-primary font-mono text-[11px] font-black tracking-[0.3em] uppercase">
                  // {stat.label}
                </p>
              </div>

              <p className="text-text-secondary max-w-[200px] text-xs leading-relaxed font-medium italic opacity-60">
                {stat.desc}
              </p>

              <div
                className={cn(
                  "bg-brand-primary/20 h-1 w-full overflow-hidden rounded-full transition-all delay-500 duration-[2000ms] ease-out",
                  visible ? "scale-x-100" : "scale-x-0",
                )}
                style={{ transformOrigin: "left" }}
              >
                <div className="bg-brand-primary shadow-glow animate-shimmer h-full w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
