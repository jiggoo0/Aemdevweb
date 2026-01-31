/** @format */

import React from "react";
import {
  Zap,
  Search,
  Server,
  Wrench,
  Lock,
  PenTool,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

/**
 * FeatureItem - รูปแบบข้อมูลจุดเด่นแต่ละข้อ
 */
interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

/**
 * RentalFeaturesProps - การกำหนดข้อมูลที่จะส่งเข้ามาในส่วนนี้
 */
interface RentalFeaturesProps {
  data: {
    title: string;
    list: FeatureItem[];
  };
}

/**
 * RentalFeatures - ส่วนแสดงจุดเด่นและมาตรฐานของระบบเว็บเช่า
 * แนวคิด: นำเสนอสิ่งที่ลูกค้าจะได้รับจริง ผ่านข้อมูลที่เข้าใจง่ายและชัดเจน
 * โดย: นายเอ็มซ่ามากส์ (Specialist & Web Architect)
 */
export const RentalFeatures = ({ data }: RentalFeaturesProps) => {
  /**
   * getIcon - ฟังก์ชันดึงไอคอนตามชื่อที่ระบุในไฟล์ข้อมูล
   * ช่วยให้เปลี่ยนไอคอนได้ทันทีจากไฟล์ data.ts โดยไม่ต้องแก้โค้ดครับ
   */
  const getIcon = (name: string) => {
    const icons: Record<string, LucideIcon> = {
      Zap,
      Search,
      Server,
      Wrench,
      Lock,
      PenTool,
      ShieldCheck,
    };
    const Icon = icons[name] || Zap;
    return <Icon size={28} strokeWidth={1.5} />;
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24 lg:py-40"
    >
      {/* ลายตารางพื้นหลังจางๆ เพื่อเพิ่มความเนี้ยบสไตล์ Modern UI */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* หัวข้อส่วนจุดเด่น: เน้นความชัดเจนและภูมิฐาน */}
        <div className="mb-24 text-center">
          <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
            {data.title}
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-emerald-500" />
        </div>

        {/* ตารางแสดงรายการจุดเด่น (Feature Grid) */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.list.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group hover:shadow-3xl relative rounded-[3rem] border border-slate-100 bg-slate-50/50 p-12 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/20 hover:bg-white hover:shadow-emerald-500/5"
            >
              {/* ส่วนแสดงไอคอนประจำจุดเด่น */}
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm ring-1 ring-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                {getIcon(item.icon)}
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-black tracking-tight text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
                  {item.title}
                </h3>

                <p className="font-body text-base leading-relaxed font-bold text-slate-500">
                  {item.desc}
                </p>
              </div>

              {/* สัญลักษณ์ตกแต่งจางๆ ที่มุมการ์ด */}
              <div className="absolute top-8 right-8 h-8 w-8 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
                <Zap className="h-full w-full text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
