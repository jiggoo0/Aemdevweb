/**
 * [SHARED COMPONENT]: FLOATING_CONTAINER v17.9.9 (STABILIZED)
 * [STRATEGY]: Passive Scroll Listener | GPU Composite Layering | Neural Spring Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: React.ReactNode;
  readonly triggerY?: number;
  readonly className?: string;
  readonly id?: string;
}

/**
 * @component FloatingContainer
 * @description คอมโพเนนต์พื้นฐานสำหรับจัดการ Visibility ตามระยะการ Scroll
 * [ENGINEERING]: รีด Performance ด้วยการข้ามขั้นตอน Re-render ที่ไม่จำเป็น
 */
export const FloatingContainer = memo(
  ({
    children,
    triggerY = 400,
    className = "fixed bottom-6 right-6",
    id,
  }: FloatingContainerProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);

    // [LOGIC]: ป้องกัน Hydration Mismatch บนอุปกรณ์ที่มี Latency สูง
    useEffect(() => {
      setMounted(true);

      const handleScroll = (): void => {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > triggerY);
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [triggerY]);

    // ห้าม Render บน Server เพื่อรักษาความเสถียรของโครงสร้าง DOM
    if (!mounted) return null;

    return (
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={id}
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1], // Specialist Grade: Custom Cubic Bezier
            }}
            // [PERFORMANCE]: บังคับใช้ GPU ในการวาด Layer เพื่อลด TBT
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
