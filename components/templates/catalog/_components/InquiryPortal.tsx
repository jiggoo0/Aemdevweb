"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

/**
 * @component InquiryPortal
 * @description ส่วนท้ายของหน้า Catalog สำหรับการปิดการขาย (Conversion)
 * รองรับระบบ RFQ และการปรับอัตลักษณ์ตามตัวแปร CSS
 */
export const InquiryPortal = () => {
  return (
    <section className="relative mt-32 overflow-hidden rounded-[var(--radius)] bg-[var(--brand-primary)] p-12 text-[var(--surface-main)] md:p-20">
      {/* [DECORATION]: โลโก้พื้นหลัง 
        ใช้ Next.js Image เพื่อเพิ่มประสิทธิภาพ (LCP Optimization)
      */}
      <div className="absolute top-0 right-0 rotate-12 p-10 opacity-10">
        <Image
          src="/logo-icon.svg"
          alt="System Decoration Logo"
          width={256}
          height={256}
          className="grayscale invert"
          priority={false}
        />
      </div>

      {/* [CONTENT]: ส่วนเนื้อหาหลัก */}
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
            variant="specialist"
            size="lg"
            className="h-20 px-12 text-lg font-black tracking-widest uppercase"
          >
            ขอใบเสนอราคาโครงการ (RFQ)
          </Button>
        </div>
      </div>
    </section>
  );
};
