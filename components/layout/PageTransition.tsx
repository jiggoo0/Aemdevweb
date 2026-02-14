/**
 * [SYSTEM COMPONENT]: PAGE_TRANSITION_ENGINE v17.9.75 (GPU_ACCELERATED)
 * [STRATEGY]: Instant-First Logic | GPU Compositing | Memory-Safe Unmounting
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

/**
 * @component PageTransition
 * @description หน่วยประมวลผลแอนิเมชันการเปลี่ยนหน้า
 * [ENGINEERING]: ปรับลดระยะการเคลื่อนที่ (Distance) เพื่อป้องกัน Layout Shift
 * และลด Duration เพื่อเพิ่ม Perceived Speed ให้รู้สึกเข้าถึงข้อมูลได้ทันที
 */
const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    /* [STRATEGY]: mode="popLayout" ช่วยให้ Component ใหม่ Render ทันที 
       โดยไม่ต้องรอตัวเก่า Unmount จนจบ (ลดอาการจอขาววูบวาบ) */
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        /* [TUNING]: ลดระยะ y offset จาก 15px -> 8px 
           เพื่อให้ Transition ดู 'แพง' และนิ่งขึ้น (Stable Feel) */
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.32, // [SPEED]: เร็วขึ้นเล็กน้อยเพื่อความทันใจ
          ease: [0.22, 1, 0.36, 1], // Custom Ease: "Specialist Out-Quint"
        }}
        className={cn(
          "bg-surface-main relative flex min-h-full w-full flex-1 flex-col",
          // [PERFORMANCE]: บังคับใช้ GPU Layer เพื่อความลื่นไหลระดับ 60fps+
          "transform-gpu will-change-[transform,opacity]",
          className,
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(PageTransition);
