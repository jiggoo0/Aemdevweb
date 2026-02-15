"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

export const RegionalAction = ({ province }: { province: string }) => {
  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="relative overflow-hidden rounded-[var(--radius)] bg-[var(--brand-primary)] p-12 text-[var(--surface-main)] md:p-24">
        <div className="relative z-10 max-w-4xl space-y-10">
          <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.85] font-black uppercase italic md:text-8xl">
            Deploy_Success <br /> In_{province}.
          </h2>
          <p className="max-w-2xl text-xl font-medium italic opacity-90 md:text-2xl">
            ปลดล็อกศักยภาพธุรกิจของคุณใน {province}{" "}
            ด้วยโครงสร้างเว็บไซต์ระดับวิศวกรรมที่ออกแบบมาเพื่อคุณโดยเฉพาะ
          </p>
          <div className="pt-6">
            <Button variant="specialist" size="lg" className="h-20 px-12 text-xl">
              วิเคราะห์แผนงาน {province}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
