"use client";
import React from "react";

export const ExperienceNodes = () => {
  return (
    <section className="bg-[var(--brand-primary)]/5 py-24">
      <div className="container mx-auto px-4">
        <div className="grid h-full grid-cols-1 gap-6 lg:h-[700px] lg:grid-cols-12">
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-12 lg:col-span-7">
            <div className="absolute top-0 right-0 origin-top-right rotate-90 p-8 font-mono text-[10px] tracking-[0.4em] uppercase opacity-20">
              Lat: 14.59 | Lng: 101.42
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="font-[family-name:var(--font-primary)] text-4xl leading-none font-black uppercase italic md:text-5xl">
                The Private <br /> Stargazing.
              </h3>
              <p className="max-w-md italic opacity-60">
                สัมผัสประสบการณ์ดูดาวในมุมที่เงียบสงบที่สุดของเขาใหญ่
                พร้อมระบบกล้องดูดาวส่วนตัวทุกยูนิต
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6 lg:col-span-5">
            <div className="flex flex-col justify-center rounded-[var(--radius)] bg-[var(--brand-primary)] p-10 text-white">
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                Culinary_Workshop
              </h4>
              <p className="italic opacity-80">
                เรียนรู้การปรุงอาหารพื้นถิ่นจากวัตถุดิบ Organic ในพื้นที่
              </p>
            </div>
            <div className="rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-black p-10 text-white">
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                Mist_Photography
              </h4>
              <p className="italic opacity-80">
                บันทึกภาพทะเลหมอกยามเช้าจากจุดชมวิวที่เป็นความลับของรีสอร์ท
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
