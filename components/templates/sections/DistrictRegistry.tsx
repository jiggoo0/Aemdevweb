/**
 * [SECTION COMPONENT]: DISTRICT_REGISTRY v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const DistrictRegistry = ({ districts }: { districts: string[] }) => {
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

  if (!districts || districts.length === 0) return null;

  return (
    <section ref={ref} className="overflow-hidden border-t border-[var(--foreground)]/10 py-24">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mb-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <h3 className="font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
            Regional_Cluster_Nodes
          </h3>
          <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">
            การครอบคลุมพื้นที่ระดับเขตอำเภอ ({districts.length} NODES)
          </p>
        </div>

        {/* Grid System with Borders */}
        <div
          className={cn(
            "grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--foreground)]/10 bg-[var(--foreground)]/10 transition-all delay-300 duration-1000 md:grid-cols-4 lg:grid-cols-6",
            visible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0",
          )}
        >
          {districts.map((district, idx) => (
            <div
              key={`${district}-${idx}`}
              className="group bg-[var(--surface-main)] p-6 text-center transition-colors hover:bg-[var(--brand-primary)]/5"
            >
              <p className="text-sm font-bold opacity-60 transition-all group-hover:text-[var(--brand-primary)] group-hover:opacity-100">
                {district}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
