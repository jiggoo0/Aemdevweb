/**
 * [SECTION COMPONENT]: CAPABILITY_MATRIX v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface Capability {
  title: string;
  description: string;
  icon: string;
}

export const CapabilityMatrix = ({ items }: { items: Capability[] }) => {
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
    <section ref={ref} className="overflow-hidden bg-[var(--brand-primary)]/5 py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mb-20 space-y-4 transition-all duration-1000",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <p className="font-mono text-xs font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
            // Core_Capabilities
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-black uppercase italic md:text-6xl">
            โครงสร้างบริการเชิงกลยุทธ์
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[var(--border-width)] overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group space-y-8 bg-[var(--surface-main)] p-10 transition-all duration-700 hover:bg-[var(--brand-primary)] md:p-14",
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="inline-block rounded-[calc(var(--radius)*0.5)] bg-[var(--brand-primary)]/10 p-4 text-[var(--brand-primary)] transition-all duration-500 group-hover:rotate-6 group-hover:bg-white/20 group-hover:text-white">
                <IconRenderer name={item.icon as IconName} size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase italic transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed font-medium text-[var(--text-primary)]/60 italic transition-colors group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
