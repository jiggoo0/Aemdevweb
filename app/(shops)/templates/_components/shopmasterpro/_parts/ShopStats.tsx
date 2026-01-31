/** @format */

import React from "react";
import { Truck, ShieldCheck, CreditCard, LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions)                                           */
/* -------------------------------------------------------------------------- */

interface ShopStatItem {
  icon?: string; // กำหนดเป็นทางเลือกเพื่อป้องกันปัญหาหากข้อมูลต้นทางส่งมาไม่ครบ
  title: string;
  desc: string;
}

interface ShopStatsProps {
  data: ShopStatItem[];
}

/**
 * ShopStats - ส่วนแสดงข้อมูลการรับประกันและบริการ (Trust Signals)
 * ระบบจัดการไอคอนแบบมีแผนสำรอง (Fallback) เพื่อความต่อเนื่องของการแสดงผล
 */
export const ShopStats = ({ data }: ShopStatsProps) => {
  /**
   * พิกัดการดึงไอคอน:
   * ตรวจสอบจากชื่อสตริงที่ส่งมา หากไม่พบจะสลับไปใช้ไอคอนตามลำดับพิกัดแทน
   */
  const getIcon = (name?: string, index?: number) => {
    const icons: Record<string, LucideIcon> = {
      Truck,
      ShieldCheck,
      CreditCard,
    };

    // ตรวจสอบพิกัดชื่อไอคอนในระบบ
    if (name && icons[name]) {
      return React.createElement(icons[name], { size: 24 });
    }

    // พิกัดสำรองในกรณีที่ข้อมูลไม่ระบุชื่อไอคอน
    const fallbackIcons = [Truck, ShieldCheck, CreditCard];
    const FallbackIcon = fallbackIcons[index ?? 0] || ShieldCheck;
    return <FallbackIcon size={24} />;
  };

  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 text-left md:grid-cols-3">
          {data.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group flex items-center gap-6"
            >
              {/* พิกัดแสดงผลไอคอน: เน้นการโต้ตอบที่นุ่มนวลเมื่อผู้ใช้งานชี้เมาส์ */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                {getIcon(item.icon, i)}
              </div>

              <div className="space-y-1">
                <h4 className="font-heading text-sm font-black tracking-tight text-slate-950 uppercase italic">
                  {item.title}
                </h4>
                <p className="font-body text-xs font-bold text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
