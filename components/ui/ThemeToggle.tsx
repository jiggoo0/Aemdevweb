/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v18.0.7 (STABILIZED)
 * [STRATEGY]: OKLCH Dynamic Glow | Zero-Hardcoded Colors | GPU Physics
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState, memo, useMemo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [HYDRATION_GUARD]: ป้องกันปัญหา UI Mismatch ระหว่าง Server/Client
  useEffect(() => {
    setMounted(true);
  }, []);

  // [STRATEGY]: คำนวณสี Glow โดยอ้างอิงจาก CSS Variables (OKLCH Engine)
  // วิธีนี้ช่วยให้สีของปุ่มเปลี่ยนตาม Node Service (เช่น Emerald สำหรับ Local SEO)
  const glowStyles = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return {
      container: isDark 
        ? "border-brand-primary/20 bg-brand-primary/5 hover:border-brand-primary/50" 
        : "border-amber-400/20 bg-amber-400/5 hover:border-amber-400/50",
      glow: isDark 
        ? "bg-brand-primary/10 shadow-[0_0_20px_oklch(var(--brand-primary-raw)/0.2)]" 
        : "bg-amber-400/15 shadow-[0_0_20px_oklch(0.8_0.15_90/0.2)]",
      icon: isDark ? "text-brand-primary" : "text-amber-500"
    };
  }, [resolvedTheme]);

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-xl border border-border/10 bg-surface-card/50"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl",
        "border transition-all duration-500 transform-gpu will-change-transform",
        "active:scale-90",
        glowStyles.container
      )}
      aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: 12, opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: -12, opacity: 0, rotate: 45, scale: 0.5 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1], // Apple-inspired fluid ease
          }}
          className="relative z-10"
        >
          <IconRenderer
            name={isDark ? "Moon" : "Sun"}
            size={18}
            className={cn("transition-colors duration-500", glowStyles.icon)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Glow: Dynamic OKLCH Overlay */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          glowStyles.glow
        )}
      />
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";

export default memo(ThemeToggle);
