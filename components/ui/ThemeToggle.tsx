/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v18.1.7 (STABILIZED)
 * [STRATEGY]: OKLCH Dynamic Glow | Hardware Compositing | Perceptual Color Matching
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState, memo, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

const FLUID_EASE = [0.16, 1, 0.3, 1] as const;

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [HYDRATION_GUARD]: ป้องกัน Hydration Mismatch ระหว่าง Server/Client
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  // [MEMORY_STABILIZATION]: ล็อกฟังก์ชันไว้ใน Heap เพื่อประสิทธิภาพของ memo
  const handleToggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  if (!mounted) {
    return (
      <div 
        className="h-10 w-10 rounded-xl border border-border/10 bg-surface-card/50" 
        aria-hidden="true" 
      />
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "สลับเป็นโหมดกลางวัน" : "สลับเป็นโหมดกลางคืน"}
      onClick={handleToggle}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl",
        "transform-gpu border transition-all duration-500 will-change-transform",
        "active:scale-90 focus-visible:ring-2 focus-visible:ring-brand-primary/50 outline-none",
        // [COLOR_ENGINE]: ใช้ระบบสี OKLCH ผ่าน Tailwind Utility
        "border-amber-400/20 bg-amber-400/5 hover:border-amber-400/50",
        "dark:border-brand-primary/20 dark:bg-brand-primary/5 dark:hover:border-brand-primary/50"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: 12, opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: -12, opacity: 0, rotate: 45, scale: 0.5 }}
          transition={{ duration: 0.4, ease: FLUID_EASE }}
          className="relative z-10"
        >
          <IconRenderer
            name={isDark ? "Moon" : "Sun"}
            size={18}
            className={cn(
              "transition-colors duration-500",
              "text-amber-500 dark:text-brand-primary"
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* [ATMOSPHERIC_GLOW]: แยก Layer ออกมาเพื่อทำ GPU Compositing
        - การใช้ Shadow บน OKLCH ให้ค่าความสว่างที่ตรงตามการรับรู้ของมนุษย์ (Perceptual Uniformity)
        - ใช้ opacity transition แทนการเปลี่ยนสี Shadow โดยตรงเพื่อป้องกันกระตุก
      */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          // Light Mode Glow (Amber OKLCH)
          "bg-amber-400/10 shadow-[0_0_20px_oklch(0.85_0.15_90/0.3)]",
          // Dark Mode Glow (Brand Primary OKLCH)
          "dark:bg-brand-primary/10 dark:shadow-[0_0_20px_oklch(var(--brand-primary-raw)/0.25)]"
        )}
        aria-hidden="true"
      />
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";

export default memo(ThemeToggle);
