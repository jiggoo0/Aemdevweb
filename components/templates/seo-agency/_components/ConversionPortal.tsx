"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

export const ConversionPortal = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32">
      <div className="relative overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-black p-12 text-white md:p-24">
        <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.9] font-black uppercase italic md:text-7xl">
              Request <br /> <span className="text-[var(--brand-primary)]">Feasibility.</span>
            </h2>
            <p className="text-xl font-medium italic opacity-80">
              วิเคราะห์ความเป็นไปได้ของโดเมนคุณ และรับแผนโครงสร้าง SEO ฉบับเจาะลึกฟรี
              โดยผู้เชี่ยวชาญระดับ Architect
            </p>
          </div>
          <div>
            <Button
              variant="specialist"
              size="lg"
              className="h-24 w-full text-2xl uppercase italic"
            >
              วิเคราะห์แผนงาน SEO ฟรี
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
