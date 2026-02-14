/**
 * [SHARED COMPONENT]: FLOATING_CONTAINER v17.9.102 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Passive Scroll Listener | GPU Composite Layering | Neural Spring Physics
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: React.ReactNode;
  readonly triggerY?: number; // ระยะ Scroll ขั้นต่ำที่จะเริ่มแสดงผล (px)
  readonly className?: string;
  readonly id?: string;
}

/**
 * @component FloatingContainer
 * @description คอมโพเนนต์พื้นฐานจัดการ Visibility ขององค์ประกอบลอยตัวตามระยะ Scroll
 */
export const FloatingContainer = memo(
  ({
    children,
    triggerY = 400,
    className = "fixed bottom-6 right-6",
    id = "floating-node",
  }: FloatingContainerProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);

    // [LOGIC]: ป้องกัน Hydration Mismatch และจัดการ High-Performance Scroll Listener
    useEffect(() => {
      setMounted(true);

      const handleScroll = (): void => {
        // [OPTIMIZATION]: ใช้ rAF เพื่อรันโค้ดสอดคล้องกับจังหวะการวาดภาพของเบราว์เซอร์
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const shouldShow = currentScroll > triggerY;

          // State Update Lock: อัปเดตเฉพาะเมื่อมีการเปลี่ยนแปลงสถานะจริงเท่านั้น
          setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [triggerY]);

    // [ANTI_JANK]: ห้ามเรนเดอร์บน Server เพื่อป้องกัน DOM Structure Mismatch
    if (!mounted) return null;

    return (
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={id}
            initial={{ y: 40, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: 40, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 28,
              mass: 0.6,
            }}
            // [GPU_ACCELERATED]: บังคับใช้ GPU วาด Layer เพื่อลด TBT (Total Blocking Time)
            className={cn("z-[60] transform-gpu will-change-transform", className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

FloatingContainer.displayName = "FloatingContainer";
