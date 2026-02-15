/**
 * [SHARED COMPONENT]: FLOATING_CONTAINER v1.1.0 (PHYSICS_OPTIMIZED)
 * [STRATEGY]: Throttled Scroll Listener | AnimatePresence Lifecycle | GPU-Leaning
 * [MAINTAINER]: AEMZA MACKS
 */

"use client";

import React, { useEffect, useState, type ReactNode, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: ReactNode;
  readonly triggerY?: number;
  readonly className?: string;
  readonly id?: string;
}

/* --- 01. NEURAL PHYSICS VARIANTS --- */
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.85,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 1,
    },
  },
};

export const FloatingContainer = ({
  children,
  triggerY = 100,
  className,
  id,
}: FloatingContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // [STRATEGY]: Throttled Scroll Logic
  // ป้องกันการยิง State Update รัวๆ เกินความจำเป็นขณะเลื่อนหน้าจอ
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > triggerY && !isVisible) {
      setIsVisible(true);
    } else if (currentScrollY <= triggerY && isVisible) {
      setIsVisible(false);
    }
  }, [triggerY, isVisible]);

  useEffect(() => {
    // ใช้ requestAnimationFrame หรือจัดการ Event แบบ Passive เพื่อรักษาความลื่นไหลของ UI
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id={id}
          key={id || "floating-node"} // บังคับ Re-render Lifecycle สำหรับ AnimatePresence
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          style={{ willChange: "transform, opacity" }} // [PERF]: บังคับใช้ GPU เร่งความเร็ว
          className={cn("pointer-events-none fixed", className)}
        >
          {/* คืนค่า pointer-events เพื่อให้ปุ่มภายในคลิกได้ */}
          <div className="pointer-events-auto">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
