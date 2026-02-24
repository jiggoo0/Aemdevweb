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
    title: "Regional Data Analysis",
    description:
      "วิเคราะห์คีย์เวิร์ดเฉพาะพื้นที่และพฤติกรรมผู้ใช้งานในจังหวัดเพื่อวางโครงสร้าง SEO เชิงรุก",
  },
  {
    step: "02",
    title: "Infrastructure Deployment",
    description:
      "ติดตั้งระบบ Next.js ที่รองรับการโหลดจากพื้นที่ของคุณได้รวดเร็วที่สุดด้วย Edge Computing",
  },
  {
    step: "03",
    title: "Hyper-Local Authority",
    description:
      "เชื่อมโยงธุรกิจเข้ากับ Google Maps และ Local Business Schema เพื่อครองอันดับหนึ่งในพื้นที่",
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
    <section ref={sectionRef} className="bg-[var(--surface-card)]/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-mono text-xs font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
            Technical_Deployment_Plan
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-black uppercase italic md:text-6xl">
            {province} <span className="text-[var(--brand-primary)]">Roadmap.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-medium italic opacity-60">
            "ยุทธศาสตร์ 3 ขั้นตอนเพื่อยกระดับธุรกิจของคุณสู่ผู้นำด้านดิจิทัลในพื้นที่"
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item, idx) => {
            const isVisible = visibleItems.has(idx);
            return (
              <div
                key={idx}
                data-roadmap-node
                data-index={idx}
                className={cn(
                  "group hover:shadow-glow-sm relative rounded-[var(--radius)] border border-[var(--foreground)]/5 bg-[var(--surface-main)] p-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "hover:border-[var(--brand-primary)]/20",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/10 text-3xl font-black text-[var(--brand-primary)] italic transition-colors group-hover:bg-[var(--brand-primary)] group-hover:text-white">
                  {item.step}
                </div>
                <h4 className="mb-4 text-xl font-black tracking-tighter uppercase italic">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed font-medium opacity-60">{item.description}</p>

                {idx < 2 && (
                  <div className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 text-[var(--brand-primary)]/20 lg:block">
                    <IconRenderer name="ArrowRight" size={24} />
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
