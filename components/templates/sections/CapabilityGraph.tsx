/**
 * [SECTION COMPONENT]: CAPABILITY_GRAPH v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import type { ServiceFeature } from "@/types";
import { cn } from "@/lib/utils";

export const CapabilityGraph = ({ skills }: { skills: readonly ServiceFeature[] }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className="w-full space-y-6 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/5 bg-[var(--surface-card)] p-8"
    >
      <p className="font-mono text-[10px] font-black tracking-[0.3em] uppercase italic opacity-40">
        // Capability_Metrics
      </p>
      <div className="space-y-5">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between font-mono text-[10px] tracking-tighter uppercase">
              <span className="font-bold">{skill.title}</span>
              <span className="text-[var(--brand-primary)]">9{idx}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full border border-[var(--foreground)]/5 bg-[var(--foreground)]/5">
              <div
                className={cn(
                  "h-full bg-[var(--brand-primary)] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  visible ? "w-full" : "w-0",
                )}
                style={{
                  width: visible ? `${90 + idx}%` : "0%",
                  transitionDelay: `${idx * 150}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
