/**
 * [SECTION COMPONENT]: SUCCESS_TIMELINE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineNode {
  year: string;
  title: string;
  description: string;
  status?: "completed" | "active";
}

interface SuccessTimelineProps {
  items?: TimelineNode[];
}

export const SuccessTimeline = ({ items }: SuccessTimelineProps) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 },
    );

    const nodes = sectionRef.current?.querySelectorAll("[data-timeline-node]");
    nodes?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const defaultItems: TimelineNode[] = [
    {
      year: "2023",
      title: "Foundational_Registry",
      description: "เริ่มต้นวางรากฐานระบบสถาปัตยกรรมเว็บไซต์เพื่ออุตสาหกรรมยุคใหม่",
      status: "completed",
    },
    {
      year: "2024",
      title: "Regional_Expansion",
      description: "ขยายเครือข่ายความน่าเชื่อถือครอบคลุมพื้นที่ยุทธศาสตร์สำคัญทั่วประเทศ",
      status: "completed",
    },
    {
      year: "2025",
      title: "Neural_Infrastructure",
      description:
        "อัปเกรดระบบการประมวลผลและ Identity Overriding เพื่อความเป็นเอกลักษณ์ระดับสูงสุด",
      status: "completed",
    },
    {
      year: "2026",
      title: "Ultimate_Engine_v18",
      description:
        "ประกาศใช้ Next.js 16 + React 19 พร้อมระบบ P-SEO ขั้นสูงสุดเพื่อการครองอันดับอย่างยั่งยืน",
      status: "active",
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="relative flex flex-col space-y-20">
          <div className="absolute top-0 bottom-0 left-4 w-[var(--border-width)] bg-gradient-to-b from-[var(--brand-primary)] via-[var(--brand-primary)]/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {displayItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isVisible = visibleItems.has(idx);

            return (
              <div
                key={idx}
                data-timeline-node
                data-index={idx}
                className={cn(
                  "relative flex w-full flex-col items-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:flex-row md:items-center",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  isEven ? "md:flex-row-reverse" : "",
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* 1. Content Block */}
                <div
                  className={cn("w-full pl-12 md:w-1/2 md:pl-0", isEven ? "md:pl-16" : "md:pr-16")}
                >
                  <div className="group rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)]/50 p-8 backdrop-blur-sm transition-all hover:border-[var(--brand-primary)]/40">
                    <p className="mb-2 font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase italic">
                      // ปี {item.year}
                    </p>
                    <h3 className="mb-3 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* 2. Central Node (The Hub) */}
                <div className="absolute top-8 left-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center md:top-auto md:left-1/2">
                  <div
                    className={cn(
                      "h-4 w-4 rotate-45 border-2 transition-transform duration-700 group-hover:rotate-180",
                      item.status === "active"
                        ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]"
                        : "border-[var(--brand-primary)] bg-[var(--surface-main)]",
                    )}
                  />
                  {item.status === "active" && (
                    <div className="absolute inset-0 rounded-full bg-[var(--brand-primary)] opacity-20 blur-lg" />
                  )}
                </div>

                {/* 3. Year Marker (Opposite Side) */}
                <div
                  className={cn(
                    "hidden w-1/2 md:block",
                    isEven ? "pr-16 text-right" : "pl-16 text-left",
                  )}
                >
                  <span className="font-[family-name:var(--font-primary)] text-7xl font-black tracking-tighter italic opacity-5 transition-opacity group-hover:opacity-10 lg:text-9xl">
                    {item.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
