/**
 * [COMPONENT]: FLASH_SALE_TIMER v17.9.2 (CONVERSION_BOOSTER)
 * [STRATEGY]: Psychology of Urgency | Hydration-Safe | Low-Latency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export function FlashSaleTimer() {
  // [STATE]: ตั้งค่าเวลาเริ่มต้น (เช่น 2 ชั่วโมง 34 นาที 00 วินาที)
  // ในระบบจริงอาจจะดึงจาก API หรือคำนวณจากเวลาปัจจุบันจนถึงสิ้นวัน
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer); // จบการนับถอยหลัง
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // [HYDRATION_GUARD]: ป้องกัน Layout Shift และ Error บน Server-Side Rendering
  if (!isMounted) return <div className="h-24 animate-pulse rounded-2xl bg-rose-50/50" />;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="relative flex flex-col items-center justify-between gap-6 rounded-2xl bg-rose-600 p-6 shadow-xl shadow-rose-200 md:flex-row md:p-8">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-10">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center gap-4 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Timer className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-wider uppercase md:text-2xl">
              โปรโมชั่นกำลังจะหมดลง!
            </h3>
            <p className="text-sm font-medium text-rose-100">
              จองสิทธิ์ราคาพิเศษนี้ภายในเวลาที่กำหนดเท่านั้น
            </p>
          </div>
        </div>

        {/* [TIMER_ENGINE]: ดีไซน์เน้นตัวเลขขนาดใหญ่ (High-Visibility) */}
        <div className="relative z-10 flex items-center gap-2">
          <TimeUnit value={formatNumber(timeLeft.hours)} label="ชั่วโมง" />
          <span className="mb-6 text-2xl font-bold text-white">:</span>
          <TimeUnit value={formatNumber(timeLeft.minutes)} label="นาที" />
          <span className="mb-6 text-2xl font-bold text-white">:</span>
          <TimeUnit value={formatNumber(timeLeft.seconds)} label="วินาที" />
        </div>
      </div>
    </div>
  );
}

/**
 * [SUB-COMPONENT]: TIME_UNIT
 * ดีไซน์ช่องแสดงผลเวลาแยกส่วนเพื่อให้ดูสะอาดตาและเป็นมืออาชีพ
 */
function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-2xl font-black text-rose-600 shadow-inner md:h-16 md:w-16 md:text-3xl">
        {value}
      </div>
      <span className="text-[10px] font-bold tracking-widest text-rose-100 uppercase">{label}</span>
    </div>
  );
}
