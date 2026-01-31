/** @format */

import React from "react";
import { Star, MapPin, LayoutGrid, ShieldCheck } from "lucide-react";

interface HotelStatsProps {
  data: {
    label: string;
    value: string;
  }[];
}

export const HotelStats = ({ data }: HotelStatsProps) => {
  // ฟังก์ชันเลือกไอคอนให้เหมาะสมกับหัวข้อ (เลือกตามลำดับข้อมูล)
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Star className="text-emerald-500" size={24} />;
      case 1:
        return <MapPin className="text-emerald-500" size={24} />;
      case 2:
        return <LayoutGrid className="text-emerald-500" size={24} />;
      default:
        return <ShieldCheck className="text-emerald-500" size={24} />;
    }
  };

  return (
    <section className="relative z-20 -mt-16 pb-20 lg:-mt-20">
      <div className="container mx-auto px-6">
        {/* กล่องสถิติแบบยกตัว (Floating Card) เพื่อสร้างมิติให้กับหน้าเว็บ */}
        <div className="rounded-[3rem] border border-slate-50 bg-white p-10 shadow-2xl shadow-slate-200/60 lg:p-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-20">
            {data.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
              >
                {/* ส่วนไอคอนพร้อมวงกลมพื้นหลังบางๆ */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white">
                  {getIcon(i)}
                </div>

                <div className="space-y-1">
                  <p className="font-prompt text-3xl font-black tracking-tighter text-slate-950 lg:text-4xl">
                    {item.value}
                  </p>
                  <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                    {item.label}
                  </p>
                </div>

                {/* เส้นตกแต่งที่แสดงเฉพาะบน Desktop ยกเว้นตัวสุดท้าย */}
                {i < data.length - 1 && (
                  <div className="absolute top-1/2 right-0 hidden h-12 w-px -translate-y-1/2 bg-slate-100 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ข้อความยืนยันคุณภาพเทมเพลตสำเร็จรูป พร้อมใช้งาน */}
        <div className="mt-12 text-center">
          <p className="text-[9px] font-black tracking-[0.4em] text-slate-300 uppercase">
            Verified Performance Structure by{" "}
            <span className="text-emerald-500/50">AEMDEVWEB</span>
          </p>
        </div>
      </div>
    </section>
  );
};
