/**
 * [SECTION COMPONENT]: CONSULT_GATEWAY v18.0.3 (LINK_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Shimmer CTA | Zero-Framer
 */

import React from "react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

export const ConsultGateway = () => {
  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="group hover:shadow-glow-sm relative overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-[var(--surface-card)] p-12 transition-all duration-500 hover:border-[var(--brand-primary)]/60 md:p-24">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_70%)] opacity-[0.03]" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.9] font-black uppercase italic md:text-7xl">
              Strategic <br /> <span className="text-[var(--brand-primary)]">Consultancy.</span>
            </h2>
            <p className="text-xl leading-relaxed font-medium text-[var(--text-primary)]/70 italic">
              พร้อมวางโครงสร้างธุรกิจของคุณให้เป็นผู้นำในตลาดดิจิทัลยุค 2026 หรือยังครับ?
              นายเอ็มซ่ามากส์ พร้อมเป็นที่ปรึกษาเชิงเทคนิคให้กับคุณ
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              asChild
              variant="neo"
              size="lg"
              className="group/btn relative h-20 overflow-hidden text-xl transition-transform active:scale-95 md:rounded-[var(--radius)]"
            >
              <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-4">
                  <IconRenderer name="MessageCircle" size={24} className="text-white" />
                  เริ่มต้นวางแผนกลยุทธ์
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              </a>
            </Button>
            <p className="text-center font-mono text-[10px] tracking-widest uppercase opacity-40">
              Available_For_Exclusive_Partnership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
