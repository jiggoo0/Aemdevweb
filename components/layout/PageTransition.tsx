/**
 * [SYSTEM COMPONENT]: PAGE_TRANSITION_ENGINE v17.4.7 (STABILIZED)
 * [STRATEGY]: Neural Transition | Frame-rate Stability | Layout Persistence
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
 * @description หน่วยประมวลผลแอนิเมชันการเปลี่ยนหน้าแบบ Seamless
 * พร้อมระบบ Layout Guard ป้องกันการกระพริบและ Footer ลอย
 */
const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    /* [STRATEGY]: mode="wait" ล็อคให้หน้าเก่า Exit จนจบก่อน เพื่อป้องกัน Layout Shift */
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        /* [PERFORMANCE]: เริ่มที่ 0.01 แทน 0 เพื่อหลีกเลี่ยง Bug ของ Browser 
           ในการคำนวณ Layer ในบางสภาวะ (Composite Layer Bug)
        */
        initial={{ opacity: 0.01, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        /* [NEURAL_PHYSICS]: จังหวะการเคลื่อนไหวที่นุ่มนวลแต่ฉับไว (Power4 Out) */
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.3 },
        }}
        className={cn(
          /* [LAYOUT GUARD]: 
             - flex-1: บังคับให้ยืดเต็มพื้นที่ที่เหลือ (แก้ Footer ลอย)
             - w-full: บังคับกว้างเต็มจอเสมอ
             - flex-col: จัดเรียงลูกหลานแนวตั้ง
          */
          "flex min-h-full w-full flex-1 flex-col",

          /* [GPU_ACCELERATION]: ผลักภาระงานวาดไปที่การ์ดจอ */
          "will-change-[transform,opacity]",
          className,
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(PageTransition);
