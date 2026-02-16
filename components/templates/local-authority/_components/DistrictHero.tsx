"use client";

import React, { useState, useEffect } from "react";
// [HOTFIX]: Comment out framer-motion temporarily to isolate the crash
// import { motion, AnimatePresence } from "framer-motion";

interface DistrictHeroProps {
  districts: string[];
  province: string;
}

export const DistrictHero = ({ districts = [], province }: DistrictHeroProps) => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  // [HYDRATION_FIX]: รอให้ Component Mount ก่อนค่อยทำงาน
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || districts.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % districts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [districts, mounted]);

  // [SAFETY]: ถ้าไม่มีข้อมูล หรือยังไม่ Mount ให้ Return Null ไปเลยเพื่อความปลอดภัย
  if (!mounted || !districts || districts.length === 0) return null;

  const currentDistrict = districts[index] || districts[0] || "เมือง";

  return (
    <div className="bg-[var(--brand-primary)]/10 border-y border-[var(--foreground)]/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <span className="font-mono text-[10px] font-black tracking-[0.2em] uppercase opacity-50">
            Regional_Specialist_Coverage:
          </span>
          
          <div className="flex items-center gap-2 text-sm font-bold italic">
            <span>ครอบคลุมพื้นที่</span>
            <div className="relative h-6 min-w-[120px] text-center md:text-left">
              {/* [HOTFIX]: ใช้ CSS Animation ธรรมดาแทน Framer Motion ชั่วคราว */}
              <span className="absolute inset-0 block text-[var(--brand-primary)] transition-opacity duration-500">
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
