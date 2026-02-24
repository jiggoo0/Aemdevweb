/**
 * [SECTION COMPONENT]: INQUIRY_PORTAL v18.0.3 (LINK_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Shimmer CTA | Zero-Framer
 */

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

export const InquiryPortal = () => {
  return (
    <section className="group relative mt-32 overflow-hidden rounded-[var(--radius)] bg-[var(--brand-primary)] p-12 text-[var(--surface-main)] shadow-xl transition-all duration-500 md:p-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 rotate-12 p-10 opacity-10 transition-transform duration-1000 group-hover:scale-110">
        <Image
          src="/logo-icon.svg"
          alt="System Decoration Logo"
          width={256}
          height={256}
          className="grayscale invert"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-8">
        <h2 className="text-4xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
          Ready to <br />
          <span className="text-white/70">Deploy?</span>
        </h2>

        <p className="text-xl leading-relaxed font-medium italic opacity-90">
          ต้องการเปลี่ยนระบบ Catalog ให้เป็นอาวุธการขายที่ทรงพลังที่สุดไหมครับ?
          เราพร้อมเชื่อมต่อระบบ RFQ เข้ากับทีมวิศวกรของคุณโดยเฉพาะ
        </p>

        <div className="pt-4">
          <Button
            asChild
            variant="specialist"
            size="lg"
            className="group/btn relative h-20 overflow-hidden px-12 text-lg font-black tracking-widest uppercase transition-transform active:scale-95"
          >
            <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center gap-4">
                <IconRenderer name="FileText" size={24} className="text-[var(--brand-primary)]" />
                Get_RFQ_Consult
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
