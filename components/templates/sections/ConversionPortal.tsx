/**
 * [FEATURE]: CONVERSION_PORTAL v18.0.8 (STRICT_TYPED)
 * [STRATEGY]: ROI-Focused CTA | Global DataLayer | Zero-Framer
 */

"use client";

import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const ConversionPortal = memo(() => {
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

  const handleContactTracking = useCallback((platform: string) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_lead_intent",
        event_category: "conversion_portal",
        event_label: platform,
        path: "/services/seo-agency",
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return (
    <section
      ref={ref}
      id="conversion-portal"
      className="bg-surface-main relative overflow-hidden py-32 md:py-48"
    >
      {/* --- 01. AMBIENT_INFRA --- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--brand-primary) 1.5px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="bg-brand-primary/10 absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 transform-gpu rounded-full opacity-30 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            {/* --- 02. NARRATIVE_NODE --- */}
            <div
              className={cn(
                "space-y-12 transition-all duration-1000 lg:col-span-7",
                visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
              )}
            >
              <div className="space-y-6">
                <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2">
                  <IconRenderer name="Target" size={14} className="text-brand-primary" />
                  <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                    Strategic_Partnership_Initiative
                  </span>
                </div>

                <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
                  Ready to <br />
                  <span className="text-brand-primary">Dominate?</span>
                </h2>

                <p className="text-text-secondary max-w-xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  ยกระดับธุรกิจของคุณด้วยโครงสร้างพื้นฐานดิจิทัลที่ <br />
                  <span className="text-text-primary decoration-brand-primary font-bold underline decoration-4 underline-offset-8">
                    ฉลาดและแม่นยำ
                  </span>{" "}
                  ที่สุดในไทย
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 opacity-40">
                <div className="flex items-center gap-3">
                  <IconRenderer name="ShieldCheck" size={18} />
                  <span className="font-mono text-[10px] font-black tracking-widest uppercase">
                    Zero_Risk_Audit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <IconRenderer name="Activity" size={18} />
                  <span className="font-mono text-[10px] font-black tracking-widest uppercase">
                    Live_Performance_Monitoring
                  </span>
                </div>
              </div>
            </div>

            {/* --- 03. ACTION_NODE --- */}
            <div
              className={cn(
                "transition-all delay-300 duration-1000 lg:col-span-5",
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0",
              )}
            >
              <div className="group relative">
                <div className="from-brand-primary/20 rounded-card-lg absolute -inset-1 bg-gradient-to-r to-emerald-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="bg-surface-card rounded-card-xl relative space-y-10 border border-white/5 p-10 shadow-2xl md:p-14">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tighter uppercase italic">
                      Start_Feasibility_Study
                    </h3>
                    <p className="text-sm font-medium italic opacity-60">
                      คุยกับ Technical Specialist เพื่อประเมินโอกาสรายจังหวัดและระดับประเทศ
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* LINE_ACTION */}
                    <Button
                      asChild
                      size="lg"
                      className="bg-text-primary text-surface-main hover:bg-brand-primary group/btn h-20 rounded-2xl transition-all duration-500"
                      onClick={() => handleContactTracking("line")}
                    >
                      <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                        <span className="flex w-full items-center justify-between px-4">
                          <span className="text-sm font-black tracking-widest uppercase italic">
                            ปรึกษาผ่าน LINE
                          </span>
                          <IconRenderer
                            name="ArrowRight"
                            size={20}
                            className="transition-transform group-hover/btn:translate-x-2"
                          />
                        </span>
                      </a>
                    </Button>

                    {/* PHONE_ACTION */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:border-brand-primary/40 hover:bg-brand-primary/5 h-20 rounded-2xl border-white/10 transition-all duration-500"
                      onClick={() => handleContactTracking("phone")}
                    >
                      <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                        <span className="flex items-center gap-4">
                          <IconRenderer name="Phone" size={18} className="text-brand-primary" />
                          <span className="text-sm font-black tracking-widest uppercase italic">
                            {SITE_CONFIG.contact.displayPhone.split(" (")[0]}
                          </span>
                        </span>
                      </a>
                    </Button>
                  </div>

                  {/* Status Indicator Bar */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-30">
                        Current_Status
                      </span>
                      <span className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                        Systems_Online
                      </span>
                    </div>
                    <IconRenderer name="Award" size={24} className="opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 04. SYSTEM_STAMP: Technical Integrity --- */}
      <div className="mt-32 border-t border-white/5 py-12">
        <div className="container mx-auto flex justify-center px-4 opacity-20">
          <p className="text-center font-mono text-[8px] font-black tracking-[0.6em] uppercase">
            AEMZA_MACKS_PRIVATE_REGISTRY // ARCHITECTURAL_INTEGRITY_VERIFIED
          </p>
        </div>
      </div>
    </section>
  );
});

ConversionPortal.displayName = "ConversionPortal";
