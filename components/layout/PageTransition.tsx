/**
 * [SYSTEM COMPONENT]: PAGE_TRANSITION_ENGINE v17.3.9 (STABILIZED_FLOW)
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
 * @description หน่วยประมวลผลแอนิเมชันการเปลี่ยนหน้าแบบ Dynamic 
 * ออกแบบมาเพื่อลดค่า Interaction to Next Paint (INP)
 */
const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    /* [STRATEGY]: mode="wait" เพื่อให้หน้าเก่า Exit เสร็จสมบูรณ์ก่อนหน้าใหม่จะ Enter */
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        /* [PERFORMANCE]: เริ่มที่ 0.01 เพื่อบังคับให้ Browser สร้าง Layer ล่วงหน้า 
           โดยไม่เสียเวลาคำนวณ Paint จาก 0 จริงๆ 
        */
        initial={{ opacity: 0.01, y: 12 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        /* [NEURAL_PHYSICS]: ค่า Ease ที่ผ่านการคำนวณเพื่อความรู้สึก Snappy */
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.3 } // ให้ Opacity มาเร็วกว่าการขยับเล็กน้อย
        }}
        className={cn(
          "flex w-full flex-grow flex-col",
          /* [GPU_ACCELERATION]: ผลักภาระไปที่ GPU เพื่อรักษา 60FPS */
          "will-change-[transform,opacity]",
          className
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default memo(PageTransition);
