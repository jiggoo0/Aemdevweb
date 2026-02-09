/**
 * [SYSTEM COMPONENT]: PAGE_TRANSITION_ENGINE v17.4.6 (STABILIZED)
 * [STRATEGY]: Neural Transition | Frame-rate Stability | Theme Persistence
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
 * เพื่อยกระดับ UX ให้เทียบเท่าระดับสากล
 */
const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    /* [STRATEGY]: mode="wait" ล็อคให้หน้าเก่า Exit จนจบก่อน เพื่อป้องกัน Layout Shift */
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        /* [PERFORMANCE]: เริ่มที่ 0.01 แทน 0 เพื่อหลีกเลี่ยง Bug ของ Browser 
           ในการคำนวณ Layer ในบางสภาวะ 
        */
        initial={{ opacity: 0.01, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        /* [NEURAL_PHYSICS]: จังหวะการเคลื่อนไหวที่นุ่มนวลแต่ฉับไว */
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1], // Power4 Out Curve
          opacity: { duration: 0.3 },
        }}
        className={cn(
          "flex w-full flex-grow flex-col",
          /* [GPU_ACCELERATION]: ผลักภาระงานวาดไปที่การ์ดจอ เพื่อรักษา 60FPS ตลอดการเปลี่ยนหน้า */
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
