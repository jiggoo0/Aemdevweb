"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

export const ConsultGateway = () => {
  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="relative overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-[var(--surface-card)] p-12 md:p-24">
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
            <Button variant="neo" size="lg" className="h-20 text-xl md:rounded-[var(--radius)]">
              เริ่มต้นวางแผนกลยุทธ์
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
