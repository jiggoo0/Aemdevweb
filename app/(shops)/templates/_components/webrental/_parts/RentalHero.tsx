/** @format */

import React from "react";
import { ArrowRight, Zap } from "lucide-react";

/**
 * RentalHeroProps - กำหนดโครงสร้างข้อมูลสำหรับส่วนหัวหน้าเว็บ
 * เน้นความชัดเจนของข้อมูลเพื่อการตัดสินใจที่รวดเร็ว
 */
interface RentalHeroProps {
  data: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    priceLabel: string;
    priceValue: string;
  };
}

/**
 * RentalHero - ส่วนเปิดตัวแผนงานเช่าเว็บไซต์รุ่นพรีเมียม
 * แนวคิด: สร้างความมั่นใจผ่านดีไซน์ที่ดูภูมิฐานและความโปร่งใสของราคา
 * โดย: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const RentalHero = ({ data }: RentalHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white lg:pt-48 lg:pb-40">
      {/* [ส่วนที่ 0]: งานดีไซน์พื้นหลัง (Background Visuals)
          วางลายตาราง Grid และแสงเงาจางๆ เพื่อเพิ่มมิติความเนี้ยบสไตล์ Modern UI
      */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      {/* แสงเรืองแสงด้านหลัง (Soft Glow) เพิ่มความลึกให้กับตัวอักษร */}
      <div
        className="absolute top-0 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* [ส่วนที่ 1]: ป้ายสถานะและกลุ่มเป้าหมาย (Status Badge) */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase italic shadow-2xl">
          <div className="relative flex h-2 w-2">
            <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <div className="relative h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          {data.badge}
        </div>

        {/* [ส่วนที่ 2]: พาดหัวหลัก (Main Heading)
            เน้นความดุดันและทรงพลัง สื่อถึงความรวดเร็วของระบบงานปี 2026
        */}
        <h1 className="font-heading mb-8 text-5xl leading-[1] font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-9xl">
          {data.title} <br />
          <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent">
            {data.highlight}
          </span>
        </h1>

        <p className="font-body mx-auto mb-16 max-w-3xl text-lg leading-relaxed font-bold text-slate-400 md:text-xl lg:text-2xl">
          {data.description}
        </p>

        {/* [ส่วนที่ 3]: พื้นที่ปิดการขาย (CTA Area)
            โชว์งบประมาณเริ่มต้นที่คุ้มค่าและปุ่มเริ่มแผนงาน
        */}
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-2">
            <p className="font-heading text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase italic">
              {data.priceLabel}
            </p>
            <div className="flex items-baseline justify-center gap-3">
              <span className="font-heading text-7xl font-black tracking-tighter text-white italic md:text-9xl">
                {data.priceValue}
              </span>
              <span className="font-heading text-xl font-black text-slate-500 uppercase italic">
                THB / Month
              </span>
            </div>
          </div>

          <button className="group font-heading hover:shadow-3xl mt-8 inline-flex items-center gap-4 rounded-[2rem] bg-emerald-600 px-12 py-6 text-[12px] font-black tracking-[0.3em] text-white uppercase italic transition-all hover:bg-emerald-500 hover:shadow-emerald-600/20 active:scale-95">
            เริ่มแผนงานธุรกิจวันนี้
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-2"
            />
          </button>

          {/* ตอกย้ำความยืดหยุ่นของระบบงาน */}
          <div className="mt-6 flex items-center gap-3">
            <Zap size={14} className="text-emerald-500" />
            <p className="font-body text-[10px] font-bold tracking-widest text-slate-600 uppercase">
              ปรับเปลี่ยนแผนงานได้ตลอดเวลาตามความต้องการครับ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
