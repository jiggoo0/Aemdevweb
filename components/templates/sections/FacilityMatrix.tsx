/**
 * [SECTION COMPONENT]: FACILITY_MATRIX v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import type { ServiceFeature } from "@/types";
import { cn } from "@/lib/utils";

interface FacilityMatrixProps {
  readonly items: readonly ServiceFeature[];
}

export const FacilityMatrix = ({ items }: FacilityMatrixProps) => {
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

  return (
    <section ref={ref} className="overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-[var(--border-width)] overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 shadow-sm md:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative flex flex-col items-center justify-center space-y-6 bg-[var(--surface-main)] p-10 text-center transition-all duration-700 hover:bg-[var(--brand-primary)]/5",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Icon Node */}
              <div className="text-[var(--brand-primary)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <IconRenderer name={item.icon as IconName} size={40} strokeWidth={1.5} />
              </div>

              {/* Data Labels */}
              <div className="space-y-2">
                <h4 className="text-sm font-black tracking-widest text-[var(--foreground)] uppercase italic">
                  {item.title}
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-1 animate-pulse rounded-full bg-green-500" />
                  <p className="font-mono text-[9px] font-bold tracking-tighter uppercase opacity-40 transition-opacity group-hover:opacity-80">
                    System_Active
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-10">
                <IconRenderer name="Target" size={12} className="text-[var(--brand-primary)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
