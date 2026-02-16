"use client";

import React, { useState, useEffect, useMemo } from "react";

interface DistrictHeroProps {
  districts: string[];
  province: string;
}

/**
 * [COMPONENT]: DISTRICT_HERO_V18_1_3
 * [STRATEGY]: Hydration-Safe Shuffle | Zero-CLS Placeholder | Layout Guard
 */
export const DistrictHero = ({ districts = [], province }: DistrictHeroProps) => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  // [CHECK]: เตรียมข้อมูลให้พร้อมและป้องกันค่าว่าง
  const safeDistricts = useMemo(() => 
    districts.length > 0 ? districts : ["เมือง"], 
  [districts]);

  // [HYDRATION_FIX]: ป้องกันการ Render สุ่มบน Server
  useEffect(() => {
    setMounted(true);
  }, []);

  // [INTERVAL_LOGIC]: ระบบสลับชื่ออำเภอ
  useEffect(() => {
    if (!mounted || safeDistricts.length <= 1) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeDistricts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [safeDistricts, mounted]);

  // [PLACEHOLDER_STRATEGY]: แสดงพื้นที่ว่างที่มีความสูงเท่าเดิมเพื่อป้องกัน Layout Shift (CLS)
  if (!mounted) {
    return (
      <div className="bg-[var(--brand-primary)]/5 border-y border-transparent py-4 opacity-0">
        <div className="container mx-auto px-4 h-6" />
      </div>
    );
  }

  // [SAFETY]: ดึงข้อมูลอำเภอปัจจุบันอย่างปลอดภัย
  const currentDistrict = safeDistricts[index] || safeDistricts[0];

  return (
    <div className="bg-[var(--brand-primary)]/10 border-y border-[var(--foreground)]/5 py-4 transition-opacity duration-700 ease-in animate-in fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <span className="font-mono text-[10px] font-black tracking-[0.2em] uppercase opacity-50">
            Regional_Specialist_Coverage:
          </span>
          
          <div className="flex items-center gap-2 text-sm font-bold italic text-[var(--foreground)]">
            <span>ครอบคลุมพื้นที่</span>
            <div className="relative h-6 w-[140px] overflow-hidden text-center md:text-left">
              {/* [CSS_ANIMATION_ENGINE]: สลับชื่ออำเภอด้วยคลาส Tailwind ธรรมดาเพื่อประสิทธิภาพสูงสุด */}
              <span 
                key={currentDistrict} // ใช้ key เพื่อบังคับ CSS Animation ใหม่ทุกครั้งที่เปลี่ยนชื่อ
                className="absolute inset-0 block text-[var(--brand-primary)] animate-in slide-in-from-bottom-1 fade-in duration-500"
              >
                อ. {currentDistrict}
              </span>
            </div>
            <span>จ. {province}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
