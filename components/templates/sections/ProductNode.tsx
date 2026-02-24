/**
 * [SECTION COMPONENT]: PRODUCT_NODE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Reveal | Staggered Delay | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface ProductNodeProps {
  name: string;
  description: string;
  icon: string;
  index: number;
  technicalID: string;
}

export const ProductNode = ({ name, description, icon, index, technicalID }: ProductNodeProps) => {
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
      className={cn(
        "group hover:shadow-glow-sm relative h-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 transition-all duration-500 hover:border-[var(--brand-primary)]/50",
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex h-full flex-col space-y-6">
        <div className="flex items-start justify-between">
          <div className="rounded-[var(--radius)] bg-[var(--brand-primary)]/10 p-4 text-[var(--brand-primary)]">
            <IconRenderer name={icon as IconName} size={32} strokeWidth={2} />
          </div>
          <span className="font-mono text-[10px] font-black tracking-tighter opacity-30">
            {technicalID}
          </span>
        </div>

        <div className="flex-grow space-y-3">
          <h3 className="font-[family-name:var(--font-primary)] text-2xl leading-none font-black tracking-tight uppercase">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
            {description}
          </p>
        </div>

        <div className="border-[var(--foreground)]/5 border-t-[var(--border-width)] pt-6">
          <button className="w-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 py-3 text-[10px] font-black tracking-[0.2em] text-[var(--brand-primary)] uppercase transition-all hover:bg-[var(--brand-primary)] hover:text-white">
            View_Node_Details
          </button>
        </div>
      </div>
    </div>
  );
};
