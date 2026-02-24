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
    { label: "Active_Partners", value: "250+" },
    { label: "System_Stability", value: "99.9%" },
    { label: "ROI_Optimization", value: "x4.2" },
  ];

  return (
    <section
      ref={ref}
      className="overflow-hidden border-[var(--foreground)]/10 border-y-[var(--border-width)] py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={cn(
                "space-y-2 text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-left",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <p className="font-[family-name:var(--font-primary)] text-6xl font-black tracking-tighter text-[var(--brand-primary)] italic md:text-8xl">
                {stat.value}
              </p>
              <p className="font-mono text-sm font-black tracking-[0.3em] uppercase opacity-50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
