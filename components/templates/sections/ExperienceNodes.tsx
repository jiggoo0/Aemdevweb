/**
 * [SECTION COMPONENT]: EXPERIENCE_NODES v18.0.4 (SERVER_OPTIMIZED)
 * [STRATEGY]: Narrative Visuals | IntersectionObserver Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExperienceNodesProps {
  readonly isTourismHeavy?: boolean;
}

export const ExperienceNodes = ({ isTourismHeavy }: ExperienceNodesProps) => {
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
    <section ref={ref} className="overflow-hidden bg-[var(--brand-primary)]/5 py-24">
      <div className="container mx-auto px-4">
        <div className="grid h-full grid-cols-1 gap-6 lg:h-[700px] lg:grid-cols-12">
          {/* Main Visual Node */}
          <div
            className={cn(
              "group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-black p-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--brand-primary)]/40 lg:col-span-7",
              visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
            )}
          >
            {/* Background Image: Narrative Anchor */}
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60">
              <Image
                src={
                  isTourismHeavy
                    ? "/images/areas/chiang-mai-node.webp"
                    : "/images/shared/preview.webp"
                }
                alt="Experience Node Visual"
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="absolute top-0 right-0 origin-top-right rotate-90 p-8 font-mono text-[10px] tracking-[0.4em] text-white uppercase opacity-20">
              Identity_Node_Protocol
            </div>

            <div className="relative z-10 space-y-4 text-white">
              {isTourismHeavy && (
                <div className="mb-2 flex items-center gap-2 text-emerald-400">
                  <div className="h-1 w-8 rounded-full bg-emerald-400" />
                  <div className="h-1 w-4 rounded-full bg-emerald-400/30" />
                  <span className="font-mono text-[8px] font-bold tracking-widest uppercase">
                    Speed_Optimized
                  </span>
                </div>
              )}
              <h3 className="font-[family-name:var(--font-primary)] text-4xl leading-none font-black uppercase italic md:text-5xl">
                {isTourismHeavy ? "Global Speed & Mobile First." : "Advanced Infrastructure."}
              </h3>
              <p className="max-w-md italic opacity-80">
                {isTourismHeavy
                  ? "ในพื้นที่ที่มี Global Traffic หนาแน่น เว็บไซต์ของคุณต้องโหลดเสร็จในเสี้ยววินาทีเพื่อรั้งนักท่องเที่ยวจากทั่วโลก"
                  : "วางรากฐานระบบดิจิทัลที่เสถียรที่สุด เพื่อความสำเร็จที่วัดผลได้จริงของธุรกิจคุณ"}
              </p>
            </div>
          </div>

          {/* Side Nodes: Tactical Detail */}
          <div className="grid grid-rows-2 gap-6 lg:col-span-5">
            <div
              className={cn(
                "group flex flex-col justify-center rounded-[var(--radius)] bg-[var(--brand-primary)] p-10 text-white shadow-lg transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                {isTourismHeavy ? "Booking_Optimization" : "ROI_Strategy"}
              </h4>
              <p className="italic opacity-80">
                {isTourismHeavy
                  ? "เพิ่มอัตราการจองตรง (Direct Booking) ด้วย UX ที่ลื่นไหลบนทุกอุปกรณ์"
                  : "ออกแบบระบบที่เปลี่ยนผู้เข้าชมเป็นยอดขาย ด้วยการวิเคราะห์ข้อมูลพฤติกรรมจริง"}
              </p>
            </div>
            <div
              className={cn(
                "group rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-black p-10 text-white shadow-xl transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--brand-primary)]",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black text-[var(--brand-primary)] uppercase italic">
                {isTourismHeavy ? "Multi-Lingual_Node" : "Security_Ledger"}
              </h4>
              <p className="italic opacity-80">
                {isTourismHeavy
                  ? "รองรับการเข้าถึงจากทั่วโลกด้วยระบบ Multi-language และ CDN ระดับพรีเมียม"
                  : "ปกป้องข้อมูลพาร์ทเนอร์และลูกค้าด้วยระบบความปลอดภัยมาตรฐานสูงสุด"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
