"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";

export const RegionalAction = ({ province }: { province: string }) => {
  return (
    <section className="container mx-auto px-4 pt-12 pb-32">
      <div className="group relative overflow-hidden rounded-[var(--radius)] bg-[var(--brand-primary)] p-12 text-white shadow-xl transition-transform hover:-translate-y-1 md:p-24">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(/grid-pattern.svg)", backgroundSize: "30px" }}
        />

        <div className="relative z-10 max-w-4xl space-y-10">
          <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            Deploy_Success <br /> In_{province}.
          </h2>

          <p className="max-w-2xl text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
            ปลดล็อกศักยภาพธุรกิจของคุณใน{" "}
            <span className="underline decoration-2 underline-offset-4">{province}</span>{" "}
            ด้วยโครงสร้างเว็บไซต์ระดับวิศวกรรมที่ออกแบบมาเพื่อคุณโดยเฉพาะ
          </p>

          <div className="pt-8">
            <Link href="/contact" className="inline-block">
              <Button
                variant="default"
                size="lg"
                className="h-16 border-0 bg-white px-10 text-lg text-[var(--brand-primary)] shadow-lg hover:bg-white/90"
              >
                <span className="mr-3">วิเคราะห์แผนงาน {province}</span>
                <IconRenderer name="ArrowRight" size={20} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorate Circle */}
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full border-[20px] border-white/10 blur-xl transition-all duration-1000 group-hover:scale-150" />
      </div>
    </section>
  );
};
