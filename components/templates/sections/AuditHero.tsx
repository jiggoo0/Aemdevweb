/**
 * [FEATURE]: AUDIT_HERO v18.0.8 (SERVER_OPTIMIZED)
 * [STRATEGY]: Technical Authority | Pure CSS Animations | Zero-Framer
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";

interface AuditHeroProps {
  readonly title: string;
  readonly description: string;
  readonly banner?: string;
}

interface AuditMetric {
  label: string;
  value: string;
  color: string;
  icon: IconName;
}

const AUDIT_METRICS: readonly AuditMetric[] = [
  { label: "Performance", value: "99", color: "text-emerald-500", icon: "Zap" },
  { label: "Accessibility", value: "100", color: "text-emerald-500", icon: "UserCheck" },
  { label: "Best Practices", value: "100", color: "text-emerald-500", icon: "ShieldCheck" },
  { label: "SEO_Index", value: "100", color: "text-brand-primary", icon: "SearchCheck" },
] as const;

export const AuditHero = memo(({ title, description, banner }: AuditHeroProps) => {
  const mainTitle = title.split("|")[0].trim();
  const imgData = banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null;

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
    <section
      ref={ref}
      id="audit-hero-entry"
      className="border-border/10 bg-surface-main relative overflow-hidden border-b pt-32 pb-24 md:pt-48 md:pb-32"
    >
      {/* Background Banner Override */}
      {banner && (
        <div className="absolute inset-0 -z-10 scale-125 overflow-hidden opacity-[0.08] blur-2xl">
          <Image
            src={banner}
            alt=""
            fill
            className="object-cover"
            placeholder={imgData?.blurDataURL ? "blur" : "empty"}
            blurDataURL={imgData?.blurDataURL}
          />
        </div>
      )}
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* --- 01. NARRATIVE_NODE --- */}
          <div
            className={cn(
              "space-y-10 transition-all duration-1000",
              visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
            )}
          >
            <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-md">
              <IconRenderer
                name="Activity"
                size={14}
                className="text-brand-primary animate-pulse"
              />
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase italic">
                System_Audit_Active.v{SITE_CONFIG.project.version}
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
                {mainTitle} <br />
                <span className="text-brand-primary">Laboratory.</span>
              </h1>
              <div className="border-brand-primary border-l-4 pl-8">
                <p className="text-text-secondary max-w-xl text-xl leading-relaxed font-medium italic opacity-80 md:text-2xl">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* --- 02. METRICS_NODE --- */}
          <div
            className={cn(
              "group relative transition-all delay-300 duration-1000",
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
            )}
          >
            <div className="bg-brand-primary/10 rounded-card-lg absolute -inset-4 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <div className="rounded-section relative grid grid-cols-2 gap-4 overflow-hidden border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur-2xl md:p-10">
              <div className="via-brand-primary/40 animate-scan absolute top-0 left-0 z-20 h-1 w-full bg-gradient-to-r from-transparent to-transparent" />

              {AUDIT_METRICS.map((m, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "relative space-y-4 border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white/[0.05]",
                    "transition-all duration-700",
                    visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] font-bold tracking-widest uppercase opacity-40">
                      {m.label}
                    </p>
                    <IconRenderer name={m.icon} size={14} className={cn("opacity-20", m.color)} />
                  </div>

                  <p
                    className={cn("text-4xl font-black italic drop-shadow-sm md:text-5xl", m.color)}
                  >
                    {m.value}
                  </p>

                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={cn(
                        "h-full transform-gpu transition-all delay-[1000ms] duration-[1500ms] ease-out",
                        m.color.replace("text-", "bg-"),
                        visible ? "w-full" : "w-0",
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 opacity-30">
              <span className="h-px w-12 bg-white/20" />
              <p className="font-mono text-[8px] font-black tracking-widest uppercase italic">
                Core_Web_Vitals_Certified // 2026_Standard
              </p>
              <span className="h-px w-12 bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AuditHero.displayName = "AuditHero";
