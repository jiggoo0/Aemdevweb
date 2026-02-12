/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Hydration-Safe State | Neural Physics | Adaptive Glow Engine
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useEffect, useState, memo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * @component ThemeToggle
 * @description หน่วยสลับโหมดการแสดงผลที่ใช้ Neural Animation Curve
 * [ENGINEERING]: ใช้ resolvedTheme เพื่อความแม่นยำในโหมด System Preference
 */
const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [LOGIC]: Hydration Guard - ป้องกันปัญหา State Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // [ZERO_CLS]: Skeleton State ที่มีขนาดเท่าปุ่มจริง 100%
  if (!mounted) {
    return (
      <div
        className="border-border/50 bg-surface-card h-10 w-10 rounded-xl border opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button" // [SAFETY]: ป้องกัน Form Submission โดยไม่ตั้งใจ
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl",
        "border-border/50 bg-surface-card border transition-all duration-500",
        "hover:border-brand-primary/50 hover:shadow-glow active:scale-95",
        "transform-gpu will-change-transform", // [PERFORMANCE]: GPU Acceleration
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark-icon" : "light-icon"}
          /* [NEURAL_PHYSICS]: การเคลื่อนไหวแบบพุ่งออกและหมุนวนนุ่มนวล (Specialist Curve) */
          initial={{ y: 15, opacity: 0, rotate: -90, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ y: -15, opacity: 0, rotate: 90, filter: "blur(4px)" }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <IconRenderer
            name={isDark ? "Moon" : "Sun"}
            size={18}
            strokeWidth={2.5}
            className={cn(
              "transition-colors duration-500",
              isDark ? "text-brand-primary" : "text-amber-500",
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Glow: สร้างบรรยากาศรอบปุ่มตามสถานะโหมด */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isDark ? "bg-brand-primary/10" : "bg-amber-500/10",
        )}
      />

      {/* Neural Indicator: จุดระบุสถานะขนาดเล็ก */}
      <div
        className={cn(
          "absolute top-1.5 right-1.5 h-1 w-1 rounded-full transition-all duration-500",
          isDark
            ? "bg-brand-primary scale-125 shadow-[0_0_8px_var(--color-brand-primary)]"
            : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
        )}
      />
    </button>
  );
};

export default memo(ThemeToggle);
