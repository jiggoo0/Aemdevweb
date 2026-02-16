"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DistrictHeroProps {
  districts: string[];
  province: string;
}

/**
 * @component DistrictHero
 * @description สร้างความโดดเด่นเหนือระดับด้วยการสุ่มชื่ออำเภอในพื้นที่
 * เพื่อสร้าง "Local Connection" กับมนุษย์ที่เข้ามาใช้งาน
 */
export const DistrictHero = ({ districts, province }: DistrictHeroProps) => {
  const [index, setIndex] = useState(0);

  // [LOGIC]: Shuffle ชื่ออำเภอทุก 3 วินาที เพื่อสร้าง Dynamic Experience
  useEffect(() => {
    if (districts.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % districts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [districts]);

  if (!districts.length) return null;

  return (
    <div className="border-y border-[var(--foreground)]/5 bg-[var(--brand-primary)]/10 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <span className="font-mono text-[10px] font-black tracking-[0.2em] uppercase opacity-50">
            Regional_Specialist_Coverage:
          </span>

          <div className="flex items-center gap-2 text-sm font-bold italic">
            <span>ครอบคลุมพื้นที่</span>
            <div className="relative h-6 min-w-[120px] overflow-hidden text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={districts[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "stiff" }}
                  className="absolute inset-0 block text-[var(--brand-primary)]"
                >
                  อ. {districts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>จ. {province}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
