/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v17.9.60 (STABILIZED)
 * [STRATEGY]: Hydration-Safe State | GPU-Accelerated Physics | Zero-Layout Shift
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState, memo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

const ThemeToggle = () => {
  // [LOGIC]: ใช้ resolvedTheme เพื่อให้รู้ว่า System จริงๆ ตอนนี้เป็น Dark หรือ Light
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [HYDRATION_GUARD]: ป้องกันปุ่มกระพริบผิดสีตอนโหลดหน้าเว็บ
  useEffect(() => {
    setMounted(true);
  }, []);

  // [FALLBACK_UI]: แสดง Placeholder ขนาดเท่าจริงเพื่อป้องกัน Layout Shift
  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 opacity-50"
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
        "border border-white/10 bg-white/5 transition-all duration-500",
        "hover:border-brand-primary/50 hover:shadow-glow active:scale-90",
        // [PERFORMANCE]: บังคับใช้ GPU ในการวาด Animation
        "transform-gpu will-change-transform",
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 45 }}
          transition={{
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1], // Specialist "Out-Quint" Curve (นุ่มนวลและดูแพง)
          }}
          className="relative z-10"
        >
          <IconRenderer
            name={isDark ? "Moon" : "Sun"}
            size={18}
            className={isDark ? "text-brand-primary" : "text-amber-400"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Glow: แสงเรืองรองเมื่อเอาเมาส์ไปวาง */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isDark ? "bg-brand-primary/10" : "bg-amber-400/10",
        )}
      />
    </button>
  );
};

export default memo(ThemeToggle);
