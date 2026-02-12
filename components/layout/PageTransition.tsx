/**
 * [SYSTEM COMPONENT]: PAGE_TRANSITION_ENGINE v17.9.9 (STABILIZED_FINAL)
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
 * @description หน่วยประมวลผลแอนิเมชันการเปลี่ยนหน้าแบบ Seamless (Zero-Jitter)
 * [ENGINEERING]: ใช้ GPU Acceleration และตัด Effect ที่กินทรัพยากร (เช่น Blur) ออกเพื่อความลื่นไหลสูงสุด
 */
const PageTransition = ({ children, className }: PageTransitionProps) => {
  // [LOGIC]: ใช้ Pathname เป็น Key เพื่อ Trigger Animation เมื่อเปลี่ยน Route
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        /* [PHYSICS]: Neural easing for premium feel (Specialist Curve) */
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1], // Consistent with other components
        }}
        className={cn(
          "flex min-h-full w-full flex-1 flex-col",
          "transform-gpu will-change-[transform,opacity]", // [GPU_ACCELERATION]
          className,
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(PageTransition);
