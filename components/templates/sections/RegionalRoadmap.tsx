/**
 * [SECTION COMPONENT]: REGIONAL_ROADMAP v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

interface RegionalRoadmapProps {
  province: string;
  steps?: readonly RoadmapStep[];
}

const DEFAULT_STEPS: RoadmapStep[] = [
  {
    step: "01",
    title: "วิเคราะห์ตลาดรายพื้นที่",
    description:
      "วิเคราะห์ความต้องการของลูกค้าและคู่แข่งในจังหวัดของคุณ เพื่อวางแผนการตลาดให้แม่นยำที่สุด",
  },
  {
    step: "02",
    title: "พัฒนาระบบความเร็วสูง",
    description:
      "สร้างเว็บไซต์ด้วยเทคโนโลยีที่โหลดไวที่สุด เพื่อให้ลูกค้าในพื้นที่เข้าถึงข้อมูลได้ทันใจ",
  },
  {
    step: "03",
    title: "สร้างตัวตนบน Google",
    description:
      "เชื่อมโยงธุรกิจเข้ากับแผนที่ Google และระบบค้นหา เพื่อครองอันดับหนึ่งในใจคนท้องถิ่น",
  },
];

export const RegionalRoadmap = ({ province, steps = DEFAULT_STEPS }: RegionalRoadmapProps) => {
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

    const nodes = sectionRef.current?.querySelectorAll("[data-roadmap-node]");
    nodes?.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface-offset relative overflow-hidden py-24 md:py-48">
      {/* 01. BLUEPRINT BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mb-24 space-y-6 text-center">
          <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-md">
            <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--brand-primary)]" />
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              Deployment_Framework.v18.2
            </span>
          </div>

          <h2 className="text-text-primary text-5xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">
            {province} <span className="text-brand-primary">Blueprint.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium italic opacity-70 md:text-2xl">
            "ยุทธศาสตร์ 3 ขั้นตอนสู่การเป็นผู้นำด้านโครงสร้างพื้นฐานดิจิทัลในภูมิภาค"
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((item, idx) => {
            const isVisible = visibleItems.has(idx);
            return (
              <div
                key={idx}
                data-roadmap-node
                data-index={idx}
                className={cn(
                  "group rounded-section border-border/10 bg-surface-card relative border p-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "hover:border-brand-primary/40 hover:shadow-sm",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
                )}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* ID Tag */}
                <span className="text-brand-primary/20 absolute top-8 right-10 font-mono text-[10px] font-black tracking-widest uppercase">
                  STEP_{item.step}
                </span>

                <div className="bg-brand-primary mb-10 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl font-black text-white italic shadow-lg transition-transform group-hover:rotate-12">
                  {item.step}
                </div>

                <h4 className="text-text-primary group-hover:text-brand-primary mb-6 text-2xl font-black tracking-tighter uppercase italic transition-colors">
                  {item.title}
                </h4>

                <p className="text-text-secondary text-base leading-relaxed font-medium italic opacity-80">
                  {item.description}
                </p>

                {idx < 2 && (
                  <div className="text-brand-primary/10 absolute top-1/2 -right-6 z-10 hidden -translate-y-1/2 lg:block">
                    <IconRenderer name="ArrowRight" size={32} strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
