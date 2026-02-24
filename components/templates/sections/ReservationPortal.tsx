/**
 * [SECTION COMPONENT]: RESERVATION_PORTAL v18.0.3 (LINK_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Shimmer CTA | Zero-Framer
 */

import React from "react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

export const ReservationPortal = () => {
  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="group relative overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-zinc-950 p-12 text-white transition-all duration-500 hover:border-[var(--brand-primary)]/60 md:p-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
              Secure your <br /> <span className="text-[var(--brand-primary)]">Gateway.</span>
            </h2>
            <p className="max-w-md text-xl leading-relaxed italic opacity-70">
              สัมผัสการพักผ่อนที่ออกแบบมาเพื่อความเงียบสงบและการทำงานอย่างมีสถาปัตยกรรม
              จองเพื่อรับสิทธิพิเศษสำหรับสมาชิก Early Node
            </p>
          </div>
          <div className="space-y-4">
            <Button
              asChild
              variant="specialist"
              size="lg"
              className="group/btn relative h-24 w-full overflow-hidden text-2xl tracking-widest uppercase italic transition-transform active:scale-95"
            >
              <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-4">
                  <IconRenderer
                    name="CalendarCheck"
                    size={32}
                    className="text-[var(--brand-primary)]"
                  />
                  Book_Now
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              </a>
            </Button>
            <p className="text-center font-mono text-[9px] tracking-[0.5em] uppercase opacity-40">
              Exclusive_Access_Only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
